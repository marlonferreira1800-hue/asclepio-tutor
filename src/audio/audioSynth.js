// Web Audio API Medical Synthesizer
// Provides realistic cardiac acoustics (S1, S2, murmurs) and ECG monitor sounds

class MedicalAudioSynthesizer {
  constructor() {
    this.ctx = null;
    this.masterGain = null;
    this.heartVolume = 0.7;
    this.ecgVolume = 0.25;
    this.isMuted = false;
    this.currentHeartRate = 72; // bpm
    this.isPlayingHeartLoop = false;
    this.heartLoopTimer = null;
    this.currentCondition = 'normal'; // 'normal', 'stenosis', 'regurgitation', 'gallop'
    this.onBeatListeners = [];
  }

  init() {
    if (this.ctx) return;
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(this.isMuted ? 0 : 1, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);
    } catch (e) {
      console.warn('Web Audio not supported:', e);
    }
  }

  ensureContext() {
    if (!this.ctx) this.init();
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  addOnBeatListener(fn) {
    this.onBeatListeners.push(fn);
  }

  // Play S1 (B1): Mitral/Tricuspid closure (tum...)
  playS1(time = null) {
    this.ensureContext();
    if (!this.ctx) return;
    const t = time || this.ctx.currentTime;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(110, t);

    osc.type = 'sine';
    osc.frequency.setValueAtTime(65, t);
    osc.frequency.exponentialRampToValueAtTime(38, t + 0.12);

    const vol = this.heartVolume * 0.9;
    gain.gain.setValueAtTime(0.001, t);
    gain.gain.linearRampToValueAtTime(vol, t + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.14);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    osc.start(t);
    osc.stop(t + 0.15);
  }

  // Play S2 (B2): Aortic/Pulmonic closure (...tá)
  playS2(time = null) {
    this.ensureContext();
    if (!this.ctx) return;
    const t = time || this.ctx.currentTime;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(160, t);

    osc.type = 'sine';
    osc.frequency.setValueAtTime(105, t);
    osc.frequency.exponentialRampToValueAtTime(55, t + 0.09);

    const vol = this.heartVolume * 0.8;
    gain.gain.setValueAtTime(0.001, t);
    gain.gain.linearRampToValueAtTime(vol, t + 0.015);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.11);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    osc.start(t);
    osc.stop(t + 0.12);
  }

  // Play Murmur (Sopro cardíaco)
  playMurmur(time, duration = 0.25, type = 'crescendo') {
    this.ensureContext();
    if (!this.ctx) return;
    const bufferSize = this.ctx.sampleRate * duration;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * 0.4;
    }

    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(320, time);
    filter.Q.setValueAtTime(2.5, time);

    const gain = this.ctx.createGain();
    const mVol = this.heartVolume * 0.55;

    if (type === 'crescendo') {
      gain.gain.setValueAtTime(0.001, time);
      gain.gain.linearRampToValueAtTime(mVol, time + duration * 0.5);
      gain.gain.linearRampToValueAtTime(0.001, time + duration);
    } else {
      // Holosystolic (plato)
      gain.gain.setValueAtTime(0.001, time);
      gain.gain.linearRampToValueAtTime(mVol, time + 0.03);
      gain.gain.setValueAtTime(mVol, time + duration - 0.03);
      gain.gain.linearRampToValueAtTime(0.001, time + duration);
    }

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    noise.start(time);
    noise.stop(time + duration);
  }

  // Play ECG Monitor Bip
  playEcgBeep(time = null) {
    this.ensureContext();
    if (!this.ctx || this.ecgVolume <= 0) return;
    const t = time || this.ctx.currentTime;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(880, t); // A5

    gain.gain.setValueAtTime(0.001, t);
    gain.gain.linearRampToValueAtTime(this.ecgVolume * 0.4, t + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.08);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(t);
    osc.stop(t + 0.09);
  }

  // Single synchronized heart cycle (B1 -> B2 -> ECG)
  triggerHeartBeat() {
    this.ensureContext();
    if (!this.ctx) return;
    const t = this.ctx.currentTime;

    // ECG QRS spike synchronized with ventricular systole (B1)
    this.playEcgBeep(t);

    // S1 (Mitral/Tricuspid)
    this.playS1(t + 0.02);

    // S2 occurs ~0.3s later during 72bpm cycle (end of systole)
    const s2Delay = Math.max(0.2, (60 / this.currentHeartRate) * 0.35);

    if (this.currentCondition === 'stenosis') {
      // Sopro mesossistólico em diamante entre S1 e S2
      this.playMurmur(t + 0.07, s2Delay - 0.08, 'crescendo');
    } else if (this.currentCondition === 'regurgitation') {
      // Sopro holossistólico
      this.playMurmur(t + 0.04, s2Delay - 0.02, 'plateau');
    }

    this.playS2(t + s2Delay);

    // Notify visual listeners (heart mesh contraction, particles, board ECG)
    this.onBeatListeners.forEach(cb => {
      try { cb({ timestamp: t, hr: this.currentHeartRate, s2Delay }); } catch (e) {}
    });
  }

  // Start continuous rhythmic heartbeat
  startHeartLoop(bpm = 72, condition = 'normal') {
    this.currentHeartRate = bpm;
    this.currentCondition = condition;
    this.isPlayingHeartLoop = true;

    if (this.heartLoopTimer) clearInterval(this.heartLoopTimer);

    const intervalMs = (60 / this.currentHeartRate) * 1000;
    this.triggerHeartBeat();
    this.heartLoopTimer = setInterval(() => {
      if (this.isPlayingHeartLoop) {
        this.triggerHeartBeat();
      }
    }, intervalMs);
  }

  stopHeartLoop() {
    this.isPlayingHeartLoop = false;
    if (this.heartLoopTimer) {
      clearInterval(this.heartLoopTimer);
      this.heartLoopTimer = null;
    }
  }

  setMuted(muted) {
    this.isMuted = muted;
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setValueAtTime(muted ? 0 : 1, this.ctx.currentTime);
    }
  }

  setHeartVolume(vol) {
    this.heartVolume = Math.max(0, Math.min(1, vol));
  }

  setEcgVolume(vol) {
    this.ecgVolume = Math.max(0, Math.min(1, vol));
  }
}

export const medicalAudio = new MedicalAudioSynthesizer();

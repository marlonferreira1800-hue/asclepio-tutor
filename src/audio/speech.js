// Speech Engine for MedTutor 3D
// Handles TTS with lip-sync visemes and STT with Brazilian Portuguese

export class SpeechEngine {
  constructor() {
    this.synth = window.speechSynthesis;
    this.voices = [];
    this.selectedVoice = null;
    this.isSpeaking = false;
    this.isListening = false;
    this.muted = false;
    this.speechRate = 1.0;
    this.speechPitch = 1.0;
    this.recognition = null;
    this.mouthCallback = null;
    this.subtitleCallback = null;
    this.speechEndCallback = null;
    this.simulatedLipInterval = null;

    this.initVoices();
    this.initRecognition();
  }

  initVoices() {
    if (!this.synth) return;
    const updateVoices = () => {
      this.voices = this.synth.getVoices();
      // Prefer Portuguese (pt-BR)
      const ptBr = this.voices.filter(v => v.lang.includes('pt-BR') || v.lang.includes('pt_BR') || v.lang.includes('pt'));
      if (ptBr.length > 0) {
        // Look for Google Português do Brasil or Luciana/Felipe or Microsoft Daniel/Maria
        this.selectedVoice = ptBr[0];
      } else if (this.voices.length > 0) {
        this.selectedVoice = this.voices[0];
      }
    };

    updateVoices();
    if (this.synth.onvoiceschanged !== undefined) {
      this.synth.onvoiceschanged = updateVoices;
    }
  }

  getAvailableVoices() {
    return this.voices.filter(v => v.lang.includes('pt') || v.lang.includes('es') || v.lang.includes('en'));
  }

  setVoiceByGender(gender = 'male') {
    const ptVoices = this.voices.filter(v => v.lang.includes('pt'));
    if (gender === 'female') {
      const female = ptVoices.find(v => /female|maria|luciana|francisca|vitória|helena|zira/i.test(v.name));
      if (female) this.selectedVoice = female;
    } else {
      const male = ptVoices.find(v => /male|daniel|felipe|ricardo|antônio|david/i.test(v.name));
      if (male) this.selectedVoice = male;
      else if (ptVoices.length > 0) this.selectedVoice = ptVoices[0];
    }
  }

  initRecognition() {
    const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRec) {
      console.warn('Speech Recognition not supported in this browser.');
      return;
    }

    try {
      this.recognition = new SpeechRec();
      this.recognition.lang = 'pt-BR';
      this.recognition.continuous = false;
      this.recognition.interimResults = true;
      this.recognition.maxAlternatives = 1;
    } catch (e) {
      console.warn('Failed to initialize Speech Recognition:', e);
    }
  }

  onMouthUpdate(fn) {
    this.mouthCallback = fn;
  }

  onSubtitle(fn) {
    this.subtitleCallback = fn;
  }

  onSpeechEnd(fn) {
    this.speechEndCallback = fn;
  }

  // Speak text with lip sync and synchronized subtitles
  speak(text, onComplete = null) {
    if (!text || this.muted || !this.synth) {
      if (this.subtitleCallback) this.subtitleCallback(text, false);
      if (onComplete) onComplete();
      return;
    }

    // Stop current speech
    this.stopSpeaking();

    // Clean text for speech (remove markdown symbols)
    const cleanText = text
      .replace(/[*_#`~]/g, '')
      .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
      .replace(/https?:\/\/\S+/g, '');

    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = 'pt-BR';
    if (this.selectedVoice) {
      utterance.voice = this.selectedVoice;
    }
    utterance.rate = this.speechRate;
    utterance.pitch = this.speechPitch;

    this.isSpeaking = true;
    if (this.subtitleCallback) this.subtitleCallback(text, true);

    // Realistic procedural phoneme / mouth rhythm simulator during speech
    this.startSimulatedLipSync();

    // Word boundary tracking for subtitles
    utterance.onboundary = (event) => {
      if (event.name === 'word') {
        const spokenWord = cleanText.substring(event.charIndex, event.charIndex + (event.charLength || 6));
        // Quick mouth emphasis on vowels
        if (/[aeiouáéíóúãõâêô]/i.test(spokenWord)) {
          if (this.mouthCallback) this.mouthCallback(0.65 + Math.random() * 0.35);
        }
      }
    };

    utterance.onend = () => {
      this.stopSpeaking();
      if (this.subtitleCallback) this.subtitleCallback(text, false);
      if (this.speechEndCallback) this.speechEndCallback();
      if (onComplete) onComplete();
    };

    utterance.onerror = (e) => {
      console.warn('TTS error:', e);
      this.stopSpeaking();
      if (this.subtitleCallback) this.subtitleCallback(text, false);
      if (onComplete) onComplete();
    };

    this.synth.speak(utterance);
  }

  startSimulatedLipSync() {
    if (this.simulatedLipInterval) clearInterval(this.simulatedLipInterval);
    let step = 0;
    this.simulatedLipInterval = setInterval(() => {
      if (!this.isSpeaking) {
        clearInterval(this.simulatedLipInterval);
        if (this.mouthCallback) this.mouthCallback(0);
        return;
      }
      step++;
      // Natural oscillating mouth opening with subtle randomness
      const baseWave = Math.sin(step * 0.7) * 0.5 + 0.5;
      const jitter = (Math.random() - 0.5) * 0.2;
      const mouthOpen = Math.max(0, Math.min(1, baseWave * 0.7 + jitter));
      if (this.mouthCallback) this.mouthCallback(mouthOpen);
    }, 70);
  }

  stopSpeaking() {
    this.isSpeaking = false;
    if (this.synth) this.synth.cancel();
    if (this.simulatedLipInterval) {
      clearInterval(this.simulatedLipInterval);
      this.simulatedLipInterval = null;
    }
    if (this.mouthCallback) this.mouthCallback(0);
  }

  // Voice input recognition
  startListening(onResult, onStatusChange) {
    if (!this.recognition) {
      this.initRecognition();
      if (!this.recognition) {
        if (onStatusChange) onStatusChange('not_supported');
        return;
      }
    }

    try {
      this.isListening = true;
      if (onStatusChange) onStatusChange('listening');

      this.recognition.onresult = (event) => {
        let interimTranscript = '';
        let finalTranscript = '';

        for (let i = event.resultIndex; i < event.results.length; ++i) {
          if (event.results[i].isFinal) {
            finalTranscript += event.results[i][0].transcript;
          } else {
            interimTranscript += event.results[i][0].transcript;
          }
        }

        if (onResult) {
          onResult({
            interim: interimTranscript,
            final: finalTranscript,
            confidence: event.results[0] ? event.results[0][0].confidence : 0.9
          });
        }
      };

      this.recognition.onerror = (event) => {
        console.warn('SpeechRec error:', event.error);
        this.isListening = false;
        if (onStatusChange) onStatusChange('error', event.error);
      };

      this.recognition.onend = () => {
        this.isListening = false;
        if (onStatusChange) onStatusChange('ended');
      };

      this.recognition.start();
    } catch (e) {
      console.warn('Could not start recognition:', e);
      this.isListening = false;
      if (onStatusChange) onStatusChange('error', e);
    }
  }

  stopListening() {
    if (this.recognition && this.isListening) {
      try {
        this.recognition.stop();
      } catch (e) {}
    }
    this.isListening = false;
  }
}

export const speechEngine = new SpeechEngine();

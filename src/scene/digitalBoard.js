import * as THREE from 'three';

// Dynamic Smartboard Canvas Texture
// Renders live slides, moving ECG traces, bullet points, and anatomical diagrams onto 3D screen mesh

export class DigitalBoard {
  constructor() {
    this.canvas = document.createElement('canvas');
    this.canvas.width = 1920;
    this.canvas.height = 1080;
    this.ctx = this.canvas.getContext('2d');

    this.texture = new THREE.CanvasTexture(this.canvas);
    this.texture.generateMipmaps = true;
    this.texture.minFilter = THREE.LinearMipmapLinearFilter;

    // ECG wave parameters
    this.ecgOffset = 0;
    this.ecgPoints = [];
    this.initEcgData();

    // Content state
    this.currentData = {
      heading: 'MedTutor 3D - Sistema Cardiovascular',
      badge: 'Cardiologia & Semiologia',
      points: [
        'Bem-vindo à plataforma de Educação Médica 3D!',
        'Explore a anatomia tridimensional do coração ao vivo.',
        'Aprenda o ciclo cardíaco com áudio real de ausculta e traçado de ECG.',
        'Converse com o Dr. Asclépio por texto ou voz em português.'
      ],
      diagram: 'circulatory_circuit',
      clinicalNote: 'Esta plataforma possui finalidade exclusivamente educacional.'
    };

    this.mesh = null;
    this.createMesh();
    this.redraw();
  }

  initEcgData() {
    // Generate a standard single P-QRS-T cycle pattern over 100 samples
    const pattern = [];
    for (let i = 0; i < 100; i++) {
      if (i < 15) pattern.push(0); // baseline
      else if (i < 30) {
        // P-wave (atrial depolarization)
        const t = (i - 15) / 15;
        pattern.push(Math.sin(t * Math.PI) * 18);
      } else if (i < 42) {
        pattern.push(0); // PR segment
      } else if (i < 46) {
        // Q-wave (septal depolarization)
        pattern.push(-14);
      } else if (i < 52) {
        // R-wave (ventricular peak)
        pattern.push(85);
      } else if (i < 56) {
        // S-wave
        pattern.push(-28);
      } else if (i < 68) {
        pattern.push(0); // ST segment
      } else if (i < 88) {
        // T-wave (ventricular repolarization)
        const t = (i - 68) / 20;
        pattern.push(Math.sin(t * Math.PI) * 26);
      } else {
        pattern.push(0); // TP baseline
      }
    }
    this.ecgBasePattern = pattern;
  }

  createMesh() {
    const width = 4.2;
    const height = 2.36; // 16:9 ratio

    const geometry = new THREE.PlaneGeometry(width, height);
    const material = new THREE.MeshStandardMaterial({
      map: this.texture,
      roughness: 0.35,
      metalness: 0.1,
      emissive: new THREE.Color(0x0a192f),
      emissiveMap: this.texture,
      emissiveIntensity: 0.25
    });

    this.screenMesh = new THREE.Mesh(geometry, material);

    // Modern frame with dark titanium and subtle cyan glowing edge
    const frameGeo = new THREE.BoxGeometry(width + 0.1, height + 0.1, 0.06);
    const frameMat = new THREE.MeshStandardMaterial({
      color: 0x0b1320,
      roughness: 0.4,
      metalness: 0.8
    });
    const frame = new THREE.Mesh(frameGeo, frameMat);
    frame.position.z = -0.035;

    // Glowing border strip
    const glowGeo = new THREE.BoxGeometry(width + 0.12, height + 0.12, 0.02);
    const glowMat = new THREE.MeshBasicMaterial({
      color: 0x00e5ff,
      wireframe: true
    });
    const glowBorder = new THREE.Mesh(glowGeo, glowMat);
    glowBorder.position.z = -0.045;

    this.mesh = new THREE.Group();
    this.mesh.add(frame);
    this.mesh.add(glowBorder);
    this.mesh.add(this.screenMesh);
  }

  updateContent(data) {
    this.currentData = { ...this.currentData, ...data };
    this.redraw();
  }

  update(delta) {
    // Advance ECG trace
    this.ecgOffset += delta * 120;
    this.drawEcgStrip();
  }

  redraw() {
    const ctx = this.ctx;
    const w = this.canvas.width;
    const h = this.canvas.height;

    // Background gradient (Deep Dark Medical Slate/Navy)
    const bgGrad = ctx.createLinearGradient(0, 0, w, h);
    bgGrad.addColorStop(0, '#06101e');
    bgGrad.addColorStop(0.5, '#0a1728');
    bgGrad.addColorStop(1, '#050c18');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, w, h);

    // Grid pattern for medical monitor feel
    ctx.strokeStyle = 'rgba(0, 229, 255, 0.04)';
    ctx.lineWidth = 1;
    for (let x = 0; x < w; x += 40) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, h);
      ctx.stroke();
    }
    for (let y = 0; y < h; y += 40) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(w, y);
      ctx.stroke();
    }

    // Top Header Bar
    ctx.fillStyle = 'rgba(0, 229, 255, 0.08)';
    ctx.fillRect(0, 0, w, 110);

    // Accent line
    ctx.fillStyle = '#00e5ff';
    ctx.fillRect(0, 108, w, 3);

    // Hospital / Faculty logo icon & badge
    ctx.fillStyle = '#00e5ff';
    ctx.font = 'bold 36px "Inter", "Segoe UI", sans-serif';
    ctx.fillText('MEDTUTOR 3D', 70, 70);

    // Badge
    ctx.fillStyle = 'rgba(0, 229, 255, 0.18)';
    ctx.beginPath();
    ctx.roundRect(380, 36, 320, 48, 8);
    ctx.fill();
    ctx.fillStyle = '#38bdf8';
    ctx.font = '600 22px "Inter", sans-serif';
    ctx.fillText(this.currentData.badge || 'Educação Médica', 398, 68);

    // Real-time status in corner
    ctx.fillStyle = '#10b981';
    ctx.beginPath();
    ctx.arc(w - 240, 60, 8, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#94a3b8';
    ctx.font = '500 20px "Inter", sans-serif';
    ctx.fillText('SISTEMA ATIVO (72 BPM)', w - 215, 66);

    // Main Slide Heading
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 52px "Inter", "Segoe UI", sans-serif';
    ctx.fillText(this.currentData.heading, 70, 200);

    // Content Bullet Points (Left Column)
    const points = this.currentData.points || [];
    let curY = 280;
    const colWidth = 1100;

    points.forEach((pt, idx) => {
      // Glow bullet dot
      ctx.fillStyle = '#00e5ff';
      ctx.beginPath();
      ctx.arc(85, curY - 14, 7, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#e2e8f0';
      ctx.font = '400 30px "Inter", "Segoe UI", sans-serif';

      // Multi-line word wrap
      const words = pt.split(' ');
      let line = '';
      for (let n = 0; n < words.length; n++) {
        const testLine = line + words[n] + ' ';
        const metrics = ctx.measureText(testLine);
        if (metrics.width > colWidth && n > 0) {
          ctx.fillText(line, 115, curY);
          line = words[n] + ' ';
          curY += 44;
        } else {
          line = testLine;
        }
      }
      ctx.fillText(line, 115, curY);
      curY += 56;
    });

    // Clinical Pearl / Note Card (Bottom Left)
    if (this.currentData.clinicalNote) {
      const cardY = Math.max(curY + 20, 650);
      ctx.fillStyle = 'rgba(239, 68, 68, 0.1)';
      ctx.strokeStyle = 'rgba(239, 68, 68, 0.4)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.roundRect(70, cardY, colWidth + 50, 140, 12);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = '#ef4444';
      ctx.font = 'bold 24px "Inter", sans-serif';
      ctx.fillText('⚠️ PÉROLA CLÍNICA & RELEVÂNCIA PRÁTICA', 100, cardY + 42);

      ctx.fillStyle = '#fecaca';
      ctx.font = '400 24px "Inter", sans-serif';
      this.wrapText(this.currentData.clinicalNote, 100, cardY + 80, colWidth, 32);
    }

    // Right Column: Live Electrocardiogram (ECG) and Metrics Dashboard
    this.drawRightDashboard(ctx, w, h);

    this.texture.needsUpdate = true;
  }

  drawRightDashboard(ctx, w, h) {
    const rx = 1260;
    const rw = 590;

    // ECG Panel Container
    ctx.fillStyle = 'rgba(11, 23, 40, 0.75)';
    ctx.strokeStyle = 'rgba(0, 229, 255, 0.3)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.roundRect(rx, 150, rw, 340, 16);
    ctx.fill();
    ctx.stroke();

    // ECG Label
    ctx.fillStyle = '#38bdf8';
    ctx.font = 'bold 22px "Inter", sans-serif';
    ctx.fillText('MONITOR CARDÍACO - DERIVAÇÃO DII', rx + 30, 195);

    ctx.fillStyle = '#00e5ff';
    ctx.font = 'bold 36px "Inter", sans-serif';
    ctx.fillText('72', rx + rw - 130, 200);
    ctx.font = '500 18px "Inter", sans-serif';
    ctx.fillStyle = '#94a3b8';
    ctx.fillText('BPM', rx + rw - 70, 200);

    // ECG Grid background inside box
    const ecgBoxY = 220;
    const ecgBoxH = 240;
    ctx.fillStyle = '#030811';
    ctx.fillRect(rx + 20, ecgBoxY, rw - 40, ecgBoxH);

    ctx.strokeStyle = 'rgba(0, 229, 255, 0.12)';
    ctx.lineWidth = 1;
    for (let x = rx + 20; x < rx + rw - 20; x += 25) {
      ctx.beginPath();
      ctx.moveTo(x, ecgBoxY);
      ctx.lineTo(x, ecgBoxY + ecgBoxH);
      ctx.stroke();
    }
    for (let y = ecgBoxY; y < ecgBoxY + ecgBoxH; y += 25) {
      ctx.beginPath();
      ctx.moveTo(rx + 20, y);
      ctx.lineTo(rx + rw - 20, y);
      ctx.stroke();
    }

    // Save area clip for ECG wave
    ctx.save();
    ctx.beginPath();
    ctx.rect(rx + 20, ecgBoxY, rw - 40, ecgBoxH);
    ctx.clip();

    // Draw active moving ECG waveform
    ctx.strokeStyle = '#00ff88';
    ctx.lineWidth = 3.5;
    ctx.shadowColor = '#00ff88';
    ctx.shadowBlur = 12;
    ctx.beginPath();

    const baselineY = ecgBoxY + ecgBoxH * 0.65;
    const waveW = rw - 40;
    const patternLen = this.ecgBasePattern.length;

    for (let px = 0; px < waveW; px += 3) {
      const sampleIdx = Math.floor((px + this.ecgOffset) % (patternLen * 3));
      let val = 0;
      if (sampleIdx < patternLen) {
        val = this.ecgBasePattern[sampleIdx];
      }
      const py = baselineY - val;
      if (px === 0) ctx.moveTo(rx + 20 + px, py);
      else ctx.lineTo(rx + 20 + px, py);
    }
    ctx.stroke();
    ctx.restore();

    // Metrics mini-cards (PA, SpO2, Débito Cardíaco)
    const metricsY = 520;
    const metricCards = [
      { label: 'PRESSÃO ARTERIAL', val: '120/80', unit: 'mmHg', color: '#38bdf8' },
      { label: 'OXIMETRIA (SpO2)', val: '99%', unit: 'Ar amb.', color: '#34d399' },
      { label: 'DÉBITO CARDÍACO', val: '5.2', unit: 'L/min', color: '#fbbf24' }
    ];

    metricCards.forEach((c, idx) => {
      const cx = rx + (idx * 195);
      ctx.fillStyle = 'rgba(15, 23, 42, 0.8)';
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
      ctx.beginPath();
      ctx.roundRect(cx, metricsY, 185, 120, 12);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = '#94a3b8';
      ctx.font = '600 13px "Inter", sans-serif';
      ctx.fillText(c.label, cx + 15, metricsY + 30);

      ctx.fillStyle = c.color;
      ctx.font = 'bold 32px "Inter", sans-serif';
      ctx.fillText(c.val, cx + 15, metricsY + 75);

      ctx.fillStyle = '#64748b';
      ctx.font = '500 15px "Inter", sans-serif';
      ctx.fillText(c.unit, cx + 15, metricsY + 102);
    });

    // Anatomical Summary Box
    const summaryY = 670;
    ctx.fillStyle = 'rgba(15, 23, 42, 0.8)';
    ctx.strokeStyle = 'rgba(0, 229, 255, 0.2)';
    ctx.beginPath();
    ctx.roundRect(rx, summaryY, rw, 280, 16);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = '#38bdf8';
    ctx.font = 'bold 22px "Inter", sans-serif';
    ctx.fillText('DIAGNÓSTICO & CORRELAÇÃO ANATÔMICA', rx + 25, summaryY + 45);

    const items = [
      '• Átrio Direito: Vena Cava Sup/Inf e Seio Coronário',
      '• Ventrículo Esquerdo: Miocárdio espesso (pós-carga)',
      '• Valvas AV: Mitral (bicúspide) & Tricúspide',
      '• Valvas Semilunares: Aórtica & Pulmonar (ninho de pombo)',
      '• Marca-passo Fisiológico: Nó Sinoatrial (60-100 bpm)'
    ];

    ctx.fillStyle = '#cbd5e1';
    ctx.font = '400 20px "Inter", sans-serif';
    items.forEach((item, i) => {
      ctx.fillText(item, rx + 25, summaryY + 90 + i * 36);
    });
  }

  drawEcgStrip() {
    // Redraw dynamically for 60fps ECG animation
    this.redraw();
  }

  wrapText(text, x, y, maxWidth, lineHeight) {
    const ctx = this.ctx;
    const words = text.split(' ');
    let line = '';
    let curY = y;
    for (let n = 0; n < words.length; n++) {
      const testLine = line + words[n] + ' ';
      const metrics = ctx.measureText(testLine);
      if (metrics.width > maxWidth && n > 0) {
        ctx.fillText(line, x, curY);
        line = words[n] + ' ';
        curY += lineHeight;
      } else {
        line = testLine;
      }
    }
    ctx.fillText(line, x, curY);
  }
}

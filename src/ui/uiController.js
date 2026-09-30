import { Icons } from '../icons.js';
import { Disciplines } from '../medical/disciplines.js';
import { CardiologyCurriculum } from '../medical/cardiologyCurriculum.js';
import { ClinicalCases } from '../medical/clinicalCases.js';
import { AnamnesisTrainingData } from '../medical/anamnesisTraining.js';
import { AuscultationFoci } from '../medical/auscultationExam.js';
import { OralQuizQuestions, ExamSimuladoQuestions } from '../medical/questionBank.js';
import { tutorBrain } from '../ai/tutorBrain.js';
import { speechEngine } from '../audio/speech.js';
import { medicalAudio } from '../audio/audioSynth.js';
import confetti from 'canvas-confetti';

export class UIController {
  constructor(sceneManager) {
    this.sceneManager = sceneManager;

    this.currentMode = 'guided'; // 'guided', 'private', 'case', 'anamnesis', 'auscultation', 'oral_quiz', 'simulado'
    this.currentCurriculumIndex = 0;
    this.currentCaseIndex = 0;
    this.currentCaseStage = 0;
    this.currentQuizIndex = 0;
    this.currentSimuladoIndex = 0;
    this.currentAnamnesisNode = 'start';

    this.isMuted = false;
    this.isListening = false;

    this.initIcons();
    this.bindEvents();
    this.initAudioSync();

    // Start with the first module of the masterclass
    this.loadCurriculumModule(0);
  }

  initIcons() {
    // Populate static icons
    const logoEl = document.getElementById('logo-icon');
    if (logoEl) logoEl.innerHTML = Icons.heart;

    const micEl = document.getElementById('mic-icon-container');
    if (micEl) micEl.innerHTML = Icons.mic;

    const audioEl = document.getElementById('audio-icon-container');
    if (audioEl) audioEl.innerHTML = Icons.volume2;

    // Populate data-icon spans
    document.querySelectorAll('.btn-icon[data-icon]').forEach(el => {
      const name = el.getAttribute('data-icon');
      if (Icons[name]) el.innerHTML = Icons[name];
    });
  }

  bindEvents() {
    // 1. Study Modes Nav
    const modeBtns = document.querySelectorAll('.mode-btn');
    modeBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        modeBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const mode = btn.getAttribute('data-mode');
        this.switchMode(mode);
      });
    });

    // 2. Camera Angle Presets
    const camBtns = document.querySelectorAll('.tool-btn[data-cam]');
    camBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        camBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const cam = btn.getAttribute('data-cam');
        this.sceneManager.setCameraPreset(cam);
      });
    });

    // 3. 3D Heart Inspection Toggles
    const cutawayBtn = document.getElementById('toggle-cutaway-btn');
    cutawayBtn?.addEventListener('click', () => {
      const active = this.sceneManager.heartModel.toggleCutaway();
      cutawayBtn.classList.toggle('active', active);
    });

    const bloodBtn = document.getElementById('toggle-blood-btn');
    bloodBtn?.addEventListener('click', () => {
      const isVisible = !this.sceneManager.bloodFlow.active;
      this.sceneManager.bloodFlow.setActive(isVisible);
      bloodBtn.classList.toggle('active', isVisible);
    });

    const conductionBtn = document.getElementById('toggle-conduction-btn');
    conductionBtn?.addEventListener('click', () => {
      const isActive = conductionBtn.classList.toggle('active');
      this.sceneManager.heartModel.highlightPart(isActive ? 'conduction' : null);
    });

    const heartbeatBtn = document.getElementById('toggle-heartbeat-btn');
    heartbeatBtn?.addEventListener('click', () => {
      const isLoop = !medicalAudio.isPlayingHeartLoop;
      if (isLoop) {
        medicalAudio.startHeartLoop(72, 'normal');
        heartbeatBtn.classList.add('active');
      } else {
        medicalAudio.stopHeartLoop();
        heartbeatBtn.classList.remove('active');
      }
    });

    // 4. Audio Master Mute Toggle
    const audioToggleBtn = document.getElementById('audio-toggle-btn');
    audioToggleBtn?.addEventListener('click', () => {
      this.isMuted = !this.isMuted;
      speechEngine.muted = this.isMuted;
      medicalAudio.setMuted(this.isMuted);
      audioToggleBtn.classList.toggle('active', !this.isMuted);
      const audioIcon = document.getElementById('audio-icon-container');
      if (audioIcon) {
        audioIcon.innerHTML = this.isMuted ? Icons.volumeX : Icons.volume2;
      }
      if (this.isMuted) {
        speechEngine.stopSpeaking();
      }
    });

    // 5. Chat Input & Send Button
    const chatInput = document.getElementById('chat-input');
    const sendBtn = document.getElementById('send-btn');

    const handleSend = () => {
      const text = chatInput.value.trim();
      if (!text) return;
      chatInput.value = '';
      this.handleUserQuestion(text);
    };

    sendBtn?.addEventListener('click', handleSend);
    chatInput?.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') handleSend();
    });

    // 6. Microphone (Speech Recognition STT)
    const micBtn = document.getElementById('mic-btn');
    micBtn?.addEventListener('click', () => {
      if (this.isListening) {
        speechEngine.stopListening();
        this.setMicListening(false);
      } else {
        medicalAudio.ensureContext();
        this.setMicListening(true);
        speechEngine.startListening(
          (result) => {
            if (result.final) {
              chatInput.value = result.final;
              this.setMicListening(false);
              this.handleUserQuestion(result.final);
            } else if (result.interim) {
              chatInput.value = result.interim;
            }
          },
          (status) => {
            if (status === 'ended' || status === 'error') {
              this.setMicListening(false);
            }
          }
        );
      }
    });

    // 7. Socratic Quick Action Chips
    document.getElementById('chip-dont-understand')?.addEventListener('click', () => {
      this.handleUserQuestion('Não entendi, você pode simplificar usando a Técnica de Feynman?');
    });

    document.getElementById('chip-ask-question')?.addEventListener('click', () => {
      this.handleUserQuestion('Pode me fazer uma pergunta socrática sobre o que acabamos de ver?');
    });

    document.getElementById('chip-show-3d')?.addEventListener('click', () => {
      this.sceneManager.setCameraPreset('heart');
      this.sceneManager.heartModel.highlightPart('conduction');
      this.handleUserQuestion('Mostre os detalhes anatômicos em 3D do coração e das valvas');
    });

    document.getElementById('chip-clinical-example')?.addEventListener('click', () => {
      this.handleUserQuestion('Qual é o exemplo clínico prático desse conceito na beira do leito?');
    });

    document.getElementById('chip-next-step')?.addEventListener('click', () => {
      this.nextCurriculumStep();
    });

    // 8. Drawer Toggles (Disciplines Menu)
    document.getElementById('disciplines-btn')?.addEventListener('click', () => {
      this.openDisciplinesDrawer();
    });

    document.getElementById('drawer-close-btn')?.addEventListener('click', () => {
      this.closeDrawer();
    });

    // 9. Settings Modal
    const settingsDialog = document.getElementById('settings-dialog');
    document.getElementById('settings-btn')?.addEventListener('click', () => {
      if (settingsDialog) settingsDialog.style.display = 'flex';
    });

    document.getElementById('settings-close-btn')?.addEventListener('click', () => {
      if (settingsDialog) settingsDialog.style.display = 'none';
    });

    // Avatar Selection Cards inside modal
    document.querySelectorAll('.avatar-pick-card').forEach(card => {
      card.addEventListener('click', () => {
        document.querySelectorAll('.avatar-pick-card').forEach(c => c.classList.remove('active'));
        card.classList.add('active');
        const avatarId = card.getAttribute('data-avatar');
        this.sceneManager.loadAvatar(avatarId);
        speechEngine.setVoiceByGender(avatarId === 'sofia' ? 'female' : 'male');
        const names = { asclepio: 'Dr. Asclépio', sofia: 'Dra. Sofia Mendes', lucas: 'Dr. Lucas Rocha' };
        tutorBrain.setTutorPersona({ name: names[avatarId] || 'Professor' });
        this.updateSubtitle(names[avatarId] || 'Professor', `Olá! Sou seu professor ${names[avatarId]}. Em que posso te guiar hoje?`, true);
      });
    });

    // Academic Level Selector
    const levelSelect = document.getElementById('academic-level-select');
    levelSelect?.addEventListener('change', (e) => {
      const lvl = e.target.value;
      tutorBrain.setStudentInfo(tutorBrain.studentName, lvl);
      document.getElementById('student-level-label').textContent = lvl;
    });

    document.getElementById('level-btn')?.addEventListener('click', () => {
      const levels = ['Ciclo Básico', 'Ciclo Clínico', 'Internato', 'Residência'];
      const curIdx = levels.indexOf(tutorBrain.studentLevel);
      const nextLvl = levels[(curIdx + 1) % levels.length];
      tutorBrain.setStudentInfo(tutorBrain.studentName, nextLvl);
      document.getElementById('student-level-label').textContent = nextLvl;
      if (levelSelect) levelSelect.value = nextLvl;
      this.speakTutor(`Excelente! Adaptei o nível da aula para o ${nextLvl}. Vamos focar nos objetivos específicos desta etapa.`);
    });
  }

  initAudioSync() {
    // Sync visemes with mouth mesh
    speechEngine.onMouthUpdate((openness) => {
      if (this.sceneManager.avatarModel) {
        this.sceneManager.avatarModel.setMouthOpen(openness);
      }
    });

    // Subtitle callback
    speechEngine.onSubtitle((text, isSpeaking) => {
      const wave = document.getElementById('speaking-wave');
      if (wave) wave.style.display = isSpeaking ? 'flex' : 'none';
      if (text) {
        document.getElementById('subtitle-text').textContent = text;
      }
    });

    // Audio beat callback: pulse heart & play ECG sound
    medicalAudio.addOnBeatListener(({ s2Delay }) => {
      // Trigger subtle pulse in UI if needed
    });
  }

  setMicListening(listening) {
    this.isListening = listening;
    const micBtn = document.getElementById('mic-btn');
    const micIcon = document.getElementById('mic-icon-container');
    if (micBtn) {
      micBtn.classList.toggle('listening', listening);
    }
    if (micIcon) {
      micIcon.innerHTML = listening ? Icons.micOff : Icons.mic;
    }
  }

  speakTutor(text, gesture = 'gestureExplain1', onComplete = null) {
    if (this.sceneManager.avatarController) {
      this.sceneManager.avatarController.setGesture(gesture);
    }
    this.updateSubtitle(tutorBrain.tutorPersona.name, text, true);
    speechEngine.speak(text, () => {
      if (this.sceneManager.avatarController) {
        this.sceneManager.avatarController.setGesture('idle');
      }
      if (onComplete) onComplete();
    });
  }

  updateSubtitle(speaker, text, isSpeaking = false) {
    document.getElementById('subtitle-speaker').textContent = speaker;
    document.getElementById('subtitle-avatar').textContent = speaker.substring(0, 2);
    document.getElementById('subtitle-text').textContent = text;
    const wave = document.getElementById('speaking-wave');
    if (wave) wave.style.display = isSpeaking ? 'flex' : 'none';
  }

  handleUserQuestion(query) {
    medicalAudio.ensureContext();
    const res = tutorBrain.generateResponse(query);

    // Apply focus action
    if (res.focus3D) {
      this.sceneManager.heartModel.highlightPart(res.focus3D);
      if (res.focus3D === 'cross_section') {
        this.sceneManager.heartModel.setCutawayView(true);
        document.getElementById('toggle-cutaway-btn')?.classList.add('active');
      }
    }

    if (res.action === 'focus_3d') {
      this.sceneManager.setCameraPreset('heart');
    } else if (res.action === 'show_ecg') {
      this.sceneManager.setCameraPreset('board');
    }

    this.speakTutor(res.text, res.gesture || 'gestureExplain1');
  }

  // =========================================================================
  // Mode Switching
  // =========================================================================
  switchMode(mode) {
    this.currentMode = mode;
    this.closeDrawer();

    switch (mode) {
      case 'guided':
        this.loadCurriculumModule(this.currentCurriculumIndex);
        break;
      case 'private':
        this.openPrivateTutoring();
        break;
      case 'case':
        this.openClinicalCase(0);
        break;
      case 'anamnesis':
        this.openAnamnesisTraining();
        break;
      case 'auscultation':
        this.openAuscultationExam();
        break;
      case 'oral_quiz':
        this.openOralQuiz(0);
        break;
      case 'simulado':
        this.openSimulado(0);
        break;
    }
  }

  // =========================================================================
  // 1. Guided Masterclass (Sistema Cardiovascular)
  // =========================================================================
  loadCurriculumModule(index) {
    const modules = CardiologyCurriculum.modules;
    if (index < 0 || index >= modules.length) return;
    this.currentCurriculumIndex = index;
    const mod = modules[index];

    // Update Digital Smartboard on wall
    this.sceneManager.digitalBoard.updateContent(mod.board);

    // Update 3D Heart highlighting
    this.sceneManager.heartModel.highlightPart(mod.heartFocus);
    if (mod.heartFocus === 'cross_section') {
      this.sceneManager.heartModel.setCutawayView(true);
      document.getElementById('toggle-cutaway-btn')?.classList.add('active');
    } else {
      this.sceneManager.heartModel.setCutawayView(false);
      document.getElementById('toggle-cutaway-btn')?.classList.remove('active');
    }

    // Camera view smoothly points towards the board & tutor
    this.sceneManager.setCameraPreset('room');

    // Tutor speaks lesson
    this.speakTutor(mod.tutorSpeech, 'gestureExplain1');

    // Open Drawer showing all 5 steps with check question
    this.openDrawer('Aula Guiada: Cardiovascular', Icons.bookOpen, () => {
      let html = `<div style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 12px;">
        Módulo ${mod.number} de ${modules.length} • <strong>${mod.title}</strong>
      </div>`;

      modules.forEach((m, idx) => {
        const isActive = idx === this.currentCurriculumIndex;
        html += `
          <div class="curriculum-step-card ${isActive ? 'active' : ''}" data-step="${idx}">
            <span class="step-badge">Etapa ${m.number}</span>
            <div class="step-title">${m.title}</div>
            <div class="step-subtitle">${m.subtitle}</div>
          </div>
        `;
      });

      // Socratic Check Question Card
      html += `
        <div style="margin-top: 16px; padding: 14px; border-radius: 12px; background: rgba(0, 229, 255, 0.08); border: 1px solid var(--border-glass);">
          <div style="font-weight: 700; color: var(--cyan-primary); font-size: 0.88rem; margin-bottom: 8px;">
            🤔 Pergunta Socrática de Fixação:
          </div>
          <div style="font-size: 0.85rem; line-height: 1.4; margin-bottom: 12px;">
            ${mod.checkQuestion.question}
          </div>
          <div id="check-options" style="display: flex; flex-direction: column; gap: 8px;">
            ${mod.checkQuestion.options.map((opt, optIdx) => `
              <button class="toggle-switch-btn" style="text-align: left; padding: 10px;" data-opt="${optIdx}">
                <span>${opt}</span>
              </button>
            `).join('')}
          </div>
          <div id="check-feedback" style="display: none; margin-top: 10px; font-size: 0.82rem; padding: 10px; border-radius: 8px;"></div>
        </div>
      `;

      return html;
    });

    // Bind step cards and options in drawer
    setTimeout(() => {
      document.querySelectorAll('.curriculum-step-card').forEach(card => {
        card.addEventListener('click', () => {
          const s = parseInt(card.getAttribute('data-step'), 10);
          this.loadCurriculumModule(s);
        });
      });

      document.querySelectorAll('#check-options button').forEach(btn => {
        btn.addEventListener('click', () => {
          const selected = parseInt(btn.getAttribute('data-opt'), 10);
          const feedbackEl = document.getElementById('check-feedback');
          if (!feedbackEl) return;
          feedbackEl.style.display = 'block';

          if (selected === mod.checkQuestion.correctIndex) {
            confetti({ particleCount: 50, spread: 60, origin: { y: 0.7 } });
            feedbackEl.style.background = 'rgba(16, 185, 129, 0.15)';
            feedbackEl.style.border = '1px solid #10b981';
            feedbackEl.style.color = '#34d399';
            feedbackEl.innerHTML = `<strong>✅ Resposta Correta!</strong><br>${mod.checkQuestion.explanation}`;
            this.speakTutor('Brilhante resposta! Você compreendeu exatamente a essência hemodinâmica.', 'gestureApprove');
          } else {
            feedbackEl.style.background = 'rgba(239, 68, 68, 0.15)';
            feedbackEl.style.border = '1px solid #ef4444';
            feedbackEl.style.color = '#fca5a5';
            feedbackEl.innerHTML = `<strong>Atenção:</strong> Analise com cuidado o mecanismo de pressão. ${mod.checkQuestion.explanation}`;
            this.speakTutor('Muito bom raciocínio, mas vamos rever este ponto juntos. Observe o gráfico de pressões no quadro.', 'gestureExplain2');
          }
        });
      });
    }, 50);
  }

  nextCurriculumStep() {
    const nextIdx = (this.currentCurriculumIndex + 1) % CardiologyCurriculum.modules.length;
    this.loadCurriculumModule(nextIdx);
  }

  // =========================================================================
  // 2. Private Tutoring (Aula Particular)
  // =========================================================================
  openPrivateTutoring() {
    this.sceneManager.setCameraPreset('tutor');
    this.speakTutor(
      `Estamos agora em nossa tutoria particular 1 para 1. Você pode falar diretamente comigo pelo microfone ou digitar qualquer tema médico. Como posso te auxiliar nos seus estudos hoje?`,
      'gestureApprove'
    );
  }

  // =========================================================================
  // 3. Clinical Case Simulation (Caso Clínico)
  // =========================================================================
  openClinicalCase(stage = 0) {
    this.currentCaseStage = stage;
    const c = ClinicalCases[0];
    const curStage = c.stages[stage];

    this.sceneManager.setCameraPreset('board');
    this.sceneManager.digitalBoard.updateContent({
      heading: `Caso Clínico: ${c.patient.name}, ${c.patient.age}a`,
      badge: 'Pronto-Socorro & Cardiologia',
      points: [
        `História: ${c.patient.history}`,
        `Sinais Vitais: PA ${curStage.vitalSigns?.pa || '120/80'}, FC ${curStage.vitalSigns?.fc || '80 bpm'}, SpO2 ${curStage.vitalSigns?.spo2 || '98%'}`,
        `Queixa: Dor torácica opressiva retroesternal irradiada há 2h.`
      ],
      clinicalNote: 'Protocolo de Dor Torácica: ECG de 12 derivações em até 10 minutos!'
    });

    this.speakTutor(`${curStage.tutorIntroduction} ${curStage.patientDialogue || ''}`, 'gesturePointBoard');

    this.openDrawer(c.title, Icons.fileText, () => {
      return `
        <div style="padding: 12px; border-radius: 10px; background: rgba(15, 23, 42, 0.7); margin-bottom: 14px; border: 1px solid var(--border-glass);">
          <div style="font-weight: 700; color: var(--cyan-primary);">${c.patient.name}, ${c.patient.age} anos (${c.patient.gender})</div>
          <div style="font-size: 0.8rem; color: var(--text-muted); margin-top: 4px;">${c.patient.history}</div>
        </div>

        <div style="font-weight: 700; font-size: 0.95rem; margin-bottom: 8px; color: #fff;">
          Etapa ${curStage.stageNumber}: ${curStage.title}
        </div>
        <div style="font-size: 0.85rem; color: #e2e8f0; line-height: 1.45; margin-bottom: 14px;">
          ${curStage.tutorPrompt}
        </div>

        <div id="case-options" style="display: flex; flex-direction: column; gap: 8px;">
          ${curStage.options.map((opt, idx) => `
            <button class="toggle-switch-btn" style="text-align: left; padding: 12px;" data-case-opt="${idx}">
              <span>${opt}</span>
            </button>
          `).join('')}
        </div>
        <div id="case-feedback" style="display: none; margin-top: 14px; padding: 12px; border-radius: 8px; font-size: 0.85rem;"></div>
      `;
    });

    setTimeout(() => {
      document.querySelectorAll('#case-options button').forEach(btn => {
        btn.addEventListener('click', () => {
          const selected = parseInt(btn.getAttribute('data-case-opt'), 10);
          const feedbackEl = document.getElementById('case-feedback');
          if (!feedbackEl) return;
          feedbackEl.style.display = 'block';

          if (selected === curStage.correctIndex) {
            confetti({ particleCount: 60, spread: 70, origin: { y: 0.7 } });
            feedbackEl.style.background = 'rgba(16, 185, 129, 0.15)';
            feedbackEl.style.border = '1px solid #10b981';
            feedbackEl.style.color = '#34d399';
            feedbackEl.innerHTML = `<strong>✅ Conduta Correta!</strong><br>${curStage.feedback}`;
            this.speakTutor(`Perfeita conduta médica! ${curStage.feedback}`, 'gestureApprove', () => {
              if (stage + 1 < c.stages.length) {
                setTimeout(() => this.openClinicalCase(stage + 1), 2000);
              }
            });
          } else {
            feedbackEl.style.background = 'rgba(239, 68, 68, 0.15)';
            feedbackEl.style.border = '1px solid #ef4444';
            feedbackEl.style.color = '#fca5a5';
            feedbackEl.innerHTML = `<strong>⚠️ Atenção:</strong> Esta não é a conduta prioritária. Lembre-se da abordagem de emergência: ${curStage.feedback}`;
          }
        });
      });
    }, 50);
  }

  // =========================================================================
  // 4. Anamnesis Training (Treino de Anamnese)
  // =========================================================================
  openAnamnesisTraining() {
    const data = AnamnesisTrainingData;
    this.currentAnamnesisNode = 'start';
    this.sceneManager.setCameraPreset('tutor');

    this.speakTutor(
      `Olá! No treino de anamnese você entrevistará a paciente ${data.patient.name}. Lembre-se: use perguntas abertas, estabeleça empatia e investigue a cronologia da dispneia.`,
      'gestureExplain1'
    );

    this.renderAnamnesisStep('start');
  }

  renderAnamnesisStep(nodeKey) {
    const data = AnamnesisTrainingData;
    const node = data.dialogueNodes[nodeKey];
    if (!node) return;

    this.openDrawer(`Anamnese: ${data.patient.name}`, Icons.user, () => {
      return `
        <div style="padding: 10px; border-radius: 8px; background: rgba(0, 229, 255, 0.08); font-size: 0.82rem; color: var(--cyan-hover); margin-bottom: 12px;">
          💡 <strong>Dica do Tutor:</strong> ${node.tutorTip}
        </div>
        ${node.patientGreeting ? `
          <div style="padding: 12px; border-radius: 8px; background: rgba(15, 23, 42, 0.8); border-left: 3px solid #38bdf8; margin-bottom: 14px; font-size: 0.88rem; color: #f8fafc;">
            ${node.patientGreeting}
          </div>
        ` : ''}
        ${node.patientConclusion ? `
          <div style="padding: 12px; border-radius: 8px; background: rgba(15, 23, 42, 0.8); border-left: 3px solid #38bdf8; margin-bottom: 14px; font-size: 0.88rem; color: #f8fafc;">
            ${node.patientConclusion}
          </div>
        ` : ''}

        <div style="font-weight: 600; font-size: 0.82rem; color: var(--text-dim); margin-bottom: 8px; text-transform: uppercase;">
          Escolha como abordar a paciente:
        </div>

        <div id="anamnesis-options" style="display: flex; flex-direction: column; gap: 8px;">
          ${node.options.map((opt, idx) => `
            <button class="toggle-switch-btn" style="text-align: left; padding: 12px;" data-node-opt="${idx}">
              <span>${opt.text}</span>
            </button>
          `).join('')}
        </div>
        <div id="anamnesis-response" style="display: none; margin-top: 14px; padding: 12px; border-radius: 8px; font-size: 0.85rem;"></div>
      `;
    });

    setTimeout(() => {
      document.querySelectorAll('#anamnesis-options button').forEach(btn => {
        btn.addEventListener('click', () => {
          const idx = parseInt(btn.getAttribute('data-node-opt'), 10);
          const chosen = node.options[idx];
          const respEl = document.getElementById('anamnesis-response');
          if (!respEl) return;
          respEl.style.display = 'block';

          if (chosen.isFinish) {
            confetti({ particleCount: 80, spread: 80, origin: { y: 0.7 } });
            respEl.style.background = 'rgba(16, 185, 129, 0.15)';
            respEl.style.border = '1px solid #10b981';
            respEl.style.color = '#34d399';
            respEl.innerHTML = `<strong>🌟 Atendimento Finalizado com Sucesso!</strong><br>Você estabeleceu empatia, identificou o gatilho da descompensação da IC e acolheu a paciente com clareza.`;
            this.speakTutor('Excelente consulta! Você demonstrou tanto rigor semiológico quanto humanização no acolhimento.', 'gestureApprove');
          } else {
            respEl.style.background = 'rgba(2, 132, 199, 0.15)';
            respEl.style.border = '1px solid #0284c7';
            respEl.style.color = '#e0f2fe';
            respEl.innerHTML = `<strong>Dona Maria responde:</strong><br>${chosen.response}`;
            if (chosen.nextNode) {
              setTimeout(() => this.renderAnamnesisStep(chosen.nextNode), 2500);
            }
          }
        });
      });
    }, 50);
  }

  // =========================================================================
  // 5. Auscultation Exam (Ausculta Cardíaca)
  // =========================================================================
  openAuscultationExam() {
    this.sceneManager.setCameraPreset('heart');
    medicalAudio.ensureContext();
    medicalAudio.startHeartLoop(72, 'normal');
    document.getElementById('toggle-heartbeat-btn')?.classList.add('active');

    this.speakTutor(
      `Iniciamos agora o exame de ausculta cardíaca. O som que você ouve é o ritmo fisiológico com B1 e B2. Selecione no menu os focos precordiais para auscultar alterações e sopros específicos.`,
      'gestureListen'
    );

    this.openDrawer('Simulador de Ausculta Cardíaca', Icons.stethoscope, () => {
      let html = `<div style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 12px;">
        Toque em um foco para posicionar o estetoscópio virtual e ouvir a acústica:
      </div>`;

      AuscultationFoci.forEach(f => {
        html += `
          <div class="focus-card" data-focus="${f.id}" data-sound="${f.pathologySound}">
            <div class="focus-header">
              <span>${f.name}</span>
              <span class="btn-icon" data-icon="volume2">${Icons.volume2}</span>
            </div>
            <div class="focus-loc">${f.anatomicalLocation}</div>
            <div class="focus-desc">${f.clinicalSignificance}</div>
          </div>
        `;
      });

      return html;
    });

    setTimeout(() => {
      document.querySelectorAll('.focus-card').forEach(card => {
        card.addEventListener('click', () => {
          document.querySelectorAll('.focus-card').forEach(c => c.classList.remove('active'));
          card.classList.add('active');
          const sound = card.getAttribute('data-sound');
          const focusId = card.getAttribute('data-focus');

          medicalAudio.startHeartLoop(75, sound);
          this.sceneManager.heartModel.highlightPart('valves');

          const names = {
            aortic: 'Foco Aórtico com Sopro Sistólico em Diamante de Estenose Aórtica',
            pulmonic: 'Foco Pulmonar com Desdobramento de B2',
            mitral: 'Foco Mitral com Sopro de Insuficiência Mitral e irradiação axilar',
            tricuspid: 'Foco Tricúspide',
            erbs: 'Ponto de Erb (Aórtico Acessório)'
          };
          this.speakTutor(`Auscultando agora o ${names[focusId] || focusId}. Observe a modulação sonora.`, 'gestureListen');
        });
      });
    }, 50);
  }

  // =========================================================================
  // 6. Oral Quiz (Quiz Oral)
  // =========================================================================
  openOralQuiz(index = 0) {
    const qList = OralQuizQuestions;
    if (index >= qList.length) index = 0;
    this.currentQuizIndex = index;
    const q = qList[index];

    this.sceneManager.setCameraPreset('tutor');
    this.speakTutor(q.question, 'gestureExplain2');

    this.openDrawer(`Quiz Oral - Questão ${index + 1}`, Icons.zap, () => {
      return `
        <div style="padding: 14px; border-radius: 10px; background: rgba(0, 229, 255, 0.08); border: 1px solid var(--border-glass); margin-bottom: 14px;">
          <div style="font-weight: 700; color: var(--cyan-primary); font-size: 0.95rem; margin-bottom: 6px;">
            Pergunta do Professor:
          </div>
          <div style="font-size: 0.9rem; line-height: 1.45; color: #fff;">
            ${q.question}
          </div>
        </div>

        <div style="font-size: 0.82rem; color: var(--text-dim); margin-bottom: 8px;">
          💡 <strong>Dica reflexiva:</strong> ${q.hint}
        </div>

        <div style="display: flex; gap: 10px; margin-top: 14px;">
          <button class="chip-btn" id="quiz-mic-answer" style="flex: 1; justify-content: center; padding: 10px;">
            🎙️ Responder Falando
          </button>
          <button class="chip-btn" id="quiz-reveal-answer" style="flex: 1; justify-content: center; padding: 10px;">
            📖 Resposta Padrão-Ouro
          </button>
        </div>

        <div id="quiz-answer-box" style="display: none; margin-top: 14px; padding: 12px; border-radius: 8px; background: rgba(15, 23, 42, 0.8); border-left: 3px solid var(--cyan-primary); font-size: 0.85rem; color: #e2e8f0;">
          <strong>Resposta Esperada:</strong><br>${q.idealAnswer}<br><br>
          <button class="chip-btn" id="quiz-next-btn" style="margin-top: 8px;">Próxima Questão ➡️</button>
        </div>
      `;
    });

    setTimeout(() => {
      document.getElementById('quiz-mic-answer')?.addEventListener('click', () => {
        document.getElementById('mic-btn')?.click();
      });
      document.getElementById('quiz-reveal-answer')?.addEventListener('click', () => {
        const box = document.getElementById('quiz-answer-box');
        if (box) box.style.display = 'block';
        this.speakTutor(q.idealAnswer, 'gestureApprove');
      });
      document.getElementById('quiz-next-btn')?.addEventListener('click', () => {
        this.openOralQuiz(index + 1);
      });
    }, 50);
  }

  // =========================================================================
  // 7. Simulado (Revalida & Residência)
  // =========================================================================
  openSimulado(index = 0) {
    const list = ExamSimuladoQuestions;
    if (index >= list.length) index = 0;
    this.currentSimuladoIndex = index;
    const item = list[index];

    this.sceneManager.setCameraPreset('board');
    this.sceneManager.digitalBoard.updateContent({
      heading: `Simulado: ${item.source}`,
      badge: item.discipline,
      points: [
        `Nível: ${item.level}`,
        `Caso: ${item.stem.substring(0, 180)}...`
      ],
      clinicalNote: 'Leia atentamente as alternativas e selecione a conduta correta.'
    });

    this.speakTutor('Vamos testar seus conhecimentos em alto nível com uma questão de Residência Médica.', 'gesturePointBoard');

    this.openDrawer(`Simulado - Questão ${index + 1}/${list.length}`, Icons.award, () => {
      return `
        <div style="font-size: 0.75rem; color: var(--cyan-hover); font-weight: 700; margin-bottom: 6px;">
          ${item.source.toUpperCase()} • ${item.level}
        </div>
        <div style="font-size: 0.88rem; line-height: 1.5; color: #fff; margin-bottom: 16px;">
          ${item.stem}
        </div>
        <div id="simulado-options" style="display: flex; flex-direction: column; gap: 8px;">
          ${item.options.map((opt, optIdx) => `
            <button class="toggle-switch-btn" style="text-align: left; padding: 12px;" data-sim-opt="${optIdx}">
              <span>${String.fromCharCode(65 + optIdx)}) ${opt}</span>
            </button>
          `).join('')}
        </div>
        <div id="simulado-feedback" style="display: none; margin-top: 14px; padding: 12px; border-radius: 8px; font-size: 0.85rem;"></div>
      `;
    });

    setTimeout(() => {
      document.querySelectorAll('#simulado-options button').forEach(btn => {
        btn.addEventListener('click', () => {
          const selected = parseInt(btn.getAttribute('data-sim-opt'), 10);
          const feedbackEl = document.getElementById('simulado-feedback');
          if (!feedbackEl) return;
          feedbackEl.style.display = 'block';

          if (selected === item.correctIndex) {
            confetti({ particleCount: 70, spread: 80, origin: { y: 0.7 } });
            feedbackEl.style.background = 'rgba(16, 185, 129, 0.15)';
            feedbackEl.style.border = '1px solid #10b981';
            feedbackEl.style.color = '#34d399';
            feedbackEl.innerHTML = `<strong>✅ Gabarito Correto!</strong><br>${item.rationale}<br><br><button class="chip-btn" id="sim-next-btn">Próxima Questão ➡️</button>`;
            this.speakTutor('Gabarito perfeito! Seu raciocínio diagnóstico e terapêutico está alinhado com as diretrizes.', 'gestureApprove');
          } else {
            feedbackEl.style.background = 'rgba(239, 68, 68, 0.15)';
            feedbackEl.style.border = '1px solid #ef4444';
            feedbackEl.style.color = '#fca5a5';
            feedbackEl.innerHTML = `<strong>⚠️ Gabarito Incorreto.</strong><br>A resposta correta é a letra ${String.fromCharCode(65 + item.correctIndex)}.<br>${item.rationale}<br><br><button class="chip-btn" id="sim-next-btn">Próxima Questão ➡️</button>`;
            this.speakTutor('Atenção a este detalhe de pegadinha clássica em provas de residência.', 'gestureExplain1');
          }

          document.getElementById('sim-next-btn')?.addEventListener('click', () => {
            this.openSimulado(index + 1);
          });
        });
      });
    }, 50);
  }

  // =========================================================================
  // Disciplines Drawer (16 Disciplinas Médicas)
  // =========================================================================
  openDisciplinesDrawer() {
    this.openDrawer('Grade de Disciplinas Médicas', Icons.layers, () => {
      let html = `<div style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 12px;">
        Explore as matérias da graduação médica com nosso tutor 3D:
      </div>`;

      Disciplines.forEach(d => {
        html += `
          <div class="focus-card ${d.id === 'cardiology' ? 'active' : ''}" data-disc="${d.id}">
            <div class="focus-header">
              <span>${d.name}</span>
              <span class="btn-icon" data-icon="${d.icon}">${Icons[d.icon] || Icons.layers}</span>
            </div>
            <div class="focus-loc">${d.category}</div>
            <div class="focus-desc">${d.description}</div>
          </div>
        `;
      });

      return html;
    });

    setTimeout(() => {
      document.querySelectorAll('[data-disc]').forEach(card => {
        card.addEventListener('click', () => {
          const discId = card.getAttribute('data-disc');
          const d = Disciplines.find(item => item.id === discId);
          if (d) {
            this.speakTutor(`Excelente escolha! Na disciplina de ${d.name}, estudamos temas essenciais como ${d.topics.slice(0, 3).join(', ')}.`, 'gestureApprove');
            if (discId === 'cardiology') {
              this.switchMode('guided');
            }
          }
        });
      });
    }, 50);
  }

  // =========================================================================
  // Generic Drawer Manager
  // =========================================================================
  openDrawer(title, iconSvg, renderContentFn) {
    const drawer = document.getElementById('side-drawer');
    const titleEl = document.getElementById('drawer-title-text');
    const iconEl = document.getElementById('drawer-title-icon');
    const bodyEl = document.getElementById('drawer-body');

    if (!drawer || !bodyEl) return;

    if (titleEl) titleEl.textContent = title;
    if (iconEl && iconSvg) iconEl.innerHTML = iconSvg;
    bodyEl.innerHTML = renderContentFn();

    drawer.style.display = 'flex';
  }

  closeDrawer() {
    const drawer = document.getElementById('side-drawer');
    if (drawer) drawer.style.display = 'none';
  }
}

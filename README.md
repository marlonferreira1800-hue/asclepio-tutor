# 🩺 MedTutor 3D - Plataforma Educacional de Medicina com Professor Virtual 3D

> **⚠️ AVISO ÉTICO-LEGAL OBRIGATÓRIO:**  
> *Esta plataforma possui finalidade exclusivamente educacional e não substitui avaliação, diagnóstico ou tratamento realizado por um profissional de saúde.*

---

## 🌟 Visão Geral

O **MedTutor 3D** é uma plataforma inovadora de educação médica conduzida por um **Professor Virtual Humano em 3D** imersivo, simpático e de alto rigor acadêmico. O aplicativo combina computação gráfica 3D em tempo real com Three.js, síntese e reconhecimento de voz em português brasileiro, sincronização labial procedural (*lip-sync*), modelos anatômicos interativos, acústica cardíaca sintetizada via Web Audio API e metodologia socrática de ensino baseada em evidências.

---

## 👨‍⚕️ O Professor Virtual 3D

- **Aparência e Postura:** Modelo humano tridimensional em jaleco médico, estetoscópio e crachá de identificação.
- **Expressões Faciais e Contato Visual:**
  - Piscamento natural e periódico dos olhos.
  - Rastreamento dinâmico de olhar (*eye contact*) orientado à câmera e ao estudante.
  - Articulação da mandíbula e lábios sincronizada com a fala (*lip-sync*).
  - Respiração sutil e movimentos posturais relaxados.
- **Linguagem Corporal e Gestos:**
  - Apontar para o quadro digital interativo (`gesturePointBoard`).
  - Apresentar o coração 3D flutuante (`gesturePresentOrgan`).
  - Gestos conversacionais explicativos (`gestureExplain1`, `gestureExplain2`).
  - Postura reflexiva de escuta (`gestureListen`).
  - Acenos de aprovação e encorajamento (`gestureApprove`).
- **Professores Selecionáveis:**
  1. **Dr. Asclépio:** Professor Sênior de Cardiologia Clínica.
  2. **Dra. Sofia Mendes:** Professora de Fisiologia e Semiologia.
  3. **Dr. Lucas Rocha:** Residente de Clínica Médica.

---

## 🏥 O Ambiente Virtual (Consultório & Laboratório Médico 3D)

- **Quadro Digital Interativo (Smartboard):**
  - Textura dinâmica renderizada em tempo real (1920x1080).
  - Monitor cardíaco com traçado contínuo de **Eletrocardiograma (ECG)** a 60 FPS.
  - Slides conceituais, badges disciplinares, bullet points e pérolas clínicas.
  - Telemetria de sinais vitais (PA, FC, SpO2, Débito Cardíaco).
- **Mesa de Consultório:** Notebook com display iluminado, estetoscópio e livros de referência médica (Guyton, Robbins, Braunwald).
- **Esqueleto Humano:** Modelo anatômico completo em suporte no ambiente.
- **Pedestal Holográfico:** Base cilíndrica com anel de neon ciano onde o coração flutua e pulsa.
- **Iluminação de Estúdio:** Luz chave quente com sombras suaves, luz de recorte (*rim light*) ciano e iluminação pontual de destaque.

---

## 🫀 Coração Anatômico 3D & Simulação Hemodinâmica

- **Morfologia Completa:**
  - Átrio Direito, Átrio Esquerdo, Ventrículo Direito e Ventrículo Esquerdo.
  - Arco Aórtico com os 3 ramos supra-aórticos.
  - Tronco Pulmonar e artérias pulmonares direita e esquerda.
  - Veias Cavas Superior e Inferior e Veias Pulmonares.
  - Artérias Coronárias (Descendente Anterior e Coronária Direita).
- **Corte Anatômico (Visão Interna):**
  - Visualização da espessura parietal do VE vs VD e septo interventricular.
  - Valva Mitral e Tricúspide com cordoalhas tendíneas fixadas a músculos papilares.
- **Simulação de Fluxo Sanguíneo:**
  - Partículas azuis (sangue venoso desoxigenado): Veias Cavas → AD → VD → Pulmões.
  - Partículas vermelhas (sangue arterial oxigenado): Veias Pulmonares → AE → VE → Aorta → Corpo.
- **Sistema Elétrico de Condução:**
  - Nós Sinoatrial e Atrioventricular, Feixe de His e Fibras de Purkinje com pulsos luminosos sincronizados com o batimento.
- **Áudio Cardíaco Realista (Web Audio API):**
  - Primeira Bulha (B1 - fechamento AV) e Segunda Bulha (B2 - fechamento semilunar).
  - Simulação de sopros: Estenose Aórtica (mesossistólico em diamante) e Insuficiência Mitral (holossistólico).
  - Bip de monitor cardíaco sincronizado à onda R.

---

## 📚 Modos de Estudo Disponíveis

1. **Aula Guiada (Masterclass Cardiovascular em 5 Etapas):**
   - Etapa 1: Morfologia Geral e Circulação Dupla.
   - Etapa 2: Câmaras, Valvas e Arquitetura Ventricular.
   - Etapa 3: Ciclo Cardíaco e Ausculta (B1 e B2).
   - Etapa 4: Eletrofisiologia e Morfologia do ECG (Ondas P, QRS e T).
   - Etapa 5: Caso Clínico e Raciocínio Patológico (IAM com supra de ST).
2. **Aula Particular:** Conversa direta livre por voz e texto com Dr. Asclépio.
3. **Caso Clínico Interativo:** Paciente Sr. Carlos, 58 anos, dor torácica no PS com ECG em 10 min e reperfusão coronariana.
4. **Treino de Anamnese:** Diálogo estruturado com a paciente Dona Maria investigando dispneia, ortopneia e adesão medicamentosa.
5. **Treino de Ausculta Cardíaca:** Estetoscópio virtual nos 5 focos precordiais (Aórtico, Pulmonar, Erb, Tricúspide, Mitral).
6. **Quiz Oral:** Perguntas faladas pelo professor com avaliação socrática em tempo real.
7. **Simulado:** Questões comentadas padrão Revalida, Enade e Residência Médica.

---

## 🛠️ Tecnologias Utilizadas

- **Three.js (WebGL):** Renderização 3D de alta performance, iluminação PBR e materiais sombreados.
- **Vanilla CSS:** Arquitetura limpa com Glassmorphism, variáveis HSL e tipografia moderna (*Outfit*, *Inter*).
- **Web Speech API:** Text-to-Speech (TTS) em português brasileiro e Speech Recognition (STT).
- **Web Audio API:** Síntese sonora bioacústica de bulhas cardíacas, sopros e monitorização.
- **Vite:** Empacotador e servidor ultrarrápido ES Modules.
- **Canvas-Confetti:** Celebração de acertos nas perguntas de fixação.

---

## 🚀 Como Executar Localmente

```bash
# 1. Instalar as dependências
npm install

# 2. Iniciar o servidor de desenvolvimento
npm run dev

# 3. Gerar build de produção
npm run build
```

Abra `http://localhost:3000/` no navegador para interagir com o **MedTutor 3D**!

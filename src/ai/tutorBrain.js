// Socratic Pedagogical AI Brain for MedTutor 3D
// Implements Feynman technique, active recall, evidence-based medical knowledge, and student memory

export class TutorBrain {
  constructor() {
    this.studentName = 'Colega';
    this.studentLevel = 'Ciclo Clínico'; // 'Ciclo Básico', 'Ciclo Clínico', 'Internato', 'Residência'
    this.tutorPersona = {
      name: 'Dr. Asclépio',
      specialty: 'Cardiologia & Clínica Médica',
      title: 'Professor Titular de Medicina',
      tone: 'Empático, Socrático e Rigoroso',
      avatarId: 'asclepio'
    };
    this.studiedTopics = new Set(['Anatomia Cardíaca', 'Ciclo Cardíaco', 'Valvas Cardíacas']);
    this.difficulties = [];
    this.lastTopic = 'Sistema Cardiovascular';
    this.lastExplanation = '';
    this.conversationHistory = [];
  }

  setStudentInfo(name, level) {
    if (name && name.trim()) this.studentName = name.trim();
    if (level) this.studentLevel = level;
  }

  setTutorPersona(persona) {
    this.tutorPersona = { ...this.tutorPersona, ...persona };
  }

  recordTopic(topic) {
    this.studiedTopics.add(topic);
    this.lastTopic = topic;
  }

  recordDifficulty(diff) {
    this.difficulties.push({ topic: diff, date: new Date().toISOString() });
  }

  // Generate response to user prompt with Socratic, Feynman and empathetic approach
  generateResponse(userQuery, context = {}) {
    const q = userQuery.toLowerCase().trim();
    let reply = '';
    let action = null;
    let focus3D = null;
    let gesture = 'gestureExplain1';

    this.conversationHistory.push({ sender: 'user', text: userQuery, time: new Date() });

    // Handle "Não entendi" or simplification requests
    if (q.includes('não entendi') || q.includes('simplifi') || q.includes('feynman') || q.includes('mais simples') || q.includes('muito difícil')) {
      gesture = 'gestureExplain2';
      reply = `Fique tranquilo(a), ${this.studentName}! Em Medicina, os conceitos mais belos costumam parecer complexos no início. Vamos usar a Técnica de Feynman e simplificar:
      
Pense no coração como o sistema de bombeamento de um edifício moderno:
1. Os **Átrios** são caixas d'água de recepção — eles apenas recebem o líquido que vem da rua (veias) sem fazer força.
2. Os **Ventrículos** são as bombas pressurizadoras com motores potentes que injetam o líquido nos canos principais.
3. As **Valvas** são registros unidirecionais que impedem que a água volte e transborde o cano.
4. E a **eletricidade** é como o circuito de fiação elétrica que dispara a faísca para o motor ligar exatamente na hora certa.

Ficou mais claro esse fluxo, ou prefere que a gente analise cada cano e registro individualmente no nosso modelo 3D?`;
      action = 'feynman_explanation';
      focus3D = 'chambers';
      this.recordDifficulty(this.lastTopic);
    }
    // Handle request for practical clinical examples
    else if (q.includes('exemplo') || q.includes('caso real') || q.includes('prática') || q.includes('beira do leito')) {
      gesture = 'gesturePresentOrgan';
      reply = `${this.studentName}, vamos ver como isso se traduz na beira do leito!
      
Imagine um paciente que chega ao pronto-socorro referindo cansaço progressivo aos esforços. Ao colocar o estetoscópio no ápice cardíaco (5º espaço intercostal na linha hemiclavicular esquerda), você ausculta um sopro holossistólico em jato que irradia para a axila.
Isso ocorre porque a valva mitral não está fechando hermeticamente durante a sístole — uma fração do sangue que deveria ir para a aorta volta para o átrio esquerdo, aumentando a pressão no leito pulmonar.
Gostaria que eu ativasse a ausculta desse sopro no nosso simulador de áudio agora?`;
      action = 'clinical_example';
      focus3D = 'valves';
    }
    // Handle 3D focus request
    else if (q.includes('3d') || q.includes('mostrar') || q.includes('ver') || q.includes('coração') || q.includes('modelo')) {
      gesture = 'gesturePresentOrgan';
      reply = `Com prazer, ${this.studentName}! Estou destacando o modelo tridimensional do coração ao nosso lado. Note o corte anatômico com os ventrículos em corte coronal, permitindo observar a espessura da parede do VE e as cordoalhas tendíneas da valva mitral. Você pode usar o mouse ou o toque para girá-lo em 360 graus e aproximar qualquer estrutura.`;
      action = 'focus_3d';
      focus3D = 'cross_section';
    }
    // Handle ECG questions
    else if (q.includes('ecg') || q.includes('eletro') || q.includes('onda p') || q.includes('qrs') || q.includes('st')) {
      gesture = 'gesturePointBoard';
      reply = `Excelente pergunta sobre Eletrocardiografia, ${this.studentName}!
      
O ECG é a representação gráfica vetorial da atividade elétrica do miocárdio:
- **Onda P**: Despolarização dos átrios (origina-se no Nó Sinusal).
- **Intervalo PR**: Tempo de trânsito elétrico desde os átrios até os ventrículos, com retardo benéfico no Nó AV (normal: 120 a 200 ms).
- **Complexo QRS**: Despolarização simultânea dos ventrículos via Feixe de His e Fibras de Purkinje (normal: < 120 ms).
- **Segmento ST e Onda T**: Repolarização ventricular lenta.

Qual desses segmentos você gostaria de aprofundar para correlacionar com arritmias ou isquemia?`;
      action = 'show_ecg';
      focus3D = 'conduction';
    }
    // Handle Auscultation questions
    else if (q.includes('ausculta') || q.includes('estetoscópio') || q.includes('bulha') || q.includes('b1') || q.includes('b2') || q.includes('sopro')) {
      gesture = 'gestureListen';
      reply = `${this.studentName}, a ausculta cardíaca é um dos pilares mais nobres da Semiologia Médica!
      
Lembre-se sempre da regra de ouro:
- **B1 ("tum")**: Fechamento das valvas atrioventriculares (Mitral e Tricúspide). Coincide perfeitamente com o pulso carotídeo.
- **B2 ("tá")**: Fechamento das valvas semilunares (Aórtica e Pulmonar). Apresenta desdobramento fisiológico na inspiração no foco pulmonar.
- **Sopros**: Turbilhonamento do fluxo sanguíneo através de orifícios estenosados ou regurgitantes.

Você pode clicar na aba "Ausculta Cardíaca" no menu lateral para ouvir o som real de cada foco e identificar sopros sistólicos e diastólicos.`;
      action = 'show_auscultation';
      focus3D = 'valves';
    }
    // Handle questions about Infarction / IAM
    else if (q.includes('infarto') || q.includes('iam') || q.includes('dor no peito') || q.includes('coronária')) {
      gesture = 'gestureExplain1';
      reply = `Na emergência médica, ${this.studentName}, 'tempo é miocárdio'.
      
No Infarto Agudo do Miocárdio com Supra de ST (IAMCSST):
1. Uma placa aterosclerótica rica em núcleo lipídico sofre ruptura no endotélio coronariano.
2. Plaquetas aderem ao colágeno subendotelial e ativam a cascata de coagulação, formando um trombo oclusivo total.
3. Sem sangue oxigenado, os cardiomiócitos sofrem parada do metabolismo aeróbico em segundos e necrose celular transmural a partir de 20-30 minutos.
4. O ECG deve ser feito em menos de **10 minutos** e a meta de abertura do vaso por angioplastia primária é de **menos de 90 minutos** (tempo porta-balão).

Gostaria de resolver comigo o nosso Caso Clínico Simulado do paciente com dor torácica no modo Caso Clínico?`;
      action = 'recommend_case';
      focus3D = 'coronaries';
    }
    // Handle Socratic Quiz Request
    else if (q.includes('pergunta') || q.includes('quiz') || q.includes('teste') || q.includes('questão')) {
      gesture = 'gestureApprove';
      reply = `Adoro seu entusiasmo para testar o conhecimento ativo, ${this.studentName}! Aqui vai uma provocação socrática:
      
*Por que um paciente em choque por infarto de Ventrículo Direito NUNCA deve receber nitroglicerina ou nitratos, enquanto um paciente com infarto anterior de VE frequentemente se beneficia de vasodilatadores?*
      
Pense no conceito de pré-carga e me responda falando ao microfone ou digitando!`;
      action = 'oral_quiz';
    }
    // Default contextual answer
    else {
      gesture = 'gestureExplain1';
      reply = `Muito bem colocado, ${this.studentName}. Sobre "${userQuery}", no nível de ${this.studentLevel}, é fundamental integrarmos a base fisiológica com a prática médica clínica.
      
No sistema cardiovascular, cada detalhe anatômico tem uma razão direta de sobrevivência hemodinâmica. O coração mantém um débito cardíaco de cerca de 5 litros por minuto em repouso, modulado autonomamente pelo sistema simpático e parassimpático.
      
Para onde você prefere direcionar nosso estudo agora? Podemos:
1. Avançar para as fases mecânicas do Ciclo Cardíaco;
2. Simular uma ausculta com estetoscópio;
3. Resolver um caso clínico no pronto-socorro;
4. Realizar um Quiz Oral com avaliação de voz.`;
    }

    this.lastExplanation = reply;
    this.conversationHistory.push({ sender: 'tutor', text: reply, time: new Date() });

    return {
      text: reply,
      gesture,
      action,
      focus3D
    };
  }
}

export const tutorBrain = new TutorBrain();

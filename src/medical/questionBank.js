// Question Bank for Oral Quiz and Residência / Revalida Simulations

export const OralQuizQuestions = [
  {
    id: 'oral_1',
    question: 'Explique para mim com suas próprias palavras: qual é a função fisiológica do retardo de condução elétrica que ocorre no Nó Atrioventricular?',
    hint: 'Pense na sincronização mecânica entre átrios e ventrículos.',
    keywords: ['retardo', 'tempo', 'encher', 'esvaziar', 'átrio', 'ventrículo', 'sístole', 'contração', 'sangue'],
    idealAnswer: 'O retardo fisiológico no nó atrioventricular (cerca de 0,10s) garante que a contração atrial (sístole atrial) ocorra antes da contração ventricular, permitindo o enchimento ventricular completo antes que os ventrículos comecem a ejetar sangue sob alta pressão.',
    tutorPraise: 'Excelente formulação! Você compreendeu com precisão a harmonia hemodinâmica: se não houvesse esse atraso, átrios e ventrículos contrairiam quase simultaneamente, gerando colisão de fluxos e refluxo para as veias cavas e pulmonares.'
  },
  {
    id: 'oral_2',
    question: 'Se um paciente apresenta um sopro sistólico em diamante (crescendo-decrescendo) audível com máxima intensidade no 2º espaço intercostal direito e que irradia para as carótidas, qual é o diagnóstico mais provável?',
    hint: 'Qual valva se localiza no 2º espaço intercostal direito e abre durante a sístole?',
    keywords: ['estenose', 'aórtica', 'aorta', 'valva'],
    idealAnswer: 'Estenose da valva aórtica (Estenose Aórtica).',
    tutorPraise: 'Perfeito! É a semiologia clássica da Estenose Aórtica. O formato em diamante reflete o aumento progressivo do gradiente de pressão transvalvar durante a ejeção máxima ventricular esquerda, diminuindo ao final da sístole.'
  },
  {
    id: 'oral_3',
    question: 'Por que o ventrículo esquerdo tem uma parede muscular significativamente mais espessa que o ventrículo direito, mesmo ejetando exatamente o mesmo volume sistólico de sangue em cada batimento?',
    hint: 'Lembre-se da diferença entre resistência vascular sistêmica e pulmonar (pós-carga).',
    keywords: ['pressão', 'resistência', 'pós-carga', 'sistêmica', 'pulmonar', 'alta', 'força'],
    idealAnswer: 'Porque o ventrículo esquerdo ejeta contra a alta resistência vascular sistêmica (pós-carga elevada, ~120/80 mmHg), exigindo maior tensão parietal e hipertrofia miocárdica fisiológica (Lei de Laplace), enquanto o ventrículo direito ejeta contra a baixa resistência da vasculatura pulmonar (~25/10 mmHg).',
    tutorPraise: 'Resposta brilhante e embasada na biofísica médica! A espessura miocárdica é uma adaptação direta à pós-carga imposta pela circulação sistêmica.'
  }
];

export const ExamSimuladoQuestions = [
  {
    id: 'sim_1',
    source: 'Revalida / Residência Médica',
    discipline: 'Cardiologia & Emergência',
    level: 'Internato / Residência',
    stem: 'Homem de 62 anos, com antecedentes de diabetes mellitus tipo 2 e hipertensão arterial, dá entrada na sala de emergência com queixa de dor torácica retroesternal opressiva há 90 minutos, com irradiação para mandíbula e sudorese profusa. O ECG realizado em 6 minutos evidencia supradesnivelamento do segmento ST de 3,5 mm nas derivações V1, V2, V3 e V4. PA: 130/80 mmHg, FC: 84 bpm. O hospital possui laboratório de hemodinâmica com equipe disponível no momento da admissão. Qual é a conduta imediata mais adequada?',
    options: [
      'Encaminhar imediatamente para Angioplastia Coronariana Primária com meta porta-balão < 90 minutos, administrando AAS e segundo antiagregante plaquetário.',
      'Administrar trombolítico venoso (tenecteplase) imediatamente e transferir para a UTI para aguardar curva enzimática de troponina.',
      'Solicitar ecocardiograma de urgência e aguardar estabilização clínica por 24 horas antes de qualquer intervenção invasiva.',
      'Iniciar apenas heparina em infusão contínua e indicar teste ergométrico após 48 horas.'
    ],
    correctIndex: 0,
    rationale: 'No IAM com supra de ST, em hospital com serviço de hemodinâmica disponível, a Angioplastia Primária é a estratégia de escolha padrão-ouro, devendo ser realizada com tempo porta-balão inferior a 90 minutos. A terapia antiplaquetária dupla (AAS + inibidor de P2Y12) e anticoagulação plena devem ser iniciadas de imediato.'
  },
  {
    id: 'sim_2',
    source: 'Enade / Semiologia Médica',
    discipline: 'Semiologia Cardiovascular',
    level: 'Ciclo Clínico',
    stem: 'Durante o exame físico de um estudante de medicina de 22 anos, assintomático, o médico preceptor ausculta no foco pulmonar uma segunda bulha cardíaca que se apresenta desdobrada em dois componentes (A2 e P2) durante a fase inspiratória profunda, tornando-se única durante a expiração forçada. Qual é a interpretação semiológica correta deste achado?',
    options: [
      'Desdobramento fisiológico da segunda bulha cardíaca, decorrente do aumento do retorno venoso ao coração direito na inspiração.',
      'Comunicação interatrial (CIA) com desdobramento fixo e patológico de B2.',
      'Hipertensão arterial pulmonar grave com hiperfonese de P2.',
      'Bloqueio completo de ramo esquerdo com desdobramento paradoxal de B2.'
    ],
    correctIndex: 0,
    rationale: 'Durante a inspiração, a pressão intratorácica negativa aumenta o retorno venoso para o átrio e ventrículo direito. Isso prolonga o tempo de ejeção do ventrículo direito, atrasando o fechamento da valva pulmonar (P2). Simultaneamente, o leito vascular pulmonar retém mais sangue, reduzindo temporariamente o retorno venoso ao coração esquerdo e encurtando o tempo de ejeção do VE, adiantando discretamente o fechamento aórtico (A2). Esse fenômeno é o desdobramento fisiológico normal de B2.'
  },
  {
    id: 'sim_3',
    source: 'Residência Médica / Eletrofisiologia',
    discipline: 'Fisiologia & Eletrocardiograma',
    level: 'Ciclo Básico / Clínico',
    stem: 'Em um traçado de eletrocardiograma padrão de 12 derivações registrado a 25 mm/s e 10 mm/mV, observa-se que a duração do Complexo QRS é de 160 milissegundos (4 quadradinhos). O que essa duração prolongada indica fundamentalmente do ponto de vista biofísico?',
    options: [
      'Despolarização ventricular lenta e dessincronizada, indicando bloqueio no sistema especializado de condução intraventricular (ex: Bloqueio de Ramo).',
      'Atraso na condução nodal atrioventricular (aumento do intervalo PR).',
      'Isquemia subendocárdica difusa sem lesão mecânica.',
      'Aumento do tempo de relaxamento mecânico diastólico (diástase prolongada).'
    ],
    correctIndex: 0,
    rationale: 'A duração normal do QRS é de 70 a 100 ms (< 120 ms ou 3 quadradinhos). Um QRS largo (≥ 120 ms) significa que a onda de despolarização não está utilizando as vias de condução ultrarrápida do sistema His-Purkinje normalmente em ambos os ventrículos, propagando-se lentamente de miócito a miócito, como ocorre nos bloqueios de ramo (direito ou esquerdo) ou em ritmos ventriculares ectópicos.'
  }
];

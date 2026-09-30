// Medical Disciplines Catalog for MedTutor 3D

export const Disciplines = [
  {
    id: 'cardiology',
    name: 'Cardiologia',
    category: 'Ciclo Clínico & Especialidades',
    icon: 'heart',
    description: 'Estudo do coração e dos vasos sanguíneos, hemodinâmica, arritmias, insuficiência cardíaca e cardiopatias isquêmicas.',
    topics: [
      'Anatomia e Câmaras Cardíacas',
      'Fisiologia do Ciclo Cardíaco',
      'Eletrocardiograma (ECG) Básico e Avançado',
      'Síndromes Coronarianas Agudas (IAM)',
      'Valvulopatias e Ausculta Cardíaca',
      'Hipertensão Arterial Sistêmica e Insuficiência Cardíaca'
    ],
    highlight: true
  },
  {
    id: 'anatomy',
    name: 'Anatomia Humana',
    category: 'Ciclo Básico',
    icon: 'layers',
    description: 'Estruturas macroscópicas do corpo humano, topografia, planos anatômicos, ossos, músculos e órgãos vitais.',
    topics: ['Sistema Osteoarticular', 'Vascularização e Linfáticos', 'Neuroanatomia', 'Anatomia do Tórax e Abdome']
  },
  {
    id: 'physiology',
    name: 'Fisiologia Médica',
    category: 'Ciclo Básico',
    icon: 'activity',
    description: 'Mecanismos funcionais dos sistemas biológicos, homeostase, transporte de membrana e regulação neuro-humoral.',
    topics: ['Potencial de Ação e Sinapses', 'Fisiologia Renal e Ácido-Básico', 'Mecânica Respiratória', 'Controle Endócrino']
  },
  {
    id: 'semiology',
    name: 'Semiologia Médica',
    category: 'Ciclo Clínico',
    icon: 'stethoscope',
    description: 'A arte e técnica da anamnese, exame físico sistemático, identificação de sinais e sintomas diagnósticos.',
    topics: ['Anamnese Estruturada', 'Exame Físico Cardiovascular', 'Semiologia Pulmonar', 'Exame Neurológico']
  },
  {
    id: 'pathology',
    name: 'Patologia Geral e Especial',
    category: 'Ciclo Básico / Clínico',
    icon: 'eye',
    description: 'Bases celulares e moleculares das doenças, inflamação, neoplasias, necrose e alterações teciduais.',
    topics: ['Lesão Celular e Apoptose', 'Inflamação e Reparo', 'Aterosclerose e Trombose', 'Neoplasias Malignas']
  },
  {
    id: 'pharmacology',
    name: 'Farmacologia Clínica',
    category: 'Ciclo Básico / Clínico',
    icon: 'zap',
    description: 'Farmacocinética, farmacodinâmica, mecanismos de ação dos fármacos, posologia e interações medicamentosas.',
    topics: ['Anti-hipertensivos e Antiarrítmicos', 'Antibioticoterapia Racional', 'Analgésicos e Anti-inflamatórios', 'Drogas Vasoativas']
  },
  {
    id: 'internal_medicine',
    name: 'Clínica Médica',
    category: 'Ciclo Clínico / Internato',
    icon: 'fileText',
    description: 'Diagnóstico e manejo de doenças sistêmicas no adulto, raciocínio clínico integrado e condutas hospitalares.',
    topics: ['Diabetes Mellitus e Complicações', 'Insuficiência Renal Aguda/Crônica', 'Pneumonias e DPOC', 'Sepse e Choque']
  },
  {
    id: 'surgery',
    name: 'Cirurgia Geral',
    category: 'Ciclo Clínico / Internato',
    icon: 'rotate3d',
    description: 'Princípios cirúrgicos, técnicas operatórias, abdome agudo, resposta metabólica ao trauma e cuidados perioperatórios.',
    topics: ['Abdome Agudo Cirúrgico', 'Técnicas de Hemostasia e Sutura', 'Apendicite e Colecistite', 'Trauma (ATLS)']
  },
  {
    id: 'pediatrics',
    name: 'Pediatria e Puericultura',
    category: 'Ciclo Clínico / Internato',
    icon: 'user',
    description: 'Acompanhamento do crescimento e desenvolvimento infantil, vacinação, patologias neonatais e pediátricas.',
    topics: ['Marcos do Desenvolvimento', 'Calendário Vacinal', 'Infecções Respiratórias na Infância', 'Desidratação e Terapia de Reidratação']
  },
  {
    id: 'gynecology_obstetrics',
    name: 'Ginecologia e Obstetrícia',
    category: 'Ciclo Clínico / Internato',
    icon: 'sparkles',
    description: 'Saúde da mulher, ciclo gravídico-puerperal, assistência ao parto, rastreamento de neoplasias ginecológicas.',
    topics: ['Pré-natal de Baixo e Alto Risco', 'Mecanismo do Parto', 'Síndromes Hipertensivas da Gestação', 'Rastreamento de CA de Colo e Mama']
  },
  {
    id: 'neurology',
    name: 'Neurologia',
    category: 'Ciclo Clínico / Residência',
    icon: 'zap',
    description: 'Doenças do sistema nervoso central e periférico, cefaleias, epilepsia, AVC e síndromes neuromusculares.',
    topics: ['Acidente Vascular Cerebral (AVC)', 'Cefaleias Primárias e Secundárias', 'Síndromes Epilépticas', 'Doenças Desmielinizantes']
  },
  {
    id: 'histology',
    name: 'Histologia',
    category: 'Ciclo Básico',
    icon: 'layers',
    description: 'Microestrutura de tecidos epiteliais, conjuntivos, musculares e nervosos ao microscópio.',
    topics: ['Tecido Muscular Cardíaco e Estriado', 'Endotélio e Vasos', 'Tecido Conjuntivo e Matriz Extracelular']
  },
  {
    id: 'embryology',
    name: 'Embriologia Humana',
    category: 'Ciclo Básico',
    icon: 'sparkles',
    description: 'Desenvolvimento pré-natal, gametogênese, organogênese e malformações congênitas.',
    topics: ['Desenvolvimento do Tubo Cardíaco', 'Septação Cardíaca Fetal', 'Circulação Fetal e Pós-Natal']
  },
  {
    id: 'biochemistry',
    name: 'Bioquímica Médica',
    category: 'Ciclo Básico',
    icon: 'zap',
    description: 'Metabolismo intermediário, ciclo de Krebs, cadeia respiratória, enzimas e vias energéticas miocárdicas.',
    topics: ['Metabolismo Energético Cardíaco', 'Marcadores Bioquímicos de Necrose Miocárdica', 'Lipídios e Aterogênese']
  },
  {
    id: 'microbiology',
    name: 'Microbiologia Médica',
    category: 'Ciclo Básico / Clínico',
    icon: 'layers',
    description: 'Bactérias, vírus, fungos e parasitas patogênicos, mecanismos de virulência e resistência antimicrobiana.',
    topics: ['Bacteremia e Endocardite Infecciosa', 'Mecanismos de Resistência Bacteriana', 'Infecções Hospitalares']
  },
  {
    id: 'immunology',
    name: 'Imunologia Médica',
    category: 'Ciclo Básico / Clínico',
    icon: 'activity',
    description: 'Sistema imune inato e adaptativo, hipersensibilidade, autoimunidade e inflamação vascular.',
    topics: ['Resposta Imune Inata vs Adaptativa', 'Imunopatologia da Febre Reumática', 'Citocinas Inflamatórias']
  }
];

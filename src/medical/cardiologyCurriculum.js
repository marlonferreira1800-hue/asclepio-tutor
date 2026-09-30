// Cardiovascular Masterclass Curriculum for MedTutor 3D
// Structured for Socratic learning, 3D anatomical coordination, and clinical correlation

export const CardiologyCurriculum = {
  title: 'Sistema Cardiovascular: Da Anatomia à Clínica',
  subtitle: 'Aulas Integradas: Anatomia, Fisiologia, Ausculta e Eletrocardiograma',
  author: 'Dr. Asclépio - Professor Virtual de Cardiologia',
  modules: [
    {
      id: 'mod1_anatomy',
      number: 1,
      title: 'Morfologia Geral e Circulação Dupla',
      subtitle: 'Mediastino, Camadas da Parede e Circuito Sistêmico vs Pulmonar',
      tutorSpeech: 'Olá, futuro colega médico! Seja muito bem-vindo ao nosso laboratório virtual de Cardiologia. Hoje vamos desvendar o coração humano em 3D. O coração é uma bomba mecânica muscular localizada no mediastino médio, inclinada obliquamente com seu ápice voltado para a esquerda e para frente. Note como ele divide o fluxo sanguíneo em dois circuitos em série: a circulação pulmonar, de baixa pressão, e a circulação sistêmica, de alta pressão. Observe aqui ao meu lado a distribuição espacial dos grandes vasos da base.',
      board: {
        heading: 'Morfologia Cardíaca e Circuitos',
        badge: 'Anatomia & Fisiologia',
        points: [
          'Localização: Mediastino médio, repousando sobre a cúpula diafragmática.',
          'Camadas: Pericárdio (fibroso/seroso), Miocárdio (músculo contrátil) e Endocárdio (revestimento endotelial).',
          'Pequena Circulação (Pulmonar): VD → Tronco Pulmonar → Pulmões (hematose) → Veias Pulmonares → AE. Regime de baixa pressão (~25/10 mmHg).',
          'Grande Circulação (Sistêmica): VE → Valva Aórtica → Aorta e ramos sistêmicos → Capilares corporais → Veias Cavas → AD. Regime de alta pressão (~120/80 mmHg).'
        ],
        diagram: 'circulatory_circuit',
        clinicalNote: 'Derrame pericárdico agudo com apenas 150-200ml pode causar Tamponamento Cardíaco (Tríade de Beck: hipotensão, abafamento de bulhas e turgência jugular).'
      },
      heartFocus: 'vessels',
      bloodFlowMode: 'all',
      feynmanAnalogy: 'Imagine o sistema cardiovascular como um circuito hidráulico predial com duas bombas acopladas: a primeira bomba (coração direito) apenas empurra a água para a estação de filtragem e oxigenação no telhado (pulmões) sem esforço. A segunda bomba (coração esquerdo), muito mais potente, empurra a água limpa com alta pressão para todos os andares do edifício (o corpo inteiro).',
      checkQuestion: {
        question: 'Qual é a principal razão pela qual o regime de pressão da circulação pulmonar é significativamente menor que o da circulação sistêmica?',
        options: [
          'Porque a resistência vascular pulmonar é muito menor para evitar extravasamento de líquido nos alvéolos (edema pulmonar).',
          'Porque o sangue venoso é mais espesso e flui mais lentamente.',
          'Porque o ventrículo direito não possui valvas de fechamento.',
          'Porque o tronco pulmonar tem diâmetro inferior ao da aorta.'
        ],
        correctIndex: 0,
        explanation: 'Exatamente! A vasculatura pulmonar possui alta complacência e baixa resistência (RVP ~1/10 da RVS). Pressões elevadas no leito pulmonar levariam à ruptura da barreira alvéolo-capilar e edema agudo de pulmão.'
      }
    },
    {
      id: 'mod2_chambers_valves',
      number: 2,
      title: 'Câmaras, Valvas e Arquitetura Ventricular',
      subtitle: 'Átrios, Ventrículos, Valvas Atrioventriculares e Semilunares',
      tutorSpeech: 'Agora vamos abrir o corte anatômico do coração. Repare que as quatro câmaras cardíacas operam com assimetrias estruturais marcantes. O ventrículo esquerdo possui uma parede miocárdica quase três vezes mais espessa que a do ventrículo direito, pois precisa vencer a pós-carga sistêmica. E observe as valvas cardíacas: temos duas atrioventriculares — a Mitral, bicúspide à esquerda, e a Tricúspide à direita, fixadas por cordoalhas tendíneas aos músculos papilares. E as semilunares: Aórtica e Pulmonar. Elas garantem o fluxo estritamente unidirecional.',
      board: {
        heading: 'Câmaras e Aparelho Valvar',
        badge: 'Anatomia Macroscópica',
        points: [
          'Átrio Direito: Recebe veias cavas superior e inferior e seio coronário; presença dos músculos pectinados e fossa oval.',
          'Ventrículo Esquerdo: Miocárdio espesso (8-11 mm no adulto), cavidade elipsoide de alta pressão.',
          'Valvas Atrioventriculares: Tricúspide (3 cúspides) e Mitral (2 cúspides). Sustentadas por cordoalhas tendíneas e músculos papilares para impedir prolapso na sístole.',
          'Valvas Semilunares: Aórtica e Pulmonar (formato de bolsa/ninho de pombo com 3 cúspides).'
        ],
        diagram: 'valvular_apparatus',
        clinicalNote: 'A ruptura de cordoalha tendínea (por infarto com isquemia de músculo papilar ou endocardite) gera insuficiência mitral aguda grave e choque cardiogênico súbito.'
      },
      heartFocus: 'cross_section',
      bloodFlowMode: 'chambers',
      feynmanAnalogy: 'As valvas atrioventriculares com suas cordoalhas funcionam como um paraquedas: quando o ventrículo contrai com enorme força, o sangue tenta forçar a porta de volta para o átrio, mas as cordas do paraquedas (cordoalhas) puxam as bordas da valva para mantê-la fechada e impedir que ela vire do avesso.',
      checkQuestion: {
        question: 'O que ocorre funcionalmente com os músculos papilares e cordoalhas tendíneas durante a sístole ventricular?',
        options: [
          'Os músculos papilares contraem-se simultaneamente com a parede ventricular, tensionando as cordoalhas e impedindo o prolapso das cúspides para o átrio.',
          'Eles relaxam passivamente para permitir a abertura ampla da valva mitral.',
          'Eles empurram a valva aórtica para cima para facilitar a ejeção.',
          'Eles abrem canais iônicos de cálcio diretamente na cavidade atrial.'
        ],
        correctIndex: 0,
        explanation: 'Perfeito! Os músculos papilares contraem-se durante a sístole para manter a tensão nas cordoalhas tendíneas, contrapondo-se à enorme pressão intraventricular que tentaria forçar as cúspides valvares para o interior do átrio.'
      }
    },
    {
      id: 'mod3_cycle_auscultation',
      number: 3,
      title: 'Ciclo Cardíaco e Ausculta',
      subtitle: 'Sístole, Diástole, Mecânica de Pressão e Gênese de B1 e B2',
      tutorSpeech: 'Ouça atentamente este som rítmico que acabo de ativar no nosso simulador de áudio. É o famoso "tum-tá" da ausculta cardíaca. O primeiro som, B1, é produzido pela súbita desaceleração do sangue e vibração estrutural no fechamento das valvas mitral e tricúspide, marcando o início da sístole mecânica. O segundo som, B2, é gerado pelo fechamento das valvas semilunares, aórtica e pulmonar, selando o fim da sístole e o início da diástole. Vamos entender os cinco focos clássicos de ausculta no tórax.',
      board: {
        heading: 'Fases do Ciclo e Focos Precordiais',
        badge: 'Fisiologia & Semiologia',
        points: [
          'Fases da Sístole: Contração isovolumétrica → Ejeção rápida → Ejeção reduzida.',
          'Fases da Diástole: Relaxamento isovolumétrico → Enchimento ventricular rápido (onde pode surgir B3) → Diástase → Sístole atrial (contração atrial, onde pode surgir B4).',
          'Primeira Bulha (B1 - "tum"): Fechamento Mitral (M1) e Tricúspide (T1). Coincide com o pulso carotídeo.',
          'Segunda Bulha (B2 - "tá"): Fechamento Aórtico (A2) e Pulmonar (P2). Desdobramento fisiológico na inspiração.',
          'Focos de Ausculta: Aórtico (2º EIC D), Pulmonar (2º EIC E), Acessório (3º EIC E), Tricúspide (4º/5º EIC E) e Mitral (5º EIC E na LHC).'
        ],
        diagram: 'wiggers_diagram',
        clinicalNote: 'Terceira bulha (B3) é som de enchimento rápido por desaceleração abrupta em ventrículo dilatado complacente (comum na Insuficiência Cardíaca descompensada).'
      },
      heartFocus: 'valves',
      bloodFlowMode: 'beat_synced',
      feynmanAnalogy: 'Pense em portas automáticas de vaivém de um salão: quando uma multidão entra correndo e tenta voltar de repente, a porta bate com força contra o batente criando um estrondo: B1 é a porta do fundo (mitral/tricúspide) batendo quando a sala começa a apertar, e B2 é a porta da frente (aórtica) batendo quando todo o fluxo já foi expulso.',
      checkQuestion: {
        question: 'Durante qual fase exata do ciclo cardíaco todas as quatro valvas cardíacas encontram-se fechadas e o volume intraventricular permanece inalterado com pressão em rápida elevação?',
        options: [
          'Contração isovolumétrica.',
          'Ejeção ventricular rápida.',
          'Enchimento ventricular passivo.',
          'Sístole atrial.'
        ],
        correctIndex: 0,
        explanation: 'Excelente! Na contração isovolumétrica, os ventrículos estão despolarizados e contraindo, as valvas AV já se fecharam (B1), mas a pressão intraventricular ainda não superou a pressão diastólica da aorta (80 mmHg) nem da artéria pulmonar (10 mmHg), portanto todas as quatro valvas estão fechadas.'
      }
    },
    {
      id: 'mod4_electrophysiology_ecg',
      number: 4,
      title: 'Eletrofisiologia e Correlação com o ECG',
      subtitle: 'Nó Sinusal, Condução e Formação das Ondas P, QRS e T',
      tutorSpeech: 'Agora vamos analisar o motor elétrico que comanda tudo isso. Observe estas linhas luminosas pulsando no modelo 3D. O estímulo nasce espontaneamente no Nó Sinoatrial, no teto do átrio direito, graças ao automatismo das células marca-passo pelas correntes ifunny. A onda viaja pelos átrios despolarizando-os, o que desenha a Onda P no eletrocardiograma. Ao atingir o Nó Atrioventricular, o estímulo sofre um retardo fisiológico crucial de cerca de zero vírgula dez segundos. Esse atraso permite que os átrios esvaziem todo o sangue nos ventrículos antes que estes comecem a contrair. Em seguida, o feixe de His e as fibras de Purkinje disparam em altíssima velocidade, gerando o complexo QRS.',
      board: {
        heading: 'Sistema de Condução e Morfologia do ECG',
        badge: 'Eletrofisiologia Cardíaca',
        points: [
          'Nó Sinoatrial (SA): Marca-passo fisiológico dominante (60-100 bpm) no sulco terminal do átrio direito.',
          'Nó Atrioventricular (AV): Retardo de condução proporcional (intervalo PR normal: 120-200 ms). Evita sístole atrial e ventricular simultâneas.',
          'Feixe de His e Ramos (Direito e Esquerdo com fascículos anterior e posterior) → Fibras de Purkinje (condução rápida a 2-4 m/s).',
          'Onda P: Despolarização atrial (vetor de cima para baixo, direita para esquerda).',
          'Complexo QRS: Despolarização ventricular rápida (< 120 ms).',
          'Segmento ST e Onda T: Repolarização ventricular lenta.'
        ],
        diagram: 'ecg_conduction_strip',
        clinicalNote: 'Bloqueio Atrioventricular Total (BAVT): Dissociação completa entre ondas P e complexos QRS; emergência médica que comumente exige implante de marca-passo definitivo.'
      },
      heartFocus: 'conduction',
      bloodFlowMode: 'electrical',
      feynmanAnalogy: 'O sistema de condução cardíaco funciona como uma linha de trem de alta velocidade com uma cancela inteligente no meio do caminho: o trem parte da estação central (Nó SA), viaja rapidamente pela cidadezinha dos átrios, para na cancela (Nó AV) durante alguns segundos para todos os passageiros (o sangue) embarcarem nos vagões principais, e depois acelera a 300 km/h pelos trilhos expressos (Feixe de His e Purkinje) para disparar a propulsão.',
      checkQuestion: {
        question: 'O que representa o Intervalo PR em um traçado eletrocardiográfico e qual é a consequência clínica se ele estiver progressivamente se alargando até haver uma onda P bloqueada (Fenômeno de Wenckebach)?',
        options: [
          'Representa o tempo de condução sinusal e atrioventricular até os ventrículos; caracteriza o Bloqueio Atrioventricular de 2º Grau Mobitz I.',
          'Representa a duração da repolarização ventricular; caracteriza Síndrome do QT Longo.',
          'Representa a sobrecarga ventricular esquerda isolada.',
          'Representa apenas o tempo de contração dos músculos papilares.'
        ],
        correctIndex: 0,
        explanation: 'Corretíssimo! O intervalo PR mede desde o início da despolarização atrial até o início da despolarização ventricular. O alargamento progressivo do PR seguido de onda P sem QRS subsequente define o BAV de 2º grau tipo Mobitz I (Wenckebach), geralmente com nó AV como sítio do bloqueio e prognóstico benigno.'
      }
    },
    {
      id: 'mod5_clinical_correlation',
      number: 5,
      title: 'Caso Clínico e Raciocínio Patológico',
      subtitle: 'Síndrome Coronariana Aguda: Fisiopatologia, ECG e Conduta',
      tutorSpeech: 'Para coroar nossa aula, vamos aplicar tudo o que vimos na beira do leito. Imagine que você está no plantão do pronto-socorro e dá entrada um paciente de 58 anos com dor torácica retroesternal em aperto, irradiando para mandíbula e membro superior esquerdo, acompanhada de sudorese fria há duas horas. Este é o quadro clássico de Síndrome Coronariana Aguda. A placa de ateroma rica em lipídios na artéria coronária sofreu erosão ou ruptura, expondo colágeno subendotelial e provocando trombo oclusivo agudo. O miocárdio isquêmico para de contrair e começa a sofrer lesão transmural, evidenciada pelo supradesnivelamento do segmento ST no ECG. Lembre-se do mantra da cardiologia: tempo é miocárdio!',
      board: {
        heading: 'Síndrome Coronariana Aguda (IAM)',
        badge: 'Emergência & Semiologia',
        points: [
          'Fisiopatologia: Ruptura/fissura de placa aterosclerótica vulnerável → ativação e agregação plaquetária → cascata de coagulação → trombo oclusivo intraluminal.',
          'Abordagem Imediata no PS (Protocolo Dor Torácica): ECG de 12 derivações em até 10 MINUTOS.',
          'Diferenciação: IAM com Supra de ST (oclusão total) vs IAM sem Supra / Angina Instável (oclusão subtotal).',
          'Biomarcadores: Troponina I ou T ultrassensível (curva ascendente em 1-3 horas).',
          'Manejo Inicial: Dupla antiagregação plaquetária (AAS + Clopidogrel/Ticagrelor), anticoagulação plena, estatina potente e reperfusão imediata (Angioplastia primária em < 90 min porta-balão).'
        ],
        diagram: 'infarct_st_elevation',
        clinicalNote: 'Nem toda dor torácica é IAM: sempre faça o diagnóstico diferencial com Dissecção Aguda de Aorta (dor lancinante, assimetria de pulsos), TEP (dispneia súbita, taquicardia) e Pneumotórax Hipertensivo.'
      },
      heartFocus: 'coronaries',
      bloodFlowMode: 'ischemia_highlight',
      feynmanAnalogy: 'Imagine uma avenida principal com 4 pistas (a artéria coronária descendente anterior) que alimenta um bairro inteiro com energia elétrica (o ventrículo esquerdo). Se um caminhão tomba e bloqueia todas as 4 pistas subitamente (trombo oclusivo total), o bairro inteiro entra em apagão elétrico (supra de ST) e as máquinas do bairro param de girar. Se você não mandar a equipe de resgate desobstruir a via em menos de 90 a 120 minutos, as construções do bairro sofrerão colapso permanente.',
      checkQuestion: {
        question: 'Em um paciente com dor torácica típica e ECG demonstrando supradesnivelamento do segmento ST de 2 mm em DII, DIII e aVF (parede inferior), qual artéria coronária é mais frequentemente a culpada e qual exame complementar imediato deve ser realizado antes de administrar vasodilatadores (como nitratos)?',
        options: [
          'Artéria Coronária Direita (ACD); deve-se rodar derivações direitas (V3R e V4R) para afastar acometimento do Ventrículo Direito, onde nitratos podem causar choque hipotensivo grave.',
          'Artéria Circunflexa; deve-se solicitar ecocardiograma transtorácico com contraste antes de qualquer medicamento.',
          'Tronco da Coronária Esquerda; deve-se administrar morfina em altas doses sem avaliação adicional.',
          'Artéria Descendente Anterior; deve-se prescrever betabloqueador venoso imediatamente.'
        ],
        correctIndex: 0,
        explanation: 'Brilhante raciocínio clínico! A parede inferior (DII, DIII, aVF) é irrigada pela Coronária Direita em cerca de 85-90% dos indivíduos (dominância direita). Em até um terço dos casos há infarto associado do Ventrículo Direito, que é estritamente dependente de pré-carga. O uso inadvertido de nitratos dilata o sistema venoso, reduz drasticamente o retorno venoso e pode precipitar choque hemodinâmico catastrófico.'
      }
    }
  ]
};

// Interactive Clinical Case Simulation for MedTutor 3D

export const ClinicalCases = [
  {
    id: 'case_iam_carlos',
    title: 'Caso Clínico: Dor Torácica Aguda no Pronto-Socorro',
    patient: {
      name: 'Carlos Alberto Silva',
      age: 58,
      gender: 'Masculino',
      occupation: 'Gerente Comercial',
      history: 'Hipertenso e tabagista (40 anos-maço), dislipidêmico em uso irregular de sinvastatina. Nega cirurgias prévias.'
    },
    stages: [
      {
        stageNumber: 1,
        title: 'Admissão e Queixa Principal',
        tutorIntroduction: 'Doutor(a), o paciente Carlos acaba de dar entrada no setor de emergência do nosso hospital. Ele está sentado na maca com a mão espalmada sobre o peito (Sinal de Levine positivo), pálido e com sudorese fria. Vamos realizar a anamnese focada.',
        patientDialogue: '"Doutor, começou há cerca de duas horas enquanto eu estava dirigindo... Uma dor terrível em aperto, parece uma tonelada em cima do meu peito. Irradia para o braço esquerdo e para a minha mandíbula. Tentei respirar fundo e não melhora. Estou sentindo um enjoo e uma sensação de que vou morrer..."',
        vitalSigns: {
          pa: '160/95 mmHg',
          fc: '102 bpm (taquicárdico)',
          fr: '22 irpm',
          spo2: '96% em ar ambiente',
          tax: '36.4 °C'
        },
        tutorPrompt: 'Diante desta queixa típica e fatores de risco cardiovasculares, qual é a sua PRIMEIRA ação prioritária no protocolo de dor torácica?',
        options: [
          'Solicitar Eletrocardiograma de 12 derivações em até 10 minutos e monitorização contínua com oxímetro e acesso venoso.',
          'Administrar imediatamente morfina em bolus e aguardar 30 minutos para reavaliar.',
          'Solicitar tomografia de tórax com contraste para descartar pneumonia.',
          'Prescrever alta hospitalar com indicação de consulta ambulatorial com cardiologista.'
        ],
        correctIndex: 0,
        feedback: 'Correto! A diretriz da Sociedade Brasileira de Cardiologia e da AHA/ACC preconiza a realização e interpretação do ECG de 12 derivações em até 10 minutos (tempo porta-ECG) da admissão de todo paciente com dor torácica suspeita.'
      },
      {
        stageNumber: 2,
        title: 'Interpretação do Eletrocardiograma (ECG)',
        tutorIntroduction: 'O eletrocardiograma foi impresso e colocado no nosso visor digital. Dê uma olhada no quadro: temos ritmo sinusal, frequência de 100 bpm e supradesnivelamento do segmento ST de 3 mm em V1, V2, V3 e V4, com inversão de onda T associada e imagens especulares (infradesnivelamento de ST) em DII, DIII e aVF.',
        findings: [
          'Supradesnivelamento de ST de 3 mm de V1 a V4 (Parede Anterior / Ântero-septal).',
          'Imagens em espelho (infradesnível) nas derivações inferiores.',
          'Ausência de bloqueio de ramo esquerdo novo.'
        ],
        tutorPrompt: 'Qual é a topografia da parede afetada e a artéria coronária culpada mais provável?',
        options: [
          'Parede Anterior Extensa / Ântero-septal; Artéria Descendente Anterior (DA).',
          'Parede Inferior; Artéria Coronária Direita (ACD).',
          'Parede Lateral; Artéria Marginal Esquerda.',
          'Parede Posterior; Artéria Circunflexa.'
        ],
        correctIndex: 0,
        feedback: 'Excelente identificação! As derivações V1-V4 avaliam o septo interventricular e a parede anterior do ventrículo esquerdo, território dependente da Artéria Descendente Anterior (ramo do tronco da coronária esquerda), responsável por perfundir a maior massa miocárdica ventricular.'
      },
      {
        stageNumber: 3,
        title: 'Conduta e Terapia de Reperfusão',
        tutorIntroduction: 'Com o diagnóstico firmado de Infarto Agudo do Miocárdio com Supradesnivelamento de ST (IAMCSST) de parede anterior, tempo é músculo! Nosso serviço conta com laboratório de hemodinâmica disponível 24 horas.',
        treatmentPoints: [
          'Monitorização, 2 acessos venosos calibrosos, oxigênio apenas se SpO2 < 90%.',
          'AAS 200 a 300 mg mastigável.',
          'Segundo antiplaquetário: Ticagrelor 180 mg (ou Clopidogrel 600 mg).',
          'Anticoagulação plena (Enoxaparina ou Heparina Não Fracionada).',
          'Estatina de alta intensidade (Atorvastatina 80 mg).',
          'Encaminhamento imediato para Angioplastia Coronariana Primária (Meta: tempo porta-balão < 90 minutos).'
        ],
        tutorPrompt: 'Se o paciente estivesse em uma UPA do interior a 3 horas de distância do serviço de hemodinâmica mais próximo (tempo para angioplastia > 120 min), qual seria a conduta mandatória de reperfusão?',
        options: [
          'Realizar trombólise química com agente trombolítico (ex: Tenecteplase ou Alteplase) em até 30 minutos (tempo porta-agulha), na ausência de contraindicações formais.',
          'Transferir o paciente em ambulância simples sem nenhuma medicação trombolítica.',
          'Aguardar o resultado da dosagem de Troponina ultrassensível para confirmar se houve infarto antes de tomar conduta.',
          'Aplicar apenas bolsa térmica de água quente no tórax e repouso.'
        ],
        correctIndex: 0,
        feedback: 'Perfeito! Quando o tempo previsto entre o primeiro contato médico e a insuflação do balão no laboratório de hemodinâmica ultrapassa 120 minutos, a reperfusão farmacológica imediata com fibrinolítico deve ser realizada com meta porta-agulha menor que 30 minutos, seguida de transferência para cateterismo nas 2 a 24 horas seguintes (estratégia fármaco-invasiva).'
      }
    ]
  }
];

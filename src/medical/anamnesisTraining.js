// Virtual Patient Anamnesis Training Module

export const AnamnesisTrainingData = {
  patient: {
    name: 'Dona Maria de Lourdes',
    age: 63,
    presentation: 'Paciente aposentada, queixa-se de cansaço progressivo e inchaço nos tornozelos há 3 semanas.',
    personality: 'Preocupada, cooperativa, mas às vezes confunde termos médicos.'
  },
  tutorCoachTips: [
    'Lembre-se da importância do acolhimento inicial e do estabelecimento de rapport.',
    'Inicie com perguntas ABERTAS ("Como posso ajudar a senhora hoje?") antes de afunilar para perguntas fechadas.',
    'Investigue os 7 atributos clássicos do sintoma: Localização, Qualidade, Intensidade, Cronologia, Fatores de Melhora/Piora e Sintomas Associados.',
    'Avalie ortopneia (quantos travesseiros usa para dormir) e dispneia paroxística noturna, marcadores de Insuficiência Cardíaca.'
  ],
  dialogueNodes: {
    start: {
      tutorTip: 'Comece saudando a paciente com empatia e perguntando o motivo de sua vinda.',
      patientGreeting: '"Bom dia, doutor(a)... Muito obrigada por me atender. Eu ando muito preocupada ultimamente."',
      options: [
        {
          text: 'Bom dia, Dona Maria! Sente-se confortavelmente. Por favor, me conte o que tem sentido e como posso ajudar a senhora hoje?',
          type: 'open_empathic',
          score: 10,
          response: '"Doutor, de umas três semanas para cá, comecei a sentir uma falta de ar esquisita. Antes eu subia a escada da minha casa carregando compras sem problema. Agora, para varrer a sala, sinto que o ar não entra no pulmão. E meus pés parecem dois pães de tão inchados no fim da tarde."',
          nextNode: 'symptom_deepening'
        },
        {
          text: 'A senhora tem infarto na família ou pressão alta? Responda rápido, por favor.',
          type: 'closed_cold',
          score: -5,
          tutorCorrection: 'Cuidado! Interromper precocemente com perguntas fechadas e tom ríspido quebra a relação médico-paciente e impede a paciente de relatar a história espontânea.',
          response: '"Bem... Meu pai era hipertenso... Mas o que está me incomodando mesmo é o cansaço no peito e as pernas inchadas..."',
          nextNode: 'symptom_deepening'
        }
      ]
    },
    symptom_deepening: {
      tutorTip: 'Excelente início. Agora vamos investigar a gravidade da dispneia e os sinais de congestão pulmonar e sistêmica.',
      options: [
        {
          text: 'Entendo perfeitamente sua aflição, Dona Maria. Me conte: como a senhora tem dormido à noite? Precisa elevar a cabeceira ou acorda com falta de ar?',
          type: 'clinical_gold',
          score: 10,
          response: '"Nossa, doutor, o senhor acertou na mosca! Há quatro dias eu não consigo dormir com um travesseiro só, parece que estou me afogando. Precisei colocar três travesseiros para conseguir pregar o olho. E anteontem acordei de madrugada sufocada, precisei abrir a janela para puxar o ar."',
          nextNode: 'habits_meds'
        },
        {
          text: 'A senhora tem dor de estômago ou diarreia?',
          type: 'unrelated',
          score: 2,
          response: '"Não, meu intestino está normal... O problema é só o fôlego mesmo e as pernas."',
          nextNode: 'habits_meds'
        }
      ]
    },
    habits_meds: {
      tutorTip: 'Quadro clássico de ortopneia e Dispneia Paroxística Noturna (DPN)! Investigue agora medicamentos em uso e adesão.',
      options: [
        {
          text: 'Dona Maria, a senhora faz uso de algum remédio contínuo para pressão ou coração? Tem tomado certinho todos os dias?',
          type: 'medication_adherence',
          score: 10,
          response: '"O médico do posto me passou Enalapril e um comprimidinho de furosemida. Mas confesso que há umas três semanas acabou a furosemida e eu acabei não renovando a receita porque achei que já estava boazinha... E no fim de semana exagerei um pouco no bacalhau salgado."',
          nextNode: 'conclusion'
        }
      ]
    },
    conclusion: {
      tutorTip: 'Hipótese diagnóstica brilhantemente construída: Insuficiência Cardíaca Congestiva (ICC) descompensada (perfil B - congesto e quente) precipitada por má adesão medicamentosa e sobrecarga de sódio alimentar.',
      patientConclusion: '"Doutor, o que será que eu tenho? É grave?"',
      options: [
        {
          text: 'Dona Maria, compreendo sua preocupação. O seu coração está com dificuldade de bombear os líquidos do corpo porque faltou o diurético e houve excesso de sal. Nós vamos auscultar seu pulmão e coração agora, ajustar os remédios e a senhora vai voltar a respirar com tranquilidade.',
          score: 10,
          isFinish: true
        }
      ]
    }
  }
};

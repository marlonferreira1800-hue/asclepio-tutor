// Cardiac Auscultation Simulator Data

export const AuscultationFoci = [
  {
    id: 'aortic',
    name: 'Foco Aórtico',
    anatomicalLocation: '2º Espaço Intercostal Direito, linha paraesternal direita',
    description: 'Melhor ponto de ausculta para a valva aórtica. Permite ouvir B2 (componente A2) com intensidade superior a B1.',
    pathologySound: 'stenosis',
    clinicalSignificance: 'Estenose Aórtica: Sopro mesossistólico áspero, em diamante (crescendo-decrescendo), com irradiação típica para as artérias carótidas.',
    normalNotes: 'B2 nítida e hiperfonética em comparação a B1.'
  },
  {
    id: 'pulmonic',
    name: 'Foco Pulmonar',
    anatomicalLocation: '2º Espaço Intercostal Esquerdo, linha paraesternal esquerda',
    description: 'Projeção da valva pulmonar. Ideal para avaliar o desdobramento fisiológico de B2 (A2 e P2 se afastam durante a inspiração profunda).',
    pathologySound: 'normal',
    clinicalSignificance: 'Desdobramento fixo de B2: Sugere Comunicação Interatrial (CIA). Hipertensão Pulmonar: Hiperfonese acentuada de P2.',
    normalNotes: 'Desdobramento fisiológico durante a inspiração devido ao aumento do retorno venoso às câmaras direitas.'
  },
  {
    id: 'erbs',
    name: 'Foco Aórtico Acessório (Ponto de Erb)',
    anatomicalLocation: '3º Espaço Intercostal Esquerdo, linha paraesternal esquerda',
    description: 'Excelente para escutar fenômenos originados na via de saída do ventrículo esquerdo e regurgitações da valva aórtica.',
    pathologySound: 'stenosis',
    clinicalSignificance: 'Insuficiência Aórtica: Sopro protodiastólico aspirativo de alta frequência, mais bem audível com o paciente sentado e inclinado para frente.',
    normalNotes: 'Área intermediária de transição entre base e ponta do coração.'
  },
  {
    id: 'tricuspid',
    name: 'Foco Tricúspide',
    anatomicalLocation: '4º a 5º Espaço Intercostal Esquerdo, junto à borda esternal inferior',
    description: 'Melhor foco para ausculta da valva atrioventricular direita (Tricúspide).',
    pathologySound: 'regurgitation',
    clinicalSignificance: 'Manobra de Rivero-Carvallo: Sopros tricúspides aumentam de intensidade na inspiração profunda, diferentemente dos sopros mitrais.',
    normalNotes: 'B1 bem audível, componente T1 discreto.'
  },
  {
    id: 'mitral',
    name: 'Foco Mitral (Ápice / Ictus Cordis)',
    anatomicalLocation: '5º Espaço Intercostal Esquerdo, linha hemiclavicular esquerda',
    description: 'Localização do ápice do ventrículo esquerdo (ictus cordis). Foco primordial para avaliação da valva mitral e bulhas acessórias (B3 e B4).',
    pathologySound: 'regurgitation',
    clinicalSignificance: 'Insuficiência Mitral: Sopro holossistólico regurgitativo de alta frequência com irradiação característica para a axila esquerda. Presença de B3 em ventrículos dilatados.',
    normalNotes: 'B1 é mais intensa que B2 no ápice cardíaco.'
  }
];

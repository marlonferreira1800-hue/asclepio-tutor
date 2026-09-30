import * as THREE from 'three';

// Interactive 3D Anatomical Heart Model for MedTutor 3D
// Includes chambers, great vessels, coronary arteries, valves, conduction system, and cutaway view

export class HeartModel {
  constructor() {
    this.group = new THREE.Group();
    this.group.name = 'HumanHeart';

    // Heartbeat state
    this.bpm = 72;
    this.beatPhase = 0;
    this.isBeating = true;
    this.baseScale = 1.0;
    this.isCutaway = false;

    // Interactive parts map
    this.parts = {};
    this.conductionElements = [];

    this.buildHeart();
  }

  buildHeart() {
    // 1. Materials
    this.materials = {
      myocardium: new THREE.MeshStandardMaterial({
        color: 0x9b2226,
        roughness: 0.5,
        metalness: 0.15,
        bumpScale: 0.05
      }),
      myocardiumCut: new THREE.MeshStandardMaterial({
        color: 0x7c1a1e,
        roughness: 0.6,
        metalness: 0.1
      }),
      aorta: new THREE.MeshStandardMaterial({
        color: 0xd90429,
        roughness: 0.35,
        metalness: 0.2
      }),
      pulmonaryArtery: new THREE.MeshStandardMaterial({
        color: 0x0077b6,
        roughness: 0.38,
        metalness: 0.2
      }),
      venaCava: new THREE.MeshStandardMaterial({
        color: 0x023e8a,
        roughness: 0.4,
        metalness: 0.18
      }),
      pulmonaryVeins: new THREE.MeshStandardMaterial({
        color: 0xc1121f,
        roughness: 0.35,
        metalness: 0.2
      }),
      valves: new THREE.MeshStandardMaterial({
        color: 0xfdf0d5,
        roughness: 0.3,
        metalness: 0.05,
        transparent: true,
        opacity: 0.88,
        side: THREE.DoubleSide
      }),
      chordae: new THREE.MeshStandardMaterial({
        color: 0xffffff,
        roughness: 0.4,
        metalness: 0.0
      }),
      coronaries: new THREE.MeshStandardMaterial({
        color: 0xef233c,
        roughness: 0.3,
        metalness: 0.3
      }),
      conduction: new THREE.MeshStandardMaterial({
        color: 0xffd166,
        emissive: 0xffb703,
        emissiveIntensity: 0.8,
        roughness: 0.2
      })
    };

    // Container for outer exterior heart
    this.outerHeart = new THREE.Group();
    // Container for interior cutaway heart
    this.cutawayHeart = new THREE.Group();
    this.cutawayHeart.visible = false;

    this.group.add(this.outerHeart);
    this.group.add(this.cutawayHeart);

    this.buildExterior();
    this.buildInternalCutaway();
    this.buildConductionSystem();
    this.buildGreatVessels();
    this.buildCoronaryVessels();

    // Natural anatomical tilt in mediastino: Apex pointing left, anterior, and inferior
    this.group.rotation.x = 0.15;
    this.group.rotation.y = -0.3;
    this.group.rotation.z = -0.22;
  }

  buildExterior() {
    // Left Ventricle (apex, cone-shaped, muscular)
    const lvGeo = new THREE.ConeGeometry(0.85, 1.8, 32);
    lvGeo.rotateX(Math.PI);
    lvGeo.scale(1.0, 1.0, 0.85);
    const lvMesh = new THREE.Mesh(lvGeo, this.materials.myocardium);
    lvMesh.position.set(-0.25, -0.4, 0.0);
    lvMesh.rotation.z = -0.15;
    this.outerHeart.add(lvMesh);
    this.parts.leftVentricle = lvMesh;

    // Right Ventricle (crescent anterior to LV)
    const rvGeo = new THREE.SphereGeometry(0.75, 32, 24, 0, Math.PI * 1.2, 0, Math.PI);
    rvGeo.scale(1.0, 1.3, 0.7);
    const rvMesh = new THREE.Mesh(rvGeo, this.materials.myocardium);
    rvMesh.position.set(0.35, -0.3, 0.18);
    rvMesh.rotation.y = 0.2;
    this.outerHeart.add(rvMesh);
    this.parts.rightVentricle = rvMesh;

    // Left Atrium (posterior-superior)
    const laGeo = new THREE.SphereGeometry(0.65, 24, 20);
    laGeo.scale(1.0, 0.9, 0.85);
    const laMesh = new THREE.Mesh(laGeo, this.materials.myocardium);
    laMesh.position.set(-0.35, 0.65, -0.25);
    this.outerHeart.add(laMesh);
    this.parts.leftAtrium = laMesh;

    // Right Atrium (anterior-superior-right)
    const raGeo = new THREE.SphereGeometry(0.72, 24, 20);
    raGeo.scale(0.95, 1.1, 0.9);
    const raMesh = new THREE.Mesh(raGeo, this.materials.myocardium);
    raMesh.position.set(0.55, 0.55, 0.05);
    this.outerHeart.add(raMesh);
    this.parts.rightAtrium = raMesh;

    // Auricles (orelhuelas)
    const auricleGeo = new THREE.ConeGeometry(0.28, 0.5, 16);
    auricleGeo.rotateZ(1.2);
    const rightAuricle = new THREE.Mesh(auricleGeo, this.materials.myocardium);
    rightAuricle.position.set(0.4, 0.7, 0.45);
    this.outerHeart.add(rightAuricle);

    const leftAuricle = new THREE.Mesh(auricleGeo, this.materials.myocardium);
    leftAuricle.position.set(-0.5, 0.75, 0.25);
    leftAuricle.rotation.z = -1.5;
    this.outerHeart.add(leftAuricle);
  }

  buildInternalCutaway() {
    // Half-cut coronal view showing thick LV wall, thin RV wall, and interventricular septum
    const septumGeo = new THREE.BoxGeometry(0.28, 1.6, 1.0);
    const septum = new THREE.Mesh(septumGeo, this.materials.myocardiumCut);
    septum.position.set(0.05, -0.35, 0);
    this.cutawayHeart.add(septum);
    this.parts.septum = septum;

    // LV Thick Wall Shell
    const lvThickGeo = new THREE.TorusGeometry(0.65, 0.26, 16, 32, Math.PI);
    lvThickGeo.rotateZ(Math.PI * 0.5);
    const lvThick = new THREE.Mesh(lvThickGeo, this.materials.myocardiumCut);
    lvThick.position.set(-0.4, -0.35, 0);
    this.cutawayHeart.add(lvThick);

    // RV Thinner Wall Shell
    const rvThinGeo = new THREE.TorusGeometry(0.7, 0.12, 16, 32, Math.PI);
    rvThinGeo.rotateZ(-Math.PI * 0.5);
    const rvThin = new THREE.Mesh(rvThinGeo, this.materials.myocardiumCut);
    rvThin.position.set(0.5, -0.35, 0);
    this.cutawayHeart.add(rvThin);

    // Mitral Valve (Bicuspid) with Papillary Muscles & Chordae Tendineae
    const mitralGroup = new THREE.Group();
    mitralGroup.position.set(-0.35, 0.2, 0);

    const valveRingGeo = new THREE.RingGeometry(0.18, 0.38, 24);
    valveRingGeo.rotateX(Math.PI * 0.5);
    const mitralRing = new THREE.Mesh(valveRingGeo, this.materials.valves);
    mitralGroup.add(mitralRing);

    // Papillary Muscles
    const papGeo = new THREE.CylinderGeometry(0.08, 0.12, 0.45, 12);
    const pap1 = new THREE.Mesh(papGeo, this.materials.myocardiumCut);
    pap1.position.set(-0.15, -0.6, 0.1);
    const pap2 = new THREE.Mesh(papGeo, this.materials.myocardiumCut);
    pap2.position.set(0.1, -0.6, -0.1);
    mitralGroup.add(pap1);
    mitralGroup.add(pap2);

    // Chordae Tendineae strings
    for (let i = 0; i < 6; i++) {
      const angle = (i / 6) * Math.PI * 2;
      const chordaGeo = new THREE.CylinderGeometry(0.012, 0.012, 0.4, 6);
      const chorda = new THREE.Mesh(chordaGeo, this.materials.chordae);
      const targetPap = i < 3 ? pap1 : pap2;
      chorda.position.set(
        Math.cos(angle) * 0.2 + (targetPap.position.x * 0.5),
        -0.2,
        Math.sin(angle) * 0.2 + (targetPap.position.z * 0.5)
      );
      chorda.rotation.z = (Math.cos(angle) * 0.2);
      mitralGroup.add(chorda);
    }
    this.cutawayHeart.add(mitralGroup);
    this.parts.mitralValve = mitralGroup;

    // Tricuspid Valve
    const tricuspidGroup = new THREE.Group();
    tricuspidGroup.position.set(0.38, 0.2, 0.05);
    const triRing = new THREE.Mesh(valveRingGeo, this.materials.valves);
    tricuspidGroup.add(triRing);
    this.cutawayHeart.add(tricuspidGroup);
    this.parts.tricuspidValve = tricuspidGroup;
  }

  buildGreatVessels() {
    // 1. Ascending Aorta and Aortic Arch (Curved tube with 3 branches)
    const aortaCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-0.15, 0.4, 0.0),
      new THREE.Vector3(-0.1, 0.9, 0.05),
      new THREE.Vector3(0.0, 1.45, 0.0),
      new THREE.Vector3(-0.25, 1.7, -0.2),
      new THREE.Vector3(-0.55, 1.55, -0.4),
      new THREE.Vector3(-0.6, 0.8, -0.5)
    ]);
    const aortaGeo = new THREE.TubeGeometry(aortaCurve, 32, 0.28, 16, false);
    const aortaMesh = new THREE.Mesh(aortaGeo, this.materials.aorta);
    this.group.add(aortaMesh);
    this.parts.aorta = aortaMesh;

    // 3 Aortic Arch Branches (Trunk, Left Carotid, Left Subclavian)
    const branchPositions = [
      new THREE.Vector3(-0.1, 1.62, -0.05),
      new THREE.Vector3(-0.28, 1.74, -0.18),
      new THREE.Vector3(-0.46, 1.68, -0.32)
    ];
    branchPositions.forEach((pos, i) => {
      const bCurve = new THREE.CatmullRomCurve3([
        pos,
        new THREE.Vector3(pos.x + 0.05 * (i - 1), pos.y + 0.45, pos.z + 0.05)
      ]);
      const bGeo = new THREE.TubeGeometry(bCurve, 12, 0.09, 10, false);
      const bMesh = new THREE.Mesh(bGeo, this.materials.aorta);
      this.group.add(bMesh);
    });

    // 2. Pulmonary Trunk (Arising from RV, crossing anterior to aorta)
    const pulmoCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0.15, 0.25, 0.35),
      new THREE.Vector3(0.05, 0.75, 0.3),
      new THREE.Vector3(-0.15, 1.15, 0.1),
      new THREE.Vector3(-0.25, 1.25, -0.15)
    ]);
    const pulmoGeo = new THREE.TubeGeometry(pulmoCurve, 24, 0.26, 16, false);
    const pulmoMesh = new THREE.Mesh(pulmoGeo, this.materials.pulmonaryArtery);
    this.group.add(pulmoMesh);
    this.parts.pulmonaryTrunk = pulmoMesh;

    // Left and Right Pulmonary Artery Branches
    const rpaCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-0.25, 1.25, -0.15),
      new THREE.Vector3(0.5, 1.2, -0.35)
    ]);
    const rpaMesh = new THREE.Mesh(new THREE.TubeGeometry(rpaCurve, 12, 0.18, 12, false), this.materials.pulmonaryArtery);
    this.group.add(rpaMesh);

    const lpaCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-0.25, 1.25, -0.15),
      new THREE.Vector3(-0.85, 1.2, -0.35)
    ]);
    const lpaMesh = new THREE.Mesh(new THREE.TubeGeometry(lpaCurve, 12, 0.18, 12, false), this.materials.pulmonaryArtery);
    this.group.add(lpaMesh);

    // 3. Superior Vena Cava (SVC)
    const svcCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0.65, 0.9, -0.1),
      new THREE.Vector3(0.65, 1.7, -0.15)
    ]);
    const svcMesh = new THREE.Mesh(new THREE.TubeGeometry(svcCurve, 16, 0.22, 14, false), this.materials.venaCava);
    this.group.add(svcMesh);
    this.parts.svc = svcMesh;

    // Inferior Vena Cava (IVC)
    const ivcCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0.6, -0.1, -0.35),
      new THREE.Vector3(0.65, -0.85, -0.4)
    ]);
    const ivcMesh = new THREE.Mesh(new THREE.TubeGeometry(ivcCurve, 16, 0.22, 14, false), this.materials.venaCava);
    this.group.add(ivcMesh);
    this.parts.ivc = ivcMesh;

    // 4. Pulmonary Veins (entering Left Atrium posterior)
    const pvPoints = [
      new THREE.Vector3(-0.8, 0.7, -0.45),
      new THREE.Vector3(-0.8, 0.45, -0.5),
      new THREE.Vector3(0.15, 0.7, -0.6),
      new THREE.Vector3(0.15, 0.45, -0.65)
    ];
    pvPoints.forEach((p, idx) => {
      const pvCurve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(-0.35 + (idx > 1 ? 0.25 : -0.2), 0.6, -0.35),
        p
      ]);
      const pvMesh = new THREE.Mesh(new THREE.TubeGeometry(pvCurve, 8, 0.11, 10, false), this.materials.pulmonaryVeins);
      this.group.add(pvMesh);
    });
  }

  buildCoronaryVessels() {
    // Left Anterior Descending (LAD / Descendente Anterior) in the interventricular groove
    const ladCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-0.15, 0.6, 0.28),
      new THREE.Vector3(-0.05, 0.2, 0.45),
      new THREE.Vector3(-0.1, -0.3, 0.5),
      new THREE.Vector3(-0.25, -0.95, 0.35),
      new THREE.Vector3(-0.3, -1.2, 0.15)
    ]);
    const ladMesh = new THREE.Mesh(new THREE.TubeGeometry(ladCurve, 24, 0.045, 8, false), this.materials.coronaries);
    this.outerHeart.add(ladMesh);
    this.parts.lad = ladMesh;

    // Right Coronary Artery (RCA) in right atrioventricular groove
    const rcaCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0.2, 0.5, 0.25),
      new THREE.Vector3(0.6, 0.2, 0.3),
      new THREE.Vector3(0.7, -0.2, 0.05),
      new THREE.Vector3(0.5, -0.6, -0.3)
    ]);
    const rcaMesh = new THREE.Mesh(new THREE.TubeGeometry(rcaCurve, 20, 0.045, 8, false), this.materials.coronaries);
    this.outerHeart.add(rcaMesh);
    this.parts.rca = rcaMesh;
  }

  buildConductionSystem() {
    this.conductionGroup = new THREE.Group();

    // 1. Sinoatrial (SA) Node
    const saNodeGeo = new THREE.SphereGeometry(0.12, 16, 16);
    const saNode = new THREE.Mesh(saNodeGeo, this.materials.conduction);
    saNode.position.set(0.65, 0.95, 0.0);
    this.conductionGroup.add(saNode);
    this.conductionElements.push(saNode);
    this.parts.saNode = saNode;

    // 2. Atrioventricular (AV) Node
    const avNodeGeo = new THREE.SphereGeometry(0.1, 16, 16);
    const avNode = new THREE.Mesh(avNodeGeo, this.materials.conduction);
    avNode.position.set(0.08, 0.25, 0.0);
    this.conductionGroup.add(avNode);
    this.conductionElements.push(avNode);
    this.parts.avNode = avNode;

    // Internodal Pathways (SA to AV node)
    const internodalCurve = new THREE.CatmullRomCurve3([
      saNode.position,
      new THREE.Vector3(0.45, 0.6, 0.1),
      avNode.position
    ]);
    const inMesh = new THREE.Mesh(new THREE.TubeGeometry(internodalCurve, 16, 0.025, 8, false), this.materials.conduction);
    this.conductionGroup.add(inMesh);

    // 3. Bundle of His & Branches down the Interventricular Septum
    const hisCurve = new THREE.CatmullRomCurve3([
      avNode.position,
      new THREE.Vector3(0.05, 0.0, 0.05),
      new THREE.Vector3(0.02, -0.4, 0.08)
    ]);
    const hisMesh = new THREE.Mesh(new THREE.TubeGeometry(hisCurve, 12, 0.03, 8, false), this.materials.conduction);
    this.conductionGroup.add(hisMesh);

    // Left and Right Bundle Branches splitting at septum towards apex
    const lbbCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0.02, -0.4, 0.08),
      new THREE.Vector3(-0.2, -0.8, 0.12),
      new THREE.Vector3(-0.35, -1.1, 0.05)
    ]);
    const lbbMesh = new THREE.Mesh(new THREE.TubeGeometry(lbbCurve, 16, 0.022, 8, false), this.materials.conduction);
    this.conductionGroup.add(lbbMesh);

    const rbbCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0.02, -0.4, 0.08),
      new THREE.Vector3(0.25, -0.7, 0.18),
      new THREE.Vector3(0.4, -0.9, 0.1)
    ]);
    const rbbMesh = new THREE.Mesh(new THREE.TubeGeometry(rbbCurve, 16, 0.022, 8, false), this.materials.conduction);
    this.conductionGroup.add(rbbMesh);

    this.group.add(this.conductionGroup);
    this.parts.conductionGroup = this.conductionGroup;
  }

  setCutawayView(enabled) {
    this.isCutaway = enabled;
    this.outerHeart.visible = !enabled;
    this.cutawayHeart.visible = enabled;
  }

  toggleCutaway() {
    this.setCutawayView(!this.isCutaway);
    return this.isCutaway;
  }

  highlightPart(partName) {
    // Reset all highlights
    Object.values(this.materials).forEach(m => {
      if (m.emissive) m.emissiveIntensity = 0.0;
    });

    if (partName === 'conduction') {
      this.materials.conduction.emissiveIntensity = 1.2;
    } else if (partName === 'valves' && this.parts.mitralValve) {
      this.materials.valves.emissive = new THREE.Color(0x38bdf8);
      this.materials.valves.emissiveIntensity = 0.6;
    } else if (partName === 'vessels') {
      this.materials.aorta.emissive = new THREE.Color(0xff4d6d);
      this.materials.aorta.emissiveIntensity = 0.4;
      this.materials.pulmonaryArtery.emissive = new THREE.Color(0x00b4d8);
      this.materials.pulmonaryArtery.emissiveIntensity = 0.4;
    } else if (partName === 'coronaries') {
      this.materials.coronaries.emissive = new THREE.Color(0xff0054);
      this.materials.coronaries.emissiveIntensity = 0.8;
    }
  }

  update(delta) {
    if (!this.isBeating) return;

    // Calculate rhythmic cardiac cycle (systole = quick contraction, diastole = slower filling)
    const beatFrequency = this.bpm / 60;
    this.beatPhase = (this.beatPhase + delta * beatFrequency * Math.PI * 2) % (Math.PI * 2);

    // Asymmetric heartbeat curve: sharp contraction (systole) then elastic recoil and fill (diastole)
    const p = this.beatPhase;
    let contraction = 0;
    if (p < Math.PI * 0.4) {
      // Systole contraction peak
      contraction = Math.sin((p / (Math.PI * 0.4)) * Math.PI) * 0.085;
    } else if (p < Math.PI * 0.7) {
      // Quick rebound
      contraction = -Math.sin(((p - Math.PI * 0.4) / (Math.PI * 0.3)) * Math.PI) * 0.03;
    } else {
      // Diastole gradual resting
      contraction = 0;
    }

    const scale = this.baseScale * (1.0 - contraction);
    this.group.scale.set(scale, scale * (1.0 + contraction * 0.5), scale);

    // Pulse conduction nodes with light
    const conductionGlow = Math.max(0, Math.sin(p * 2.0));
    this.materials.conduction.emissiveIntensity = 0.4 + conductionGlow * 0.8;
  }
}

import * as THREE from 'three';

// 3D Human Medical Professor Avatar for MedTutor 3D
// Articulated limbs, head, blinking eyelids, moving jaw/mouth for lip sync, lab coat and stethoscope

export class AvatarModel {
  constructor(avatarId = 'asclepio') {
    this.avatarId = avatarId;
    this.group = new THREE.Group();
    this.group.name = 'VirtualProfessor';

    // Morph and bone references
    this.bones = {};
    this.eyelids = [];
    this.eyes = [];
    this.jaw = null;
    this.rightArm = {};
    this.leftArm = {};

    this.initMaterials();
    this.buildAvatar();
  }

  initMaterials() {
    const isSofia = this.avatarId === 'sofia';
    const isLucas = this.avatarId === 'lucas';

    // Skin tones
    let skinColor = 0xf5cfb3;
    if (isSofia) skinColor = 0xf8d7c2;
    if (isLucas) skinColor = 0xe0ac86;

    this.materials = {
      skin: new THREE.MeshStandardMaterial({
        color: skinColor,
        roughness: 0.65,
        metalness: 0.05
      }),
      hair: new THREE.MeshStandardMaterial({
        color: isSofia ? 0x2c1d11 : (isLucas ? 0x1b1b1b : 0x4a4e51), // Asclepio has distinguished salt-and-pepper hair
        roughness: 0.8,
        metalness: 0.1
      }),
      eyes: new THREE.MeshStandardMaterial({
        color: 0xffffff,
        roughness: 0.15,
        metalness: 0.0
      }),
      iris: new THREE.MeshStandardMaterial({
        color: isSofia ? 0x3d6b4f : (isLucas ? 0x3b2413 : 0x1e3a8a), // green/brown/blue eyes
        roughness: 0.2
      }),
      pupil: new THREE.MeshBasicMaterial({ color: 0x050505 }),
      labCoat: new THREE.MeshStandardMaterial({
        color: 0xf8fafc,
        roughness: 0.7,
        metalness: 0.05
      }),
      shirt: new THREE.MeshStandardMaterial({
        color: isSofia ? 0x0284c7 : (isLucas ? 0x0f766e : 0x1e40af), // scrubs/shirt
        roughness: 0.7
      }),
      tie: new THREE.MeshStandardMaterial({
        color: 0x991b1b, // Bordeaux red tie for Dr. Asclépio
        roughness: 0.5
      }),
      pants: new THREE.MeshStandardMaterial({
        color: 0x0f172a, // dark navy pants
        roughness: 0.7
      }),
      shoes: new THREE.MeshStandardMaterial({
        color: 0x18181b,
        roughness: 0.3,
        metalness: 0.2
      }),
      stethoscope: new THREE.MeshStandardMaterial({
        color: 0x0284c7, // cyan/teal medical tubing
        roughness: 0.3,
        metalness: 0.1
      }),
      metal: new THREE.MeshStandardMaterial({
        color: 0xe2e8f0,
        roughness: 0.2,
        metalness: 0.85
      }),
      eyebrows: new THREE.MeshStandardMaterial({
        color: isSofia ? 0x2c1d11 : 0x334155,
        roughness: 0.8
      })
    };
  }

  buildAvatar() {
    // Height of avatar ~ 1.80m
    // Center origin at feet (y = 0)

    // 1. Lower Body & Legs
    this.buildLegs();

    // 2. Torso (Spine, Lab coat, Shirt, Stethoscope)
    this.buildTorso();

    // 3. Head & Facial Features (Blinking eyes, jaw, hair)
    this.buildHead();

    // 4. Arms & Hands for Gestures
    this.buildArms();
  }

  buildLegs() {
    const legGeo = new THREE.CylinderGeometry(0.12, 0.09, 0.95, 16);
    const shoeGeo = new THREE.BoxGeometry(0.15, 0.1, 0.3);

    // Left Leg
    const leftLeg = new THREE.Mesh(legGeo, this.materials.pants);
    leftLeg.position.set(-0.16, 0.48, 0);
    this.group.add(leftLeg);

    const leftShoe = new THREE.Mesh(shoeGeo, this.materials.shoes);
    leftShoe.position.set(-0.16, 0.05, 0.06);
    this.group.add(leftShoe);

    // Right Leg
    const rightLeg = new THREE.Mesh(legGeo, this.materials.pants);
    rightLeg.position.set(0.16, 0.48, 0);
    this.group.add(rightLeg);

    const rightShoe = new THREE.Mesh(shoeGeo, this.materials.shoes);
    rightShoe.position.set(0.16, 0.05, 0.06);
    this.group.add(rightShoe);
  }

  buildTorso() {
    this.torsoGroup = new THREE.Group();
    this.torsoGroup.position.set(0, 0.95, 0);
    this.group.add(this.torsoGroup);
    this.bones.torso = this.torsoGroup;

    // Pelvis & Belt area
    const pelvisGeo = new THREE.BoxGeometry(0.44, 0.18, 0.26);
    const pelvis = new THREE.Mesh(pelvisGeo, this.materials.pants);
    pelvis.position.set(0, 0.08, 0);
    this.torsoGroup.add(pelvis);

    // Chest & Lab coat
    const chestGeo = new THREE.BoxGeometry(0.48, 0.58, 0.28);
    const chest = new THREE.Mesh(chestGeo, this.materials.labCoat);
    chest.position.set(0, 0.42, 0);
    this.torsoGroup.add(chest);

    // Shirt & Tie insert in the middle
    const shirtGeo = new THREE.PlaneGeometry(0.16, 0.42);
    const shirt = new THREE.Mesh(shirtGeo, this.materials.shirt);
    shirt.position.set(0, 0.46, 0.145);
    this.torsoGroup.add(shirt);

    if (this.avatarId !== 'lucas') {
      // Tie
      const tieGeo = new THREE.BoxGeometry(0.06, 0.32, 0.015);
      const tie = new THREE.Mesh(tieGeo, this.materials.tie);
      tie.position.set(0, 0.42, 0.155);
      this.torsoGroup.add(tie);
    }

    // Lab coat lapels (gola do jaleco)
    const lapelGeo = new THREE.BoxGeometry(0.08, 0.4, 0.02);
    const leftLapel = new THREE.Mesh(lapelGeo, this.materials.labCoat);
    leftLapel.position.set(-0.11, 0.45, 0.15);
    leftLapel.rotation.z = -0.15;
    this.torsoGroup.add(leftLapel);

    const rightLapel = new THREE.Mesh(lapelGeo, this.materials.labCoat);
    rightLapel.position.set(0.11, 0.45, 0.15);
    rightLapel.rotation.z = 0.15;
    this.torsoGroup.add(rightLapel);

    // Doctor Badge (Crachá Médico)
    const badgeGeo = new THREE.BoxGeometry(0.08, 0.1, 0.01);
    const badge = new THREE.Mesh(badgeGeo, this.materials.metal);
    badge.position.set(0.15, 0.52, 0.15);
    this.torsoGroup.add(badge);

    // Stethoscope draped around shoulders and hanging on chest
    this.buildStethoscope();
  }

  buildStethoscope() {
    const stethGroup = new THREE.Group();
    // U-shaped neck tube
    const curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-0.16, 0.65, 0.02),
      new THREE.Vector3(-0.14, 0.72, -0.06),
      new THREE.Vector3(0.0, 0.73, -0.09),
      new THREE.Vector3(0.14, 0.72, -0.06),
      new THREE.Vector3(0.16, 0.65, 0.02),
      new THREE.Vector3(0.12, 0.45, 0.16),
      new THREE.Vector3(0.0, 0.35, 0.17)
    ]);
    const tubeGeo = new THREE.TubeGeometry(curve, 32, 0.014, 8, false);
    const tube = new THREE.Mesh(tubeGeo, this.materials.stethoscope);
    stethGroup.add(tube);

    // Stethoscope Bell / Diaphragm (auscultador de metal)
    const bellGeo = new THREE.CylinderGeometry(0.042, 0.042, 0.02, 16);
    bellGeo.rotateX(Math.PI * 0.5);
    const bell = new THREE.Mesh(bellGeo, this.materials.metal);
    bell.position.set(0.0, 0.34, 0.18);
    stethGroup.add(bell);

    this.torsoGroup.add(stethGroup);
  }

  buildHead() {
    this.headGroup = new THREE.Group();
    this.headGroup.position.set(0, 0.76, 0);
    this.torsoGroup.add(this.headGroup);
    this.bones.head = this.headGroup;

    // Neck
    const neckGeo = new THREE.CylinderGeometry(0.095, 0.11, 0.14, 16);
    const neck = new THREE.Mesh(neckGeo, this.materials.skin);
    neck.position.set(0, -0.02, 0);
    this.headGroup.add(neck);

    // Cranium / Face base
    const faceGeo = new THREE.SphereGeometry(0.19, 24, 20);
    faceGeo.scale(0.9, 1.15, 0.95);
    const face = new THREE.Mesh(faceGeo, this.materials.skin);
    face.position.set(0, 0.14, 0);
    this.headGroup.add(face);

    // Hair
    const hairGeo = new THREE.SphereGeometry(0.205, 24, 20, 0, Math.PI * 2, 0, Math.PI * 0.65);
    const hair = new THREE.Mesh(hairGeo, this.materials.hair);
    hair.position.set(0, 0.19, -0.01);
    this.headGroup.add(hair);

    // Hair sides & bangs
    const hairSideGeo = new THREE.BoxGeometry(0.04, 0.14, 0.12);
    const leftSide = new THREE.Mesh(hairSideGeo, this.materials.hair);
    leftSide.position.set(-0.17, 0.18, 0.02);
    this.headGroup.add(leftSide);

    const rightSide = new THREE.Mesh(hairSideGeo, this.materials.hair);
    rightSide.position.set(0.17, 0.18, 0.02);
    this.headGroup.add(rightSide);

    // Nose
    const noseGeo = new THREE.ConeGeometry(0.035, 0.08, 12);
    noseGeo.rotateX(Math.PI * 0.6);
    const nose = new THREE.Mesh(noseGeo, this.materials.skin);
    nose.position.set(0, 0.12, 0.19);
    this.headGroup.add(nose);

    // Eyebrows
    const ebGeo = new THREE.BoxGeometry(0.07, 0.015, 0.01);
    const leftEb = new THREE.Mesh(ebGeo, this.materials.eyebrows);
    leftEb.position.set(-0.065, 0.19, 0.175);
    leftEb.rotation.z = -0.05;
    this.headGroup.add(leftEb);

    const rightEb = new THREE.Mesh(ebGeo, this.materials.eyebrows);
    rightEb.position.set(0.065, 0.19, 0.175);
    rightEb.rotation.z = 0.05;
    this.headGroup.add(rightEb);

    // Eyes with Functional Blinking Eyelids
    this.buildEyes();

    // Jaw / Mouth for Lip Sync
    this.buildMouthAndJaw();

    // Glasses for Dr. Asclépio (Professorial look)
    if (this.avatarId === 'asclepio') {
      this.buildGlasses();
    }
  }

  buildEyes() {
    const eyePositions = [-0.062, 0.062];

    eyePositions.forEach(x => {
      const eyeGroup = new THREE.Group();
      eyeGroup.position.set(x, 0.145, 0.155);

      // Eyeball
      const eyeballGeo = new THREE.SphereGeometry(0.028, 16, 16);
      const eyeball = new THREE.Mesh(eyeballGeo, this.materials.eyes);
      eyeGroup.add(eyeball);

      // Iris
      const irisGeo = new THREE.CircleGeometry(0.014, 16);
      const iris = new THREE.Mesh(irisGeo, this.materials.iris);
      iris.position.set(0, 0, 0.027);
      eyeGroup.add(iris);

      // Pupil
      const pupilGeo = new THREE.CircleGeometry(0.007, 12);
      const pupil = new THREE.Mesh(pupilGeo, this.materials.pupil);
      pupil.position.set(0, 0, 0.0275);
      eyeGroup.add(pupil);

      // Eyelid for Blinking Animation
      const lidGeo = new THREE.SphereGeometry(0.03, 16, 12, 0, Math.PI * 2, 0, Math.PI * 0.5);
      lidGeo.rotateX(Math.PI * 0.5);
      const lid = new THREE.Mesh(lidGeo, this.materials.skin);
      lid.position.set(0, 0, 0);
      lid.scale.set(1.02, 0.01, 1.02); // start open
      eyeGroup.add(lid);
      this.eyelids.push(lid);

      this.headGroup.add(eyeGroup);
      this.eyes.push(eyeGroup);
    });
  }

  buildMouthAndJaw() {
    // Upper lip
    const upperLipGeo = new THREE.BoxGeometry(0.07, 0.015, 0.015);
    const upperLip = new THREE.Mesh(upperLipGeo, this.materials.skin);
    upperLip.position.set(0, 0.045, 0.175);
    this.headGroup.add(upperLip);

    // Movable Jaw & Lower Lip for Lip-Sync Visemes
    this.jaw = new THREE.Group();
    this.jaw.position.set(0, 0.05, 0.08); // pivot at chin/temporomandibular joint

    const lowerLipGeo = new THREE.BoxGeometry(0.065, 0.018, 0.015);
    const lowerLip = new THREE.Mesh(lowerLipGeo, this.materials.skin);
    lowerLip.position.set(0, -0.025, 0.095);
    this.jaw.add(lowerLip);

    // Chin bone
    const chinGeo = new THREE.SphereGeometry(0.06, 12, 10);
    chinGeo.scale(1.0, 0.7, 1.0);
    const chin = new THREE.Mesh(chinGeo, this.materials.skin);
    chin.position.set(0, -0.06, 0.08);
    this.jaw.add(chin);

    this.headGroup.add(this.jaw);
    this.bones.jaw = this.jaw;
  }

  buildGlasses() {
    const glassesGroup = new THREE.Group();
    glassesGroup.position.set(0, 0.145, 0.185);

    const frameMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, metalness: 0.9, roughness: 0.2 });
    const lensMat = new THREE.MeshStandardMaterial({ color: 0xffffff, transparent: true, opacity: 0.25, roughness: 0.1 });

    [-0.062, 0.062].forEach(x => {
      const ringGeo = new THREE.TorusGeometry(0.032, 0.004, 8, 20);
      const ring = new THREE.Mesh(ringGeo, frameMat);
      ring.position.set(x, 0, 0);
      glassesGroup.add(ring);

      const lensGeo = new THREE.CircleGeometry(0.03, 16);
      const lens = new THREE.Mesh(lensGeo, lensMat);
      lens.position.set(x, 0, 0);
      glassesGroup.add(lens);
    });

    // Bridge between lenses
    const bridgeGeo = new THREE.CylinderGeometry(0.003, 0.003, 0.04, 6);
    bridgeGeo.rotateZ(Math.PI * 0.5);
    const bridge = new THREE.Mesh(bridgeGeo, frameMat);
    bridge.position.set(0, 0.008, 0);
    glassesGroup.add(bridge);

    this.headGroup.add(glassesGroup);
  }

  buildArms() {
    // Right Arm (Primary gesturing arm)
    this.rightArm.shoulder = new THREE.Group();
    this.rightArm.shoulder.position.set(0.28, 0.65, 0);
    this.torsoGroup.add(this.rightArm.shoulder);

    const upperArmGeo = new THREE.CylinderGeometry(0.065, 0.055, 0.32, 12);
    const upperArmR = new THREE.Mesh(upperArmGeo, this.materials.labCoat);
    upperArmR.position.set(0, -0.16, 0);
    this.rightArm.shoulder.add(upperArmR);

    this.rightArm.elbow = new THREE.Group();
    this.rightArm.elbow.position.set(0, -0.32, 0);
    this.rightArm.shoulder.add(this.rightArm.elbow);

    const forearmGeo = new THREE.CylinderGeometry(0.055, 0.045, 0.30, 12);
    const forearmR = new THREE.Mesh(forearmGeo, this.materials.labCoat);
    forearmR.position.set(0, -0.15, 0);
    this.rightArm.elbow.add(forearmR);

    // Hand
    const handGeo = new THREE.BoxGeometry(0.07, 0.1, 0.03);
    const handR = new THREE.Mesh(handGeo, this.materials.skin);
    handR.position.set(0, -0.34, 0);
    this.rightArm.elbow.add(handR);

    // Left Arm (Secondary arm)
    this.leftArm.shoulder = new THREE.Group();
    this.leftArm.shoulder.position.set(-0.28, 0.65, 0);
    this.torsoGroup.add(this.leftArm.shoulder);

    const upperArmL = new THREE.Mesh(upperArmGeo, this.materials.labCoat);
    upperArmL.position.set(0, -0.16, 0);
    this.leftArm.shoulder.add(upperArmL);

    this.leftArm.elbow = new THREE.Group();
    this.leftArm.elbow.position.set(0, -0.32, 0);
    this.leftArm.shoulder.add(this.leftArm.elbow);

    const forearmL = new THREE.Mesh(forearmGeo, this.materials.labCoat);
    forearmL.position.set(0, -0.15, 0);
    this.leftArm.elbow.add(forearmL);

    const handL = new THREE.Mesh(handGeo, this.materials.skin);
    handL.position.set(0, -0.34, 0);
    this.leftArm.elbow.add(handL);
  }

  // Set lip-sync openness (0.0 to 1.0)
  setMouthOpen(openness) {
    if (this.jaw) {
      // Rotate jaw down around x-axis
      this.jaw.rotation.x = openness * 0.28;
      this.jaw.position.y = 0.05 - openness * 0.02;
    }
  }

  // Set eyelid blink closure (0.0 = fully open, 1.0 = closed)
  setBlink(amount) {
    const scaleY = 0.01 + amount * 0.99;
    this.eyelids.forEach(lid => {
      lid.scale.y = scaleY;
    });
  }
}

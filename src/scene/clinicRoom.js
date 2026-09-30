import * as THREE from 'three';

// 3D Medical Clinic / Laboratory Environment for MedTutor 3D
// Includes floor, architectural walls, executive desk, books, stethoscope, skeleton, and holographic pedestal

export class ClinicRoom {
  constructor(digitalBoardMesh) {
    this.group = new THREE.Group();
    this.group.name = 'ClinicEnvironment';
    this.digitalBoardMesh = digitalBoardMesh;

    this.initMaterials();
    this.buildRoom();
    this.buildFurniture();
    this.buildSkeleton();
    this.buildHologramPedestal();

    if (this.digitalBoardMesh) {
      // Position digital board on back wall behind and slightly right of professor
      this.digitalBoardMesh.position.set(0.6, 2.3, -3.85);
      this.group.add(this.digitalBoardMesh);
    }
  }

  initMaterials() {
    this.materials = {
      floor: new THREE.MeshStandardMaterial({
        color: 0x0f172a,
        roughness: 0.25,
        metalness: 0.35
      }),
      backWall: new THREE.MeshStandardMaterial({
        color: 0x09101d,
        roughness: 0.7,
        metalness: 0.1
      }),
      sideWall: new THREE.MeshStandardMaterial({
        color: 0x0c1524,
        roughness: 0.7,
        metalness: 0.1
      }),
      deskTop: new THREE.MeshStandardMaterial({
        color: 0x0284c7,
        roughness: 0.2,
        metalness: 0.4
      }),
      deskLegs: new THREE.MeshStandardMaterial({
        color: 0x334155,
        roughness: 0.3,
        metalness: 0.8
      }),
      woodAccent: new THREE.MeshStandardMaterial({
        color: 0x3b2416,
        roughness: 0.6,
        metalness: 0.05
      }),
      ledCyan: new THREE.MeshBasicMaterial({
        color: 0x00e5ff
      }),
      bone: new THREE.MeshStandardMaterial({
        color: 0xf1f5f9,
        roughness: 0.5,
        metalness: 0.05
      }),
      bookSpine: new THREE.MeshStandardMaterial({
        color: 0x1e3a8a,
        roughness: 0.4
      }),
      laptopMetal: new THREE.MeshStandardMaterial({
        color: 0x94a3b8,
        roughness: 0.2,
        metalness: 0.9
      }),
      glowRing: new THREE.MeshStandardMaterial({
        color: 0x00e5ff,
        emissive: 0x00e5ff,
        emissiveIntensity: 0.9,
        roughness: 0.2
      })
    };
  }

  buildRoom() {
    // 1. Floor (14m x 14m)
    const floorGeo = new THREE.PlaneGeometry(14, 14);
    const floor = new THREE.Mesh(floorGeo, this.materials.floor);
    floor.rotation.x = -Math.PI * 0.5;
    floor.receiveShadow = true;
    this.group.add(floor);

    // Floor grid lines
    const grid = new THREE.GridHelper(14, 28, 0x00e5ff, 0x1e293b);
    grid.position.y = 0.005;
    this.group.add(grid);

    // 2. Back Wall
    const backWallGeo = new THREE.PlaneGeometry(14, 6);
    const backWall = new THREE.Mesh(backWallGeo, this.materials.backWall);
    backWall.position.set(0, 3, -4);
    backWall.receiveShadow = true;
    this.group.add(backWall);

    // 3. Side Walls
    const leftWallGeo = new THREE.PlaneGeometry(14, 6);
    const leftWall = new THREE.Mesh(leftWallGeo, this.materials.sideWall);
    leftWall.position.set(-6, 3, 0);
    leftWall.rotation.y = Math.PI * 0.5;
    this.group.add(leftWall);

    const rightWall = new THREE.Mesh(leftWallGeo, this.materials.sideWall);
    rightWall.position.set(6, 3, 0);
    rightWall.rotation.y = -Math.PI * 0.5;
    this.group.add(rightWall);

    // 4. Cyan LED Accent Strip running along base of back wall
    const ledStripGeo = new THREE.BoxGeometry(14, 0.06, 0.04);
    const ledStrip = new THREE.Mesh(ledStripGeo, this.materials.ledCyan);
    ledStrip.position.set(0, 0.03, -3.96);
    this.group.add(ledStrip);

    // Upper LED strip
    const ledTopGeo = new THREE.BoxGeometry(14, 0.04, 0.04);
    const ledTop = new THREE.Mesh(ledTopGeo, this.materials.ledCyan);
    ledTop.position.set(0, 4.8, -3.96);
    this.group.add(ledTop);

    // Architectural wooden slat columns on the left wall
    for (let i = 0; i < 6; i++) {
      const slatGeo = new THREE.BoxGeometry(0.12, 5.0, 0.06);
      const slat = new THREE.Mesh(slatGeo, this.materials.woodAccent);
      slat.position.set(-5.95, 2.5, -2.5 + i * 0.4);
      this.group.add(slat);
    }
  }

  buildFurniture() {
    // Medical Consultation Desk (positioned to the right-rear of the scene)
    const deskGroup = new THREE.Group();
    deskGroup.position.set(2.4, 0, -1.8);
    deskGroup.rotation.y = -0.35;

    // Top table glass/surface
    const topGeo = new THREE.BoxGeometry(2.2, 0.08, 1.0);
    const deskTop = new THREE.Mesh(topGeo, this.materials.deskTop);
    deskTop.position.set(0, 0.88, 0);
    deskTop.castShadow = true;
    deskTop.receiveShadow = true;
    deskGroup.add(deskTop);

    // Sleek metal legs
    const legGeo = new THREE.CylinderGeometry(0.04, 0.04, 0.88, 12);
    [
      [-0.95, -0.38],
      [0.95, -0.38],
      [-0.95, 0.38],
      [0.95, 0.38]
    ].forEach(([lx, lz]) => {
      const leg = new THREE.Mesh(legGeo, this.materials.deskLegs);
      leg.position.set(lx, 0.44, lz);
      deskGroup.add(leg);
    });

    // Medical Laptop
    const laptopBase = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.02, 0.28), this.materials.laptopMetal);
    laptopBase.position.set(-0.35, 0.93, 0.05);
    deskGroup.add(laptopBase);

    const laptopScreen = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.28, 0.015), this.materials.laptopMetal);
    laptopScreen.position.set(-0.35, 1.07, -0.08);
    laptopScreen.rotation.x = -0.2;
    deskGroup.add(laptopScreen);

    // Glowing display screen
    const screenDisplay = new THREE.Mesh(
      new THREE.PlaneGeometry(0.38, 0.24),
      new THREE.MeshBasicMaterial({ color: 0x00e5ff })
    );
    screenDisplay.position.set(-0.35, 1.07, -0.07);
    screenDisplay.rotation.x = -0.2;
    deskGroup.add(screenDisplay);

    // Medical Books Stack
    const bookColors = [0x991b1b, 0x1e3a8a, 0x047857];
    bookColors.forEach((color, idx) => {
      const bookGeo = new THREE.BoxGeometry(0.32, 0.045, 0.24);
      const bookMat = new THREE.MeshStandardMaterial({ color, roughness: 0.5 });
      const book = new THREE.Mesh(bookGeo, bookMat);
      book.position.set(0.55, 0.94 + idx * 0.048, 0.0);
      book.rotation.y = (idx * 0.08);
      deskGroup.add(book);
    });

    this.group.add(deskGroup);
  }

  buildSkeleton() {
    // Anatomical Skeleton model in the left-back corner of the room
    const skelGroup = new THREE.Group();
    skelGroup.position.set(-3.5, 0, -2.4);
    skelGroup.rotation.y = 0.5;

    // Wheeled stand base
    const baseGeo = new THREE.CylinderGeometry(0.28, 0.3, 0.06, 16);
    const base = new THREE.Mesh(baseGeo, this.materials.deskLegs);
    base.position.y = 0.03;
    skelGroup.add(base);

    // Vertical metal support pole
    const poleGeo = new THREE.CylinderGeometry(0.02, 0.02, 1.85, 12);
    const pole = new THREE.Mesh(poleGeo, this.materials.deskLegs);
    pole.position.set(0, 0.95, -0.1);
    skelGroup.add(pole);

    // Skull
    const skullGeo = new THREE.SphereGeometry(0.12, 16, 14);
    skullGeo.scale(0.85, 1.1, 0.95);
    const skull = new THREE.Mesh(skullGeo, this.materials.bone);
    skull.position.set(0, 1.68, 0);
    skelGroup.add(skull);

    // Spine
    const spineGeo = new THREE.CylinderGeometry(0.03, 0.035, 0.65, 8);
    const spine = new THREE.Mesh(spineGeo, this.materials.bone);
    spine.position.set(0, 1.25, 0);
    skelGroup.add(spine);

    // Ribcage (tórax ósseo)
    for (let r = 0; r < 7; r++) {
      const ribGeo = new THREE.TorusGeometry(0.18 - r * 0.008, 0.014, 8, 16, Math.PI * 1.6);
      ribGeo.rotateX(Math.PI * 0.5);
      ribGeo.rotateZ(Math.PI * 0.2);
      const rib = new THREE.Mesh(ribGeo, this.materials.bone);
      rib.position.set(0, 1.48 - r * 0.05, 0);
      skelGroup.add(rib);
    }

    // Pelvis
    const pelvisGeo = new THREE.BoxGeometry(0.32, 0.16, 0.2);
    const pelvis = new THREE.Mesh(pelvisGeo, this.materials.bone);
    pelvis.position.set(0, 0.92, 0);
    skelGroup.add(pelvis);

    // Femurs & Tibias
    [-0.1, 0.1].forEach(x => {
      const femur = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.02, 0.44, 8), this.materials.bone);
      femur.position.set(x, 0.68, 0);
      skelGroup.add(femur);

      const tibia = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.016, 0.44, 8), this.materials.bone);
      tibia.position.set(x, 0.24, 0);
      skelGroup.add(tibia);
    });

    this.group.add(skelGroup);
  }

  buildHologramPedestal() {
    // Pedestal where the 3D Heart floats
    this.pedestalGroup = new THREE.Group();
    this.pedestalGroup.position.set(-1.4, 0, -0.6);

    // Base cylinder
    const baseGeo = new THREE.CylinderGeometry(0.55, 0.65, 0.18, 32);
    const base = new THREE.Mesh(baseGeo, this.materials.deskLegs);
    base.position.y = 0.09;
    this.pedestalGroup.add(base);

    // Column
    const colGeo = new THREE.CylinderGeometry(0.24, 0.26, 0.72, 32);
    const col = new THREE.Mesh(colGeo, this.materials.deskLegs);
    col.position.y = 0.54;
    this.pedestalGroup.add(col);

    // Top glowing ring
    const ringGeo = new THREE.TorusGeometry(0.48, 0.035, 16, 32);
    ringGeo.rotateX(Math.PI * 0.5);
    const ring = new THREE.Mesh(ringGeo, this.materials.glowRing);
    ring.position.y = 0.91;
    this.pedestalGroup.add(ring);

    // Holographic emitter disc
    const discGeo = new THREE.CircleGeometry(0.44, 32);
    discGeo.rotateX(-Math.PI * 0.5);
    const discMat = new THREE.MeshBasicMaterial({
      color: 0x00e5ff,
      transparent: true,
      opacity: 0.35,
      side: THREE.DoubleSide
    });
    const disc = new THREE.Mesh(discGeo, discMat);
    disc.position.y = 0.915;
    this.pedestalGroup.add(disc);

    this.group.add(this.pedestalGroup);
  }
}

import * as THREE from 'three';

// Blood Flow Particle Simulation for MedTutor 3D
// Simulates deoxygenated venous return (blue) and oxygenated systemic outflow (red)

export class BloodFlowSimulation {
  constructor(heartGroup) {
    this.group = new THREE.Group();
    this.group.name = 'BloodFlowParticles';
    this.heartGroup = heartGroup;

    this.particleCount = 180;
    this.particles = [];
    this.active = true;

    this.initCurves();
    this.buildParticles();
    this.heartGroup.add(this.group);
  }

  initCurves() {
    // 1. Venous Deoxygenated Stream (Blue)
    // SVC -> RA -> Tricuspid -> RV -> Pulmonary Trunk
    this.blueCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0.65, 1.6, -0.15),
      new THREE.Vector3(0.6, 0.9, -0.1),
      new THREE.Vector3(0.55, 0.45, 0.05),
      new THREE.Vector3(0.35, 0.1, 0.08),
      new THREE.Vector3(0.3, -0.4, 0.15),
      new THREE.Vector3(0.15, 0.25, 0.35),
      new THREE.Vector3(0.05, 0.75, 0.3),
      new THREE.Vector3(-0.15, 1.15, 0.1),
      new THREE.Vector3(-0.25, 1.25, -0.15),
      new THREE.Vector3(-0.6, 1.2, -0.35)
    ]);

    // 2. Oxygenated Arterial Stream (Red)
    // Pulmonary Veins -> LA -> Mitral -> LV -> Aorta -> Branches
    this.redCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-0.7, 0.6, -0.4),
      new THREE.Vector3(-0.35, 0.6, -0.2),
      new THREE.Vector3(-0.35, 0.15, 0.0),
      new THREE.Vector3(-0.3, -0.7, 0.0),
      new THREE.Vector3(-0.15, 0.4, 0.0),
      new THREE.Vector3(-0.1, 0.9, 0.05),
      new THREE.Vector3(0.0, 1.45, 0.0),
      new THREE.Vector3(-0.25, 1.7, -0.2),
      new THREE.Vector3(-0.55, 1.55, -0.4)
    ]);
  }

  buildParticles() {
    const geo = new THREE.SphereGeometry(0.028, 8, 8);
    const blueMat = new THREE.MeshBasicMaterial({ color: 0x00e5ff });
    const redMat = new THREE.MeshBasicMaterial({ color: 0xff3366 });

    // Build half blue and half red particles
    for (let i = 0; i < this.particleCount; i++) {
      const isRed = i >= this.particleCount / 2;
      const mesh = new THREE.Mesh(geo, isRed ? redMat : blueMat);
      const progress = Math.random();
      const speed = 0.18 + Math.random() * 0.08;

      this.group.add(mesh);
      this.particles.push({
        mesh,
        isRed,
        progress,
        speed,
        curve: isRed ? this.redCurve : this.blueCurve,
        lateralOffset: new THREE.Vector3(
          (Math.random() - 0.5) * 0.08,
          (Math.random() - 0.5) * 0.08,
          (Math.random() - 0.5) * 0.08
        )
      });
    }
  }

  setActive(active) {
    this.active = active;
    this.group.visible = active;
  }

  update(delta) {
    if (!this.active) return;

    for (let i = 0; i < this.particles.length; i++) {
      const p = this.particles[i];
      p.progress += delta * p.speed;
      if (p.progress >= 1.0) {
        p.progress = 0.0;
      }

      // Sample position along curve
      const pos = p.curve.getPointAt(p.progress);
      p.mesh.position.copy(pos).add(p.lateralOffset);

      // Scale slightly at peak ejection
      const pulse = Math.sin(p.progress * Math.PI) * 0.4 + 0.8;
      p.mesh.scale.setScalar(pulse);
    }
  }
}

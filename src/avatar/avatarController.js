import * as THREE from 'three';

// Procedural Animation & Gesture Controller for MedTutor 3D Professor

export class AvatarController {
  constructor(avatarModel) {
    this.model = avatarModel;

    // Blinking state
    this.blinkTimer = 0;
    this.nextBlinkInterval = 3.0;
    this.isBlinking = false;
    this.blinkPhase = 0;

    // Gaze tracking
    this.cameraPosition = new THREE.Vector3(0, 1.6, 3.5);
    this.targetHeadRot = new THREE.Euler(0, 0, 0);

    // Breathing & idle
    this.idleTime = 0;

    // Gesture poses and transitions
    this.currentGesture = 'idle';
    this.gestureProgress = 1.0;
    this.gestureDuration = 0.8;

    // Joint target rotations
    this.armTargets = {
      rShoulder: new THREE.Euler(0, 0, -0.15),
      rElbow: new THREE.Euler(0, 0, 0.1),
      lShoulder: new THREE.Euler(0, 0, 0.15),
      lElbow: new THREE.Euler(0, 0, -0.1)
    };
  }

  setCameraPosition(pos) {
    this.cameraPosition.copy(pos);
  }

  setGesture(gestureName) {
    this.currentGesture = gestureName;
    this.gestureProgress = 0.0;

    switch (gestureName) {
      case 'gesturePointBoard':
        // Right arm points toward the wall board (up and back-right)
        this.armTargets.rShoulder.set(-0.6, 0.4, 0.9);
        this.armTargets.rElbow.set(-0.2, 0, 0.4);
        this.armTargets.lShoulder.set(0.1, 0, 0.2);
        this.armTargets.lElbow.set(0, 0, -0.2);
        break;

      case 'gesturePresentOrgan':
        // Left arm extends gently toward the 3D Heart hologram
        this.armTargets.lShoulder.set(0.4, 0.2, -0.6);
        this.armTargets.lElbow.set(-0.3, 0, -0.5);
        this.armTargets.rShoulder.set(0.1, 0, -0.15);
        this.armTargets.rElbow.set(0.2, 0, 0.3);
        break;

      case 'gestureExplain1':
        // Right hand active conversational gesturing
        this.armTargets.rShoulder.set(0.5, 0.2, 0.4);
        this.armTargets.rElbow.set(-0.4, 0.2, 0.6);
        this.armTargets.lShoulder.set(0.2, 0, -0.3);
        this.armTargets.lElbow.set(-0.2, 0, -0.3);
        break;

      case 'gestureExplain2':
        // Both hands open, explaining concept
        this.armTargets.rShoulder.set(0.4, 0.3, 0.4);
        this.armTargets.rElbow.set(-0.5, 0.1, 0.5);
        this.armTargets.lShoulder.set(0.4, -0.3, -0.4);
        this.armTargets.lElbow.set(-0.5, -0.1, -0.5);
        break;

      case 'gestureListen':
        // Hand thoughtfully near chin
        this.armTargets.rShoulder.set(0.8, 0.1, 0.6);
        this.armTargets.rElbow.set(-1.1, 0.3, 0.8);
        this.armTargets.lShoulder.set(0.1, 0, 0.2);
        this.armTargets.lElbow.set(0, 0, -0.1);
        break;

      case 'gestureApprove':
        // Warm nod and welcoming posture
        this.armTargets.rShoulder.set(0.25, 0.1, 0.3);
        this.armTargets.rElbow.set(-0.3, 0, 0.4);
        this.armTargets.lShoulder.set(0.25, -0.1, -0.3);
        this.armTargets.lElbow.set(-0.3, 0, -0.4);
        break;

      case 'idle':
      default:
        this.armTargets.rShoulder.set(0.05, 0, -0.12);
        this.armTargets.rElbow.set(0.1, 0, 0.1);
        this.armTargets.lShoulder.set(0.05, 0, 0.12);
        this.armTargets.lElbow.set(0.1, 0, -0.1);
        break;
    }
  }

  update(delta) {
    this.idleTime += delta;

    // 1. Natural Blinking Logic
    this.updateBlinking(delta);

    // 2. Gaze Tracking / Eye Contact
    this.updateGaze(delta);

    // 3. Subtle Breathing & Spinal Sway
    this.updateBreathing(delta);

    // 4. Smooth Gesture Interpolation
    this.updateGestures(delta);
  }

  updateBlinking(delta) {
    this.blinkTimer += delta;

    if (!this.isBlinking && this.blinkTimer >= this.nextBlinkInterval) {
      this.isBlinking = true;
      this.blinkPhase = 0;
      this.blinkTimer = 0;
      // Next blink in 2.5 to 5.0 seconds
      this.nextBlinkInterval = 2.5 + Math.random() * 2.5;
    }

    if (this.isBlinking) {
      this.blinkPhase += delta * 12.0; // blink duration ~ 0.18s
      if (this.blinkPhase <= Math.PI) {
        const closure = Math.sin(this.blinkPhase);
        this.model.setBlink(closure);
      } else {
        this.model.setBlink(0);
        this.isBlinking = false;
      }
    }
  }

  updateGaze(delta) {
    if (!this.model.bones.head) return;

    // Compute direction vector from head to camera
    const headWorldPos = new THREE.Vector3();
    this.model.bones.head.getWorldPosition(headWorldPos);

    const dir = new THREE.Vector3().subVectors(this.cameraPosition, headWorldPos).normalize();

    // Limit head turn angles for natural neck limits
    const yaw = Math.max(-0.45, Math.min(0.45, Math.atan2(dir.x, dir.z)));
    const pitch = Math.max(-0.25, Math.min(0.25, -dir.y));

    // Smooth lerp head rotation
    this.model.bones.head.rotation.y = THREE.MathUtils.lerp(this.model.bones.head.rotation.y, yaw, delta * 3.5);
    this.model.bones.head.rotation.x = THREE.MathUtils.lerp(this.model.bones.head.rotation.x, pitch, delta * 3.5);

    // Eyes have subtle micro-saccades
    const saccade = (Math.sin(this.idleTime * 4.0) > 0.95 ? (Math.random() - 0.5) * 0.04 : 0);
    this.model.eyes.forEach(eye => {
      eye.rotation.y = saccade;
    });
  }

  updateBreathing(delta) {
    if (!this.model.bones.torso) return;

    // 14 breaths per minute (0.23 Hz)
    const breath = Math.sin(this.idleTime * 1.4);
    this.model.bones.torso.position.y = 0.95 + breath * 0.008;
    this.model.bones.torso.scale.x = 1.0 + breath * 0.012;
    this.model.bones.torso.scale.z = 1.0 + breath * 0.015;

    // Slight spine sway
    this.model.bones.torso.rotation.y = Math.sin(this.idleTime * 0.6) * 0.02;
  }

  updateGestures(delta) {
    const lerpSpeed = delta * 4.0;

    // Right Arm
    if (this.model.rightArm.shoulder) {
      const s = this.model.rightArm.shoulder.rotation;
      const ts = this.armTargets.rShoulder;
      // Add subtle conversational micro-movement if in explain mode
      const micro = this.currentGesture.startsWith('gestureExplain') ? Math.sin(this.idleTime * 3.0) * 0.04 : 0;
      s.x = THREE.MathUtils.lerp(s.x, ts.x + micro, lerpSpeed);
      s.y = THREE.MathUtils.lerp(s.y, ts.y, lerpSpeed);
      s.z = THREE.MathUtils.lerp(s.z, ts.z, lerpSpeed);
    }
    if (this.model.rightArm.elbow) {
      const e = this.model.rightArm.elbow.rotation;
      const te = this.armTargets.rElbow;
      e.x = THREE.MathUtils.lerp(e.x, te.x, lerpSpeed);
      e.y = THREE.MathUtils.lerp(e.y, te.y, lerpSpeed);
      e.z = THREE.MathUtils.lerp(e.z, te.z, lerpSpeed);
    }

    // Left Arm
    if (this.model.leftArm.shoulder) {
      const s = this.model.leftArm.shoulder.rotation;
      const ts = this.armTargets.lShoulder;
      s.x = THREE.MathUtils.lerp(s.x, ts.x, lerpSpeed);
      s.y = THREE.MathUtils.lerp(s.y, ts.y, lerpSpeed);
      s.z = THREE.MathUtils.lerp(s.z, ts.z, lerpSpeed);
    }
    if (this.model.leftArm.elbow) {
      const e = this.model.leftArm.elbow.rotation;
      const te = this.armTargets.lElbow;
      e.x = THREE.MathUtils.lerp(e.x, te.x, lerpSpeed);
      e.y = THREE.MathUtils.lerp(e.y, te.y, lerpSpeed);
      e.z = THREE.MathUtils.lerp(e.z, te.z, lerpSpeed);
    }
  }
}

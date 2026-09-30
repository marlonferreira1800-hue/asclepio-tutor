import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { ClinicRoom } from './clinicRoom.js';
import { DigitalBoard } from './digitalBoard.js';
import { AvatarModel } from '../avatar/avatarModel.js';
import { AvatarController } from '../avatar/avatarController.js';
import { HeartModel } from '../anatomy/heartModel.js';
import { BloodFlowSimulation } from '../anatomy/bloodFlow.js';

export class SceneManager {
  constructor(canvasContainer) {
    this.container = canvasContainer;

    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.controls = null;

    // Components
    this.digitalBoard = null;
    this.clinicRoom = null;
    this.avatarModel = null;
    this.avatarController = null;
    this.heartModel = null;
    this.bloodFlow = null;

    // Camera animation state
    this.cameraTarget = new THREE.Vector3(0, 1.4, 0);
    this.cameraDesiredPos = new THREE.Vector3(0, 1.6, 3.8);
    this.cameraDesiredTarget = new THREE.Vector3(0, 1.35, 0);
    this.isTransitioningCamera = false;
    this.cameraTransitionSpeed = 3.5;

    // Presets
    this.cameraPresets = {
      tutor: { pos: new THREE.Vector3(0.0, 1.55, 1.7), target: new THREE.Vector3(0.0, 1.42, 0) },
      heart: { pos: new THREE.Vector3(-1.4, 1.55, 0.8), target: new THREE.Vector3(-1.4, 1.42, -0.6) },
      board: { pos: new THREE.Vector3(0.6, 2.2, 0.2), target: new THREE.Vector3(0.6, 2.2, -3.85) },
      room: { pos: new THREE.Vector3(0.0, 2.3, 4.4), target: new THREE.Vector3(0.0, 1.35, -0.8) }
    };

    this.init();
  }

  init() {
    const width = this.container.clientWidth || window.innerWidth;
    const height = this.container.clientHeight || window.innerHeight;

    // 1. Scene
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x060e1a);
    this.scene.fog = new THREE.FogExp2(0x060e1a, 0.045);

    // 2. Camera
    this.camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 50);
    this.camera.position.copy(this.cameraPresets.room.pos);

    // 3. Renderer
    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: 'high-performance'
    });
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.15;
    this.container.appendChild(this.renderer.domElement);

    // 4. Orbit Controls
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.05;
    this.controls.maxPolarAngle = Math.PI * 0.49; // don't go below floor
    this.controls.minDistance = 0.8;
    this.controls.maxDistance = 8.5;
    this.controls.target.copy(this.cameraPresets.room.target);

    // 5. Lights
    this.setupLights();

    // 6. Build Components
    this.setupWorld();

    // 7. Resize Listener
    window.addEventListener('resize', this.onWindowResize.bind(this));
  }

  setupLights() {
    // Ambient Light (deep medical slate)
    const ambient = new THREE.AmbientLight(0x0f2744, 1.2);
    this.scene.add(ambient);

    // Key Light (warm studio illumination from front-left)
    const keyLight = new THREE.DirectionalLight(0xfff5eb, 2.2);
    keyLight.position.set(2.5, 4.5, 3.5);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.width = 1024;
    keyLight.shadow.mapSize.height = 1024;
    keyLight.shadow.bias = -0.001;
    this.scene.add(keyLight);

    // Rim / Back Light (Cyan aesthetic rim light for futuristic medical feel)
    const rimLight = new THREE.DirectionalLight(0x00e5ff, 2.0);
    rimLight.position.set(-3.5, 3.2, -2.5);
    this.scene.add(rimLight);

    // Heart Hologram Spot Light
    const heartSpot = new THREE.SpotLight(0x38bdf8, 3.5, 5, Math.PI * 0.35, 0.4);
    heartSpot.position.set(-1.4, 3.2, -0.6);
    heartSpot.target.position.set(-1.4, 1.45, -0.6);
    this.scene.add(heartSpot);
    this.scene.add(heartSpot.target);

    // Smartboard illumination
    const boardLight = new THREE.PointLight(0x00e5ff, 1.5, 4.0);
    boardLight.position.set(0.6, 2.4, -3.0);
    this.scene.add(boardLight);
  }

  setupWorld() {
    // 1. Digital Smartboard
    this.digitalBoard = new DigitalBoard();

    // 2. Clinic Room
    this.clinicRoom = new ClinicRoom(this.digitalBoard.mesh);
    this.scene.add(this.clinicRoom.group);

    // 3. Avatar Professor (Dr. Asclépio at center)
    this.loadAvatar('asclepio');

    // 4. Anatomical Heart floating over pedestal
    this.heartModel = new HeartModel();
    this.heartModel.group.position.set(-1.4, 1.45, -0.6);
    this.heartModel.group.scale.setScalar(0.48);
    this.scene.add(this.heartModel.group);

    // 5. Blood Flow Particles
    this.bloodFlow = new BloodFlowSimulation(this.heartModel.group);
  }

  loadAvatar(avatarId) {
    if (this.avatarModel) {
      this.scene.remove(this.avatarModel.group);
    }
    this.avatarModel = new AvatarModel(avatarId);
    this.avatarModel.group.position.set(0, 0, 0);
    this.scene.add(this.avatarModel.group);

    this.avatarController = new AvatarController(this.avatarModel);
  }

  setCameraPreset(presetName) {
    const preset = this.cameraPresets[presetName];
    if (preset) {
      this.cameraDesiredPos.copy(preset.pos);
      this.cameraDesiredTarget.copy(preset.target);
      this.isTransitioningCamera = true;
    }
  }

  onWindowResize() {
    const width = this.container.clientWidth || window.innerWidth;
    const height = this.container.clientHeight || window.innerHeight;

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
  }

  update(delta) {
    // Smooth camera transition if active
    if (this.isTransitioningCamera) {
      this.camera.position.lerp(this.cameraDesiredPos, delta * this.cameraTransitionSpeed);
      this.controls.target.lerp(this.cameraDesiredTarget, delta * this.cameraTransitionSpeed);

      if (this.camera.position.distanceTo(this.cameraDesiredPos) < 0.05) {
        this.camera.position.copy(this.cameraDesiredPos);
        this.controls.target.copy(this.cameraDesiredTarget);
        this.isTransitioningCamera = false;
      }
    }

    this.controls.update();

    // Pass camera position to avatar for gaze tracking / eye contact
    if (this.avatarController) {
      this.avatarController.setCameraPosition(this.camera.position);
      this.avatarController.update(delta);
    }

    // Update 3D Heart beating & conduction pulse
    if (this.heartModel) {
      this.heartModel.update(delta);
      // Gentle slow rotation of heart for continuous 3D appreciation
      this.heartModel.group.rotation.y += delta * 0.15;
    }

    // Update blood flow particles
    if (this.bloodFlow) {
      this.bloodFlow.update(delta);
    }

    // Update Digital Board ECG trace
    if (this.digitalBoard) {
      this.digitalBoard.update(delta);
    }

    this.renderer.render(this.scene, this.camera);
  }
}

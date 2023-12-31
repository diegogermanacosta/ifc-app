import type * as THREE from 'three'

export interface CameraControlsState {
  position: THREE.Vector3Tuple
  target: THREE.Vector3Tuple
}

export interface TopicCameraState {
  position: THREE.Vector3Tuple
  target: THREE.Vector3Tuple
  direction: THREE.Vector3Tuple
}

export interface BCFCameraState {
  direction: THREE.Vector3Tuple
  position: THREE.Vector3Tuple
  up: THREE.Vector3Tuple
}

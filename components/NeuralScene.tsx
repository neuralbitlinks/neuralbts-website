"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function NeuralCloud() {
  const group = useRef<THREE.Group>(null);
  const pointsRef = useRef<THREE.Points>(null);

  const { positions, linePositions } = useMemo(() => {
    const count = 90;
    const nodes: THREE.Vector3[] = [];
    for (let i = 0; i < count; i++) {
      // distribute on a rough sphere shell with jitter
      const r = 2.1 + Math.random() * 1.3;
      const theta = Math.acos(2 * Math.random() - 1);
      const phi = Math.random() * Math.PI * 2;
      nodes.push(
        new THREE.Vector3(
          r * Math.sin(theta) * Math.cos(phi),
          r * Math.sin(theta) * Math.sin(phi),
          r * Math.cos(theta)
        )
      );
    }

    const pos = new Float32Array(count * 3);
    nodes.forEach((n, i) => {
      pos[i * 3] = n.x;
      pos[i * 3 + 1] = n.y;
      pos[i * 3 + 2] = n.z;
    });

    // connect near neighbours with lines
    const segs: number[] = [];
    for (let i = 0; i < count; i++) {
      for (let j = i + 1; j < count; j++) {
        if (nodes[i].distanceTo(nodes[j]) < 1.25) {
          segs.push(
            nodes[i].x,
            nodes[i].y,
            nodes[i].z,
            nodes[j].x,
            nodes[j].y,
            nodes[j].z
          );
        }
      }
    }

    return {
      positions: pos,
      linePositions: new Float32Array(segs),
    };
  }, []);

  useFrame((state, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.12;
      group.current.rotation.x =
        Math.sin(state.clock.elapsedTime * 0.15) * 0.18;
      // gentle mouse parallax
      group.current.rotation.y += state.pointer.x * delta * 0.4;
      group.current.position.y = state.pointer.y * 0.15;
    }
  });

  return (
    <group ref={group}>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.07}
          color="#5b6bff"
          sizeAttenuation
          transparent
          opacity={0.95}
          depthWrite={false}
        />
      </points>

      <lineSegments>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[linePositions, 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color="#9b6bff"
          transparent
          opacity={0.18}
          depthWrite={false}
        />
      </lineSegments>

      <mesh>
        <icosahedronGeometry args={[1.15, 1]} />
        <meshBasicMaterial
          color="#0b1120"
          wireframe
          transparent
          opacity={0.12}
        />
      </mesh>
    </group>
  );
}

export default function NeuralScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 45 }}
      dpr={[1, 1.8]}
      gl={{ antialias: true, alpha: true }}
      style={{ pointerEvents: "none" }}
    >
      <ambientLight intensity={0.8} />
      <NeuralCloud />
    </Canvas>
  );
}

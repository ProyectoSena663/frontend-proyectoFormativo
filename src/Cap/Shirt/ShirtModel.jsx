import { useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { MeshStandardMaterial, Box3, Vector3 } from "three";

export const Model= ({ color = "white", rotation = 0, speed = 0, isRotating = false }) => {
  const { scene } = useGLTF("/models/Cap_model/scene.gltf");
  const modelRef = useRef(null);

  useEffect(() => {
    if (scene) {
      // Centrar el modelo
      const box = new Box3().setFromObject(scene);
      const center = box.getCenter(new Vector3());
      scene.position.sub(center);

      scene.traverse((object) => {
        const mesh = object ;
        if (mesh.isMesh) {
          // Verificar si el material es un array o un solo material
          if (Array.isArray(mesh.material)) {
            mesh.material.forEach((mat) => {
              if (mat instanceof MeshStandardMaterial) {
                mat.color.set(color);
              }
            });
          } else {
            if (mesh.material instanceof MeshStandardMaterial) {
              mesh.material.color.set(color);
            }
          }
        }
      });
    }
  }, [color, scene]);

  useEffect(() => {
    if (!isRotating && modelRef.current) {
      modelRef.current.rotation.y = (rotation * Math.PI) / 180;
    }
  }, [rotation, isRotating]);

  useEffect(() => {
    let animationFrameId;
    let lastTime = 0;
    let currentRotation = 0;

    const animate = (time) => {
      if (lastTime === 0) {
        lastTime = time;
      }
      const deltaTime = time - lastTime;
      lastTime = time;

      if (isRotating && modelRef.current) {
        // Convertir la velocidad del range (0-100) a una velocidad de rotación más adecuada
        const rotationSpeed = (speed / 100) * 0.01;
        currentRotation += rotationSpeed * deltaTime;
        modelRef.current.rotation = currentRotation;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isRotating, speed]);

  return (
    <primitive
      ref={modelRef}
      object={scene}
      scale={3}
      position={[0, -3.8, 0]}
    />
  );
};

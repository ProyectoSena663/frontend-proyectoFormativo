import { useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { Mesh, MeshStandardMaterial, Box3, Vector3 } from "three";

export const Model = ({
  color = "white",
  rotation = 0,
  speed = 0,
  isRotating = false,
}) => {
  const { scene } = useGLTF("/public/models/Jacket_Model/Untitled.gltf");
  const modelRef = useRef(null);

  useEffect(() => {
    if (!scene || typeof scene.traverse !== "function") return;

    // Centrar el modelo
    const box = new Box3().setFromObject(scene);
    const center = box.getCenter(new Vector3());
    scene.position.sub(center);

    // Recoge los meshes a eliminar
    const meshesToRemove = [];
    scene.traverse((object) => {
      const mesh = object;
      if (
        mesh.isMesh &&
        (mesh.name.toLowerCase().includes("cube") ||
          mesh.geometry?.type === "BoxGeometry")
      ) {
        meshesToRemove.push(mesh);
      } else if (mesh.isMesh) {
        // Aplicar color y quitar textura
        if (Array.isArray(mesh.material)) {
          mesh.material.forEach((mat) => {
            if (mat instanceof MeshStandardMaterial) {
              mat.map = null;
              mat.color.set(color);
              mat.needsUpdate = true;
            }
          });
        } else {
          if (mesh.material instanceof MeshStandardMaterial) {
            mesh.material.map = null;
            mesh.material.color.set(color);
            mesh.material.needsUpdate = true;
          }
        }
      }
    });
    // Elimina los meshes fuera del traverse
    meshesToRemove.forEach((mesh) => {
      if (mesh.parent) mesh.parent.remove(mesh);
    });
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
        const rotationSpeed = (speed / 100) * 0.01;
        currentRotation += rotationSpeed * deltaTime;
        modelRef.current.rotation.y = currentRotation;
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
      scale={[0.025, 0.0233, 0.025]}
      position={[0, 0, 0]}
    />
  );
};

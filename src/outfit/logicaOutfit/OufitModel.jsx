import { useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { MeshStandardMaterial, Box3, Vector3 } from "three";

export const OutfitModel = ({
  color = "white",
  rotation = 0,
  speed = 0,
  isRotating = false,
}) => {
  const { nodes } = useGLTF("/models/Maniqui_model/Untitled.gltf");
  const modelRef = useRef(null);

  // Centrar el modelo y aplicar color
  useEffect(() => {
    if (modelRef.current) {
      const box = new Box3().setFromObject(modelRef.current);
      const center = box.getCenter(new Vector3());
      modelRef.current.position.sub(center);

      modelRef.current.traverse((object) => {
        if (object.isMesh) {
          const material = object.material;
          if (Array.isArray(material)) {
            material.forEach((mat) => {
              if (mat instanceof MeshStandardMaterial) {
                mat.color.set(color);
              }
            });
          } else {
            if (material instanceof MeshStandardMaterial) {
              material.color.set(color);
            }
          }
        }
      });
    }
  }, [color]);

  // Rotación manual
  useEffect(() => {
    if (!isRotating && modelRef.current) {
      modelRef.current.rotation.y = (rotation * Math.PI) / 180;
    }
  }, [rotation, isRotating]);

  // Rotación automática
  useEffect(() => {
    let animationFrameId;
    let lastTime = 0;
    let currentRotation = 0;

    const animate = (time) => {
      if (lastTime === 0) lastTime = time;
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
    console.log(Object.keys(nodes));
    return () => cancelAnimationFrame(animationFrameId);
  }, [isRotating, speed]);

  return (
    <group scale={[0.01, 0.01, 0.01]} ref={modelRef}>
      {/* Maniquí */}
      {nodes["maniquiGroup"] && <primitive object={nodes["maniquiGroup"]} />}

      {/* Gorra */}
      {nodes["gorra002__0"] && <primitive object={nodes["gorra002__0"]} />}
      {nodes["Cube001"] && <primitive object={nodes["Cube001"]} />}
    </group>
  );
};

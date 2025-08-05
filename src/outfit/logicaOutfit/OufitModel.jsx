import { useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { MeshStandardMaterial, Box3, Vector3 } from "three";

export const OutfitModel = ({
  colorCamisaPantalon = "white",
  colorGorra = "white",
  colorManiqui = "white",
  rotation = 0,
  speed = 0,
  isRotating = false,
}) => {
  const { nodes } = useGLTF("/models/Maniqui_model/Untitled.gltf");
  const modelRef = useRef(null);

  useEffect(() => {
    if (modelRef.current) {
      const box = new Box3().setFromObject(modelRef.current);
      const center = box.getCenter(new Vector3());
      modelRef.current.position.sub(center);

      // Voltea el modelo para que quede de frente
      modelRef.current.rotation.y = Math.PI;

      // Aplica color al grupo maniqui (camiseta + pantalón)
      const group = nodes["maniquiGroup"];
      if (group) {
        group.traverse((obj) => {
          if (obj.isMesh && obj.material instanceof MeshStandardMaterial) {
            obj.material.color.set(colorCamisaPantalon);
          }
        });
      }

      // Aplica color a la gorra
      const gorra = nodes["gorra002__0"];
      if (gorra?.material instanceof MeshStandardMaterial) {
        gorra.material.color.set(colorGorra);
      }

      const maniqui = nodes["Cube001"];
      if (maniqui?.material instanceof MeshStandardMaterial) {
        maniqui.material.color.set(colorManiqui);
      }
    }
  }, [colorCamisaPantalon, colorGorra]);

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
    return () => cancelAnimationFrame(animationFrameId);
  }, [isRotating, speed]);

  return (
    <group scale={[0.01, 0.01, 0.01]} ref={modelRef}>
      {nodes["maniquiGroup"] && (
        <primitive object={nodes["maniquiGroup"]} position={[0, 0, 0]} />
      )}
      {nodes["gorra002__0"] && <primitive object={nodes["gorra002__0"]} />}
      {nodes["Cube001"] && <primitive object={nodes["Cube001"]} />}
    </group>
  );
};

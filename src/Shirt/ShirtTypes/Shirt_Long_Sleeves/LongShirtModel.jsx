import { useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { MeshStandardMaterial, Box3, Vector3 } from "three";

export const Model = ({
  color = "white",
  rotation = 0,
  speed = 0,
  isRotating = false,
}) => {
  const { scene } = useGLTF(
    "/models/Shirt_Long_Sleeves/Shirt Long Sleeves.gltf"
  );
  const modelRef = useRef(null);
  const currentRotationRef = useRef(0); // ✅ Se mantiene entre renders

  useEffect(() => {
    if (!scene || typeof scene.traverse !== "function") return;

    // Centrar el modelo
    const box = new Box3().setFromObject(scene);
    const center = box.getCenter(new Vector3());
    scene.position.sub(center);

    scene.traverse((object) => {
      const mesh = object;

      if (
        mesh.isMesh &&
        (mesh.name.toLowerCase().includes("cube") ||
          mesh.geometry?.type === "BoxGeometry")
      ) {
        scene.remove(mesh);
        return;
      }

      if (mesh.isMesh) {
        if (Array.isArray(mesh.material)) {
          mesh.material.forEach((mat) => {
            if (mat instanceof MeshStandardMaterial) {
              mat.map = null;
              mat.color.set(color);
              mat.transparent = false;
              mat.opacity = 1;
              mat.depthWrite = true;
              mat.alphaTest = 0;
              mat.needsUpdate = true;
            }
          });
        } else if (mesh.material instanceof MeshStandardMaterial) {
          mesh.material.map = null;
          mesh.material.color.set(color);
          mesh.material.transparent = false;
          mesh.material.opacity = 1;
          mesh.material.depthWrite = true;
          mesh.material.alphaTest = 0;
          mesh.material.needsUpdate = true;
        }
      }
    });
  }, [color, scene]);

  useEffect(() => {
    if (!isRotating && modelRef.current) {
      modelRef.current.rotation.y = (rotation * Math.PI) / 180;
      currentRotationRef.current = (rotation * Math.PI) / 180; // sincroniza
    }
  }, [rotation, isRotating]);

  useEffect(() => {
    let animationFrameId;
    let lastTime = 0;

    const animate = (time) => {
      if (lastTime === 0) lastTime = time;
      const deltaTime = time - lastTime;
      lastTime = time;

      if (isRotating && modelRef.current) {
        const rotationSpeed = (speed / 100) * 0.01;
        currentRotationRef.current += rotationSpeed * deltaTime;
        modelRef.current.rotation.y = currentRotationRef.current;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isRotating, speed]);

  return (
    <primitive
      ref={modelRef}
      object={scene}
      scale={[2.5, 2.5, 2.5]}
      position={[0, -4.5, 0]}
    />
  );
};

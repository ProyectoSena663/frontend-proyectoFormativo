import { useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { Mesh, MeshStandardMaterial, Box3, Vector3 } from "three";

export const OutfitModel = ({
  color = "white",
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
    <group scale={[0.001, 0.001, 0.001]} ref={modelRef}>
      {/*Maniqui*/}
      {nodes["Cube.001"] && <primitive object={nodes["Cube.001"]} />}

      {/*Camiseta*/}
      {nodes["T_shirt_gltf.zip_Scene_Node_0.001"] && (
        <primitive object={nodes["T_shirt_gltf.zip_Scene_Node_0.001"]} />
      )}

      {/*Pantalon*/}
      {nodes["RootNode"] && <primitive object={nodes["RootNode"]} />}

      {/*Gorra*/}
      {nodes["Sketchfab_model.003"] && <primitive object={nodes["Sketchfab_model.003"]} />}
    </group>
  );
};

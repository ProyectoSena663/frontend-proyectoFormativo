import { useGLTF } from "@react-three/drei";
import { useEffect } from "react";
import { MeshStandardMaterial } from "three";


export const ShirtModel = ({color}) => {
  const { scene } = useGLTF("/models/t_shirt.glb");

  useEffect(() => {
    if (scene) {
      scene.traverse((object) => {
        if (object.isMesh) {
          object.material.color.set(color); // ✅ Mejor forma de cambiar color
        }
      });
    }
  }, [color, scene]);

  return <primitive object={scene} scale={3} position={[0, -3.8, 0]} />;
};

export default ShirtModel; // ✅ Ahora tiene una exportación por defecto
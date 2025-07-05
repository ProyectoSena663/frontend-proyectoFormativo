import { useGLTF } from "@react-three/drei"; // Importa el hook para cargar modelos GLTF
import { useEffect } from "react"; // Importa useEffect para ejecutar efectos secundarios en React

export const OufitModel = () => {
  const { scene } = useGLTF("/models/MANI.glb"); // Carga el modelo GLTF y extrae la escena

 

  return <primitive object={scene} scale={3} position={[0, .2, 0]} />; // Renderiza el modelo 3D con una escala y posición específicas
};

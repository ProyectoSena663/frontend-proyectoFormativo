import { useGLTF } from "@react-three/drei"; // Importa el hook para cargar modelos GLTF
import { useEffect } from "react"; // Importa useEffect para ejecutar efectos secundarios en React

export const OufitModel = ({color}) => {
const { scene } = useGLTF("/models/MANI.glb"); // Carga el modelo GLTF y extrae la escena

   useEffect(() => { // Hook que se ejecuta cuando cambia el color o la escena
    if (scene) { // Verifica si la escena está disponible
      scene.traverse((object) => { // Recorre todos los objetos hijos de la escena
        if (object.isMesh) { // Verifica si el objeto es una malla (Mesh)
          object.material.color.set(color); // Cambia el color del material de la malla al color recibido por props
        }
      });
    }
  }, [color, scene]); // Dependencias del efecto: se ejecuta cuando cambia el color o la escena

  return <primitive object={scene} scale={3} position={[0, -3.8, 0]} />; // Renderiza el modelo 3D con una escala y posición específicas
}

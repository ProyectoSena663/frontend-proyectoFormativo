import "./Outfit3D.css";
import { Canvas } from "@react-three/fiber"; // Importa el componente Canvas para renderizar la escena 3D
import { OrbitControls } from "@react-three/drei"; // Importa controles de cámara orbitables (rotación, zoom, etc.)
import { OutfitModel } from "./OufitModel"; // Importa el modelo de la camiseta

export const OufitEcene = ({ color }) => {
  // Declara un componente que recibe un color como prop
  return (
    <>
      <Canvas
        camera={{ position: [0, 1.5, 5], fov: 30 }} // Configura la cámara: posición y campo de visión
        style={{ background: "#333" }} // Establece el color de fondo del canvas
      >
        {/* Luces para iluminar la escena */}
        <ambientLight intensity={1} />
        {/* Luz ambiental para iluminar la escena de manera uniforme */}
        <directionalLight position={[2, 5, 2]} intensity={1} />
        {/* renderza el modelo de la camiseta con el color recibido por props */}
        <OutfitModel color={color}/>
        <OrbitControls
          minDistance={1.2} // Distancia mínima de la cámara al centro de la escena
          maxDistance={1.4} // Distancia máxima de la cámara al centro de la escena
          zoomSpeed={0.7} // Velocidad de zoom de la cámara
          minPolarAngle={Math.PI / 2} // Ángulo mínimo de rotación vertical (en radianes)
          maxPolarAngle={Math.PI / 2} // Ángulo máximo de rotación vertical (bloquea el eje vertical para que no rote hacia arriba o abajo)
        />
      </Canvas>
    </>
  );
};

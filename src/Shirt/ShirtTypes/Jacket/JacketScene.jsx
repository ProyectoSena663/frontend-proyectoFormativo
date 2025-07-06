import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Model } from "./JacketModel"; // Asegúrate de que la ruta esté correcta

export const JacketScene = ({ color }) => {
  return (
    <Canvas
      camera={{ position: [0, 1.5, 5], fov: 120 }}
      style={{ background: "#333" }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 5, 2]} intensity={2} />
      <Model color={color} />
      <OrbitControls
        minDistance={5}
        maxDistance={6}
        zoomSpeed={0.7}
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
      />
    </Canvas>
  );
};

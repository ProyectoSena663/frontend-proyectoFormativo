import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Model } from "./LongShirtModel";
import "./model.module.css";

export const ShirtLongSleeves = ({ color, rotation, speed, isRotating }) => {
  return (
    <Canvas
      camera={{ position: [0, 1.5, 5], fov: 30 }}
      style={{ background: "#333" }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 5, 2]} intensity={1} />

      {/* ✅ Pasamos todos los props de rotación al modelo */}
      <Model
        color={color}
        rotation={rotation}
        speed={speed}
        isRotating={isRotating}
      />

      <OrbitControls
        minDistance={2}
        maxDistance={7}
        zoomSpeed={0.7}
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
      />
    </Canvas>
  );
};

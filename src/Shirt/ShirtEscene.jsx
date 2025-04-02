import { Canvas } from "@react-three/fiber";
import { OrbitControls} from "@react-three/drei";
import ShirtModel  from "./ShirtModel";
import "./model.module.css";


export const ShirtScene = ({color}) => {
  return (
    <Canvas
      camera={{ position: [0, 1.5, 5], fov: 30 }}
      style={{ background: "#333" }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 5, 2]} intensity={1} />
      <ShirtModel color={color} />
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

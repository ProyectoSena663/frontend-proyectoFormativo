import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Model } from "./ShirtModel";

export const Scene = ({
  color = "white",
  rotation = 0,
  speed = 0,
  isRotating = false,
}) => {
  return (
    <div className="sceneShirt">
      <Canvas
        camera={{ position: [0, 0, 3], fov: 50 }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={1} />
        <directionalLight position={[2, 5, 2]} intensity={2} />
        <Model
          color={color}
          rotation={rotation}
          speed={speed}
          isRotating={isRotating}
        />
        <OrbitControls
          enableZoom={true}
          minDistance={2}
          maxDistance={3}
          zoomSpeed={0.7}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={(3 * Math.PI) / 4}
          enablePan={false}
        />
      </Canvas>
    </div>
  );
};

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Model } from "./Model";

export const Scene = ({ color = "white", rotation = 0, speed = 0, isRotating = false }) => {
  return (
    <div className="sceneShirt" style={{width:'100%', height:'100vh', overflow: 'hidden'}}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50}}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={1} />
        <directionalLight position={[3, 5, 2]} intensity={4} />
        <Model
          color={color}
          rotation={rotation}
          speed={speed}
          isRotating={isRotating}
        />
        <OrbitControls
          enableZoom={true}
          minDistance={3}
          maxDistance={10}
          zoomSpeed={0.7}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 1.5}
          enablePan={false}
        />
      </Canvas>
    </div>
  );
};

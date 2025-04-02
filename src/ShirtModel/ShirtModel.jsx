import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import "./model.module.css";


const ShirtModel = ({ color = "red" }) => {
  const { scene } = useGLTF("/models/t_shirt.glb");

  scene.traverse((child) => {
    if (child.isMesh) {
      child.material.color.set(color);
    }
  });

  return <primitive object={scene} scale={3} position={[0, -3.9, 0]} />;
};

export const ShirtScene = () => {
  return (
    <Canvas
      camera={{ position: [0, 1.5, 5], fov: 30 }}
      style={{ background: "#333" }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 5, 2]} intensity={1} />
      <ShirtModel color="#ccc" />
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

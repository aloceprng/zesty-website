import Menu from "./Menu";
import { Canvas } from '@react-three/fiber';
import { Suspense, useState } from 'react';
import { Environment, OrbitControls } from '@react-three/drei';
import Model from "./Model";

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="hero">
      <Menu />
      <div className="canvas">
        {isHovered && 
          <div className="text">
            <p>this is zester! </p>
            <p>you can spin him</p>
          </div>}
        <Canvas 
          camera={{ position: [0, 0.5, 2.5], fov: 80 }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}>
            <ambientLight intensity={0.2} color="0xfdfff4"/>
            <directionalLight position={[5, 10, 5]} intensity={0.2} />
            <OrbitControls 
              enableDamping
              minPolarAngle={1.25}
              maxPolarAngle={1.25}
              dampingFactor={0.05}
              enableZoom={false}
              target={[0, 0, 0]}/>
            <Environment preset="city" />
            <Suspense fallback={ null }>
                <Model name="zester" state={isHovered ? "wave" : "default"}  position={[0, -1.25, 0]} />
            </Suspense>
      </Canvas>
      </div>
    </div>
  );
}
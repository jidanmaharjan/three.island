import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import Loader from "../../components/Loader";
import Beach from "../../models/Beach";
import Sky from "../../models/Sky";
import Merry from "../../models/Merry";

const Island = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(0);
  const adjustBeachForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -6.5, -43];
    const rotation = [0.1, 4.7, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
      screenPosition = [0, -6.5, -43];
    } else {
      screenScale = [2, 2, 2];
      screenPosition = [0, -6.5, -43];
    }
    return [screenScale, screenPosition, rotation];
  };

  const adjustShipForScreenSize = () => {
    let screenScale = null;
    let screenPosition = null;
    const rotation = [0.1, 4.7, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.5, 0.5, 0.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [0.1, 0.1, 0.1];
      screenPosition = [0, -5, -3];
    }
    return [screenScale, screenPosition, rotation];
  };

  const [islandScale, islandPosition, islandRotation] =
    adjustBeachForScreenSize();

  const [shipScale, shipPosition, shipRotation] = adjustShipForScreenSize();
  return (
    <section className="w-full h-screen relative">
      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <pointLight />
          <spotLight />
          <hemisphereLight groundColor={"#000000"} intensity={1} />
          <Sky />
          <Beach
            position={islandPosition}
            scale={islandScale}
            rotation={islandRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />
          <Merry
            scale={shipScale}
            position={shipPosition}
            rotation={shipRotation}
          />
        </Suspense>
      </Canvas>
    </section>
  );
};
export default Island;

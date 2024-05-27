import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Loader from "../../components/Loader";
import Beach from "../../models/Beach";
import Sky from "../../models/Sky";

const Island = () => {
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

  const [islandScale, islandPosition, islandRotation] =
    adjustBeachForScreenSize();
  return (
    <section className="w-full h-screen relative">
      <Canvas>
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
          />
        </Suspense>
      </Canvas>
    </section>
  );
};
export default Island;

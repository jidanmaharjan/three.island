import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import Loader from "../../components/Loader";
import Beach from "../../models/Beach";
import Merry from "../../models/Merry";
import Sky from "../../models/Sky";
import merryImg from "../../assets/Going_Merry_Anime_Concept_Art.webp";

const Island = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [merry, setMerry] = useState(false);
  const [, setCurrentStage] = useState(0);
  const adjustBeachForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -6.5, -43];
    const rotation = [0.1, 4.7, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
      screenPosition = [0, -6.5, -43];
    } else {
      screenScale = [10, 10, 10];
      screenPosition = [0, -6.5, -43];
    }
    return [screenScale, screenPosition, rotation];
  };

  const adjustShipForScreenSize = () => {
    let screenScale = null;
    let screenPosition = null;
    const rotation = [0, 3.3, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.5, 0.5, 0.5];
      screenPosition = [0, -11.3, -20];
    } else {
      screenScale = [15, 15, 15];
      screenPosition = [150, -50.3, 80];
    }
    return [screenScale, screenPosition, rotation];
  };

  const [islandScale, islandPosition, islandRotation] =
    adjustBeachForScreenSize();

  const [shipScale, shipPosition, shipRotation] = adjustShipForScreenSize();

  return (
    <section className="w-full h-screen relative">
      <div
        className={`fixed top-0 w-80 h-screen bg-white p-4 z-[10000000] transition-all duration-300 ${
          merry ? "" : "-translate-x-full"
        }`}
      >
        <button
          className="absolute top-4 right-4 text-3xl"
          onClick={() => setMerry(!merry)}
        >
          &times;
        </button>
        <img src={merryImg} alt="The Going Merry Image" />
        <h1 className="text-3xl font-bold text-black mt-4">The Going Merry</h1>

        <section className="overflow-y-scroll h-40">
          <h2>Creation and Introduction</h2>
          <p>
            The Going Merry, also known simply as the Merry, was designed and
            built by Merry, a loyal servant of Kaya, a wealthy young girl in
            Syrup Village. The ship was given to the Straw Hat Pirates as a gift
            from Kaya after they saved her from the pirate captain Kuro. It
            officially became their vessel and was named the Going Merry.
          </p>
          <h2>Adventures and Modifications</h2>
          <p>
            <strong>East Blue Saga:</strong> The Going Merry was introduced in
            the East Blue Saga and served as the Straw Hat Pirates' primary mode
            of transportation, carrying them through their initial adventures
            and battles.
          </p>
          <p>
            <strong>Grand Line:</strong> The ship continued to be the home and
            vehicle for the crew as they entered the Grand Line. It was modified
            several times to suit their needs, including the addition of a
            cannon and other improvements by Usopp.
          </p>
          <h2>Significant Events</h2>
          <p>
            <strong>Skypiea Arc:</strong> The Going Merry managed to reach
            Skypiea, the sky island, where it sustained significant damage.
          </p>
          <p>
            <strong>Water 7 and Enies Lobby:</strong> The ship's condition
            deteriorated further due to the harsh environments and battles. In
            Water 7, it was revealed that the Going Merry was beyond repair,
            leading to an emotional farewell.
          </p>
          <h2>Spirit of the Going Merry</h2>
          <p>
            <strong>Klabautermann:</strong> The ship was shown to have a spirit
            known as a Klabautermann, which appeared to Usopp and Luffy,
            expressing the ship's gratitude and loyalty to the crew.
          </p>
          <p>
            <strong>Enies Lobby:</strong> Despite being declared unseaworthy,
            the Going Merry miraculously arrived to rescue the crew from Enies
            Lobby, piloted by its spirit. This moment was one of the most
            emotional scenes in the series.
          </p>
          <h2>Final Farewell</h2>
          <p>
            <strong>Viking Funeral:</strong> After the Enies Lobby arc, the crew
            held a Viking funeral for the Going Merry. They set the ship ablaze
            and let it drift into the sea, honoring its service and the memories
            they shared aboard it.
          </p>
          <p>
            <strong>Emotional Impact:</strong> The farewell was deeply emotional
            for both the characters and the fans, highlighting the strong bond
            between the crew and their ship.
          </p>
          <h2>Legacy</h2>
          <p>
            <strong>Thousand Sunny:</strong> The Going Merry was succeeded by
            the Thousand Sunny, a more advanced ship built by Franky. However,
            the Going Merry remains a cherished memory for the Straw Hat
            Pirates.
          </p>
          <p>
            <strong>Symbol of the Crew's Journey:</strong> The Going Merry
            symbolizes the early adventures, growth, and camaraderie of the
            Straw Hat Pirates, marking an important chapter in their journey.
          </p>
          <h2>Summary</h2>
          <p>
            The Going Merry's life is a poignant tale of loyalty, adventure, and
            friendship. From its humble beginnings in Syrup Village to its
            heroic end at Enies Lobby, the ship played a central role in the
            Straw Hat Pirates' journey, leaving a lasting legacy in the world of
            "One Piece."
          </p>
        </section>
      </div>
      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ near: 0.1, far: 5000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <pointLight />
          <spotLight />
          <hemisphereLight groundColor={"#000000"} intensity={1} />
          <Sky
            scale={[4, 4, 4]}
            position={[0, -100, 0]}
            isRotating={isRotating}
          />
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
            onClick={() => {
              setMerry(!merry);
            }}
          />
          <OrbitControls />
        </Suspense>
      </Canvas>
    </section>
  );
};
export default Island;

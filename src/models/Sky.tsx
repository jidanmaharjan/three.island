import { useGLTF } from "@react-three/drei";

import skyScene from "../assets/3d/sky.glb";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Sky = ({ ...props }: any) => {
  const sky = useGLTF(skyScene);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const skyRef = useRef<any>();

  useFrame((_, delta) => {
    skyRef.current.rotation.y += 0.01 * delta;
  });
  return (
    <mesh ref={skyRef} {...props}>
      <primitive object={sky.scene} />
    </mesh>
  );
};
export default Sky;

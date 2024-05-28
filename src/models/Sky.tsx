import { useGLTF } from "@react-three/drei";

import skyScene from "../assets/3d/sky.glb";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Sky = (props: any) => {
  const sky = useGLTF(skyScene);
  return (
    <mesh {...props}>
      <primitive object={sky.scene} />
    </mesh>
  );
};
export default Sky;

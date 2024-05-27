import { useGLTF } from "@react-three/drei";
import shipScene from "../assets/3d/going_merry.glb";

const Merry = (props: any) => {
  const { scene, animations } = useGLTF(shipScene);
  return (
    <mesh {...props}>
      <primitive object={scene} />
    </mesh>
  );
};
export default Merry;

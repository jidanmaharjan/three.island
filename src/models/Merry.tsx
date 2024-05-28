/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAnimations, useGLTF } from "@react-three/drei";
import shipScene from "../assets/3d/going_merry.glb";
import { useEffect, useRef } from "react";

const Merry = (props: any) => {
  const planeRef = useRef();
  const { scene, animations } = useGLTF(shipScene);
  const { actions } = useAnimations(animations, planeRef);

  console.log(actions);

  useEffect(() => {
    actions?.[0]?.play();
  }, [actions]);
  return (
    <mesh {...props} ref={planeRef}>
      <primitive object={scene} />
    </mesh>
  );
};
export default Merry;

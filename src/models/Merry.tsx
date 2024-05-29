/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import shipScene from "../assets/3d/going_merry.glb";

const Merry = ({ ...props }: any) => {
  const shipRef = useRef<any>();
  const { scene, animations } = useGLTF(shipScene);
  const { actions } = useAnimations(animations, shipRef);
  console.log(actions);

  useFrame(({ clock }) => {
    if (shipRef.current) {
      // Update the Y position to simulate bird-like motion using a sine wave
      shipRef.current.rotation.z = Math.sin(clock.elapsedTime) * 0.1;

      // Update the X and Z positions based on the direction

      // Rotate the ship based on the direction
      shipRef.current.rotation.y += 0.001;

      // if (((shipRef.current.rotation.y * 180) / Math.PI) % 360 < 90) {
      //   shipRef.current.rotation.y += 0.1 / Math.PI;
      //   shipRef.current.position.z += 0.2 * Math.PI;
      // }
      // if (
      //   ((shipRef.current.rotation.y * 180) / Math.PI) % 360 > 90 &&
      //   ((shipRef.current.rotation.y * 180) / Math.PI) % 360 < 180
      // ) {
      //   shipRef.current.position.x += 0.2 * Math.PI;
      //   shipRef.current.rotation.y += 0.1 / Math.PI;
      //   shipRef.current.position.z += 0.2 * Math.PI;
      // }
      // if (
      //   ((shipRef.current.rotation.y * 180) / Math.PI) % 360 > 180 &&
      //   ((shipRef.current.rotation.y * 180) / Math.PI) % 360 < 270
      // ) {
      //   shipRef.current.position.x += 0.2 * Math.PI;
      //   shipRef.current.rotation.y += 0.1 / Math.PI;
      //   shipRef.current.position.z -= 0.2 * Math.PI;
      // }
      // if (
      //   ((shipRef.current.rotation.y * 180) / Math.PI) % 360 > 270 &&
      //   ((shipRef.current.rotation.y * 180) / Math.PI) % 360 < 360
      // ) {
      //   shipRef.current.position.x -= 0.2 * Math.PI;
      //   shipRef.current.rotation.y += 0.1 / Math.PI;
      //   shipRef.current.position.z -= 0.2 * Math.PI;
      // }
    }
  });
  return (
    <mesh {...props} ref={shipRef}>
      <primitive object={scene} />
    </mesh>
  );
};
export default Merry;

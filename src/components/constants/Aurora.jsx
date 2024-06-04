import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import { useEffect } from "react";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const Colors = [
  "#13FFAA",
  "#1E47C6",
  "#CE84CF",
  "#DD335C",
  "#eaffff",
  "#a6b8cb",
  "#507297",
  "#febcab",
  "#cba9a7",
];
const Aurora = () => {
  const color = useMotionValue(Colors[0]);
  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;

  useEffect(() => {
    animate(color, Colors, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, [color]);

  return (
    <motion.section
      style={{
        backgroundImage,
        zIndex: -20,
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
      className="overflow-hidden"
    >
      <div className="absolute inset-0 z-0 ">
        <Canvas>
          <Stars radius={80} count={2500} fade speed={3} factor={8}>
            {" "}
          </Stars>
        </Canvas>
      </div>
    </motion.section>
  );
};

export default Aurora;

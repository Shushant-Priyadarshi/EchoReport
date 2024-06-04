import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion";

const AnimatedLoader = () => {
  return (
    <div>
      <motion.div className="flex justify-center  h-screen">
        <motion.span
          className="text-5xl text-black mt-16 w-6 h-6 rounded-2xl bg-white m-2"
          initial={{ y: -20 }}
          animate={{ y: 20 }}
          transition={{ y: { repeat: Infinity, repeatType: "mirror", ease: "easeOut", duration: 0.4 } }}
        ></motion.span>
        <motion.span
          initial={{ y: 20 }}
          animate={{ y: -20 }}
          transition={{ y: { repeat: Infinity, repeatType: "mirror", ease: "easeOut", duration: 0.4 } }}
          className="text-5xl text-black mt-16 w-6 h-6 rounded-2xl bg-white m-2"
        ></motion.span>
        <motion.span
          initial={{ y: -20 }}
          animate={{ y: 20 }}
          transition={{ y: { repeat: Infinity, repeatType: "mirror", ease: "easeOut", duration: 0.4 } }}
          className="text-5xl text-black mt-16 w-6 h-6 rounded-2xl bg-white m-2"
        ></motion.span>
      </motion.div>

      <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100vh", pointerEvents: "none", zIndex: 10 }}>
        <Canvas>
          <Stars radius={80} count={500} fade speed={3} factor={8} />
        </Canvas>
      </div>
    </div>
  );
};

export default AnimatedLoader;

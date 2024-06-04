import { motion } from "framer-motion";
import Search from "../constants/Search";
import Paginataion from "../constants/Paginataion";
import Posts from "../constants/Posts";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import GotoTopbtn from "../constants/GotoTopbtn";

const News = () => {
  return (
    <>
      <div className="relative z-10">
        <motion.div
          className="fixed cursor-pointer rounded-full p-4 bg-info text-white  text-4xl md:text-3xl
          bottom-5 right-5 md:bottom-auto md:right-auto md:top-5 md:left-5 shadow-2xl z-30"
          variants={{
            hidden: { opacity: 0, z: -75, x: -100 },
            visible: { opacity: 1, z: 0, x: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, delay: 0.25 }}
        >
          <Link to="/">
            <FaHome />
          </Link>
        </motion.div>

        <Search />
        <Paginataion />
        <Posts />
        <div
          className="absolute bottom-5 left-5 cursor-pointer bg-info text-white rounded-full p-4 text-4xl md:text-3xl "
        >
          <GotoTopbtn />
        </div>
      </div>

      {/* Animation */}
      <motion.div
        initial={{ y: "-100%" }}
        animate={{ y: "100%" }}
        transition={{ duration: 2, ease: [0.2, 1, 0.2, 1] }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          backgroundColor: "#1c8ee6",
          zIndex: 20,
        }}
      ></motion.div>

      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        <Canvas>
          <Stars radius={80} count={2500} fade speed={3} factor={8} />
        </Canvas>
      </div>
    </>
  );
};

export default News;

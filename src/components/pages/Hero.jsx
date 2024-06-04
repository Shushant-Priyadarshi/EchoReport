import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";
import Header from "../constants/Header";
import Aurora from "../constants/Aurora";
import { Link } from "react-router-dom";

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControl = useAnimation();
  const slideControl = useAnimation();

  useEffect(() => {
    if (isInView) {
      // Trigger animations when in view
      mainControl.start("visible");
      slideControl.start("visible");
    }
  }, [isInView, mainControl, slideControl]);

  return (
    <>
      <div className="mt-32 p-5 md:p-10" id="home">
        <Header />
        <Aurora />
        <div>
          <motion.div
            ref={ref}
            className="container mx-auto text-center text-white overflow-hidden"
            variants={{
              hidden: { opacity: 0, y: 75, left: 0 },
              visible: { opacity: 1, y: 0, left: "100%" },
            }}
            initial="hidden"
            animate={mainControl}
            transition={{ duration: 1, delay: 0.25 }}
          >
            <motion.h2 className="text-4xl md:text-6xl font-bold mb-8 text-white">
              Echo<span className="text-info">Report</span>
            </motion.h2>
            <motion.h1 className="text-4xl md:text-6xl font-bold">
              Stay <span className="text-info">Informed</span>, Stay{" "}
              <span className="text-info">Ahead</span>
            </motion.h1>
            <p className="mt-4 md:mt-8 text-lg md:text-2xl">
              Your Source for Reliable and Up-to-Date News on Politics,
              Business, Technology, and More
            </p>
            <Link to="/news" className="mt-8 mb-5 btn btn-info">
              Read Latest News
            </Link>
          </motion.div>
        </div>
        <motion.p
          className="mt-5 md:mt-0 md:p-20 text-center p-4 text-lg md:text-xl space-y-6 text-white  mb-10"
          initial={{ x: 1000, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.75 }}
        >
          EchoReport is dedicated to delivering the latest and most reliable
          news from across the globe. Our mission is to keep our readers
          informed and engaged with high-quality journalism and insightful
          analysis.
        </motion.p>

        <motion.div
          variants={{
            hidden: { left: 0 },
            visible: { left: "100%" },
          }}
          initial="hidden"
          animate={slideControl}
          transition={{ duration: 0.5, ease: "easeIn" }}
          style={{
            position: "absolute",
            top: 4,
            bottom: 4,
            left: 0,
            right: 0,
            background: "#1c8ee6",
            zIndex: 20,
          }}
        ></motion.div>
      </div>
    </>
  );
};

export default Hero;

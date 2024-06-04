import { Environment, OrbitControls, Sphere,Float, ContactShadows } from "@react-three/drei";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { motion, useInView } from "framer-motion";
import { Suspense, useRef } from "react";
import { TextureLoader } from "three";

import earthModel from "../../assets/images/earth.jpg";

const head1 = `Mission`;
const head2 = `Vision`;
const head3 = `Why Choose Us?`;
const mission = `Our mission is to provide comprehensive news coverage with
integrity, accuracy, and impartiality. We strive to be a trusted
source of information for our readers.`;

const vision = `Our vision is to empower individuals with the information they
need to make informed decisions, foster informed discussions,
and contribute to a better-informed society.`;

const choose = `At EchoReport, we prioritize the accuracy and timeliness of our
news reports. We understand the importance of reliable news in
today’s fast-paced world and are dedicated to providing our
readers with well-researched and unbiased news coverage.`;

const Earth = ({ colorMap }) => {
  const earthRef = useRef();

  useFrame(() => {
    earthRef.current.rotation.y += 0.005;
  });

  return (
    <mesh ref={earthRef}>
      <Suspense fallback={null}>
        <Sphere scale={3}>
          <meshStandardMaterial map={colorMap} roughness={1} />
        </Sphere>
      </Suspense>
    </mesh>
  );
};

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.5, once: true });
  const colorMap = useLoader(TextureLoader, earthModel);
  const defaultAnimation = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <>
      <div
        className="text-center md:text-start md:p-20 mt-12 md:mt-0 md:grid grid-cols-2"
        id="about"
      >
        <div className="container mx-auto px-4 col-span-1" ref={ref}>
          <div className="text-lg md:text-lg leading-relaxed space-y-6 text-white">
            <div>
              <h3 className="text-2xl font-semibold mb-2 text-info">
                <span className="sr-only">{head1}</span>
                <motion.span
                  aria-hidden
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  transition={{ staggerChildren: 0.1 }}
                  className="inline-block"
                >
                  {head1.split(" ").map((word, index) => (
                    <motion.span
                      key={index}
                      variants={defaultAnimation}
                      className="inline-block"
                    >
                      {word}&nbsp;
                    </motion.span>
                  ))}
                </motion.span>
              </h3>
              <p>
                <span className="sr-only">{mission}</span>
                <motion.span
                  aria-hidden
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  transition={{ staggerChildren: 0.1 }}
                  className="inline-block"
                >
                  {mission.split(" ").map((word, index) => (
                    <motion.span
                      key={index}
                      variants={defaultAnimation}
                      className="inline-block"
                    >
                      {word}&nbsp;
                    </motion.span>
                  ))}
                </motion.span>
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2 text-info">
                <span className="sr-only">{head2}</span>
                <motion.span
                  aria-hidden
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  transition={{ staggerChildren: 0.1 }}
                  className="inline-block"
                >
                  {head2.split(" ").map((word, index) => (
                    <motion.span
                      key={index}
                      variants={defaultAnimation}
                      className="inline-block"
                    >
                      {word}&nbsp;
                    </motion.span>
                  ))}
                </motion.span>
              </h3>
              <p>
                <span className="sr-only">{vision}</span>
                <motion.span
                  aria-hidden
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  transition={{ staggerChildren: 0.1 }}
                  className="inline-block"
                >
                  {vision.split(" ").map((word, index) => (
                    <motion.span
                      key={index}
                      variants={defaultAnimation}
                      className="inline-block"
                    >
                      {word}&nbsp;
                    </motion.span>
                  ))}
                </motion.span>
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2 text-info">
                <span className="sr-only">{head3}</span>
                <motion.span
                  aria-hidden
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  transition={{ staggerChildren:0.1}}
                  className="inline-block"
                >
                  {head3.split(" ").map((word, index) => (
                    <motion.span
                      key={index}
                      variants={defaultAnimation}
                      className="inline-block"
                    >
                      {word}&nbsp;
                    </motion.span>
                  ))}
                </motion.span>
              </h3>
              <p>
                <span className="sr-only">{choose}</span>
                <motion.span
                  aria-hidden
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  transition={{ staggerChildren:0.1 }}
                  className="inline-block"
                >
                  {choose.split(" ").map((word, index) => (
                    <motion.span
                      key={index}
                      variants={defaultAnimation}
                      className="inline-block"
                    >
                      {word}&nbsp;
                    </motion.span>
                  ))}
                </motion.span>
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 container mx-auto px-4 z-0 mt-5 md:mt-0  h-[250px] md:h-[500px]">
          <Canvas className="">
            <OrbitControls enableZoom={false} />
            <Environment preset="studio" />
            <directionalLight position={[3.3, 1.0, 4.4]} intensity={4} />
            <Float speed={10} rotationIntensity={0} floatIntensity={1}>
              <Earth colorMap={colorMap} />
              
            </Float>
           
          </Canvas>
        </div>
      </div>
    </>
  );
};

export default About;

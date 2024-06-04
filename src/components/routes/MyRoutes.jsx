import { Route, Routes } from "react-router-dom";
import Hero from "../pages/Hero";
import About from "../pages/About";
import Contact from "../pages/Contact";
import { Toaster } from "react-hot-toast";
import News from "../pages/News";
import { AnimatePresence } from "framer-motion";

const MyRoutes = () => {
  return (
    <AnimatePresence>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Contact />
              <Toaster />
            </>
          }
        />
        <Route path="/news" element={<News />} />

        <Route
          path="*"
          element={
            <h1 className="text-3xl text-center text-info">Page Not Found!</h1>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

export default MyRoutes;

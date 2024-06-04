
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex justify-center relative z-10">
      <motion.div
        className="glass p-4 mt-10 items-center font-poppins fixed top-0 rounded-lg"
        initial={{ opacity: 0, y: -75 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, delay: 0.25 }}
      >
        <ul className="flex gap-10 items-center cursor-pointer text-white text-[0.9rem] md:text-xl">
          <li className="hover:scale-110 duration-300 ease-in cursor-pointer">
            <a onClick={()=>scrollToSection("home")}>Home</a>
          </li>
          <li className="hover:scale-110 duration-300 cursor-pointer ease-in">
            <a onClick={()=>scrollToSection("about")}>About Us</a>
          </li>
          <li className="hover:scale-110 duration-300 cursor-pointer ease-in">
            <a onClick={()=>scrollToSection("contact")}>Contact</a>
          </li>
          <li className="hover:scale-110 duration-300 cursor-pointer ease-in">
            <Link to="/news">News</Link>
          </li>
        </ul>
      </motion.div>
    </div>
  );
};

export default Header;

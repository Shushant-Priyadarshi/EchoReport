import { useGlobalContext } from "../utils/context";
import { motion } from "framer-motion";
const Search = () => {
  const {query,searchPost} = useGlobalContext();
  return (
    <div className="flex flex-col items-center justify-center p-5 w-100 ">
      <motion.h1 className="text-3xl md:text-5xl font-bold text-white"
       variants={{
              hidden: { opacity: 0, y: -75, left: 0 },
              visible: { opacity: 1, y: 0, left: "100%" },
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1, delay: 0.25 }}>
        Echo<span className="text-info">Report</span>
      </motion.h1>
      <div className="mt-5">
        <form onSubmit={(e)=>e.preventDefault()}>
          <input
          
            type="text"
            placeholder="Search here"
            className="text-black md:w-96 border-2 bg-white  p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-info z-0"
            value={query}
            onChange={(e)=>searchPost(e.target.value)}
          />
        </form>
      </div>
    </div>
  );
};

export default Search;

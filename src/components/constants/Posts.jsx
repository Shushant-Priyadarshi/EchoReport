import AnimatedLoader from "../utils/AnimatedLoader";
import { useGlobalContext } from "../utils/context";
import { motion } from "framer-motion";
const Posts = () => {
  const { hits,  isLoading } = useGlobalContext();

  if (isLoading) {
    return <AnimatedLoader />;
  }
  return (
    <>
    
      {hits.map((currPost) => {
        const { title, author, objectID, url, num_comments } = currPost;
        return (
          
            <div
              className=" w-auto p-5 md:p-4  md:w-3/4  m-auto "
              key={objectID}
            >
              <motion.div className="card   bg-white shadow-xl text-black "
              variants={{
              hidden: { opacity: 0, z: -175 ,y:100},
              visible: { opacity: 1, z: 0 ,y:0},
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1, delay: 0.25 }}
            >
                <div className="card-body">
                  <h2 className="card-title">{title}</h2>
                  <div>
                    By <span>{author}</span> |{" "}
                    <span>{num_comments} comments</span>
                  </div>
                  <div className="card-actions justify-center md:justify-end">
                    <a href={url} target="_blank">
                      <button className="btn btn-info text-white shadow-2xl">
                        Read more
                      </button>
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          
        );
      })}
    </>
  );
};

export default Posts;

import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
// import { useLoader } from "@react-three/fiber";
// import GLTFLoader from "@react-three/gltfjsx/src/utils/glftLoader";
// import astronaut from "../../assets/model3d/scene.gltf"

// function Scene(){
//   const gltf =useLoader(GLTFLoader,astronaut)
//   return <primitive object={gltf.scene} />
// }

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      message: data.message,
    };
    try {
      await axios.post("https://formsubmit.co/el/mivedi", userInfo);
      toast.success("Message sent successfully!");
    } catch (error) {
      console.log("erroe", error);
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="py-10 font-poppins" id="contact">
      <div
        className="text-center font-bold text-3xl text-info mt-2 pt-3"
        data-aos="flip-down"
      >
        Contact Us
      </div>
      <div className="max-w-[1240px] mx-auto md:grid grid-cols-2 gap-10 md:my-10 p-4 md:p-0">
        <div className="col-span-1 flex justify-center rounded-lg">
          <img src="" alt="Astronaut" />
        </div>
        <div className="col-span-1 md:text-lg p-4">
          <form
            className="flex flex-col gap-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              type="text"
              name="name"
              {...register("name", { required: true })}
              placeholder="Your Name"
              className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#7091E6]"
            />
            {errors.name && <span>This field is required</span>}
            <input
              type="email"
              name="email"
              {...register("email", { required: true })}
              placeholder="Your Email"
              className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#7091E6]"
            />
            {errors.email && <span>This field is required</span>}
            <textarea
              placeholder="Your Message"
              name="message"
              rows="5"
              {...register("message", { required: true })}
              className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#7091E6]"
            />
            {errors.message && <span>This field is required</span>}
            <button
              type="submit"
              className="p-3 bg-info text-black rounded-lg hover:bg-[#2c3a74] transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

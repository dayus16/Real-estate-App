import ReactLogo from "../assets/House.jpg";
import { IoIosMenu, IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div
      className="relative p-5 h-screen bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${ReactLogo})` }}
      id="home"
    >
      {/* Blur overlay */}
      <div className="absolute inset-0 backdrop-blur-sm bg-black/20"></div>

      {/* Navbar content */}
      <div className="relative z-10 flex justify-between p-5 items-center">
        <div className="hidden md:block">
          <h1 className="text-3xl font-bold">🏠 Estate</h1>
        </div>
        <div className="absolute right-30 top-0 text-center md:hidden">
          <h1 className="text-3xl font-bold">🏠 Estate</h1>
        </div>
        <div className="hidden md:block">
          <nav className="flex gap-4">
            <a href="#home" className="hover:text-blue-200">
              Home
            </a>
            <a href="#about" className="hover:text-blue-200">
              About
            </a>
            <a href="#projects" className="hover:text-blue-200">
              Projects
            </a>
            <a href="#testimonials" className="hover:text-blue-200">
              Testimonials
            </a>
          </nav>
        </div>
        <div>
          <button className="bg-white py-1 px-4 rounded-full text-xl text-black font-medium cursor-pointer hidden md:block hover:bg-blue-500 hover:text-white">
            Sign up
          </button>
        </div>
      </div>
      {/* <div className="absolute right-5 top-10">
        <h1 className="text-white text-4xl md:hidden">
          <IoIosMenu />
        </h1>
      </div> */}

      {/* -------------Responsive Navbar-------------------- */}
      <div className="relative md:hidden">
        <nav className="flex flex-col gap-4 text-center">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#testimonials">Testimonials</a>
        </nav>
        <div className="flex justify-center mt-4">
          <button className="bg-white py-1 px-4 rounded-full text-xl text-black font-medium cursor-pointer">
            Sign up
          </button>
        </div>
      </div>

      {/* Hero content below navbar */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10 flex-col items-center text-center mt-50 space-y-6 hidden md:block"
      >
        <h1 className="text-6xl font-bold">
          Explore homes that <br /> fit your dreams
        </h1>
        <div className="space-x-4">
          <button className=" border border-white text-white px-6 py-2 rounded font-medium">
            <a href="#projects">Projects</a>
          </button>
          <button className="bg-blue-500 px-6 py-2 rounded font-medium">
            <a href="#contacts">Contact Us</a>
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Navbar;

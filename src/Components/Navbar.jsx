import React from "react";
import ReactLogo from "../assets/House.jpg";

const Navbar = () => {
  return (
    <div
      className="relative p-5 h-screen bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${ReactLogo})` }} id="home"
    >
      {/* Blur overlay */}
      <div className="absolute inset-0 backdrop-blur-sm bg-black/20"></div>

      {/* Navbar content */}
      <div className="relative z-10 flex justify-evenly items-center">
        <div>
          <h1 className="text-3xl font-bold">🏠 Estate</h1>
        </div>
        <div>
          <nav className="flex gap-4">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#testimonials">Testimonials</a>
          </nav>
        </div>
        <div>
          <button className="bg-white py-1 px-4 rounded-full text-xl text-black font-medium cursor-pointer">
            Sign up
          </button>
        </div>
      </div>

      {/* Hero content below navbar */}
      <div className="relative z-10 flex flex-col items-center text-center mt-50 space-y-6">
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
      </div>
    </div>
  );
};

export default Navbar;

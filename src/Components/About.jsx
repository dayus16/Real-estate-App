import React from "react";
import ReactLogo from "../assets/Holding.jpg";

const About = () => {
  return (
    <div
      initial={{ opacity: 0, x: 200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      id="about"
    >
      <div className="text-center mt-20">
        <h1 className="text-3xl">
          <span className="font-bold">About</span> our Brand
        </h1>
        <p>
          Passionate About Properties. Deditated to <br /> your vision
        </p>
      </div>
      <div className="mt-20 p-5 mx-auto md:flex flex-col md:flex-row justify-center gap-10">
        <div>
          <img
            className="w-lg hidden md:block md:h-[400px] rounded-lg"
            src={ReactLogo}
            alt=""
          />
        </div>
        <div className="md:w-lg md:grid md:grid-cols-2">
          <div>
            <h3 className="text-3xl font-medium">10+</h3>
            <p>Years of Excellence</p>
          </div>
          <div>
            <h3 className="text-3xl font-medium">12+</h3>
            <p>Project Completed</p>
          </div>
          <div>
            <h3 className="text-3xl font-medium">20+</h3>
            <p>Happy Clients</p>
          </div>
          <div>
            <h3 className="text-3xl font-medium">25+</h3>
            <p>Cities Served</p>
          </div>
          <div className="col-span-2">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div>
            <button className="bg-blue-500 py-1 px-4 text-white rounded cursor-pointer">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

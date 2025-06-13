import React from "react";
import ReactImage from "../assets/Human.jpg";

const Testimonials = () => {
  return (
    <div id="testimonials">
      <div className="text-center mt-20">
        <h1 className="text-3xl">
          <span className="font-bold">Customers</span> Testimonials
        </h1>
        <p>
          Real Stories from Those Who Found Home <br /> with Us
        </p>
      </div>
      <div className="flex justify-center flex-col md:flex-row gap-5 mt-20 p-5">
        <div className="bg-white shadow-2xl md:w-[25%] md:h-90 text-center p-5 mb-4 rounded-lg overflow-hidden">
          <div className="flex justify-center">
            <img src={ReactImage} alt="" className="w-[70px] rounded-full" />
          </div>
          <h3 className="mt-2 text-xl font-bold">Donald Jackson</h3>
          <p className="">Marketing Manager</p>
          <p className="mt-3">⭐⭐⭐⭐⭐</p>
          <p className="mt-2">
            From the very first meeting <br /> they understood the <br /> mission and
            helped me find the <br /> perfect property. Thier attention to <br />{" "}
            details and commitment to client <br /> satisfaction is unmatched.
          </p>
        </div>
        <div className="bg-white shadow-2xl md:w-[25%] md:h-90 text-center p-5 mb-4 rounded-lg overflow-hidden">
          <div className="flex justify-center">
            <img src={ReactImage} alt="" className="w-[70px] rounded-full" />
          </div>
          <h3 className="text-xl font-bold">Richard Nelson</h3>
          <p className="">Web Developer</p>
          <p className="mt-3">⭐⭐⭐⭐</p>
          <p className="mt-2">
            From the very first meeting <br /> they understood the <br /> mission and
            helped me find the <br /> perfect property. Thier attention to <br />{" "}
            details and commitment to client <br /> satisfaction is unmatched.
          </p>
        </div>
        <div className="bg-white shadow-2xl md:w-[25%] md:h-90 text-center p-5 mb-4 rounded-lg overflow-hidden">
          <div className="flex justify-center">
            <img src={ReactImage} alt="" className="w-[70px] rounded-full" />
          </div>
          <h3 className="mt-2 text-xl font-bold">Mark Johnson</h3>
          <p className="">Co-Founder</p>
          <p className="mt-3">⭐⭐⭐⭐⭐</p>
          <p className="mt-2">
            From the very first meeting <br /> they understood the <br /> mission and
            helped me find the <br /> perfect property. Thier attention to <br />{" "}
            details and commitment to client <br /> satisfaction is unmatched.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

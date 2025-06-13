import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="flex justify-around flex-col md:flex-row mt-20 p-5 bg-gray-900">
        <div className="text-white">
          <div>
            <h1 className="text-2xl font-bold">🏠 Estate</h1>
          </div>
          <div className="mt-5">
            <p>
              Lorem Ipsum is simply dummy text of the printing <br /> and
              typesetting industry. Lorem Ipsum has <br /> been the industry's.
            </p>
          </div>
        </div>
        <div className="text-white">
          <div>
            <h1 className="text-xl font-bold">Company</h1>
          </div>
          <div className="flex flex-col mt-3 gap-2">
            <a href="#home">Home</a>
            <a href="#about">About Us</a>
            <a href="#contacts">Contact Us</a>
            <a href="#">Privacy policy</a>
          </div>
        </div>
        <div className="text-white">
          <div>
            <h1 className="text-xl font-bold">Subscribe to our newsletter</h1>
          </div>
          <div className="flex flex-col mt-2">
            <p>
              the letest news, articles and resources, sent <br /> to your inbox
              weekly.
            </p>
          </div>
          <div className="mt-3 flex gap-2">
            <input
              type="email"
              placeholder="Enter your Email"
              className="py-1 px-4 border border-gray-500 outline-none rounded"
            />
            <button className="bg-blue-700 py-1 px-4 rounded cursor-pointer">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="text-center bg-gray-900 text-gray-400 border-t border-t-gray-600 p-4">
        <p>Copyright @2025 Greatstack. All Right Reserved</p>
      </div>
    </div>
  );
};

export default Footer;

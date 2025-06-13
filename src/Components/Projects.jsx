import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import ReactLogo from "../assets/House.jpg";
import ReactLogoOne from "../assets/House 2.jpg";
import ReactLogoTwo from "../assets/House 3.jpg";
import ReactLogoThree from "../assets/House 4.jpg";

const Projects = () => {
  return (
    <div id="projects">
      <div className="text-center mt-20">
        <h1 className="text-3xl">
          <span className="font-bold">Projects</span> Completed
        </h1>
        <p>
          Crafting Spaces, Building Legacies - Explore <br /> Our Portfolio
        </p>
      </div>

      <div className="flex justify-center p-5 mt-10">
        <Swiper
          spaceBetween={20}
          modules={[Navigation, Autoplay]}
          slidesPerView={4}
          navigation
          loop={true}
          autoplay={{ delay: 3000 }}
        >
          <div>
            <SwiperSlide>
              <img src={ReactLogo} alt="" />
            </SwiperSlide>
          </div>
          <div>
            <SwiperSlide>
              <img src={ReactLogoTwo} alt="" />
            </SwiperSlide>
          </div>
          <div>
            <SwiperSlide>
              <img src={ReactLogoOne} alt="" />
            </SwiperSlide>
          </div>
          <div>
            <SwiperSlide>
              <img src={ReactLogoThree} alt="" />
            </SwiperSlide>
          </div>
          <div>
            <SwiperSlide>
              <img src={ReactLogo} alt="" />
            </SwiperSlide>
          </div>
          <div>
            <SwiperSlide>
              <img src={ReactLogoTwo} alt="" />
            </SwiperSlide>
          </div>
          <div>
            <SwiperSlide>
              <img src={ReactLogoThree} alt="" />
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Projects;

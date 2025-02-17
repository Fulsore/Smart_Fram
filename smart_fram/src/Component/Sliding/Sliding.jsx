import React from "react";
import Slider from "react-slick";
import Farmer1 from "../../assets/FarmersSliding.jpg";
import Farmer2 from "../../assets/Farmer2.jpg";
import Farmer3 from "../../assets/Farmer3.jpg";
import { useNavigate } from "react-router-dom"; // Import useNavigate

function Sliding() {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Delay between slides (in ms, 2000 = 2 seconds)
    pauseOnHover: true,
  };

  const handleGetStarted = () => {
    navigate("/register"); // Navigate to the Register page
  };

  return (
    <div className="relative">
      <Slider {...settings}>
        <div>
          <img
            className="h-[600px] w-full sm:w-[600px] md:w-[800px] lg:w-[1200px] xl:w-[1600px]"
            src={Farmer1}
            alt="farmer"
          />
        </div>
        <div>
          <img
            className="h-[600px] w-full sm:w-[600px] md:w-[800px] lg:w-[1200px] xl:w-[1600px]"
            src={Farmer2}
            alt="farmer"
          />
        </div>
        <div>
          <img
            className="h-[600px] w-full sm:w-[600px] md:w-[800px] lg:w-[1200px] xl:w-[1600px]"
            src={Farmer3}
            alt="farmer"
          />
        </div>
      </Slider>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <button
          onClick={handleGetStarted}
          className="text-center justify-center align-middle bg-green-800 h-[100px] w-[200px] rounded-full"
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Sliding;

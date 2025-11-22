import { FaCut, FaHandsWash } from "react-icons/fa";
import pic from "../assets/bss_skiibii.jpg";
import { SiShortcut } from "react-icons/si";
import { PiHairDryerFill } from "react-icons/pi";
import { GiMorgueFeet } from "react-icons/gi";

const Hero = () => {
  return (
    <div className="relative pt-10 lg:pt-0 w-full font-poppins bg-[#FBFBFB] text-white">
      <div
        className="absolute bg-cover bg-center inset-0 lg:h-screen brightness-[0.40] flex w-full bg-transparent bg-opacity-50 bg-blend-overlay"
        style={{ backgroundImage: `url(${pic})` }}
      ></div>
      <div className="relative w-[65%] bg-transparent h-screen md:h-screen flex flex-col justify-center px-4 gap-4">
        <div>
          <h1 className="font-semibold md:text-4xl text-xl">
            Welcome to Baddest Silver Signature
          </h1>
          <p className="md:pt-3 pt-1 md:text-xl text-sm">
            Where style meets precision.
          </p>
          <p className="md:pt-3 pt-1 md:text-xl text-sm">
            Step into a clean, relaxing space and step out with confidence.
          </p>
        </div>
        <div className="mt-6">
          <button className="hover:bg-gray-900 md:w-48 md:h-11 w-32 h-10 text-xs md:text-base rounded-lg justify-center items-center flex cursor-pointer text-[#d4af37] bg-black">
            <a href="https://wa.me/2349091737314">Book Appointment</a>
          </button>
        </div>
      </div>
      {/* <div className="w-[35%] bg-transparent justify-center items-center flex">
        <img
          src={pic}
          alt=""
          loading="lazy"
          className="relative rounded-full md:h-[65%] h-[50%]"
        />
      </div> */}
      <div className="relative w-full lg:h-[30vh] h-[15vh] justify-center items-center pt-5 md:pt-0 flex bg-transparent lg:bg-[#f7f2f2b9]">
        <div className="w-[20%] h-[90%] justify-center items-center flex">
          <div className="md:w-28 w-16 md:h-28  h-16 bg-black rounded-full justify-center items-center flex">
            <FaCut size={40} color="white" />
          </div>
        </div>
        <div className="w-[20%] h-[90%] justify-center items-center flex">
          <div className="md:w-28 w-16 md:h-28 h-16 bg-black rounded-full justify-center items-center flex">
            <GiMorgueFeet size={50} color="white" />
          </div>
        </div>
        <div className="w-[20%] h-[90%] justify-center items-center flex">
          <div className="md:w-28 w-16 md:h-28 h-16 bg-black rounded-full justify-center items-center flex">
            <SiShortcut size={40} color="white" />
          </div>
        </div>
        <div className="w-[20%] h-[90%] justify-center items-center flex">
          <div className="md:w-28 w-16 md:h-28 h-16 bg-black rounded-full justify-center items-center flex">
            <PiHairDryerFill size={40} color="white" />
          </div>
        </div>
        <div className="w-[20%] h-[90%] justify-center items-center flex">
          <div className="md:w-28 w-16 md:h-28 h-16 bg-black rounded-full justify-center items-center flex">
            <FaHandsWash size={40} color="white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

import { FaCut, FaHandsWash } from "react-icons/fa";
import pic from "../assets/bss_skiibii.jpg";
import { SiShortcut } from "react-icons/si";
import { PiHairDryerFill } from "react-icons/pi";
import { GiMorgueFeet } from "react-icons/gi";

const Hero = () => {
  return (
    <div className="pt-10 pb-10 w-full flex-wrap overflow-hidden font-poppins">
      <div
        className="bg-cover bg-center lg:h-screen h-[55h] flex w-full bg-transparent bg-opacity-50 bg-blend-overlay"
        // style={{ backgroundImage: `url(${pic})` }}
      >
        <div className="w-[65%] bg-[#FBFBFB] h-[50vh] md:h-auto">
          <div className="md:w-[100%] h-[80%] justify-center items-center flex">
            <div className="md:p-0 p-2 pt-10 md:pt-0">
              <h1 className=" pt-1 font-semibold md:text-4xl text-xl">
                Welcome to Baddest Silver Signature
              </h1>
              <p className="md:pt-3 pt-1 md:text-xl text-sm">
                Where style meets precision.
              </p>
              <p className="md:pt-3 pt-1 md:text-xl text-sm">
                Step into a clean, relaxing space and step out with confidence.
              </p>
            </div>
          </div>
          <div className="flex h-[20%] justify-center items-center]">
            <button className="hover:bg-gray-900 md:w-48 md:h-11 w-32 h-10 text-xs md:text-base rounded-lg justify-center items-center flex cursor-pointer text-[#d4af37] bg-black">
              <a href="https://wa.me/2349091737314">Book Appointment</a>
            </button>
          </div>
        </div>
        <div className="w-[35%] bg-[#FBFBFB] justify-center items-center flex">
          <img
            src={pic}
            alt=""
            loading="lazy"
            className="rounded-full md:h-[65%] h-[50%]"
          />
        </div>
      </div>
      <div className="w-full md:h-[30vh] h-[15vh] justify-center items-center pt-5 md:pt-0 flex bg-[#FBFBFB]">
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

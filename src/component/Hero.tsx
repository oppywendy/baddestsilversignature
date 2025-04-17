import { FaCut, FaHandsWash } from "react-icons/fa";
import pic from "../assets/office6.png";
import { SiShortcut } from "react-icons/si";
import { PiHairDryerFill } from "react-icons/pi";
import { GiMorgueFeet } from "react-icons/gi";

const Hero = () => {
  return (
    <div className="pt-8 w-full flex-wrap overflow-hidden font-poppins">
      <div
        className="bg-cover bg-center md:h-screen h-[55h] w-full bg-transparent bg-opacity-50 bg-blend-overlay"
        style={{ backgroundImage: `url(${pic})` }}
      >
        <div className="w-[100%] md:h-[100%] h-[55vh] bg-transparent md:pl-8 pl-4 items-center flex">
          <div className="w-[90%] max-h-full text-white">
            <div className="md:w-[60%] h-[90%] justify-center items-center flex">
              <div className="text-black">
                <h1 className=" pt-1 font-semibold md:text-4xl text-2xl">
                  Welcome to Baddest Silver Signature
                </h1>
                <p className="md:pt-3 pt-1 md:text-xl text-base">
                  We believe in providing our customers with the best haircuts
                  and services. Our team of skilled barbers and stylists work
                  tirelessly to make each client's experience a memorable one.
                </p>
              </div>
            </div>
            <div className="flex md:pt-10 pt-2 h-[10%]">
              <button className="hover:bg-[#b8922f] md:w-48 md:h-14 w-36 h-10 text-sm md:text-lg rounded-lg justify-center items-center flex cursor-pointer bg-[#d4af37] text-black">
                <a href="https://wa.me/2349091737314">BOOK APPOINTMENT</a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:h-[30vh] h-[15vh] justify-center items-center flex bg-[#FBFBFB]">
        <div className="w-[20%] h-[90%] justify-center items-center flex">
          <div className="md:w-28 w-16 md:h-28  h-16 bg-black rounded-full justify-center items-center flex">
            <FaCut size={50} color="orange" />
          </div>
        </div>
        <div className="w-[20%] h-[90%] justify-center items-center flex">
          <div className="md:w-28 w-16 md:h-28 h-16 bg-black rounded-full justify-center items-center flex">
            <GiMorgueFeet size={60} color="orange" />
          </div>
        </div>
        <div className="w-[20%] h-[90%] justify-center items-center flex">
          <div className="md:w-28 w-16 md:h-28 h-16 bg-black rounded-full justify-center items-center flex">
            <SiShortcut size={50} color="orange" />
          </div>
        </div>
        <div className="w-[20%] h-[90%] justify-center items-center flex">
          <div className="md:w-28 w-16 md:h-28 h-16 bg-black rounded-full justify-center items-center flex">
            <PiHairDryerFill size={50} color="orange" />
          </div>
        </div>
        <div className="w-[20%] h-[90%] justify-center items-center flex">
          <div className="md:w-28 w-16 md:h-28 h-16 bg-black rounded-full justify-center items-center flex">
            <FaHandsWash size={50} color="orange" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

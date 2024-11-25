import { FaCut, FaHandsWash } from "react-icons/fa";
import pic from "../assets/office1.jpg";
import { SiShortcut } from "react-icons/si";
import { PiHairDryerFill } from "react-icons/pi";
import { GiMorgueFeet } from "react-icons/gi";

const Hero = () => {
  return (
    <div className="pt-8 w-full md:h-[125vh] h-[80vh] flex-wrap overflow-hidden">
      <div
        className="bg-cover bg-center md:h-screen h-[55h] w-full bg-black bg-opacity-50 bg-blend-overlay"
        style={{ backgroundImage: `url(${pic})` }}
      >
        <div className="w-[100%] md:h-[100%] h-[55vh] bg-transparent md:ml-8 ml-4 items-center flex">
          <div className="w-[90%] max-h-full text-white">
            <div className="w-[60%] max-h-full">
              <h1 className="md:pt-80 mt-1 font-medium md:text-4xl text-2xl">
                Welcome to Baddest Silver Signature
              </h1>
              <p className="md:pt-3 pt-1 md:text-lg text-xs">
                We believe in providing our customers with the best haircuts and
                services. Our team of skilled barbers and stylists work
                tirelessly to make each client's experience a memorable one.
              </p>
              <div className="gap-10 flex md:mt-3 mt-2">
                <button className="hover:bg-yellow-700 md:w-56 md:h-14 w-36 h-8 rounded-lg border border-black justify-center items-center flex cursor-pointer bg-yellow-500 text-black">
                  <a href="https://wa.me/2349091737314">Book Appointment</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[20vh] justify-center items-center flex">
        <div className="w-[20%] h-[90%] justify-center items-center flex">
          <div className="md:w-20 w-16 md:h-20 h-16 bg-black rounded-full justify-center items-center flex">
            <FaCut size={30} color="orange" />
          </div>
        </div>
        <div className="w-[20%] h-[90%] justify-center items-center flex">
          <div className="md:w-20 w-16 md:h-20 h-16 bg-black rounded-full justify-center items-center flex">
            <GiMorgueFeet size={40} color="orange" />
          </div>
        </div>
        <div className="w-[20%] h-[90%] justify-center items-center flex">
          <div className="md:w-20 w-16 md:h-20 h-16 bg-black rounded-full justify-center items-center flex">
            <SiShortcut size={30} color="orange" />
          </div>
        </div>
        <div className="w-[20%] h-[90%] justify-center items-center flex">
          <div className="md:w-20 w-16 md:h-20 h-16 bg-black rounded-full justify-center items-center flex">
            <PiHairDryerFill size={30} color="orange" />
          </div>
        </div>
        <div className="w-[20%] h-[90%] justify-center items-center flex">
          <div className="md:w-20 w-16 md:h-20 h-16 bg-black rounded-full justify-center items-center flex">
            <FaHandsWash size={30} color="orange" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

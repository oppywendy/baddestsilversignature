import pic from "../assets/training.jpg";
import pic2 from "../assets/training 2.jpg";
import pic3 from "../assets/training4.jpg";
import { FaArrowRight } from "react-icons/fa6";

const Training = () => {
  return (
    <div className="w-full max-h-full bg-[#F8FAFD] justify-center items-center flex">
      <div className="w-[96%] h-[98%]">
        <h1 className="font-medium lg:text-5xl md:text-4xl text-3xl font-serif text-center lg:pt-5 md:pt-4 pt-7">
          GROOMING EXPERIENCE
        </h1>
        <div className="lg:justify-center lg:items-center lg:pt-7 flex h-[98%]">
          <div className=" w-[100%] lg:h-[85%] h-[98%] flex justify-center items-center flex-col-reverse lg:flex-row">
            <div className="lg:w-[30%] mb-5 w-full lg:h-[98%] md:h-[20vh] lg:pt-5 md:pt-5 pt-3 flex-wrap items-center grid">
              <div className="h-[100%]">
                <h1 className="h-[50%] lg:text-5xl md:text-5xl text-lg text-center font-bold justify-center grid">
                  Enrol for your Training session
                </h1>
                <div className="h-[50%] justify-center items-start grid lg:pt-10 md:pt-5 pt-1">
                  <button className="lg:w-48 md:w-44 w-24 lg:h-12 md:h-16 h-6 rounded-r-full rounded-l-full border border-black hover:bg-yellow-700 justify-center items-center flex cursor-pointer bg-[#EAB308] text-black md:text-2xl">
                    <a href="https://wa.me/2349091737314">Sign Up</a>
                    <div className="pl-2 justify-center items-center flex">
                      <FaArrowRight />
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="lg:w-[70%] w-full lg:h-[98%] h-[85%] pt-5 flex justify-center">
              <div className="flex flex-wrap w-[98%] h-[98%] justify-center md:gap-4 gap-2">
                <img
                  className="md:w-[250px] w-[240px] md:h-[375px] h-[350px] md:mt-14 hover:scale-105 transform transition-all duration-300 cursor-pointer"
                  src={pic3}
                  alt=""
                />
                <img
                  className="md:w-[250px] w-[240px] md:h-[375px] h-[350px] md:mt-32 hover:scale-105 transform transition-all duration-300 cursor-pointer"
                  src={pic2}
                  alt=""
                />
                <img
                  className="md:w-[250px] w-[240px] md:h-[375px] h-[350px] md:mt-5 hover:scale-105 transform transition-all duration-300 cursor-pointer"
                  src={pic}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Training;

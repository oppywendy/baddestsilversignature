import pic1 from "../assets/lawi.jpg";
import pic2 from "../assets/bss_color.jpg";
import pic3 from "../assets/bss_sketch.jpg";
import pic4 from "../assets/manicure.jpg";
import pic5 from "../assets/pedicure.jpg";
import pic7 from "../assets/home Service.jpg";
import { FaRegStar } from "react-icons/fa6";

const Service = () => {
  return (
    <div className="w-full font-poppins pb-20 bg-[#ddd]">
      <div>
        <h1 className="font-medium font-serif lg:text-[40px] md:text-5xl text-3xl justify-center flex lg:pt-8 md:pt-10 pt-5 text-red-950">
          OUR SERVICES
        </h1>
      </div>
      <div className="lg:w-[98%] w-[95%] lg:h-[85%] h-[130vh] justify-center lg:items-center grid grid-rows-2 pt-5 md:pt-10 pl-1">
        <div className="lg:h-[80%] md:h-[120vh] h-[100vh] lg:w-[98%] w-[100%] lg:grid-cols-3 grid grid-cols-2 justify-center lg:items-start items-center pl-1 lg:gap-10 gap-5">
          <div className="lg:w-[32vh] md:w-[28vh] w-[24vh] lg:h-[60vh] md:h-[50vh] h-[40vh] bg-black rounded-xl justify-center items-center flex border hover:shadow-slate-700 shadow cursor-pointer lg:hover:scale-105 hover:scale-y-105 transform transition-all duration-300">
            <div className="w-[100%] h-[100%]">
              <img
                className="w-[100%] lg:h-[35vh] md:h-[30vh] h-[25vh] rounded-t-xl"
                src={pic1}
                alt=""
              />
              <div className="flex justify-start items-center pl-1 lg:pt-2 md:pt-2 gap-1">
                <FaRegStar color="gold" size={15} />
                <p className="text-yellow-500 text-xs md:text-lg lg:text-lg">
                  5.0
                </p>
              </div>
              <p className="lg:text-[25px] md:text-4xl text-lg font-bold pl-4 md:pt-8 lg:pt-3 pt-2 text-white">
                Haircut
              </p>
              <div className="pt-3 md:pt-10 lg:top-4 justify-center flex">
                <button className="lg:w-[100%] md:w-40 w-[80%] lg:h-7 md:h-7 lg:rounded-lg rounded-md border border-black hover:bg-yellow-700 justify-center items-center flex cursor-pointer bg-yellow-500 text-black md:text-lg text-sm">
                  <a href="https://wa.me/2349091737314">BOOK NOW</a>
                </button>
              </div>
            </div>
          </div>

          <div className="lg:w-[32vh] md:w-[28vh] w-[24vh] lg:h-[60vh] md:h-[50vh] h-[40vh] bg-black rounded-xl justify-center items-center flex border hover:shadow-slate-700 shadow cursor-pointer lg:hover:scale-105 hover:scale-y-105 transform transition-all duration-300">
            <div className="w-[100%] h-[100%]">
              <img
                className="w-[100%] lg:h-[35vh] md:h-[30vh] h-[25vh] rounded-t-xl"
                src={pic2}
                alt=""
              />
              <div className="flex justify-start items-center pl-1 lg:pt-2 md:pt-2 gap-1">
                <FaRegStar color="gold" size={15} />
                <p className="text-yellow-500 text-xs md:text-lg lg:text-lg">
                  5.0
                </p>
              </div>
              <p className="lg:text-[25px] md:text-4xl text-lg font-bold pl-4 md:pt-8 lg:pt-3 pt-2 text-white">
                Hair Color
              </p>
              <div className="pt-3 md:pt-10 lg:top-4 justify-center flex">
                <button className="lg:w-[100%] md:w-40 w-[80%] lg:h-7 md:h-7 lg:rounded-lg rounded-md border border-black hover:bg-yellow-700 justify-center items-center flex cursor-pointer bg-yellow-500 text-black md:text-lg text-sm">
                  <a href="https://wa.me/2349091737314">BOOK NOW</a>
                </button>
              </div>
            </div>
          </div>

          <div className="lg:w-[32vh] md:w-[28vh] w-[24vh] lg:h-[60vh] md:h-[50vh] h-[40vh] bg-black rounded-xl justify-center items-center flex border hover:shadow-slate-700 shadow cursor-pointer lg:hover:scale-105 hover:scale-y-105 transform transition-all duration-300">
            <div className="w-[100%] h-[100%]">
              <img
                className="w-[100%] lg:h-[35vh] md:h-[30vh] h-[25vh] rounded-t-xl"
                src={pic3}
                alt=""
              />
              <div className="flex justify-start items-center pl-1 lg:pt-2 md:pt-2 gap-1">
                <FaRegStar color="gold" size={15} />
                <p className="text-yellow-500 text-xs md:text-lg lg:text-lg">
                  5.0
                </p>
              </div>
              <p className="lg:text-[25px] md:text-4xl text-lg font-bold pl-4 md:pt-8 lg:pt-3 pt-2 text-white">
                Hair Sketch
              </p>
              <div className="pt-3 md:pt-10 lg:top-4 justify-center flex">
                <button className="lg:w-[100%] md:w-40 w-[80%] lg:h-7 md:h-7 lg:rounded-lg rounded-md border border-black hover:bg-yellow-700 justify-center items-center flex cursor-pointer bg-yellow-500 text-black md:text-lg text-sm">
                  <a href="https://wa.me/2349091737314">BOOK NOW</a>
                </button>
              </div>
            </div>
          </div>

          <div className="lg:w-[32vh] md:w-[28vh] w-[24vh] lg:h-[60vh] md:h-[50vh] h-[40vh] bg-black rounded-xl justify-center items-center flex border hover:shadow-slate-700 shadow cursor-pointer lg:hover:scale-105 hover:scale-y-105 transform transition-all duration-300">
            <div className="w-[100%] h-[100%]">
              <img
                className="w-[100%] lg:h-[35vh] md:h-[30vh] h-[25vh] rounded-t-xl"
                src={pic5}
                alt=""
              />
              <div className="flex justify-start items-center pl-1 lg:pt-2 md:pt-2 gap-1">
                <FaRegStar color="gold" size={15} />
                <p className="text-yellow-500 text-xs md:text-lg lg:text-lg">
                  5.0
                </p>
              </div>
              <p className="lg:text-[25px] md:text-4xl text-lg font-bold pl-4 md:pt-8 lg:pt-3 pt-2 text-white">
                Pedicure
              </p>
              <div className="pt-3 md:pt-10 lg:top-4 justify-center flex">
                <button className="lg:w-[100%] md:w-40 w-[80%] lg:h-7 md:h-7 lg:rounded-lg rounded-md border border-black hover:bg-yellow-700 justify-center items-center flex cursor-pointer bg-yellow-500 text-black md:text-lg text-sm">
                  <a href="https://wa.me/2349091737314">BOOK NOW</a>
                </button>
              </div>
            </div>
          </div>

          <div className="lg:w-[32vh] md:w-[28vh] w-[24vh] lg:h-[60vh] md:h-[50vh] h-[40vh] bg-black rounded-xl justify-center items-center flex border hover:shadow-slate-700 shadow cursor-pointer lg:hover:scale-105 hover:scale-y-105 transform transition-all duration-300">
            <div className="w-[100%] h-[100%]">
              <img
                className="w-[100%] lg:h-[35vh] md:h-[30vh] h-[25vh] rounded-t-xl"
                src={pic4}
                alt=""
              />
              <div className="flex justify-start items-center pl-1 lg:pt-2 md:pt-2 gap-1">
                <FaRegStar color="gold" size={15} />
                <p className="text-yellow-500 text-xs md:text-lg lg:text-lg">
                  5.0
                </p>
              </div>
              <p className="lg:text-[25px] md:text-4xl text-lg font-bold pl-4 md:pt-8 lg:pt-3 pt-2 text-white">
                Manicure
              </p>
              <div className="pt-3 md:pt-10 lg:top-4 justify-center flex">
                <button className="lg:w-[100%] md:w-40 w-[80%] lg:h-7 md:h-7 lg:rounded-lg rounded-md border border-black hover:bg-yellow-700 justify-center items-center flex cursor-pointer bg-yellow-500 text-black md:text-lg text-sm">
                  <a href="https://wa.me/2349091737314">BOOK NOW</a>
                </button>
              </div>
            </div>
          </div>

          <div className="lg:w-[32vh] md:w-[28vh] w-[24vh] lg:h-[60vh] md:h-[50vh] h-[40vh] bg-black rounded-xl justify-center items-center flex border hover:shadow-slate-700 shadow cursor-pointer lg:hover:scale-105 hover:scale-y-105 transform transition-all duration-300">
            <div className="w-[100%] h-[100%]">
              <img
                className="w-[100%] lg:h-[35vh] md:h-[30vh] h-[25vh] rounded-t-xl"
                src={pic7}
                alt=""
              />
              <div className="flex justify-start items-center pl-1 lg:pt-2 md:pt-2 gap-1">
                <FaRegStar color="gold" size={15} />
                <p className="text-yellow-500 text-xs md:text-lg lg:text-lg">
                  5.0
                </p>
              </div>
              <p className="lg:text-[25px] md:text-4xl text-lg font-bold pl-4 md:pt-8 lg:pt-3 pt-2 text-white">
                Home Service
              </p>
              <div className="pt-3 md:pt-10 lg:top-4 justify-center flex">
                <button className="lg:w-[100%] md:w-40 w-[80%] lg:h-7 md:h-7 lg:rounded-lg rounded-md border border-black hover:bg-yellow-700 justify-center items-center flex cursor-pointer bg-yellow-500 text-black md:text-lg text-sm">
                  <a href="https://wa.me/2349091737314">BOOK NOW</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;

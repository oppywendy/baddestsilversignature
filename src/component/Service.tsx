import pic1 from "../assets/lawi.jpg";
import pic2 from "../assets/bss_color.jpg";
import pic3 from "../assets/bss_sketch.jpg";
import pic4 from "../assets/manicure.jpg";
import pic5 from "../assets/pedicure.jpg";
import pic7 from "../assets/home Service.jpg";

const Service = () => {
  return (
    <div className="w-full font-poppins md:pb-20 pb-16 md:pt-28 pt-10 bg-[#ddd]">
      <div>
        <h1 className="font-bold md:text-5xl text-3xl justify-center flex">
          OUR SERVICES
        </h1>
      </div>
      <div className="justify-center items-center flex md:pt-16 pt-10">
        <div className="w-[90%] justify-center items-center flex md:pt-10">
          <div className="w-[100%] lg:grid-cols-3 grid-cols-2 grid md:gap-10 gap-5">
            <div className="border border-black bg-black md:rounded-3xl rounded-xl text-white hover:shadow-slate-700 shadow cursor-pointer md:hover:scale-105 hover:scale-y-105 transform transition-all duration-300">
              <div className="relative justify-center items-center flex">
                <img
                  className="md:h-[25rem] h-[10rem] w-full md:rounded-t-3xl rounded-t-xl"
                  src={pic1}
                  alt=""
                />
              </div>
              <div className="w-full justify-around items-center flex-col flex md:h-[10rem] h-[7rem]">
                <p className="md:text-3xl text-lg font-semibold">HAIRCUT</p>
                <button className="md:w-40 w-28 h-8 md:rounded-lg rounded-md hover:bg-[#b8922f] justify-center items-center flex cursor-pointer bg-[#d4af37] text-black md:text-lg text-sm">
                  <a href="https://wa.me/2349091737314">BOOK NOW</a>
                </button>
              </div>
            </div>

            <div className="border border-black bg-black md:rounded-3xl rounded-xl text-white hover:shadow-slate-700 shadow cursor-pointer md:hover:scale-105 hover:scale-y-105 transform transition-all duration-300">
              <div className="relative justify-center items-center flex">
                <img
                  className="md:h-[25rem] h-[10rem] w-full md:rounded-t-3xl rounded-t-xl"
                  src={pic2}
                  alt=""
                />
              </div>
              <div className="w-full justify-around items-center flex flex-col md:h-[10rem] h-[7rem]">
                <p className="md:text-3xl text-lg font-semibold">HAIR COLOR</p>
                <button className="md:w-40 w-28 h-8 md:rounded-lg rounded-md hover:bg-[#b8922f] justify-center items-center flex cursor-pointer bg-[#d4af37] text-black md:text-lg text-sm">
                  <a href="https://wa.me/2349091737314">BOOK NOW</a>
                </button>
              </div>
            </div>

            <div className="border border-black bg-black md:rounded-3xl rounded-xl text-white hover:shadow-slate-700 shadow cursor-pointer md:hover:scale-105 hover:scale-y-105 transform transition-all duration-300">
              <div className="relative justify-center items-center flex">
                <img
                  className="md:h-[25rem] h-[10rem] w-full md:rounded-t-3xl rounded-t-xl"
                  src={pic3}
                  alt=""
                />
              </div>
              <div className="w-full justify-around items-center flex flex-col md:h-[10rem] h-[7rem]">
                <p className="md:text-3xl text-lg font-semibold">HAIR SKETCH</p>
                <button className="md:w-40 w-28 h-8 md:rounded-lg rounded-md hover:bg-[#b8922f] justify-center items-center flex cursor-pointer bg-[#d4af37] text-black md:text-lg text-sm">
                  <a href="https://wa.me/2349091737314">BOOK NOW</a>
                </button>
              </div>
            </div>

            <div className="border border-black bg-black md:rounded-3xl rounded-xl text-white hover:shadow-slate-700 shadow cursor-pointer md:hover:scale-105 hover:scale-y-105 transform transition-all duration-300">
              <div className="relative justify-center items-center flex">
                <img
                  className="md:h-[25rem] h-[10rem] w-full md:rounded-t-3xl rounded-t-xl"
                  src={pic5}
                  alt=""
                />
              </div>
              <div className="w-full justify-around items-center flex flex-col md:h-[10rem] h-[7rem]">
                <p className="md:text-3xl text-lg font-semibold">PEDICURE</p>
                <button className="md:w-40 w-28 h-8 md:rounded-lg rounded-md hover:bg-[#b8922f] justify-center items-center flex cursor-pointer bg-[#d4af37] text-black md:text-lg text-sm">
                  <a href="https://wa.me/2349091737314">BOOK NOW</a>
                </button>
              </div>
            </div>

            <div className="border border-black bg-black md:rounded-3xl rounded-xl text-white hover:shadow-slate-700 shadow cursor-pointer md:hover:scale-105 hover:scale-y-105 transform transition-all duration-300">
              <div className="relative justify-center items-center flex">
                <img
                  className="md:h-[25rem] h-[10rem] w-full md:rounded-t-3xl rounded-t-xl"
                  src={pic4}
                  alt=""
                />
              </div>
              <div className="w-full justify-around items-center flex flex-col md:h-[10rem] h-[7rem]">
                <p className="md:text-3xl text-lg font-semibold">MANICURE</p>
                <button className="md:w-40 w-28 h-8 md:rounded-lg rounded-md hover:bg-[#b8922f] justify-center items-center flex cursor-pointer bg-[#d4af37] text-black md:text-lg text-sm">
                  <a href="https://wa.me/2349091737314">BOOK NOW</a>
                </button>
              </div>
            </div>

            <div className="border border-black bg-black md:rounded-3xl rounded-xl text-white hover:shadow-slate-700 shadow cursor-pointer md:hover:scale-105 hover:scale-y-105 transform transition-all duration-300">
              <div className="relative justify-center items-center flex">
                <img
                  className="md:h-[25rem] h-[10rem] w-full md:rounded-t-3xl rounded-t-xl"
                  src={pic7}
                  alt=""
                />
              </div>
              <div className="w-full justify-around items-center flex flex-col md:h-[10rem] h-[7rem]">
                <p className="md:text-3xl text-lg font-semibold">
                  HOME SERVICE
                </p>
                <button className="md:w-40 w-28 h-8 md:rounded-lg rounded-md hover:bg-[#b8922f] justify-center items-center flex cursor-pointer bg-[#d4af37] text-black md:text-lg text-sm">
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

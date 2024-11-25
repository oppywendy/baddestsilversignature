import burna from "../assets/bss_burnaboy.jpg";
import davido from "../assets/davido.jpg";
import skiibii from "../assets/bss_skiibii.jpg";
import dbanj from "../assets/dbanj.jpg";
import bnxn from "../assets/bss_bnxn.jpg";
import djobi from "../assets/dj obi.jpg";
import { Link } from "react-router-dom";

const Gallery = () => {
  return (
    <div className="w-full min-h-full bg-[#FBFBFB]">
      <div>
        <div>
          <h1 className="text-center md:text-5xl text-3xl font-medium font-serif md:pt-20 pt-10">
            OUR GALLERY
          </h1>
        </div>
        <div className=" w-full h-[100%] md:pt-20 mt-5 pb-10 flex flex-wrap lg:gap-8 md:gap-3 gap-1 justify-center items-center">
          <div className="pb-5">
            <img
              className="lg:w-[400px] md:w-[380px] w-[300px] lg:h-[500px] md:h-[500px] h-[400px] rounded-xl border border-yellow-500 shadow-lg cursor-pointer hover:scale-105 transform transition-all duration-300"
              src={burna}
              alt=""
            />
          </div>
          <div className="pb-3">
            <img
              className="lg:w-[400px] md:w-[380px] w-[300px] lg:h-[500px] md:h-[500px] h-[400px] rounded-xl border border-yellow-500 shadow-lg cursor-pointer hover:scale-105 transform transition-all duration-300"
              src={davido}
              alt=""
            />
          </div>
          <div className="grid grid-cols-2 gap-3 pt-2 md:pt-0">
            <img
              className="lg:w-[200px] md:w-[300px] w-[200px] lg:h-[250px] md:h-[400px] h-[250px] rounded-xl border border-yellow-500 shadow-lg cursor-pointer md:hover:scale-105 hover:scale-y-105 transform transition-all duration-300"
              src={skiibii}
              alt=""
            />
            <img
              className="lg:w-[200px] md:w-[300px] w-[200px] lg:h-[250px] md:h-[400px] h-[250px] rounded-xl border border-yellow-500 shadow-lg cursor-pointer md:hover:scale-105 hover:scale-y-105 transform transition-all duration-300"
              src={bnxn}
              alt=""
            />
            <img
              className="lg:w-[200px] md:w-[300px] w-[200px] lg:h-[250px] md:h-[400px] h-[250px] rounded-xl border border-yellow-500 shadow-lg cursor-pointer md:hover:scale-105 hover:scale-y-105 transform transition-all duration-300"
              src={dbanj}
              alt=""
            />
            <img
              className="lg:w-[200px] md:w-[300px] w-[200px] lg:h-[250px] md:h-[400px] h-[250px] rounded-xl border border-yellow-500 shadow-lg cursor-pointer md:hover:scale-105 hover:scale-y-105 transform transition-all duration-300"
              src={djobi}
              alt=""
            />
          </div>
        </div>
        <div className="items-center justify-center flex pb-10">
          <button className="md:w-48 w-24 md:h-12 h-8 rounded-r-full rounded-l-full border border-black hover:bg-blue-950 justify-center items-center flex cursor-pointer bg-black text-yellow-500 text-sm md:text-lg">
            <Link to="/gallery">View more</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;

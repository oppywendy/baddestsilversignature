import burna from "../assets/bss_burnaboy.jpg";
import davido from "../assets/davido.jpg";
import skiibii from "../assets/bss_skiibii.jpg";
import dbanj from "../assets/dbanj.jpg";
import bnxn from "../assets/bss_bnxn.jpg";
import djobi from "../assets/dj obi.jpg";

const Gallery = () => {
  return (
    <div className="w-full md:h-[140vh] h-[100%] bg-[#FBFBFB]">
      <div>
        <div>
          <h1 className="text-center text-5xl font-serif md:pt-20 pt-10 mt-20">
            OUR GALLERY
          </h1>
        </div>
        <div className=" w-full h-[100%] md:pt-20 mt-5 pb-10 flex flex-wrap md:gap-8 gap-1 justify-center items-center">
          <div>
            <img
              className="md:w-[400px] w-[300px] md:h-[500px] h-[400px] rounded-xl border border-yellow-500 shadow-lg cursor-pointer hover:scale-105 transform transition-all duration-300"
              src={burna}
              alt=""
            />
          </div>
          <div>
            <img
              className="md:w-[400px] w-[300px] md:h-[500px] h-[400px] rounded-xl border border-yellow-500 shadow-lg cursor-pointer hover:scale-105 transform transition-all duration-300"
              src={davido}
              alt=""
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <img
              className="w-[200px] h-[250px] rounded-xl border border-yellow-500 shadow-lg cursor-pointer hover:scale-105 transform transition-all duration-300"
              src={skiibii}
              alt=""
            />
            <img
              className="w-[200px] h-[250px] rounded-xl border border-yellow-500 shadow-lg cursor-pointer hover:scale-105 transform transition-all duration-300"
              src={bnxn}
              alt=""
            />
            <img
              className="w-[200px] h-[250px] rounded-xl border border-yellow-500 shadow-lg cursor-pointer hover:scale-105 transform transition-all duration-300"
              src={dbanj}
              alt=""
            />
            <img
              className="w-[200px] h-[250px] rounded-xl border border-yellow-500 shadow-lg cursor-pointer hover:scale-105 transform transition-all duration-300"
              src={djobi}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;

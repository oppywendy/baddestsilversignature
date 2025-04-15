import burna from "../assets/bss_burnaboy.jpg";
import davido from "../assets/davido.jpg";
import skiibii from "../assets/bss_skiibii.jpg";
import dbanj from "../assets/dbanj.jpg";
import bnxn from "../assets/bss_bnxn.jpg";
import djobi from "../assets/dj obi.jpg";
import dotun from "../assets/dotun.jpg";
import e4ma from "../assets/e4ma.jpg";
import customer from "../assets/bss customer 2.jpg";
import pic from "../assets/10.jpg";
import { Link } from "react-router-dom";

const Gallery = () => {
  return (
    <div className="w-full min-h-full bg-[#ddd] font-poppins md:pt-28 pt-10 md:pb-20 pb-16">
      <div>
        <div>
          <h1 className="text-center md:text-5xl text-3xl font-bold">
            OUR GALLERY
          </h1>
        </div>
        <div className=" w-full md:pt-16 pt-10 justify-center items-center flex">
          <div className="w-[96%] justify-center items-center grid md:grid-cols-5 gap-5">
            <img
              className="w-[16rem] h-[20rem] rounded-xl border border-[#d4af37] shadow-lg cursor-pointer md:hover:scale-105 hover:scale-y-105 transform md:translate-y-10  transition-all duration-300"
              src={burna}
              alt=""
            />
            <img
              className="w-[16rem] h-[20rem] rounded-xl border border-yellow-500 shadow-lg cursor-pointer md:hover:scale-105 hover:scale-y-105 transform transition-all duration-300"
              src={davido}
              alt=""
            />
            <img
              className="w-[16rem] h-[20rem] rounded-xl border border-yellow-500 shadow-lg cursor-pointer md:hover:scale-105 hover:scale-y-105 transform md:translate-y-10 transition-all duration-300"
              src={skiibii}
              alt=""
            />
            <img
              className="w-[16rem] h-[20rem] rounded-xl border border-yellow-500 shadow-lg cursor-pointer md:hover:scale-105 hover:scale-y-105 transform transition-all duration-300"
              src={bnxn}
              alt=""
            />
            <img
              className="w-[16rem] h-[20rem] rounded-xl border border-yellow-500 shadow-lg cursor-pointer md:hover:scale-105 hover:scale-y-105 transform md:translate-y-10 transition-all duration-300"
              src={dbanj}
              alt=""
            />
            <img
              className="w-[16rem] h-[20rem] rounded-xl border border-yellow-500 shadow-lg cursor-pointer md:hover:scale-105 hover:scale-y-105 transform md:translate-y-10 transition-all duration-300"
              src={pic}
              alt=""
            />
            <img
              className="w-[16rem] h-[20rem] rounded-xl border border-yellow-500 shadow-lg cursor-pointer md:hover:scale-105 hover:scale-y-105 transform transition-all duration-300"
              src={dotun}
              alt=""
            />
            <img
              className="w-[16rem] h-[20rem] rounded-xl border border-yellow-500 shadow-lg cursor-pointer md:hover:scale-105 hover:scale-y-105 transform md:translate-y-10 transition-all duration-300"
              src={e4ma}
              alt=""
            />
            <img
              className="w-[16rem] h-[20rem] rounded-xl border border-yellow-500 shadow-lg cursor-pointer md:hover:scale-105 hover:scale-y-105 transform transition-all duration-300"
              src={djobi}
              alt=""
            />
            <img
              className="w-[16rem] h-[20rem] rounded-xl border border-yellow-500 shadow-lg cursor-pointer md:hover:scale-105 hover:scale-y-105 transform md:translate-y-10 transition-all duration-300"
              src={customer}
              alt=""
            />
          </div>
        </div>
        <div className="items-center justify-center flex md:pt-36 pt-10">
          <button className="md:w-48 w-24 md:h-12 h-8 rounded-lg hover:bg-[#b8922f] justify-center items-center flex cursor-pointer bg-[#d4af37] text-sm md:text-lg">
            <Link to="/gallery">View more</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;

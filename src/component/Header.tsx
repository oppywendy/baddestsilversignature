import logo from "../assets/bs_logo_color.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="lg:h-[15vh] md:h-[10vh] h-[8vh] w-full flex justify-center items-center text-yellow-500 bg-black fixed z-50">
      <div className="w-[95%] h-[9vh] flex items-center justify-between">
        <div className="flex gap-2 items-center">
          <div className="md:w-28 w-20">
            <img src={logo} alt="logo" />
          </div>
          <div>
            <h1 className="font-medium lg:text-[30px] md:text-[20px] text-[9px]">
              BADDEST SILVER SIGNATURE
            </h1>
          </div>
        </div>
        <div className="justify-center items-center flex gap-5">
          <div className="flex md:gap-5 gap-1 md:text-[20px] text-xs">
            <a className="hover:text-yellow-300" href="/">
              Home
            </a>
            <Link to="/pricelist" className="hover:text-yellow-300">
              Pricelist
            </Link>
            <Link to="gallery" className="hover:text-yellow-300">
              Gallery
            </Link>
          </div>
          <div className="">
            <button className="hover:bg-yellow-800 transition-all duration-300 md:w-40 md:h-10 w-10 h-9 rounded-lg border border-black justify-center items-center flex cursor-pointer md:text-lg text-xs bg-yellow-500 text-black">
              <a href="https://wa.me/2349091737314">Book Now</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

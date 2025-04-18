import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/bs_logo_color.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="shadow-md lg:h-[15vh] md:h-[10vh] h-[8vh] w-full flex justify-center items-center text-[#ffffff] bg-[#1a1a1a] fixed z-50 font-poppins">
      <div className="max-w-7xl mx-auto px-4 py-3 w-[95%] h-[9vh] flex items-center justify-between">
        {/* Logo */}
        <div className="flex md:gap-2 gap-5 items-center">
          <div className="md:w-28 w-20">
            <img src={logo} alt="logo" />
          </div>
          <div>
            <h1 className=" lg:text-[30px] md:text-[20px] text-base">
              BADDEST SILVER SIGNATURE
            </h1>
          </div>
        </div>

        <div className="justify-center items-center gap-5 hidden md:flex">
          <div className="flex md:gap-5 gap-2 md:text-[20px] text-xs">
            <a className="hover:text-[#d4af37]" href="/">
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
            <button className="hover:bg-[#b8922f] transition-all duration-300 md:w-32 md:h-10 w-10 h-9 rounded-lg justify-center items-center flex cursor-pointer md:text-lg text-xs bg-[#d4af37] text-black">
              <a href="https://wa.me/2349091737314">Book Now</a>
            </button>
          </div>
        </div>

        {/* Hamburger Icon */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pb-4 pt-2 shadow-md">
          <ul className="flex flex-col gap-2 text-black text-xs pt-14">
            <li>
              <Link to="/" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/pricelist"
                onClick={closeMenu}
                className="hover:text-yellow-300"
              >
                Pricelist
              </Link>
            </li>
            <li>
              <Link
                to="gallery"
                onClick={closeMenu}
                className="hover:text-yellow-300"
              >
                Gallery
              </Link>
            </li>
            <li>
              <a href="https://wa.me/2349091737314" onClick={closeMenu}>
                Book Now
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Header;

import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/bs_logo_color.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="shadow-md lg:h-[15vh] md:h-[10vh] h-[8vh] w-full flex justify-center items-center text-[#ffffff] bg-[#f7f2f2b9] fixed z-50 font-poppins">
      <div className="max-w-7xl mx-auto px-4 py-3 w-[95%] h-[9vh] flex items-center justify-between">
        {/* Logo */}
        <div className="flex md:gap-2 gap-5 items-center">
          <div className="lg:w-28 w-16">
            <a href="/">
              <img src={logo} alt="logo" />
            </a>
          </div>
        </div>

        <div className="justify-center items-center gap-5 hidden md:flex">
          <div className="flex md:gap-5 gap-2 md:text-[20px] text-xs text-black">
            <a className="hover:text-[#d4af37]" href="/">
              Home
            </a>
            <Link to="/pricelist" className="hover:text-[#d4af37]">
              Pricelist
            </Link>
            <Link to="gallery" className="hover:text-[#d4af37]">
              Gallery
            </Link>
          </div>
          <div className="">
            <button className="hover:bg-[#b8922f] transition-all duration-300 md:w-28 md:h-8 w-10 h-9 rounded-md justify-center items-center flex cursor-pointer md:text-lg text-xs bg-black text-white">
              <a href="https://wa.me/2349091737314">Book Now</a>
            </button>
          </div>
        </div>

        {/* Hamburger Icon */}
        <button
          className="md:hidden z-50 hover:text-[#d4af37] text-black"
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className={`fixed inset-0 bg-black/70 backdrop-blur-md md:hidden z-40
          flex flex-col items-center justify-center gap-6
          transform transition-all duration-500 ease-in-out
          ${
            isOpen
              ? "translate-y-0 opacity-100 pointer-events-auto"
              : "-translate-y-full opacity-0 pointer-events-none"
          }
        `}
        >
          <ul className="flex flex-col items-center gap-6 text-white text-lg">
            <li>
              <Link to="/" onClick={closeMenu} className="hover:text-[#d4af37]">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/pricelist"
                onClick={closeMenu}
                className="hover:text-[#d4af37]"
              >
                Pricelist
              </Link>
            </li>
            <li>
              <Link
                to="/gallery"
                onClick={closeMenu}
                className="hover:text-[#d4af37]"
              >
                Gallery
              </Link>
            </li>
            <li>
              <a
                href="https://wa.me/2349091737314"
                onClick={closeMenu}
                className="bg-[#d4af37] text-black px-6 py-2 rounded-lg hover:bg-[#b8922f] transition"
              >
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

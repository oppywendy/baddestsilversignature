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

const photos = [
  {
    id: 1,
    image: burna,
  },
  {
    id: 2,
    image: davido,
  },
  {
    id: 3,
    image: skiibii,
  },
  {
    id: 4,
    image: dbanj,
  },
  {
    id: 5,
    image: bnxn,
  },
  {
    id: 6,
    image: djobi,
  },
  {
    id: 7,
    image: dotun,
  },
  {
    id: 8,
    image: e4ma,
  },
  {
    id: 9,
    image: customer,
  },
  {
    id: 10,
    image: pic,
  },
];

const Gallery = () => {
  return (
    <div className="w-full min-h-full bg-[#ddd] font-poppins md:pt-28 pt-10 md:pb-20 pb-16">
      <div>
        <div>
          <h1 className="text-center lg:text-4xl text-2xl font-semibold">
            OUR GALLERY
          </h1>
        </div>
        <div className="w-full lg:pt-16 pt-10 lg:grid flex md:grid-cols-5 md:gap-5 overflow-x-auto overflow-hidden no-scrollbar group lg:space-x-0 space-x-5 p-5">
          {photos.map((item) => (
            <div
              key={item.id}
              className="overflow-hidden rounded-lg min-w-[200px] lg:min-w-0"
            >
              <img
                src={item.image}
                alt=""
                loading="lazy"
                className="w-full h-60 lg:h-80 object-cover rounded-lg cursor-pointer transform transition-transform duration-500 hover:scale-110"
              />
            </div>
          ))}
        </div>
        <div className="items-center justify-center flex md:pt-24 pt-10">
          <button className="md:w-48 w-24 md:h-12 h-8 rounded-lg hover:bg-[#b8922f] justify-center items-center flex cursor-pointer bg-black text-[#d4af37] text-sm md:text-lg">
            <Link to="/gallery">View more</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;

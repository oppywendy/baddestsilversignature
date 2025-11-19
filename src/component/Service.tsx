import pic1 from "../assets/lawi.jpg";
import pic2 from "../assets/bss_color.jpg";
import pic3 from "../assets/bss_sketch.jpg";
import pic4 from "../assets/manicure.jpg";
import pic5 from "../assets/pedicure.jpg";
import pic7 from "../assets/home Service.jpg";
import hov1 from "../assets/22.jpg";
import hov2 from "../assets/4.jpg";
import hov3 from "../assets/10.jpg";
import hov6 from "../assets/dammy.jpg";

const services = [
  {
    id: 1,
    name: "Haircut",
    image: pic1,
    link: "https://wa.me/2349091737314",
    buk: "Book Now",
    hover: hov1,
  },
  {
    id: 2,
    name: "Hair Color",
    image: pic2,
    link: "https://wa.me/2349091737314",
    buk: "Book Now",
    hover: hov2,
  },
  {
    id: 3,
    name: "Hair Sketch",
    image: pic3,
    link: "https://wa.me/2349091737314",
    buk: "Book Now",
    hover: hov3,
  },
  {
    id: 4,
    name: "Pedicure",
    image: pic5,
    link: "https://wa.me/2349091737314",
    buk: "Book Now",
    hover: pic5,
  },
  {
    id: 5,
    name: "Manicure",
    image: pic4,
    link: "https://wa.me/2349091737314",
    buk: "Book Now",
    hover: pic4,
  },
  {
    id: 6,
    name: "Home Service",
    image: pic7,
    link: "https://wa.me/2349091737314",
    buk: "Book Now",
    hover: hov6,
  },
];

const Service = () => {
  return (
    <div className="w-full font-poppins lg:pb-20 pb-16 lg:pt-28 pt-10 bg-[#ddd]">
      <div>
        <h1 className="font-semibold lg:text-4xl text-2xl justify-center flex">
          OUR SERVICES
        </h1>
      </div>
      <div className="justify-center items-center flex lg:pt-10 pt-5">
        <div className="flex overflow-x-auto space-x-4 no-scrollbar pt-5 lg:pt-10 p-5 lg:gap-5">
          {services.map((item) => (
            <div
              key={item.id}
              className="lg:min-w-[200px] min-w-[200px] h-[45vh] lg:h-[60vh] rounded-lg cursor-pointer group text-xl lg:text-lg bg-black lg:rounded-3xl text-white hover:shadow-slate-700 shadow transform transition-all duration-300"
            >
              <div className="relative w-full h-[60%] lg:h-52 overflow-hidden lg:rounded-t-3xl rounded-t-lg">
                <img
                  src={item.image}
                  alt=""
                  loading="lazy"
                  className="bg-[#EFEFF0] mb-5 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                />

                <img
                  src={item.hover}
                  alt=""
                  loading="lazy"
                  className="w-full h-full object-cover absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                />
              </div>
              <h1 className="font-semibold lg:pt-10 pt-8 text-center text-white lg:text-2xl text-xl">
                {item.name}
              </h1>
              <div className="justify-center items-center flex lg:pt-10 pt-5">
                <button
                  onClick={() => (window.location.href = item.link)}
                  className="lg:w-32 w-20 h-6 lg:rounded-lg rounded-md hover:bg-[#b8922f] justify-center items-center flex cursor-pointer bg-black border border-white text-[#d4af37] shadow-lg opacity-80 lg:text-base text-xs"
                >
                  {item.buk}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;

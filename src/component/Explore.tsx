import pic from "../assets/office.jpg";
import { FaArrowRight } from "react-icons/fa";

const Explore = () => {
  return (
    <div className="w-full justify-center items-center flex md:pt-28 pt-10 md:pb-20 pb-16 font-poppins bg-[#FBFBFB]">
      <div className="lg:w-[80%] w-full lg:h-[70vh] max-h-full bg-black justify-center items-center border border-black flex md:rounded-3xl text-white">
        <div className="flex w-[100%] h-[100%] rounded-3xl flex-col lg:flex-row">
          <div className="lg:w-[50%] w-full lg:h-[100%] h-[45%]">
            <h1 className="text-center lg:text-4xl md:text-4xl text-3xl font-medium lg:pt-16 md:pt-10 pt-8 pb-3 md:pb-0 text-[#EAB308]">
              Explore the barbershop
            </h1>
            <p className="text-left lg:text-2xl md:text-2xl text-lg lg:pl-10 md:pl-6 pl-3 md:pt-8 pt-5">
              Step in as a customer and leave as a masterpiece
            </p>
            <p className="text-left lg:text-xl md:text-2xl text-lg lg:pl-10 md:pl-6 pl-3 md:pt-5 pt-5">
              All shop services are accompanied by a complimentary shot of
              tequila.
            </p>
            <div className="justify-center items-center grid lg:pt-14 md:pt-10 pt-8">
              <button className="w-48 h-12 rounded-lg border border-black hover:bg-[#b8922f] justify-center items-center flex cursor-pointer bg-[#d4af37] text-black">
                <a href="https://wa.me/2349091737314">Book Appointment</a>
                <div className="pl-2 justify-center items-center flex">
                  <FaArrowRight />
                </div>
              </button>
            </div>
          </div>
          <div className="lg:w-[50%] md:w-[100%] w-full lg:h-[100%] h-[55%] justify-center items-center flex top-10 pt-10 lg:pt-0">
            <div className="justify-center items-center flex">
              <img
                className="md:w-[400px] w-[450px] h-[300px] rounded-2xl"
                src={pic}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;

import { FaXTwitter } from "react-icons/fa6";
import logo from "../assets/bs_logo_color.png";
import { FaFacebook, FaInstagramSquare, FaTiktok } from "react-icons/fa";
import { IoLogoSnapchat } from "react-icons/io";

const About = () => {
  return (
    <div>
      <div className="w-full max-h-full">
        <div className="justify-center md:pt-16 pt-5 flex">
          <img className="md:w-[300px] w-[200px]" src={logo} alt="" />
        </div>
        <div className="md:pt-10 pt-4 justify-center">
          <h1 className="font-medium font-mono md:text-[30px] text-lg pl-2 md:justify-center items-center flex">
            Experience the Luxury of personalized beauty at Baddest Silver
            Signature
          </h1>
          <p className="font-medium font-mono md:text-[30px] text-lg pl-2 md:justify-center items-center flex">
            Discover the difference a touch of perfection can make
          </p>
          <p className="font-medium font-mono md:text-[30px] text-lg pl-2 md:justify-center items-center flex">
            We are located at Pacific Mall Ilasan
          </p>
          <p className="font-medium font-mono md:text-[30px] text-lg pl-2 md:justify-center items-center flex">
            32 Ilasan new road Lekki Lagos
          </p>
        </div>
        <div className="w-[100%] justify-center items-center grid">
          <h1 className="font-medium font-mono md:text-[40px] text-lg justify-center items-center flex pt-5 pb-3 underline">
            Working Hours
          </h1>
          <p className="font-medium font-mono md:text-[25px] text-lg justify-start items-center flex">
            Monday Off day
          </p>
          <p className="font-medium font-mono md:text-[25px] text-lg justify-start items-center flex">
            Tuesday 10:00am - 8:00pm
          </p>
          <p className="font-medium font-mono md:text-[25px] text-lg justify-start items-center flex">
            Wednesday 10:00am - 8:00pm
          </p>
          <p className="font-medium font-mono md:text-[25px] text-lg justify-start items-center flex">
            Thursday 10:00am - 8:00pm
          </p>
          <p className="font-medium font-mono md:text-[25px] text-lg justify-start items-center flex">
            Friday 10:00am - 9:00pm
          </p>
          <p className="font-medium font-mono md:text-[25px] text-lg justify-start items-center flex">
            Saturday 10:00am - 9:00pm
          </p>
          <p className="font-medium font-mono md:text-[25px] text-lg justify-start items-center flex">
            Sunday 1:00pm - 8:00pm
          </p>
        </div>
        <div className="flex md:gap-5 gap-2 md:pt-5 pt-3 justify-center items-center pb-10">
          <div>
            {" "}
            <a href="https://www.instagram.com/baddest_silver?igsh=MWF5YXlibGtyaG43eA==">
              <FaInstagramSquare
                size={30}
                color="red"
                className="cursor-pointer"
              />
            </a>
          </div>
          <div>
            <a href="https://www.tiktok.com/@baddestsilver?_t=8q1ybbvsUw2&_r=1">
              <FaTiktok size={30} color="black" className="cursor-pointer" />
            </a>
          </div>
          <div>
            <a href="https://snapchat.com/t/kOohVarU">
              <IoLogoSnapchat
                size={30}
                color="gold"
                className="cursor-pointer"
              />
            </a>
          </div>
          <div>
            <a href="https://www.facebook.com/alhaji.silver?mibextid=JRoKGi">
              <FaFacebook size={30} color="blue" className="cursor-pointer" />
            </a>
          </div>
          <div>
            <a href="">
              <FaXTwitter size={30} color="black" className="cursor-pointer" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

import { FaXTwitter } from "react-icons/fa6";
import logo from "../assets/bs_logo_color.png";
import { FaFacebook, FaInstagramSquare, FaTiktok } from "react-icons/fa";
import { IoLogoSnapchat } from "react-icons/io";

const About = () => {
  return (
    <div>
      <div className="w-full max-h-full font-poppins md:pt-28 pt-10 md:pb-20 pb-16">
        <div className="justify-center flex">
          <img className="md:w-[300px] w-[200px]" src={logo} alt="" />
        </div>
        <div className="justify-center items-center flex">
          <div className="pt-10 justify-center grid w-[90%]">
            <h1 className="md:text-3xl text-lg pl-2 md:justify-center items-center flex">
              Experience the Luxury of personalized beauty at Baddest Silver
              Signature
            </h1>
            <p className="md:text-3xl text-lg pl-2 md:justify-center items-center flex">
              Discover the difference a touch of perfection can make
            </p>
            <p className="md:text-3xl text-lg pl-2 md:justify-center items-center flex">
              We are located at Pacific Mall Ilasan
            </p>
            <p className="md:text-3xl text-lg pl-2 md:justify-center items-center flex">
              32 Ilasan new road Lekki Lagos
            </p>
          </div>
        </div>
        <div className="w-[100%] justify-center items-center grid md:pt-16 pt-10">
          <h1 className="md:text-4xl text-lg justify-center items-center flex  underline">
            Working Hours
          </h1>
          <p className="md:text-2xl text-lg justify-start items-center flex pt-10">
            Monday Off day
          </p>
          <p className="md:text-2xl text-lg justify-start items-center flex pt-5">
            Tuesday 10:00am - 8:00pm
          </p>
          <p className="md:text-2xl text-lg justify-start items-center flex pt-5">
            Wednesday 10:00am - 8:00pm
          </p>
          <p className="md:text-2xl text-lg justify-start items-center flex pt-5">
            Thursday 10:00am - 8:00pm
          </p>
          <p className="md:text-2xl text-lg justify-start items-center flex pt-5">
            Friday 10:00am - 9:00pm
          </p>
          <p className="md:text-2xl text-lg justify-start items-center flex pt-5">
            Saturday 10:00am - 9:00pm
          </p>
          <p className="md:text-2xl text-lg justify-start items-center flex pt-5">
            Sunday 1:00pm - 8:00pm
          </p>
        </div>
        <div className="flex md:gap-10 gap-5 pt-10 justify-center items-center">
          <div>
            {" "}
            <a href="https://www.instagram.com/baddest_silver?igsh=MWF5YXlibGtyaG43eA==">
              <FaInstagramSquare
                size={40}
                color="red"
                className="cursor-pointer"
              />
            </a>
          </div>
          <div>
            <a href="https://www.tiktok.com/@baddestsilver?_t=8q1ybbvsUw2&_r=1">
              <FaTiktok size={40} color="black" className="cursor-pointer" />
            </a>
          </div>
          <div>
            <a href="https://snapchat.com/t/kOohVarU">
              <IoLogoSnapchat
                size={40}
                color="gold"
                className="cursor-pointer"
              />
            </a>
          </div>
          <div>
            <a href="https://www.facebook.com/alhaji.silver?mibextid=JRoKGi">
              <FaFacebook size={40} color="blue" className="cursor-pointer" />
            </a>
          </div>
          <div>
            <a href="">
              <FaXTwitter size={40} color="black" className="cursor-pointer" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

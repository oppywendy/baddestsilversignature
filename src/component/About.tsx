import { FaXTwitter } from "react-icons/fa6";
import logo from "../assets/bs_logo_color.png";
import { FaFacebook, FaInstagramSquare, FaTiktok } from "react-icons/fa";
import { IoLogoSnapchat } from "react-icons/io";

const About = () => {
  return (
    <div>
      <div className="w-full max-h-full font-poppins md:pt-28 pt-10 md:pb-20 pb-16">
        <div className="justify-center flex">
          <img
            loading="lazy"
            className="md:w-[300px] w-[200px]"
            src={logo}
            alt=""
          />
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
        <div className="w-[100%] justify-center items-center flex md:pt-28 pt-10 flex-col md:flex-row">
          <div className="md:w-[40%] w-full justify-center items-center grid">
            {" "}
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
            <div className="flex md:gap-10 gap-5 pt-10 justify-center items-center">
              <div>
                {" "}
                <a href="https://www.instagram.com/baddest_silver?igsh=MWF5YXlibGtyaG43eA==">
                  <FaInstagramSquare
                    size={20}
                    color="red"
                    className="cursor-pointer"
                  />
                </a>
              </div>
              <div>
                <a href="https://www.tiktok.com/@baddestsilver?_t=8q1ybbvsUw2&_r=1">
                  <FaTiktok
                    size={20}
                    color="black"
                    className="cursor-pointer"
                  />
                </a>
              </div>
              <div>
                <a href="https://snapchat.com/t/kOohVarU">
                  <IoLogoSnapchat
                    size={20}
                    color="gold"
                    className="cursor-pointer"
                  />
                </a>
              </div>
              <div>
                <a href="https://www.facebook.com/alhaji.silver?mibextid=JRoKGi">
                  <FaFacebook
                    size={20}
                    color="blue"
                    className="cursor-pointer"
                  />
                </a>
              </div>
              <div>
                <a href="">
                  <FaXTwitter
                    size={20}
                    color="black"
                    className="cursor-pointer"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="md:w-[60%] w-full pt-10 md:pt-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.7499916903002!2d3.4925792739378987!3d6.426158224289058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf52e4ef9c313%3A0xb0722f107ddbfd4a!2sBaddest%20Silver%20Signature!5e0!3m2!1sen!2sng!4v1745497372305!5m2!1sen!2sng"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

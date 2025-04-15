import pic1 from "../assets/8.jpg";
import pic2 from "../assets/bss ceo of lagos.jpg";
import pic3 from "../assets/9.jpg";
import pic4 from "../assets/6.jpg";
import { FaCertificate } from "react-icons/fa6";

const Training = () => {
  return (
    <div className="w-full max-h-full bg-[#ddd] justify-center items-center flex font-poppins md:pt-28 pt-10 md:pb-20 pb-16">
      <div className="w-[90%] h-[98%]">
        <h1 className="md:text-5xl text-3xl font-bold text-center">
          GROOMING EXPERIENCE
        </h1>
        <div className="justify-center items-center md:pt-16 pt-10 flex h-[98%]">
          <div>
            <h1 className="md:text-2xl text-lg ">
              Enrol Now for your professional training, Turn your passion into a
              career, Master the art of hair, beauty and style with hands-on
              training with industry experts
            </h1>
            <div className="w-[100%] justify-center md:justify-start items-center md:items-start flex md:pt-20 pt-10 flex-col md:flex-row">
              <div className="text-white justify-center md:justify-start items-center md:items-start grid md:w-[30%] w-full">
                <div className="bg-black h-[22rem] w-[15rem]">
                  <div className="w-full h-full">
                    <img className="h-[80%] w-full" src={pic1} alt="" />
                    <p className="h-[20%] justify-center items-center flex">
                      Fade it like a pro
                    </p>
                  </div>
                </div>
                <div className="bg-black h-[22rem] w-[15rem]">
                  <div className="w-full h-full">
                    <img className="h-[80%] w-full" src={pic2} alt="" />
                    <p className="h-[20%] justify-center items-center flex">
                      Level up your skills
                    </p>
                  </div>
                </div>
                <div className="bg-black h-[22rem] w-[15rem]">
                  <div className="w-full h-full">
                    <img className="h-[80%] w-full" src={pic3} alt="" />
                    <p className="h-[20%] justify-center items-center flex">
                      Master the art of grooming
                    </p>
                  </div>
                </div>
                <div className="bg-black h-[22rem] w-[15rem]">
                  <div className="w-full h-full">
                    <img className="h-[80%] w-full" src={pic4} alt="" />
                    <p className="h-[20%] justify-center items-center flex">
                      From amateur to artist
                    </p>
                  </div>
                </div>
              </div>
              <div className="md:w-[70%] w-full pt-14 md:pt-0">
                <h1 className="md:text-4xl text-2xl font-semibold">
                  What You Will Learn
                </h1>
                <div className="justify-center items-center flex">
                  <ul className="list-disc">
                    <li>
                      {" "}
                      <p className="pt-10 md:text-2xl text-lg">
                        Mastering of all haircut styles
                      </p>
                    </li>
                    <li>
                      <p className="pt-5 md:text-2xl text-lg">
                        Mastering of Fade haircut
                      </p>
                    </li>
                    <li>
                      {" "}
                      <p className="pt-5 md:text-2xl text-lg">
                        Mastering of perfect hair lining
                      </p>
                    </li>
                    <li>
                      <p className="pt-5 md:text-2xl text-lg">
                        Mastering of Beard trims
                      </p>
                    </li>
                    <li>
                      <p className="pt-5 md:text-2xl text-lg">
                        Mastering of all type of color applications
                      </p>
                    </li>
                    <li>
                      <p className="pt-5 md:text-2xl text-lg">
                        How to effectively use hair enhancement
                      </p>
                    </li>
                    <li>
                      <p className="pt-5 md:text-2xl text-lg">
                        How to achieve hair curls
                      </p>
                    </li>
                    <li>
                      <p className="pt-5 md:text-2xl text-lg">
                        How to maximize your creative skills
                      </p>
                    </li>
                    <li>
                      <p className="pt-5 md:text-2xl text-lg">
                        Advanced hair coloring techniques(Blonde and White
                        color)
                      </p>
                    </li>
                    <li>
                      <p className="pt-5 md:text-2xl text-lg">
                        Tips on how to achieve all types of hair colors
                      </p>
                    </li>
                    <li>
                      <p className="pt-5 md:text-2xl text-lg">
                        How to perfect your drawing skills and lining on all
                        types of hair
                      </p>
                    </li>
                  </ul>
                </div>

                <div className="justify-center flex md:pt-24 pt-16">
                  <FaCertificate size={150} color="#d4af37" />
                </div>

                <p className="md:pt-16 pt-10 md:text-2xl text-lg">
                  Certificate of completion from Baddest Silver Signature will
                  be awarded to all participants upon successful completion of
                  training to validate your new skills
                </p>

                <p className="md:pt-28 pt-16 md:text-2xl text-lg">
                  Dreaming of becoming a professional barber? This is your sign.
                  Enrol today in our training session and become a certified
                  barber. Sign Up Now
                </p>

                <div className="justify-center flex md:pt-16 pt-10">
                  <button className="md:w-40 w-28 h-10 md:rounded-lg rounded-md hover:bg-[#b8922f] justify-center items-center flex cursor-pointer bg-[#d4af37] text-black md:text-lg text-sm">
                    <a href="https://wa.me/2349091737314">SIGN UP</a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Training;

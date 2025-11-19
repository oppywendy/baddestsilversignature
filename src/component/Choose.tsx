import pic from "../assets/15.jpg";
import pic2 from "../assets/6.jpg";

const Choose = () => {
  return (
    <div className="w-[100%] justify-center items-center flex lg:pt-28 pt-10 lg:pb-20 pb-16 font-poppins bg-[#ddd]">
      <div className="lg:w-[98%] w-full flex justify-center flex-col lg:flex-row">
        <div className="lg:w-[50%] w-full relative">
          <img
            src={pic}
            alt=""
            loading="lazy"
            className="w-full lg:h-screen object-cover"
          />
          <div className="absolute inset-0 flex justify-between items-end font-semibold text-white p-10">
            <h1 className="bg-black rounded-xl w-full text-center">
              GENTLEMEN'S CUT
            </h1>
          </div>
        </div>
        <div className="lg:w-[50%] w-full pb-5 lg:pb-0 relative">
          <img
            src={pic2}
            alt=""
            loading="lazy"
            className="w-full lg:h-screen object-cover"
          />
          <div className="absolute inset-0 flex justify-between items-end font-semibold text-white p-10">
            <h1 className="bg-black rounded-xl w-full text-center">
              LADIES CUT
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;

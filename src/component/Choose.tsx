import pic from "../assets/15.jpg";

const Choose = () => {
  return (
    <div className="w-[100%] justify-center items-center flex md:pt-28 pt-10 md:pb-20 pb-16 font-poppins bg-[#FBFBFB]">
      <div className="w-[90%] flex justify-center flex-col md:flex-row">
        <div className="md:w-[50%] w-full pt-10 md:pt-0 pb-5 md:pb-0">
          <img src={pic} alt="" />
        </div>
        <div className="md:w-[50%] w-full">
          <h1 className="md:text-5xl text-3xl font-bold text-center md:pt-0 pt-10">
            Why Choose Us?
          </h1>
          <ul className=" md:text-[40px] md:leading-tight leading-relaxed text-lg items-center justify-center grid md:p-10 p-5">
            <li>Top-Notch Barbers and Stylists</li>
            <li className="md:pt-5 pt-2">Affordable Prices</li>
            <li className="md:pt-5 pt-2">Exceptional Services</li>
            <li className="md:pt-5 pt-2">Eventful waiting sessions</li>
            <li className="md:pt-5 pt-2">24/7 Customer Support</li>
          </ul>
          <div className="h-[20%] w-full justify-center items-center flex">
            <button className="md:w-60 w-36 md:h-12 h-10 rounded-lg justify-center items-center flex cursor-pointer bg-[#d4af37] hover:bg-[#b8922f] text-black md:text-xl text-sm">
              <a href="https://wa.me/2349091737314">Book Appointment</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;

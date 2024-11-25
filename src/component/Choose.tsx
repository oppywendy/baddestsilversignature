const Choose = () => {
  return (
    <div className="w-[100%] md:h-[80vh] h-[70vh] justify-center md:items-center flex">
      <div className="w-[96%] md:h-[95%] max-h-full flex justify-center md:items-center flex-col md:flex-row">
        <div className="md:w-[50%] w-full md:h-[90%] items-center justify-center flex pt-10 md:pt-0 pb-5 md:pb-0">
          <h1 className="font-serif md:text-5xl text-3xl font-bold">
            Why Choose Us?
          </h1>
        </div>
        <div className="md:w-[50%] md:h-[90%] h-[100%] w-full">
          <ul className="font-extralight md:text-[40px] md:leading-tight leading-relaxed text-lg h-[80%] items-center grid">
            <li>Top-Notch Barbers and Stylists</li>
            <li className="md:pt-5 pt-2">Affordable Prices</li>
            <li className="md:pt-5 pt-2">Exceptional Services</li>
            <li className="md:pt-5 pt-2">Eventful waiting sessions</li>
            <li className="md:pt-5 pt-2">24/7 Customer Support</li>
          </ul>
          <div className="h-[20%] w-full justify-center items-center flex">
            <button className="md:w-60 w-36 md:h-12 h-10 rounded-lg border border-black justify-center items-center flex cursor-pointer bg-black hover:bg-blue-950 text-yellow-500 md:text-xl text-sm">
              <a href="https://wa.me/2349091737314">Book Appointment</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;

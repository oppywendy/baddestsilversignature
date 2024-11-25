import { TbCurrencyNaira } from "react-icons/tb";

const Pricelist = () => {
  const sections = [
    {
      title: "BADDEST SILVER",
      services: [
        { service: "Haircut", price: "10,000" },
        { service: "Haircut With Enhancement", price: "15,000" },
        { service: "Black Dye", price: "10,000" },
        { service: "Relaxer", price: "10,000" },
        { service: "One Hour Sketch", price: "10,000" },
        { service: "Friction", price: "5,000" },
        { service: "Home Service", price: "50,000" },
        { service: "Home Service With Color", price: "100,000" },
      ],
    },
    {
      title: "STANDARD",
      services: [
        { service: "Male Haircut", price: "7,000" },
        { service: "Female Haircut", price: "8,000" },
        { service: "Kid Haircut", price: "7,000" },
        { service: "Haircut With Enhancement", price: "10,000" },
        { service: "Friction", price: "4,000" },
        { service: "One Hour Sketch", price: "10,000" },
        { service: "Home Service (Haircut)", price: "50,000" },
        { service: "Pedicure", price: "10,000" },
        { service: "Manicure", price: "5,000" },
        { service: "Home Service (Pedicure)", price: "50,000" },
      ],
    },
    {
      title: "HAIR COLOR",
      services: [
        { service: "Black Dye", price: "7,000" },
        { service: "Black Dye Full Hair", price: "10,000" },
        { service: "Black Dye Short Dread", price: "10,000" },
        { service: "Black Dye Long Dread", price: "15,000" },
        { service: "Black Dye Full Long Hair", price: "20,000" },
        { service: "Relaxer", price: "8,000" },
        { service: "Tint/Bleach/Blonde", price: "20,000" },
        { service: "Tint/Bleach/Blonde Full Hair", price: "30,000" },
        { service: "Tint/Bleach/Blonde Full Long Hair", price: "40,000" },
        { service: "Other Colors", price: "30,000" },
        { service: "Other Colors Full Hair", price: "40,000" },
        { service: "Other Colors Full Long Hair", price: "60,000" },
      ],
    },
  ];

  return (
    <div className="text-black w-full min-h-screen flex justify-center items-center p-10">
      <div className="w-full max-w-7xl space-y-10 mt-16">
        {/* Header Section */}
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl md:mt-10 font-bold mb-5">
            OUR PRICING
          </h1>
          <p className="text-sm md:text-xl font-light leading-relaxed">
            At Baddest Silver Signature, we strive to offer the best services at
            the most affordable prices. Our prices reflect premium quality and
            efficiency to ensure exceptional customer satisfaction.
          </p>
        </div>

        {/* Pricing Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {sections.map((section, index) => (
            <div
              key={index}
              className="border border-yellow-500 rounded-lg shadow-lg p-8 bg-white hover:scale-105 transform transition-all duration-300"
            >
              <h2 className="text-3xl font-semibold text-center mb-5">
                {section.title}
              </h2>
              <ul className="space-y-4">
                {section.services.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex justify-between text-xl items-center"
                  >
                    <span className="text-base">{item.service}</span>
                    <span className="flex text-base items-center gap-1">
                      <TbCurrencyNaira size={25} />
                      {item.price}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricelist;

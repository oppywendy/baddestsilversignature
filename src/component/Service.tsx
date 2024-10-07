import pic1 from "../assets/bss_skiibii.jpg"
import pic2 from "../assets/bss_color.jpg"
import pic3 from "../assets/bss_sketch.jpg"
import pic4 from "../assets/manicure.jpg"
import pic5 from "../assets/pedicure.jpg"
import pic7 from "../assets/home Service.jpg"
import { FaRegStar } from "react-icons/fa6"


const Service = () => {
  return (
    <div className='w-full md:h-[120vh] h-[120vh] bg-[#FBFBFB]'>
        <div><h1 className='font-medium font-serif text-[40px] justify-center flex pt-10 text-red-950'>OUR SERVICES</h1></div>
        <div className='md:w-[98%] w-full md:h-[85%] h-[105vh] justify-center md:items-center flex'>
                <div className="md:h-[80%] h-[100vh] md:w-[98%] w-[100%] md:flex grid grid-cols-3 justify-center items-start pt-5 md:gap-3 gap-1">
                <div className="md:w-[32vh] w-[26vh] md:h-[60vh] h-[46vh] bg-black rounded-xl justify-center items-center flex border hover:shadow-slate-700 shadow cursor-pointer">
                    <div className="w-[100%] h-[100%]">
                       <img className="w-[100%] md:h-[35vh] h-[28vh] rounded-t-xl" src={pic1} alt="" />
                       <div className="flex justify-start items-center pl-1 md:pt-2 gap-1">
                        <FaRegStar color="gold" />
                        <p className="text-yellow-500">5.0</p>
                       </div>
                       <p className="text-[25px] font-bold pl-4 md:pt-2 text-white">Haircut</p>
                       <div className='pt-3 justify-center flex'><button className='w-40 h-7 rounded-lg border border-black hover:bg-slate-300 justify-center items-center flex cursor-pointer bg-yellow-500 text-black'>BOOK NOW</button></div>

                       </div>
                    </div>


                    <div className="md:w-[32vh] w-[26vh] md:h-[60vh] h-[46vh] bg-black rounded-xl justify-center items-center flex border hover:shadow-slate-700 shadow cursor-pointer">
                    <div className="w-[100%] h-[100%]">
                       <img className="w-[100%] md:h-[35vh] h-[28vh] rounded-t-xl" src={pic2} alt="" />
                       <div className="flex justify-start items-center pl-1 md:pt-2 gap-1">
                        <FaRegStar color="gold" />
                        <p className="text-yellow-500">5.0</p>
                       </div>
                       <p className="text-[25px] font-bold pl-4 md:pt-2 text-white">Hair Color</p>
                       <div className='pt-3 justify-center flex'><button className='w-40 h-7 rounded-lg border border-black hover:bg-slate-300 justify-center items-center flex cursor-pointer bg-yellow-500 text-black'>BOOK NOW</button></div>

                       </div>
                    </div>

                    <div className="md:w-[32vh] w-[26vh] md:h-[60vh] h-[46vh] bg-black rounded-xl justify-center items-center flex border hover:shadow-slate-700 shadow cursor-pointer">
                    <div className="w-[100%] h-[100%]">
                       <img className="w-[100%] md:h-[35vh] h-[28vh] rounded-t-xl" src={pic3} alt="" />
                       <div className="flex justify-start items-center pl-1 md:pt-2 gap-1">
                        <FaRegStar color="gold" />
                        <p className="text-yellow-500">5.0</p>
                       </div>
                       <p className="text-[25px] font-bold pl-4 md:pt-2 text-white">Hair Sketch</p>
                       <div className='pt-3 justify-center flex'><button className='w-40 h-7 rounded-lg border border-black hover:bg-slate-300 justify-center items-center flex cursor-pointer bg-yellow-500 text-black'>BOOK NOW</button></div>

                       </div>
                    </div>


                    <div className="md:w-[32vh] w-[26vh] md:h-[60vh] h-[46vh] bg-black rounded-xl justify-center items-center flex border hover:shadow-slate-700 shadow cursor-pointer">
                    <div className="w-[100%] h-[100%]">
                       <img className="w-[100%] md:h-[35vh] h-[28vh] rounded-t-xl" src={pic4} alt="" />
                       <div className="flex justify-start items-center pl-1 md:pt-2 gap-1">
                        <FaRegStar color="gold" />
                        <p className="text-yellow-500">5.0</p>
                       </div>
                       <p className="text-[25px] font-bold pl-4 md:pt-2 text-white">Pedicure</p>
                       <div className='pt-3 justify-center flex'><button className='w-40 h-7 rounded-lg border border-black hover:bg-slate-300 justify-center items-center flex cursor-pointer bg-yellow-500 text-black'>BOOK NOW</button></div>

                       </div>
                    </div>


                    <div className="md:w-[32vh] w-[26vh] md:h-[60vh] h-[46vh] bg-black rounded-xl justify-center items-center flex border hover:shadow-slate-700 shadow cursor-pointer">
                    <div className="w-[100%] h-[100%]">
                       <img className="w-[100%] md:h-[35vh] h-[28vh] rounded-t-xl" src={pic5} alt="" />
                       <div className="flex justify-start items-center pl-1 md:pt-2 gap-1">
                        <FaRegStar color="gold" />
                        <p className="text-yellow-500">5.0</p>
                       </div>
                       <p className="text-[25px] font-bold pl-4 md:pt-2 text-white">Manicure</p>
                       <div className='pt-3 justify-center flex'><button className='w-40 h-7 rounded-lg border border-black hover:bg-slate-300 justify-center items-center flex cursor-pointer bg-yellow-500 text-black'>BOOK NOW</button></div>

                       </div>
                    </div>


                    <div className="md:w-[32vh] w-[26vh] md:h-[60vh] h-[46vh] bg-black rounded-xl justify-center items-center flex border hover:shadow-slate-700 shadow cursor-pointer">
                    <div className="w-[100%] h-[100%]">
                       <img className="w-[100%] md:h-[35vh] h-[28vh] rounded-t-xl" src={pic7} alt="" />
                       <div className="flex justify-start items-center pl-1 md:pt-2 gap-1">
                        <FaRegStar color="gold" />
                        <p className="text-yellow-500">5.0</p>
                       </div>
                       <p className="text-[25px] md:font-bold md:pl-4 pl-2 md:pt-2 text-white">Home Service</p>
                       <div className='pt-3 justify-center flex'><button className='w-40 h-7 rounded-lg border border-black hover:bg-slate-300 justify-center items-center flex cursor-pointer bg-yellow-500 text-black'>BOOK NOW</button></div>

                       </div>
                    </div>
        
                </div>
        
        </div>
    </div>
  )
}

export default Service
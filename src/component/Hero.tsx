import { FaCut, FaHandsWash } from "react-icons/fa"
import pic from "../assets/office1.jpg"
import { SiShortcut } from "react-icons/si"
import { PiHairDryerFill } from "react-icons/pi"
import { GiMorgueFeet } from "react-icons/gi"

const Hero = () => {
  return (
    <div className="pt-10 w-full md:h-[125vh] h-[80vh] flex-wrap overflow-hidden">
          <div className='bg-cover bg-center md:h-screen h-[55h] w-full bg-[#333] bg-opacity-50 bg-blend-overlay' style={{backgroundImage: `url(${pic})`}}>
        <div className='w-[100%] md:h-[100%] h-[55vh] bg-transparent md:ml-8 ml-4 items-center flex'>
            <div className='w-[90%] h-[90%] text-white'>
                <div className='w-[60%] h-[98%]'>
                <h1 className='md:pt-80 mt-14 font-medium md:text-4xl text-2xl'>Welcome to Baddest Silver Signature</h1>
                <p className='md:pt-5 pt-1 text-xs'>We believe in providing our customers with the best haircuts and services. Our team of skilled barbers and stylists work tirelessly to make each client's experience a memorable one.</p>
                <div className="gap-10 flex md:mt-5 mt-2">
                <button className="hover:bg-slate-300 md:w-56 md:h-14 w-36 h-10 rounded-lg border border-black justify-center items-center flex cursor-pointer bg-orange-400 text-black">Book Appointment</button>
                </div>

                </div>
            </div>
        </div>
    </div>
    <div className="w-full h-[20vh] justify-center items-center flex">
    <div className="w-[20%] h-[90%] justify-center items-center flex">
    <div className="w-20 h-20 bg-yellow-500 rounded-full justify-center items-center flex"><FaCut size={50} /></div>
    </div>
    <div className="w-[20%] h-[90%] justify-center items-center flex">
    <div className="w-20 h-20 bg-yellow-500 rounded-full justify-center items-center flex"><GiMorgueFeet size={50} /></div>
    </div>
    <div className="w-[20%] h-[90%] justify-center items-center flex">
    <div className="w-20 h-20 bg-yellow-500 rounded-full justify-center items-center flex"><SiShortcut size={45} /></div>
    </div>
    <div className="w-[20%] h-[90%] justify-center items-center flex">
    <div className="w-20 h-20 bg-yellow-500 rounded-full justify-center items-center flex"><PiHairDryerFill size={50} /></div>
    </div>
    <div className="w-[20%] h-[90%] justify-center items-center flex">
    <div className="w-20 h-20 bg-yellow-500 rounded-full justify-center items-center flex"><FaHandsWash size={50} /></div>
    </div>

    </div>

    </div>
  )
}

export default Hero
import pic from "../assets/training.jpg"
import pic2 from "../assets/training 2.jpg"
import pic3 from "../assets/training4.jpg"
import { FaArrowRight } from 'react-icons/fa6'

const Training = () => {
  return (
    <div className='w-full md:h-[120vh] h-[100%] bg-[#F8FAFD] justify-center items-center flex'>
        <div className='w-[96%] h-[98%]'>
            <h1 className='font-bold md:text-5xl text-3xl font-serif text-center md:pt-5'>Grooming Experience</h1>
           <div className='md:justify-center md:items-center md:pt-7 flex h-[98%]'>
           <div className=' w-[98%] md:h-[85%] h-[98%] flex justify-center items-center flex-col-reverse md:flex-row'>
            <div className='md:w-[30%] w-full md:h-[98%] pt-5 flex-wrap items-center md:grid md:grid-cols-2 flex'>
                <h1 className='font-extralight md:text-5xl text-4xl'>Enrol for your Training session</h1>
                <div className=' md:pt-14 pt-5'><button className='w-48 h-12 rounded-r-full rounded-l-full border border-black hover:bg-slate-300 justify-center items-center flex cursor-pointer bg-[#EAB308] text-black'>Sign Up <div className='pl-2 justify-center items-center flex'><FaArrowRight /></div></button></div>
            </div>
            <div className='md:w-[70%] w-full md:h-[98%] h-[85%] pt-1 flex justify-center'>
                <div className="flex flex-wrap w-[98%] h-[98%] justify-center md:gap-4 gap-2">
                <img className="md:w-[250px] w-[240px] md:h-[375px] h-[380px] md:mt-14" src={pic3} alt="" />
                <img className="md:w-[250px] w-[240px] md:h-[375px] h-[380px] md:mt-32" src={pic2} alt="" />
                <img className="md:w-[250px] w-[240px] md:h-[375px] h-[380px] md:mt-5" src={pic} alt="" />
                </div>
            </div>
            </div>
           </div>
        </div>
    </div>
  )
}

export default Training
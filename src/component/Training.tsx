import pic from "../assets/training.jpg"
import pic2 from "../assets/training 2.jpg"
import { FaArrowRight } from 'react-icons/fa6'

const Training = () => {
  return (
    <div className='w-full md:h-[120vh] h-[93vh] bg-[#F8FAFD] justify-center items-center flex'>
        <div className='w-[96%]  h-[98%]'>
            <h1 className='font-bold md:text-5xl text-4xl font-serif text-center pt-5'>Grooming Experience</h1>
           <div className='md:justify-center md:items-center md:pt-7 flex h-[98%]'>
           <div className=' w-[98%] h-[85%] flex justify-center items-center flex-col-reverse md:flex-row'>
            <div className='md:w-[30%] w-full md:h-[98%] pt-5 flex-wrap items-center flex'>
                <h1 className='font-extralight md:text-5xl text-3xl'>Enrol for your Training session</h1>
                <div className=' md:pt-14 pt-5'><button className='w-48 h-12 rounded-r-full rounded-l-full border border-black hover:bg-slate-300 justify-center items-center flex cursor-pointer bg-[#EAB308] text-black'>Sign Up <div className='pl-2 justify-center items-center flex'><FaArrowRight /></div></button></div>
            </div>
            <div className='md:w-[70%] w-full md:h-[98%] flex justify-center'>
                <div className="flex flex-wrap w-[98%] h-[98%] md:justify-center md:gap-4 gap-1">
                <img className="md:w-60 w-[24vh] md:h-[80vh] h-[40vh] mt-10" src={pic} alt="" />
                <img className="md:w-60 w-[24vh] md:h-[80vh] h-[40vh] mt-20" src={pic2} alt="" />
                <img className="md:w-60 w-[24vh] md:h-[80vh] h-[40vh] mt-2" src={pic} alt="" />
                </div>
            </div>
            </div>
           </div>
        </div>
    </div>
  )
}

export default Training
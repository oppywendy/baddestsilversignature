import pic from "../assets/office.jpg"
import { FaArrowRight } from 'react-icons/fa'

const Explore = () => {
  return (
    <div className='w-full h-[100vh] bg-transparent justify-center items-center flex'>
        <div className='md:w-[80%] w-full md:h-[70vh] h-[90vh] bg-black justify-center items-center border border-black flex md:rounded-3xl text-white'>
          <div className="flex w-[100%] h-[100%] rounded-3xl flex-col md:flex-row">
          <div className='md:w-[50%] w-full md:h-[100%] h-[45%]'>
                <h1 className='text-center md:text-4xl text-3xl font-bold md:pt-16 pt-8 text-[#EAB308]'>Explore the barbershop</h1>
                <p className='text-left md:text-2xl text-xl md:pl-8 pl-3 md:pt-8 pt-5'>Step in as a customer and leave as a masterpiece</p>
                <p className='text-left md:text-xl text-xl md:pl-10 pl-3 md:pt-5 pt-5'>All shop services are accompanied by a complimentary shot of tequila.</p>
                <div className='md:pl-32 pl-20 md:pt-14 pt-8'><button className='w-48 h-12 rounded-r-full rounded-l-full border border-black hover:bg-slate-300 justify-center items-center flex cursor-pointer bg-[#EAB308] text-black'><a href="https://wa.me/2349091737314">Book Appointment</a><div className='pl-2 justify-center items-center flex'><FaArrowRight /></div></button></div>
                </div>
            <div className='md:w-[50%] w-full md:h-[100%] h-[55%] justify-center items-center flex top-10'>
              <div className="justify-center items-center flex">
                <img className="md:w-[400px] w-[450px] h-[300px] rounded-2xl" src={pic} alt="" />
              </div>
            </div>

          </div>
        </div>
    </div>
  )
}

export default Explore
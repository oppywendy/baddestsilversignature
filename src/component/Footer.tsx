
import { CgMail } from 'react-icons/cg'
import { FaLocationDot, FaSquareInstagram, FaWhatsapp } from 'react-icons/fa6'
import { IoIosCall } from 'react-icons/io'

const Footer = () => {
  return (
    <div className='w-full md:h-[50vh] h-[90vh] bg-black justify-center items-center flex pt-3 pl-3'>
        <div className='flex w-[98%] h-[98%] flex-col md:flex-row md:text-lg text-sm'>
            <div className='md:w-[25%] h-[98%] text-yellow-500'>
            <h1 className='text-xl font-mono md:pb-3'>Company</h1>
            <p className='pt-2'>Home</p>
            <p className='pt-2'>About us</p>
            <p className='pt-2'>Services</p>
            <p className='pt-2'>Blog</p>
            </div>
            <div className='md:w-[25%] h-[98%] text-yellow-500'>
            <h1 className='text-xl font-mono md:pb-3'>Products</h1>
            <p className='pt-2'>E-commerce</p>
            <p className='pt-2'>Advertisement</p>
            <p className='pt-2'>Privacy policy</p>
            <p className='pt-2'>Terms of use</p>
            </div>
            <div className='md:w-[25%] h-[98%] text-yellow-500'>
            <h1 className='text-xl font-mono md:pb-3'>Resources</h1>
            <p className='pt-2'>Pricing</p>
            <p className='pt-2'>Support</p>
            <p className='pt-2'>Privacy policy</p>
            <p className='pt-2'>Terms of use</p>
            </div>
            <div className='md:w-[25%] h-[98%] text-yellow-500'>
                <h1 className='text-xl font-mono md:pb-3'>Contact</h1>
                <div className='flex justify-start items-center gap-2 pt-2'>
                <CgMail size={20} color='white' />
                <p>Baddestsilversignature@gmail.com</p>
                </div>
                <div className='flex justify-start items-center gap-2 pt-2'>
                <FaWhatsapp size={20} color='white' />
                <p>+23490737314</p>
                </div>
                <div className='flex justify-start items-center gap-2 pt-2'>
                <IoIosCall size={20} color='white' />
                <p>+2349116728661</p>
                </div>
                <div className='flex justify-start items-center gap-2 pt-2'>
                <FaSquareInstagram size={20} color='white' />
                <p>baddest_silver</p>
                </div>
                <div className='flex justify-start items-center gap-2 pt-2'>
                <FaLocationDot size={20} color='white' />

                <p>32 Ilasan new road lekki Lagos</p>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Footer
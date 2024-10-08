import logo from "../assets/bs_logo_white.png"

const Header = () => {
  return (
    <div className='md:h-[15vh] h-[8vh] w-full flex justify-center items-center bg-yellow-500 fixed'>
       <div className='w-[95%] h-[9vh] flex items-center justify-between'>
       <div className='flex md:gap-10 gap-2 items-center'>
       <div className="md:w-28 w-20"><img src={logo} alt="logo" /></div>
       <div><h1 className="font-medium text-black md:text-[30px] text-[9px]">BADDEST SILVER SIGNATURE</h1></div>
       </div>
       <div className="justify-center items-center flex gap-5">
       <div className="flex md:gap-5 gap-1 text-white md:text-[20px] text-xs">
        <a className="hover:text-red-600" href="#\">Home</a>
        <a className="hover:text-red-600" href="#">Services</a>
        <a className="hover:text-red-600" href="/Pricelist">Pricelist</a>
        <a className="hover:text-red-600" href="#">Gallery</a>
       </div>
       {/* <div className="hover:bg-slate-300 bg-yellow-600 rounded-lg">
       <div className="md:w-40 w-16 md:h-10 h-7 rounded-lg border border-black justify-center items-center flex md:text-lg text-sm text-black"><a  href="#">Book Appointment</a></div>

       </div> */}
       <div className="">
                <button className="hover:bg-slate-300 md:w-40 md:h-10 w-10 h-9 rounded-lg border border-black justify-center items-center flex cursor-pointer md:text-lg text-xs bg-yellow-600 text-black"><a href="#">Book Now</a></button>
        </div>
       </div>
       </div>
    </div>
  )
}

export default Header
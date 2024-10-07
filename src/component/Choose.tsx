

const Choose = () => {
  return (
    <div className='w-[100%] md:h-[80vh] h-[70vh] justify-center md:items-center flex'>
            <div className='w-[96%] md:h-[95%] h-[70vh] flex justify-center md:items-center flex-col md:flex-row'>
                <div className='md:w-[50%] w-full md:h-[90%] h-[15vh] items-center justify-center flex'><h1 className='font-serif text-5xl font-bold'>Why Choose Us?</h1></div>
                <div className='md:w-[50%] md:h-[90%] h-[50vh]'>
                    <ul className='font-extralight md:text-[40px] text-3xl md:pt-10 pt-5 md:h-[90%] h-[80%]'>
                            <li>Top-Notch Barbers and Stylists</li>
                            <li className='md:pt-5'>Affordable Prices</li>
                            <li className='md:pt-5'>Exceptional Services</li>
                            <li className='md:pt-5'>Eventful waiting sessions</li>
                            <li className='md:pt-5'>24/7 Customer Support</li>

                    </ul>
                    <div className='md:pl-32 pl-28 pt-6'><button className='w-60 h-12 rounded-lg border border-black justify-center items-center flex cursor-pointer bg-yellow-500 hover:bg-slate-300 text-black'>Book Appointment</button></div>
                </div>


            </div>

    </div>
  )
}

export default Choose
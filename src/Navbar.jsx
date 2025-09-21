import React from 'react'
import { PiLineVerticalThin } from "react-icons/pi";

function Navbar() {
  return (
    <div className='w-full px-[1.5rem] py-[1rem]  border-b-1 border-[#273440]'>
    <div className=' grid grid-cols-2 items-center justify-center'>
        <div className='pl-[2rem]'>  <img src="/images/star.png" className="w-10 h-10 bg-white p-0 m-0" alt="" /> 
        </div>
         <div className='flex gap-[1.6vw] justify-center items-center '>
                {["Home", "Marketplace", "Artist", "Community", "Blog"].map((items, index)=>(
                    <div key={index} className=' group relative text-[#273440] text-[1vw] font-semibold hover:text-[#4a79a8] cursor-pointer'>{items}
                     <span className="absolute left-0 bottom-0 block h-[2px] w-0 bg-[#4a79a8] transition-all duration-300 group-hover:w-full"></span></div>
                ))}
              <span className=" group px-6 relative  py-2  rounded-full cursor-pointer font-semibold bg-[#273440] text-white overflow-hidden  ">
                <span className="absolute inset-0 bg-[#D8d1cb] translate-y-[-100%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></span>
                <span className='relative z-10 transition-colors duration-500 group-hover:text-[#273440]'>Sign Up</span>
                
              </span>

            <span className='grid ' > <PiLineVerticalThin className='text-3xl block leading-0 ' /></span>
            <div className=' cursor-pointer'>Login</div>
             
        </div>
        

    </div>
    </div>
  )
}

export default Navbar
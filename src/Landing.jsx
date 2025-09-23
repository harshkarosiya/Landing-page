import React from 'react'
import { GiPlayButton } from "react-icons/gi";




function Landing() {
  return (
    <div className='pt-[0.5rem] pb-6 border-b-1 relative border-[#C1bab8] w-full'>
        <div className='grid grid-cols-2'>
           <div className=' title  px-6'>
               <div className='pl-4'>
                <span className="text-[4rem] capitalize font-semibold bg-gradient-to-r from-purple-900 via-pink-500 to-orange-300 bg-clip-text text-transparent  "  style={{ fontFamily: "'Dancing Script', cursive" }}  >Unlocks</span> <br/>
                <span className='text-[4.06rem] leading-none inline tracking-wider capitalize font-bold bg-gradient-to-r from-purple-900 via-pink-500 to-orange-300 bg-clip-text text-transparent '>The digital </span>
                <span className='text-[4.06rem] leading-none tracking-wider capitalize font-bold bg-gradient-to-r from-purple-900 via-pink-500 to-orange-300 bg-clip-text text-transparent'>reniassance</span>

                <div className='capitalize font-semibold text-[#273440] pt-6 leading-8 tracking-wide'>join the revolution, embrace the digital revolution and <br/> bacame a part of the ever-evolving NFT ecosystem</div>
            </div>
         
            

           <div className="grid grid-cols-3  pt-6 pl-5">
                <div className="w-[11rem] relative border-[2px] border-[#F9f3ee] rounded-t-full rounded-b-[6px] bg-[#ded3cacf] shadow-lg text-center transform transition duration-300 hover:scale-105 hover:bg-[#c1bab8]">

                <img src="/images/beer.png" alt="Bear" className="w-[6rem] h-[6rem] mx-auto " />

                <h3 className="text-lg font-semibold mt-4">Bear</h3>
                <p className="text-sm text-gray-700">by Andrew Garf</p>
                <div className="mt-4 bg-white overflow-hidden w-full rounded-t-[3rem] py-3">
                    <span className="font-bold text-gray-800">40$</span>
                </div>
            </div>

            <div className="w-[11rem] border-[2px] relative border-[#F9f3ee] rounded-t-full rounded-b-[6px] bg-[#ded3cacf] shadow-md  text-center transform transition duration-300 hover:scale-105 hover:bg-[#c1bab8]">

                <img src="/images/Lion.png" alt="Bear" className="w-[6rem] h-[6rem] mx-auto pt-2 " />

                <h3 className="text-lg font-semibold mt-4">Lion</h3>
                <p className="text-sm text-gray-700">by Jen Stark</p>
                <div className=" absolute bottom-0 bg-white overflow-hidden w-full rounded-t-[3rem] py-3">
                    <span className="font-bold text-gray-800">40$</span>
                </div>
            </div>
                
            <div className="w-[11rem] border-[2px] relative border-[#F9f3ee] rounded-t-full rounded-b-[6px] bg-[#ded3cacf] shadow-md  text-center transform transition duration-300 hover:scale-105 hover:bg-[#c1bab8]">

                <img src="/images/Cat.png" alt="Bear" className="w-[6rem] h-[6rem] mx-auto pt-2" />

                <h3 className="text-lg font-semibold mt-4">Cats</h3>
                <p className="text-sm text-gray-700">by Casey Reas</p>
                <div className=" absolute bottom-0 bg-white overflow-hidden w-full rounded-t-[3rem] py-3">
                    <span className="font-bold text-gray-800">40$</span>
                </div>
            </div>
          </div>

        
        </div>


        <div className='relative w-full '>
            <div className='absolute  bottom-32 left-[2.5rem] border-6 border-[#273440] rounded-full transform transition-all duration-300 ease-in-out hover:scale-105 hover:bg-opacity-70 flex items-center justify-center '>

            <div className="px-7 border-1 border-[#e9bb71] py-4  text-[1.5rem]  rounded-full cursor-pointer font-semibold bg-[#273440] text-[#e9bb71] " > Start <GiPlayButton className='inline ml-1 text-[#e9bb71] text-4xl '/>  </div>
            </div>
                
             
        

        

            <div className='absolute block right-[9.8rem] '>


                
                <img src="/images/hand.png" className='w-[30rem] h-[40rem]  inline-block rotate-[12deg] ' alt="" />

            
              <div className=' absolute right-0 bottom-24 border-[1em] border-[#d8d1cbe3] rounded-[0.9rem] '>
                
                <img src="/images/Barcode.png" className='w-[25rem] h-[4rem] rounded-[0.9rem]' alt="" />
                
              </div>
              
              
            </div>
                

            
                
                <div className='absolute top-6 left-30 '>
                    <img src="/images/stone.png" className='w-[16rem] h-[12rem] rotate-[-6deg] ' alt="" />
                </div>

                
                
        </div>
    </div>

        <div className='  absolute  right-0 top-[10rem] text-[6.2rem] text-[#c1bab882] rotate-[90deg]'>MIFGY13</div>

     
    </div>
  )
}

export default Landing
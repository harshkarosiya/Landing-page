import React from 'react'

function Footer() {
  return (
    <div className='bg-[#d8d1cb9d] w-auto h-full justify-center items-center '>
        <div className=' flex  '>
         {["Join the Revolution", "Future is Here", "NFT World", "Rule the Game", "We are NFT"].map((items, indexes)=>(
            <div key={indexes}  className='flex w-auto  gap-6  justify-center items-center  py-3'>
          <img src="/images/star.png" className=' block w-[4rem] h-[4rem] ' alt="" />
                 
          <span className='text-[1.8rem] text-[#1e2b38] pr-2 font-semibold'>{items}</span>
        </div>
         ))}
          <img src="/images/star.png" className=' block w-[4rem] h-[4rem] pt-4  ' alt="" />

         
        </div>
    </div>
  )
}

export default Footer
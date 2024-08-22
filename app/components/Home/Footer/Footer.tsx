import Link from 'next/link';
import React from 'react'
import { LuMapPin } from "react-icons/lu";

const Footer = () => {
  return (
    <div className='pt-[2rem] pb-[1.5rem] bg-gray-900'>
      <div className='w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2
      lg:grid-cols-3 gap-[2rem] border-b-[1.4px] pb-5 border-gray-600
       border-opacity-40'>
        <div>
            <div className="text-[35px] font-semibold text-[#FF5F09]">
            <span className='text-[#F5F5F5]'>Thank</span> You
            </div>
            <h1 className='text-[14px] mt-[0.5rem] text-white opacity-70'>
            </h1>
        </div>
        {/*2nd parts */}
          <div className='md-mx-auto'>
            <h1 className='text-white font-semibold mb-[1.4rem] text-[17px]'>
              Quick Links
            </h1>
            <p className='text-[15px] text-white opacity-80 mb-[1rem] cursor-pointer hover:text-yellow-300'>
              <Link href="/">Profile</Link>
            </p>
            <p className='text-[15px] text-white opacity-80 mb-[1rem] cursor-pointer hover:text-yellow-300'>
            <Link href="/">Skills</Link>
            </p>
            <p className='text-[15px] text-white opacity-80 mb-[1rem] cursor-pointer hover:text-yellow-300'>
              Project
            </p>
            <p className='text-[15px] text-white opacity-80 mb-[1rem] cursor-pointer hover:text-yellow-300'>
              Experiences
            </p>
          </div>
          {/* 3rd parts */}
          <div className='lg:mx-auto'>
            <h1 className='text-white font-semibold mb-[1.4rem] text-[17px]'>
              Address
            </h1>
            <div className='flex items-center mt-[1rem] space-x-2 '>
              <LuMapPin className='w-[1rem] h-[1rem] text-yellow-300'/>
              <p className='text-[17px] font-normal text-white opacity-75'>
              Bandung, Indonesia
              </p>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Footer
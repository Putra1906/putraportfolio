import React from 'react'
import Heading from '../../helper/Heading'
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import Link from 'next/link';

const Contact = () => {
  return (
    <div className='pt-[5rem] pb-[3rem]'>
      <Heading headingPrimary='Please Contact'
      headingSub='Interest to Work With Me?'/>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-[2rem] mt-[4rem] items-center w-[80%] m-auto'>
        {/* Info Content */}
        <div>
          <p className='text-[17px] text-white opacity-75'></p>
          <h1 className='mt-[0.6rem] text-white p-2 sm:p-0 loading-{3.5rem] text-[30px] 
          lg:text-[38px] text-[27px] xl:text-[45px]' >Lets <span className='text-[#FF5F09] font-bold'>Work</span> Together
          </h1>
          <p className='text-[15px] text-white mt-[1rem] opacity-75'>
            Create a wonderful project
          </p>
          
          <Link href="https://www.linkedin.com/in/putra-alpa-omega-bangun-18222b241/" >
          <FaLinkedin cursor='pointer' className='mt-[2rem] mb-[2rem] text-[60px] text-white' />
          </Link>
          <Link href="https://www.instagram.com/ptraalpha_/" >
          <FaInstagram cursor='pointer' className='mt-[2rem] mb-[2rem] text-[60px] text-white' />
          </Link>
          <Link href="https://wa.me/6285770440657" >
          <FaWhatsapp cursor='pointer' className='mt-[2rem] mb-[2rem] text-[60px] text-white' />
          </Link>
          
        </div>
        {/* Form Content */}
        <div>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-[1rem] items-center'>
            <input type="text" 
            placeholder='Name' 
            className='py-[0.7rem] outline-none text-white
            bg-gray-800 rounded-md px-4'/>
            <input type="email" 
            placeholder='Email' 
            className='py-[0.7rem] outline-none text-white
            bg-gray-800 rounded-md px-4'/>
          </div>
            <input type="text" 
            placeholder='Subject' 
            className='py-[0.7rem] mt-[1.5rem] w-full mb-[1.5rem] outline-none text-white
            bg-gray-800 rounded-md px-4' />
            <textarea rows={4} placeholder='Message'className='py-[0.7rem] w-full mb-[1.5rem] outline-none text-white
            bg-gray-800 rounded-md px-4'  ></textarea>
            <button className='py-[0.7rem] mb-[1.5rem] w-full outline-none text-white bg-[#FF5F09]
            hover:bg-yellow-300 rounded-md px-4 '>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default Contact
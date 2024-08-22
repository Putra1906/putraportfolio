import React from 'react'
import { BiCheckSquare } from 'react-icons/bi'

interface Props {
  text1:string;
  text2:string;
}

const AboutInfo = ({text1,text2}:Props) => {
  return (
    <div data-aos="zoom-in" className='block sm:flex items-center mb-[2rem] justify-between'>
       <div className='flex mb-4 sm:mb-0 items-center space-x-3'>
        <BiCheckSquare className='w-[2rem] h-[2rem] text-yellow-300'/>
        <span className='text-[17px] text-white'>{text1}</span>
       </div>
       <div data-aos="zoom-in" className='flex mb-4 sm:mb-0 items-center space-x-3'>
        <BiCheckSquare className='w-[2rem] h-[2rem] text-yellow-300'/>
        <span className='text-[17px] text-white'>{text2}</span>
       </div>
    </div>
  )
}

export default AboutInfo
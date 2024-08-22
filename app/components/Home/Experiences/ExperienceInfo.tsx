import React from 'react'
import { GoDotFill } from "react-icons/go";

interface Props {
  text1:string;
}

const ExperienceInfo = ({text1}:Props) => {
  return (
    <div data-aos="zoom-in" className='block sm:flex items-center mb-[2rem] justify-between'>
       <div className='flex mb-4 sm:mb-0 items-center space-x-3'>
        <GoDotFill className='w-[2rem] h-[2rem] text-yellow-300'/>
        <span className='text-[17px] text-white'>{text1}</span>
       </div>
    </div>
  )
}

export default ExperienceInfo
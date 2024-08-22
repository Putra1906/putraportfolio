import React from 'react'
import Image from 'next/image'

interface Props {
  image:string;
  title:string;
}

const SkillsCard = ({image,title}:Props) => {
  return (
    <div className='shadow-md hover:scale-110 transition-all duration-500 bg-[#FF5F09] p-8 rounded-lg'>
      {/* images */}
      <Image 
      src={image} 
      alt={title} 
      width={100} 
      height={100} 
      className="mt-[2rem] mb-[2rem] mx-auto"/>
      <div className='text-center'>
        {/* title */}
        <h1 className='font-semibold text-[26px] text-white'>{title}</h1>
        <p className='mt-[0.5rem] text-white text-opacity-60'>
        </p>
      </div>
    </div>
  )
}

export default SkillsCard
import React from 'react'
import Heading from '../../helper/Heading'
import Image from 'next/image'

const Project = () => {
  return (
    <div className='pt=[4rem] pb-[3rem]'>
      <Heading headingPrimary="My Projects"
      headingSub=''/>
      <div className='w-[80%] pt-[2rem] mx-auto grid grid-cols-1
      md:grid-cols-2 lg:grid-cols-3 gap-[2rem]'>
        <div>
          {/* Images*/}
          <div className='transform cursor-pointer hover:-translate-y-6 
          transition-all duration-200 relative 
          w-[100%] h-[200px] md:h-[300px]'>
              <Image src="/images/IOT PROJECT.png" alt='project' width={300} height={300} 
              className='object-contain w-[100%] h-[100%]'/>
          </div>
        </div>
        <div>
          {/* Images*/}
          <div className='transform cursor-pointer hover:-translate-y-6 
          transition-all duration-200 relative 
          w-[100%] h-[200px] md:h-[300px]'>
              <Image src="/images/LANDINGPAGEMBC PROJECT.png" alt='project' width={4000} height={300} 
              className='object-contain w-[100%] h-[100%]'/>
          </div>
        </div>
        <div>
          {/* Images*/}
          <div className='transform cursor-pointer hover:-translate-y-6 
          transition-all duration-200 relative 
          w-[100%] h-[200px] md:h-[300px]'>
              <Image src="/images/HOTEL WEBSITE PROJECT.jpg" alt='project' width={4000} height={300} 
              className='object-contain w-[100%] h-[100%]'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project
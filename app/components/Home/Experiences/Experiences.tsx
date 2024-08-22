import React from 'react'
import Heading from '../../helper/Heading'
import ExperienceInfo from './ExperienceInfo'

const Experiences = () => {
  return (
    <div className='mt-[5rem] mb-[3rem]'>
      <Heading 
      headingPrimary="My Experiences" 
      headingSub =""/>
      <div className='w-[80%] mt-[5rem] md:mt-[3rem] 
      mx-auto grid grid-cols-1 xl:grid-cols-2 items-center
      gap-[4rem]'>
        {/* Personal Information */}
        <div>
          <h1 className='mb-[1.4rem] text-[27px] font-semibold text-[#FF5F09]'>
            </h1>
          <ExperienceInfo
            text1="Google Developer Student Club (GDSC)"
          />
          <ExperienceInfo
            text1="IEEE Students"
          />
          <ExperienceInfo
            text1="Physics Tentor Community"
          />
        </div>
      </div>
    </div>
  )
}

export default Experiences
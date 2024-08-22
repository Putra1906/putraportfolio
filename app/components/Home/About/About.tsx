import React from 'react'
import Heading from '../../helper/Heading'
import AboutInfo from './AboutInfo'
import Image from 'next/image'
import { FaCircleDot } from "react-icons/fa6";


const About = () => {
  return (
    <div className='mt-[5rem] mb-[3rem]'>
      <Heading 
      headingPrimary="About Me" 
      headingSub=""/>
      <div className='w-[80%] mt-[5rem] md:mt-[3rem] 
      mx-auto grid grid-cols-1 xl:grid-cols-2 items-center
      gap-[4rem]'>
        {/* Personal Information */}
        <div>
          <h1 data-aos="zoom-in" className='mb-[1.4rem] text-[27px] font-semibold text-[#FF5F09]'>Student Info :</h1>
          <AboutInfo
            text1="5th Semester at Telecommunication Engineering Major"
            text2="Telkom University, Bandung"
          />
          <AboutInfo
            text1="GPA : 3.74"
            text2="Gold Medalist In Physics Olympiad"
          />
          
          <h1 data-aos="zoom-in" className='mb-[1.4rem] text-[27px] font-semibold text-[#FF5F09]'>
            Soft Skills : 
            </h1>
          <AboutInfo
            text1 ="Management time"
            text2="Problem Solving"
          />
          <AboutInfo
            text1="Analytical Thinking"
            text2="Good communication"
          />
          <AboutInfo
            text1="Able to work in team"
            text2="Creative Thinking"
          />
        </div>
        {/* Image */}
        <Image data-aos= "zoom-in" data-aos-anchor-placement="top-center" src="/images/bussinesman.png" alt="About" width={200} height={200} className="mx-auto"/>
      </div>
    </div>
  )
}

export default About
import React from 'react'
import Heading from '../../helper/Heading'
import SkillsCard from './SkillsCard'

const Skills = () => {
  return (
    <div className='pt-[5rem] pb-[3rem]'>
      {/* Heading */}
      <Heading 
      headingPrimary="What Can I Do?"
      headingSub=""
      />
      <div className='w-[80%] mt-[4rem] mx-auto grid grid-cols-1 
      lg:grid-cols-2 xl:grid-cols-3 gap-[3rem] items-center'>
        <div data-aos="fade-right" data-aos-anchor-placement="top-center">
          {/* Skills */}
            <SkillsCard image="/images/FRONTEND.png" title="Next JS & React Developer" />
        </div>
        <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay='200'>
            <SkillsCard image="/images/CICD.png" title="CI/CD" />
        </div>
        <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay='400'>
            <SkillsCard image="/images/CLOUD ENGINEER.png" title="Cloud Engineer" />
        </div>
        <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay='600'>
            <SkillsCard image="/images/SECURITY ANALYST.png" title="Security Analyst" />
        </div>
        <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay='800'>
            <SkillsCard image="/images/NETWORK ENGINEER.png" title="Network Engineer" />
        </div>
        <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay='1000'>
            <SkillsCard image="/images/API DEVELOPER.png" title="API Developer" />
        </div>
      </div>
    </div>
  )
}

export default Skills
import React from 'react'
import Heading from '../../helper/Heading'
import ToolsCard from './ToolsCard'

const Tools = () => {
  return (
    <div className='pt-[5rem] pb-[3rem]'>
      <Heading headingPrimary="Tools"
      headingSub=''/>
      <div className='grid w-[80%] mt-[5rem] mx-auto 
      grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[1rem] 
      items-center'>
        {/* Tools */}
        <div data-aos="flip-left" data-aos-anchor-placement="top-center" data-aos-delay="200">
          <ToolsCard image="/images/ToolsImage/Jenkins.PNG" percent="55%" title="Jenkins"/>
        </div>
        <div data-aos="flip-left" data-aos-anchor-placement="top-center" data-aos-delay="400">
          <ToolsCard image="/images/ToolsImage/Git.PNG" percent="70%" title="Git"/>
        </div>
        <div data-aos="flip-left" data-aos-anchor-placement="top-center" data-aos-delay="600">
          <ToolsCard image="/images/ToolsImage/Kubernetes.PNG" percent="30%" title="Kubernetes"/>
        </div>
        <div data-aos="flip-left" data-aos-anchor-placement="top-center" data-aos-delay="800">
          <ToolsCard image="/images/ToolsImage/Docker.PNG" percent="75%" title="Docker"/>
        </div>
        <div data-aos="flip-left" data-aos-anchor-placement="top-center" data-aos-delay="1000">
          <ToolsCard image="/images/ToolsImage/CIRCLECI.PNG" percent="40%" title="Circle CI"/>
        </div>
        <div data-aos="flip-left" data-aos-anchor-placement="top-center" data-aos-delay="1200">
          <ToolsCard image="/images/ToolsImage/AWS.PNG" percent="50%" title="AWS"/>
        </div>
        <div data-aos="flip-left" data-aos-anchor-placement="top-center" data-aos-delay="1400">
          <ToolsCard image="/images/ToolsImage/PROMOTHEUS.PNG" percent="55%" title="Promotheus"/>
        </div>
        <div data-aos="flip-left" data-aos-anchor-placement="top-center" data-aos-delay="1600">
          <ToolsCard image="/images/ToolsImage/NEXTJS.PNG" percent="50%" title="Next JS"/>
        </div>
      </div>
    </div>
  )
}

export default Tools

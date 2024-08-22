import React from 'react'
import Heading from '../../helper/Heading'
import CertificateSlider from './CertificateSlider'

const Certificate = () => {
  return (
    <div className='pt-[5rem] pb=[3rem]'>
      <Heading headingPrimary='Certifications'
      headingSub=''/>
      <div className='pt-[5rem] mb-[4rem] w-[80%] mx-auto'>
        {/* Certificate Slider */}
        <CertificateSlider/>
      </div>
    </div>
  )
}

export default Certificate
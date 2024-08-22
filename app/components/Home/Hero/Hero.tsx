import React from 'react'
import Image from 'next/image'
import { BiCheckCircle} from 'react-icons/bi'
import { FaStar } from 'react-icons/fa'
import Link from 'next/link'
import { FaDownload } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className='h-[87vh] flex justify-center flex-col'>
      <div className='w-[80%] mx-auto grid grid-cols-2 lg:grid-cols-5 items-center gap-[5rem]'>
        <div className='col-span-2 hidden sm:block'>
          {/* Image */}
          <div data-aos="zoom-in" className='mx-auto w-[150px] h-[150px] md:w-[200px] md:h-[200px] lg:w-[300px] 
          lg:h-[300px] xl:w-[400px] xl:h-[400px]'>
            <Image src="/images/PROFILE.png" alt="Hero" width={400} height={400} className="w-[100%] h-[100%]"/>
          </div>

          {/* complete order number */}
          <div data-aos="fade-right" data-aos-delay="200" className='bg-[#FF5F09] flex p-2 rounded-lg justify-between items-center'>
            <FaStar className='w-[2.5rem] h-[2.5rem] lg:w-[2rem] lg:h-[3rem] 
            xl:w-[3rem] text-yellow-200 '/>
            <h1 className='text-[20px] xl:text-[30px] text-white font-bold '>DevOps Engineer Enthusiast</h1>
          </div>
        </div>
        <div className='col-span-3'>
            <h1 data-aos="fade-right" data-aos-delay="400" className='text-[20px] xl:text-[26px] text-white font-semibold'>
              Hello Everyone !</h1>
            <h1 data-aos="fade-left" data-aos-delay="600" className='text-[35px] lg:text-[45px] xl:text-[60px] font-bold text-white '>
              I`m <span className='text-[#FF5F09]'>Putra Alpa Omega Bangun</span></h1>
            <h1 data-aos="fade-left" data-aos-delay="800" className='text-[24px] lg:text-[28px] xl:text-[35px] text-white text-opacity-80 '>
              Telecommunication Engineering Student
            </h1>
            <p data-aos="fade-left" data-aos-delay="1200" className='text-[16px] xl:text-[18px] text-white text-opacity-60 mt-[1.5rem]'>
            Student with a strong interest in logical and analytical thinking. Currently studying disciplines related 
            to cybersecurity, computer networks,DevOps Engineering, and Web Developer. 
            Committed to continuously developing technical skills and insights in the field
             of information and communication technology.
            </p>
            <div>
              <Link href='/images/CV.pdf' download="CV" target='_blank'>
                <button data-aos="zoom-in" data-aos-delay="1200" className='group mt-[2rem] relative h-12 w-48 overflow-hidden rounded-full bg-[#FF5F09] text-lg shadow'>
                <span className='absolute inset-0 w-3 bg-amber-400 transition-all duration-300 ease-out
                group-hover:w-full block'></span>
                <span className='relative flex items-center justify-center space-x-3 text-white'>
                <FaDownload /><span>Download My CV</span>
                </span>
                </button>
              </Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
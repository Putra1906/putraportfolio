import Link from 'next/link';
import React from 'react';
import { HiBars3BottomRight } from 'react-icons/hi2';
import Contact from '../Contact/Contact';

interface Props {
  openNav:()=>void
}

const Nav = ({ openNav }:Props) => {
  return (
    <div className="h-[13vh] bg-[#0B0C10]">
      <div className="flex items-center justify-between w-[90%] xl:w-[80%] h-full mx-auto">
        {/* Logo */}
        <div className="text-[35px] font-semibold text-[#FF5F09]">
        <span className='text-[#F5F5F5]'>My</span> Portfolio
        </div>
        {/* Nav Links */}
        <ul className='lg:flex hidden text-white items-center space-x-6 xl:space-x-10'>
          <div>
          <Link href="#">
            <li className='navlink'>
            Profile
            </li>
          </Link>
          </div>
          
          <li className='navlink'>
            <a href='#'>Skills</a>
          </li>
          <li className='navlink'>
            <a href="#" >Project</a>
          </li>
          <li className='navlink'>
            <a href="#" >Experience</a>
          </li>
          <li className='navlink'>
            <a href='#'>Contact</a>
          </li>
        </ul>
        {/* Download and Menu */}

        {/* Burger Menu */}
        <div>
        <HiBars3BottomRight onClick={openNav} className='w-[2rem] text-white h-[2rem] lg:hidden'/>
        </div>
      </div>
    </div>
  )
}

export default Nav
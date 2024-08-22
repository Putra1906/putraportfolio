"use client";

import React, { useEffect } from 'react'
import Hero from './Hero/Hero'
import About from './About/About'
import Skills from './Skills/Skills'
import Tools from './Tools/Tools'
import Project from './Projects/Project'
import Experiences from './Experiences/Experiences'
import Certificate from './Certificates/Certificate'
import Contact from './Contact/Contact'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Footer from './Footer/Footer';

const Home = () => {

  useEffect(()=>{
    const initAOS = async ()=>{
      await import('aos')
      AOS.init({
        duration:1000,
        easing:"ease",
        once:true,
        anchorPlacement: "top-bottom",
      });
    };

    initAOS();
  },[]);
  

  return (
    <div className='overflow-hidden'>
      <Hero/>
      <About/>
      <Skills/>
      <Tools/>
      <Project/>
      <Experiences/>
      <Certificate/>
      <Contact/>
    </div>
  )
}

export default Home
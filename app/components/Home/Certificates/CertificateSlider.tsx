"use client";
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Description from './Description';

const CertificateSlider = () => {

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
  return <Carousel 
  additionalTransfrom={0} 
  arrows={true} 
  autoPlay={true} 
  autoPlaySpeed={3500} 
  centerMode={false}
  infinite
  responsive={responsive}
  itemClass="item"
  >
      {/* Description */}
      <Description image="/images/CERTIFICATE/SERTIF1.png" name="Sertif1" />
      <Description image="/images/CERTIFICATE/SERTIF2.png" name="Sertif2" />
      <Description image="/images/CERTIFICATE/SERTIF3.png" name="Sertif3" />
      <Description image="/images/CERTIFICATE/SERTIF4.png" name="Sertif4" />
      <Description image="/images/CERTIFICATE/SERTIF6.png" name="Sertif6" />
      <Description image="/images/CERTIFICATE/SERTIF7.png" name="Sertif7" />
      <Description image="/images/CERTIFICATE/SERTIF8.png" name="Sertif8" />
  </Carousel> 
    
  
};

export default CertificateSlider;
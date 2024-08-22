import Image from 'next/image';
import React from 'react';

interface Props {
  image:string;
  name:string;
}

const Description = ({image,name}:Props) => {
  return (
    <div className='flex flex-col text-center justify-center'>
      <Image src={image} width={700} height={200} alt={name} 
      objectFit='contain' className='mx-auto mb-[2rem]'/>
    </div>
  )
}

export default Description
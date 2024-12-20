"use client"
import React from 'react'
import Image from 'next/image'


const page = () => {
  return (
    
    <div className='bg-gradient-to-r from-blue-300 to-pink-300 mobile:flex-col' >
        <h1 className='flex justify-center text-2xl font-bold pt-12'>Designed and stiched by Sadia</h1>
        <div className='flex justify-center items-center gap-10 pt-24 mobile:flex-col'>
            <Image
            src={"/images/frock1.jpeg"}
            alt="frock"
            width={350}
            height={210}/>
            <Image
            src={"/images/frock2.jpeg"}
            alt="frock"
            width={350}
            height={210}/>
            <Image
            src={"/images/design4-pic.jpeg"}
            alt="frock"
            width={350}
            height={210}/></div>

        <div className='flex justify-center items-center gap-12 pt-24 mobile:flex-col'>
            <Image
            src={"/images/frock3.jpeg"}
            alt="frock"
            width={350}
            height={210}/>
            <Image
            src={"/images/frock6.jpeg"}
            alt="frock"
            width={350}
            height={210}/>
            <Image
            src={"/images/frock7.jpeg"}
            alt="frock"
            width={350}
            height={210}/></div>

          <div className='flex justify-center items-center gap-12 pt-24 mobile:flex-col'>
            <Image
            src={"/images/design1-pic.jpeg"}
            alt="frock"
            width={350}
            height={210}/>
            <Image
            src={"/images/frock5.jpeg"}
            alt="frock"
            width={350}
            height={210}/>
            <Image
            src={"/images/frock8.jpeg"}
            alt="frock"
            width={350}
            height={210}/>
        </div>
        
      
    </div>
    
  )
}

export default page;

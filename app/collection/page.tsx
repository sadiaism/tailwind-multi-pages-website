"use client"
import React from 'react'
import Image from 'next/image'
import Header from '../components/Header'

const page = () => {
  return (<section>
    <Header/>
    <div className='bg-gradient-to-r from-blue-300 to-pink-300 h-screen'>
        <h1 className='flex justify-center text-2xl font-bold pt-12'>Designed and stiched by Sadia</h1>
        <div className='flex flex-col justify-center items-center gap-12 pt-24'>
            <Image
            src={"/images/frock1.jpeg"}
            alt="frock"
            width={500}
            height={500}/>
            <Image
            src={"/images/frock2.jpeg"}
            alt="frock"
            width={500}
            height={500}/>
            <Image
            src={"/images/frock5.jpeg"}
            alt="frock"
            width={500}
            height={500}/>
            <Image
            src={"/images/frock3.jpeg"}
            alt="frock"
            width={500}
            height={500}/>
            <Image
            src={"/images/frock6.jpeg"}
            alt="frock"
            width={500}
            height={500}/>
            <Image
            src={"/images/frock7.jpeg"}
            alt="frock"
            width={500}
            height={500}/>
        </div>
        
      
    </div>
    </section>
  )
}

export default page;

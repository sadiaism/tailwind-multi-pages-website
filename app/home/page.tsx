"use client"
import React from 'react'
import Image from 'next/image'

const Home = () => {
  return (
    
    <div className='flex flex-col items-center bg-gradient-to-r from-blue-300 to-pink-200 text-2xl font-medium'>
      <div className='mt-12 font-bold'><h1>Welcome to the Kids Collection</h1></div>
     
      <div className='flex gap-12 mt-12 mb-12 mobile:flex-col'>
      <Image
      src={"/images/kids2.jpg"}
      alt="girl"
      width={350}
      height={210}/>
      <Image
      src={"/images/kids1.jpg"}
      alt="girl"
      width={350}
      height={210}/>
      <Image
      src={"/images/kids3.jpg"}
      alt="girl"
      width={350}
      height={210}/></div>

      <div className='flex gap-12 mt-12 mb-12 mobile:flex-col'>
      <Image
      src={"/images/kids7.jpeg"}
      alt="girl"
      width={350}
      height={210}/>
      <Image
      src={"/images/kids4.jpeg"}
      alt="girl"
      width={350}
      height={210}/>
      <Image
      src={"/images/kids6.jpeg"}
      alt="girl"
      width={350}
      height={210}/>
      


      </div>
    </div>
    
  
  )
}

export default Home

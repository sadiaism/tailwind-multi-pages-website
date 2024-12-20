"use client"
import React from 'react'


const page = () => {
  return (
    
    
    <div className='flex flex-col items-center gap-4 h-screen bg-gradient-to-r from-blue-300 to-pink-300 p-24'>
        <h1 className='flex justify-center pb- text-2xl font-bold'>Contact For Me</h1>
       
                    <label htmlFor="name">Name</label>
                    <input type="text"
                    className='h-[40px] w-[540px] bg-transparent border border-black mobile:w-[350px]'
                    id="name" />

                    <label htmlFor="email">Email</label>
                    <input type="text"
                    className='h-[40px] w-[540px] bg-transparent border border-black mobile:w-[350px]'
                    id="email"/>

                    <label htmlFor="message">Message</label>
                    <input type="text"
                    className='h-[70px] w-[540px] bg-transparent border border-black mobile:w-[350px]'
                    id="message"/>

                    <button className='bg-transparent border border-black w-[100px] h-[50px] hover:bg-pink-300'>send</button>

                    
                

      
    </div>
    
  )
}

export default page

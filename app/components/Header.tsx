import React from 'react'
import Link from 'next/link'
import { useState } from 'react'
import {AiOutlineMenu ,AiOutlineClose} from "react-icons/ai"

const Header = () => {
     const[isMenuOpen ,setIsMenuOpen]=useState(false)

     const toggleMenu =()=>{
        setIsMenuOpen(!isMenuOpen)
     }
    



  return (
    <div className='flex justify-between items-center bg-gradient-to-r from-blue-200 to-pink-200 p-11'>
        
        <h1 className='text-2xl font-bold'>Kids Collection By Sadia Alamdaar</h1>
        

      

        {/* navbar desktop */}
        <nav className='flex gap-10 text-2xl mobile:hidden'>
            <Link href="./home" className='hover:text-blue-500' target="_blank" >Home</Link>
            <Link href="./about"  className='hover:text-blue-500'target="_blank">About</Link>
            <Link href="./collection" className='hover:text-blue-500' target="_blank">Collection</Link>
            <Link href="./contact" className='hover:text-blue-500' target="_blank">Contact</Link>
        </nav>


        <div className='lg:hidden' onClick={toggleMenu}>
            {isMenuOpen ?<AiOutlineClose size={30}/>:
            <AiOutlineMenu size={30}/>

            }</div>

        {/* mobile navbar */}
       {
        isMenuOpen && (
           <nav className='lg:hidden mobile:flex flex-col items-center gap-4'>
            <Link href="./home" className='hover:text-blue-500' onClick={toggleMenu}>Home</Link>
            <Link href="./about"  className='hover:text-blue-500' onClick={toggleMenu}>About</Link>
            <Link href="./collection" className='hover:text-blue-500' onClick={toggleMenu}>Collection</Link>
            <Link href="./contact"  className='hover:text-blue-500' onClick={toggleMenu}>Contact</Link>
            </nav>
        )
       }
        
      
    </div>
  )
};

export default Header

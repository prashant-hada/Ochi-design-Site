import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
  
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-0.001" className='w-full py-24 bg-[#004D43] rounded-tl-3xl rounded-tr-3xl'>
        <div className="text border-t-2 border-b-2 flex overflow-hidden whitespace-nowrap">
        <motion.h1 
          initial={{x:"0"}}
          animate={{x:"-100%"}}
          transition={{repeat: Infinity, ease: "linear", duration:10}}
          className='text-[20vw] uppercase  font-semibold leading-none tracking-tighter pr-4'>We are ochi</motion.h1>
        <motion.h1 
          initial={{x:"0"}}
          animate={{x:"-100%"}}
          transition={{repeat: Infinity,  ease: "linear", duration:10}}
          className='text-[20vw] uppercase  font-semibold leading-none tracking-tighter'>We are ochi</motion.h1>
        </div>
    </div>
  )
}   

export default Marquee
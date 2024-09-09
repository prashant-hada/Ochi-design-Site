import { motion } from 'framer-motion';
import React from 'react'
import { GoArrowUpRight } from "react-icons/go";

function LandingPage() {

  return (
    <div data-scroll data-scroll-section data-scroll-speed="-0.55" className='w-full h-screen bg-zinc-100 pt-2 text-[#212121] '> 
        <div className="textstucture mt-40 px-14">
            {
                ["WE CREATE","EYE-OPENING","PRESENTATIONS"].map((item, index)=>{
                    return  <div className="masker">
                                <div className="w-fit flex items-baseline">
                                    {index===1 && (<motion.div initial={{width:0}} animate={{width:"9vw"}} transition={{ ease:[0.76, 0, 0.24, 1], duration:1, delay:0.8}} className="bg-[url('/images/content-image01.jpg')] bg-cover rounded-md overflow-hidden w-[9vw] h-[5.3vw]"></motion.div>)}
                                    <h1 className='uppercase text-[7.5vw] font-bold leading-[6.5vw]'>{item}</h1>
                                </div>
                            </div>
                })
            }
        </div>
        <div className="border-t-2 border-zinc-600 mt-20 flex justify-between items-center py-6 px-20 flex-wrap font-medium ">
            {["For public and private companies","From the first pitch to IPO"].map((item,index)=>(
                <p className="text-md tracking-tight leading-none ">{item}</p>
                ))}
           <div className="start flex items-center gap-1">
                <div className="px-6 py-2 border-2 rounded-full border-zinc-500  text-sm uppercase">Start The project</div>
                <div className='w-10 h-10 rounded-full border-zinc-500 border-2 flex justify-center items-center text-2xl'>
                <GoArrowUpRight />
                </div>
           </div>
        </div>
    </div>
  )
}

export default LandingPage
import { motion, useAnimation } from 'framer-motion'
import React from 'react'

function FeaturedProjectCard({text="TEMP",cardIndex}) {
    const cards = [useAnimation(), useAnimation(),useAnimation(), useAnimation()]
  const handleHoverStart=(index)=>{
    cards[index].start({y:"0"})
  }
  const handleHoverEnd=(index)=>{
    cards[index].start({y:"100%"})
  }
  return (
    <div>
        <motion.div onHoverStart={()=>handleHoverStart({cardIndex})} onHoverEnd={()=>handleHoverEnd({cardIndex})} className="card-container relative w-full h-[38vw] rounded-3xl">
            <h1 className='absolute flex overflow-hidden left-full top-1/2 -translate-x-1/2 -translate-y-1/2 z-[9] text-8xl text-[#9194E0] font-bold leading-none tracking-tight uppercase'>
            {text.split('').map((item,index)=><motion.span initial={{y:"100%"}} animate={cards[{cardIndex}]} transition={{ease:[0.22, 1, 0.36, 1], delay:index*0.025} } className='inline-block'>{item}</motion.span>)}
            </h1>
              <div className="card w-full h-full rounded-xl overflow-hidden">
                <img className=' w-full h-full bg-cover' src="./images/card-image1.png" alt="card image" />
              </div>
            </motion.div>
    </div>
  )
}

export default FeaturedProjectCard
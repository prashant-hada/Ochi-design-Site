import { motion, useAnimation } from 'framer-motion'
import React from 'react'

function Featured() {
   
  const cards = [useAnimation(), useAnimation(),useAnimation(), useAnimation()]
  const handleHoverStart=(index)=>{
    cards[index].start({y:"0"})
  }
  const handleHoverEnd=(index)=>{
    cards[index].start({y:"100%"})
  }
  return (
    <div className='w-full py-20'>
        <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-20">
            <h1 className=' text-5xl text-zinc-900'>Featured Projects</h1>
        </div>
        <div className="px-8">
          <div className="cards w-full flex gap-5 mt-10">
            <motion.div onHoverStart={()=>handleHoverStart(0)} onHoverEnd={()=>handleHoverEnd(0)} className="card-container relative w-1/2 h-[38vw] rounded-3xl">
            <h1 className='absolute flex overflow-hidden left-full top-1/2 -translate-x-1/2 -translate-y-1/2 z-[9] text-8xl text-[#9194E0] font-bold leading-none tracking-tight uppercase'>
            {"FYDE".split('').map((item,index)=><motion.span initial={{y:"100%"}} animate={cards[0]} transition={{ease:[0.22, 1, 0.36, 1], delay:index*0.025} } className='inline-block'>{item}</motion.span>)}
            </h1>
              <div className="card w-full h-full rounded-xl overflow-hidden">
                <img className=' w-full h-full bg-cover' src="./images/card-image1.png" alt="card image" />
              </div>
            </motion.div>
            <motion.div onHoverStart={()=>handleHoverStart(1)} onHoverEnd={()=>handleHoverEnd(1)} className="card-container relative w-1/2 h-[38vw] rounded-3xl">
            <h1 className='absolute flex overflow-hidden right-full top-1/2 translate-x-1/2 -translate-y-1/2 z-[9] text-8xl text-[#9194E0] font-bold leading-none tracking-tight uppercase'>
            {"VISE".split('').map((item,index)=><motion.span initial={{y:"100%"}} animate={cards[1]} transition={{ease:[0.22, 1, 0.36, 1], delay:index*0.025} } className='inline-block'>{item}</motion.span>)}
            </h1>
              <div className="card w-full h-full rounded-xl overflow-hidden">
              <img className=' w-full h-full bg-cover' src="./images/card-image2.png" alt="card image" />
              </div>
            </motion.div>
          </div>
          <div className="cards w-full flex gap-5 mt-28">
            <motion.div onHoverStart={()=>handleHoverStart(2)} onHoverEnd={()=>handleHoverEnd(2)} className="card-container relative w-1/2 h-[38vw] rounded-3xl">
            <h1 className='absolute flex overflow-hidden left-full top-1/2 -translate-x-1/2 -translate-y-1/2 z-[9] text-8xl text-[#9194E0] font-bold leading-none tracking-tight uppercase'>
            {"TRAWA".split('').map((item,index)=><motion.span initial={{y:"100%"}} animate={cards[2]} transition={{ease:[0.22, 1, 0.36, 1], delay:index*0.025} } className='inline-block'>{item}</motion.span>)}
            </h1>
              <div className="card w-full h-full rounded-xl overflow-hidden">
                <img className=' w-full h-full bg-cover' src="./images/card-image3.png" alt="card image" />
              </div>
            </motion.div>
            <motion.div onHoverStart={()=>handleHoverStart(3)} onHoverEnd={()=>handleHoverEnd(3)} className="card-container relative w-1/2 h-[38vw] rounded-3xl">
            <h1 className='absolute flex overflow-hidden right-full top-1/2 translate-x-1/2 -translate-y-1/2 z-[9] text-8xl text-[#9194E0] font-bold leading-none tracking-tight uppercase'>
            {"PREMIUM BLEND".split('').map((item,index)=><motion.span initial={{y:"100%"}} animate={cards[3]} transition={{ease:[0.22, 1, 0.36, 1], delay:index*0.025} } className='inline-block'>{item}</motion.span>)}
            </h1>
              <div className="card w-full h-full rounded-xl overflow-hidden">
              <img className=' w-full h-full bg-cover' src="./images/card-image4.png" alt="card image" />
              </div>
            </motion.div>
          </div>
        </div>
    </div>
  )
}

export default Featured
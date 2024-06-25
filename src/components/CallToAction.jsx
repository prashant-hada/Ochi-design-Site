import React, { useEffect,useState }  from 'react'

function CallToAction() {
    const [rotate,setRotate] = useState(0)
    useEffect(()=>{
        window.addEventListener("mousemove",(e)=>{
            let mouseX = e.clientX;
            let mouseY = e.clientY;
            
            let deltaX = mouseX - window.innerWidth/2;
            let deltaY = mouseY - window.innerHeight/2;

            var angle = Math.atan2(deltaY, deltaX) * (180/Math.PI)
            setRotate(angle-180);
        })
    })

  return (
    <div data-scroll  data-scroll-speed="0.4" className='w-full h-screen bg-[#CDea68] pt-10'>
        <div className="relative flex justify-center items-center">
            <div className="heading flex flex-col items-center gap-2">
                {["ready", "to start", "the Project?"].map((item,index)=>(
                    <h1 className='text-black font-bold text-[8vw] uppercase tracking-tighter leading-none'>{item}</h1>
                ))}
            </div>
            <div 
             data-scroll data-scroll-section data-scroll-speed="0.5" 
            className="absolute flex gap-10">
            <div className="flex justify-center items-center w-[15vw] h-[15vw] rounded-full bg-zinc-100">
                <div className="flex justify-center items-center w-2/3 h-2/3 rounded-full bg-zinc-900">
                    <div style={{transform:`rotate(${rotate}deg)`}}  className="line w-full h-10 ">
                        <div className="w-10 h-10 rounded-full bg-zinc-100"></div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center w-[15vw] h-[15vw] rounded-full bg-zinc-100">
                <div className="flex justify-center items-center w-2/3 h-2/3 rounded-full bg-zinc-900">
                    <div style={{transform:` rotate(${rotate}deg)`}} className="line w-full h-10">
                        <div className="w-10 h-10 rounded-full bg-zinc-100"></div>
                    </div>
                </div>
            </div> 
         </div> 
        </div>
    </div>
  )
}

export default CallToAction
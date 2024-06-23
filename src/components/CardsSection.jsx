import React from 'react'

export default function () {
  return (
    <div className='w-full h-screen flex items-center bg-zinc-50 px-10 gap-5'>
      <div className="cards-container w-1/2 h-[57vh] ">
        <div className="card relative rounded-xl w-full h-full  bg-[#004D43] flex  items-center justify-center">
          <img className='w-40' src="./images/logo001.svg" alt="LOGO"/>
          <button className='absolute left-8 bottom-8 px-2 py-1 border-2 rounded-full text-[#CDea68] border-[#CDea68]'>&copy; 2019-2022</button>
        </div>
      </div>
      <div className="cards-container w-1/2 h-[57vh] flex items- gap-5 ">
        <div className="card relative rounded-xl w-1/2 h-full bg-[#212121] flex items-center justify-center">
          <img className='w-40' src="./images/logo002.svg" alt="LOGO"/>
          <button className='absolute left-8 bottom-8 px-2 py-1 border-2 uppercase rounded-full text-[#fff] border-[#fff]'>rating 5.0 on clutch</button>
        </div>
        <div className="card relative rounded-xl w-1/2 h-full bg-[#212121] flex items-center justify-center">
        <img className='w-28' src="./images/logo003.png" alt="LOGO"/>
          <button className='absolute left-8 bottom-8 px-2 py-1 border-2 uppercase rounded-full text-[#fff] border-[#fff]'>busines bootcamp alumini</button>
          </div>
      </div>
    </div>
  )
}

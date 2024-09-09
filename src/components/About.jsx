import React from 'react'

function About() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-0.1" className='w-full pt-24 pb-12 bg-[#CDea68] rounded-3xl'>
      <div className="heading-div flex pr-8 mx-14 pb-4">
        <h2 className='text-[3.7vw] text-[#212121] mr-40 tracking-tight leading-none font-normal' >Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</h2>
      </div>
      <div className="content-div flex mt-8 border-t-[0.1vw] border-[#4e5b20] pt-6 px-14 justify-between ">
        <div className="text-div-1 flex">
          <h3 className='text-[#212121] text-[1.15vw] tracking-tight font-normal block pr-48 whitespace-nowrap '>What you can expect:</h3>
        </div>
        <div className="text-div2 flex flex-col justify-between items-center gap-10 w-72 relative left-16  ">
          <p className='text-[#212121] text-[1.15vw] tracking-tight font-normal text-wrap leading-[1.45vw]'>We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it's live or digital, delivered for one or a hundred people.</p>
          <p className='text-[#212121] text-[1.15vw] tracking-tight font-normal text-wrap leading-[1.45vw]'>We believe the mix of strategy and design, with a bit of coffee, is what makes your message clear, convincing, and captivating.</p>
        </div>
        <div className="text-div3 flex flex-col justify-end mr-28 relative right-8">
          <div className="social pb-8">
            <h4 className='text-[#212121] text-[1.15vw] tracking-tight font-normal text-wrap'>Socials:</h4>
          </div>
          {
            ["Instagram","Behance","Facebook", "Linkedin"].map((item,index)=>(
              <a className='text-[#212121] text-[1.15vw] tracking-tight font-normal text-wrap' href="#">{item}</a>
            ))
          }
        </div>
      </div>
      <div className="bottom-div border-t-[0.1vw] border-[#4e5b20]  px-14 mt-20 flex justify-between">
        <div className="w-1/2">
          <h2 className='text-[3.7vw] text-[#212121] text-nowrap'>Our approach: </h2>
          <button className=' mt-2 px-6 py-4 text-zinc-100 bg-zinc-900 flex items-center rounded-full gap-9 text-[1vw] uppercase font-medium'>Read More
            <div className="w-2 h-2 rounded-full bg-zinc-100"></div>
          </button>
        </div>
        <div className='w-1/2 pt-6'>
          <div className=" about-img w-full h-[30vw] rounded-3xl bg-[url('/images/about-image.png')] bg-contain overflow-hidden"></div>
        </div>
      </div>
    </div>
  )
}

export default About
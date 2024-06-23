import React from 'react'

function FooterLink({content, type="line", link="#", styleClass=""}) {
  let leadingValue = type==="link"? "leading-[0.001vw]" : "";
  return (
    <div className={`${styleClass}`}>
        {
          type==="line" ? (<p className={` capitalize tracking-tight`} >{content}</p>) : (<a href='#' className={` capitalize underline ${leadingValue} `} >{content}</a>)
        }
    </div>
  )
}

export default FooterLink
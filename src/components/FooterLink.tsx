import React from 'react'

interface FooterLinkProps {
  content:string;
  type?:string;
  link?: string;
  styleClass?: string
}

function FooterLink({content, type="line", link="#", styleClass=""}:FooterLinkProps) {
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
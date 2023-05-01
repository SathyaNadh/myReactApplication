import React from 'react'
import Link from 'next/link'

export const Menu = () =>{ 

  const fnMenuClick=(event)=>{
     console.log(event.target.id)
  }
  return (
    <ul className='menu'>
      <li>
        <Link  id='home' onClick={fnMenuClick}href="/home">Home</Link>
      </li>
      <li>
        <Link id='about' onClick={fnMenuClick}href="/about">AboutUs</Link>
      </li>
      <li>
        <Link id='contact' onClick={fnMenuClick} href="/contact">Contact</Link>
      </li>
    </ul>
  )
}

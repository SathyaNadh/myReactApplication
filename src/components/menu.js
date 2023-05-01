import React ,{useState,useEffect} from 'react'
import Link from 'next/link'
export const Menu = () =>{ 

  const [menuitem,setMenuItem]= useState('home')
   useEffect(()=>{
    let pathName=window.location.pathname
    setMenuItem(pathName. slice(1) || 'home')
  },[])
  const fnClick=(event)=>{
  setMenuItem(event.target.id)
 }
  return (
    <ul className='menu'>
      <li>
        <Link  id='home' className={menuitem == 'home'&& 'active-menu'} onClick={fnClick}href="/home">Home</Link>
      </li>
      <li>
        <Link  id='about' className={menuitem == 'about'&& 'active-menu'}onClick={fnClick}href="/about">AboutUs</Link>
      </li>
      <li>
        <Link  id='contact' className={menuitem == 'contact'&& 'active-menu'}onClick={fnClick} href="/contact">Contact</Link>
      </li>
    </ul>
  )
}


import React from 'react'
import "../App.css"
import unibeta from "../assets/unibetalogo.png"

const Navbar = () => {
  return (
    <>
      <header className='navbar__header'>
        <div>
          <img src={unibeta} alt="not working"/>
        </div>
        <nav>
          <a href="/home">Home</a>
          <a href="/about" className='about_link'>About</a>
          <a href="#" className='service_link'>Services</a>
         <a href="/join/waitlist"> <button className='waitlist'>Join the waitlist</button> </a>
          <button className='sell'>Start selling</button>
        </nav>
      </header>
    </>
  )
}


export default Navbar
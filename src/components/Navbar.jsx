<<<<<<< HEAD
import React from 'react'
import "../App.css"
import unibeta from "../assets/unibetalogo.png"

const Navbar = () => {
  return (
    <>
      <header className='navbar__header'>
        <div className='uni'>
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


=======
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


>>>>>>> 668adf6482e5672eb0d5149bb6b1192079c3ba7f
export default Navbar
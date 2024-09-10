import React from 'react'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import unibeta from "../assets/unibetalogo.png"

const joinwaitlist = () => {
  return (
    <>

      <Navbar/>
    
        <div className="section1waitlist">
            <div className='bg-random'>
                <div className='bg-random-inside'>
                    <div>
                     <div>
                      <div className='marketdiv'>
                          <h2>Unibeta Market place</h2>
                        </div>
                        <div className='border'></div>
                     </div>
                      <h3>A Market placed tailored for <br/>university students</h3>
                      <p>Join 40,000+ Nigerian students to buy and sell on unibeta marketplace</p>
                    </div>
                    <div>
                      <h3>Already have an account?  <br/> <a href="">Sign in</a></h3>
                     
                    </div>
                </div>
            </div>
            <div className='formdiv'>
                <img src={unibeta} alt="" className='unibeta' />
                <form action="">
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="username" className='username' placeholder='Username'/>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" className='password' placeholder='Enter your password'/>
                  <div>
                    <input type="checkbox" name="male" id="male" />  <span className='male'>Male</span>
                    <input type="checkbox" name="female" id="female" />  <span className='female'>Female</span>
                  </div>
                  <div>
                    <button className='signup'>Sign Up</button><br/>
                    <button className='google'>Log in with Google</button>
                  </div>
                </form>
            </div>
        </div>
       
        <Footer/>

    </>
  )
}

export default joinwaitlist
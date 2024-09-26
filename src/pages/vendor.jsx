import React from 'react'
import "../App.css"
import unibeta from "../assets/unibetalogo.png"

import heart from "../assets/heart.png";
import user from "../assets/user.png";
import edit2 from "../assets/edit-2.png";
import frame1 from "../assets/frames1.png";
import frame2 from "../assets/frame2.png";
import Footer from "../components/Footer"

const vendor = () => {
  return (
    <>
         <div className="marketsection1">
            <div className='marketlogoimg'>
                <img src={unibeta} alt="" />
            </div>
            <div className='icons'>
                <img src={heart} alt="" />
                <img src={user} alt="" />
            </div>
        </div>

        <div className='vendor1'>
            <div>
                <h3>insert brand name</h3>
                <img src={edit2} alt="" className='img1'/>
            </div>
            <div>
                <img src={edit2} alt="" className='img2'/>
            </div>
        </div>
        <div className='vendor2'>
            <button>Place Ad</button>
           <div>
                <img src={heart} alt="" className="heart"/>
           </div>
        </div>

        <div className='vendor3'>
            <h2>Wallet balance</h2>
            <h1>#0.00</h1>
            <div>
                <img src={frame1} alt="" className='frame1'/>
                <img src={frame2} alt="" className='frame2'/>
            </div>
        </div>




        <Footer/>
    
    </>

       

    
  )
}

export default vendor
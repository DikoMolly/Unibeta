import React from 'react'
import "../App.css"
import unibeta from "../assets/unibetalogo.png"
import appstore from "../assets/appstore.png"
import twitter from "../assets/TwitterX.svg"
import instagram from "../assets/Instagram.svg"
import whatsapp from "../assets/WhatsApp.svg"
import tiktok from "../assets/TikTok.svg"
import youtube from "../assets/YouTube.svg"
import thread from "../assets/thread.svg"
import googlestore from "../assets/google.png"


const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer_wrap'> 
            <div className='footer1'>
                <img src={unibeta} alt="" className='unibeta'/>
                <p>Unibeta leverages the best in-class teachers, media, and <br/> technology to create high-quality, affordable and accessible <br/> education for university students. </p>
                <div>
                    <img src={appstore} alt="" className='rec16'/>
                    <img src={googlestore} alt="" className='rec17'/>
                </div>
            </div>
            <div className="bottom-boxes">
                <div>
                    <h3>Company</h3>
                    <a href="#">About Us</a>
                    <a href="#">Sevices</a>
                    <a href="#">FAQ's</a>
                    <a href="#">Help and support</a>
                </div>

                <div className='reachout'>
                    <h3>Reach out</h3>
                    <p>support@unibeta.edu</p>
                    <p>suport@unibetamobile.com</p>
                    <p>info@unibetamobile.com</p>
                    <p>(+234) 8 675 8447</p>
                    <p>(+234) 7 947 6935</p>
                </div>
            </div>
        </div>
        <div className='footerdown'>
            <h2>Follow us on our Media platform</h2>
            <div className='footericons'>
                <img src={twitter} alt="" />
                <img src={instagram} alt="" />
                <img src={whatsapp} alt="" />
                <img src={tiktok} alt=""/>
                <img src={youtube} alt="" />
                <img src={thread} alt="" />
            </div>
        </div>
    </div>
  )
}


export default Footer;
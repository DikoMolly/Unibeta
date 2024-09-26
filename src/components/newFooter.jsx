import React from 'react'
import "../App.css"
import unibeta from "../assets/unibetalogo.png"

import heart from "../assets/heart.png";
import user from "../assets/user.png";

const newFooter = () => {
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
    </>
  )
}

export default newFooter
import React from 'react'
import "../App.css"
import arrowRight from "../assets/arrow-left.png"
import cloud from "../assets/cloud.png"
import Footer from "../components/Footer"
const upload = () => {
  return (
    <>
         <div className='upload1'>
            <div>
                <h1> <span>+</span>Upload </h1>
            </div>
            <div>
                <img src={arrowRight} alt="" />
            </div>
        </div>
        <div className='upload2'>
            <div className='box1'></div>
            <div className='box2'></div>
            <div className='box3'></div>
            <div className='box4'></div>
        </div>

        <div className='upload3'>
            <div className='bg'>
                <p>Browse file to upload </p>
                <img src={cloud} alt="" />
                <b>Supported Files</b>
                <p>JPG, JPEG, PNG</p>
            </div>
          <p className='max'>Maximum of 4 pictures</p>
        </div>
        <div className='upload4'>
            <form action="">
                <div  className='formdives'>
                    <div>
                        <label htmlFor="text">Item Category</label><br/>
                        <input type="text" placeholder='Price'/>   
                    </div>
                    <div>
                        <label htmlFor="">Category</label><br/>
                        <select name="" id="">
                            <option value="Category">Category</option>
                        </select>
                    </div>
                </div>
                <div className='desc desclaptop'>
                    <div className='lab'>
                        <label htmlFor="">Description</label>
                    </div>
                    <div className='textarea'>
                        <input type="text" placeholder='Description' className='descs'/>
                    </div>
                   
                </div>
            </form>
        </div>


        <Footer/>
    </>
   
  )
}

export default upload
import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Rectangle from "../assets/Rectangle.png"
import rec1 from "../assets/rec1about.png"
import rec2about from "../assets/rec2about.png"
import rec3about from "../assets/rec3about.png"
import rec4about from "../assets/rec4about.png"
import rec5about from "../assets/rec5about.png"
import "../App.css"

const about = () => {
  return (
   <>
        <Navbar/>
        <div className='section1about'>
            <div>
                <img src={Rectangle} alt="" className='rectangleabout' />
            </div>
            <div className='aboutText'>
                <h1>Our Dream is <br/> Global Learning <br/> Transformation</h1>
                <p>Welcome to UniBeta  -Revolutionizing University Education. </p>
                <p>At Unibeta, we understand the challenges that university students face in balancing academic demands, sourcing quality materials, and maintaining a healthy school-life balance. 
                    Born out of the constant feedback from university students about the stressful nature of their academic journey, UniBeta is designed to bring all essential academic and extracurricular
                    resourcesinto one powerful mobile application. Our aim is to enhance the university experience for students by providing a comprehensive platform that addresses all their academic needs and support 
                    their personal growth and development. We aim to create an environment where students can easily access resources, engage with their studies, and collaborate with peers, all while enjoying a balanced fullfilling life.</p>
            </div>
        </div>

        <div className='section2about'>
                <h3>Trusted by 40, 000+ Nigerian students and companies</h3>
           <div className='section2imagesabout'>
                <img src={rec1} alt="" />
                <img src={rec2about} alt="" />
                <img src={rec3about} alt="" />
                <img src={rec4about} alt="" />
                <img src={rec5about} alt="" />
           </div>
        </div>
        <Footer/>

   </>
  )
}

export default about
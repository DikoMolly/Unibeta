import React from 'react'
import unibeta from "../assets/unibetalogo.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Rectangle from "../assets/redframe.svg"
import rec01 from "../assets/rec01.png"
import rec02 from "../assets/rec02.png"
import rec03 from "../assets/rec03.png"
import rec04 from "../assets/rec04.png"
import rec05 from "../assets/rec05.png"
import rec06 from "../assets/rec06.png"
import rec07 from "../assets/rec07.png"
import rec08 from "../assets/rec08.png"
import rec09 from "../assets/rec09.png"
import iphone151 from "../assets/iphone151.svg"
import iphone152 from "../assets/iphone152.svg"
import iphone153 from "../assets/iphone153.svg"
import iphone154 from "../assets/iphone154.svg"
import iphone155 from "../assets/iphone155.svg"
import marketplace from "../assets/marketplace.png"
import rec13 from "../assets/rec13.png"
import rec14 from "../assets/rec14.png"
import logos from "../assets/logos.svg"
import book from "../assets/book.png"
import bookicon from "../assets/book.svg"
import profile2 from "../assets/profile-2user.png"
import time from "../assets/time.png"
import slash from "../assets/slash.png"
import usertick from "../assets/user-tick.png"
import chart from "../assets/chart.png"
import usertag from "../assets/user-tag.png"
import you1 from "../assets/you1.png"
import you2 from "../assets/you2.png"
import you3 from "../assets/you3.png"
import you4 from "../assets/you4.png"
import slide2 from "../assets/slide2.png"
import slide3 from "../assets/slide3.png"
import slide4 from "../assets/slide4.png"
import slide5 from "../assets/slide5.png"
import slide6 from "../assets/slide6.png"
import Carousel from 'react-bootstrap/Carousel';


const home = () => {
   
  return (
    <>
        <Navbar/>
        
        <section className='section1'>
            <div className='content'>
                <img src={unibeta} alt="" className='unibeta' />
                <h2>The best community for an amazing university experience</h2>
                <p>Track your CA, schedule classes and solve your day to day struggles as a students with our vast students services</p>
            </div>
            <div className='section1iphones'>
                <img src={rec09} alt="" className='rec09'/>
            </div>
        </section>

        <section className='section2 section9'>
            <div>
               <div> <img src={Rectangle} alt="" className='rectangle'/></div>
                <div>
                    <input type="email" name="email" id="email" required className='emailinput' placeholder='Email address'/>
                    <button>Join our waitlist</button>
                </div>
            </div>
            <div className='join'>
                <h1>Join our community to enjoy the<br/> best experience in your <br/>university with us </h1>
                <p className='we'>We at unibeta strive to make your university experience the <br/> best for providing educative and academic services to <br/> students entertainment and financial solutions </p>
               <div className='elevate'>
                    <p className='ned'> Elevate Your University experience with the best <br/> community for university students</p>
                    <img src={slash} alt="" />
               </div>
            </div>
        </section>


        <section className='section3'>
                <h1 className='choose'>Choose UniBeta because you deserve better.</h1>
                <p>"Get ready for the launch of a dynamic mobile app tailored <br/>for university students, arriving soon on the play store and<br/> Apple store!"</p>
        </section>

        <section className='section4'>
            <h1>Why choose us</h1>
            <div className='three__rows'>
                 <div className='png-container'>
                    <img src={profile2} alt="" />
                    <p>Acess to Quality tutors</p>
                 </div>
               <div className='png-container'>
                    <img src={book} alt="" />
                    <p>Acess to adequate and quality materials</p>
               </div>
               <div className='png-container effective'>
                    <img src={time} alt="" />
                    <p>Effective time management</p>
               </div>
            </div>
        </section>

        <section className='section5'>
            <h1>What we do!!</h1>

            <div className='imageflex5'>
                <div className='hover-container'>
                    <img src={rec01} alt="" />
                    <div>

                    </div>
                   
                    <div className='content'>
                        <p className='head'>Students seminars</p>
                        <p>Join us for an engaging seminar and workshop hosted by unibeta, an innovative edtech company. 
                            This event offers students the opportunity to enhance their learning,
                             gain valuable insight from industry experts, and develop essential skills for academic 
                             and career success.</p>
                    </div>
                </div>
                <div>
                    <img src={rec02} alt="" />
                   
                    <div className='content'>
                    <p className='head'>School functions</p>
                        <p>We organize school functions such as parties and entertainment events, these events foster a sense of community with opportunities to relax and socialize outside the academic environment, it also helps reduce stress, enhancing overall well-being and mental health</p>
                    </div>
                </div>
                <div>
                    <img src={rec03} alt="" />
                    
                    <div className='content'>
                        <p className='head'>Tutorials</p>    
                        <p>We organize live tutorials for students, we provide real time engagement with instructors, allowing students to ask questions and receive immediate feedback, this fosters a collaborative environment and helps students stay motivated and on track with their studies</p>
                    </div>
                </div>
                <div>
                    <img src={rec04} alt="" />
                   
                    <div className='content'>
                        <p className='head'>Student Mobile Apps</p>
                        <p> with easy access to a wide range of study materials,  past exam questions and video contents that will significantly help in enhancing your learning and exam preparation process and monitoring your progress on your CA with your data represented with graphic charts that would help you easily identify areas for improvement, </p>
                    </div>
                </div>
                <div>
                    <img src={rec05} alt="" />
                    
                    <div className='content'>
                        <p className='head'>Past Questions</p>
                        <p>Access to past questions offers numerous advantages to our users, these resources provide valuable insight into exam patterns and frequently tested topics, helping students to focus their studies more effectively, students can improve their tme management skills and reduce exam anxiety leading to better performance in their exams</p>
                    </div>
                </div>
            </div>
        </section>

        <section className="section6">
            <div className='content'>
                <h1>Unibetamedia</h1>
                <h3>Get feautured on our various shows on unibeta</h3>
                <p> Send a mail to Media@unibetamobile.com to get feautured on our shows</p>
            </div>

            <div className='imageflex'>
                <div>
                    <div>
                    <Carousel>
                        <Carousel.Item>
                            <img src={rec06} className='rec06'/>

                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={you1} className='you1 rec06'/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={you2} className='you2 rec06'/>
                           
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={you3} className='you3 rec06'/>
                           
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={you4} className='you4 rec06'/>
                          
                        </Carousel.Item>
           
                    </Carousel>
                    

                    </div>
                    <p>Inside Uni Shows</p>
                </div>
                <div>
                    <Carousel>
                        <Carousel.Item>
                            <img src={rec07} alt="" className='rec07'/>
                            <p>Street Interviews</p>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={slide2} alt="" className='rec07'/>
                            <p>Street Interviews</p>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={slide3} alt="" className='rec07'/>
                            <p>Street Interviews</p>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={slide4} alt="" className='rec07'/>
                            <p>Street Interviews</p>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={slide5} alt="" className='rec07'/>
                            <p>Street Interviews</p>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={slide6} alt="" className='rec07'/>
                            <p>Street Interviews</p>
                        </Carousel.Item>
                    </Carousel>
                </div>
                
            </div>
        </section>

        <section className='section7'> 
            <div>
                <h1>Why choose Unibeta</h1>
            </div>
            <div className='redcontainer'>
                <div className='red'>
                    <div className='redone'>
                        <div className='imagecircle'>
                            <img src={bookicon} alt="" />
                        </div>
                        <h3>Access to materials and past questions</h3>
                    </div>
                    <div>
                        <p>Once signed up, you will gain access to a wealth of education materials nd past question. The platform may offer a vast library of resources, including textbooks, study guides 
                            , lecture notes, practice tests, and curated collections of educational content. Having access to such materials allows students to supplement their learning, reviews topics,
                             and prepare for exams more effectively.
                        </p>
                    </div>
                </div>
                <div className='red blue'>
                    <div className='redone'>
                        <div className='imagecircle'>
                            <img src={usertick} alt="" />
                        </div>
                        <h3>Connect with Qualified Tutors</h3>
                    </div>
                    <div>
                        <p>Once signed up, you will gain access to a wealth of education materials nd past question. The platform may offer a vast library of resources, including textbooks, study guides 
                            , lecture notes, practice tests, and curated collections of educational content. Having access to such materials allows students to supplement their learning, reviews topics,
                             and prepare for exams more effectively.
                        </p>
                    </div>
                </div>
                <div className='red orange'>
                    <div className='redone'>
                        <div className='imagecircle'>
                            <img src={chart} alt="" />
                        </div>
                        <h3>Track your continous Assessment</h3>
                    </div>
                    <div>
                        <p>Once signed up, you will gain access to a wealth of education materials nd past question. The platform may offer a vast library of resources, including textbooks, study guides 
                            , lecture notes, practice tests, and curated collections of educational content. Having access to such materials allows students to supplement their learning, reviews topics,
                             and prepare for exams more effectively.
                        </p>
                    </div>
                </div>
                <div className='red purple'>
                    <div className='redone'>
                        <div className='imagecircle'>
                            <img src={usertag} alt="" />
                        </div>
                        <h3>Become a Tutor in your school</h3>
                    </div>
                    <div>
                        <p>Once signed up, you will gain access to a wealth of education materials nd past question. The platform may offer a vast library of resources, including textbooks, study guides 
                            , lecture notes, practice tests, and curated collections of educational content. Having access to such materials allows students to supplement their learning, reviews topics,
                             and prepare for exams more effectively.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section className="section8">
                <div>
                    <h1>Everything you need to <br/> excel in university</h1>
                    <p>in-dept, yet easy-to-understand explanations and lessons, videos based content help, material Banks and Real time Analytics on continues assessment.</p>
                    <img src={rec08} alt=''/>
                </div>
        </section>

        <section className='section9 section2'>
            <div>
                <img src={unibeta} alt=""  className='unibeta'/>
                <h3>Hey guys!!<br/> we are coming soon....</h3>
                <p>Our Mobile app is under construction<br/> we will be live soon with our new owesome app</p>
               <div className='inputwaitlist'>
                <input type="email" name="email" id="email" required className='emailinput' placeholder='Email address'/>
                <button>Join our waitlist</button>
               </div>
            </div>
            <div>
                <img src={rec09} alt="" className='rec09'/>
            </div>
        </section>

        <section className='section10'>
            <Carousel>
                <Carousel.Item>
                    <section className='section10'>
                        <div className='materials'>
                            <div>
                                <img src={iphone151} alt="" className='rec10'/>
                            </div>
                            <div className="content">
                                <h3>Materials and Past Questions</h3>
                                <p>The app serves as a centralized platform where you can find a vast collection of study materials, including textsbooks, lecture notes, articles, 
                                    and interactive multimedia resources with a comprehensive materials and past questions database. This feauture would provide you with easy access
                                    to a wide range of study materials and past exam questions , enhancing your learning and exam preparation process  </p>
                            </div>
                        </div>
                    <div className='materials none'>
                        <div>
                            <img src={iphone152} alt="" className='rec10'/>
                        </div>
                        <div className="content">
                            <h3>Analytics</h3>
                            <p>A comprehensive and interactive continous assessment tracking system that provides you with detailed analytics . 
                                This feauture would help monitor your progress
                                , identify areas for improvement, and enable data-driven decision-making </p>
                        </div>
                </div>
                    </section>
                </Carousel.Item>
                <Carousel.Item>
                <section className='section10'>
                        <div className='materials'>
                            <div>
                                <img src={iphone153} alt="" className='rec10'/>
                            </div>
                            <div className="content">
                                <h3>Beta Tutors</h3>
                                <p>A video-based tutoring system that provides students with interactive and engaging learning content. 
                                    This feauture would enable tutors to deliver educational lessons, explanations, and demonstration through videos, enhancing the learning expereience  </p>
                            </div>
                        </div>
                    <div className='materials none'>
                        <div>
                            <img src={iphone154} alt="" className='rec10'/>
                        </div>
                        <div className="content">
                            <h3>Unibeta Marketplace</h3>
                            <p>The app's ad system could allow you to sell goods to create targeted advertisement for your items, sellers could specify relevant details such as the item's condition, price, and subject matter. By targeting the ads within the apps's educational community and social media spaces, sellers can effectively reach a relevant audience interested in their offerings.</p>
                        </div>
                </div>
                    </section>
                </Carousel.Item>
                <Carousel.Item>
                <section className='section10'>
                        <div className='materials'>
                            <div>
                                <img src={iphone155} alt="" className='rec10'/>
                            </div>
                            <div className="content">
                                <h3>Study abroad</h3>
                                <p>This feauture would help you explore international educational experience, 
                                    discover study abroad and programs and access scholarship opportunities to support 
                                    their academic pursuits. The app will provide comprehensive information on study abroad programs,
                                     including details about universities, courses, application requirements, and program durations. 
                                     Students can browse through a wide range of study abroad options and make informed decisions based 
                                     on their preferences and academic goals </p>
                            </div>
                        </div>
                    
                    </section>
                </Carousel.Item>
                
           
            </Carousel>
           
            
           
        </section>

        <section className='section11'>
            <img src={marketplace} alt="" />
        </section>


        <section className='section12'>
            <img src={rec13} alt="" className='rec13' />
        </section>

        <section className='section13'>
            <div>
                <img src={rec14} alt="" className='rec14'/>
            </div>
            <div>
                <div className='founder'>
                    <div className='logosfounder'>
                        <img src={logos} alt="" />
                       
                    </div>
                    <div className='mission'>

                        <div>
                            <p>The misson of THENEXTFOUNDER is to champion a global community of Black entrepreneurs, professionals, leaders and creators that are driving systematic change in business , culture
                                and society. Our community of exceptional leaders of color are breaking down barriers, creating more equitable economies, and driving a new culture of connection , 
                                collaboration and change. In order to support our community, FORBESBLK shares inspiring content and curates in-person and digital based networking opportunities to foster professional
                                 development, entrepreneurship, and cultural change.</p>
                        </div>
                    </div>
                  

                </div>
            </div>
        </section>

        <Footer/>

    </>
  )
}

export default home 
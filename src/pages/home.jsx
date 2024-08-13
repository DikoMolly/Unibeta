import React from 'react'
import unibeta from "../assets/unibetalogo.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Rectangle from "../assets/Rectangle.png"
import rec01 from "../assets/rec01.png"
import rec02 from "../assets/rec02.png"
import rec03 from "../assets/rec03.png"
import rec04 from "../assets/rec04.png"
import rec05 from "../assets/rec05.png"
import rec06 from "../assets/rec06.png"
import rec07 from "../assets/rec07.png"
import rec08 from "../assets/rec08.png"
import rec09 from "../assets/rec09.png"
import rec10 from "../assets/rec10.png"
import rec11 from "../assets/rec11a.png"
import marketplace from "../assets/marketplace.png"
import rec13 from "../assets/rec13.png"
import rec14 from "../assets/rec14.png"
import rec15 from "../assets/rec15.png"
import the from "../assets/THE.png"
import next from "../assets/NEXT.png"
import founder from "../assets/FOUNDER.png"
import book from "../assets/book.png"
import bookicon from "../assets/book.svg"
import profile2 from "../assets/profile-2user.png"
import time from "../assets/time.png"
import slash from "../assets/slash.png"
import usertick from "../assets/user-tick.png"
import chart from "../assets/chart.png"
import usertag from "../assets/user-tag.png"
 

const home = () => {
  return (
    <>
        <Navbar/>
        
        <section className='section1'>
            <div>
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
                <h1>Choose UniBeta because you deserve better.</h1>
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
                    <img src={time} alt="" />
                    <p>Acess to adequate and quality materials</p>
               </div>
               <div className='png-container effective'>
                    <img src={book} alt="" />
                    <p>Effective time management</p>
               </div>
            </div>
        </section>

        <section className='section5'>
            <h1>What we do!!</h1>

            <div className='imageflex5'>
                <div>
                    <img src={rec01} alt="" />
                    <p>Students seminars</p>
                </div>
                <div>
                    <img src={rec02} alt="" />
                    <p>School functions</p>
                </div>
                <div>
                    <img src={rec03} alt="" />
                    <p>Tutorials</p>
                </div>
                <div>
                    <img src={rec04} alt="" />
                    <p>Student Mobile Apps</p>
                </div>
                <div>
                    <img src={rec05} alt="" />
                    <p>Past Questions</p>
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
                    <img src={rec06} alt="" className='rec06'/>
                    <p>Inside Uni Shows</p>
                </div>
                <div>
                    <img src={rec07} alt="" className='rec07'/>
                    <p>Street Interviews</p>
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
            <div className='materials'>
                <div>
                    <img src={rec10} alt="" className='rec10'/>
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
                    <img src={rec11} alt="" className='rec10'/>
                </div>
                <div className="content">
                    <h3>Materials and Past Questions</h3>
                    <p>The app serves as a centralized platform where you can find a vast collection of study materials, including textsbooks, lecture notes, articles, 
                        and interactive multimedia resources with a comprehensive materials and past questions database. This feauture would provide you with easy access
                         to a wide range of study materials and past exam questions , enhancing your learning and exam preparation process  </p>
                </div>
            </div>
           
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
                        <div>
                            <img src={rec15} alt="" className='rec15'/>
                        </div>
                        <div>
                            <img src={the} alt="" className='the'/><br/>
                            <img src={next} alt="" className='next'/><br/>
                            <img src={founder} alt="" className='founders' />
                        </div>
                       
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
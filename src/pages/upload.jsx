import React, { useRef } from 'react';
import "../App.css";
import arrowRight from "../assets/arrow-left.png";
import cloud from "../assets/cloud.png";
import Footer from "../components/Footer";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Upload = () => {
  // Create a reference to the Swiper instance
  const swiperRef = useRef(null);

  const handleNextSlide = () => {
    // Use the swiperRef to access Swiper instance and slide to the next slide
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <>
      <Swiper
        ref={swiperRef} // Attach the reference to the Swiper component
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
     
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className="upload1">
            <div>
              <h1><span>+</span>Upload</h1>
            </div>
            <div onClick={handleNextSlide} className="arrow-button">
              <img src={arrowRight} alt="Next Slide" />
            </div>
          </div>
          <div className="upload2">
            <div className="box1"></div>
            <div className="box2"></div>
            <div className="box3"></div>
            <div className="box4"></div>
          </div>

          <div className="upload3">
            <div className="bg">
              <p>Browse file to upload</p>
              <img src={cloud} alt="" />
              <b>Supported Files</b>
              <p>JPG, JPEG, PNG</p>
            </div>
            <p className="max">Maximum of 4 pictures</p>
          </div>
          <div className="upload4">
            <form action="">
              <div className="formdives">
                <div>
                  <label htmlFor="text">Item Category</label>
                  <br />
                  <input type="text" placeholder="Price" />
                </div>
                <div>
                  <label htmlFor="">Category</label>
                  <br />
                  <select name="" id="">
                    <option value="Category">Category</option>
                  </select>
                </div>
              </div>
              <div className="desc desclaptop">
                <div className="lab">
                  <label htmlFor="">Description</label>
                </div>
                <div className="textarea">
                  <input type="text" placeholder="Description" className="descs" />
                </div>
              </div>
            </form>
          </div>
        </SwiperSlide>
        <SwiperSlide>
                <div className='upload1 audience1'>
                    <div>
                        <h1> Audience and destination </h1>
                    </div>
                    <div>
                        <img src={arrowRight} alt="" />
                    </div>
                </div>
                <div className='upload2 audience2'>
                    <div className='box1'></div>
                    <div className='box2'></div>
                    <div className='box3'></div>
                    <div className='box4'></div>
                </div>

                <div className='audience01'>
                    <h3>Select target audience</h3>
                    <p>Who would you like this post to reach</p>
                </div>

                <div class="audience3">
                <div class="box1">
                    <div>
                        <h3>Automatic</h3>
                        <p>UniBeta would target random people</p>
                    </div>
                    <div>
                        <input type="radio" name="customRadio" id="auto"/>
                        <div></div> 
                    </div>
                </div>

                <div class="box1">
                    <div>
                        <h3>In my Location</h3>
                        <p>UniBeta would target people in your area</p>
                    </div>
                    <div>
                        <input type="radio" name="customRadio" id="location"/>
                        <div></div> 
                    </div>
                </div>

                <div class="box1">
                    <div>
                        <h3>To All Audience</h3>
                        <p>UniBeta would target all users of the website</p>
                    </div>
                    <div>
                        <input type="radio" name="customRadio" id="all"/>
                        <div></div>
                    </div>
                </div>
            </div>

            <div className='audience4'>
                <h3>Select target destination</h3>
                <p>Where would you like this post to take audience to</p>
            </div>

            <div className='audience5'>

                <form action="">
                    <div className='box1 box01'>
                        <div className='okay'>
                            <div>
                                 <h3>Direct message</h3>
                                <p >send them to my direct message</p>
                            </div>
                            <div>
                                <input type='radio' className='link'/>
                            </div>
                        </div>
                        <div className='links'>
                            <input type='text' placeholder='Type link here'/>
                        </div>

                    </div>
                    <div className='box1 box02 '> 
                        <div className='okay'>
                            <div>
                                 <h3>Link</h3>
                                <p>Customers can link directly to your store or website</p>
                            </div>
                            <div>
                                <input type='radio' className='link'/>
                            </div>
                        </div>
                        <div className='links'>
                            <input type='text' placeholder='Type link here'/>
                        </div>

                    </div>
                </form>
            </div>

            

        </SwiperSlide>

       
      </Swiper>

      <Footer />
    </>
  );
};

export default Upload;

import React from 'react'
import unibeta from "../assets/unibetalogo.png";
import heart from "../assets/heart.png";
import heartproduct from "../assets/heartproduct.png";
import heart3 from "../assets/heart3.png";
import user from "../assets/user.png";
import searchmarket from "../assets/searchmarket.png";
import marketrectangle1 from "../assets/marketrectangle.png";
import preview1 from "../assets/preview.png";
import Footer from "../components/Footer"

const marketplace = () => {
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
        <div className='marketsearchsearch2'>
            <div>
              <input type="text" placeholder='search...' />
              <img src={searchmarket} alt="search..."/>
            </div>
        </div>

        <div className='marketsection2'>
            <div className='container'>
                <div className='productprice__container'>
                    <div className='price'>
                        <div>#4,500.00</div>
                    </div>
                    <div className='heartproduct'>
                        <img src={heartproduct} alt="" />
                    </div>
                </div>
                <div className='productpreview__container'>
                    <div>
                        <img src={preview1} alt="" />
                    </div>
                    <div>
                        <h2>HEXAGON STORES</h2>
                        <p>No 1 students friendly clothing brand</p>
                    </div>
                </div>
            </div>
            <div className='second'>
                <div className='productprice__container'>
                    <div className='price'>
                        <div>#4,500.00</div>
                    </div>
                    <div className='heartproduct'>
                        <img src={heartproduct} alt="" />
                    </div>
                </div>
                <div className='productpreview__container'>
                    <div>
                        <img src={preview1} alt="" />
                    </div>
                    <div>
                        <h2>HEXAGON STORES</h2>
                        <p>No 1 students friendly clothing brand</p>
                    </div>
                </div>
            </div>
        </div>

        <div className='marketsection3'>
            <button>Clothes and shoes</button>
            <button>Electronics</button>
            <button>Beauty</button>
            <button>Food </button>
        </div>

        <div className='marketsection2'>
            <div className='container'>
                <div className='productprice__container'>
                    <div className='price'>
                        <div>#4,500.00</div>
                    </div>
                    <div className='heartproduct'>
                        <img src={heartproduct} alt="" />
                    </div>
                </div>
                <div className='productpreview__container'>
                    <div>
                        <img src={preview1} alt="" />
                    </div>
                    <div>
                        <h2>HEXAGON STORES</h2>
                        <p>No 1 students friendly clothing brand</p>
                    </div>
                </div>
            </div>
        </div>

        
        <div className='marketsection4'>
            <div className='container'>
                <div className='productprice__container'>
                    <div className='price'>
                        <div>#4,500.00</div>
                    </div>
                    <div className='heartproduct'>
                        <img src={heart3} alt="" />
                    </div>
                </div>
                <div className='productpreview__container'>
                    <div>
                        <img src={preview1} alt="" />
                    </div>
                    <div>
                        <h2>HEXAGON STORES</h2>
                        <p>No 1 students friendly clothing brand</p>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='productprice__container'>
                    <div className='price'>
                        <div>#4,500.00</div>
                    </div>
                    <div className='heartproduct'>
                        <img src={heartproduct} alt="" />
                    </div>
                </div>
                <div className='productpreview__container'>
                    <div>
                        <img src={preview1} alt="" />
                    </div>
                    <div>
                        <h2>HEXAGON STORES</h2>
                        <p>No 1 students friendly clothing brand</p>
                    </div>
                </div>
            </div>
        </div>

        <Footer/>

    </>
  )
}

export default marketplace




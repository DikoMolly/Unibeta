import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

const carousel = () => {
  return (
    <div>
       <Carousel>
            <Carousel.Item>
                  <img src={rec10}/>
                  <Carousel.Caption>
                    <h3>First slide</h3>
                    <p>Nuella</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                  <img src={marketplace}/>
                  <Carousel.Caption>
                    <h3>First slide</h3>
                    <p>Nuella</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                  <img src={rec10}/>
                  <Carousel.Caption>
                    <h3>First slide</h3>
                    <p>Nuella</p>
              </Carousel.Caption>
            </Carousel.Item>
           
       </Carousel>

    </div>
  )
}

export default carousel
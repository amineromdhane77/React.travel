import React from 'react'
import './ImgCarouselStyles.css'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import borabora from '../../assets/borabora.jpg'
import borabora2 from '../../assets/borabora2.jpg'
import maldives from '../../assets/maldives.jpg'

function ImgCarousel() {
  return (
   <div  name='carousel' className='container'>
    <Carousel className='carousel ' showArrows={true} autoPlay={true} infiniteLoop={true}>
    <div>
        <img src={borabora} alt='/'/>
        <p className="legend">borabora</p>
    </div>
    <div>
        <img src={borabora2} alt='/' />
        <p className="legend">borabora2</p>
    </div>
    <div>
        <img src={maldives} alt='/' />
        <p className="legend">maldives</p>
    </div>
</Carousel>
</div>
  )
}

export default ImgCarousel

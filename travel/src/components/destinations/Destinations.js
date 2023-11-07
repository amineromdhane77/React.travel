import React from 'react'
import './DestinationsStyles.css'
import borabora from '../../assets/borabora.jpg'
import borabora2 from '../../assets/borabora2.jpg'
import maldives from '../../assets/maldives.jpg'
import maldives2 from '../../assets/maldives2.jpg'
import Keywest from '../../assets/keywest.jpg'
function Destinations() {
  return (
    <div name='destinations' className='destinations'>
     <div className='container'>
     <h1>All--Inclusive Resorts</h1>
     <p>On the Carebbian's Beaches</p>
     <div className='img-container'>
     <img className='span-3 image-grid-row-2' src={borabora} alt='/' />
     <img src={borabora2} alt='/' />
     <img src={maldives} alt='/' />
     <img src={maldives2} alt='/' />
     <img src={Keywest} alt='/' />
     </div>
     </div>
    </div>
  )
}

export default Destinations

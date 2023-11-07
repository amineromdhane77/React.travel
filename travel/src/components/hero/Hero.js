import React from 'react'
import './HeroStyle.css'
import video from '../../assets/Maldivevideo.mp4'
import {AiOutlineSearch} from 'react-icons/ai'
function Hero() {
  return (
    <div className='hero'>
    <video autoPlay loop muted id='video'>
    <source src={video} type='video/mp4' />
    </video>
      <div className='overlay'></div>
      <div className='content'>
      <h1>First Classe Travel</h1>
      <h2>Top 1% Worldwilde</h2>
      <form className='form'>
      <div>
      <input type='text' placeholder='Search a Desination'/> 
      </div>
      <div>
      <button><AiOutlineSearch className='icon'/></button>
      </div>
      </form>
      </div>
    </div>
   
  )
}

export default Hero

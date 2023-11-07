import React from 'react'
import {useState} from 'react'
import {BiSearch} from 'react-icons/bi'
import {BsPerson} from 'react-icons/bs'
import {AiOutlineCloseCircle} from 'react-icons/ai'
import {HiOutlineMenuAlt4} from "react-icons/hi"
import{FaFacebook,FaInstagram,FaPinterest,FaYoutube,FaTwitter} from 'react-icons/fa'
import './NavbarStyle.css'
import {Link} from 'react-scroll'

function Navbar() {
    const [nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)
  return (
    <div name='home' className={nav ? 'navbar navbar-bg' : 'navbar'}>
    <div className='logo'>
    <h2>Beaches.</h2>
    </div>
    
    <ul className='nav-menu' >
    <Link to='home' smooth={true} duration={500}><li>Home</li></Link>
    <Link to='destinations' smooth={true} duration={500}><li>Destinations</li></Link>
    <Link to='carousel' smooth={true} duration={500}><li>Travel</li></Link>
    <Link to='book' smooth={true} duration={500}><li>Book</li></Link>
    <Link to='views' smooth={true} duration={500}><li>Views</li></Link>
    
    </ul>
   
    <div className='nav-icons'>
    <BiSearch className='icon'/>
    <BsPerson className='icon'/>
    </div>
    <div className='hamburger' onClick={handleNav}>
    {!nav ? (<HiOutlineMenuAlt4 className='icon'/>): (<AiOutlineCloseCircle style={{color:'#000'}} className='icon' />)}
   
    </div>
    <div className={nav ? 'mobile-menu active' : 'mobile-menu'}>
    <ul className='mobile-nav'>
    <Link to='home' smooth={true} duration={500}><li>Home</li></Link>
    <Link to='destinations' smooth={true} duration={500}><li>Destinations</li></Link>
    <Link to='carousel' smooth={true} duration={500}><li>Travel</li></Link>
    <Link to='book' smooth={true} duration={500}><li>Book</li></Link>
    <Link to='views' smooth={true} duration={500}><li>Views</li></Link>
    
    </ul>
    <div className='mobile-menu-botton'>
    <div className='menu-icons'>
    <button>Search</button>
    <button>Account</button>
    </div>
    <div className='social-icons'>
    <FaFacebook className='icon' />
    <FaInstagram className='icon' />
    <FaPinterest className='icon' />
    <FaYoutube className='icon' />
    <FaTwitter className='icon' />
    </div>
    </div>
    
    
    </div>
      
    </div>
  )
}

export default Navbar

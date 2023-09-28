import React from 'react'
import logo from './logo.png';
import './header.scss';
import {HiOutlinePlus} from 'react-icons/hi';
import {IoMdDesktop} from 'react-icons/io';
import {MdOutlineTabletMac} from 'react-icons/md';
import {FaMobileAlt} from 'react-icons/fa';
import {RxCross2} from 'react-icons/rx';
import {FaShoppingCart} from 'react-icons/fa'

const Header = () => {
  return (
    <>
    <nav className='header'>
    <div className='logo'>
    <div className='logodiv'>
        <img src={logo} alt="logo" />
    </div>
    <div className='meal'>
        <HiOutlinePlus/>
        <p className='hp'>MEAL</p>
    </div>
    </div>
    <div className='icon'>
        <div className='desk'><IoMdDesktop/></div>
        <div className='tab'><MdOutlineTabletMac/></div>
        <div className='mobile'><FaMobileAlt /></div>
        <div className='cart'><FaShoppingCart /></div>
        <div className='cross'><RxCross2/></div>
    </div>
    </nav>
    </>
  )
}

export default Header;
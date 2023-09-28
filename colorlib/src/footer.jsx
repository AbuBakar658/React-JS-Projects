import React from 'react'
import './footer';
import {FaTripadvisor} from 'react-icons/fa'
import {BiLogoFacebook} from 'react-icons/bi'
import {BiLogoTwitter} from 'react-icons/bi'
import {BiLogoInstagram} from 'react-icons/bi'
import {AiFillHeart} from 'react-icons/ai'

const Home9 = () => {
  return (
    <div className='pg9'>
        <div className='detailss'>
            <div>
                <h3>About Meal</h3>
                <p>The Big Oxmox advised her not to do so, because there were thousands of bad Commas,wild Question Marks and devious Semikoli, but the Little Blind Text didn't listen.</p>
                <button>READ MORE</button>
            </div>
            <div>
                <h3>Lunch Service</h3>
                <p>Booking from 12:00pm — 1:30pm</p>
                <h3>Dinner Service</h3>
                <p>Everyday:</p>
                <p>Booking from 6:00pm — 9:00pm</p>
            </div>
            <div>
                <h3>Follow Along</h3>
                <ul>
                    <li><FaTripadvisor/></li>
                    <li><BiLogoTwitter/></li>
                    <li><BiLogoFacebook/></li>
                    <li><BiLogoInstagram/></li>
                </ul>
                <h3>Newsletter</h3>
                <input type="email" id='email' placeholder='Enter Email' />
            </div>
        </div>
        <div className='footertag'>
            <p>Copyright ©2023 All rights reserved | This template is made with <AiFillHeart/>  by <p className='office'>SpatialOX</p>.</p>
        </div>
    </div>
  )
}

export default Home9
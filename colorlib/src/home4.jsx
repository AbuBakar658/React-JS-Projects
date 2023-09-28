import React from 'react'
import './home.scss';
import img1 from './chef_1.jpg.webp'
import img2 from './chef_2.jpg.webp'
import {BiLogoFacebook} from 'react-icons/bi'
import {BiLogoTwitter} from 'react-icons/bi'
import {BiLogoInstagram} from 'react-icons/bi'

const Home4 = () => {
  return (
    <>
    <div className='title'><h2>Meet The Chefs</h2></div>
    <div className='pg4'>
    <div>
        <img src={img1} alt="" />
        <h3>Daniel Graham</h3>
        <p className='sub'>MASTER CHEF</p>
        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
             there live the blind texts.
             Separated they live in Bookmarksgrove right at the coast of the Semantics,
              a large language ocean.</p>
              <p>
              Separated they live in Bookmarksgrove right at the coast of the Semantics,
               a large language ocean. It is a paradisematic country.
              </p>
              <div className='icn'>
              <BiLogoFacebook/>
              <BiLogoTwitter/>
              <BiLogoInstagram/>
              </div>
    </div>
    <div>
        <img src={img2} alt="" />
        <h3>Nick Browning</h3>
        <p className='sub'>MASTER CHEF</p>
        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
             Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
              <p>
              Separated they live in Bookmarksgrove right at the coast of the Semantics,
               a large language ocean. It is a paradisematic country.
              </p>
              <div className='icn'>
              <BiLogoFacebook/>
              <BiLogoTwitter/>
              <BiLogoInstagram/>
              </div>
              


    </div>
    </div>
    </>
  )
}

export default Home4
import React from 'react'
import A from './a.webp';
import B from './b.jpg';
import C from './c.jpg';
import {BiSolidRightArrowAlt} from "react-icons/bi"
import './home.scss';

const Home2 = () => {
  return (
    <div className='sec'>
      <div className='pg2h'>
      <h2>Find your best food</h2>
      <p>Free Website Template For Restaurants Made by Colorlib</p>
      </div>
      <div className='window'>
        <div> <img src={A} alt="" /></div>
        <div className='text'>
<h4>Vegies</h4>
<h3>Beef Empanadas</h3>
<p className='p'>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
<p className='l'>Learn More<span><BiSolidRightArrowAlt/></span></p>
</div>
        <div>
          <img src={B} alt="" />
        </div>
        <div className='text'>
        <h4>FOOD</h4>
<h3>BUTTERMILK CHICKEN JIBARITOS</h3>
<p className='p'>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
<p className='l'>Learn More<span><BiSolidRightArrowAlt/></span></p>
        </div>
        <div>
          <img src={C} alt="" />
        </div>
        <div className='text'>
        <h4>FOOD</h4>
<h3>CHICKEN CHIMICHURRI CROQUETTES</h3>
<p className='p'>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.</p>
<p className='l'>Learn More<span><BiSolidRightArrowAlt/></span></p>
        </div>
      </div>
    </div>
  )
}

export default Home2
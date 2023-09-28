import React from 'react'
import './home.scss'
import log from './log.png';
const Home3 = () => {
  return (
      <div className='home3'>

        <div className='h3text'>
            <h2>The Restaurant</h2>
            <p>Far far away, behind the word mountains, far from the countries Vokalia 
                and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove 
                right at the coast of the Semantics, a large language ocean.
                </p>
                <p>It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>


        </div>
        <div className='imgdiv'>
            <img src={log} alt="" />
        </div>

      </div>
  )
}

export default Home3
import React from 'react'
import './home.scss'

const Home8 = () => {
  return (
    <div className='pg8'>
    <div className='headingpg8'>
        <h2>Get In Touch</h2>
    </div>
    <div className='resform'>
            <div className='field'>
            <div className='inputf'>
                <label >Name</label>
                <input type="text" id='name' />
            </div>
            <div className='inputf'>
                <label>Email</label>
                <input type='email' id='email' />
            </div>
            <div className='inputf'>
                <label>Contact</label>
                <input type='tel' id='tel' />
          </div>
          <div className='message'>
        <label >Message</label>
        <textarea name="message" id="message"></textarea>
        </div>
        <div className='bbtn'>
            <button>Send Massege</button>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Home8
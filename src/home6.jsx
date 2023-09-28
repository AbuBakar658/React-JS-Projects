import React from 'react'
import './home.scss'
import soup from './red-bean-soup.png'
import veg from './vegetable.png'
import cake from './pancakes.png'
import tray from './tray.png'
import salad from './salad.png'
import chicken from './chicken.png'

const Home6 = () => {
  return (
    <div className='pg6'>
        <div className='headingp6'>
            <h2>
            Other Services
            </h2>
            <p>
            Free Website Template For Restaurants Made by Colorlib
            </p>
        </div>

        <div className='service'>
            <div className='myy'>
                <img src={soup} alt="" />
                <h3>Quality Cuisine</h3>
                <p>Far far away, behind the word mountains,
                     far from the countries Vokalia and Consonantia,
                     there live the blind texts.</p>
            </div>
            <div className='myy'>
            <img src={veg} alt="" />
                <h3>Fresh Food</h3>
                <p>Far far away, behind the word mountains,
                     far from the countries Vokalia and Consonantia,
                     there live the blind texts.</p>
            </div>
            <div className='myy'>
            <img src={cake} alt="" />
                <h3>Bread & Pancake</h3>
                <p>Far far away, behind the word mountains,
                     far from the countries Vokalia and Consonantia,
                     there live the blind texts.</p>
            </div>
            <div className='myy'>
            <img src={tray} alt="" />
                <h3>Reserve Now</h3>
                <p>Far far away, behind the word mountains,
                     far from the countries Vokalia and Consonantia,
                     there live the blind texts.</p>
            </div>
            <div className='myy'>
            <img src={salad} alt="" />
                <h3>Fresh Vegies Salad</h3>
                <p>Far far away, behind the word mountains,
                     far from the countries Vokalia and Consonantia,
                     there live the blind texts.</p>
            </div>
            <div className='myy'>
            <img src={chicken} alt="" />
                <h3>Whole Chicken</h3>
                <p>Far far away, behind the word mountains,
                     far from the countries Vokalia and Consonantia,
                     there live the blind texts.</p>
            </div>
            
        </div>

    </div>
  )
}

export default Home6
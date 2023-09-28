import React from 'react'
import './home.scss';
import la from "./b.jpg"
import lb from "./a.webp"
import lc from "./c.jpg"
import { useState } from 'react';

const menu = {
    breakfast: [
      {
        name: 'Warm Spinach Dip & Chips',
        image: lb,
        price: '$10.49',
        description: 'Spinach and artichokes in a creamy cheese dip with warm tortilla chips & salsa.',
      },
      {
        name: 'Key Wast Machos',
        image: la,
        price: '$11.99',
        description: 'Crisp tortilla and plantain chips covered with lightly spiced ground beef, melted cheese, pickled jalapeños, guacamole, sour cream and salsa.',
      },
      {
        name: 'Crispy Onions Rings',
        image: lc,
        price: '$11.99',
        description: 'A heaping mountain of rings, handmade with Panko breading and shredded coconut flakes.',
      },
      {
        name: 'Lobster & Shrimp Quesadilla',
        image: lb,
        price: '$13.99',
        description: 'Lobster and tender shrimp, with onions, sweet peppers, spinach and our three cheese blend. Griddled and served with tomato salsa and sour cream.',
      }
    ],
    lunch: [
      {
        name: 'Jumbo Lump Crab Stack',
        image:la,
        price: '$12.49',
        description: 'Spinach and artichokes in a creamy cheese dip with warm tortilla chips & salsa.',
      },
      {
        name: 'Jamaican Chicken Wings',
        image: lb,
        price: '$15.99',
        description: 'Crisp tortilla and plantain chips covered with lightly spiced ground beef, melted cheese, pickled jalapeños, guacamole, sour cream and salsa.',
      },
      {
        name: 'Bahamian Seafood Chowder',
        image:lc,
        price: '$10.99',
        description: 'A heaping mountain of rings, handmade with Panko breading and shredded coconut flakes.',
      },
      {
        name: 'Lunch Item 1Grilled Chicken & Tropical Fruit on Mixed Greensa',
        image:la,
        price: '$12.99',
        description: 'Lobster and tender shrimp, with onions, sweet peppers, spinach and our three cheese blend. Griddled and served with tomato salsa and sour cream.',
      },
    ],
    dinner: [
      {
        name: 'Grilled Top Sirlion Steak',
        image: lc,
        price: '$18.99',
        description: 'Spinach and artichokes in a creamy cheese dip with warm tortilla chips & salsa.',
      },
      {
        name: 'Steak Oscar',
        image: lb,
        price: '$23.99',
        description: 'Crisp tortilla and plantain chips covered with lightly spiced ground beef, melted cheese, pickled jalapeños, guacamole, sour cream and salsa.',
      },
      {
        name: 'Skirt Steak Churrasco',
        image:la,
        price: '$20.99',
        description: 'A heaping mountain of rings, handmade with Panko breading and shredded coconut flakes.',
      },
      {
        name: 'Grilled Beef Steak',
        image:lc,
        price: '$20.99',
        description: 'Lobster and tender shrimp, with onions, sweet peppers, spinach and our three cheese blend. Griddled and served with tomato salsa and sour cream.',
      },
    ],
  };

const Home5 = () => {

    const [Bcolor, setBcolor] = useState('#ff7a5c');
    const [Lcolor, setLcolor] = useState('gray');
    const [Dcolor, setDcolor] = useState('gray');
    const [selectedMeal, setSelectedMeal] = useState("breakfast");

    function changeColor(meal, id)
    {
        if(id===1)
        {
            setBcolor("#ff7a5c");
            setLcolor("Gray")
            setDcolor("Gray")
        }
        else if(id===2)
        {
            setBcolor("Gray");
            setLcolor("#ff7a5c")
            setDcolor("Gray")
        }
        else if(id===3)
        {
            setBcolor("Gray");
            setLcolor("Gray")
            setDcolor("#ff7a5c")
        }

        setSelectedMeal(meal);
        
    }
   
  return (
    <div className='pg5'>
        <div className='textp5'>
            <h2>Menu</h2>
            <p>Free Website Template For Restaurants Made by Colorlib</p>
        </div>

        <div className='mlist'>
            <div className='l' onClick={e=>changeColor("breakfast",1)} style={{color:Bcolor, borderColor:Bcolor,transition:'0.3s'}}>BREAKFAST</div>
            <div className='l' onClick={e=>changeColor("lunch",2)} style={{color:Lcolor, borderColor:Lcolor,transition:'0.3s'}}>BRUNCH</div>
            <div className='l' onClick={e=>changeColor("dinner",3)} style={{color:Dcolor, borderColor:Dcolor,transition:'0.3s'}}>DINNER</div>
        </div>
        <div className='list'>
            
           { menu[selectedMeal].map((item, index) =>
           <div className='item'>
                <div className='imgdiv'><img src={item.image} alt="" /></div>
                <div className='details'>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                </div>
                <div className='price'>
                    <strong>{item.price}</strong>
                </div>
            </div>)}
            
            </div>
    </div>
  )
}

export default Home5;
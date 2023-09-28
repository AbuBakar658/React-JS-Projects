import React from 'react'
import { useState } from 'react'
import image1 from './person_1.jpg';
import image2 from './person_2.jpg';
import image3 from './person_3.jpg';
const reviews = [
    {
      id: 1,
      name: 'Geert Green',
      text:`"The Big Oxmox advised her not to do so, because there were thousands of bad Commas,wild Question Marks and devious Semikoli, but the Little Blind Text didn't listen. She packed her seven versalia,put her initial into the belt and made herself on the WebAssembly."`,
      rank:`CEO, Founder`,
      imageUrl:image1
   
    },
    {
      id: 3,
      name: 'Jane Smith',
      text: `"A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth."`,
      rank:`CEO, Founder`,
      imageUrl:image2
    },
    {
      id: 2,
      name: 'Dennis Roman',
      text: `"The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way."`,
      rank:`CEO, Founder`,
      imageUrl:image3
    },
  ];
const Home7 = () => {
        const [currentReview, setCurrentReview] = useState(reviews.find(review => review.id === 1));
         
        function changeReview(id)
      {
        if(currentReview.id!==id)
        setCurrentReview(reviews.find(review => review.id === id));
      }
  return (
    <div className='pg7'>
        <div className='headingpg7'>
            <h2>Customers Reviews</h2>

        </div>
        <div className='review'>
            <div className='rtdiv'>
            <p>{currentReview.text}</p>
            </div>
            <div className='rmdiv'>
            <img src={currentReview.imageUrl} alt="images" />
            </div>
            <div className='rddiv'>
            <h4>{currentReview.name}</h4>
            <p>{currentReview.rank}</p>
            </div>
            <div className='buttondiv'>
            <button onClick={() => changeReview(1)}></button>
            <button onClick={() => changeReview(2)}></button>
            <button onClick={() => changeReview(3)}></button>
            </div>
        </div>
    </div>
  )
}
export default Home7
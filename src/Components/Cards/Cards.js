import React from 'react';
import './Cards.css'; // Make sure you import the CSS

const Cards = ({ imageUrl, formLink ,name}) => {
  return (
    <div className="card">
      <div className="image-container">
        <img src={imageUrl} alt="Card" className="card-image" />
      </div>
      <div className='eventName'>
        <p>
            {name}
        </p>
      </div>
    </div>
  );
};

export default Cards;
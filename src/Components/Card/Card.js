import React from 'react';
import './Card.css'; // Make sure you import the CSS

const Card = ({ imageUrl, formLink }) => {
  return (
    <div className="card">
      <div className="image-container">
        <img src={imageUrl} alt="Card" className="card-image" />
      </div>
      <div className="card-footer">
        <a href={formLink} target="_blank" rel="noopener noreferrer" className="register-button">
          Register
        </a>
      </div>
    </div>
  );
};

export default Card;
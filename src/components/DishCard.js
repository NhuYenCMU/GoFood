import React from 'react';

const DishCard = ({ image, name, description, oldPrice, newPrice }) => (
  <div className="col-3">
    <div className="card" style={{ width: '18rem' }}>
      <img src={image} className="img-fluid" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text">
          <small className="text-muted text-decoration-line-through">{oldPrice}</small>
          <span className="ms-2">{newPrice}</span>
        </p>
        <button className="btn btn-primary">Add to Cart</button>
      </div>
    </div>
  </div>
);

export default DishCard;

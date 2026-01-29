import React from 'react';

const MenuItem = ({ name, description, price }) => {
  return (
    <div className="menu-item">
      <div className="menu-item-header">
        <h4 className="menu-item-name">{name}</h4>
        <span className="menu-item-price">${price}</span>
      </div>
      <p className="menu-item-description">{description}</p>
    </div>
  );
};

export default MenuItem;
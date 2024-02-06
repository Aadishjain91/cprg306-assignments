import React from 'react';

const Item = ({ name, quantity, category }) => {
  return (
    <li className="bg-blue-100 p-2 mb-2 rounded-md w-25">
      {name} - Quantity: {quantity} - Category: {category}
    </li>
  );
};

export default Item;
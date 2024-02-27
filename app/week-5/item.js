import React from 'react';

const Item = ({ name, quantity, category }) => {
    return (
        <li className="bg-white shadow-md rounded-lg p-5 mb-5">
            <div className="font-semibold text-lg">{name}</div>
            <div className="text-blue-600">{category}</div>
            <div className="text-sm text-blue-500">{`Quantity: ${quantity}`}</div>
        </li>
    );
};
export default Item;
import React, { useState } from 'react';
import Item from './item';
import items from './item.json';
import './styles.css';

function ItemList() {

    const [sortBy, setSortBy] = useState('name');



    const sortedItems = [...items];
    if (sortBy === 'name') {
        sortedItems.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'category') {
        sortedItems.sort((a, b) => a.category.localeCompare(b.category));
    }



    const isSortByName = sortBy === 'name';
    const isSortByCategory = sortBy === 'category';

    const handleSortByName = () => {
        setSortBy('name');
    };

    const handleSortByCategory = () => {
        setSortBy('category');
    };

    return (
        <div>
            <div>


                <button
                    onClick={handleSortByName}
                    className={`sort-button ${isSortByName ? 'selected' : ''} yellow-button`}
                >
                    Sort by Name
                </button>
                <button
                    onClick={handleSortByCategory}
                    className={`sort-button ${isSortByCategory ? 'selected' : ''} yellow-button`}
                >
                    Sort by Category
                </button>
            </div>




            <ul>
                {sortedItems.map((item) => (
                    <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
                ))}
            </ul>
        </div>
    );
}

export default ItemList;
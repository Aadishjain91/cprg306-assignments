"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import itemsData from './items.json';
import ItemList from './item-list';
import NewItem from './new-item';
import MealIdeas from './meal-ideas';
import './styles.css';
export default function Page() {
    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState();

    const handleItemSelect = selectedItem => {
        const cleanedItemName = selectedItem.split(' ')[0].trim();
        console.log(cleanedItemName);
        setSelectedItemName(cleanedItemName);
    };

    const handleAddItem = newItem => {
        setItems(prevItems => [...prevItems, newItem]);
    };

    return (
        <main style={{ display: 'flex' }}>
            <div style={{ flex: 1, marginRight: '20px' }}>
                <h1 style={{ fontSize: 45 }}>My Shopping List</h1>
                <NewItem onAddItem={handleAddItem} />
                <ItemList items={items} handleItemSelect={handleItemSelect} />
            </div>
            <div style={{ flex: 1 }}>
                <h2 style={{ fontSize: 30 }}>Meal Ideas</h2>
                <MealIdeas ingredient={selectedItemName} />
            </div>
            <div>
                <Link href="../">Click here to go to the main page</Link>
            </div>
        </main>
    );
}
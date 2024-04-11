"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import ItemList from './item-list';
import NewItem from './new-item';
import MealIdeas from './meal-ideas';
import { useUserAuth } from '../_utils/auth-context';
import { getItems, addItem } from '../_services/shopping-list-service';

export default function Page() {
    const { user } = useUserAuth();
    const [items, setItems] = useState([]);
    const [selectedItemName, setSelectedItemName] = useState('');



    const loadItems = async () => {
        if (user !== null) {
            const shoppingList = await getItems(user.uid);
            setItems(shoppingList);
        }
    };
    useEffect(() => {

        loadItems();


    });

    const handleItemSelect = selectedItem => {
        const cleanedItemName = selectedItem.name.split(',')[0].trim();
        setSelectedItemName(cleanedItemName);
    };

    const handleAddItem = async newItem => {
        if (user !== null) {
            setItems(prevItems => [...prevItems, newItem]);
            const itemDocID = await addItem(user.uid, newItem);
        }
    };



    return (
        <main style={{ display: 'flex' }}>
            <div style={{ flex: 1, marginRight: '20px' }}>
                <h1 style={{ fontSize: 45 }}>My Shopping List</h1>
                <NewItem onAddItem={handleAddItem} />
                <ItemList items={items} onItemSelect={handleItemSelect} />
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

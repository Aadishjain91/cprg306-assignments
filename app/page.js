"use client";
import Link from 'next/link'
import ItemList from "./item-list"

export default function Page() {
    return (
        <main>
            <h1 style={{ fontSize: 48 }}>My Shopping List</h1>
            <ItemList />

            <Link href="../">Click here to go back to main page</Link>
        </main>

    )
}
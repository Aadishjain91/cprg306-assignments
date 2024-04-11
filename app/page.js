"use client";
import Link from "next/link";
// import './globals.css'
export default function Page() {
    return (
        <main>
            <link rel="stylesheet" href="./styles.css" />
            <h1>CPRG 306:Assignments</h1>
            <ul>
                <li>
                    <h2><Link href="week-2">Week 2 Assignment</Link></h2>
                    <h2><Link href="week-3">Week 3 Assignment</Link></h2>
                    <h2><Link href="week-4">Week 4 Assignment</Link></h2>
                    <h2><Link href="week-5">Week 5 Assignment</Link></h2>
                    <h2><Link href="week-6">Week 6 Assignment</Link></h2>
                    <h2><Link href="week-7">Week 7 Assignment</Link></h2>
                    <h2><Link href="week-8">Week 8 Assignment</Link></h2>
                    <h2><Link href="week-10">Week 10 Assignment</Link></h2>
                </li>
            </ul>
        </main>
    );
}
// Path: app/week-5/item-list.js
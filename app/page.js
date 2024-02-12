import Link from "next/link";
export default function Page() {
  return (
    <main>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <ul>
        <li>
          <h2><Link href="week-2">Week 2 Assignment</Link></h2>
          <h2><Link href="week-3">Week 3 Assignment</Link></h2>
          <h2><Link href="week-4">Week 4 Assignment</Link></h2>
        </li>
      </ul>
    </main>
  );
}
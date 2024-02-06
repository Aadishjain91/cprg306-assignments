// import Navigation from '@/components/navigation'

import ItemList from "./week-3/item-list";


export default function Home() {
  return (
    <main className="bg-blue-950">
      <h1 className="text-4xl font-bold text-white p-4">Shopping List</h1>
      <ItemList />
    </main>
  )
}
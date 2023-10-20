import { Item } from "@/components/item"

export function App() {
  return (
    <main className="container">
      <ul>
        <li>
          <Item name="Jabłko" count={6} />
        </li>
      </ul>
    </main>
  )
}

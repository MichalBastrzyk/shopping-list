import { useAutoAnimate } from "@formkit/auto-animate/react"

import { Item } from "@/components/item"
import { useItems } from "@/hooks/useItems"
import { AddItemForm } from "@/components/add-item-form"

export function App() {
  const [autoAnimate] = useAutoAnimate()
  const { items, addItem, toggleCheck } = useItems()

  const checkedItems = items.filter((item) => item.checked === true)
  const uncheckedItems = items.filter((item) => item.checked === false)

  return (
    <>
      <div className="absolute left-0 top-0 -z-10 w-full">
        <div className="relative left-0 top-0 -z-10 h-auto w-full">
          <img src="/background.png" alt="" className="-z-20 h-auto w-full" />
          <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-b from-gray-300/20 to-gray-600"></div>
        </div>
      </div>
      <main className="container z-10 flex max-h-screen flex-col">
        <h1 className="mb-9 mt-16 text-2xl font-bold">Lista Zakupów</h1>
        <AddItemForm onSubmit={addItem} />
        <ul
          className="mt-10 flex flex-col space-y-2 lg:space-y-3"
          ref={autoAnimate}
        >
          {uncheckedItems.map((item) => (
            <li key={item.id}>
              <Item {...item} onCheckedChange={() => toggleCheck(item.id)} />
            </li>
          ))}
          {checkedItems.map((item) => (
            <li key={item.id}>
              <Item {...item} onCheckedChange={() => toggleCheck(item.id)} />
            </li>
          ))}
        </ul>
      </main>
    </>
  )
}

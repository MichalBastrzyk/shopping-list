import * as React from "react"

import { useAutoAnimate } from "@formkit/auto-animate/react"
import { useItems } from "@/hooks/useItems"

const Item = React.lazy(() => import("@/components/item"))
const AddItemForm = React.lazy(() => import("@/components/add-item-form"))

export function App() {
  const [autoAnimate] = useAutoAnimate()
  const { items, addItem, toggleCheck } = useItems()

  const checkedItems = items.filter((item) => item.checked === true)
  const uncheckedItems = items.filter((item) => item.checked === false)

  return (
    <>
      <div className="absolute left-0 top-0 -z-10 w-full">
        <div className="relative left-0 top-0 -z-10 h-auto w-full">
          <picture>
            <source
              srcSet="/background.webp"
              type="image/webp"
              width={1440}
              height={185}
            />
            <img
              src="/background.png"
              width={1440}
              height={185}
              alt=""
              className="-z-20 h-auto w-full"
              loading="eager"
            />
          </picture>
          <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-b from-gray-300/20 to-gray-600"></div>
        </div>
      </div>
      <main className="container z-10 flex max-h-screen flex-col">
        <div className="flex items-center space-x-2">
          <img
            src="/favicon.ico"
            alt="Ikona"
            className="mt-6 h-8 w-8"
            loading="lazy"
          />
          <h1 className="mb-9 mt-16 text-2xl font-bold">Lista Zakupów</h1>
        </div>
        <React.Suspense>
          <AddItemForm onSubmit={addItem} />
        </React.Suspense>
        {items.length !== 0 ? (
          <ul
            className="mt-10 flex flex-col space-y-2 lg:space-y-3"
            ref={autoAnimate}
          >
            {uncheckedItems.map((item) => (
              <li key={item.id}>
                <React.Suspense>
                  <Item
                    {...item}
                    onCheckedChange={() => toggleCheck(item.id)}
                  />
                </React.Suspense>
              </li>
            ))}
            {checkedItems.map((item) => (
              <li key={item.id}>
                <React.Suspense>
                  <Item
                    {...item}
                    onCheckedChange={() => toggleCheck(item.id)}
                  />
                </React.Suspense>
              </li>
            ))}
          </ul>
        ) : null}
      </main>
    </>
  )
}

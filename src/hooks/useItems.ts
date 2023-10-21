import * as React from "react"

import { type ProductTypeNames } from "@/config"

export interface Item {
  id: number
  name: string
  count: number
  unit: string
  tag: ProductTypeNames
  checked: boolean
}

export type ItemsAction =
  | {
      type: "ADD_ITEM"
      values: Omit<Item, "id" | "checked">
    }
  | {
      type: "TOGGLE_CHECK"
      id: number
    }

const itemsReducer = (state: Item[], action: ItemsAction): Item[] => {
  switch (action.type) {
    case "ADD_ITEM":
      return [
        ...state,
        {
          id: Date.now(),
          name: action.values.name,
          count: action.values.count,
          unit: action.values.unit,
          tag: action.values.tag,
          checked: false,
        },
      ]
    case "TOGGLE_CHECK":
      return state.map((item) =>
        item.id === action.id ? { ...item, checked: !item.checked } : item
      )

    default:
      return state
  }
}

const useItems = () => {
  const [items, dispatch] = React.useReducer(itemsReducer, [])

  const addItem = (values: Omit<Item, "id" | "checked">) => {
    dispatch({ type: "ADD_ITEM", values })
  }

  const toggleCheck = (id: number) => {
    dispatch({ type: "TOGGLE_CHECK", id })
  }

  return {
    items,
    addItem,
    toggleCheck,
  }
}

export { useItems }

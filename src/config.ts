import { Icons } from "@/components/icons"

export const productTypes = {
  bread: {
    name: "pieczywo",
    color: "yellow",
    Icon: Icons.sandwich,
  },
  vegetables: {
    name: "warzywa",
    color: "green",
    Icon: Icons.carrot,
  },
  fruits: {
    name: "owoce",
    color: "orange",
    Icon: Icons.apple,
  },
  beverages: {
    name: "napoje",
    color: "blue",
    Icon: Icons.milk,
  },
  meat: {
    name: "mięso",
    color: "pink",
    Icon: Icons.beef,
  },
}

export type ProductTypeNames = keyof typeof productTypes

export const units = {
  pieces: "szt",
  kg: "kg",
  g: "g",
  ml: "ml",
}

export type UnitNames = keyof typeof units

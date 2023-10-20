import * as React from "react"

import { cn } from "@/lib/utils"
import { ProductTypes, type ProductTypeName } from "@/config"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  type: ProductTypeName
}

function Badge({ className, type, ...props }: BadgeProps) {
  const color = ProductTypes[type].color
  return (
    <div
      className={cn(
        "focus:ring-ring inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-semibold lowercase transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2",
        `bg-${color}-dark text-${color} shadow hover:opacity-80`,
        className
      )}
      {...props}
    />
  )
}

export { Badge }

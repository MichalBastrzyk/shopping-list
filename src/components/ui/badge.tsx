import * as React from "react"

import { type VariantProps, cva } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "focus:ring-ring inline-flex items-center gap-1.5 rounded-full bg-green-dark px-4 py-2 text-xs font-semibold lowercase transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 shadow hover:opacity-50",
  {
    variants: {
      type: {
        bread: "bg-yellow-dark text-yellow",
        vegetables: "bg-green-dark text-green",
        fruits: "bg-orange-dark text-orange",
        beverages: "bg-blue-dark text-blue",
        meat: "bg-pink-dark text-pink",
      },
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, type, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ type }), className)} {...props} />
}

export { Badge }

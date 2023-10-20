import { Checkbox } from "@/components/ui/checkbox"

import { Icons } from "@/components/icons"

export interface ItemProps {
  name: string
  count: number
}

export function Item({ name, count }: ItemProps) {
  return (
    <div className="flex items-center justify-between rounded-lg border border-gray-300 bg-gray-400 p-4">
      <div className="flex items-center space-x-4">
        <Checkbox />
        <div className="flex flex-col">
          <span className="text-sm font-bold">{name}</span>
          <span className="text-xs text-gray-200">{count} jednostek</span>
        </div>
      </div>
      <div className="flex items-center space-x-3">
        <Icons.moreVertical className="h-4 w-4 text-brand-light" />
      </div>
    </div>
  )
}

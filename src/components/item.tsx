import { Checkbox } from "@/components/ui/checkbox"
import { Icons } from "@/components/icons"
import { Badge } from "@/components/ui/badge"

import { type Item } from "@/hooks/useItems"
import { productTypes } from "@/config"

export interface ItemProps extends Item {
  onCheckedChange?: (state: boolean) => void
}

export function Item({
  name,
  count,
  unit,
  tag,
  checked,
  onCheckedChange,
}: ItemProps) {
  const type = productTypes[tag]
  const TypeIcon = type.Icon

  return (
    <div
      className="group flex items-center justify-between rounded-lg border border-gray-300 bg-gray-400 p-4 data-[state=checked]:border-gray-400 data-[state=checked]:bg-gray-500"
      data-state={checked ? "checked" : null}
    >
      <div className="flex items-center space-x-4">
        <Checkbox
          checked={checked}
          onCheckedChange={onCheckedChange}
          className="peer"
        />
        <div className="flex flex-col group-data-[state=checked]:opacity-40">
          <span className="text-sm font-bold group-data-[state=checked]:font-normal group-data-[state=checked]:line-through">
            {name}
          </span>
          <span className="text-xs text-gray-200">
            {count} {unit}
          </span>
        </div>
      </div>
      <div className="flex items-center space-x-3">
        <Badge type={tag} className="group-data-[state=checked]:opacity-50">
          <TypeIcon className="h-4 w-4" />
          {type.name}
        </Badge>
        <Icons.moreVertical className="h-4 w-4 text-brand-light" />
      </div>
    </div>
  )
}

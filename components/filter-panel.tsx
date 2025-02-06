"use client"

import { Checkbox } from "@/components/ui/checkbox"
// import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import type { FilterState } from "@/components/category-layout"

interface FilterPanelProps {
  filters: FilterState
  onFilterChange: (filters: FilterState) => void
  categoriesDisabled?: boolean
}

const categories = [
  { id: "earrings", label: "Earrings" },
  { id: "necklaces", label: "Necklaces" },
  { id: "bracelets", label: "Bracelets" },
  { id: "rings", label: "Rings" },
]

const materials = [
  { id: "gold", label: "Gold" },
  { id: "silver", label: "Silver" },
  { id: "diamond", label: "Diamond" },
  { id: "pearl", label: "Pearl" },
]

export function FilterPanel({ filters, onFilterChange, categoriesDisabled = false }: FilterPanelProps) {
  // console.log(categoriesDisabled)
  const handleFilterChange = (type: keyof FilterState, value: string | [number, number]) => {
    const currentFilters = filters[type] as string[]
    onFilterChange({
    ...filters,
    [type]: currentFilters.includes(value as string)
        ? currentFilters.filter((item) => item !== value)
        : [...currentFilters, value as string],
    })
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between md:block">
        <h2 className="font-semibold text-lg md:text-base md:mb-4">Filters</h2>
      </div>
      <Separator className="md:hidden" />

      <Separator className="hidden md:block" />

      {!categoriesDisabled && (
      <div>
        <h3 className="font-medium mb-3">Categories</h3>
        {categories.map((category) => (
          <div key={category.id} className="flex items-center space-x-2 mb-2">
            <Checkbox
              id={`category-${category.id}`}
              checked={filters.categories.includes(category.id)}
              onCheckedChange={() => handleFilterChange("categories", category.id)}
            />
            <Label className="text-sm" htmlFor={`category-${category.id}`}>
              {category.label}
            </Label>
          </div>
        ))}
      </div>
      )}
      {!categoriesDisabled && (
      <Separator />
      )}

      <div>
        <h3 className="font-medium mb-3">Materials</h3>
        {materials.map((material) => (
          <div key={material.id} className="flex items-center space-x-2 mb-2">
            <Checkbox
              id={`material-${material.id}`}
              checked={filters.materials.includes(material.id)}
              onCheckedChange={() => handleFilterChange("materials", material.id)}
            />
            <Label className="text-sm" htmlFor={`material-${material.id}`}>
              {material.label}
            </Label>
          </div>
        ))}
      </div>

      {/* <Separator />

      <div>
        <h3 className="font-medium mb-3">Price Range</h3>
        <Slider
          min={0}
          max={1000}
          step={10}
          value={filters.priceRange}
          onValueChange={(value) => handleFilterChange("priceRange", value as [number, number])}
          className="mb-4"
        />
        <div className="flex justify-between text-sm">
          <span>${filters.priceRange[0]}</span>
          <span>${filters.priceRange[1]}</span>
        </div>
      </div> */}
    </div>
  )
}


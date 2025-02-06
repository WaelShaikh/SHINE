"use client"

import { useState } from "react"
import { FilterPanel } from "./filter-panel"
import { SortPanel } from "./sort-panel"
import { ProductGrid } from "./product-grid"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetHeader, SheetDescription } from "@/components/ui/sheet"
import { Filter, ArrowUpDown } from "lucide-react"

interface CategoryLayoutProps {
  title: string
  products: any[]
  defaultFilters?: FilterState
  categoriesDisabled?: boolean
}

export interface FilterState {
  categories: string[]
  materials: string[]
  // disabled: boolean
//   priceRange: [number, number]
}

export interface SortOption {
  value: string
  label: string
}

export function CategoryLayout({ title, products: initialProducts, defaultFilters, categoriesDisabled }: CategoryLayoutProps) {
  const [loading, setLoading] = useState(true)
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [isSortOpen, setIsSortOpen] = useState(false)
  const [activeFilters, setActiveFilters] = useState<FilterState>(
    defaultFilters || {
      categories: [],
      materials: [],
    //   priceRange: [0, 1000],
    },
  )
  const [sortBy, setSortBy] = useState("relevance")

  const filteredProducts = initialProducts.filter(
    (product) =>
      (activeFilters.categories.length === 0 || activeFilters.categories.includes(product.category)) &&
      (activeFilters.materials.length === 0 || activeFilters.materials.includes(product.material)), //&&
    //   product.price >= activeFilters.priceRange[0] &&
    //   product.price <= activeFilters.priceRange[1],
  )

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low-high":
        return a.price - b.price
      case "price-high-low":
        return b.price - a.price
      case "latest":
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      case "trending":
        return b.popularity - a.popularity
      default:
        return 0
    }
  })

  const handleSortChange = (value: string) => {
    setSortBy(value)
    setIsSortOpen(false)
  }

  return (
    <div className="mx-auto px-4 py-8 w-full">
      <h1 className="text-3xl font-bold mb-8">{title}</h1>

      {/* Mobile Filter/Sort Buttons */}
      <div className="flex items-center justify-between md:hidden">
        <Sheet open={isFilterOpen} onOpenChange={setIsFilterOpen}>
          <SheetTrigger asChild>
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" />
              Filters
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px]">
            <FilterPanel
              filters={activeFilters}
              onFilterChange={(filters) => {
                setActiveFilters(filters)
                // setIsFilterOpen(false)
              }}
              categoriesDisabled={categoriesDisabled}
            />
            <SheetTitle className="sr-only">
              Filter
            </SheetTitle>
            <SheetHeader className="sr-only">
              <SheetDescription>Filter Menu</SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>

        <Sheet open={isSortOpen} onOpenChange={setIsSortOpen}>
          <SheetTrigger asChild>
            <Button variant="outline">
              <ArrowUpDown className="mr-2 h-4 w-4" />
              Sort
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px]">
            <SortPanel value={sortBy} onChange={handleSortChange} />
            <SheetTitle className="sr-only">
              Sort
            </SheetTitle>
            <SheetHeader className="sr-only">
              <SheetDescription>Sort Menu</SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:flex gap-4">
        {/* Left sidebar - Filters */}
        <div className="w-48 shrink-0">
          <FilterPanel filters={activeFilters} onFilterChange={setActiveFilters} categoriesDisabled={categoriesDisabled} />
        </div>

        {/* Main content - Products */}
        {sortedProducts.length > 0 && (
        <div className="flex-1">
          <ProductGrid
            items={sortedProducts.map((product) => ({
              ...product,
              price: `$${product.price}`,
            }))}
          />
        </div>
        )}

        {sortedProducts.length === 0 && (
            <div className="flex-1 flex justify-center w-full mt-10">
                <p className="text-lg text-gray-500">No products found</p>
            </div>
        )}


        {/* Right sidebar - Sort */}
        <div className="w-48 shrink-0">
          <SortPanel value={sortBy} onChange={setSortBy} />
        </div>
      </div>

      {/* Mobile Layout */}
      {sortedProducts.length > 0 && (
      <div className="md:hidden">
        <ProductGrid
          items={sortedProducts.map((product) => ({
            ...product,
            price: `$${product.price}`,
          }))}
        />
      </div>
      )}

      {sortedProducts.length === 0 && (
            <div className="flex-1 flex justify-center w-full mt-10 md:hidden">
                <p className="text-lg text-gray-500">No products found</p>
            </div>
      )}
    </div>
  )
}


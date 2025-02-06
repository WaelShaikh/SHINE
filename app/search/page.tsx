// "use client"

// import { useState, useEffect } from "react"
// import { useSearchParams } from "next/navigation"
// import { CategoryLayout } from "@/components/category-layout"
// import { searchProducts } from "@/lib/search"
// import { Suspense } from 'react'


// interface Product {
//     name: string;
//     href: string;
//     image: string;
//     price: number;
//     material: string;
//     category: string;
//     createdAt: string;
//     popularity: number;
// }

// export default function SearchPage() {
//   const searchParams = useSearchParams()
//   const query = searchParams.get("q") || ""
//   const [searchResults, setSearchResults] = useState<Product[]>([])

//   useEffect(() => {
//     const fetchResults = async () => {
//       const results = await searchProducts(query)
//       setSearchResults(results)
//     }
//     fetchResults()
//   }, [query])

//   return (
//     <Suspense fallback={<div>Loading...</div>}>
//         <CategoryLayout
//         title={`Search Results for "${query}"`}
//         products={searchResults}
//         defaultFilters={{
//             categories: [],
//             materials: [],
//             // priceRange: [0, 1000],
//         }}
//         />
//     </Suspense>
//   )
// }





"use client"

import { useState, useEffect, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { CategoryLayout } from "@/components/category-layout"
import { searchProducts } from "@/lib/search"

interface Product {
  name: string;
  href: string;
  image: string;
  price: number;
  material: string;
  category: string;
  createdAt: string;
  popularity: number;
}

function SearchContent() {
  const searchParams = useSearchParams()
  const query = searchParams.get("q") || ""
  const [searchResults, setSearchResults] = useState<Product[]>([])
//   const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchResults = async () => {
    //   setLoading(true)
      const results = await searchProducts(query)
    //   setLoading(false)
      setSearchResults(results)
    }
    fetchResults()
  }, [query])

  return (
    // searchResults.length === 0 ? <div>No results found</div> :
    <CategoryLayout
      title={`Search Results for "${query}"`}
      products={searchResults}
      defaultFilters={{
        categories: [],
        materials: [],
        // priceRange: [0, 1000],
      }}
      categoriesDisabled={false}
    />
  )
}

export default function SearchPage() {
  return (
    // <Suspense fallback={<div>Loading...</div>}>
    <Suspense>
      <SearchContent />
    </Suspense>
  )
}
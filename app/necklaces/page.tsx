// "use client"
// import { CategoryLayout } from "@/components/category-layout"

// const necklaces = [
//   {
//     name: "Gold Hoops",
//     href: "/products/gold-hoops",
//     image: "/placeholder.svg",
//     price: 99,
//     material: "gold",
//     category: "necklaces",
//     createdAt: "2024-01-15",
//     popularity: 95,
//   },
//   {
//     name: "Pearl Studs",
//     href: "/products/pearl-studs",
//     image: "/placeholder.svg",
//     price: 79,
//     material: "pearl",
//     category: "necklaces",
//     createdAt: "2024-01-20",
//     popularity: 88,
//   },
//   {
//     name: "Diamond Studs",
//     href: "/products/diamond-studs",
//     image: "/placeholder.svg",
//     price: 299,
//     material: "diamond",
//     category: "necklaces",
//     createdAt: "2024-01-10",
//     popularity: 92,
//   },
//   {
//     name: "Silver Climbers",
//     href: "/products/silver-climbers",
//     image: "/placeholder.svg",
//     price: 69,
//     material: "silver",
//     category: "necklaces",
//     createdAt: "2024-01-18",
//     popularity: 85,
//   },
//   // Add more earrings as needed
// ]

// export default function NecklacesPage() {
//   return (
//     <CategoryLayout
//       title="Necklaces"
//       products={necklaces}
//       defaultFilters={{
//         categories: ["necklaces"],
//         materials: [],
//         priceRange: [0, 1000],
//       }}
//     />
//   )
// }




import { CategoryLayout } from "@/components/category-layout"
import { products } from "@/lib/products"

const necklaces = products.filter((product) => product.category === "necklaces")

export default function NecklacesPage() {
  return (
    <CategoryLayout
      title="Necklaces"
      products={necklaces}
      defaultFilters={{
        categories: ["necklaces"],
        materials: [],
        // priceRange: [0, 1000],
      }}
      categoriesDisabled={true}
    />
  )
}


// "use client"
// import { CategoryLayout } from "@/components/category-layout"

// const bracelets = [
//   {
//     name: "Gold Hoops",
//     href: "/products/gold-hoops",
//     image: "/placeholder.svg",
//     price: 99,
//     material: "gold",
//     category: "bracelets",
//     createdAt: "2024-01-15",
//     popularity: 95,
//   },
//   {
//     name: "Pearl Studs",
//     href: "/products/pearl-studs",
//     image: "/placeholder.svg",
//     price: 79,
//     material: "pearl",
//     category: "bracelets",
//     createdAt: "2024-01-20",
//     popularity: 88,
//   },
//   {
//     name: "Diamond Studs",
//     href: "/products/diamond-studs",
//     image: "/placeholder.svg",
//     price: 299,
//     material: "diamond",
//     category: "bracelets",
//     createdAt: "2024-01-10",
//     popularity: 92,
//   },
//   {
//     name: "Silver Climbers",
//     href: "/products/silver-climbers",
//     image: "/placeholder.svg",
//     price: 69,
//     material: "silver",
//     category: "bracelets",
//     createdAt: "2024-01-18",
//     popularity: 85,
//   },
//   // Add more earrings as needed
// ]

// export default function BraceletsPage() {
//   return (
//     <CategoryLayout
//       title="Bracelets"
//       products={bracelets}
//       defaultFilters={{
//         categories: ["bracelets"],
//         materials: [],
//         priceRange: [0, 1000],
//       }}
//     />
//   )
// }




import { CategoryLayout } from "@/components/category-layout"
import { products } from "@/lib/products"

const bracelets = products.filter((product) => product.category === "bracelets")

export default function BraceletsPage() {
  return (
    <CategoryLayout
      title="Bracelets"
      products={bracelets}
      defaultFilters={{
        categories: ["bracelets"],
        materials: [],
        // priceRange: [0, 1000],
      }}
      categoriesDisabled={true}

    />
  )
}


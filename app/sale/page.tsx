import { ProductGrid } from "@/components/product-grid"

const saleItems = [
  {
    name: "Gold Plated Hoops",
    href: "/products/gold-plated-hoops",
    image: "/placeholder.svg",
    price: "$39",
    originalPrice: "$59",
  },
  {
    name: "Crystal Stud Set",
    href: "/products/crystal-stud-set",
    image: "/placeholder.svg",
    price: "$29",
    originalPrice: "$45",
  },
  {
    name: "Silver Chain Necklace",
    href: "/products/silver-chain-necklace",
    image: "/placeholder.svg",
    price: "$49",
    originalPrice: "$79",
  },
  {
    name: "Beaded Bracelet",
    href: "/products/beaded-bracelet",
    image: "/placeholder.svg",
    price: "$19",
    originalPrice: "$35",
  },
  {
    name: "Vintage Locket",
    href: "/products/vintage-locket",
    image: "/placeholder.svg",
    price: "$59",
    originalPrice: "$89",
  },
  { name: "Boho Anklet", href: "/products/boho-anklet", image: "/placeholder.svg", price: "$15", originalPrice: "$25" },
  {
    name: "Pearl Hair Clip",
    href: "/products/pearl-hair-clip",
    image: "/placeholder.svg",
    price: "$12",
    originalPrice: "$20",
  },
  {
    name: "Gemstone Ring",
    href: "/products/gemstone-ring",
    image: "/placeholder.svg",
    price: "$69",
    originalPrice: "$99",
  },
]

export default function SalePage() {
  return (
    <main className="py-8 sm:py-10 lg:py-12">
      <div className="px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8">Sale Items</h1>
        <ProductGrid
          items={saleItems.map((item) => ({ ...item, name: `${item.name} (${item.price})` }))}
        />
      </div>
    </main>
  )
}


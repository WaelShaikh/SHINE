import { ProductGrid } from "@/components/product-grid"

const newArrivals = [
  { name: "Classic Gold Chain", href: "/products/classic-gold-chain", image: "/placeholder.svg", price: "$249" },
  { name: "Silver Hoop Earrings", href: "/products/silver-hoop-earrings", image: "/placeholder.svg", price: "$89" },
  { name: "Diamond Pendant", href: "/products/diamond-pendant", image: "/placeholder.svg", price: "$399" },
  { name: "Charm Bracelet", href: "/products/charm-bracelet", image: "/placeholder.svg", price: "$129" },
  { name: "Pearl Stud Earrings", href: "/products/pearl-stud-earrings", image: "/placeholder.svg", price: "$79" },
  { name: "Rose Gold Bangle", href: "/products/rose-gold-bangle", image: "/placeholder.svg", price: "$159" },
  { name: "Sapphire Ring", href: "/products/sapphire-ring", image: "/placeholder.svg", price: "$299" },
  { name: "Layered Necklace Set", href: "/products/layered-necklace-set", image: "/placeholder.svg", price: "$189" },
]

export default function BestSellersPage() {
  return (
    <main className="py-8 sm:py-10 lg:py-12">
      <div className="px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8">New Arrivals</h1>
        <ProductGrid items={newArrivals} />
      </div>
    </main>
  )
}


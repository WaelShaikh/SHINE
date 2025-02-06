// import { CategoryGrid } from "@/components/category-grid"
import { CollectionCarousel } from "@/components/collection-carousel"
import { ProductGrid } from "@/components/product-grid"
import { HorizontalScrollProducts } from "@/components/horizontal-scroll-products"
import { HorizontalProductList } from "@/components/horizontal-product-list"

// import EmblaCarousel from '@/components/EmblaCarousel'
// import { EmblaOptionsType } from 'embla-carousel'
// import './embla-carousel.css'

const collections = {
  earrings: [
    { name: "Gold Hoops", href: "/products/gold-hoops", image: "/placeholder.svg", price: "$299" },
    { name: "Pearl Studs", href: "/products/pearl-studs", image: "/placeholder.svg", price: "$299" },
    { name: "Crystal Drops", href: "/products/crystal-drops", image: "/placeholder.svg", price: "$299" },
    { name: "Silver Climbers", href: "/products/silver-climbers", image: "/placeholder.svg", price: "$299" },
    { name: "Silver Hoops", href: "/products/gold-hoops", image: "/placeholder.svg", price: "$299" },
    { name: "Crystal Studs", href: "/products/pearl-studs", image: "/placeholder.svg", price: "$299" },
    { name: "Gold Drops", href: "/products/crystal-drops", image: "/placeholder.svg", price: "$299" },
    { name: "Metal Climbers", href: "/products/silver-climbers", image: "/placeholder.svg", price: "$299" },
  ],
  bracelets: [
    { name: "Chain Link", href: "/products/chain-link", image: "/placeholder.svg", price: "$299" },
    { name: "Tennis Bracelet", href: "/products/tennis-bracelet", image: "/placeholder.svg", price: "$299" },
    { name: "Charm Bracelet", href: "/products/charm-bracelet", image: "/placeholder.svg", price: "$299" },
    { name: "Bangle Set", href: "/products/bangle-set", image: "/placeholder.svg", price: "$299" },
    { name: "Brass Link", href: "/products/chain-link", image: "/placeholder.svg", price: "$299" },
    { name: "Basketball Bracelet", href: "/products/tennis-bracelet", image: "/placeholder.svg", price: "$299" },
    { name: "Evil Bracelet", href: "/products/charm-bracelet", image: "/placeholder.svg", price: "$299" },
    { name: "Silver Bangle Set", href: "/products/bangle-set", image: "/placeholder.svg", price: "$299" },
  ],
  necklaces: [
    { name: "Pendant", href: "/products/pendant", image: "/placeholder.svg", price: "$299" },
    { name: "Choker", href: "/products/choker", image: "/placeholder.svg", price: "$299" },
    { name: "Layered Chain", href: "/products/layered-chain", image: "/placeholder.svg", price: "$299" },
    { name: "Statement", href: "/products/statement", image: "/placeholder.svg", price: "$299" },
    { name: "Star Pendant", href: "/products/pendant", image: "/placeholder.svg", price: "$299" },
    { name: "Black Choker", href: "/products/choker", image: "/placeholder.svg", price: "$299" },
    { name: "Triple Layered Chain", href: "/products/layered-chain", image: "/placeholder.svg", price: "$299" },
    { name: "Night Chain", href: "/products/statement", image: "/placeholder.svg", price: "$299" },
  ],
}

const newArrivals = [
  { name: "Diamond Stud Earrings", href: "/products/diamond-stud-earrings", image: "/placeholder.svg", price: "$299" },
  { name: "Rose Gold Necklace", href: "/products/rose-gold-necklace", image: "/placeholder.svg", price: "$199" },
  {
    name: "Sapphire Tennis Bracelet",
    href: "/products/sapphire-tennis-bracelet",
    image: "/placeholder.svg",
    price: "$499",
  },
  { name: "Pearl Drop Earrings", href: "/products/pearl-drop-earrings", image: "/placeholder.svg", price: "$159" },
]

const bestSellers = [
  { name: "Classic Gold Chain", href: "/products/classic-gold-chain", image: "/placeholder.svg", price: "$249" },
  { name: "Silver Hoop Earrings", href: "/products/silver-hoop-earrings", image: "/placeholder.svg", price: "$89" },
  { name: "Diamond Pendant", href: "/products/diamond-pendant", image: "/placeholder.svg", price: "$399" },
  { name: "Charm Bracelet", href: "/products/charm-bracelet", image: "/placeholder.svg", price: "$129" },
  { name: "Diamond Stud Earrings", href: "/products/diamond-stud-earrings", image: "/placeholder.svg", price: "$299" },
  { name: "Rose Gold Necklace", href: "/products/rose-gold-necklace", image: "/placeholder.svg", price: "$199" },
  { name: "Chain Link", href: "/products/chain-link", image: "/placeholder.svg", price: "$99" },
  { name: "Charm Bracelet 2", href: "/products/charm-bracelet-2", image: "/placeholder.svg", price: "$199" },

]

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
]

export default function Home() {
  return (
    <main>
      {/* <section className="py-12">
        <div className="container px-4">
          <div className="grid gap-6 lg:gap-8"> */}
      <section className="pt-8 sm:pt-10 lg:pt-12">
        <div className="px-4 sm:px-6 lg:px-8">
          {/* <div className="grid gap-4 sm:gap-6 lg:gap-8">
            <div className="aspect-[2/1] overflow-hidden rounded-3xl bg-[#f3f8d8]"> */}

          {/* <div className="gap-4 sm:gap-6 lg:gap-8 flex w-full items-center justify-center">
            <div className="aspect-[2/1] overflow-hidden rounded-3xl bg-[#f3f8d8] flex w-full items-center justify-center max-w-7xl">
              <div className="h-full w-full flex items-center justify-center">
                <h1 className="sm:text-4xl md:text-4xl font-bold text-3xl">NEW COLLECTION</h1>
              </div>
            </div>
          </div> */}
          
          <div className="gap-4 sm:gap-6 lg:gap-8 flex w-full items-center justify-center">
            <div className="bg-[#ffffff] flex items-center justify-center rounded-3xl bg-[#f3f8d8] flex w-full items-center justify-center">
              <CollectionCarousel />
            </div>
          </div>

          {/* <EmblaCarousel slides={Array.from(Array(5).keys())} options={{loop: true}} /> */}

        </div>
      </section>

        <div className="text-2xl font-bold font-SinkinSans900 flex items-center justify-center flex w-full items-center justify-center">
          COLLECTIONS
        </div>

      {/* <CategoryGrid title="EARRINGS" items={collections.earrings} />
      <CategoryGrid title="BRACELETS" items={collections.bracelets} />
      <CategoryGrid title="NECKLACES" items={collections.necklaces} /> */}
      <div className="px-4 sm:px-6 lg:px-8">
        <HorizontalProductList title="BEST SELLERS" items={bestSellers} viewAllHref="best-sellers"/>
      </div>
      <HorizontalScrollProducts title="SALE" items={saleItems} viewAllHref="sale"/>
      <ProductGrid title="NEW ARRIVALS" items={newArrivals} />
      <div className="px-4 sm:px-6 lg:px-8">
        <HorizontalProductList title="EARRINGS" items={collections.earrings} viewAllHref="earrings"/>
      </div>
      <div className="px-4 sm:px-6 lg:px-8">
        <HorizontalProductList title="BRACELETS" items={collections.bracelets} viewAllHref="bracelets"/>
      </div>
      <div className="px-4 sm:px-6 lg:px-8">
        <HorizontalProductList title="NECKLACES" items={collections.necklaces} viewAllHref="necklaces"/>
      </div>
    </main>
  )
}


import Link from "next/link"
import Image from "next/image"

interface ProductGridProps {
  title: string
  items: {
    name: string
    href: string
    image: string
    price: string
  }[]
}

export function ProductGrid({ title, items }: ProductGridProps) {
  return (
    <section className="py-6 sm:py-8">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-4 sm:mb-6">
          <h2 className="text-lg font-medium">{title}</h2>
          <Link
            href={`/${title.toLowerCase().replace(" ", "-")}`}
            className="text-sm text-muted-foreground hover:text-primary"
          >
            View all →
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          {items.map((item) => (
            <Link key={item.name} href={item.href} className="group">
              <div className="aspect-square overflow-hidden rounded-lg bg-muted">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  width={300}
                  height={300}
                  className="h-full w-full object-cover transition-all group-hover:scale-105"
                />
              </div>
              <div className="mt-2">
                <h3 className="text-sm font-medium">{item.name}</h3>
                <p className="text-sm text-muted-foreground">{item.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}


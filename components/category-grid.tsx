import Link from "next/link"
import { cn } from "@/lib/utils"

interface CategoryGridProps {
  title: string
  items: {
    name: string
    href: string
    image: string
  }[]
}

export function CategoryGrid({ title, items }: CategoryGridProps) {
  return (
    // <section className="py-8">
    //   <div className="container px-4">
    //     <div className="flex items-center justify-between mb-6">
    <section className="py-6 sm:py-8">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-4 sm:mb-6">
          <h2 className="text-lg font-medium">{title}</h2>
          <Link href={`/${title.toLowerCase()}`} className="text-sm text-muted-foreground hover:text-primary">
            View all →
          </Link>
        </div>
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4"> */}
        {/* <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6"> */}
        {/* <div className="grid grid-cols-4 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6"> */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          {items.map((item) => (
            <Link key={item.name} href={item.href} className="group aspect-square overflow-hidden rounded-lg bg-muted">
              <div className="h-full w-full object-cover transition-all hover:scale-105" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}


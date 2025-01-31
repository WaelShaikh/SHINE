"use client"

import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRef, useEffect, useState } from "react"

interface Product {
  name: string
  href: string
  image: string
  price: string
  originalPrice: string
}

interface HorizontalScrollProductsProps {
  title: string
  items: Product[]
  viewAllHref: string
}

export function HorizontalScrollProducts({ title, items, viewAllHref }: HorizontalScrollProductsProps) {
  // const scrollContainerRef = useRef<HTMLDivElement>(null)

  // const scroll = (direction: "left" | "right") => {
  //   if (scrollContainerRef.current) {
  //     const scrollAmount = direction === "left" ? -200 : 200
  //     scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" })
  //   }
  // }

  const [isMobile, setIsMobile] = useState(false)
  
    useEffect(() => {
      const checkMobile = () => setIsMobile(window.innerWidth < 768)
      checkMobile()
      window.addEventListener("resize", checkMobile)
      return () => window.removeEventListener("resize", checkMobile)
    }, [])
  
    const scrollContainerRef = useRef<HTMLDivElement>(null)
  
    const scroll = (direction: "left" | "right") => {
      if (scrollContainerRef.current) {
        const scrollAmount = isMobile ? 300 : 800
        scrollContainerRef.current.scrollBy({
          left: direction === "left" ? -scrollAmount : scrollAmount,
          behavior: "smooth",
        })
      }
    }

  return (
    <section className="py-6 sm:py-8 bg-red-50">
      <div className="px-4 sm:px-6 lg:px-8">
        {/* <div className="flex items-center justify-between mb-4 sm:mb-6">
          <h2 className="text-lg font-medium">{title}</h2>
          <Link
            href={`/${title.toLowerCase().replace(" ", "-")}`}
            className="text-sm text-muted-foreground hover:text-primary"
          >
            View all →
          </Link>
        </div> */}
        <div className="flex items-center items-end">
          <h2 className="flex text-xl font-bold mb-4">{title}</h2>
          <div className="flex flex-grow mb-4 justify-end">
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 rounded-full"
                onClick={() => scroll("left")}
                aria-label="Scroll left"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 rounded-full"
                onClick={() => scroll("right")}
                aria-label="Scroll right"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
        {/* <div className="relative"> */}
          <div ref={scrollContainerRef} className="overflow-x-auto pb-4 scrollbar-hide">
          <div className="flex space-x-3 sm:space-x-4">
            {items.map((item) => (
              <Link key={item.name} href={item.href} className="flex-none w-[120px] sm:w-[180px] md:w-[200px] lg:w-[240px]">
                <div className="aspect-square overflow-hidden rounded-lg bg-muted">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    width={300}
                    height={300}
                    className="h-full w-full object-cover transition-all hover:scale-105"
                  />
                </div>
                <div className="mt-2">
                  <h3 className="text-sm font-medium">{item.name}</h3>
                  <div className="flex items-center space-x-2">
                    <p className="text-sm font-bold text-red-600">{item.price}</p>
                    <p className="text-sm text-muted-foreground line-through">{item.originalPrice}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="flex justify-center">
          <Link href={viewAllHref}>
            <Button variant="outline" className="rounded-full h-12 px-20 m-2 text-lg">
              View all
            </Button>
          </Link>

          {/* <Link
            href={`/${title.toLowerCase().replace(" ", "-")}`}
            className="text-sm text-muted-foreground hover:text-primary"
          >
            View all →
          </Link> */}
        </div>
      </div>
    </section>
  )
}


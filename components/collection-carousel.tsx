"use client"

import React, { useEffect, useCallback } from "react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const collections = [
  { id: 1, title: "Summer Glow", color: "#f3f8d8" },
  { id: 2, title: "Autumn Hues", color: "#fde9d9" },
  { id: 3, title: "Winter Frost", color: "#e6f3f5" },
  // { id: 4, title: "Rainy Drip", color: "#2653f5" },
  // { id: 5, title: "Rainy Drip", color: "#2653f5" },
  // { id: 5, title: "Rainy Drip", color: "#2653f5" },
  // { id: 5, title: "Rainy Drip", color: "#2653f5" },
]

export function CollectionCarousel() {
  // const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()])
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 3000, stopOnInteraction: true })])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  // useEffect(() => {
  //   window.addEventListener("keydown", function(event) {
  //     // if (event.defaultPrevented) {
  //     //   return;
  //     // }
    
  //     switch(event.code) {
  //       case "ArrowLeft":
  //         if (emblaApi) emblaApi.scrollPrev();
  //         break;
  //       case "ArrowRight":
  //         if (emblaApi) emblaApi.scrollNext();
  //         break;
  //     }
    
  //     event.preventDefault();
  //   }, true);
  // }, [])


  return (
    <div className="relative h-full w-full overflow-hidden mb-20">
      <div className="overflow-visible flex items-center justify-center h-full w-full" ref={emblaRef}>
        <div className="flex w-full h-full items-center">
          {collections.map((collection) => (
            <div key={collection.id} className="flex-[0_0_80%]">
              <div
                className="aspect-[2/1] rounded-3xl flex items-center justify-center mx-4"
                style={{ backgroundColor: collection.color }}
              >
                <h2 className="text-3xl sm:text-4xl font-bold select-none">{collection.title}</h2>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute w-full h-full bg-gradient-to-r from-white via-20% via-white/0 to-white/0 w-1/2 left-0"></div>
        <div className="absolute w-full h-full bg-gradient-to-r from-white/0 via-80% via-white/0 to-white w-1/2 right-0"></div>
      </div>
      {/* <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 translate-x-20 bg-background/80 backdrop-blur-sm rounded-full"
        onClick={scrollPrev}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 -translate-x-20 bg-background/80 backdrop-blur-sm rounded-full"
        onClick={scrollNext}
      >
        <ChevronRight className="h-4 w-4" />
      </Button> */}
    </div>
  )
}


"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { useParams } from "next/navigation"
import { Star, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ProductGrid } from "@/components/product-grid"
import { products } from "@/lib/products"
import { HorizontalProductList } from "@/components/horizontal-product-list"
import { useCart } from "@/lib/cart-provider"

interface Review {
  id: number;
  author: string;
  rating: number;
  content: string;
}

interface Product {
  name: string;
  href: string;
  image: string;
  price: number;
  material: string;
  category: string;
  createdAt: string;
  popularity: number;
  rating: number;
  reviewCount: number;
  description: string;
  details: string[];
  images: string[];
  reviews: Review[];
}

export default function ProductPage() {
  const { slug } = useParams()
  const [product, setProduct] = useState<Product | any>(null)
  const [similarProducts, setSimilarProducts] = useState<any[]>([])
  const { addItem } = useCart()

  useEffect(() => {
    const currentProduct = products.find((p) => p.href === `/products/${slug}`)
    setProduct(currentProduct || null)

    if (currentProduct) {
      const similar = products
        // .filter((p) => p.category === currentProduct.category && p.href !== currentProduct.href)
        // .slice(0, 4)
      setSimilarProducts(similar)
    }
  }, [slug])

  if (!product) {
    // return <div>Loading...</div>
    return <div className="flex-1 flex justify-center w-full mt-10">
                <p className="text-lg text-gray-500">Loading</p>
           </div>
  }

  const handleAddToCart = () => {
    console.log("added")
    addItem({
      id: product.href,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.image,
    })
  }

  return (
    // <main className="container mx-auto px-4 py-8">
    <main className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4 overflow-hidden">
          <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              width={500}
              height={500}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="overflow-x-auto pb-4 scrollbar-hide flex space-x-3 ">
            {/* {product.images.slice(1).map((image, index) => ( */}
            {product.images.map((image: string, index: number) => (
              <div key={index} className="aspect-square overflow-hidden rounded-lg bg-gray-100 flex-none w-[120px] ">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${product.name} - View ${index + 2}`}
                  width={100}
                  height={100}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-6">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <div className="flex items-center space-x-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${i < Math.floor(product.popularity / 20) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-600">({product.popularity} popularity score)</span>
            <span className="text-sm text-gray-600">({product.reviewCount} reviews)</span>
          </div>
          <p className="text-2xl font-bold">${product.price}</p>
          <p className="text-gray-600">
            {/* Beautiful {product.material} {product.category}, perfect for any occasion. Crafted with care to bring out your inner shine. */}
            {product.description}
          </p>
          <Button size="lg" className="w-full" onClick={handleAddToCart}>
            <ShoppingCart className="mr-2 h-5 w-5" /> Add to Cart
          </Button>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="details">
              <AccordionTrigger>Product Details</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Material: {product.material}</li>
                  <li>Category: {product.category}</li>
                  <li>Added to collection: {new Date(product.createdAt).toLocaleDateString()}</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="care">
              <AccordionTrigger>Care Instructions</AccordionTrigger>
              <AccordionContent>
                <p>To keep your {product.name} looking its best:</p>
                <ul className="list-disc pl-5 space-y-2 mt-2">
                  <li>Store in a cool, dry place</li>
                  <li>Clean with a soft, lint-free cloth</li>
                  <li>Avoid contact with harsh chemicals</li>
                  <li>Remove before swimming or bathing</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="reviews">
                          <AccordionTrigger>Customer Reviews</AccordionTrigger>
                          <AccordionContent>
                            <div className="space-y-4">
                              {product.reviews.map((review:Review) => (
                                <div key={review.id} className="">
                                  <div className="flex items-center space-x-2 mb-2">
                                    <div className="flex">
                                      {[...Array(5)].map((_, i) => (
                                        <Star
                                          key={i}
                                          className={`h-4 w-4 ${i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                                        />
                                      ))}
                                    </div>
                                    <span className="font-medium">{review.author}</span>
                                  </div>
                                  <p className="text-gray-600">{review.content}</p>
                                </div>
                              ))}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
          </Accordion>
        </div>
      </div>
      <section className="mt-16 px-0">
        {/* <h2 className="text-2xl font-bold mb-6">Similar Products</h2> */}
        {/* <ProductGrid items={similarProducts.map((p) => ({ ...p, price: `$${p.price}` }))} /> */}
        <HorizontalProductList title="Similar Products" items={similarProducts}/>
      </section>
    </main>
  )
}


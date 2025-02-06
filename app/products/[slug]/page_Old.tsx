import Image from "next/image"
import { Star, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { HorizontalProductList } from "@/components/horizontal-product-list"

// This would typically come from a database or API
const product = {
  name: "Diamond Stud Earrings",
  slug: "diamond-stud-earrings",
  price: "$299",
  rating: 4.5,
  reviewCount: 123,
  description:
    "Elegant diamond stud earrings, perfect for any occasion. Made with 14k white gold and featuring 0.5 carat total weight of brilliant-cut diamonds.",
  details: [
    "Metal: 14k White Gold",
    "Diamond Weight: 0.5 carat total weight",
    "Diamond Cut: Brilliant",
    "Clarity: VS1-VS2",
    "Color: H-I",
  ],
  // images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
  images: ["/placeholder.svg", "/placeholder.svg"],
  reviews: [
    {
      id: 1,
      author: "Jane D.",
      rating: 5,
      content: "Absolutely stunning! These earrings are even more beautiful in person.",
    },
    { id: 2, author: "John S.", rating: 4, content: "Great quality for the price. My wife loves them." },
  ],
  faqs: [
    {
      question: "Are these earrings hypoallergenic?",
      answer: "Yes, the 14k white gold used in these earrings is hypoallergenic and suitable for sensitive ears.",
    },
    {
      question: "Do these earrings come with a certificate of authenticity?",
      answer:
        "Yes, each pair of Diamond Stud Earrings comes with a certificate of authenticity detailing the diamond specifications.",
    },
  ],
}

const similarProducts = [
  { name: "Pearl Stud Earrings", href: "/products/pearl-stud-earrings", image: "/placeholder.svg", price: "$99" },
  {
    name: "Sapphire Stud Earrings",
    href: "/products/sapphire-stud-earrings",
    image: "/placeholder.svg",
    price: "$199",
  },
  { name: "Gold Hoop Earrings", href: "/products/gold-hoop-earrings", image: "/placeholder.svg", price: "$149" },
  { name: "Silver Drop Earrings", href: "/products/silver-drop-earrings", image: "/placeholder.svg", price: "$79" },
]

export default function ProductPage({ params }: { params: { slug: string } }) {
  // In a real application, you would fetch the product data based on the slug
  // const product = await getProduct(params.slug)

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4 overflow-hidden">
          <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
            <Image
              src={product.images[0] || "/placeholder.svg"}
              alt={product.name}
              width={500}
              height={500}
              className="h-full w-full object-cover"
            />
          </div>
          {/* <div className="grid grid-cols-4 gap-4"> */}
          <div className="overflow-x-auto pb-4 scrollbar-hide flex space-x-3 ">
            {/* {product.images.slice(1).map((image, index) => ( */}
            {product.images.map((image, index) => (
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
                  className={`h-5 w-5 ${i < Math.floor(product.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-600">({product.reviewCount} reviews)</span>
          </div>
          <p className="text-2xl font-bold">{product.price}</p>
          <p className="text-gray-600">{product.description}</p>
          <Button size="lg" className="w-full">
            <ShoppingCart className="mr-2 h-5 w-5" /> Add to Cart
          </Button>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="details">
              <AccordionTrigger>Product Details</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc pl-5 space-y-2">
                  {product.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="reviews">
              <AccordionTrigger>Customer Reviews</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  {product.reviews.map((review) => (
                    <div key={review.id} className="border-b pb-4">
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
            <AccordionItem value="faqs">
              <AccordionTrigger>FAQs</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  {product.faqs.map((faq, index) => (
                    <div key={index}>
                      <h4 className="font-medium mb-2">{faq.question}</h4>
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      <section className="mt-16 absolute w-full left-0 sm:relative">
        {/* <h2 className="text-2xl font-bold mb-6">Similar Products</h2> */}
        <HorizontalProductList title="Similar Products" items={similarProducts} />
      </section>
    </main>
  )
}


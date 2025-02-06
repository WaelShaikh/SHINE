import { products } from "./products"

export async function searchProducts(query: string) {
  // Simulate an API call with a delay
//   await new Promise((resolve) => setTimeout(resolve, 1000))

  const lowercaseQuery = query.toLowerCase()
  return products.filter(
    (product) =>
      product.name.toLowerCase().includes(lowercaseQuery) ||
      product.category.toLowerCase().includes(lowercaseQuery) ||
      product.material.toLowerCase().includes(lowercaseQuery),
  )
}


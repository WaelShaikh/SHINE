// import { Inter } from "next/font/google"
// import { SiteHeader } from "@/components/site-header"

// const inter = Inter({ subsets: ["latin"] })

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>
//         <div className="relative flex min-h-screen flex-col">
//           <SiteHeader />
//           <div className="flex-1">{children}</div>
//         </div>
//       </body>
//     </html>
//   )
// }
import { Inter } from "next/font/google"
import { SiteHeader } from "@/components/site-header"
import { CartProvider } from "@/lib/cart-provider"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* <meta name="theme-color" content="#f7ffbf" /> */}
        <body className={inter.className}>
        <CartProvider>
          {/* <div className="relative flex min-h-screen flex-col mx-auto max-w-7xl"> */}
          <div className="relative flex min-h-screen flex-col mx-auto">
            <SiteHeader />
            <div className="flex-1 w-full">{children}</div>
          </div>
          </CartProvider>
        </body>
      </head>
    </html>
  )
}



import './globals.css'
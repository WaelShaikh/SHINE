"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ShoppingBag, User, Menu, Search, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetHeader, SheetDescription } from "@/components/ui/sheet"
// import { Sheet, SheetContent, SheetTrigger, type SheetProps } from "@/components/ui/sheet"
// import { cn } from "@/lib/utils"

// const navigation = [
//   { name: "EARRINGS", href: "/earrings" },
//   { name: "BRACELETS", href: "/bracelets" },
//   { name: "NECKLACES", href: "/necklaces" },
// ]

const navigation = [
  {
    name: "SHOP",
    href: "#",
    items: [
      { name: "EARRINGS", href: "/earrings" },
      { name: "BRACELETS", href: "/bracelets" },
      { name: "NECKLACES", href: "/necklaces" },
    ],
  },
  { name: "SALE", href: "/sale" },
  { name: "NEW ARRIVALS", href: "/new-arrivals" },
  { name: "BEST SELLERS", href: "/best-sellers" },
]

// const NoOverlaySheet = ({ ...props }: SheetProps) => <Sheet modal={false} {...props} />

export function SiteHeader() {

  const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {
    // This code will only run on the client side, after the component mounts
    const handleKeyDown = (event: KeyboardEvent) => {
      // switch (event.code) {
      //   case "Escape":
      //     event.preventDefault();
      //     setSearchVisible(false);
      //     setSearchQuery("");
      //     break;
      //   case "Enter":
      //     handleSearch();
      //     break;
      // }
      if(event.code == "Escape") {
        event.preventDefault();
        setSearchVisible(false);
        setSearchQuery("");
      }
      if(event.key == "Enter")
        handleSearch();
    }

    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [searchQuery])

  const handleSearch = () => {
    if (searchQuery.trim()) {
      console.log("Searching for:", searchQuery)
      alert("Searching for:"+ searchQuery)
      // Add your search functionality here, such as making an API call
    }
  }

  // window.addEventListener("keydown", function(event) {
  
  //   switch(event.code) {
  //     case "Escape":
  //       event.preventDefault();
  //       setSearchVisible(false);
  //       break;
  //   }
  // }, true);

  const [searchVisible, setSearchVisible] = useState(false)

  const toggleSearch = () => {
    // setSearchVisible((prev) => !prev)
    setSearchVisible(true);
    document.getElementById("text-box")?.focus();
  }

  const closeSearch = () => {
    // setSearchVisible((prev) => !prev)
    setSearchVisible(false);
    setSearchQuery("");
  }


  // function showSearch() {
  //   const searchbar = document.getElementById("searchbar");
  //   searchbar.style.transform = "none";
  // }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      {/* <div className="container flex h-16 items-center justify-between px-4"> */}
      <div className="flex h-10 items-center justify-between px-0 sm:px-4 lg:px-4">
        <div className="flex md:hidden">
          <Sheet>
          {/* <NoOverlaySheet> */}
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden !outline-none focus:outline-none">
                <Menu className="h-6 w-6 !outline-none focus:outline-none" />
                <span className="sr-only !outline-none focus:outline-none">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[300px]">
            <SheetTitle className="sr-only">
              Menu
            </SheetTitle>
            <SheetHeader className="sr-only">
              <SheetDescription>Side Menu</SheetDescription>
            </SheetHeader>
            <br />
            <span className="text-xl font-bold font-SinkinSans900">COLLECTIONS</span>
            <br />
            <br />
              <nav className="flex flex-col gap-4">
                {/* {navigation.map((item) => ( */}
                {navigation.map((item) =>
                  item.items ? (
                    <div key={item.name}>
                      <h2 className="text-lg font-SinkinSans300 font-bold mb-2">{item.name}</h2>
                      {/* <h2 className="text-lg font-medium mb-2 flex items-center">
                        {item.name}
                        <ChevronDown className="ml-1 h-4 w-4" />
                      </h2> */}
                      {item.items.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="pl-3 block py-2 text-sm text-[#333] hover:text-primary font-SinkinSans100"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-md font-bold font-SinkinSans300 transition-colors hover:text-primary"
                  >
                    {item.name}
                  </Link>
                // ))}
                  ),
                )}
              </nav>
            </SheetContent>
          </Sheet>
          {/* </NoOverlaySheet> */}
        </div>

        {/* <Link href="/" className="flex items-center space-x-2"> */}
        <Link href="/" className="absolute left-1/2 transform -translate-x-1/2 md:relative md:left-[0] md:transform-none md:flex md:items-center md:space-x-2">
          <span className="text-xl font-bold font-SinkinSans900">✦ SHINE</span>
        </Link>

        {/* <Link href="/" className="flex items-center space-x-2 sm:absolute sm:left-1/2 sm:transform sm:-translate-x-1/2">
          <span className="text-xl font-bold">✦ SHINE</span>
        </Link> */}

        {/* <Link href="/" className="items-center space-x-2 lg:relative sm:absolute sm:left-1/2 sm:transform sm:-translate-x-1/2">
          <span className="text-xl font-bold">✦ SHINE</span>
        </Link> */}

        {/* <nav className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex items-center space-x-20">
          {navigation.map((item) => (
            <Link key={item.name} href={item.href} className="text-sm font-bold font-SinkinSans300 transition-colors hover:text-primary">
              {item.name}
            </Link>
          ))}
        </nav> */}

        {/* <nav className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex items-center space-x-12"> */}
        <nav className="hidden md:flex absolute left-[200px] space-x-10">
          {navigation.map((item) =>
            item.items ? (
              <div key={item.name} className="relative group">
                {/* <button className="text-sm font-medium transition-colors hover:text-primary">{item.name}</button> */}
                <button className="text-sm font-medium transition-colors hover:text-primary flex items-center">
                  {item.name}
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute -left-4 mt-2 w-auto rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out">
                  <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    {item.items.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                        role="menuitem"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                {item.name}
              </Link>
            ),
          )}
        </nav>

        <div className="flex items-center -space-x-3 sm:space-x-2">
          <Button variant="ghost" size="icon">
            <ShoppingBag className="h-5 w-5" />
            <span className="sr-only">Shopping cart</span>
          </Button>
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
            <span className="sr-only">Account</span>
          </Button>
          <Button variant="ghost" size="icon" onClick={toggleSearch}>
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>
        </div>

      </div>





      {/* <div id="searchbar" className="absolute bg-[#ffffff] top-0 w-full h-10 flex mx-auto items-center justify-between px-4 -translate-y-full"> */}
      <div id="searchbar" className={`absolute bg-[#ffffff] top-0 w-full h-10 space-x-2 flex mx-auto items-center justify-between px-4 transition-transform duration-300 ease-in-out ${
          searchVisible ? "translate-y-0" : "-translate-y-full"
        }`}>
        <div className="relative w-full h-full">
          <div className="absolute inset-y-0 flex items-center ps-3 pointer-events-none h-full">
          </div>
          <input type="text" id="text-box" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="!outline-none text-gray-900 block w-full h-full border-transparent focus:border-transparent" placeholder="Search..." required />
        </div>
        <Button variant="ghost" size="icon" className="px-2.5 !outline-none focus:outline-none" onClick={handleSearch}>
          <Search className="h-5 w-5" />
          <span className="sr-only">Search</span>
        </Button>
        {/* <Button variant="ghost" size="icon" className="px-2.5 !outline-none focus:outline-none">
          <Close className="h-5 w-5" />
          <span className="sr-only">Close</span>
        </Button> */}
        <Button variant="ghost" size="icon" className="px-2.5 !outline-none focus:outline-none" onClick={closeSearch}>
          <X className="h-5 w-5" />
          <span className="sr-only">Toggle Search</span>
        </Button>
      </div>



    </header>
  )
}


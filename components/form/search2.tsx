"use client"

import { useState, useEffect, useCallback } from "react"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import Image from "next/image"
import { Search, Star } from "lucide-react"

type Product = {
  id: string
  name: string
  rating: number
  reviews: number
  price: number
  image: string
}

const products: Product[] = [
  { id: "1", name: "Wireless Earbuds", rating: 5, reviews: 121, price: 89.00, image: "/placeholder.svg?height=40&width=40" },
  { id: "2", name: "Wireless Earbuds Pro", rating: 5, reviews: 121, price: 599.00, image: "/placeholder.svg?height=40&width=40" },
  { id: "3", name: "Bose BT Earphones", rating: 5, reviews: 121, price: 89.00, image: "/placeholder.svg?height=40&width=40" },
  { id: "4", name: "Beats solo3", rating: 5, reviews: 121, price: 199.95, image: "/placeholder.svg?height=40&width=40" },
  { id: "5", name: "Tao Tronics Earbuds", rating: 5, reviews: 121, price: 59.00, image: "/placeholder.svg?height=40&width=40" },
]

export default function SearchComponent() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products)
  const [isOpen, setIsOpen] = useState(false)

  const filterProducts = useCallback((term: string) => {
    const lowercasedTerm = term.toLowerCase()
    return products.filter(product =>
      product.name.toLowerCase().includes(lowercasedTerm)
    )
  }, [])

  useEffect(() => {
    const results = filterProducts(searchTerm)
    setFilteredProducts(results)
    setIsOpen(searchTerm.length > 0)
  }, [searchTerm, filterProducts])

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
  }

  return (
    <div className="w-full max-w-md mx-auto relative">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        <Input
          className="pl-10 pr-4 py-2 w-full"
          placeholder="Search headphones..."
          value={searchTerm}
          onChange={handleSearchChange}
          aria-label="Search headphones"
        />
      </div>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="p-0 w-full max-w-md mx-auto absolute top-full left-0 mt-1">
          <ScrollArea className="h-[300px] rounded-md">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <div key={product.id} className="flex items-center p-4 border-b last:border-b-0 hover:bg-gray-50">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div className="ml-4 flex-grow">
                    <h3 className="font-semibold">{product.name}</h3>
                    <div className="flex items-center">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                      <span className="text-sm text-gray-500 ml-1">({product.reviews})</span>
                    </div>
                  </div>
                  <span className="font-bold">${product.price.toFixed(2)}</span>
                </div>
              ))
            ) : (
              <div className="p-4 text-center text-gray-500">No products found</div>
            )}
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </div>
  )
}
'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { DropdownMenu, DropdownMenuContent, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ShirtIcon, ArrowUpDown, Filter, Gamepad2Icon } from "lucide-react"
import Image from "next/image"

const products = [
  { id: 1, name: "Classic Red Football Shirt", type: "football", price: 59.99, team: "Manchester United", image: "/placeholder.svg?height=200&width=200" },
  { id: 2, name: "Blue Basketball Jersey", type: "basketball", price: 49.99, team: "Golden State Warriors", image: "/placeholder.svg?height=200&width=200" },
  { id: 3, name: "Vintage Green Football Kit", type: "football", price: 79.99, team: "Celtic FC", image: "/placeholder.svg?height=200&width=200" },
  { id: 4, name: "Purple Lakers Jersey", type: "basketball", price: 69.99, team: "LA Lakers", image: "/placeholder.svg?height=200&width=200" },
  { id: 5, name: "White Real Madrid Home Shirt", type: "football", price: 89.99, team: "Real Madrid", image: "/placeholder.svg?height=200&width=200" },
  { id: 6, name: "Chicago Bulls Red Jersey", type: "basketball", price: 59.99, team: "Chicago Bulls", image: "/placeholder.svg?height=200&width=200" },
  { id: 7, name: "Barcelona Striped Football Shirt", type: "football", price: 84.99, team: "FC Barcelona", image: "/placeholder.svg?height=200&width=200" },
  { id: 8, name: "Boston Celtics Green Jersey", type: "basketball", price: 64.99, team: "Boston Celtics", image: "/placeholder.svg?height=200&width=200" },
]

export function ProductShowcaseComponent() {
  const [sortBy, setSortBy] = useState("'name'")
  const [filterType, setFilterType] = useState<string[]>([])

  const sortedAndFilteredProducts = products
    .filter(product => filterType.length === 0 || filterType.includes(product.type))
    .sort((a, b) => {
      if (sortBy === "'price'") {
        return a.price - b.price
      } else if (sortBy === "'name'") {
        return a.name.localeCompare(b.name)
      }
      return 0
    })

  const handleFilterChange = (type: string) => {
    setFilterType(prev => 
      prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]
    )
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Shirt Centre Kigali Product Showcase</h1>
        
        <div className="flex justify-between items-center mb-8">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                <ArrowUpDown className="mr-2 h-4 w-4" />
                Sort by: {sortBy === "'name'" ? "'Name'" : "'Price'"}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuRadioGroup value={sortBy} onValueChange={setSortBy}>
                <DropdownMenuRadioItem value="name">Name</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="price">Price</DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                <Filter className="mr-2 h-4 w-4" />
                Filter
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <div className="p-2">
                <div className="flex items-center space-x-2 mb-2">
                  <Checkbox 
                    id="football" 
                    checked={filterType.includes("'football'")}
                    onCheckedChange={() => handleFilterChange("'football'")}
                  />
                  <Label htmlFor="football">Football</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="basketball" 
                    checked={filterType.includes("'basketball'")}
                    onCheckedChange={() => handleFilterChange("'basketball'")}
                  />
                  <Label htmlFor="basketball">Basketball</Label>
                </div>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sortedAndFilteredProducts.map(product => (
            <Card key={product.id} className="flex flex-col">
              <CardHeader>
                <Image
                  src={product.image}
                  alt={product.name}
                  width={200}
                  height={200}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent className="flex-grow">
                <CardTitle className="text-lg font-semibold mb-2">{product.name}</CardTitle>
                <p className="text-sm text-gray-600 mb-2">{product.team}</p>
                <div className="flex items-center">
                  {product.type === "'football'" ? (
                    <ShirtIcon className="h-5 w-5 mr-2 text-blue-500" />
                  ) : (
                    <Gamepad2Icon className="h-5 w-5 mr-2 text-orange-500" />
                  )}
                  <span className="text-sm capitalize">{product.type}</span>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <span className="text-lg font-bold">${product.price.toFixed(2)}</span>
                <Button variant="outline">Add to Cart</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
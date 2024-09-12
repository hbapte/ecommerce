import { Card, CardContent } from "@/components/ui/card"

const brands = [
  { name: "Staples", logo: "/j1.webp?height=80&width=80", color: "bg-red-600" },
  { name: "Sprouts", logo: "/placeholder.svg?height=80&width=80", color: "bg-green-600" },
  { name: "Grocery outlet", logo: "/placeholder.svg?height=80&width=80", color: "bg-pink-600" },
  { name: "Mollie stones", logo: "/placeholder.svg?height=80&width=80", color: "bg-black" },
  { name: "Sports Basement", logo: "/placeholder.svg?height=80&width=80", color: "bg-green-500" },
  { name: "Container Store", logo: "/placeholder.svg?height=80&width=80", color: "bg-blue-600" },
  { name: "Target", logo: "/placeholder.svg?height=80&width=80", color: "bg-red-600" },
  { name: "Bevmo!", logo: "/placeholder.svg?height=80&width=80", color: "bg-red-500" },
]

export default function BrandComponent() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Choose By Brand</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {brands.map((brand, index) => (
          <Card key={index} className="overflow-hidden">
            <CardContent className="p-4 flex items-center space-x-4">
              <div className={`w-20 h-20 rounded-full flex items-center justify-center ${brand.color}`}>
                <img src={brand.logo} alt={`${brand.name} logo`} className="w-16 h-16" />
              </div>
              <div>
                <h2 className="font-semibold text-lg">{brand.name}</h2>
                <p className="text-sm text-gray-500">Delivery with in 24 hours</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
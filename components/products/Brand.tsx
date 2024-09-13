import { Card, CardContent } from "@/components/ui/card"

const games = [
  { name: "Football", logo: "/j2.webp?height=80&width=80", color: "bg-red-500" },
  { name: "Basketball", logo: "/basketball.webp?height=80&width=80", color: "bg-yellow-500" },
  { name: "Formula 1", logo: "/f1.webp?height=80&width=80", color: "bg-blue-500" },

]

export default function GameComponent() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Shop by Game</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {games.map((game, index) => (
          <Card key={index} className="overflow-hidden">
            <CardContent className="p-4 flex items-center space-x-4">
              <div className={`w-20 h-20 rounded-full flex items-center justify-center ${game.color}`}>
                <img src={game.logo} alt={`${game.name} logo`} className="w-20 h-20" />
              </div>
              <div>
                <h2 className="font-semibold text-lg">{game.name}</h2>
                <p className="text-sm text-gray-500">Delivery with in 24 hours</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
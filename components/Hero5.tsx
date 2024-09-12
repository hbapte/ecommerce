import { Button } from "@/components/ui/button"

export default function HeroComponent() {
  return (
    <div className="bg-teal-50 min-h-screen flex items-center justify-center p-4" style={{ backgroundImage: "url('/bgg.png')" }}>
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
          <h1 className="text-4xl md:text-5xl font-bold text-green-900 mb-4">
            Shopping And<br />Department Store.
          </h1>
          <p className="text-green-800 mb-6 max-w-md">
            Shopping is a bit of a relaxing hobby for me, which is sometimes troubling for the bank balance.
          </p>
          <Button className="bg-green-800 hover:bg-green-700 text-white px-6 py-2 rounded-full">
            Learn More
          </Button>
        </div>
        <div className="md:w-1/2 relative">
          <div className="absolute bottom-0 right-0 w-64 h-32 bg-yellow-300 rounded-tl-3xl"></div>
          <div className="absolute bottom-32 right-32 w-64 h-32 bg-yellow-300 rounded-tl-3xl">
            <img src="/placeholder.svg?height=100&width=100" alt="Snacks" className="absolute -top-4 -left-4 w-24 h-24 object-cover" />
            <img src="/placeholder.svg?height=100&width=100" alt="Electronics" className="absolute top-4 right-4 w-32 h-32 object-cover" />
          </div>
          <div className="absolute bottom-64 right-64 w-64 h-32 bg-yellow-300 rounded-tl-3xl">
            <img src="/placeholder.svg?height=100&width=100" alt="Luggage" className="absolute -top-8 -left-8 w-32 h-32 object-cover" />
            <img src="/placeholder.svg?height=100&width=100" alt="Fashion" className="absolute top-2 right-2 w-24 h-24 object-cover" />
          </div>
        </div>
      </div>
    </div>
  )
}
import { Button } from "@/components/ui/button"

export default function BannerComponent() {
  return (
    <div className="bg-[#faf4ed] p-6 rounded-lg shadow-sm">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="mb-6 md:mb-0 md:mr-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a4d3c] mb-4 leading-tight">
            Grab Up to 50% Off On<br />Selected Headphone
          </h2>
          <Button className="bg-[#0a4d3c] hover:bg-[#0a4d3c]/90 text-white font-semibold py-2 px-6 rounded-full">
            Buy Now
          </Button>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3">
          <img
            src="/kit.webp?height=300&width=400"
            alt="Person wearing headphones"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  )
}
'use client'

import Image from 'next/image'
import { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface CategoryCardProps {
  title: string
  imageSrc: string
  bgColor: string
}

const CategoryCard: React.FC<CategoryCardProps> = ({ title, imageSrc, bgColor }) => (
  <div className={`relative overflow-hidden rounded-lg ${bgColor} aspect-square`}>
    <Image
      src={imageSrc}
      alt={title}
      layout="fill"
      objectFit="cover"
      className="transition-transform duration-300 hover:scale-105"
    />
    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20">
      <h3 className="text-white text-2xl font-bold">{title}</h3>
    </div>
  </div>
)

const categories = [
  { title: 'Furniture', imageSrc: '/j1.webp?height=300&width=300', bgColor: 'bg-emerald-200' },
  { title: 'Hand Bag', imageSrc: '/j4.jpg?height=300&width=300', bgColor: 'bg-yellow-200' },
  { title: 'Hand Bag', imageSrc: '/j5.webp?height=300&width=300', bgColor: 'bg-yellow-200' },
  { title: 'Books', imageSrc: '/placeholder.svg?height=300&width=300', bgColor: 'bg-red-200' },
  { title: 'Tech', imageSrc: '/placeholder.svg?height=300&width=300', bgColor: 'bg-green-200' },
  { title: 'Sneakers', imageSrc: '/placeholder.svg?height=300&width=300', bgColor: 'bg-pink-200' },
  { title: 'Travel', imageSrc: '/placeholder.svg?height=300&width=300', bgColor: 'bg-orange-200' },
]

export default function CategoriesHeader() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: 'start' })

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">Shop Our Top Categories</h2>
      <div className="relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {categories.map((category, index) => (
              <div key={index} className="flex-[0_0_50%] min-w-0 sm:flex-[0_0_33.33%] md:flex-[0_0_25%] lg:flex-[0_0_16.66%] px-2">
                <CategoryCard {...category} />
              </div>
            ))}
          </div>
        </div>
        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full shadow-md hover:bg-opacity-75 transition-all duration-200"
          onClick={scrollPrev}
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full shadow-md hover:bg-opacity-75 transition-all duration-200"
          onClick={scrollNext}
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  )
}
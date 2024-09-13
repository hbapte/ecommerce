'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination"
import { ShirtIcon, CalendarIcon, UserIcon, SearchIcon } from "lucide-react"

export function SingleBlogCategoryComponent() {
  const category = {
    name: "Football Shirts",
    description: "Explore the world of football kits, from classic designs to modern innovations.",
    icon: <ShirtIcon className="h-8 w-8" />,
  }

  const blogPosts = [
    {
      title: "The Evolution of Football Shirts: From Cotton to High-Tech Fabrics",
      excerpt: "Discover the fascinating journey of football kit design and materials, from heavy cotton jerseys to today's lightweight, high-performance fabrics.",
      author: "Jean Kagabo",
      date: "May 20, 2023",
    },
    {
      title: "Top 10 Iconic World Cup Kits of All Time",
      excerpt: "Relive the most memorable moments in football history through lens of unforgettable World Cup jerseys that left a lasting impact.",
      author: "Marie Uwase",
      date: "May 15, 2023",
    },
    {
      title: "The Art of Designing a Winning Football Kit",
      excerpt: "Learn about the creative process behind designing football shirts that not only look great but also enhance player performance on field.",
      author: "Patrick Mutesa",
      date: "May 10, 2023",
    },
    {
      title: "Sustainable Football Shirts: The Future of Kit Manufacturing",
      excerpt: "Explore how football clubs and manufacturers are embracing eco-friendly materials production methods to create sustainable kits.",
      author: "Diane Gasana",
      date: "May 5, 2023",
    },
    {
      title: "From Stadium to Street: Football Shirts as Fashion Statements",
      excerpt: "Discover how football shirts have transcended their original purpose and become popular fashion items worn by fans style enthusiasts alike.",
      author: "Eric Mugisha",
      date: "April 30, 2023",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-neutral-900 text-neutral-50 py-12 px-4 sm:px-6 lg:px-8 dark:bg-neutral-50 dark:text-neutral-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold mb-2">{category.name}</h1>
              <p className="text-xl">{category.description}</p>
            </div>
            {category.icon}
          </div>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3">
            <div className="space-y-6">
              {blogPosts.map((post, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-2xl font-semibold">{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-neutral-500 dark:text-neutral-400">{post.excerpt}</p>
                  </CardContent>
                  <CardFooter className="flex justify-between items-center">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <UserIcon className="h-4 w-4 mr-2" />
                        <span className="text-sm text-neutral-500 dark:text-neutral-400">{post.author}</span>
                      </div>
                      <div className="flex items-center">
                        <CalendarIcon className="h-4 w-4 mr-2" />
                        <span className="text-sm text-neutral-500 dark:text-neutral-400">{post.date}</span>
                      </div>
                    </div>
                    <Button variant="outline">Read More</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            <Pagination className="mt-8">
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>
                    2
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
          <div className="lg:w-1/3">
            <Card>
              <CardHeader>
                <CardTitle>Search</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex w-full items-center space-x-2">
                  <Input type="text" placeholder="Search blog posts..." />
                  <Button type="submit" size="icon">
                    <SearchIcon className="h-4 w-4" />
                    <span className="sr-only">Search</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Popular Tags</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Button variant="outline" size="sm">World Cup</Button>
                  <Button variant="outline" size="sm">Premier League</Button>
                  <Button variant="outline" size="sm">Retro Kits</Button>
                  <Button variant="outline" size="sm">Design</Button>
                  <Button variant="outline" size="sm">Technology</Button>
                  <Button variant="outline" size="sm">Sustainability</Button>
                  <Button variant="outline" size="sm">Fashion</Button>
                  <Button variant="outline" size="sm">Collectibles</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
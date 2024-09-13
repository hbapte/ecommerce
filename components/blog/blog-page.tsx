"use client"

import { useState } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CalendarIcon, Clock, User } from "lucide-react"

type BlogPost = {
  id: number
  title: string
  excerpt: string
  category: string
  author: string
  date: string
  readTime: string
  imageUrl: string
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Evolution of Football Jerseys: From Cotton to High-Tech Fabrics",
    excerpt: "Explore the fascinating journey of football jersey materials and designs over decades.",
    category: "History",
    author: "John Doe",
    date: "2023-06-15",
    readTime: "5 min read",
    imageUrl: "/placeholder.svg?height=200&width=300"
  },
  {
    id: 2,
    title: "Top 10 Most Iconic Basketball Jerseys of All Time",
    excerpt: "Discover the jerseys that have left an indelible mark on basketball history and fashion.",
    category: "Basketball",
    author: "Jane Smith",
    date: "2023-06-10",
    readTime: "7 min read",
    imageUrl: "/placeholder.svg?height=200&width=300"
  },
  {
    id: 3,
    title: "How to Spot a Fake Jersey: A Comprehensive Guide",
    excerpt: "Learn the telltale signs of counterfeit jerseys and ensure you're always getting real deal.",
    category: "Tips",
    author: "Mike Johnson",
    date: "2023-06-05",
    readTime: "6 min read",
    imageUrl: "/placeholder.svg?height=200&width=300"
  },
  {
    id: 4,
    title: "The Rise of Retro: Why Vintage Jerseys Are Making a Comeback",
    excerpt: "Explore the nostalgia-driven trend of retro jerseys and their impact on modern sports fashion.",
    category: "Fashion",
    author: "Sarah Lee",
    date: "2023-05-30",
    readTime: "4 min read",
    imageUrl: "/placeholder.svg?height=200&width=300"
  },
  {
    id: 5,
    title: "Caring for Your Jersey Collection: Maintenance Tips from the Experts",
    excerpt: "Preserve the quality and longevity of your prized jerseys with these professional care tips.",
    category: "Tips",
    author: "David Brown",
    date: "2023-05-25",
    readTime: "5 min read",
    imageUrl: "/placeholder.svg?height=200&width=300"
  },
  {
    id: 6,
    title: "The Art of Jersey Customization: Express Your Fandom",
    excerpt: "Dive into the world of jersey customization and learn how to create a truly unique piece.",
    category: "DIY",
    author: "Emma Wilson",
    date: "2023-05-20",
    readTime: "6 min read",
    imageUrl: "/placeholder.svg?height=200&width=300"
  }
]

const categories = Array.from(new Set(blogPosts.map(post => post.category)))

export function BlogPageComponent() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const filteredPosts = blogPosts.filter(post => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (!selectedCategory || post.category === selectedCategory)
  )

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-6">Shirt Centre Kigali Blog</h1>
      <div className="mb-8 flex flex-col sm:flex-row gap-4">
        <Input
          type="text"
          placeholder="Search blog posts..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-grow"
        />
        <div className="flex flex-wrap gap-2">
          <Button
            variant={selectedCategory === null ? "default" : "outline"}
            onClick={() => setSelectedCategory(null)}
          >
            All
          </Button>
          {categories.map(category => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredPosts.map(post => (
          <Card key={post.id} className="flex flex-col">
            <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover" />
            <CardHeader>
              <div className="flex justify-between items-center mb-2">
                <Badge>{post.category}</Badge>
                <div className="flex items-center text-sm text-neutral-500 dark:text-neutral-400">
                  <CalendarIcon className="mr-1 h-3 w-3" />
                  {new Date(post.date).toLocaleDateString()}
                </div>
              </div>
              <CardTitle>{post.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{post.excerpt}</p>
            </CardContent>
            <CardFooter className="flex justify-between items-center mt-auto">
              <div className="flex items-center text-sm text-neutral-500 dark:text-neutral-400">
                <User className="mr-1 h-3 w-3" />
                {post.author}
              </div>
              <div className="flex items-center text-sm text-neutral-500 dark:text-neutral-400">
                <Clock className="mr-1 h-3 w-3" />
                {post.readTime}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
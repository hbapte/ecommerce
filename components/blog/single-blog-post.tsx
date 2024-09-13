"'use client'"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { CalendarIcon,  TagIcon, SearchIcon } from "lucide-react"

export function SingleBlogPostComponent() {
  const post = {
    title: "The Evolution of Football Shirts: From Cotton to High-Tech Fabrics",
    date: "May 20, 2023",
    author: {
      name: "Jean Kagabo",
      avatar: "/kit.webp?height=40&width=40",
    },
    category: "Football Shirts",
    content: `
      <p>Football shirts have come a long way since the early days of the sport. In this article, we'll explore the fascinating journey of football kit design and materials, from heavy cotton jerseys to today's lightweight, high-performance fabrics.</p>
      
      <h2>The Early Days: Cotton and Simplicity</h2>
      <p>In the late 19th and early 20th centuries, football shirts were typically made of heavy cotton. These shirts were simple in design, often featuring just the team's colors without numbers or sponsors. They were durable but could become heavy and uncomfortable when soaked with sweat or rain.</p>
      
      <h2>Mid-20th Century: Introducing Synthetic Fabrics</h2>
      <p>The 1960s and 1970s saw the introduction of synthetic fabrics like polyester and nylon. These materials were lighter and more breathable than cotton, offering better comfort for players. This era also saw the widespread adoption of shirt numbers and the beginnings of more complex designs.</p>
      
      <h2>The Modern Era: High-Tech Performance Fabrics</h2>
      <p>Today's football shirts are marvels of textile engineering. They incorporate advanced materials like moisture-wicking fabrics, mesh panels for ventilation, and even fabrics with cooling properties. Brands like Nike, Adidas, and Puma continuously innovate to provide players with the best possible performance wear.</p>
      
      <h2>The Future of Football Shirts</h2>
      <p>As technology continues to advance, we can expect to see even more innovations in football shirt design. From smart fabrics that monitor player performance to environmentally sustainable materials, the future of football kits is exciting and full of possibilities.</p>
      
      <p>At Shirt Centre Kigali, we're passionate about the history and future of football shirts. Whether you're looking for a vintage cotton jersey or the latest high-tech replica, we've got you covered. Visit our store to explore our wide range of football shirts from different eras and teams.</p>
    `,
  }

  const categories = [
    "Football Shirts",
    "Basketball Jerseys",
    "Vintage Kits",
    "Rare Editions",
    "Custom Jerseys",
  ]

  const relatedPosts = [
    { title: "Top 10 Iconic World Cup Kits", date: "May 15, 2023" },
    { title: "How to Care for Your Football Shirts", date: "May 10, 2023" },
    { title: "The Most Controversial Football Shirt Designs", date: "May 5, 2023" },
  ]

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-neutral-900 text-neutral-50 py-12 px-4 sm:px-6 lg:px-8 dark:bg-neutral-50 dark:text-neutral-900">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
          <div className="flex items-center text-sm">
            <CalendarIcon className="mr-2 h-4 w-4" />
            <span>{post.date}</span>
          </div>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3">
            <Card>
              <CardContent className="p-6">
                <Image
                  src="/kit.webp?height=600&width=1200"
                  alt="Football shirts evolution"
                  width={1200}
                  height={600}
                  className="w-full rounded-lg mb-6"
                />
                <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
                <div className="mt-6 flex items-center">
                  <Avatar className="h-10 w-10 mr-4">
                    <AvatarImage src={post.author.avatar} alt={post.author.name} />
                    <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">{post.author.name}</p>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">Author</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="lg:w-1/3">
            <Card className="mb-6">
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
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <Button variant="ghost" className="w-full justify-start">
                        <TagIcon className="mr-2 h-4 w-4" />
                        {category}
                      </Button>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Related Posts</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {relatedPosts.map((relatedPost, index) => (
                    <li key={index}>
                      <h3 className="text-sm font-medium">{relatedPost.title}</h3>
                      <p className="text-xs text-neutral-500 dark:text-neutral-400">{relatedPost.date}</p>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
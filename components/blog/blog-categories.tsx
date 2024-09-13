'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ShirtIcon,  ScissorsIcon, StarIcon, BatteryFullIcon } from "lucide-react"

export function BlogCategoriesComponent() {
  const categories = [
    {
      name: "Football Shirts",
      description: "Explore the world of football kits, from classic designs to modern innovations.",
      icon: <ShirtIcon className="h-6 w-6" />,
      posts: [
        { title: "Top 10 Football Shirts of All Time", date: "May 15, 2023" },
        { title: "The Evolution of Football Shirts: From Cotton to High-Tech Fabrics", date: "May 20, 2023" },
        { title: "Iconic World Cup Kits Through the Decades", date: "May 25, 2023" },
      ],
    },
    {
      name: "Basketball Jerseys",
      description: "Discover the latest trends and classic styles in basketball uniforms.",
      icon: <BatteryFullIcon className="h-6 w-6" />,
      posts: [
        { title: "NBA Jerseys: From Hardwood to Street Style", date: "May 10, 2023" },
        { title: "The Most Influential Basketball Jersey Designs", date: "May 18, 2023" },
        { title: "College Basketball: Top Team Jerseys of 2023", date: "May 22, 2023" },
      ],
    },
    {
      name: "Vintage Kits",
      description: "Take a nostalgic journey through the history of sports fashion.",
      icon: <BatteryFullIcon className="h-6 w-6" />,
      posts: [
        { title: "Vintage Kits: A Journey Through Football Fashion", date: "May 5, 2023" },
        { title: "Retro Basketball Jerseys: A Collector's Guide", date: "May 12, 2023" },
        { title: "The Resurgence of 90s Football Shirt Designs", date: "May 19, 2023" },
      ],
    },
    {
      name: "Rare Editions",
      description: "Learn about limited edition and hard-to-find sports jerseys.",
      icon: <StarIcon className="h-6 w-6" />,
      posts: [
        { title: "Limited Edition Jerseys: Collector's Guide", date: "April 30, 2023" },
        { title: "The Most Valuable Football Shirts in History", date: "May 8, 2023" },
        { title: "Rare NBA Jerseys: Hidden Gems from the Past", date: "May 16, 2023" },
      ],
    },
    {
      name: "Custom Jerseys",
      description: "Get tips and inspiration for creating your own unique sports jersey.",
      icon: <ScissorsIcon className="h-6 w-6" />,
      posts: [
        { title: "Design Your Dream Jersey: Custom Creation Tips", date: "April 25, 2023" },
        { title: "Personalized Team Uniforms: A Guide for Coaches", date: "May 3, 2023" },
        { title: "The Art of Jersey Customization: From Concept to Reality", date: "May 11, 2023" },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-neutral-900 text-neutral-50 py-12 px-4 sm:px-6 lg:px-8 dark:bg-neutral-50 dark:text-neutral-900">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-2">Blog Categories</h1>
          <p className="text-xl">
            Explore our articles on football shirts, basketball jerseys, vintage kits, and more.
          </p>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl font-semibold">{category.name}</CardTitle>
                  {category.icon}
                </div>
                <CardDescription>{category.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <h3 className="font-semibold mb-2">Recent Posts</h3>
                <ul className="space-y-2">
                  {category.posts.map((post, postIndex) => (
                    <li key={postIndex} className="flex justify-between items-start">
                      <span className="text-sm">{post.title}</span>
                      <Badge variant="secondary" className="text-xs">
                        {post.date}
                      </Badge>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}
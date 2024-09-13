"'use client'"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Truck, Scissors, ShieldCheck } from "lucide-react"

export function AboutPageComponent() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-6">About Shirt Centre Kigali</h1>
      
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Your Go-To Source for Iconic, Vintage & Rare Jerseys</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg mb-4">
              Welcome to Shirt Centre Kigali, your premier destination for football and basketball shirts in Rwanda. 
              Based in the heart of Kigali, we're passionate about bringing you the most iconic, vintage, and rare jerseys from around the world.
            </p>
            <p className="text-lg">
              Whether you're a die-hard fan looking for that elusive retro kit or a collector seeking to add a unique piece to your collection, 
              we've got you covered. Our carefully curated selection ensures that you'll find jerseys that not only showcase your team spirit 
              but also serve as a piece of sporting history.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <MapPin className="mr-2" />
              Our Location
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              We're proudly based in Kigali, Rwanda. Our central location allows us to serve jersey enthusiasts 
              across the country, bringing a touch of global sports fashion to the heart of Africa.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Scissors className="mr-2" />
              Customization Services
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Make your jersey truly yours with our customization services. Add your name, number, or even create 
              a custom design. Our skilled team ensures high-quality personalization that lasts.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Truck className="mr-2" />
              Countrywide Delivery
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              No matter where you are in Rwanda, we've got you covered. Our reliable countrywide delivery service 
              ensures that your favorite jerseys reach you quickly and safely.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <ShieldCheck className="mr-2" />
              Quality Guarantee
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              At Shirt Centre Kigali, we pride ourselves on the authenticity and quality of our jerseys. Each piece 
              in our collection is carefully verified to ensure you receive genuine, high-quality products.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8 text-center">
        <h2 className="text-2xl font-semibold mb-4">Our Specialties</h2>
        <div className="flex flex-wrap justify-center gap-2">
          <Badge variant="secondary" className="text-lg py-1 px-3">Football Shirts</Badge>
          <Badge variant="secondary" className="text-lg py-1 px-3">Basketball Jerseys</Badge>
          <Badge variant="secondary" className="text-lg py-1 px-3">Vintage Kits</Badge>
          <Badge variant="secondary" className="text-lg py-1 px-3">Rare Editions</Badge>
          <Badge variant="secondary" className="text-lg py-1 px-3">Custom Jerseys</Badge>
        </div>
      </div>

      <div className="mt-8 text-center">
        <p className="text-lg">
          Visit Shirt Centre Kigali today and experience the passion for sports fashion. 
          From classic designs to the latest releases, we're here to help you wear your team pride with style.
        </p>
      </div>
    </div>
  )
}
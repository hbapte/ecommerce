
import Link from "next/link"

export default function ProductRecommendation() {
  return (
    <div>
      <div className="bg-muted py-10">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl font-bold mb-6">You may also like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div className="bg-background rounded-lg overflow-hidden shadow-lg group">
              <Link href="#" className="block" prefetch={false}>
                <img
                  src="/placeholder.svg"
                  alt="Product 1"
                  width={400}
                  height={400}
                  className="w-full h-60 object-cover group-hover:opacity-80 transition-opacity"
                  style={{ aspectRatio: "400/400", objectFit: "cover" }}
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">Leather Tote Bag</h3>
                  <p className="text-muted-foreground text-sm">Stylish and durable</p>
                  <p className="text-lg font-semibold">$99.99</p>
                </div>
              </Link>
            </div>
            <div className="bg-background rounded-lg overflow-hidden shadow-lg group">
              <Link href="#" className="block" prefetch={false}>
                <img
                  src="/placeholder.svg"
                  alt="Product 2"
                  width={400}
                  height={400}
                  className="w-full h-60 object-cover group-hover:opacity-80 transition-opacity"
                  style={{ aspectRatio: "400/400", objectFit: "cover" }}
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">Minimalist Watch</h3>
                  <p className="text-muted-foreground text-sm">Elegant and timeless</p>
                  <p className="text-lg font-semibold">$79.99</p>
                </div>
              </Link>
            </div>
            <div className="bg-background rounded-lg overflow-hidden shadow-lg group">
              <Link href="#" className="block" prefetch={false}>
                <img
                  src="/placeholder.svg"
                  alt="Product 3"
                  width={400}
                  height={400}
                  className="w-full h-60 object-cover group-hover:opacity-80 transition-opacity"
                  style={{ aspectRatio: "400/400", objectFit: "cover" }}
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">Wireless Earbuds</h3>
                  <p className="text-muted-foreground text-sm">High-quality audio</p>
                  <p className="text-lg font-semibold">$99.99</p>
                </div>
              </Link>
            </div>
            <div className="bg-background rounded-lg overflow-hidden shadow-lg group">
              <Link href="#" className="block" prefetch={false}>
                <img
                  src="/placeholder.svg"
                  alt="Product 4"
                  width={400}
                  height={400}
                  className="w-full h-60 object-cover group-hover:opacity-80 transition-opacity"
                  style={{ aspectRatio: "400/400", objectFit: "cover" }}
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">Ceramic Mug</h3>
                  <p className="text-muted-foreground text-sm">Handcrafted design</p>
                  <p className="text-lg font-semibold">$24.99</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
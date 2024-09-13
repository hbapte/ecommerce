/* eslint-disable react/no-unescaped-entities */
"'use client'"

import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

export function TermsAndConditions() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Terms and Conditions - Kigali Shirts</h1>
      <ScrollArea className="h-[600px] w-full rounded-md border p-4">
        <div className="space-y-6">
          <section>
            <h2 className="text-xl font-semibold mb-2">1. Acceptance of Terms</h2>
            <p>By accessing and using this website for purchasing jerseys and team kits, you accept and agree to be bound by the terms and provisions of this agreement. These terms apply to all users of the site, including without limitation users who are browsers, vendors, customers, merchants, and contributors of content.</p>
          </section>
          <Separator />
          <section>
            <h2 className="text-xl font-semibold mb-2">2. Product Information</h2>
            <p>We strive to display as accurately as possible the colors and images of our products. We cannot guarantee that your computer monitor's display of any color will be accurate. We do not warrant that the quality of any products, services, information, or other material purchased or obtained by you will meet your expectations.</p>
          </section>
          <Separator />
          <section>
            <h2 className="text-xl font-semibold mb-2">3. Pricing and Availability</h2>
            <p>Prices for our products are subject to change without notice. We reserve the right at any time to modify or discontinue any product without notice. We shall not be liable to you or to any third-party for any modification, price change, suspension or discontinuance of the product.</p>
          </section>
          <Separator />
          <section>
            <h2 className="text-xl font-semibold mb-2">4. Sizing and Fit</h2>
            <p>We provide size charts for all our jerseys and team kits. However, sizes may vary between brands and styles. We are not responsible for incorrect sizing choices made by the customer. We recommend carefully checking the size chart before making a purchase.</p>
          </section>
          <Separator />
          <section>
            <h2 className="text-xl font-semibold mb-2">5. Customization</h2>
            <p>For customized jerseys or team kits, we are not responsible for errors in the information provided by the customer (e.g., misspelled names, incorrect numbers). Please double-check all customization details before submitting your order. Customized items cannot be returned or exchanged unless there is a manufacturing defect.</p>
          </section>
          <Separator />
          <section>
            <h2 className="text-xl font-semibold mb-2">6. Intellectual Property and Licensing</h2>
            <p>All jerseys and team kits featuring team logos, player names, or other trademarked content are officially licensed products. The use of these trademarks is subject to the respective sports leagues' and teams' policies. Customers are prohibited from reselling or modifying these products without express permission.</p>
          </section>
          <Separator />
          <section>
            <h2 className="text-xl font-semibold mb-2">7. Shipping and Delivery</h2>
            <p>Shipping times and costs will vary depending on the delivery location and chosen shipping method. We are not responsible for delays caused by customs, weather conditions, or other factors outside our control. Risk of loss and title for items purchased pass to you upon delivery of the items to the carrier.</p>
          </section>
          <Separator />
          <section>
            <h2 className="text-xl font-semibold mb-2">8. Returns and Exchanges</h2>
            <p>We accept returns and exchanges within 30 days of purchase for non-customized items, provided they are unworn, unwashed, and in their original condition with tags attached. Customized items are final sale unless there is a manufacturing defect. Customers are responsible for return shipping costs unless the item is defective.</p>
          </section>
          <Separator />
          <section>
            <h2 className="text-xl font-semibold mb-2">9. Care Instructions</h2>
            <p>We provide care instructions for all our jerseys and team kits. Failure to follow these instructions may result in damage to the product, which is not covered by our return or exchange policy. We are not responsible for damage caused by improper care or use.</p>
          </section>
          <Separator />
          <section>
            <h2 className="text-xl font-semibold mb-2">10. Privacy Policy</h2>
            <p>Your use of our website is also governed by our Privacy Policy. Please review our Privacy Policy, which also governs the site and informs users of our data collection practices.</p>
          </section>
          <Separator />
          <section>
            <h2 className="text-xl font-semibold mb-2">11. Governing Law</h2>
            <p>These Terms and Conditions are governed by and construed in accordance with the laws of [Your Country/State], and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.</p>
          </section>
        </div>
      </ScrollArea>
    </div>
  )
}
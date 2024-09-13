"'use client'"

import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

export function PrivacyPolicyComponent() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy - Jersey and Team Kits Website</h1>
      <ScrollArea className="h-[600px] w-full rounded-md border border-neutral-200 p-4 dark:border-neutral-800">
        <div className="space-y-6">
          <section>
            <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
            <p>Welcome to our Jersey and Team Kits Website. We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and make purchases.</p>
          </section>
          <Separator />
          <section>
            <h2 className="text-xl font-semibold mb-2">2. Information We Collect</h2>
            <p>We collect personal information that you provide to us, such as:</p>
            <ul className="list-disc list-inside ml-4 mt-2">
              <li>Name, email address, and contact details</li>
              <li>Billing and shipping address</li>
              <li>Payment information (processed securely through our payment processor)</li>
              <li>Order history and preferences</li>
              <li>Sizing information for jerseys and kits</li>
              <li>Customization details for personalized items</li>
            </ul>
          </section>
          <Separator />
          <section>
            <h2 className="text-xl font-semibold mb-2">3. How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul className="list-disc list-inside ml-4 mt-2">
              <li>Process and fulfill your orders</li>
              <li>Communicate with you about your orders and provide customer support</li>
              <li>Send you marketing and promotional communications (if you have opted in)</li>
              <li>Improve our website, products, and customer service</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>
          <Separator />
          <section>
            <h2 className="text-xl font-semibold mb-2">4. Sharing Your Information</h2>
            <p>We may share your information with:</p>
            <ul className="list-disc list-inside ml-4 mt-2">
              <li>Service providers (e.g., payment processors, shipping companies)</li>
              <li>Business partners (e.g., sports teams or leagues for licensed products)</li>
              <li>Legal authorities when required by law</li>
            </ul>
            <p className="mt-2">We do not sell your personal information to third parties.</p>
          </section>
          <Separator />
          <section>
            <h2 className="text-xl font-semibold mb-2">5. Cookies and Tracking Technologies</h2>
            <p>We use cookies and similar tracking technologies to collect information about your browsing activities. You can manage your cookie preferences through your browser settings.</p>
          </section>
          <Separator />
          <section>
            <h2 className="text-xl font-semibold mb-2">6. Data Security</h2>
            <p>We implement appropriate technical and organizational measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, so we cannot guarantee absolute security.</p>
          </section>
          <Separator />
          <section>
            <h2 className="text-xl font-semibold mb-2">7. Your Rights</h2>
            <p>Depending on your location, you may have the right to:</p>
            <ul className="list-disc list-inside ml-4 mt-2">
              <li>Access the personal information we hold about you</li>
              <li>Correct any inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Object to or restrict processing of your information</li>
              <li>Data portability</li>
            </ul>
          </section>
          <Separator />
          <section>
            <h2 className="text-xl font-semibold mb-2">8. Children's Privacy</h2>
            <p>Our website is not intended for children under 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.</p>
          </section>
          <Separator />
          <section>
            <h2 className="text-xl font-semibold mb-2">9. Changes to This Privacy Policy</h2>
            <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.</p>
          </section>
          <Separator />
          <section>
            <h2 className="text-xl font-semibold mb-2">10. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at:</p>
            <p className="mt-2">Email: privacy@jerseyandteamkits.com</p>
            <p>Phone: (555) 123-4567</p>
            <p>Address: 123 Sports Ave, Athleticville, SP 12345</p>
          </section>
          <Separator />
          <p className="text-sm text-neutral-500 mt-4 dark:text-neutral-400">Last Updated: {new Date().toLocaleDateString()}</p>
        </div>
      </ScrollArea>
    </div>
  )
}
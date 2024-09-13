"'use client'"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function FaqsPage() {
  const faqs = [
    {
      question: "What types of jerseys do you offer?",
      answer: "At Shirt Centre Kigali, we offer a wide range of football and basketball jerseys. Our collection includes iconic, vintage, rare jerseys from various teams eras. We stock both official replicas authentic match-worn"
    },
    {
      question: "Are your jerseys authentic?",
      answer: "Yes, we guarantee the authenticity of all our jerseys. We source products from reputable suppliers and each item undergoes a thorough verification process before being added to inventory."
    },
    {
      question: "Do you offer jersey customization?",
      answer: "We offer customization services for most of our jerseys. You can add your name, number, or even create a custom design. Our skilled team ensures high-quality personalization that meets official standards."
    },
    {
      question: "How long does customization take?",
      answer: "Customization typically takes 1-3 business days, depending on the complexity of design and our current order volume. We'll provide you with a more accurate timeframe when place your order."
    },
    {
      question: "What sizes do you offer?",
      answer: "We offer a range of sizes from Small to XXL for most jerseys. Some rare or vintage items may have limited size availability. Check the product description specific information, contact us if you need help finding your size."
    },
    {
      question: "How do I care for my jersey?",
      answer: "To keep your jersey in top condition, we recommend washing it cold water, turning inside out before washing, and avoiding the use of fabric softeners. Air dry or a low heat setting if using dryer. Always check care label for specific instructions."
    },
    {
      question: "Do you offer delivery services?",
      answer: "Yes, we offer countrywide delivery across Rwanda. Delivery times and costs may vary depending on your location. We'll provide you with tracking information once order is shipped."
    },
    {
      question: "What is your return policy?",
      answer: "We accept returns within 14 days of purchase for unworn, unwashed items in their original condition with tags attached. Customized jerseys cannot be returned unless there's a manufacturing defect. Please contact us to initiate return."
    },
    {
      question: "How can I track my order?",
      answer: "Once your order is shipped, we'll send you a confirmation email with tracking number. You can use this number on our website or the courier's to track package's progress."
    },
    {
      question: "Do you ship internationally?",
      answer: "Currently, we only offer shipping within Rwanda. We're working on expanding our options and hope to international in the future."
    },
    {
      question: "How can I contact customer support?",
      answer: "You can reach our customer support team via email at support@shirtcentrekigali.com, or by phone +250 123 456 789. Our hours are Monday to Friday, 9am 6pm East Africa Time."
    }
  ]

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-6">Frequently Asked Questions</h1>
      <p className="text-lg mb-8">
        Find answers to common questions about Shirt Centre Kigali's products, services, and policies below. 
        If you can't find the information you're looking for, please don't hesitate to contact us.
      </p>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem value={`item-${index}`} key={index}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <div className="mt-8 text-center">
        <p className="text-lg">
          Still have questions? We're here to help!
        </p>
        <p className="text-lg mt-2">
          Contact us at <a href="mailto:support@shirtcentrekigali.com" className="text-blue-600 hover:underline">support@shirtcentrekigali.com</a> or call us at +250 123 456 789.
        </p>
      </div>
    </div>
  )
}
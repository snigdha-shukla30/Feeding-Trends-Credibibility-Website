"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/Card"
import { Star, Quote, Building } from "lucide-react"
import Image from "next/image"

interface TestimonialProps {
  name: string
  title: string
  company: string
  quote: string
  rating: number
  image: string
  industry?: string
}

const TestimonialCard = ({
  name,
  title,
  company,
  quote,
  rating,
  image,
  industry,
}: TestimonialProps) => (
  <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
    <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-[#FBE4E4]">
      <CardContent className="p-6">
        {/* Rating */}
        <div className="flex items-center mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-5 w-5 ${
                i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
              }`}
            />
          ))}
          <span className="ml-2 text-sm text-gray-500">({rating}/5)</span>
        </div>

        {/* Quote */}
        <div className="relative mb-6">
          <Quote className="absolute -top-2 -left-2 h-8 w-8 text-[#6B4C4C]" />
          <p className="text-[#6B4C4C] italic leading-relaxed pl-6">{quote}</p>
        </div>

        {/* Author */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Image
              src={image || "/placeholder.svg"}
              alt={name}
              width={50}
              height={50}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h4 className="font-semibold text-gray-900">{name}</h4>
              <p className="text-sm text-gray-600">{title}</p>
              <p className="text-sm text-blue-600 font-medium">{company}</p>
            </div>
          </div>
          <div className="text-right">
            {industry && (
              <div className="flex items-center text-xs text-gray-500">
                <Building className="h-3 w-3 mr-1" />
                {industry}
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  </motion.div>
)

export default function Testimonials() {
  const testimonials = [
    {
      name: "Priya K.",
      title: "Brand Strategist",
      company: "FMCG Sector",
      quote:
        "Feeding Trends doesn’t just run campaigns—they create movements. The Mango Festival was a masterclass in blending hyper-local pride with global appeal. Our brand saw a 300% spike in engagement, but more importantly, we became part of a cultural conversation. They don’t chase trends; they create them.",
      rating: 5,
      image: "/testimonials/bit.jpg",
    },
    {
      name: "Rohan M.",
      title: "Nonprofit Director",
      company: "Global Inc",
      quote:
        "The ‘Right to Vote Creatorthon’ was a game-changer for our NGO. Feeding Trends turned voter awareness into a creative revolution—TikTok meets democracy! Over 10,000 Gen Z participants, 5M+ impressions, and a tangible shift in youth registration numbers.",
      rating: 5,
      image: "/testimonials/bitt.png",
    },
    {
      name: "Dr. Ananya S.",
      title: "Clinical Psychologist",
      company: "Health sector",
      quote:
        "As a mental health advocate, I’ve seen countless campaigns fail to move the needle. ‘Are You Listening?’ was different. Feeding Trends prioritized authenticity over shock value—real stories, real solutions. Their content reduced stigma AND drove 50K+ helpline visits. Finally, a partner who listens as hard as they create.",
      rating: 5,
      image: "/testimonials/bittt.jpg",
    },
  ]

  return (
    <section className="py-20 bg-[#F8CFCF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-zodiak font-700 text-[#550000] mb-6">
            What Our Clients Say
          </h2>
          <p className="text-lg font-general font-medium text-[#6B4C4C] max-w-3xl mx-auto">
            {`Don't just take our word for it. Here's what industry leaders and our valued clients have to say about their experience working with Feeding Trends and the transformative impact of our solutions.`}
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <TestimonialCard {...testimonial} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}





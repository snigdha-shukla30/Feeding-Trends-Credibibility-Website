"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface MediaMentionProps {
  title: string
  publication: string
  date: string
  excerpt: string
  link: string
  logo: string
  category: "press" | "interview" | "feature" | "award"
  readTime?: string
}

const MediaCard = ({ title, logo }: MediaMentionProps) => {

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
      className="flex flex-col items-center text-center p-4 rounded-lg h-full"
    >
      {/* ✅ Circular Logo with Next.js Image */}
      <div className="h-40 w-40 rounded-full border-2 border-gray-200 flex items-center justify-center overflow-hidden mb-4 bg-white relative">
        <Image
          src={logo || "/placeholder.svg"}
          alt={title}
          fill
          className="object-contain"
          sizes="160px"
        />
      </div>

      {/* Title */}
      <h3 className="text-lg font-zodiak text-[#550000] mb-2 line-clamp-2">
        {title}
      </h3>
    </motion.div>
  )
}

export default function MediaMentions() {
  const mentions = [
    {
      title: "Dainik Jagran",
      publication: "Forbes India",
      date: "March 15, 2023",
      excerpt:
        "Dainik Jagran, one of the prominent Hindi newspapers in India, covered the story of Feeding Trends and how it is the next social media platform in India. This extensive feature highlighted our innovative approach to content curation and community building, positioning us as a significant player in the evolving digital landscape. The article delved into our user engagement strategies and future expansion plans, emphasizing our commitment to fostering a vibrant online community.",
      link: "#",
      logo: "/logos/dj.png",
      category: "feature" as const,
      readTime: "8 min read",
    },
    {
      title: "Navbharat Times",
      publication: "TechCrunch",
      date: "February 8, 2023",
      excerpt:
        "Navbharat Times, one of the prominent Hindi newspapers in India, covered the story of Feeding Trends and how it is the next social media platform in India. This interview provided insights into our journey, challenges, and vision for the future of social media in India. We discussed the technological backbone of our platform and how we are addressing the unique needs of the Indian audience, aiming to create a more inclusive and engaging online experience.",
      link: "#",
      logo: "/logos/navbharat.avif",
      category: "interview" as const,
      readTime: "12 min read",
    },
    {
      title: "Daily Nation News",
      publication: "YourStory",
      date: "January 20, 2023",
      excerpt:
        "Daily Nation News recognized Feeding Trends with the 'Startup of the Year' award for our groundbreaking work in social media innovation. This prestigious award acknowledges our rapid growth, user adoption, and positive impact on digital communication. The recognition underscores our dedication to pushing the boundaries of what's possible in the social media space, providing a platform that truly resonates with its users.",
      link: "#",
      logo: "/logos/nn.png",
      category: "award" as const,
      readTime: "5 min read",
    },
    {
      title: "The Guiding Voice",
      publication: "Business Standard",
      date: "November 5, 2022",
      excerpt:
        "Feeding Trends' appearance on Shark Tank India highlights the growing investor interest in sustainable technology solutions and the startup's impressive growth trajectory. The feature in Business Standard detailed our pitch, the judges' feedback, and the subsequent investment, marking a significant milestone in our journey. This exposure has not only boosted our visibility but also validated our business model and potential for large-scale impact.",
      link: "#",
      logo: "/logos/channel.jpg",
      category: "feature" as const,
      readTime: "7 min read",
    },
  ]

  return (
    <section id="media" className="py-20 bg-[#eec2c2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-700 font-zodiak text-[#550000] mb-6">
            In the Media
          </h2>
          <p className="text-xl font-general font-medium text-[#6B4C4C] max-w-3xl mx-auto">
            Our work has sparked headlines, conversations, and collaborations
            across the country.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {mentions.map((mention, index) => (
            <motion.div
              key={mention.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <MediaCard {...mention} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}





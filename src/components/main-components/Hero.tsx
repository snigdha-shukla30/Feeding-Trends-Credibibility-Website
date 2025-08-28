"use client"

import { motion } from "framer-motion"
import Image from "next/image"
// import { ArrowRight, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/Button"
// import { Badge } from "@/components/ui/Badge"

export default function HeroAdjustedCards() {
  // Modern card images that will zoom one by one
  const cardImages = [
    {
      src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop",
      alt: "Person working on laptop",
      title: "Digital Innovation",
      size: "small", // Same size as 3rd
    },
    {
      src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=500&fit=crop",
      alt: "Friends on beach",
      title: "Community Building",
      size: "large", // Bigger middle card
    },
    {
      src: "https://images.unsplash.com/photo-1582406592664-24b0c8705265?w=400&h=500&fit=crop",
      alt: "Woman with dog",
      title: "AI-Powered Analytics",
      size: "small", // Same size as 1st
    },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background - ADD YOUR VIDEO HERE */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/videos/hero-background-poster.jpg"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/run.mp4" type="video/mp4" />
          <source src="/videos/hero-background.webm" type="video/webm" />
          {/* Fallback for browsers that don't support video */}
          Your browser does not support the video tag.
        </video>

        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Optional: Gradient overlay for more sophisticated look */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-transparent to-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-6 lg:pr-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-start"
            >
             
            </motion.div>

            {/* Main Heading - Multi-line Layout - Mobile Responsive */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-2 sm:space-y-4"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-gamberino font-bold leading-tight text-white drop-shadow-2xl">
                <div className="block">Be the trendsetter</div>
                <div className="block">of your</div>
                <div className="block">
                  community<span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl align-top">™</span>
                </div>
              </h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-2xl leading-relaxed text-gray-100 mt-4 sm:mt-6 drop-shadow-xl"
              >
                Join 10M+ readers and writers on Feeding Trends. Learn, earn, and grow through collaboration and
                knowledge sharing.
              </motion.p>
            </motion.div>

            {/* CTA Button - Mobile Responsive */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="pt-4"
            >
              <Button
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-purple -50 via-purple-600 to-purple-600 text-black hover:from-purple-700 hover:via-purple-700 hover:to-pink-700 transition-all duration-300 hover:scale-105 hover:shadow-xl text-sm sm:text-base md:text-lg px-6 sm:px-8 py-3 sm:py-4 font-semibold rounded-lg shadow-lg backdrop-blur-sm"
                // className="w-full sm:w-auto bg-gradient-to-r from-blue-500 via-purple-600 to-red-600 text-black hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 transition-all duration-300 hover:scale-105 hover:shadow-xl text-sm sm:text-base md:text-lg px-6 sm:px-8 py-3 sm:py-4 font-semibold rounded-lg shadow-lg backdrop-blur-sm"
              >
                Join Now
              </Button>
            </motion.div>

            {/* Key Features - Vertical List - Mobile Responsive */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="pt-4 sm:pt-6"
            >
              
            </motion.div>
          </div>

          {/* Right Content - Adjusted Card Layout - Mobile Responsive */}
          <div className="relative lg:pl-8 flex flex-col justify-center h-full mt-8 lg:mt-0">
            {/* Card Container with Better Spacing - Mobile Responsive */}
            <div className="relative w-full h-64 sm:h-72 md:h-80 flex items-center justify-center">
              <div className="flex items-end space-x-2 sm:space-x-3">
                {cardImages.map((card, index) => {
                  // Define card dimensions based on position - Mobile Responsive
                  const isMiddle = index === 1
                  const cardWidth = isMiddle ? "w-32 sm:w-40 md:w-52" : "w-24 sm:w-32 md:w-40" // Middle card wider
                  const cardHeight = isMiddle ? "h-48 sm:h-64 md:h-80" : "h-40 sm:h-52 md:h-64" // Middle card taller
                  const marginTop = isMiddle ? "" : "mt-4 sm:mt-6 md:mt-8" // Side cards slightly lower

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 50, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{
                        duration: 0.8,
                        delay: 1.5 + index * 0.3,
                        ease: "easeOut",
                      }}
                      className={`relative group ${marginTop}`}
                    >
                      {/* Card with Sequential Zoom Effect */}
                      <motion.div
                        animate={{
                          scale: [1, 1.05, 1],
                          y: [0, -5, 0],
                        }}
                        transition={{
                          duration: 3,
                          delay: 3 + index * 1, // Each card zooms 1 second apart
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut",
                        }}
                        className={`relative ${cardWidth} ${cardHeight} overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl bg-white/20 backdrop-blur-md border border-white/30 group-hover:shadow-3xl transition-all duration-500`}
                      >
                        <Image
                          src={card.src || "/placeholder.svg"}
                          alt={card.alt}
                          fill
                          className="object-cover transition-all duration-700 group-hover:scale-110"
                          sizes={
                            isMiddle
                              ? "(max-width: 640px) 128px, (max-width: 768px) 160px, 220px"
                              : "(max-width: 640px) 96px, (max-width: 768px) 128px, 160px"
                          }
                        />

                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                        {/* Card Content - Mobile Responsive */}
                        <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 right-2 sm:right-4">
                          <h4 className="text-white font-semibold text-xs sm:text-sm drop-shadow-lg mb-1 sm:mb-2">
                            {card.title}
                          </h4>
                          <div className="w-6 sm:w-8 h-0.5 sm:h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                        </div>

                        {/* Zoom Indicator - Mobile Responsive */}
                        <motion.div
                          animate={{
                            opacity: [0, 1, 0],
                            scale: [0.8, 1.2, 0.8],
                          }}
                          transition={{
                            duration: 3,
                            delay: 3 + index * 1,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut",
                          }}
                          className="absolute top-2 sm:top-4 right-2 sm:right-4 w-2 h-2 sm:w-3 sm:h-3 bg-white/90 rounded-full backdrop-blur-sm"
                        />

                        {/* Enhanced Glow for Middle Card */}
                        <div
                          className={`absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl sm:rounded-3xl ${
                            isMiddle ? "group-hover:from-blue-500/20 group-hover:to-purple-500/20" : ""
                          }`}
                        />

                        {/* Special Border for Middle Card */}
                        {isMiddle && (
                          <div className="absolute inset-0 rounded-2xl sm:rounded-3xl border-2 border-white/40"></div>
                        )}
                      </motion.div>
                    </motion.div>
                  )
                })}
              </div>
            </div>

            {/* Card Info - Mobile Responsive */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 4 }}
              className="mt-4 sm:mt-6 text-center"
            >
             
            </motion.div>

            
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl blur-3xl -z-10"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Hidden on Mobile */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 hidden lg:block"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="w-5 h-8 border-2 border-white/70 rounded-full flex justify-center backdrop-blur-sm bg-black/20"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="w-1 h-2 bg-white/90 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

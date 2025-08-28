"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

const workshops = [
  {
    id: 1,
    title: "AI & Machine Learning Workshop",
    collegeName: "Stanford University",
    image: "workshop/images1.jpeg",
  },
  {
    id: 2,
    title: "Digital Marketing Seminar",
    collegeName: "Harvard Business School",
    image: "workshop/images2.jpeg",
  },
  {
    id: 3,
    title: "Cybersecurity Workshop",
    collegeName: "MIT",
    image: "workshop/images3.jpeg",
  },
  {
    id: 4,
    title: "Data Science Bootcamp",
    collegeName: "UC Berkeley",
    image: "workshop/images4.jpeg",
  },
  {
    id: 5,
    title: "Web Development Seminar",
    collegeName: "Carnegie Mellon University",
    image: "workshop/images5.jpeg",
  },
]

export default function WorkshopSeminar() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    const scrollWidth = scrollContainer.scrollWidth
    const clientWidth = scrollContainer.clientWidth
    let scrollPosition = 0
    const scrollSpeed = 1

    const autoScroll = () => {
      scrollPosition += scrollSpeed
      if (scrollPosition >= scrollWidth - clientWidth) {
        scrollPosition = 0
      }
      scrollContainer.scrollLeft = scrollPosition
    }

    const interval = setInterval(autoScroll, 50)

    // Pause on hover
    const handleMouseEnter = () => clearInterval(interval)
    const handleMouseLeave = () => {
      const newInterval = setInterval(autoScroll, 50)
      return newInterval
    }

    scrollContainer.addEventListener("mouseenter", handleMouseEnter)
    scrollContainer.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      clearInterval(interval)
      scrollContainer.removeEventListener("mouseenter", handleMouseEnter)
      scrollContainer.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return (
    <section className="py-16 px-4 bg-[#FBE4E4]">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-2 h-8 bg-blue-500 rounded-full"></div>
              <h2 className="text-3xl md:text-4xl font-bold font-zodiak text-[#550000]">Workshop and Seminar</h2>
              <div className="w-2 h-8 bg-blue-500 rounded-full"></div>
            </div>
            <p className="text-lg text-[#6B4C4C] max-w-2xl mx-auto">Unforgettable experiences, delivered flawlessly</p>
          </div>

          <div
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto scrollbar-hide pb-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {workshops.map((workshop) => (
              <div key={workshop.id} className="flex-shrink-0 text-center">
                <div className="w-64 h-48 mb-4 overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <Image
                    src={workshop.image || "/placeholder.svg"}
                    alt={workshop.title}
                    width={256} // same as w-64
                    height={192} // same as h-48
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-[#550000] font-semibold text-lg">{workshop.collegeName}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}





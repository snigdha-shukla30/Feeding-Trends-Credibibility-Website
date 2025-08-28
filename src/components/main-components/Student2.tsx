"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/Card"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const students = [
  {
    id: 1,
    name: "Andi Pratama",
    country: "Indonesia",
    image: "/student2/std1.jpg",
    testimonial: [
      "The international program here has completely transformed my perspective on global business.",
      "I've gained invaluable skills and made lifelong connections with students from around the world.",
      "The faculty support and diverse learning environment exceeded all my expectations.",
    ],
  },
  {
    id: 2,
    name: "Rizki Hakim",
    country: "Indonesia",
    image: "/student2/std2.avif",
    testimonial: [
      "Coming from Jakarta, I was nervous about studying abroad, but this university welcomed me warmly.",
      "The multicultural environment has helped me develop both academically and personally.",
      "I'm proud to represent Indonesia while learning alongside brilliant minds from every continent.",
    ],
  },
  {
    id: 3,
    name: "Budi Santoso",
    country: "Indonesia",
    image: "/student2/std3.avif",
    testimonial: [
      "The research opportunities here are unmatched - I've published papers I never thought possible.",
      "My professors encouraged me to think beyond boundaries and challenge conventional wisdom.",
      "This experience has prepared me to make a real impact back home in Indonesia.",
    ],
  },
  {
    id: 4,
    name: "Maya Kusuma",
    country: "Indonesia",
    image: "/student2/std4.jpg",
    testimonial: [
      "The cutting-edge facilities and technology have accelerated my learning in ways I never imagined.",
      "Being part of this diverse community has broadened my worldview tremendously.",
      "I'm grateful for the scholarship opportunity that made this dream education possible.",
    ],
  },
  {
    id: 5,
    name: "Sari Dewi",
    country: "Indonesia",
    image: "/student2/std5.avif",
    testimonial: [
      "The global network I've built here will benefit my career for decades to come.",
      "Every day brings new challenges that push me to grow beyond my comfort zone.",
      "I'm excited to take these innovative ideas and entrepreneurial spirit back to Southeast Asia.",
    ],
  },
]

export default function InternationalStudents() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % students.length)
    }, 4000) // Auto-scroll every 4 seconds

    return () => clearInterval(interval)
  }, [])

  const nextStudent = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % students.length)
  }

  const prevStudent = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + students.length) % students.length)
  }

  const currentStudent = students[currentIndex]

  return (
    <section className="py-8 px-2 bg-[#FBE4E4]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold font-zodiak text-[#550000] mb-2">50+ International Students</h2>
          <p className="text-base text-[#6B4C4C] max-w-2xl mx-auto">
            Hear from our diverse community of international students who have found their home away from home
          </p>
        </div>

        <div className="relative">
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="p-4">
              <div className="flex flex-col lg:flex-row items-center gap-4">
                {/* Student Image */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    <Image
                      src={currentStudent.image || "/placeholder.svg"}
                      alt={`${currentStudent.name} from ${currentStudent.country}`}
                      width={192} // same as w-48
                      height={192} // same as h-48
                      className="w-48 h-48 object-cover rounded-full border-4 border-[#550000]/20"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-[#550000] text-white px-3 py-1 rounded-full text-sm font-medium">
                      {currentStudent.country}
                    </div>
                  </div>
                </div>

                {/* Student Testimonial */}
                <div className="flex-1 text-center lg:text-left">
                  <h3 className="text-xl font-bold text-[#550000] mb-3">{currentStudent.name}</h3>
                  <div className="space-y-2">
                    {currentStudent.testimonial.map((line, index) => (
                      <p key={index} className="text-[#6B4C4C] text-base leading-relaxed">
                        &quot;{line}&quot;
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <button
            onClick={prevStudent}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#550000] text-white p-2 rounded-full hover:bg-[#550000]/80 transition-colors shadow-lg"
            aria-label="Previous student"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={nextStudent}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#550000] text-white p-2 rounded-full hover:bg-[#550000]/80 transition-colors shadow-lg"
            aria-label="Next student"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-4 space-x-2">
          {students.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? "bg-[#550000]" : "bg-[#550000]/30"
              }`}
              aria-label={`Go to student ${index + 1}`}
            />
          ))}
        </div>

        {/* Student Counter */}
        <div className="text-center mt-3">
          <span className="text-[#6B4C4C] text-sm">
            {currentIndex + 1} of {students.length}
          </span>
        </div>
      </div>
    </section>
  )
}







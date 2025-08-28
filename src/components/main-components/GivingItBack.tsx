"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, GraduationCap, Globe, Users } from "lucide-react"
import { Button } from "@/components/ui/Button"

const colleges = [
  {
    id: 1,
    name: "NIT Bhopal",
    image: "/gib/NITbhopal.png",
    description:
      "Experience the vibrant energy and innovation at NIT Bhopal's annual college fest, a hub for talent and creativity.",
  },
  {
    id: 2,
    name: "NIT Bhopal",
    image: "/gib/NITbhopal.png",
    description:
      "Experience the vibrant energy and innovation at NIT Bhopal's annual college fest, a hub for talent and creativity.",
  },
  {
    id: 3,
    name: "NIT Bhopal",
    image: "/gib/NITbhopal.png",
    description:
      "Experience the vibrant energy and innovation at NIT Bhopal's annual college fest, a hub for talent and creativity.",
  },
  {
    id: 4,
    name: "NIT Durgapur",
    image: "/gib/clg2.jpg",
    description:
      "Join us for an unforgettable celebration of culture, technology, and sports at NIT Durgapur's grand fest.",
  },
]

export default function GivingBackAndCollegeFestPage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % colleges.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + colleges.length) % colleges.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        nextSlide()
      }, 1500) // Auto-slide every 3 seconds

      return () => clearInterval(interval)
    }
  }, [currentSlide, isPaused])

  return (
    <main className="bg-[#FBE4E4]">
      {/* === Giving Back Section === */}
      <section className="w-full py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            {/* Left Column: Text */}
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight text-[#550000] sm:text-5xl md:text-6xl lg:text-7xl font-zodiak">
                Giving it Back
              </h1>
              <p className="max-w-[600px] text-lg text-[#6B4C4C] md:text-xl">
                Not everyone can afford to start. We make sure they still can.
              </p>
            </div>
            {/* Right Column: Images */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[500px] aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/gib/hands.jpg?height=250&width=300"
                  alt="Modern living room"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-xl"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 w-full max-w-[300px] aspect-[4/3] rounded-xl overflow-hidden shadow-lg hidden md:block">
                <Image
                  src="/gib/students.jpg?height=250&width=300"
                  alt="Abstract animation"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-xl"
                  unoptimized
                />
              </div>
            </div>
          </div>
          {/* Feature Cards */}
          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center text-center space-y-3 p-5 bg-[#F8CFCF] rounded-lg shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div className="p-3 rounded-full bg-[#FBE4E4]">
                <GraduationCap className="w-7 h-7 text-[#550000]" />
              </div>
              <h3 className="text-xl font-bold text-[#550000] font-zodiac">Empowering Education</h3>
              <p className="text-[#6B4C4C] text-sm">600+ students trained at no cost</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-3 p-5 bg-[#F8CFCF] rounded-lg shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div className="p-3 rounded-full bg-[#FBE4E4]">
                <Globe className="w-7 h-7 text-[#550000]" />
              </div>
              <h3 className="text-xl font-bold text-[#550000] font-zodiac">Global Reach</h3>
              <p className="text-[#6B4C4C] text-sm">Internships for students from Indonesia</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-3 p-5 bg-[#F8CFCF] rounded-lg shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div className="p-3 rounded-full bg-[#FBE4E4]">
                <Users className="w-7 h-7 text-[#550000]" />
              </div>
              <h3 className="text-xl font-bold text-[#550000] font-zodiac ">Community Investment</h3>
              <p className="text-[#6B4C4C] text-sm">
                Workshop Training at various colleges (BBD, Kendri Vidyalaya) and 1 Lakh + distributed to student
                creators
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* College Fest Section */}
      <section className="w-full py-3 md:py-4">
        <div className="max-w-3xl mx-auto px-4 md:px-6">
          <h3 className="text-center text-sm font-medium font-sans tracking-normal text-[#550000] sm:text-base md:text-lg mb-3 font-zodiak">
            College Fest
          </h3>

          {/* Carousel Container */}
          <div className="relative max-w-lg mx-auto">
            {/* Main Carousel */}
            <div
              className="overflow-hidden rounded-md shadow-sm"
              style={{ backgroundColor: "#f5f5f5" }}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}

                // style={{ transform: translateX(-${currentSlide * 100}%) }}
              >
                {colleges.map((college) => (
                  <div key={college.id} className="w-full flex-shrink-0 p-3">
                    <div className="flex flex-col items-center text-center space-y-2">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden shadow-sm">
                        <Image
  src={`${college.image}?height=300&width=300`}
  alt={`${college.name} Fest`}
  fill
  className="object-cover rounded-full"
/>

                      
                      </div>
                      <h4 className="text-sm font-medium text-[#550000] font-zodiak">{college.name}</h4>
                      <p className="text-xs text-[#6B4C4C] font-sans max-w-xs leading-relaxed opacity-70 line-clamp-2">
                        {college.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div> 

            {/* Navigation Buttons */}
            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#FBE4E4] hover:bg-white border-[#550000]/20 text-[#550000] shadow-lg"
              onClick={prevSlide}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#FBE4E4] hover:bg-white border-[#550000]/20 text-[#550000] shadow-lg"
              onClick={nextSlide}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex justify-center space-x-2 mt-6">
              {colleges.map((_, index) => (
                <button
                  key={index}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === currentSlide ? "bg-[#550000] scale-125" : "bg-[#550000]/30 hover:bg-[#550000]/50"
                  }`}
                  onClick={() => goToSlide(index)}
                />
              ))}
            </div>

            {/* Slide Counter */}
            <div className="text-center mt-3">
              <span className="text-xs text-[#6B4C4C] font-sans">
                {currentSlide + 1} of {colleges.length}
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}


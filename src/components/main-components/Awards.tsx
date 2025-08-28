"use client"
import { Badge } from "@/components/ui/Badge"
import { Trophy, Award, Star, Zap, Crown, Medal } from "lucide-react"
import { useEffect, useState } from "react"
import Image from "next/image"

const awards = [
  {
    title: "UP Brand Leadership Awards",
    years: "2023, 2024",
    image: "/awards/fahad-sir-award.jpg",
  },
  {
    title: "Winner of Chunauti 3.0",
    organization: "MeitY and STPI",
    image: "/awards/chunauti3.jpg",
  },
  {
    title: "Winner of OCTANE OCP 3.0",
    organization: "MeitY and STPI",
    image: "/awards/octane1.jpg",
  },
  {
    title: "Finalist of Samridh Scheme",
    organization: "AIC BIMTECH",
    image: "/awards/yash-sir-award.jpg",
  },
]

const recognitions = [
  {
    text: "Top 100 Global Impact Startup (Harvard Business School & Stanford)",
    icon: <Trophy className="w-12 h-12" />,
  },
  { text: "Top 10 Startups - India's First Tourism Tech (Fiire, Goa)", icon: <Trophy className="w-12 h-12" /> },
  { text: "Top 100 Startups in India (IIIE Conclave-23, Kolkata)", icon: <Award className="w-12 h-12" /> },
  { text: "Top 50 Startups in Rajasthan State Conclave (ESC)", icon: <Medal className="w-12 h-12" /> },
  { text: "Top 50 Startups (Aarambh-22, HBTU)", icon: <Star className="w-12 h-12" /> },
  { text: "Top 100 Startups in India (AIC-NMIMS, Mumbai)", icon: <Crown className="w-12 h-12" /> },
  { text: "Top 50 Startups in UP (Wadhwani Foundation)", icon: <Zap className="w-12 h-12" /> },
]

export default function AwardsRecognition() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % recognitions.length)
    }, 2500)

    return () => clearInterval(interval)
  }, [])

  return (
    <section id = "Awards" className="py-16 px-4 bg-[#edc6c6]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold font-zodiac text-[#550000] mb-4 ">Awards & Recognition</h2>
          <p className="text-lg text-[#6B4C4C] max-w-3xl mx-auto leading-relaxed">
            Our journey of excellence has been recognized by prestigious institutions and organizations worldwide,
            validating our commitment to innovation and impact.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-[#550000] mb-8 text-center">Major Awards</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {awards.map((award, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl bg-white/80 backdrop-blur-sm border border-[#550000]/10 hover:shadow-xl transition-all duration-200 hover:scale-105 aspect-[4/3]"
              >
                <Image
                  src={award.image || "/placeholder.svg"}
                  alt={award.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-150" />
                {/* Award info overlay */}
                <div className="absolute inset-0 p-4 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                  <h4 className="text-white font-semibold text-base leading-tight mb-2">{award.title}</h4>
                  {award.years && (
                    <Badge variant="secondary" className="text-sm bg-white/90 text-[#550000] w-fit mb-1">
                      {award.years}
                    </Badge>
                  )}
                  {award.organization && (
                    <p className="text-white/90 text-sm mt-1 leading-tight">{award.organization}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-semibold text-[#550000] mb-8">Additional Recognition</h3>
          <div className="relative bg-gradient-to-br from-[#c92c2f] via-[#b92f2f] to-[#ba1f1f] rounded-3xl p-12 shadow-2xl overflow-hidden">
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-white/5 animate-pulse"></div>
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 25% 25%, white 2px, transparent 2px), radial-gradient(circle at 75% 75%, white 1px, transparent 1px)",
                  backgroundSize: "50px 50px, 30px 30px",
                  animation: "float 15s ease-in-out infinite",
                }}
              ></div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse"></div>

            <div className="relative z-10">
              <div className="flex items-center justify-center gap-8 min-h-[140px]">
                <div className="text-white flex-shrink-0 transform transition-all duration-300 ease-out scale-110 drop-shadow-2xl relative">
                  <div className="absolute inset-0 bg-white/20 rounded-full blur-xl scale-150 animate-pulse"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-300/30 to-orange-400/30 rounded-full blur-lg scale-125 animate-pulse"></div>
                  <div className="relative p-4 bg-black/10 rounded-full border-2 border-white/30 backdrop-blur-sm shadow-2xl">
                    <div
                      className="filter drop-shadow-lg"
                      style={{
                        filter:
                          "drop-shadow(0 0 15px rgba(255,255,255,0.8)) drop-shadow(0 0 30px rgba(255,255,255,0.4))",
                      }}
                    >
                      {recognitions[currentIndex].icon}
                    </div>
                  </div>
                </div>
                <div className="overflow-hidden flex-1 max-w-4xl">
                  <p
                    key={currentIndex}
                    className="text-white font-bold text-2xl md:text-3xl leading-relaxed animate-in slide-in-from-right-5 fade-in duration-300 drop-shadow-lg text-center"
                    style={{
                      textShadow: "0 0 20px rgba(255,255,255,0.3), 0 0 40px rgba(255,255,255,0.1)",
                    }}
                  >
                    {recognitions[currentIndex].text}
                  </p>
                </div>
              </div>

              {/* Enhanced navigation dots */}
              <div className="flex justify-center gap-4 mt-10">
                {recognitions.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`rounded-full transition-all duration-200 ease-out transform hover:scale-125 ${index === currentIndex
                        ? "bg-white w-12 h-4 shadow-lg shadow-white/30 drop-shadow-lg"
                        : "bg-white/40 hover:bg-white/70 w-4 h-4"
                      }`}
                  />
                ))}
              </div>

              {/* Animated progress bar */}
              <div className="mt-8 w-full bg-white/20 rounded-full h-2 overflow-hidden shadow-inner">
                <div
                  className="h-full bg-gradient-to-r from-white to-white/80 rounded-full transition-all duration-500 ease-out shadow-sm"
                  style={{
                    width: `${((currentIndex + 1) / recognitions.length) * 100}%`,
                    boxShadow: "0 0 10px rgba(255,255,255,0.5)",
                  }}


                />
              </div>

              {/* Recognition counter */}
              <div className="mt-6 text-white/90 text-lg font-semibold drop-shadow-sm">
                {currentIndex + 1} of {recognitions.length} recognitions
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export { AwardsRecognition }

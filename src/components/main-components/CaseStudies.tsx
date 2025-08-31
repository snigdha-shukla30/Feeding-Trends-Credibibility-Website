"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/Card"
import { TrendingUp, Users, DollarSign, Clock } from "lucide-react"
import type React from "react"
import Image from "next/image"

interface CaseStudyProps {
  title: string
  solution: string
  metrics: { label: string; value: string; icon: React.ReactNode }[]
  image: string
}

const CaseStudyCard = ({ title, solution, metrics, image }: CaseStudyProps) => (
  <div className="min-w-[180px] max-w-[180px] sm:min-w-[220px] sm:max-w-[220px] md:min-w-[300px] md:max-w-[300px] lg:min-w-[340px] lg:max-w-[340px]">
    <Card className="h-full bg-white border border-[#FBE4E4] shadow-md sm:shadow-lg rounded-xl overflow-hidden">
      <CardContent className="p-0">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={400}
          height={200}
          className="w-full h-28 sm:h-32 md:h-40 lg:h-48 object-cover rounded-t-xl"
        />
        <div className="p-3 sm:p-4">
          <h3 className="text-base sm:text-lg font-semibold font-zodiac text-[#201616] mb-1">{title}</h3>
          <p className="text-xs sm:text-sm text-[#6B4C4C] mb-2 leading-tight">{solution}</p>
          <div className="grid grid-cols-3 gap-2 sm:gap-3 mt-3 sm:mt-4 pt-2 border-t border-[#FBE4E4] text-center">
            {metrics.map((metric, index) => (
              <div key={index}>
                <div className="text-[#000000] mb-1 flex justify-center">{metric.icon}</div>
                <div className="font-bold font-zodiac text-sm text-[#550000]">{metric.value}</div>
                <div className="text-xs text-[#6B4C4C]">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
)

export default function CaseStudyMarquee() {
  const caseStudies: CaseStudyProps[] = [
    {
      title: "Mango Festival",
      solution: "blending local flavor with global reach",
      metrics: [
        { label: "Time Saved", value: "45%", icon: <TrendingUp className="h-4 w-4" /> },
        { label: "Cost", value: "$2.5M", icon: <DollarSign className="h-4 w-4" /> },
        { label: "People", value: "50+", icon: <Users className="h-4 w-4" /> },
      ],
      image: "/caseStudy/mango.avif",
    },
    {
      title: "Lucknow Literature Festival",
      solution: "cultural expression meets creators",
      metrics: [
        { label: "Time Saved", value: "50%", icon: <Clock className="h-4 w-4" /> },
        { label: "Cost", value: "30%", icon: <DollarSign className="h-4 w-4" /> },
        { label: "People", value: "200+", icon: <Users className="h-4 w-4" /> },
      ],
      image: "/caseStudy/lko.jpg",
    },
    {
      title: "Women’s Day Creatorthon",
      solution: "voices that don’t just speak, but echo",
      metrics: [
        { label: "Time Saved", value: "35%", icon: <TrendingUp className="h-4 w-4" /> },
        { label: "Cost", value: "40%", icon: <DollarSign className="h-4 w-4" /> },
        { label: "People", value: "1000+", icon: <Users className="h-4 w-4" /> },
      ],
      image: "/caseStudy/women.webp",
    },
    {
      title: "Right to Vote Creatorthon",
      solution: "youth + democracy",
      metrics: [
        { label: "Time Saved", value: "35%", icon: <TrendingUp className="h-4 w-4" /> },
        { label: "Cost", value: "40%", icon: <DollarSign className="h-4 w-4" /> },
        { label: "People", value: "1000+", icon: <Users className="h-4 w-4" /> },
      ],
      image: "/caseStudy/vote.jpg",
    },
    {
      title: "Are You Listening",
      solution: "content around mental health that helped",
      metrics: [
        { label: "Time Saved", value: "35%", icon: <TrendingUp className="h-4 w-4" /> },
        { label: "Cost", value: "40%", icon: <DollarSign className="h-4 w-4" /> },
        { label: "People", value: "1000+", icon: <Users className="h-4 w-4" /> },
      ],
      image: "/caseStudy/listening.jpg",
    },
  ]

  const repeatedStudies = [...caseStudies, ...caseStudies] // for smooth loop

  return (
    <section id="case-studies" className="py-20 bg-[#FBE4E4] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <h2 className="text-4xl font-bold font-zodiac text-[#550000] mb-4">Success Stories</h2>
        <p className="text-xl text-[#6B4C4C] max-w-3xl mx-auto">
          These weren’t just campaigns — they were communities in action.
        </p>
      </div>

      <div className="relative w-full">
        <motion.div
          className="flex w-max space-x-3 sm:space-x-4 md:space-x-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 30, ease: "linear" }}
        >
          {repeatedStudies.map((study, index) => (
            <CaseStudyCard key={index} {...study} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}













// "use client"

// import { motion } from "framer-motion"
// import { Card, CardContent } from "@/components/ui/Card"
// import { TrendingUp, Users, DollarSign, Clock } from "lucide-react"
// import type React from "react"
// import Image from "next/image"

// interface CaseStudyProps {
//   title: string
//   solution: string
//   metrics: { label: string; value: string; icon: React.ReactNode }[]
//   image: string
// }

// const CaseStudyCard = ({ title, solution, metrics, image }: CaseStudyProps) => (
//   <div className="min-w-[300px] max-w-[300px] lg:min-w-[340px] lg:max-w-[340px]">
//     <Card className="h-full bg-white shadow-lg rounded-xl overflow-hidden">
//       <CardContent className="p-0">
//         <Image
//           src={image}
//           alt={title}
//           width={400}
//           height={200}
//           className="w-full h-48 object-cover rounded-t-xl"
//         />
//         <div className="p-4">
//           <h3 className="text-lg font-semibold font-zodiac text-[#201616] mb-1">{title}</h3>
//           <p className="text-sm text-[#6B4C4C] mb-2">{solution}</p>
//           <div className="grid grid-cols-3 gap-3 mt-4 pt-2 border-t border-[#FBE4E4] text-center">
//             {metrics.map((metric, index) => (
//               <div key={index}>
//                 <div className="text-[#000000] mb-1 flex justify-center">{metric.icon}</div>
//                 <div className="font-bold font-zodiac text-sm text-[#550000]">{metric.value}</div>
//                 <div className="text-xs text-[#6B4C4C]">{metric.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </CardContent>
//     </Card>
//   </div>
// )

// export default function CaseStudyMarquee() {
//   const caseStudies: CaseStudyProps[] = [
//     {
//       title: "Mango Festival",
//       solution: "blending local flavor with global reach",
//       metrics: [
//         { label: "Time Saved", value: "45%", icon: <TrendingUp className="h-4 w-4" /> },
//         { label: "Cost", value: "$2.5M", icon: <DollarSign className="h-4 w-4" /> },
//         { label: "People", value: "50+", icon: <Users className="h-4 w-4" /> },
//       ],
//       image: "/caseStudy/mango.avif",
//     },
//     {
//       title: "Lucknow Literature Festival",
//       solution: "cultural expression meets creators",
//       metrics: [
//         { label: "Time Saved", value: "50%", icon: <Clock className="h-4 w-4" /> },
//         { label: "Cost", value: "30%", icon: <DollarSign className="h-4 w-4" /> },
//         { label: "People", value: "200+", icon: <Users className="h-4 w-4" /> },
//       ],
//       image: "/caseStudy/lko.jpg",
//     },
//     {
//       title: "Women’s Day Creatorthon",
//       solution: "voices that don’t just speak, but echo",
//       metrics: [
//         { label: "Time Saved", value: "35%", icon: <TrendingUp className="h-4 w-4" /> },
//         { label: "Cost", value: "40%", icon: <DollarSign className="h-4 w-4" /> },
//         { label: "People", value: "1000+", icon: <Users className="h-4 w-4" /> },
//       ],
//       image: "/caseStudy/women.webp",
//     },
//     {
//       title: "Right to Vote Creatorthon",
//       solution: "youth + democracy",
//       metrics: [
//         { label: "Time Saved", value: "35%", icon: <TrendingUp className="h-4 w-4" /> },
//         { label: "Cost", value: "40%", icon: <DollarSign className="h-4 w-4" /> },
//         { label: "People", value: "1000+", icon: <Users className="h-4 w-4" /> },
//       ],
//       image: "/caseStudy/vote.jpg",
//     },
//     {
//       title: "Are You Listening",
//       solution: "content around mental health that helped",
//       metrics: [
//         { label: "Time Saved", value: "35%", icon: <TrendingUp className="h-4 w-4" /> },
//         { label: "Cost", value: "40%", icon: <DollarSign className="h-4 w-4" /> },
//         { label: "People", value: "1000+", icon: <Users className="h-4 w-4" /> },
//       ],
//       image: "/caseStudy/listening.jpg",
//     },
//   ]

//   const repeatedStudies = [...caseStudies, ...caseStudies] // for smooth loop

//   return (
//     <section id = "case-studies"  className="py-20 bg-[#FBE4E4] overflow-hidden">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
//         <h2 className="text-4xl font-bold font-zodiac text-[#550000] mb-4">Success Stories</h2>
//         <p className="text-xl text-[#6B4C4C] max-w-3xl mx-auto">
//           These weren’t just campaigns — they were communities in action.
//         </p>
//       </div>

//       <div className="relative w-full">
//         <motion.div
//           className="flex space-x-6 w-max"
//           animate={{ x: ["0%", "-50%"] }}
//           transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
//         >
//           {repeatedStudies.map((study, index) => (
//             <CaseStudyCard key={index} {...study} />
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   )
// }




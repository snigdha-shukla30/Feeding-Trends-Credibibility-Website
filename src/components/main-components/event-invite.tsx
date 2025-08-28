

import { Card, CardContent } from "@/components/ui/Card"
import Image from "next/image"

const events = [
  {
    id: 1,
    title: "CSIR ",
    logo: "/invite/CSIRlogo.jpg",
    photo: "/invite/CSIR.jpg",
  },
  {
    id: 2,
    title: "AI Event",
    logo: "/invite/AIlogo.jpg",
    photo: "/invite/AIevent.jpg",
  },
  {
    id: 3,
    title: "Russia MOU ",
    logo: "/invite/Russialogo.jpg",
    photo: "/invite/Russia.jpg",
  },
  {
    id: 4,
    title: "Digital Marketing Day  ",
    logo: "/invite/DMlogo.jpg",
    photo: "/invite/DM.jpg",
  },
]

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-[#f1bfbf]">
      <div
        className="bg-red-600 text-white py-16 relative"
        style={{
          backgroundImage: "url('/invite/bg.avif')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl font-bold font-zodiak mb-4 text-white drop-shadow-lg">
            Events and Guest Talks
          </h1>
          <p className="text-xl text-red-100 font-medium">
            Discover Our Latest Conferences and Workshops
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {events.map((event) => (
            <Card
              key={event.id}
              className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white border border-slate-200/60 rounded-2xl overflow-hidden backdrop-blur-sm hover:border-slate-300/80"
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <Image
                    src={event.photo || "/placeholder.svg"}
                    alt={`${event.title} event`}
                    width={400}
                    height={256}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-white/98 p-3 rounded-2xl shadow-xl border border-slate-200/50 backdrop-blur-sm">
                    <Image
                      src={event.logo || "/placeholder.svg"}
                      alt={`${event.title} logo`}
                      width={96}
                      height={96}
                      className="w-24 h-24 object-cover rounded-xl ring-2 ring-slate-100"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-8 bg-gradient-to-b from-white to-slate-50/50">
                  <h3 className="text-xl font-bold text-slate-800 text-center tracking-tight leading-tight">
                    {event.title}
                  </h3>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}










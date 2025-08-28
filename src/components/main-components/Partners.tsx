"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function Partners() {
  const partners = [
    { name: "NMIMS", logo: "/logos/nmims-logo.webp", width: 120, height: 60 },
    { name: "#startupindia", logo: "/logos/startt.png", width: 120, height: 60 },
    { name: "NGIS", logo: "/logos/ngis.png", width: 120, height: 60 },
    { name: "Up START", logo: "/logos/upstart.png", width: 120, height: 60 },
    { name: "Octane", logo: "/logos/OC.png", width: 160, height: 80 },
    { name: "NASSCOM", logo: "/logos/Nasscom.png", width: 120, height: 60 },
    { name: "ATAL INCUBATION CENTRE", logo: "/logos/atal.png", width: 120, height: 60 },
    { name: "FIRE", logo: "/logos/Fire-logo.png", width: 120, height: 60 },
    { name: "CMO ASIA", logo: "/logos/CMOO.png", width: 120, height: 60 },
    { name: "IIMFIELD", logo: "/logos/iim.png", width: 120, height: 60 },
    { name: "Innovation Hub", logo: "/logos/ihub.webp", width: 120, height: 60 },
    { name: "UP", logo: "/logos/utt.svg", width: 120, height: 60 },
  ]

  return (
    <section id="clients" className="py-20 bg-[#FBE4E4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold font-zodiak text-[#550000] mb-6">
            Ecosystem Partners & Support Organisation
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-10 items-center"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1 }}
              className="flex justify-center items-center"
            >
              <Image
                src={partner.logo}
                alt={`${partner.name} logo`}
                width={partner.width}
                height={partner.height}
                className="h-16 w-auto object-contain transition-all duration-500 opacity-70 hover:opacity-100 hover:brightness-110 hover:contrast-110"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}




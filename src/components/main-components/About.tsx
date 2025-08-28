import Image from "next/image"

export default function AboutUsSection() {
  return (
    <section id = "about" className="w-full py-12 md:py-24 lg:py-32 bg-[#FBE4E4] relative overflow-hidden">
      {/* Background image for the entire section, subtle and behind the main content */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: 'url("/about/background.jpg?height=1080&width=1920")' }}
        aria-hidden="true"
      />
      <div className="container px-4 md:px-6 relative z-10">
        {/* Main content card, with a light background to ensure text readability */}
        <div className="mx-auto max-w-6xl rounded-xl overflow-hidden transition-all duration-300 bg-transparent">


          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {/* Left Column: Image */}
            <div className="relative min-h-[300px] md:min-h-[500px]">
              <Image
                src="/about/group.jpg?height=700&width=700"
                alt="Smiling woman"
                layout="fill"
                objectFit="cover"
                className="object-center" // Image will be clipped by parent's rounded corners
              />
            </div>

            {/* Right Column: Text Content */}
            <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <h2
                className="text-3xl md:text-4xl font-bold mb-4 text-[#550000] tracking-tight"
                style={{
                  fontFamily: "Georgia, serif", // Placeholder for "Zodiac font". For a custom font, you would typically import it using Next.js font optimization and apply a custom Tailwind class.
                }}
              >
                ABOUT US
              </h2>
              <p className="text-lg mb-6 text-[#6B4C4C]">
                We help you to never feel limited to pursue your dreams or ambition. Your dreams deserve more than likes
                & followers. They deserve momentum. No more waiting for the right network, stage, or tools.
              </p>
              <hr className="border-t border-gray-200 my-6" /> {/* Lighter border for light background */}
              <p className="text-base text-[#6B4C4C]">
                FT connects you with trustworthy helpful people, the right tools, and a stage to make things happen.
                Share your Ideas. Build your brand. Grow your journey. Ignite that Trendsetter inside of you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}





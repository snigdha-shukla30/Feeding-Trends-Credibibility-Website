import Image from "next/image"

export default function HeroSplitBackground() {
  return (
    <section className="relative w-full min-h-[600px] flex flex-col md:flex-row overflow-hidden">
      {/* Left half: Image background with diamond placeholders */}
      <div
        className="relative w-full md:w-1/2 h-[300px] md:h-auto bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url('/whyitworks/back_pink_fade.png')`,
        }}
      >
        {/* Gradient overlay for mobile to ensure readability if content overlaps */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#FBE4E4] md:from-transparent to-transparent md:hidden"></div>
        {/* Diamond Image Placeholders */}
        <div className="relative z-10 w-full h-full">
          {/* Diamond 1 (Top) */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100px] h-[100px] lg:w-[200px] lg:h-[200px] bg-white border-4 border-white shadow-lg overflow-hidden transform rotate-45 md:left-[70%]">
            <Image
              src="/whyitworks/firrr.jpg?height=200&width=200"
              alt="phone image"
              width={200}
              height={200}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          {/* Diamond 2 (Middle) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100px] h-[100px] lg:w-[200px] lg:h-[200px] bg-white border-4 border-white shadow-lg overflow-hidden transform rotate-45 md:left-[70%]">
            <Image
              src="/whyitworks/sec.jpg?height=200&width=200"
              alt="shaking hands"
              width={200}
              height={200}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          {/* Diamond 3 (Bottom) */}
          <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 translate-y-1/2 w-[100px] h-[100px] lg:w-[200px] lg:h-[200px] bg-white border-4 border-white shadow-lg overflow-hidden transform rotate-45 md:left-[70%]">
            <Image
              src="/whyitworks/th.jpg?height=200&width=200"
              alt="community image"
              width={200}
              height={200}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      {/* Right half: Solid pink background with content */}
      <div className="relative w-full md:w-1/2 flex items-center justify-center p-8 md:p-12 bg-[#FBE4E4]">
        {/* Content layer */}
        <div className="relative z-10 text-center md:text-left max-w-md mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#550000] mb-4">Why It Works</h1>
          <div className="space-y-4 text-lg md:text-xl text-[#6B4C4C] mb-6">
            <div>
              <h2 className="font-semibold text-[#550000]">For Individuals:</h2>
              <p>
                FT isn’t about going viral — it’s about being valuable. A place to post your goals, find the right help,
                build your brand, and start earning.
              </p>
            </div>
            <div>
              <h2 className="font-semibold text-[#550000]">For Businesses:</h2>
              <p>Collaborate with people who care. Run campaigns with authenticity, depth, and organic impact.</p>
            </div>
            <div>
              <h2 className="font-semibold text-[#550000]">For Society:</h2>
              <p>Platforms usually reward attention. We reward action.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

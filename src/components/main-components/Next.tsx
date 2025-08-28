"use client";
import React, { useEffect, useState } from 'react';
import Image from "next/image";

export default function Page() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <main className="min-h-screen bg-[linear-gradient(135deg,_#F8CFCF_0%,_#FBE4E4_45%,_#FFE8E8_100%)] text-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -left-32 w-64 h-64 bg-gradient-to-br from-[#E53935]/10 to-transparent rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/2 -right-32 w-96 h-96 bg-gradient-to-br from-[#7F1D1D]/8 to-transparent rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute -bottom-32 left-1/3 w-80 h-80 bg-gradient-to-br from-[#E53935]/6 to-transparent rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      <section className="relative z-10 mx-auto max-w-6xl px-6 py-14 lg:py-20 grid items-center gap-10 lg:grid-cols-2">
        {/* LEFT: Text content */}
        <div
          className={`flex-1 space-y-5 transform transition-all duration-1500 ${
            isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          }`}
          style={{ marginLeft: "-7.5rem" }} // shifted slightly more left
        >
          {/* Main Heading */}
          <div className="relative">
            <h1 className="text-4xl lg:text-6xl font-extrabold text-[#4A1F1F] leading-snug tracking-tight group">
              <span className="inline-block transition-all duration-700 ease-out group-hover:scale-105 drop-shadow-sm">
                {`What's`}
              </span>{' '}
              <span className="inline-block bg-gradient-to-r from-[#B91C1C] via-[#9B1C1C] to-[#5B0E0E] bg-clip-text text-transparent transition-all duration-700 ease-out bg-size-200 bg-pos-0 hover:bg-pos-100">
                Next?
              </span>
            </h1>
          </div>

          {/* Content Sections */}
          <div className="space-y-4">
            {[
              { from: "content", to: "credibility", delay: "100ms" },
              { from: "scrolls", to: "solutions", delay: "200ms" },
              { from: "loud voices", to: "trusted minds", delay: "300ms" }
            ].map((item, index) => (
              <div
                key={index}
                className={`group relative transform transition-all duration-700 ease-out hover:scale-[1.02] hover:-translate-y-1.5 ${
                  isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}
                style={{
                  transitionDelay: isLoaded ? item.delay : '0ms'
                }}
              >
                <div className="flex items-center space-x-3 p-4 bg-white/20 backdrop-blur-md rounded-xl border border-white/30 hover:bg-white/30 hover:border-[#B91C1C]/40 transition-all duration-500">
                  <span className="text-[#5C3B3B] text-base text-xl font-medium">
                    {`We're moving from`}
                  </span>
                  <span className="px-3 py-1 text-[#4A1F1F] text-xl font-medium">
                    {item.from}
                  </span>
                  <span className="text-[#5C3B3B] text-base lg:text-lg font-medium">
                    to
                  </span>
                  <span className="px-3 py-1 text-[#8B1A1A] text-2xl font-medium">
                    {item.to}
                  </span>
                </div>
              </div>
            ))}

            {/* Vision Statement */}
            <div
              className={`relative p-5 bg-white/20 backdrop-blur-md border border-white/30 rounded-xl hover:bg-white/30 hover:border-[#B91C1C]/30 transition-all duration-700 ease-out ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
              style={{
                transitionDelay: isLoaded ? '400ms' : '0ms'
              }}
            >
              <div className="relative text-[#5C3B3B] text-base lg:text-xl leading-relaxed font-medium">
                The future belongs to platforms that help people not just share — but{' '}
                <span className=" text-[#8B1A1A]">
                  solve, grow, and lead.
                </span>
              </div>
            </div>

            {/* Call to Action */}
            <div
              className={`space-y-4 transition-all duration-1000 ease-out ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
              style={{
                transitionDelay: isLoaded ? '500ms' : '0ms'
              }}
            >
              <p className="text-xl lg:text-2xl font-bold text-[#8B1A1A]">
                {`We're becoming that platform.`}
              </p>
              <p className="text-lg lg:text-xl text-[#8B1A1A] font-medium">
                And you can be part of it.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT: Enhanced Hex collage with attractive background */}
        <div
          className={`relative order-1 lg:order-2 h-[620px] sm:h-[660px] transform transition-all duration-1500 ${
            isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          }`}
        >
          {/* Enhanced Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Main gradient backdrop */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#E53935]/15 via-[#B91C1C]/10 to-[#7F1D1D]/8 rounded-3xl blur-2xl"></div>
            
            {/* Animated gradient orbs */}
            <div className="absolute top-10 right-10 w-48 h-48 bg-gradient-to-br from-[#FF6B6B]/20 to-[#E53935]/10 rounded-full blur-3xl animate-pulse-slow"></div>
            <div className="absolute bottom-16 left-8 w-64 h-64 bg-gradient-to-tr from-[#D32F2F]/15 to-[#9B1C1C]/8 rounded-full blur-3xl animate-float"></div>
            <div className="absolute top-1/2 right-0 w-36 h-36 bg-gradient-to-bl from-[#C62828]/18 to-transparent rounded-full blur-2xl animate-float-delayed"></div>
            
            {/* Subtle geometric patterns */}
            <div className="absolute top-20 left-12 w-24 h-24 bg-gradient-to-r from-white/10 to-white/5 rounded-lg transform rotate-45 blur-sm animate-pulse-slow"></div>
            <div className="absolute bottom-32 right-20 w-16 h-16 bg-gradient-to-l from-[#E53935]/15 to-transparent rounded-full blur-sm animate-float"></div>
            
            {/* Radial gradient overlay */}
            <div className="absolute inset-0 bg-gradient-radial from-transparent via-white/5 to-[#E53935]/8 rounded-3xl"></div>
          </div>
          
          <HexImage
            className="absolute top-0 -right-40 w-100 h-100"
            src="/next/growth.jpg"
            alt="City skyline 1"
            delay="200ms"
          />
          <HexImage
            className="absolute top-47 -left-8 w-100 h-100"
            src="/next/teamwork.jpg"
            alt="City skyline 2"
            delay="400ms"
          />
          <HexImage
            className="absolute -bottom-27 -right-40 w-100 h-100"
            src="/gib/hands.jpg"
            alt="City skyline 3"
            delay="600ms"
          />
        </div>
      </section>
    </main>
  );
}

function HexImage({
  className,
  alt,
  src,
  delay = "0ms"
}: {
  className?: string;
  alt: string;
  src: string;
  delay?: string;
}) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), parseInt(delay));
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`overflow-hidden shadow-2xl transform transition-all duration-1000 ease-out ${className || ""} ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}
      style={{
        clipPath:
          "polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)",
      }}
    >
      <div className="relative w-full h-full overflow-hidden">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover transition-all duration-700 ease-out"
        />
      </div>
    </div>
  );
}







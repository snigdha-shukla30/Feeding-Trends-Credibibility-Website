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

      <section className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 py-8 sm:py-14 lg:py-20">
        {/* Mobile Layout - Text first, then hexagons */}
        <div className="lg:hidden flex flex-col items-center space-y-8">
          {/* Text content for mobile */}
          <div
            className={`w-full space-y-5 transform transition-all duration-1500 text-center ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            {/* Main Heading */}
            <div className="relative">
              <h1 className="text-3xl sm:text-4xl font-extrabold text-[#4A1F1F] leading-snug tracking-tight group">
                <span className="inline-block transition-all duration-700 ease-out group-hover:scale-105 drop-shadow-sm">
                  {`What's`}
                </span>{' '}
                <span className="inline-block bg-gradient-to-r from-[#B91C1C] via-[#9B1C1C] to-[#5B0E0E] bg-clip-text text-transparent transition-all duration-700 ease-out bg-size-200 bg-pos-0 hover:bg-pos-100">
                  Next?
                </span>
              </h1>
            </div>

            {/* Content Sections */}
            <div className="space-y-3">
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
                  <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-3 p-3 sm:p-4 bg-white/20 backdrop-blur-md rounded-xl border border-white/30 hover:bg-white/30 hover:border-[#B91C1C]/40 transition-all duration-500">
                    <span className="text-[#5C3B3B] text-sm sm:text-base font-medium">
                      {`We're moving from`}
                    </span>
                    <span className="px-2 py-1 text-[#4A1F1F] text-lg sm:text-xl font-medium">
                      {item.from}
                    </span>
                    <span className="text-[#5C3B3B] text-sm sm:text-base font-medium">
                      to
                    </span>
                    <span className="px-2 py-1 text-[#8B1A1A] text-xl sm:text-2xl font-medium">
                      {item.to}
                    </span>
                  </div>
                </div>
              ))}

              {/* Vision Statement */}
              <div
                className={`relative p-4 sm:p-5 bg-white/20 backdrop-blur-md border border-white/30 rounded-xl hover:bg-white/30 hover:border-[#B91C1C]/30 transition-all duration-700 ease-out ${
                  isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}
                style={{
                  transitionDelay: isLoaded ? '400ms' : '0ms'
                }}
              >
                <div className="relative text-[#5C3B3B] text-base sm:text-lg lg:text-xl leading-relaxed font-medium">
                  The future belongs to platforms that help people not just share — but{' '}
                  <span className="text-[#8B1A1A]">
                    solve, grow, and lead.
                  </span>
                </div>
              </div>

              {/* Call to Action */}
              <div
                className={`space-y-3 transition-all duration-1000 ease-out ${
                  isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}
                style={{
                  transitionDelay: isLoaded ? '500ms' : '0ms'
                }}
              >
                <p className="text-lg sm:text-xl lg:text-2xl font-bold text-[#8B1A1A]">
                  {`We're becoming that platform.`}
                </p>
                <p className="text-base sm:text-lg lg:text-xl text-[#8B1A1A] font-medium">
                  And you can be part of it.
                </p>
              </div>
            </div>
          </div>

          {/* Mobile Hexagons - Horizontal arrangement */}
          <div
            className={`relative w-full h-48 sm:h-56 transform transition-all duration-1500 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            {/* Enhanced Background for mobile hexagons */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-br from-[#E53935]/15 via-[#B91C1C]/10 to-[#7F1D1D]/8 rounded-3xl blur-2xl"></div>
              <div className="absolute top-4 right-4 w-32 h-32 bg-gradient-to-br from-[#FF6B6B]/20 to-[#E53935]/10 rounded-full blur-2xl animate-pulse-slow"></div>
              <div className="absolute bottom-4 left-4 w-40 h-40 bg-gradient-to-tr from-[#D32F2F]/15 to-[#9B1C1C]/8 rounded-full blur-2xl animate-float"></div>
            </div>
            
            <MobileHexImage
              className="absolute top-4 left-8 w-24 h-24 sm:w-28 sm:h-28"
              src="/next/growth.jpg"
              alt="Growth"
              delay="200ms"
            />
            <MobileHexImage
              className="absolute top-16 right-12 w-20 h-20 sm:w-24 sm:h-24"
              src="/next/teamwork.jpg"
              alt="Teamwork"
              delay="400ms"
            />
            <MobileHexImage
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-28 h-28 sm:w-32 sm:h-32"
              src="/gib/hands.jpg"
              alt="Collaboration"
              delay="600ms"
            />
          </div>
        </div>

        {/* Desktop Layout - Original grid layout */}
        <div className="hidden lg:grid lg:grid-cols-2 items-center gap-10">
          {/* LEFT: Text content */}
          <div
            className={`flex-1 space-y-5 transform transition-all duration-1500 ${
              isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}
            style={{ marginLeft: "-7.5rem" }}
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
                  <span className="text-[#8B1A1A]">
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

          {/* RIGHT: Desktop Hex collage */}
          <div
            className={`relative order-1 lg:order-2 h-[620px] sm:h-[660px] transform transition-all duration-1500 ${
              isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}
          >
            {/* Enhanced Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-br from-[#E53935]/15 via-[#B91C1C]/10 to-[#7F1D1D]/8 rounded-3xl blur-2xl"></div>
              <div className="absolute top-10 right-10 w-48 h-48 bg-gradient-to-br from-[#FF6B6B]/20 to-[#E53935]/10 rounded-full blur-3xl animate-pulse-slow"></div>
              <div className="absolute bottom-16 left-8 w-64 h-64 bg-gradient-to-tr from-[#D32F2F]/15 to-[#9B1C1C]/8 rounded-full blur-3xl animate-float"></div>
              <div className="absolute top-1/2 right-0 w-36 h-36 bg-gradient-to-bl from-[#C62828]/18 to-transparent rounded-full blur-2xl animate-float-delayed"></div>
              <div className="absolute top-20 left-12 w-24 h-24 bg-gradient-to-r from-white/10 to-white/5 rounded-lg transform rotate-45 blur-sm animate-pulse-slow"></div>
              <div className="absolute bottom-32 right-20 w-16 h-16 bg-gradient-to-l from-[#E53935]/15 to-transparent rounded-full blur-sm animate-float"></div>
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
        </div>
      </section>

      {/* Add custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(1deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-1deg); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        .bg-size-200 {
          background-size: 200% 100%;
        }
        .bg-pos-0 {
          background-position: 0% 50%;
        }
        .hover\\:bg-pos-100:hover {
          background-position: 100% 50%;
        }
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
      `}</style>
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

function MobileHexImage({
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
      className={`overflow-hidden shadow-xl transform transition-all duration-1000 ease-out hover:scale-110 hover:shadow-2xl ${className || ""} ${
        isVisible ? 'translate-y-0 opacity-100 rotate-0' : 'translate-y-8 opacity-0 rotate-12'
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
          className="object-cover transition-all duration-700 ease-out hover:scale-110"
        />
      </div>
    </div>
  );
}





// "use client";
// import React, { useEffect, useState } from 'react';
// import Image from "next/image";

// export default function Page() {
//   const [isLoaded, setIsLoaded] = useState(false);

//   useEffect(() => {
//     setIsLoaded(true);
//   }, []);

//   return (
//     <main className="min-h-screen bg-[linear-gradient(135deg,_#F8CFCF_0%,_#FBE4E4_45%,_#FFE8E8_100%)] text-slate-900 relative overflow-hidden">
//       {/* Animated background elements */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute -top-32 -left-32 w-64 h-64 bg-gradient-to-br from-[#E53935]/10 to-transparent rounded-full blur-3xl animate-float"></div>
//         <div className="absolute top-1/2 -right-32 w-96 h-96 bg-gradient-to-br from-[#7F1D1D]/8 to-transparent rounded-full blur-3xl animate-float-delayed"></div>
//         <div className="absolute -bottom-32 left-1/3 w-80 h-80 bg-gradient-to-br from-[#E53935]/6 to-transparent rounded-full blur-3xl animate-pulse-slow"></div>
//       </div>

//       <section className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 py-8 sm:py-12 lg:py-20 grid items-center gap-6 sm:gap-8 lg:gap-10 lg:grid-cols-2">
//         {/* LEFT: Text content */}
//         <div
//           className={`flex-1 space-y-4 sm:space-y-5 transform transition-all duration-1500 lg:-ml-30 ${
//             isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
//           }`}
//         >
//           {/* Main Heading */}
//           <div className="relative">
//             <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-[#4A1F1F] leading-tight lg:leading-snug tracking-tight group">
//               <span className="inline-block transition-all duration-700 ease-out group-hover:scale-105 drop-shadow-sm">
//                 {`What's`}
//               </span>{' '}
//               <span className="inline-block bg-gradient-to-r from-[#B91C1C] via-[#9B1C1C] to-[#5B0E0E] bg-clip-text text-transparent transition-all duration-700 ease-out bg-size-200 bg-pos-0 hover:bg-pos-100">
//                 Next?
//               </span>
//             </h1>
//           </div>

//           {/* Content Sections */}
//           <div className="space-y-3 sm:space-y-4">
//             {[
//               { from: "content", to: "credibility", delay: "100ms" },
//               { from: "scrolls", to: "solutions", delay: "200ms" },
//               { from: "loud voices", to: "trusted minds", delay: "300ms" }
//             ].map((item, index) => (
//               <div
//                 key={index}
//                 className={`group relative transform transition-all duration-700 ease-out hover:scale-[1.02] hover:-translate-y-1.5 ${
//                   isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
//                 }`}
//                 style={{
//                   transitionDelay: isLoaded ? item.delay : '0ms'
//                 }}
//               >
//                 <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-3 p-3 sm:p-4 bg-white/20 backdrop-blur-md rounded-xl border border-white/30 hover:bg-white/30 hover:border-[#B91C1C]/40 transition-all duration-500">
//                   <span className="text-[#5C3B3B] text-sm sm:text-base lg:text-xl font-medium">
//                     {`We're moving from`}
//                   </span>
//                   <span className="px-2 sm:px-3 py-1 text-[#4A1F1F] text-lg sm:text-xl font-medium">
//                     {item.from}
//                   </span>
//                   <span className="text-[#5C3B3B] text-sm sm:text-base lg:text-lg font-medium">
//                     to
//                   </span>
//                   <span className="px-2 sm:px-3 py-1 text-[#8B1A1A] text-xl sm:text-2xl font-medium">
//                     {item.to}
//                   </span>
//                 </div>
//               </div>
//             ))}

//             {/* Vision Statement */}
//             <div
//               className={`relative p-4 sm:p-5 bg-white/20 backdrop-blur-md border border-white/30 rounded-xl hover:bg-white/30 hover:border-[#B91C1C]/30 transition-all duration-700 ease-out ${
//                 isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
//               }`}
//               style={{
//                 transitionDelay: isLoaded ? '400ms' : '0ms'
//               }}
//             >
//               <div className="relative text-[#5C3B3B] text-base sm:text-lg lg:text-xl leading-relaxed font-medium">
//                 The future belongs to platforms that help people not just share — but{' '}
//                 <span className="text-[#8B1A1A]">
//                   solve, grow, and lead.
//                 </span>
//               </div>
//             </div>

//             {/* Call to Action */}
//             <div
//               className={`space-y-3 sm:space-y-4 transition-all duration-1000 ease-out ${
//                 isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
//               }`}
//               style={{
//                 transitionDelay: isLoaded ? '500ms' : '0ms'
//               }}
//             >
//               <p className="text-lg sm:text-xl lg:text-2xl font-bold text-[#8B1A1A]">
//                 {`We're becoming that platform.`}
//               </p>
//               <p className="text-base sm:text-lg lg:text-xl text-[#8B1A1A] font-medium">
//                 And you can be part of it.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* RIGHT: Enhanced Hex collage with attractive background */}
//         <div
//           className={`relative order-1 lg:order-2 h-[400px] sm:h-[500px] lg:h-[620px] xl:h-[660px] transform transition-all duration-1500 ${
//             isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
//           }`}
//         >
//           {/* Enhanced Background Elements */}
//           <div className="absolute inset-0 overflow-hidden pointer-events-none">
//             {/* Main gradient backdrop */}
//             <div className="absolute inset-0 bg-gradient-to-br from-[#E53935]/15 via-[#B91C1C]/10 to-[#7F1D1D]/8 rounded-3xl blur-2xl"></div>
            
//             {/* Animated gradient orbs - adjusted for mobile */}
//             <div className="absolute top-6 sm:top-10 right-6 sm:right-10 w-32 sm:w-48 h-32 sm:h-48 bg-gradient-to-br from-[#FF6B6B]/20 to-[#E53935]/10 rounded-full blur-3xl animate-pulse-slow"></div>
//             <div className="absolute bottom-10 sm:bottom-16 left-4 sm:left-8 w-48 sm:w-64 h-48 sm:h-64 bg-gradient-to-tr from-[#D32F2F]/15 to-[#9B1C1C]/8 rounded-full blur-3xl animate-float"></div>
//             <div className="absolute top-1/2 right-0 w-24 sm:w-36 h-24 sm:h-36 bg-gradient-to-bl from-[#C62828]/18 to-transparent rounded-full blur-2xl animate-float-delayed"></div>
            
//             {/* Subtle geometric patterns - scaled for mobile */}
//             <div className="absolute top-12 sm:top-20 left-8 sm:left-12 w-16 sm:w-24 h-16 sm:h-24 bg-gradient-to-r from-white/10 to-white/5 rounded-lg transform rotate-45 blur-sm animate-pulse-slow"></div>
//             <div className="absolute bottom-20 sm:bottom-32 right-12 sm:right-20 w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-l from-[#E53935]/15 to-transparent rounded-full blur-sm animate-float"></div>
            
//             {/* Radial gradient overlay */}
//             <div className="absolute inset-0 bg-gradient-radial from-transparent via-white/5 to-[#E53935]/8 rounded-3xl"></div>
//           </div>
          
//           {/* Mobile: Smaller, repositioned hex images */}
//           <HexImage
//             className="absolute top-0 -right-20 sm:-right-32 lg:-right-40 w-60 sm:w-80 lg:w-100 h-60 sm:h-80 lg:h-100"
//             src="/next/growth.jpg"
//             alt="City skyline 1"
//             delay="200ms"
//           />
//           <HexImage
//             className="absolute top-32 sm:top-40 lg:top-47 -left-4 sm:-left-6 lg:-left-8 w-60 sm:w-80 lg:w-100 h-60 sm:h-80 lg:h-100"
//             src="/next/teamwork.jpg"
//             alt="City skyline 2"
//             delay="400ms"
//           />
//           <HexImage
//             className="absolute -bottom-16 sm:-bottom-20 lg:-bottom-27 -right-20 sm:-right-32 lg:-right-40 w-60 sm:w-80 lg:w-100 h-60 sm:h-80 lg:h-100"
//             src="/gib/hands.jpg"
//             alt="City skyline 3"
//             delay="600ms"
//           />
//         </div>
//       </section>
//     </main>
//   );
// }

// function HexImage({
//   className,
//   alt,
//   src,
//   delay = "0ms"
// }: {
//   className?: string;
//   alt: string;
//   src: string;
//   delay?: string;
// }) {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => setIsVisible(true), parseInt(delay));
//     return () => clearTimeout(timer);
//   }, [delay]);

//   return (
//     <div
//       className={`overflow-hidden shadow-xl sm:shadow-2xl transform transition-all duration-1000 ease-out ${className || ""} ${
//         isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
//       }`}
//       style={{
//         clipPath:
//           "polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)",
//       }}
//     >
//       <div className="relative w-full h-full overflow-hidden">
//         <Image
//           src={src}
//           alt={alt}
//           fill
//           className="object-cover transition-all duration-700 ease-out"
//         />
//       </div>
//     </div>
//   );
// }









// "use client";
// import React, { useEffect, useState } from 'react';
// import Image from "next/image";

// export default function Page() {
//   const [isLoaded, setIsLoaded] = useState(false);

//   useEffect(() => {
//     setIsLoaded(true);
//   }, []);

//   return (
//     <main className="min-h-screen bg-[linear-gradient(135deg,_#F8CFCF_0%,_#FBE4E4_45%,_#FFE8E8_100%)] text-slate-900 relative overflow-hidden">
//       {/* Animated background elements */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute -top-32 -left-32 w-64 h-64 bg-gradient-to-br from-[#E53935]/10 to-transparent rounded-full blur-3xl animate-float"></div>
//         <div className="absolute top-1/2 -right-32 w-96 h-96 bg-gradient-to-br from-[#7F1D1D]/8 to-transparent rounded-full blur-3xl animate-float-delayed"></div>
//         <div className="absolute -bottom-32 left-1/3 w-80 h-80 bg-gradient-to-br from-[#E53935]/6 to-transparent rounded-full blur-3xl animate-pulse-slow"></div>
//       </div>

//       <section className="relative z-10 mx-auto max-w-6xl px-6 py-14 lg:py-20 grid items-center gap-10 lg:grid-cols-2">
//         {/* LEFT: Text content */}
//         <div
//           className={`flex-1 space-y-5 transform transition-all duration-1500 ${
//             isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
//           }`}
//           style={{ marginLeft: "-7.5rem" }} // shifted slightly more left
//         >
//           {/* Main Heading */}
//           <div className="relative">
//             <h1 className="text-4xl lg:text-6xl font-extrabold text-[#4A1F1F] leading-snug tracking-tight group">
//               <span className="inline-block transition-all duration-700 ease-out group-hover:scale-105 drop-shadow-sm">
//                 {`What's`}
//               </span>{' '}
//               <span className="inline-block bg-gradient-to-r from-[#B91C1C] via-[#9B1C1C] to-[#5B0E0E] bg-clip-text text-transparent transition-all duration-700 ease-out bg-size-200 bg-pos-0 hover:bg-pos-100">
//                 Next?
//               </span>
//             </h1>
//           </div>

//           {/* Content Sections */}
//           <div className="space-y-4">
//             {[
//               { from: "content", to: "credibility", delay: "100ms" },
//               { from: "scrolls", to: "solutions", delay: "200ms" },
//               { from: "loud voices", to: "trusted minds", delay: "300ms" }
//             ].map((item, index) => (
//               <div
//                 key={index}
//                 className={`group relative transform transition-all duration-700 ease-out hover:scale-[1.02] hover:-translate-y-1.5 ${
//                   isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
//                 }`}
//                 style={{
//                   transitionDelay: isLoaded ? item.delay : '0ms'
//                 }}
//               >
//                 <div className="flex items-center space-x-3 p-4 bg-white/20 backdrop-blur-md rounded-xl border border-white/30 hover:bg-white/30 hover:border-[#B91C1C]/40 transition-all duration-500">
//                   <span className="text-[#5C3B3B] text-base text-xl font-medium">
//                     {`We're moving from`}
//                   </span>
//                   <span className="px-3 py-1 text-[#4A1F1F] text-xl font-medium">
//                     {item.from}
//                   </span>
//                   <span className="text-[#5C3B3B] text-base lg:text-lg font-medium">
//                     to
//                   </span>
//                   <span className="px-3 py-1 text-[#8B1A1A] text-2xl font-medium">
//                     {item.to}
//                   </span>
//                 </div>
//               </div>
//             ))}

//             {/* Vision Statement */}
//             <div
//               className={`relative p-5 bg-white/20 backdrop-blur-md border border-white/30 rounded-xl hover:bg-white/30 hover:border-[#B91C1C]/30 transition-all duration-700 ease-out ${
//                 isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
//               }`}
//               style={{
//                 transitionDelay: isLoaded ? '400ms' : '0ms'
//               }}
//             >
//               <div className="relative text-[#5C3B3B] text-base lg:text-xl leading-relaxed font-medium">
//                 The future belongs to platforms that help people not just share — but{' '}
//                 <span className=" text-[#8B1A1A]">
//                   solve, grow, and lead.
//                 </span>
//               </div>
//             </div>

//             {/* Call to Action */}
//             <div
//               className={`space-y-4 transition-all duration-1000 ease-out ${
//                 isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
//               }`}
//               style={{
//                 transitionDelay: isLoaded ? '500ms' : '0ms'
//               }}
//             >
//               <p className="text-xl lg:text-2xl font-bold text-[#8B1A1A]">
//                 {`We're becoming that platform.`}
//               </p>
//               <p className="text-lg lg:text-xl text-[#8B1A1A] font-medium">
//                 And you can be part of it.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* RIGHT: Enhanced Hex collage with attractive background */}
//         <div
//           className={`relative order-1 lg:order-2 h-[620px] sm:h-[660px] transform transition-all duration-1500 ${
//             isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
//           }`}
//         >
//           {/* Enhanced Background Elements */}
//           <div className="absolute inset-0 overflow-hidden pointer-events-none">
//             {/* Main gradient backdrop */}
//             <div className="absolute inset-0 bg-gradient-to-br from-[#E53935]/15 via-[#B91C1C]/10 to-[#7F1D1D]/8 rounded-3xl blur-2xl"></div>
            
//             {/* Animated gradient orbs */}
//             <div className="absolute top-10 right-10 w-48 h-48 bg-gradient-to-br from-[#FF6B6B]/20 to-[#E53935]/10 rounded-full blur-3xl animate-pulse-slow"></div>
//             <div className="absolute bottom-16 left-8 w-64 h-64 bg-gradient-to-tr from-[#D32F2F]/15 to-[#9B1C1C]/8 rounded-full blur-3xl animate-float"></div>
//             <div className="absolute top-1/2 right-0 w-36 h-36 bg-gradient-to-bl from-[#C62828]/18 to-transparent rounded-full blur-2xl animate-float-delayed"></div>
            
//             {/* Subtle geometric patterns */}
//             <div className="absolute top-20 left-12 w-24 h-24 bg-gradient-to-r from-white/10 to-white/5 rounded-lg transform rotate-45 blur-sm animate-pulse-slow"></div>
//             <div className="absolute bottom-32 right-20 w-16 h-16 bg-gradient-to-l from-[#E53935]/15 to-transparent rounded-full blur-sm animate-float"></div>
            
//             {/* Radial gradient overlay */}
//             <div className="absolute inset-0 bg-gradient-radial from-transparent via-white/5 to-[#E53935]/8 rounded-3xl"></div>
//           </div>
          
//           <HexImage
//             className="absolute top-0 -right-40 w-100 h-100"
//             src="/next/growth.jpg"
//             alt="City skyline 1"
//             delay="200ms"
//           />
//           <HexImage
//             className="absolute top-47 -left-8 w-100 h-100"
//             src="/next/teamwork.jpg"
//             alt="City skyline 2"
//             delay="400ms"
//           />
//           <HexImage
//             className="absolute -bottom-27 -right-40 w-100 h-100"
//             src="/gib/hands.jpg"
//             alt="City skyline 3"
//             delay="600ms"
//           />
//         </div>
//       </section>
//     </main>
//   );
// }

// function HexImage({
//   className,
//   alt,
//   src,
//   delay = "0ms"
// }: {
//   className?: string;
//   alt: string;
//   src: string;
//   delay?: string;
// }) {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => setIsVisible(true), parseInt(delay));
//     return () => clearTimeout(timer);
//   }, [delay]);

//   return (
//     <div
//       className={`overflow-hidden shadow-2xl transform transition-all duration-1000 ease-out ${className || ""} ${
//         isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
//       }`}
//       style={{
//         clipPath:
//           "polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)",
//       }}
//     >
//       <div className="relative w-full h-full overflow-hidden">
//         <Image
//           src={src}
//           alt={alt}
//           fill
//           className="object-cover transition-all duration-700 ease-out"
//         />
//       </div>
//     </div>
//   );
// }







"use client";
import React, { useState } from "react";
import Image from "next/image"; // ✅ Next.js Image import

export default function MissionVisionValues() {
  return (
    <section className="bg-[#B94352] py-20 lg:py-20 md:py-16 sm:py-12 px-6 lg:px-6 md:px-4 sm:px-3 relative overflow-hidden">
      {/* Enhanced Background Animation */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 lg:w-96 lg:h-96 md:w-72 md:h-72 sm:w-48 sm:h-48 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 lg:w-80 lg:h-80 md:w-60 md:h-60 sm:w-40 sm:h-40 bg-white/5 rounded-full translate-x-1/2 translate-y-1/2 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 lg:w-64 lg:h-64 md:w-48 md:h-48 sm:w-32 sm:h-32 bg-white/3 rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse delay-500"></div>
        <div className="absolute top-1/4 right-1/4 w-32 h-32 lg:w-32 lg:h-32 md:w-24 md:h-24 sm:w-16 sm:h-16 bg-white/2 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 lg:w-48 lg:h-48 md:w-36 md:h-36 sm:w-24 sm:h-24 bg-white/4 rounded-full animate-pulse delay-1500"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 lg:left-10 md:left-8 sm:left-6 w-1 h-1 bg-white/30 rounded-full animate-float"></div>
        <div className="absolute top-3/4 right-20 lg:right-20 md:right-16 sm:right-12 w-1 h-1 bg-white/30 rounded-full animate-float delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-1 h-1 bg-white/30 rounded-full animate-float delay-2000"></div>
      </div>

      {/* Header Section */}
      <div className="relative z-10 max-w-6xl mx-auto text-center mb-16 lg:mb-16 md:mb-12 sm:mb-8">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 lg:px-6 lg:py-2 md:px-5 md:py-2 sm:px-4 sm:py-1.5 mb-6 lg:mb-6 md:mb-5 sm:mb-4 hover:bg-white/15 transition-all duration-300">
          <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
          <span className="text-sm lg:text-sm md:text-xs sm:text-xs font-medium text-white uppercase tracking-wider">
            Our Foundation
          </span>
        </div>

        <h2 className="text-4xl md:text-4xl lg:text-4xl md:text-3xl sm:text-2xl font-bold font-zodiak text-white mb-6 lg:mb-6 md:mb-5 sm:mb-4 leading-tight">
          Mission, Vision &{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-orange-200 animate-gradient-x">
            Values
          </span>
        </h2>

        <p className="text-md lg:text-md md:text-sm sm:text-sm text-gray-200 max-w-2xl lg:max-w-2xl md:max-w-xl sm:max-w-sm mx-auto leading-relaxed">
          Discover the core principles that drive our passion, shape our vision,
          and define our commitment to excellence in every endeavor.
        </p>

        <div className="mt-8 lg:mt-8 md:mt-6 sm:mt-4 w-24 lg:w-24 md:w-20 sm:w-16 h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent mx-auto animate-pulse"></div>
      </div>

      {/* Enhanced Cards Grid */}
      <div className="max-w-6xl mx-auto px-6 lg:px-6 md:px-4 sm:px-2 pb-16 lg:pb-16 md:pb-12 sm:pb-8 pt-6 lg:pt-6 md:pt-4 sm:pt-3 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 gap-8 lg:gap-8 md:gap-6 sm:gap-4">
        <Card
          title="OUR MISSION"
          backgroundType="geometric"
          bgColor="#199ad6"
          icon={<MissionIcon aria-hidden />}
          text="Empower 1 billion people to complete their goals, build their influence, get the help they need, earn and grow their journey — by creating a credible network of problem-solvers, trendsetters, and purpose-driven brands."
          gradientOverlay="from-blue-600/20 to-indigo-600/20"
        />

        <Card
          title="OUR VISION"
          backgroundType="geometric"  // ✅ Mission ke jaisa background
          bgColor="#e94a4a"
          icon={<VisionIcon aria-hidden />}
          text="Our vision is to make the impossible feel achievable by simplifying complex challenges and unlocking human potential. We strive to create tools and experiences that empower individuals to take bold steps forward with clarity, confidence, and ease."
          gradientOverlay="from-red-600/20 to-pink-600/20"
        />

        <Card
          title="OUR BELIEF"
          backgroundType="geometric"  // ✅ Mission ke jaisa background
          bgColor="#f08a24"
          icon={<BeliefIcon aria-hidden />}
          text="We believe: People move society forward, not just platforms. Every big achievement once felt out of reach — until someone made it look easy. With the right people, tools, and trust, anyone can do something impossible. That's the kind of world we're building at FT."
          gradientOverlay="from-orange-600/20 to-yellow-600/20"
        />
      </div>

      {/* Enhanced Bottom Accent */}
      <div className="relative z-10 mt-16 lg:mt-16 md:mt-12 sm:mt-8 text-center">
        <div className="inline-flex items-center gap-2 text-white/70 hover:text-white/90 transition-colors duration-300">
          <div className="w-8 lg:w-8 md:w-6 sm:w-4 h-px bg-gradient-to-r from-transparent to-white/30 animate-pulse"></div>
          <span className="text-sm lg:text-sm md:text-xs sm:text-xs font-medium">Building Tomorrow, Today</span>
          <div className="w-8 lg:w-8 md:w-6 sm:w-4 h-px bg-gradient-to-l from-transparent to-white/30 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}

function Card({
  title,
  backgroundType,
  bgColor,
  icon,
  text,
  gradientOverlay,
}: {
  title: string;
  backgroundType: string;
  bgColor: string;
  icon: React.ReactNode;
  text: string;
  gradientOverlay: string;
}) {
  const [isHovered, setIsHovered] = useState(false);

  const getBackgroundPattern = (type: string) => {
    switch (type) {
      case "geometric":
        return (
          <div className="absolute inset-0">
            <svg
              className="w-full h-full opacity-20"
              viewBox="0 0 400 300"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern
                  id="geometric"
                  x="0"
                  y="0"
                  width="40"
                  height="40"
                  patternUnits="userSpaceOnUse"
                >
                  <polygon
                    points="20,0 40,20 20,40 0,20"
                    fill="white"
                    fillOpacity="0.5"
                  />
                  <circle cx="20" cy="20" r="3" fill="white" fillOpacity="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#geometric)" />
              <path
                d="M0,150 Q200,100 400,150 T400,300 L0,300 Z"
                fill="white"
                fillOpacity="0.1"
              />
            </svg>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div
      className="group bg-white rounded-xl shadow-[0_10px_35px_rgba(0,0,0,0.06)] border border-slate-100 overflow-hidden flex flex-col transform transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] hover:scale-[1.02] lg:hover:scale-[1.02] md:hover:scale-[1.01] sm:hover:scale-[1.005] hover:-translate-y-2 lg:hover:-translate-y-2 md:hover:-translate-y-1 sm:hover:-translate-y-0.5"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Enhanced Top Section */}
      <div className="relative">
        {/* Dynamic Pattern Background */}
        <div
          className="h-64 lg:h-64 md:h-48 sm:h-40 transition-transform duration-700 group-hover:scale-110 lg:group-hover:scale-110 md:group-hover:scale-105 sm:group-hover:scale-102 relative overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${bgColor}aa, ${bgColor}cc, ${bgColor}dd)`,
          }}
        >
          {getBackgroundPattern(backgroundType)}
          {/* Enhanced overlays */}
          <div className="absolute inset-0 bg-black/20" />
          <div
            className={`absolute inset-0 bg-gradient-to-br ${gradientOverlay} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
          />

          {/* Shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

          {/* Title with enhanced effects */}
          <div className="absolute inset-0 flex items-center justify-center">
            <h3 className="text-white font-bold tracking-wider text-2xl lg:text-2xl md:text-xl sm:text-lg drop-shadow-lg transform transition-all duration-300 group-hover:scale-105 lg:group-hover:scale-105 md:group-hover:scale-103 sm:group-hover:scale-102 px-2 text-center">
              {title}
            </h3>
          </div>

          {/* Corner accent */}
          <div className="absolute top-4 lg:top-4 md:top-3 sm:top-2 right-4 lg:right-4 md:right-3 sm:right-2 w-2 h-2 lg:w-2 lg:h-2 md:w-1.5 md:h-1.5 sm:w-1 sm:h-1 bg-white/50 rounded-full animate-pulse"></div>
        </div>

        {/* Enhanced Hexagon */}
        <div className="absolute left-1/2 -bottom-14 lg:-bottom-14 md:-bottom-12 sm:-bottom-10 transform -translate-x-1/2 transition-transform duration-500 group-hover:rotate-12 lg:group-hover:rotate-12 md:group-hover:rotate-6 sm:group-hover:rotate-3">
          <div className="hex-outer lg:scale-100 md:scale-90 sm:scale-75">
            <div
              className="hex-inner flex items-center justify-center transition-all duration-300 group-hover:brightness-110"
              style={{
                background: `linear-gradient(135deg, ${bgColor}, ${bgColor}dd)`,
              }}
            >
              <div className="transform transition-transform duration-300 group-hover:scale-110 lg:group-hover:scale-110 md:group-hover:scale-105 sm:group-hover:scale-102">
                {icon}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Body Text */}
      <div className="pt-20 lg:pt-20 md:pt-16 sm:pt-14 pb-8 lg:pb-8 md:pb-6 sm:pb-4 px-8 lg:px-8 md:px-6 sm:px-4 text-center text-slate-500 leading-relaxed flex-1 relative">
        {/* Reading progress indicator */}
        <div className="absolute top-16 lg:top-16 md:top-12 sm:top-10 left-1/2 transform -translate-x-1/2 w-12 lg:w-12 md:w-10 sm:w-8 h-0.5 bg-slate-200 rounded-full overflow-hidden">
          <div
            className={`h-full bg-gradient-to-r from-slate-400 to-slate-600 rounded-full transition-all duration-1000 ${
              isHovered ? "w-full" : "w-0"
            }`}
          ></div>
        </div>

        <div className="transition-all duration-300 group-hover:text-slate-600 text-base lg:text-base md:text-sm sm:text-sm">
          {text}
        </div>

        {/* Hover accent line */}
        <div
          className={`mt-6 lg:mt-6 md:mt-4 sm:mt-3 mx-auto h-0.5 bg-gradient-to-r from-transparent via-slate-300 to-transparent transition-all duration-500 ${
            isHovered ? "w-16 lg:w-16 md:w-12 sm:w-8" : "w-0"
          }`}
        ></div>
      </div>
    </div>
  );
}

/* ✅ Icons updated with Next.js Image */
function MissionIcon() {
  return (
    <Image
      src="/belief/target.png"
      alt="Mission Icon"
      width={64}
      height={64}
      className="w-16 h-16 lg:w-16 lg:h-16 md:w-14 md:h-14 sm:w-12 sm:h-12 transition-transform duration-300 hover:rotate-6"
    />
  );
}

function VisionIcon() {
  return (
    <Image
      src="/belief/vision-icon.png"
      alt="Vision Icon"
      width={64}
      height={64}
      className="w-16 h-16 lg:w-16 lg:h-16 md:w-14 md:h-14 sm:w-12 sm:h-12 transition-transform duration-300 hover:scale-110"
    />
  );
}

function BeliefIcon() {
  return (
    <Image
      src="/belief/belief-icon.png"
      alt="Belief Icon"
      width={64}
      height={64}
      className="w-16 h-16 lg:w-16 lg:h-16 md:w-14 md:h-14 sm:w-12 sm:h-12 transition-transform duration-300 hover:rotate-12"
    />
  );
}










// "use client";
// import React, { useState } from "react";
// import Image from "next/image"; // ✅ Next.js Image import

// export default function MissionVisionValues() {
//   return (
//     <section className="bg-[#B94352] py-20 px-6 relative overflow-hidden">
//       {/* Enhanced Background Animation */}
//       <div className="absolute inset-0 opacity-10">
//         <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
//         <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/5 rounded-full translate-x-1/2 translate-y-1/2 animate-pulse delay-1000"></div>
//         <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-white/3 rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse delay-500"></div>
//         <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-white/2 rounded-full animate-pulse delay-2000"></div>
//         <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-white/4 rounded-full animate-pulse delay-1500"></div>
//       </div>

//       {/* Floating Particles */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-1/4 left-10 w-1 h-1 bg-white/30 rounded-full animate-float"></div>
//         <div className="absolute top-3/4 right-20 w-1 h-1 bg-white/30 rounded-full animate-float delay-1000"></div>
//         <div className="absolute top-1/2 left-1/3 w-1 h-1 bg-white/30 rounded-full animate-float delay-2000"></div>
//       </div>

//       {/* Header Section */}
//       <div className="relative z-10 max-w-6xl mx-auto text-center mb-16">
//         <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6 hover:bg-white/15 transition-all duration-300">
//           <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
//           <span className="text-sm font-medium text-white uppercase tracking-wider">
//             Our Foundation
//           </span>
//         </div>

//         <h2 className="text-4xl md:text-4xl font-bold font-zodiak text-white mb-6 leading-tight">
//           Mission, Vision &{" "}
//           <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-orange-200 animate-gradient-x">
//             Values
//           </span>
//         </h2>

//         <p className="text-md text-gray-200 max-w-2xl mx-auto leading-relaxed">
//           Discover the core principles that drive our passion, shape our vision,
//           and define our commitment to excellence in every endeavor.
//         </p>

//         <div className="mt-8 w-24 h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent mx-auto animate-pulse"></div>
//       </div>

//       {/* Enhanced Cards Grid */}
//       <div className="max-w-6xl mx-auto px-6 pb-16 pt-6 grid grid-cols-1 md:grid-cols-3 gap-8">
//         <Card
//           title="OUR MISSION"
//           backgroundType="geometric"
//           bgColor="#199ad6"
//           icon={<MissionIcon aria-hidden />}
//           text="Empower 1 billion people to complete their goals, build their influence, get the help they need, earn and grow their journey — by creating a credible network of problem-solvers, trendsetters, and purpose-driven brands."
//           gradientOverlay="from-blue-600/20 to-indigo-600/20"
//         />

//         <Card
//           title="OUR VISION"
//           backgroundType="geometric"  // ✅ Mission ke jaisa background
//           bgColor="#e94a4a"
//           icon={<VisionIcon aria-hidden />}
//           text="Our vision is to make the impossible feel achievable by simplifying complex challenges and unlocking human potential. We strive to create tools and experiences that empower individuals to take bold steps forward with clarity, confidence, and ease."
//           gradientOverlay="from-red-600/20 to-pink-600/20"
//         />

//         <Card
//           title="OUR BELIEF"
//           backgroundType="geometric"  // ✅ Mission ke jaisa background
//           bgColor="#f08a24"
//           icon={<BeliefIcon aria-hidden />}
//           text="We believe: People move society forward, not just platforms. Every big achievement once felt out of reach — until someone made it look easy. With the right people, tools, and trust, anyone can do something impossible. That's the kind of world we're building at FT."
//           gradientOverlay="from-orange-600/20 to-yellow-600/20"
//         />
//       </div>

//       {/* Enhanced Bottom Accent */}
//       <div className="relative z-10 mt-16 text-center">
//         <div className="inline-flex items-center gap-2 text-white/70 hover:text-white/90 transition-colors duration-300">
//           <div className="w-8 h-px bg-gradient-to-r from-transparent to-white/30 animate-pulse"></div>
//           <span className="text-sm font-medium">Building Tomorrow, Today</span>
//           <div className="w-8 h-px bg-gradient-to-l from-transparent to-white/30 animate-pulse"></div>
//         </div>
//       </div>
//     </section>
//   );
// }

// function Card({
//   title,
//   backgroundType,
//   bgColor,
//   icon,
//   text,
//   gradientOverlay,
// }: {
//   title: string;
//   backgroundType: string;
//   bgColor: string;
//   icon: React.ReactNode;
//   text: string;
//   gradientOverlay: string;
// }) {
//   const [isHovered, setIsHovered] = useState(false);

//   const getBackgroundPattern = (type: string) => {
//     switch (type) {
//       case "geometric":
//         return (
//           <div className="absolute inset-0">
//             <svg
//               className="w-full h-full opacity-20"
//               viewBox="0 0 400 300"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <defs>
//                 <pattern
//                   id="geometric"
//                   x="0"
//                   y="0"
//                   width="40"
//                   height="40"
//                   patternUnits="userSpaceOnUse"
//                 >
//                   <polygon
//                     points="20,0 40,20 20,40 0,20"
//                     fill="white"
//                     fillOpacity="0.5"
//                   />
//                   <circle cx="20" cy="20" r="3" fill="white" fillOpacity="0.5" />
//                 </pattern>
//               </defs>
//               <rect width="100%" height="100%" fill="url(#geometric)" />
//               <path
//                 d="M0,150 Q200,100 400,150 T400,300 L0,300 Z"
//                 fill="white"
//                 fillOpacity="0.1"
//               />
//             </svg>
//           </div>
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <div
//       className="group bg-white rounded-xl shadow-[0_10px_35px_rgba(0,0,0,0.06)] border border-slate-100 overflow-hidden flex flex-col transform transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] hover:scale-[1.02] hover:-translate-y-2"
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       {/* Enhanced Top Section */}
//       <div className="relative">
//         {/* Dynamic Pattern Background */}
//         <div
//           className="h-64 transition-transform duration-700 group-hover:scale-110 relative overflow-hidden"
//           style={{
//             background: `linear-gradient(135deg, ${bgColor}aa, ${bgColor}cc, ${bgColor}dd)`,
//           }}
//         >
//           {getBackgroundPattern(backgroundType)}
//           {/* Enhanced overlays */}
//           <div className="absolute inset-0 bg-black/20" />
//           <div
//             className={`absolute inset-0 bg-gradient-to-br ${gradientOverlay} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
//           />

//           {/* Shimmer effect */}
//           <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

//           {/* Title with enhanced effects */}
//           <div className="absolute inset-0 flex items-center justify-center">
//             <h3 className="text-white font-bold tracking-wider text-2xl drop-shadow-lg transform transition-all duration-300 group-hover:scale-105">
//               {title}
//             </h3>
//           </div>

//           {/* Corner accent */}
//           <div className="absolute top-4 right-4 w-2 h-2 bg-white/50 rounded-full animate-pulse"></div>
//         </div>

//         {/* Enhanced Hexagon */}
//         <div className="absolute left-1/2 -bottom-14 transform -translate-x-1/2 transition-transform duration-500 group-hover:rotate-12">
//           <div className="hex-outer">
//             <div
//               className="hex-inner flex items-center justify-center transition-all duration-300 group-hover:brightness-110"
//               style={{
//                 background: `linear-gradient(135deg, ${bgColor}, ${bgColor}dd)`,
//               }}
//             >
//               <div className="transform transition-transform duration-300 group-hover:scale-110">
//                 {icon}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Enhanced Body Text */}
//       <div className="pt-20 pb-8 px-8 text-center text-slate-500 leading-relaxed flex-1 relative">
//         {/* Reading progress indicator */}
//         <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-slate-200 rounded-full overflow-hidden">
//           <div
//             className={`h-full bg-gradient-to-r from-slate-400 to-slate-600 rounded-full transition-all duration-1000 ${
//               isHovered ? "w-full" : "w-0"
//             }`}
//           ></div>
//         </div>

//         <div className="transition-all duration-300 group-hover:text-slate-600">
//           {text}
//         </div>

//         {/* Hover accent line */}
//         <div
//           className={`mt-6 mx-auto h-0.5 bg-gradient-to-r from-transparent via-slate-300 to-transparent transition-all duration-500 ${
//             isHovered ? "w-16" : "w-0"
//           }`}
//         ></div>
//       </div>
//     </div>
//   );
// }

// /* ✅ Icons updated with Next.js Image */
// function MissionIcon() {
//   return (
//     <Image
//       src="/belief/target.png"
//       alt="Mission Icon"
//       width={64}
//       height={64}
//       className="w-16 h-16 transition-transform duration-300 hover:rotate-6"
//     />
//   );
// }

// function VisionIcon() {
//   return (
//     <Image
//       src="/belief/vision-icon.png"
//       alt="Vision Icon"
//       width={64}
//       height={64}
//       className="w-16 h-16 transition-transform duration-300 hover:scale-110"
//     />
//   );
// }

// function BeliefIcon() {
//   return (
//     <Image
//       src="/belief/belief-icon.png"
//       alt="Belief Icon"
//       width={64}
//       height={64}
//       className="w-16 h-16 transition-transform duration-300 hover:rotate-12"
//     />
//   );
// }









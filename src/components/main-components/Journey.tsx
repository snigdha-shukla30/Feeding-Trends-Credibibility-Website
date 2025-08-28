"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image"; // ✅ Next.js Image import

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const element = containerRef.current;
        const rect = element.getBoundingClientRect();
        const elementTop = rect.top;
        const elementHeight = rect.height;
        const viewportHeight = window.innerHeight;

        const progress = Math.max(
          0,
          Math.min(1, (viewportHeight - elementTop) / (elementHeight + viewportHeight))
        );
        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="w-full bg-[#F8CFCF] dark:bg-neutral-950 font-sans md:px-6"
      ref={containerRef}
    >
      <div className="relative max-w-6xl mx-auto pb-6">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-4 md:pt-8 md:gap-4"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-20 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-8 absolute left-3 md:left-3 w-8 rounded-full bg-white dark:bg-black flex items-center justify-center">
                <div className="h-3 w-3 rounded-full bg-[#992524] dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-1.5" />
              </div>
              <h3 className="hidden md:block text-lg md:pl-16 md:text-3xl font-bold text-[#7D4E57] dark:text-neutral-500">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-16 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-xl mb-3 text-left font-bold text-neutral-500 dark:text-neutral-500">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}

        {/* Timeline Line */}
        <div className="absolute md:left-7 left-7 top-0 w-[2px] h-full">
          <div className="w-[2px] h-full bg-gradient-to-b from-transparent via-neutral-200 dark:via-neutral-700 to-transparent" />
          <div
            className="absolute top-0 w-[2px] bg-gradient-to-t from-[#B22C2A] via-[#992524] to-transparent transition-all duration-500 ease-out"
            style={{
              height: `${Math.min(scrollProgress * 100, 100)}%`,
              opacity: scrollProgress > 0.1 ? 1 : 0,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default function Journey() {
  const data: TimelineEntry[] = [
    {
      title: "2018",
      content: (
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-4 md:p-6 border border-blue-100 dark:border-blue-800/30 mb-4">
          <div className="flex flex-col lg:flex-row gap-4 items-start">
            <div className="flex-1">
              <h4 className="text-xl font-zodiak font-bold text-blue-900 dark:text-blue-100 mb-2">
                The Beginning
              </h4>
              <p className="text-sm md:text-base font-medium font-general text-neutral-700 dark:text-neutral-300 leading-relaxed">
                3 friends found it difficult to connect with the right person
                on LinkedIn and decided to solve this problem. What started as
                a simple frustration became the foundation of something bigger.
              </p>
            </div>
            <div className="w-full lg:w-64 xl:w-72">
              <div className="aspect-[4/3] w-full rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 relative">
                <Image
                  src="/Journey/journey-1.jpg"
                  alt="Three friends starting their journey"
                  fill
                  className="object-cover object-center"
                  sizes="100vw"
                />
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2021",
      content: (
        <div className="bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20 rounded-xl p-4 md:p-6 border border-emerald-100 dark:border-emerald-800/30 mb-4">
          <div className="flex flex-col lg:flex-row gap-4 items-start">
            <div className="flex-1 lg:order-2">
              <h4 className="text-xl font-zodiak font-bold text-emerald-900 dark:text-emerald-100 mb-2">
                Launch Day Success
              </h4>
              <p className="text-sm md:text-base font-medium font-general text-neutral-700 dark:text-neutral-300 leading-relaxed mb-3">
                Feeding Trends launches — 10K users in the first month. The
                response was overwhelming and validated our vision.
              </p>
              <div className="flex items-center gap-4 text-sm text-emerald-700 dark:text-emerald-300">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <span>10K+ Users</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <span>First Month</span>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-56 lg:w-64 xl:w-72 lg:order-1">
              <div className="relative">
                <div className="aspect-[3/4] w-full rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 relative">
                  <Image
                    src="/Journey/journey-2.jpg"
                    alt="Feeding Trends launch celebration"
                    fill
                    className="object-contain object-center"
                    sizes="100vw"
                  />
                </div>
                <div className="absolute -bottom-3 -right-3 w-12 h-12 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                  10K
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-4 md:p-6 border border-purple-100 dark:border-purple-800/30 mb-4">
          <div className="flex flex-col lg:flex-row gap-4 items-start">
            <div className="flex-1">
              <h4 className="text-xl font-zodiak font-bold text-purple-900 dark:text-purple-100 mb-2">
                Viral Moment
              </h4>
              <p className="text-sm md:text-base font-medium font-general text-neutral-700 dark:text-neutral-300 leading-relaxed mb-3">
                We go viral on Medium — so much that they blocked us. Sometimes
                success comes with unexpected challenges.
              </p>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-purple-100 dark:bg-purple-900/50 rounded-full text-sm text-purple-700 dark:text-purple-300">
                <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></span>{" "}
                Viral Content
              </div>
            </div>
            <div className="w-full sm:w-56 lg:w-64 xl:w-72">
              <div className="relative">
                <div className="aspect-[3/4] w-full rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 relative">
                  <Image
                    src="/Journey/journey-3.jpg"
                    alt="Going viral on Medium"
                    fill
                    className="object-contain object-center"
                    sizes="100vw"
                  />
                </div>
                <div className="absolute -top-3 -right-3 px-2 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold rounded-full shadow-lg animate-pulse">
                  VIRAL
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-xl p-4 md:p-6 border border-orange-100 dark:border-orange-800/30 mb-4">
          <div className="flex flex-col lg:flex-row gap-4 items-start">
            <div className="flex-1 lg:order-2">
              <h4 className="text-xl font-zodiak font-bold text-orange-900 dark:text-orange-100 mb-2">
                Global Milestone
              </h4>
              <p className="text-sm md:text-base font-medium font-general text-neutral-700 dark:text-neutral-300 leading-relaxed mb-3">
                Hit 50K global users. Creators begin earning through the
                platform, transforming from just a tool to a thriving ecosystem.
              </p>
              <div className="flex flex-wrap gap-2">
                <div className="flex items-center gap-2 px-3 py-1 bg-orange-100 dark:bg-orange-900/50 rounded-full text-sm text-orange-700 dark:text-orange-300">
                  <span>50K+ Users</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 bg-orange-100 dark:bg-orange-900/50 rounded-full text-sm text-orange-700 dark:text-orange-300">
                  <span>Creator Economy</span>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-64 xl:w-72 lg:order-1">
              <div className="aspect-[4/3] w-full rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 relative">
                <Image
                  src="/Journey/journey-4.jpg"
                  alt="50K global users milestone"
                  fill
                  className="object-cover object-center"
                  sizes="100vw"
                />
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div className="bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 rounded-xl p-4 md:p-6 border border-cyan-100 dark:border-cyan-800/30 mb-4">
          <div className="flex flex-col lg:flex-row gap-4 items-start">
            <div className="flex-1">
              <h4 className="text-xl font-zodiak font-bold text-cyan-900 dark:text-cyan-100 mb-2">
                AI Revolution
              </h4>
              <p className="text-sm md:text-base font-medium font-general text-neutral-700 dark:text-neutral-300 leading-relaxed mb-3">
                Introduced AI-powered content matching. Technology meets human
                connection in ways we never imagined possible.
              </p>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-cyan-100 dark:bg-cyan-900/50 rounded-full text-sm text-cyan-700 dark:text-cyan-300">
                <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></div>{" "}
                <span>AI-Powered</span>
              </div>
            </div>
            <div className="w-full lg:w-64 xl:w-72">
              <div className="aspect-[4/3] w-full rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 relative">
                <Image
                  src="/Journey/journey-5.jpg"
                  alt="AI-powered content matching"
                  fill
                  className="object-cover object-center"
                  sizes="100vw"
                />
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2025 & Beyond",
      content: (
        <div className="bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20 rounded-xl p-4 md:p-6 border border-violet-100 dark:border-violet-800/30 mb-4">
          <div className="flex flex-col lg:flex-row gap-4 items-start">
            <div className="flex-1 lg:order-2">
              <h4 className="text-xl font-zodiak font-bold text-violet-900 dark:text-violet-100 mb-2">
                The Future Vision
              </h4>
              <p className="text-sm md:text-base font-medium font-general text-neutral-700 dark:text-neutral-300 leading-relaxed mb-3">
                {`Building India's first community-led "credibility network".
                Where trust isn't just a feature—it's the foundation.`}
              </p>
              <div className="flex flex-wrap gap-2">
                <div className="flex items-center gap-2 px-3 py-1 bg-violet-100 dark:bg-violet-900/50 rounded-full text-sm text-violet-700 dark:text-violet-300">
                  🇮🇳 India First
                </div>
                <div className="flex items-center gap-2 px-3 py-1 bg-violet-100 dark:bg-violet-900/50 rounded-full text-sm text-violet-700 dark:text-violet-300">
                  🤝 Credibility Network
                </div>
              </div>
            </div>
            <div className="w-full sm:w-64 lg:w-72 xl:w-80 lg:order-1">
              <div className="relative">
                <div className="aspect-[16/10] w-full rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-br from-violet-100 to-purple-100 dark:from-violet-900/50 dark:to-purple-900/50 relative">
                  <Image
                    src="/Journey/journey-6.webp"
                    alt="Future vision of credibility network"
                    fill
                    className="object-cover object-center"
                    sizes="100vw"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-gradient-to-br from-violet-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xs shadow-lg">
                  <div className="text-center">
                    <div>2025</div>
                    <div className="text-xs">+</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="relative w-full overflow-clip bg-[#F8CFCF] dark:bg-neutral-950 py-4 pt-15 pb-0">
      <h2 className="text-3xl md:text-4xl font-zodiak font-700 text-center text-[#550000] mb-4">
        How We Got Here - <span className="text-[#E53935]">Our Journey</span>?
      </h2>
      <p className="text-base font-medium text-[#6B4C4C] font-general text-center max-w-2xl mx-auto mb-8">
        Every movement starts with a moment.
        <br />
        Ours started when three friends asked: <br />
        <strong>
          <em>
            {`"What if people could connect not just to consume, but to create
            momentum ?"`}
          </em>
        </strong>
      </p>

      <Timeline data={data} />
    </div>
  );
}








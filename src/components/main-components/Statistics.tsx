"use client";

import {
  Award,
  Star,
  TrendingUp,
  Users,
  Eye,
  MousePointer,
  DollarSign,
  FileText,
} from "lucide-react";
import { useState, useEffect, useRef, useCallback } from "react";

// 🔹 Props type for AnimatedCounter
interface AnimatedCounterProps {
  targetValue: number;
  duration?: number;
  suffix?: string;
}

// Animated Counter Component
const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  targetValue,
  duration = 2000,
  suffix = "",
}) => {
  const [displayValue, setDisplayValue] = useState<number>(0);
  const [hasAnimated, setHasAnimated] = useState<boolean>(false);
  const elementRef = useRef<HTMLSpanElement | null>(null);

  const formatNumber = (value: number): string => {
    if (value >= 1_000_000_000) {
      return (
        (value / 1_000_000_000).toFixed(1).replace(/\.0$/, "") + "B"
      );
    }
    if (value >= 1_000_000) {
      return (value / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
    }
    if (value >= 1000) {
      return (value / 1000).toFixed(1).replace(/\.0$/, "") + "K";
    }
    return value.toString();
  };

  // ✅ useCallback se eslint dependency issue fix
  const startAnimation = useCallback(() => {
    if (hasAnimated) return;

    setHasAnimated(true);
    setDisplayValue(0);

    const startTime = Date.now();
    const startValue = 0;

    const animate = () => {
      const currentTime = Date.now();
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth animation
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      const currentValue = Math.floor(
        startValue + (targetValue - startValue) * easeOutCubic
      );

      setDisplayValue(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [hasAnimated, targetValue, duration]);

  useEffect(() => {
    const node = elementRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startAnimation();
          } else {
            // Reset animation when out of view
            setHasAnimated(false);
            setDisplayValue(0);
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    observer.observe(node);

    return () => {
      observer.unobserve(node);
    };
  }, [startAnimation]);

  return (
    <span ref={elementRef} className="text-2xl md:text-3xl font-extrabold">
      {formatNumber(displayValue)}
      {suffix}
    </span>
  );
};

export default function Statistics() {
  return (
    <section className="w-full bg-[#FBE4E4] py-16">
      <div className="py-0">
        <h2 className="text-3xl md:text-4xl text-center font-zodiak mt-0 bg-[#FBE4E4] font-700 text-[#550000] mb-8">
          What We&apos;ve Built So Far :
        </h2>
      </div>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-8 lg:gap-12">
          {/* 🔹 Left - Stats Grid */}
          <div className="order-2 lg:order-1 grid grid-cols-2 bg-white border border-gray-200 rounded-xl overflow-hidden w-full max-w-[400px] shadow-[0_8px_16px_rgba(180,100,100,0.15)] transition-shadow hover:shadow-[0_12px_20px_rgba(180,100,100,0.2)] mx-auto">
            {/* Traffic */}
            <div className="border-r border-b border-gray-200 group hover:bg-gradient-to-br hover:from-green-50 hover:to-green-100 transition-all duration-300">
              <div className="p-6 md:p-8 text-center">
                <div className="mb-3 flex justify-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                    <TrendingUp className="w-6 h-6 text-green-600" />
                  </div>
                </div>
                <div className="text-green-500 mb-2">
                  <AnimatedCounter targetValue={12000000} suffix="+" />
                </div>
                <p className="text-gray-800 font-semibold text-sm md:text-base">
                  Traffic
                </p>
              </div>
            </div>

            {/* Trendsetter */}
            <div className="border-b border-gray-200 group hover:bg-gradient-to-br hover:from-blue-50 hover:to-blue-100 transition-all duration-300">
              <div className="p-6 md:p-8 text-center">
                <div className="mb-3 flex justify-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                <div className="text-blue-600 mb-2">
                  <AnimatedCounter targetValue={100000} suffix="+" />
                </div>
                <p className="text-gray-800 font-semibold text-sm md:text-base">
                  Trendsetter verified
                </p>
              </div>
            </div>

            {/* Reached */}
            <div className="border-r border-b border-gray-200 group hover:bg-gradient-to-br hover:from-gray-50 hover:to-gray-100 transition-all duration-300">
              <div className="p-6 md:p-8 text-center">
                <div className="mb-3 flex justify-center">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                    <Eye className="w-6 h-6 text-gray-700" />
                  </div>
                </div>
                <div className="text-gray-900 mb-2">
                  <AnimatedCounter targetValue={50000000} suffix="+" />
                </div>
                <p className="text-gray-800 font-semibold text-sm md:text-base">
                  Reached Till now
                </p>
              </div>
            </div>

            {/* Ads Served */}
            <div className="border-b border-gray-200 group hover:bg-gradient-to-br hover:from-yellow-50 hover:to-yellow-100 transition-all duration-300">
              <div className="p-6 md:p-8 text-center">
                <div className="mb-3 flex justify-center">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                    <MousePointer className="w-6 h-6 text-yellow-600" />
                  </div>
                </div>
                <div className="text-yellow-500 mb-2">
                  <AnimatedCounter targetValue={500000000} suffix="+" />
                </div>
                <p className="text-gray-800 font-semibold text-sm md:text-base">
                  Ads Served
                </p>
              </div>
            </div>

            {/* Earnings */}
            <div className="border-r border-gray-200 group hover:bg-gradient-to-br hover:from-rose-50 hover:to-rose-100 transition-all duration-300">
              <div className="p-6 md:p-8 text-center">
                <div className="mb-3 flex justify-center">
                  <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                    <DollarSign className="w-6 h-6 text-rose-600" />
                  </div>
                </div>
                <div className="text-rose-500 mb-2">
                  <AnimatedCounter targetValue={100000} suffix="+" />
                </div>
                <p className="text-gray-800 font-semibold text-sm md:text-base">
                  Earning by student creators
                </p>
              </div>
            </div>

            {/* Content Created */}
            <div className="group hover:bg-gradient-to-br hover:from-indigo-50 hover:to-indigo-100 transition-all duration-300">
              <div className="p-6 md:p-8 text-center">
                <div className="mb-3 flex justify-center">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                    <FileText className="w-6 h-6 text-indigo-600" />
                  </div>
                </div>
                <div className="text-indigo-600 mb-2">
                  <AnimatedCounter targetValue={1000000} suffix="+" />
                </div>
                <p className="text-gray-800 font-semibold text-sm md:text-base">
                  Content Created
                </p>
              </div>
            </div>
          </div>

          {/* 🔸 Right - Our Story */}
          <div className="order-1 lg:order-2">
            <p className="text-[#4B2E2E] font-semibold mb-3 mt-8 text-xs uppercase tracking-wide">
              Our Story
            </p>
            <h2 className="text-2xl md:text-3xl font-zodiak font-bold mb-4 leading-tight text-[#550000]">
              From Passion to Progress — <br />
              All in the Numbers
            </h2>
            <p className="text-[#6B4C4C] mb-6 font-general font-medium text-base leading-relaxed">
              Behind Every Stat Lies the Start of Something Bigger.
              A Vision That Moves, a Team That Builds,
              And a Future That&apos;s Already in Motion.
            </p>

            {/* 🏆 Awards */}
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-2 hover:scale-105 transition-transform duration-300">
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                  <Star className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">
                     Chunauti 3.0
                  </div>
                  <div className="text-xs text-gray-500">User Reviews</div>
                </div>
              </div>

              <div className="flex items-center gap-2 hover:scale-105 transition-transform duration-300">
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                  <Award className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">
                    OCTANE OCP 3.0
                  </div>
                  <div className="text-xs text-gray-500">FinancesOnline</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



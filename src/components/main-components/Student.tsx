"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface Student {
  name: string;
  college: string;
  statement: string;
  photo: string;
}

const students: Student[] = [
  {
    name: "Priya Mehta",
    college: "IIT Delhi",
    statement: "This program boosted my confidence and skills! The mentorship was exceptional.",
    photo: "/student1/std1.jpg",
  },
  {
    name: "Sneha Kapoor",
    college: "DU, Delhi",
    statement: "The best learning experience I ever had. It transformed my career perspective.",
    photo: "/student1/std2.avif",
  },
  {
    name: "Amit Sharma",
    college: "BITS Pilani",
    statement: "Great mentors and supportive peers. The community is amazing and inspiring.",
    photo: "/student1/std3.jpg",
  },
  {
    name: "Rahul Verma",
    college: "NIT Trichy",
    statement: "This journey shaped my career path positively. Highly recommend to everyone.",
    photo: "/student1/std4.jpg",
  },
  {
    name: "Arjun Singh",
    college: "IIM Bangalore",
    statement: "A perfect mix of knowledge and fun! The practical approach made all the difference.",
    photo: "/student1/std5.jpeg",
  },
];

export default function StudentSlider() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % students.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + students.length) % students.length);
  };

  // Auto-play functionality
  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full bg-[#FBE4E4] py-8">
      <div className="w-full max-w-5xl mx-auto bg-[#FBE4E4] px-4">
        {/* Header Section */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/20 dark:to-purple-900/20 px-3 py-1.5 rounded-full mb-3">
            <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-pulse"></div>
            <span className="text-xs font-medium font-zodiak text-indigo-700 dark:text-indigo-300">
              Success Stories
            </span>
          </div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold font-zodiak text-[#550000] mb-3">
            600+ Students helped with Training
          </h1>
          <p className="text-base text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
            Real experiences from students who transformed their careers with us
          </p>
        </div>

        {/* Main Testimonial Card */}
        <div className="relative mb-6">
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 overflow-hidden">
            <div className="relative p-6 md:p-8">
              {/* Background Decoration */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-indigo-50 via-purple-50 to-transparent dark:from-indigo-900/10 dark:via-purple-900/10 rounded-full -translate-y-32 translate-x-32"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-blue-50 via-cyan-50 to-transparent dark:from-blue-900/10 dark:via-cyan-900/10 rounded-full translate-y-24 -translate-x-24"></div>

              <div className="relative z-10">
                {/* Quote Icon - moved inside */}
                <div className="flex justify-center mb-4 lg:hidden">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                </div>

                {/* Main Content - Side by Side Layout */}
                <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8">
                  {/* Student Image - Using Next.js Image */}
                  <div className="relative group flex-shrink-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                    <div className="relative w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48">
                      <Image
                        src={students[current].photo}
                        alt={students[current].name}
                        fill
                        className="object-cover rounded-2xl shadow-xl border-3 border-white dark:border-gray-800 transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    {/* Status Indicator */}
                    <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-green-500 border-3 border-white dark:border-gray-800 rounded-full flex items-center justify-center shadow-lg">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    {/* Decorative elements */}
                    <div className="absolute -top-2 -left-2 w-6 h-6 bg-indigo-400 rounded-full opacity-60"></div>
                    <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-purple-400 rounded-full opacity-60"></div>
                  </div>

                  {/* Content Section */}
                  <div className="flex-1 text-center lg:text-left space-y-4">
                    {/* Quote Icon */}
                    <div className="flex justify-center lg:justify-start mb-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center shadow-lg">
                        <svg
                          className="w-5 h-5 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                      </div>
                    </div>

                    {/* Testimonial Text */}
                    <blockquote className="text-base md:text-lg lg:text-xl font-medium text-gray-800 dark:text-gray-200 leading-relaxed mb-4">
                      {students[current].statement}
                    </blockquote>

                    {/* Student Info */}
                    <div className="space-y-2">
                      <h3 className="text-xl md:text-2xl lg:text-2xl font-bold text-gray-900 dark:text-white">
                        {students[current].name}
                      </h3>
                      <div className="flex items-center justify-center lg:justify-start gap-2">
                        <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                        <p className="text-base md:text-lg text-indigo-600 dark:text-indigo-400 font-semibold">
                          {students[current].college}
                        </p>
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      </div>

                      {/* Star Rating */}
                      <div className="flex justify-center lg:justify-start gap-1 pt-1">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-4 h-4 text-yellow-400 fill-current"
                            viewBox="0 0 20 20"
                          >
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-center gap-6 mb-3">
          {/* Previous Button */}
          <button
            onClick={prevSlide}
            className="group relative w-12 h-12 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:scale-110 transition-all duration-300 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            <svg
              className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-indigo-500 transition-colors absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex gap-2">
            {students.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === current
                    ? "w-8 h-3 bg-gradient-to-r from-indigo-500 to-purple-500 shadow-lg"
                    : "w-3 h-3 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500 hover:scale-110"
                }`}
              ></button>
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="group relative w-12 h-12 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:scale-110 transition-all duration-300 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            <svg
              className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-indigo-500 transition-colors absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Student Counter */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-800 px-3 py-1.5 rounded-full">
            <span className="text-xs font-medium text-gray-600 dark:text-gray-400">
              {current + 1} of {students.length}
            </span>
            <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}









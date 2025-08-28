"use client";
import Image from "next/image";
import { Linkedin, Twitter, Mail } from "lucide-react";
import { useState, useEffect } from "react";

const cards = [
  {
    imageUrl: "/Team/fahad-sir.webp",
    title: "Mohd. Fahad",
    description: "Chief Digital Officer.",
    linkUrl: "https://www.linkedin.com/in/fahad61814/", 
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/fahad61814/",
      twitter: "https://twitter.com/fahad",
      mail: "fahad@example.com",
    },
  },
  {
    imageUrl: "/Team/yash-sir.webp",
    title: "Yash Srivastava",
    description: "Founder & CEO",
    linkUrl: "https://www.linkedin.com/in/itsmeyashsrivastava/",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/itsmeyashsrivastava/",
      twitter: "https://twitter.com/yash",
      mail: "yash@example.com",
    },
  },
  {
    imageUrl: "/Team/shekhar-sir.webp",
    title: "Shekhar Gupta",
    description: "Chief Technology Officer",
    linkUrl: "https://www.linkedin.com/in/shekhargupta677/",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/shekhargupta677/",
      twitter: "https://twitter.com/shekhar",
      mail: "shekhar@example.com",
    },
  },
];

type CardProps = {
  imageUrl: string;
  title: string;
  description: string;
  linkUrl?: string;
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    mail?: string;
  };
};

function TeamCard({
  imageUrl,
  title,
  description,
  linkUrl = "#",
  socialLinks = {}
}: CardProps) {
  return (
    <div className="w-full max-w-sm mx-auto rounded-xl overflow-hidden shadow-md border border-neutral-200 transition hover:shadow-lg">
      {/* Compact Image Section */}
      <div className="relative w-full h-48">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover object-[center_10%] rounded-t-xl"
          sizes="(max-width: 768px) 100vw, 320px"
          priority
        />
      </div>

      {/* Compact Text Content */}
      <div className="bg-white p-4">
        <a href={linkUrl} target="_blank" rel="noopener noreferrer">
          <h2 className="text-xl font-gamberino font-semibold text-black-600 hover:underline transition">
            {title}
          </h2>
        </a>
        <p className="text-sm font-medium text-gray-600 mt-2 leading-relaxed">
          {description}
        </p>

        {/* Compact Social Icons */}
        <div className="mt-4 flex gap-3 justify-center bg-white pt-3 border-t border-gray-200">
          {socialLinks.linkedin && (
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="group relative p-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-0.5"
            >
              <Linkedin size={16} />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          )}
          {socialLinks.twitter && (
            <a
              href={socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="group relative p-2 rounded-full bg-gradient-to-r from-sky-400 to-sky-500 text-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-0.5"
            >
              <Twitter size={16} />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-sky-500 to-sky-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          )}
          {socialLinks.mail && (
            <a
              href={`mailto:${socialLinks.mail}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Mail"
              className="group relative p-2 rounded-full bg-gradient-to-r from-red-500 to-red-600 text-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-0.5"
            >
              <Mail size={16} />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-red-600 to-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export function Team() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id = "team" className="relative w-full bg-[#FBE4E4] py-12">
      {/* Animated Background - Reduced size and opacity */}
      <div className="absolute top-16 left-8 w-20 h-20 bg-gradient-to-br from-rose-200/20 to-pink-300/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-16 right-8 w-24 h-24 bg-gradient-to-br from-purple-200/20 to-blue-300/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-br from-yellow-200/15 to-orange-300/15 rounded-full blur-3xl animate-pulse delay-500"></div>
      
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:30px_30px] opacity-20"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Compact Heading Section */}
        <div className={`transform transition-all duration-1000 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-block relative mb-3">
            <h2 className="text-3xl font-zodiak font-700 text-[#550000] mb-2">
               Meet Our Team
           </h2>
          </div>

          <p className="text-[#6B4C4C] font-medium font-general max-w-xl mx-auto mb-8 text-base">
           The people behind Feeding Trends — passionate, creative, and driven by impact.
         </p>
        </div>

        {/* Compact Cards Grid with better spacing */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className={`transform transition-all duration-700 ease-out ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-20 opacity-0'
              }`}
              style={{ 
                transitionDelay: `${idx * 200}ms` 
              }}
            >
              <TeamCard {...card} />
            </div>
          ))}
        </div>

      </div>

      {/* Reduced sparkle animations */}
      <div className="absolute top-1/4 left-1/4 w-1.5 h-1.5 bg-yellow-400 rounded-full animate-ping opacity-40"></div>
      <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-pink-400 rounded-full animate-ping opacity-30 delay-1000"></div>
      <div className="absolute bottom-1/4 left-3/4 w-1 h-1 bg-purple-400 rounded-full animate-ping opacity-35 delay-500"></div>
    </section>
  );
}


"use client";

import Image from "next/image";
import { Linkedin, Twitter, Mail } from "lucide-react";

type CardDemoProps = {
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

export function CardDemo({
  imageUrl,
  title,
  description,
  linkUrl = "#",
  socialLinks = {}
}: CardDemoProps) {
  return (
    <div className="w-full max-w-xs mx-auto rounded-xl overflow-hidden shadow-md border border-neutral-200  transition hover:shadow-lg">
      {/* Image Section */}
      <div className="relative w-full h-64 sm:h-48 md:h-64">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover object-[center_10%] rounded-t-xl"
          sizes="(max-width: 768px) 100vw, 400px"
          priority
        />
      </div>

      {/* Text Content */}
      <div className=" bg-white p-4">
        <a href={linkUrl} target="_blank" rel="noopener noreferrer">
          <h2 className="text-3xl font-gamberino font-semibold text-black-600 hover:underline transition">
            {title}
          </h2>
        </a>
        <p className="text-md font-medium text-gray-600 mt-2 leading-relaxed">
          {description}
        </p>

        {/* Creative Social Icons */}
        <div className="mt-6 flex gap-4 justify-center bg-white pt-4 border-t border-gray-200">
          {socialLinks.linkedin && (
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="group relative p-3 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:-translate-y-1"
            >
              <Linkedin size={18} />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          )}
          {socialLinks.twitter && (
            <a
              href={socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="group relative p-3 rounded-full bg-gradient-to-r from-sky-400 to-sky-500 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:-translate-y-1"
            >
              <Twitter size={18} />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-sky-500 to-sky-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          )}
          {socialLinks.mail && (
            <a
              href={`mailto:${socialLinks.mail}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Mail"
              className="group relative p-3 rounded-full bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:-translate-y-1"
            >
              <Mail size={18} />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-red-600 to-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

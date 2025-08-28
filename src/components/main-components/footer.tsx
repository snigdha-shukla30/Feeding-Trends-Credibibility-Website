"use client";

import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

export function Footer() {
  return (
    <footer id= "contact" className="w-full bg-[#F7CFCF] dark:bg-neutral-900 border-t border-gray-200 dark:border-neutral-700 py-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand & tagline */}
        <div>
          <div className="text-2xl font-extrabold text-[#D61F26] dark:text-white tracking-tight">
            Feeding Trends
          </div>
          <p className="text-sm mt-2 text-gray-600 dark:text-gray-400 max-w-xs">
            Inspiring Stories. Trending Ideas. Your voice matters.
          </p>
        </div>

        {/* Footer Links */}
        <div className="flex flex-col gap-2 text-sm text-gray-600 dark:text-gray-300">
          <h3 className="font-semibold mb-2 text-[#C15656]">Quick Links</h3>
          <a href="/about" className="hover:text-[#D61F26] transition">About</a>
          <a href="/contact" className="hover:text-[#D61F26] transition">Contact</a>
          <a href="/privacy" className="hover:text-[#D61F26] transition">Privacy Policy</a>
          <a href="/terms" className="hover:text-[#D61F26] transition">Terms of Service</a>
        </div>

        {/* Social Icons and Email */}
        <div className="flex flex-col gap-4">
          <h3 className="font-semibold text-sm text-[#C15656]">Connect With Us</h3>
          <div className="flex gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener"
              aria-label="Instagram"
              className="text-gray-500 hover:text-[#E1306C] transition"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener"
              aria-label="Twitter"
              className="text-gray-500 hover:text-[#1DA1F2] transition"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener"
              aria-label="LinkedIn"
              className="text-gray-500 hover:text-[#0077B5] transition"
            >
              <FaLinkedin size={20} />
            </a>
          </div>
          <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            hello@feedingtrends.com
          </span>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 text-center text-xs text-gray-500 dark:text-gray-500">
        &copy; {new Date().getFullYear()} <span className="font-medium text-[#C15656]">Feeding Trends</span>. All rights reserved.
      </div>
    </footer>
  );
}
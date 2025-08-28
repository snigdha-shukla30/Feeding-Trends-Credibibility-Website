"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/Button" // Corrected import path for Button

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const navItems = [
    { name: "About", href: "#about" },
    { name: "Team", href: "#team" },
    { name: "Awards", href: "#Awards" },
    { name: "Success Stories", href: "#case-studies" },
    { name: "Media", href: "#media" },
    { name: "Clients", href: "#clients" },
    { name: "Contact", href: "#contact" },
  ]
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  const handleNavClick = (href: string) => {
    setIsMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      const headerHeight = 64 // Adjusted header height for scroll offset
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({
        top: elementPosition - headerHeight,
        behavior: "smooth",
      })
    }
  }
  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out ${
          scrolled ? "bg-white/95 backdrop-blur-lg shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            {" "}
            {/* Adjusted height here */}
            {/* Logo with Fallback */}
            <motion.div
              className="flex-shrink-0 flex items-center"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <h1 className="text-xl sm:text-1xl text-[#D61F26] md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-[#CD5656] to-[#AF3E3E] bg-clip-text ">
                Feeding Trends
              </h1>
            </motion.div>
            {/* Desktop Navigation */}
            <nav className="hidden lg:block">
              <div className="flex items-center space-x-1">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`px-4 py-2 rounded-lg text-base md:text-lg font-medium transition-all duration-700 ease-in-out hover:bg-white/20 relative group ${
                      scrolled ? "text-gray-700 hover:text-[#AF3E3E]" : "text-white hover:text-[#EAEBD0]"
                    }`}
                  >
                    {item.name}
                    <span
                      className={`absolute bottom-0 left-1/2 w-0 h-0.5 transition-all duration-300 group-hover:w-full group-hover:left-0 ${
                        scrolled ? "bg-[#AF3E3E]" : "bg-white"
                      }`}
                    ></span>
                  </motion.button>
                ))}
              </div>
            </nav>
            {/* Mobile menu button */}
            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="sm"
                className={`p-2 hover:bg-white/20 rounded-lg transition-all duration-700 ease-in-out ${
                  scrolled ? " font-zodiak text-gray-700" : "text-white"
                }`}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <AnimatePresence mode="wait">
                  {isMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="h-6 w-6" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="h-6 w-6" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </Button>
            </div>
          </div>
        </div>
      </motion.header>
      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsMenuOpen(false)}
            />
            {/* Mobile Menu */}
            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white/95 backdrop-blur-lg shadow-2xl z-50 lg:hidden"
            >
              <div className="flex flex-col h-full">
                {/* Mobile Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200/50">
                  <div className="flex items-center space-x-3">
                    <span className="text-xl md:text-2xl font-bold text-[#AF3E3E]">Feeding Trends</span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 hover:bg-gray-100 rounded-lg"
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>
                {/* Navigation Items */}
                <div className="flex-1 overflow-y-auto py-6">
                  <div className="space-y-2 px-6">
                    {navItems.map((item, index) => (
                      <motion.button
                        key={item.name}
                        onClick={() => handleNavClick(item.href)}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="w-full text-left px-4 py-4 text-lg font-medium text-gray-700 hover:text-[#AF3E3E] hover:bg-[#EAEBD0]/20 rounded-xl transition-all duration-300 flex items-center justify-between group"
                      >
                        <span>{item.name}</span>
                        <ChevronDown className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </motion.button>
                    ))}
                  </div>
                </div>
                {/* Mobile Footer */}
                <div className="p-6 border-t border-gray-200/50">
                  <div className="text-center">
                    <p className="text-sm text-gray-500 mb-3">Get in touch</p>
                    <Button
                      className="w-full bg-gradient-to-r from-[#CD5656] to-[#AF3E3E] text-white hover:from-[#AF3E3E] hover:to-[#CD5656] transition-all duration-300"
                      onClick={() => handleNavClick("#contact")}
                    >
                      Contact Us
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

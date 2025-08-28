
"use client";

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

interface Brand {
  name: string;
  logo: string;
  color: string;
}

interface Movie {
  name: string;
  subtitle?: string;
  poster: string;
  color: string;
}

interface Influencer {
  name: string;
  username: string;
  avatar: string;
  followers: string;
  category: string;
  verified: boolean;
}

const WhoTrustsUs: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isPausedEvents, setIsPausedEvents] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const eventsScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);



  // Auto scroll effect for events
  useEffect(() => {
    const scrollContainer = eventsScrollRef.current;
    if (!scrollContainer || isPausedEvents) return;

    const scroll = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += 1;
      }
    };

    const interval = setInterval(scroll, 30);
    return () => clearInterval(interval);
  }, [isPausedEvents]);

  const brands: Brand[] = [
    { name: "Royal Enfield", logo: "/work/brands/RE1.png", color: "bg-red-500" },
    { name: "Pulsar", logo: "/work/brands/pulsor.png", color: "bg-blue-600" },
    { name: "BellaVita", logo: "/work/brands/bellavita.webp", color: "bg-green-600" },
    { name: "Coca Cola", logo: "/work/brands/RE1.png", color: "bg-red-600" },
    { name: "Nike", logo: "/work/brands/pulsor.png", color: "bg-black" },
    { name: "Adidas", logo: "/work/brands/bellavita.webp", color: "bg-black" },
    { name: "Samsung", logo: "/work/brands/pulsor.png", color: "bg-blue-700" },
    { name: "Apple", logo: "/work/brands/RE1.png", color: "bg-gray-800" },
    { name: "McDonald's", logo: "/work/brands/pulsor.png", color: "bg-yellow-500" },
    { name: "Google", logo: "/work/brands/bellavita.webp", color: "bg-blue-500" }
  ];

  const movies: Movie[] = [
    { name: "Phillauri", subtitle: "Din Sagna Da Song", poster: "/work/movies/Phillauri.jpg", color: "bg-yellow-400" },
    { name: "Gulabo Sitabo", poster: "/work/movies//GulaboSitabo.jpg", color: "bg-amber-500" },
    { name: "Great Indian Escape", poster: "/work/movies//GreatIndianEscape.jpg", color: "bg-orange-600" },
    { name: "Blind Day", subtitle: "Short Film", poster: "/work/movies//BlindDay.webp", color: "bg-amber-800" }
  ];

  const events = [
    { title: "Corporate Events", image: "/work/events/corporate-event.jpg" },
    { title: "Music Concerts", image: "/work/events/concert.jpg" },
    { title: "Brand Activations", image: "/work/events/sale.jpg" },
    { title: "Festivals", image: "/work/events/festival.jpg" },
    { title: "Party", image: "/work/events/day-party.jpg" },
    { title: "Product Launches", image: "/work/events/corporate-event.jpg" },
    { title: "Award Shows", image: "/work/events/festival.jpg" },
    { title: "Fashion Shows", image: "/work/events/sale.jpg" },
    { title: "Trade Shows", image: "/work/events/trade-show.jpg" },
    { title: "Weddings", image: "/work/events/concert.jpg" },
  ];

  const influencers: Influencer[] = [
    {
      name: "Arjun Kapoor",
      username: "@arjunkapoor",
      avatar: "/work/influencer/arjun.jpg",
      followers: "4.2M",
      category: "Actor & Creator",
      verified: true
    },
    {
      name: "Masoom Minawala",
      username: "@masoomminawala",
      avatar: "/work/influencer/masoom.webp",
      followers: "1.8M",
      category: "Fashion Influencer",
      verified: true
    },
    {
      name: "Ranveer Allahbadia",
      username: "@beerbiceps",
      avatar: "/work/influencer/ranveer.webp",
      followers: "3.5M",
      category: "Entrepreneur",
      verified: true
    },
    {
      name: "Sejal Kumar",
      username: "@sejalkumar",
      avatar: "/work/influencer/sejal.webp",
      followers: "2.1M",
      category: "Lifestyle Creator",
      verified: true
    },
    {
      name: "Gaurav Taneja",
      username: "@flyingbeast320",
      avatar: "/work/influencer/gaurav.webp",
      followers: "5.2M",
      category: "Fitness & Aviation",
      verified: true
    },
    {
      name: "Komal Pandey",
      username: "@komalpandeyofficial",
      avatar: "/work/influencer/komal.webp",
      followers: "1.9M",
      category: "Fashion & Style",
      verified: true
    }
  ];

  return (
    <section ref={sectionRef} className="min-h-screen bg-[#F8CFCF] py-16 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-pink-400/20 to-purple-500/20 rounded-full blur-3xl transition-all duration-1000 ${isVisible ? 'animate-pulse opacity-100' : 'opacity-0'}`}></div>
        <div className={`absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-blue-400/20 to-cyan-500/20 rounded-full blur-3xl transition-all duration-1000 delay-300 ${isVisible ? 'animate-pulse opacity-100' : 'opacity-0'}`}></div>
        <div className={`absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-full blur-2xl transition-all duration-1000 delay-500 ${isVisible ? 'animate-pulse opacity-100' : 'opacity-0'}`}></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative inline-block group">
            <h2 className="relative text-4xl md:text-4xl text-[#550000] font-zodiak font-700 mb-4 tracking-tight">
              Who Trusts Us?
            </h2>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-red-500 via-red-600 to-red-800 rounded-full animate-pulse"></div>
          </div>
          <p className="text-lg text-[#6B4C4C] mt-6 max-w-2xl mx-auto font-medium">
            FT has worked with the <span className="text-[#E53935] font-bold">best</span> — and made them <span className="text-[#E53935] font-bold">better</span>.
          </p>
        </div>

        {/* Brands Section - Horizontal Scroll */}
        <div
          className={`mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          <div className="group bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/30 hover:shadow-3xl transition-all duration-500 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="text-center mb-12">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <div className="w-2 h-8 bg-gradient-to-b from-red-500 to-pink-600 rounded-full shadow-lg"></div>
                  <h3 className="text-3xl font-black text-slate-800 tracking-tight">
                    {`We've organized many events`}
                  </h3>
                  <div className="w-2 h-8 bg-gradient-to-b from-red-500 to-pink-600 rounded-full shadow-lg"></div>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 place-items-center">
                {brands.map((brand, index) => (
                  <div
                    key={index}
                    className={`group/brand relative w-32 h-20 cursor-pointer transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                      }`}
                    style={{ transitionDelay: `${index * 100 + 400}ms` }}
                  >
                    <Image
                      src={brand.logo}
                      alt={brand.name}
                      fill
                      className="object-contain transition-transform duration-700 group-hover/brand:scale-110"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Movies Section - Modified with Event Stats */}
        <div
          className={`mb-14 transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <div className="group bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-xl rounded-2xl p-4 shadow-2xl border border-white/30 hover:shadow-3xl transition-all duration-500 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="text-center mb-6">
                <div className="flex items-center justify-center gap-3 mb-3">
                  <div className="w-1.5 h-6 bg-gradient-to-b from-purple-500 to-blue-600 rounded-full shadow-lg"></div>
                  <h3 className="text-2xl font-black text-slate-800 tracking-tight">
                    Blockbuster Collaborations
                  </h3>
                  <div className="w-1.5 h-6 bg-gradient-to-b from-purple-500 to-blue-600 rounded-full shadow-lg"></div>
                </div>
                <p className="text-slate-600 font-medium text-sm">
                  Cinema magic meets creative excellence
                </p>
              </div>

              <div className="flex gap-6">
                {/* Left side - Event Stats (no boxes) */}
                <div className="w-48 flex flex-col gap-4 ">
                  <div className="text-center">
                    <div className="relative mb-2">
                      <span className="text-2xl font-black bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                        500+
                      </span>
                      <div className="absolute -top-1 -right-1 w-2 h-2 bg-blue-500 rounded-full animate-ping opacity-75"></div>
                    </div>
                    <p className="text-xs text-slate-600 font-medium">Epic Events</p>
                  </div>

                  <div className="text-center">
                    <div className="relative mb-2">
                      <span className="text-2xl font-black bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                        50+
                      </span>
                      <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full animate-ping opacity-75"></div>
                    </div>
                    <p className="text-xs text-slate-600 font-medium">Cities Covered</p>
                  </div>

                  <div className="text-center">
                    <div className="relative mb-2">
                      <span className="text-2xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                        1M+
                      </span>
                      <div className="absolute -top-1 -right-1 w-2 h-2 bg-purple-500 rounded-full animate-ping opacity-75"></div>
                    </div>
                    <p className="text-xs text-slate-600 font-medium">Attendees Reached</p>
                  </div>

                  <div className="text-center">
                    <div className="relative mb-2">
                      <span className="text-2xl font-black bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                        98%
                      </span>
                      <div className="absolute -top-1 -right-1 w-2 h-2 bg-orange-500 rounded-full animate-ping opacity-75"></div>
                    </div>
                    <p className="text-xs text-slate-600 font-medium">
                      Client Satisfaction
                    </p>
                  </div>
                </div>

                {/* Right side - Movies Grid */}
                <div className="flex-1">
                  <div className="grid grid-cols-4 gap-6">
                    {movies.map((movie, index) => (
                      <div
                        key={index}
                        className={`group/movie cursor-pointer transition-all duration-500 ${isVisible
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-5"
                          }`}
                        style={{ transitionDelay: `${index * 100 + 600}ms` }}
                      >
                        <div className="aspect-[3/4] max-h-[260px] rounded-xl shadow-lg group-hover/movie:shadow-xl transition-all duration-500 group-hover/movie:scale-105 relative overflow-hidden bg-gradient-to-t from-black/20 to-transparent">
                          <Image
                            src={movie.poster}
                            alt={movie.name}
                            fill
                            className="object-cover transition-transform duration-700 group-hover/movie:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover/movie:opacity-100 transition-opacity duration-300"></div>
                          <div className="absolute bottom-2 left-2 right-2 text-white opacity-0 group-hover/movie:opacity-100 transition-opacity duration-300">
                            <p className="font-bold text-xs leading-tight">{movie.name}</p>
                            {movie.subtitle && (
                              <p className="text-white/80 text-[10px] mt-0.5">
                                {movie.subtitle}
                              </p>
                            )}
                          </div>
                        </div>
                        <div className="mt-2 text-center group-hover/movie:hidden">
                          <p className="font-bold text-slate-800 text-xs leading-tight">
                            {movie.name}
                          </p>
                          {movie.subtitle && (
                            <p className="text-slate-600 text-[10px] mt-0.5">
                              {movie.subtitle}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Events Section */}
        <div className={`mb-16 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="group bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-xl rounded-3xl p-6 shadow-2xl border border-white/30 hover:shadow-3xl transition-all duration-500 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <div className="w-2 h-8 bg-gradient-to-b from-blue-500 to-cyan-600 rounded-full shadow-lg"></div>
                  <h3 className="text-3xl font-black text-slate-800 tracking-tight">500+ Epic Events</h3>
                  <div className="w-2 h-8 bg-gradient-to-b from-blue-500 to-cyan-600 rounded-full shadow-lg"></div>
                </div>
                <p className="text-slate-600 font-medium">Unforgettable experiences, delivered flawlessly</p>
              </div>

              <div
                ref={eventsScrollRef}
                className="flex gap-6 overflow-x-hidden scrollbar-hide"
                onMouseEnter={() => setIsPausedEvents(true)}
                onMouseLeave={() => setIsPausedEvents(false)}
                style={{ width: '100%' }}
              >
                {[...events, ...events].map((event, index) => (
                  <div
                    key={index}
                    className="group/event cursor-pointer transition-all duration-500 flex-shrink-0"
                    style={{ width: '340px' }}
                  >
                    <div className="aspect-video rounded-2xl shadow-lg group-hover/event:shadow-xl transition-all duration-500 group-hover/event:scale-110 relative overflow-hidden">
                      <Image
                        src={event.image}
                        alt={event.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover/event:scale-125"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover/event:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute bottom-3 left-3 right-3 text-white opacity-0 group-hover/event:opacity-100 transition-opacity duration-300">
                        <p className="font-bold text-base">{event.title}</p>
                      </div>
                    </div>
                    <p className="text-center mt-3 text-base font-bold text-slate-800 group-hover/event:hidden transition-opacity duration-300">{event.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Influencers Section */}
        <div className={`transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="group bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-xl rounded-3xl p-6 shadow-2xl border border-white/30 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-4 mb-3">
                  <div className="w-2 h-6 bg-gradient-to-b from-pink-500 to-purple-600 rounded-full shadow-lg"></div>
                  <h3 className="text-2xl font-black text-slate-800 tracking-tight">Star Influencers</h3>
                  <div className="w-2 h-6 bg-gradient-to-b from-pink-500 to-purple-600 rounded-full shadow-lg"></div>
                </div>
                <h4 className="text-lg font-bold text-slate-700 mb-2">People Who Put Their Name Behind Ours</h4>
                <p className="text-slate-600 text-sm max-w-2xl mx-auto font-medium">
                  From creators to changemakers, some of the most influential voices have helped shape the FT community.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {influencers.map((influencer, index) => (
                  <div
                    key={index}
                    className={`group/influencer cursor-pointer transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                    style={{ transitionDelay: `${index * 150 + 1000}ms` }}
                  >
                    <div className="bg-gradient-to-br from-white/80 to-white/60 rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-white/40 group-hover/influencer:border-purple-200 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover/influencer:opacity-100 transition-opacity duration-500"></div>
                      <div className="relative z-10 flex flex-col items-center text-center">
                        <div className="relative w-16 h-16 mb-3 rounded-full shadow-lg group-hover/influencer:scale-110 transition-transform duration-500 ring-3 ring-white/50 group-hover/influencer:ring-purple-200">
                          <Image
                            src={influencer.avatar}
                            alt={influencer.name}
                            fill
                            className="object-cover rounded-full"
                          />
                          {influencer.verified && (
                            <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 w-5 h-5 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-xl ring-2 ring-white animate-pulse">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                          )}
                        </div>

                        <h5 className="font-black text-sm text-slate-800 mb-1">{influencer.name}</h5>
                        <p className="text-slate-600 text-xs mb-1 font-medium">{influencer.username}</p>
                        <p className="text-slate-500 text-xs mb-2 font-medium">{influencer.category}</p>

                        <div className="flex items-center gap-2 px-2 py-1 bg-gradient-to-r from-slate-100 to-slate-50 rounded-full border border-slate-200 group-hover/influencer:from-purple-50 group-hover/influencer:to-pink-50 group-hover/influencer:border-purple-200 transition-all duration-300">
                          <div className="w-1.5 h-1.5 bg-gradient-to-r from-green-400 to-green-500 rounded-full animate-pulse"></div>
                          <span className="text-slate-700 text-xs font-bold">{influencer.followers} followers</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex justify-center">
                <div className="w-32 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-full shadow-lg animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoTrustsUs;





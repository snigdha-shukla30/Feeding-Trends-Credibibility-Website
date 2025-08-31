"use client";
import React, { useState, useEffect, useRef, useMemo, useCallback } from "react";
import Image from "next/image"; // ✅ Next.js Image

// Type definitions
interface GalleryImage {
  id: string;
  src: string;
  height: number;
  color?: string;
}

const EnhancedMasonryGallery = () => {
  const [columnCount, setColumnCount] = useState<number>(4);
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const [isClient, setIsClient] = useState<boolean>(false);
  const [touchedImageId, setTouchedImageId] = useState<string | null>(null);
  const columnRefs = useRef<(HTMLDivElement | null)[]>([]);
  const scrollDirections = useRef<(1 | -1)[]>([]);

  // Enhanced fixed heights with more variety - Desktop
  const fixedHeights = useMemo(() => [
    320, 180, 280, 220, 380, 240, 300, 200, 350, 190,
    270, 160, 330, 210, 290, 250, 340, 170, 310, 230,
    360, 200, 280, 190, 320, 240, 290, 220, 350, 180,
  ] ,[]);

  // Mobile specific heights - much shorter for compact layout
  const mobileHeights = useMemo(() => [
    120, 100, 110, 105, 130, 115, 110, 95, 125, 90,
    110, 85, 120, 100, 105, 110, 115, 95, 110, 100,
    125, 95, 110, 90, 120, 105, 110, 100, 115, 85,
  ] ,[]);

  // Static image data with nature/landscape theme
  const staticImages = useMemo(() => [
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400",
    "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=400",
    "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400",
    "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400",
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400",
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400",
    "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=400",
    "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?w=400",
    "https://images.unsplash.com/photo-1485470733090-0aae1788d5af?w=400",
    "https://images.unsplash.com/photo-1554629947-334ff61d85dc?w=400",
    "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=400",
    "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=400",
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400",
    "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=400",
    "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400",
    "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400",
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400",
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400",
    "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=400",
    "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?w=400",
    "https://images.unsplash.com/photo-1485470733090-0aae1788d5af?w=400",
    "https://images.unsplash.com/photo-1554629947-334ff61d85dc?w=400",
    "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=400",
    "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=400",
  ] ,[]);

  const gradientColors= useMemo(() =>  [
    "from-purple-500/20 to-pink-500/20",
    "from-blue-500/20 to-cyan-500/20",
    "from-green-500/20 to-emerald-500/20",
    "from-orange-500/20 to-red-500/20",
    "from-indigo-500/20 to-purple-500/20",
  ] ,[]);

  const loadGalleryData = useCallback(() => {
    const isMobile = window.innerWidth < 640;
    const heightsToUse = isMobile ? mobileHeights : fixedHeights;
    
    const formattedImages: GalleryImage[] = staticImages.map((src, index) => ({
      id: `image-${index + 1}`,
      src,
      height: heightsToUse[index % heightsToUse.length],
      color: gradientColors[index % gradientColors.length],
    }));
    setImages(formattedImages);
  }, [staticImages, fixedHeights, mobileHeights, gradientColors]);

  useEffect(() => {
    setIsClient(true);

    const updateColumnCount = () => {
      const width = window.innerWidth;
      if (width < 480) setColumnCount(3); // Very small screens - 3 columns
      else if (width < 640) setColumnCount(4); // Mobile - 4 columns
      else if (width < 1024) setColumnCount(3); // Tablet - 3 columns
      else if (width < 1280) setColumnCount(4); // Small desktop - 4 columns
      else setColumnCount(5); // Large desktop - 5 columns
      
      loadGalleryData();
    };

    loadGalleryData();
    updateColumnCount();

    window.addEventListener("resize", updateColumnCount);
    return () => window.removeEventListener("resize", updateColumnCount);
  }, [loadGalleryData]);

  // Initialize scroll directions for each column
  useEffect(() => {
    scrollDirections.current = Array.from(
      { length: columnCount },
      (_, index) => (index % 2 === 0 ? 1 : -1)
    );
  }, [columnCount]);

  const distributeImages = () => {
    const columns: GalleryImage[][] = Array.from(
      { length: columnCount },
      () => []
    );
    const columnHeights = Array(columnCount).fill(0);

    images.forEach((image) => {
      const shortestColumnIndex = columnHeights.indexOf(
        Math.min(...columnHeights)
      );
      columns[shortestColumnIndex].push(image);
      columnHeights[shortestColumnIndex] += image.height + 16;
    });

    return columns;
  };

  const imageColumns = distributeImages();

  // Enhanced auto-scroll with alternating directions
  useEffect(() => {
    let rafId: number;

    const step = () => {
      if (!isHovering) {
        columnRefs.current.forEach((el, index) => {
          if (!el) return;
          const maxScroll = el.scrollHeight - el.clientHeight;
          if (maxScroll <= 0) return;

          const direction = scrollDirections.current[index];
          const baseSpeed = 0.3;
          const speedVariation = 0.1 + (index % 4) * 0.05;
          const speed = (baseSpeed + speedVariation) * direction;

          let nextScroll = el.scrollTop + speed;

          if (direction === 1 && nextScroll >= maxScroll - 1) {
            scrollDirections.current[index] = -1;
            nextScroll = maxScroll;
          } else if (direction === -1 && nextScroll <= 0) {
            scrollDirections.current[index] = 1;
            nextScroll = 0;
          }

          el.scrollTop = nextScroll;
        });
      }
      rafId = requestAnimationFrame(step);
    };

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [isHovering, columnCount, images]);

  const handleImageTouch = (imageId: string) => {
    setTouchedImageId(imageId);
    setTimeout(() => setTouchedImageId(null), 2000); // Reset after 2 seconds
  };

  if (!isClient) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#EF4444] via-[#DC2626] to-[#991B1B] p-2 sm:p-4 overflow-hidden">
      {/* Background elements - Simplified for mobile */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-48 sm:w-96 h-48 sm:h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 sm:w-96 h-48 sm:h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-1/2 w-32 sm:w-64 h-32 sm:h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header - Compact mobile version */}
        <div className="text-center mb-3 sm:mb-8">
          <h1 className="text-xl sm:text-5xl font-bold mb-1 sm:mb-2 text-white font-zodiak px-2">
            Infinite Masonry
          </h1>
          <p className="text-red-100 text-xs sm:text-lg px-4">
            <span className="hidden sm:inline">Where art meets motion • Hover to pause the flow</span>
            <span className="sm:hidden">Touch to interact</span>
          </p>
          <div className="flex justify-center items-center gap-1 sm:gap-2 mt-1 sm:mt-4">
            <div className="w-1 sm:w-2 h-1 sm:h-2 bg-red-400 rounded-full animate-bounce"></div>
            <div className="w-1 sm:w-2 h-1 sm:h-2 bg-red-500 rounded-full animate-bounce delay-100"></div>
            <div className="w-1 sm:w-2 h-1 sm:h-2 bg-red-600 rounded-full animate-bounce delay-200"></div>
          </div>
        </div>

        {/* Masonry Grid - Mobile optimized for compact layout */}
        <div
          className="flex gap-1 sm:gap-4"
          style={{ 
            height: "calc(100vh - 120px)", 
            maxHeight: "calc(100vh - 120px)" 
          }}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {imageColumns.map((column, columnIndex) => (
            <div
              key={columnIndex}
              ref={(el) => {
                columnRefs.current[columnIndex] = el;
              }}
              className="flex-1 flex flex-col gap-1 sm:gap-4 overflow-hidden rounded-md sm:rounded-xl sm:animate-float"
              style={{
                height: "100%",
                ["--float-delay" as string]: `${columnIndex * 200}ms`,
              }}
            >
              {column.map((image, imageIndex) => (
                <div
                  key={image.id}
                  className={`relative group cursor-pointer overflow-hidden rounded-md sm:rounded-xl shadow-md sm:shadow-2xl 
                    transition-all duration-200 sm:duration-500 
                    ${touchedImageId === image.id ? 'scale-95 sm:scale-[1.02]' : 'scale-100'}
                    sm:hover:shadow-purple-500/25 sm:hover:scale-[1.02] sm:hover:rotate-1
                    active:scale-95 sm:active:scale-[1.02]`}
                  style={{
                    height: `${image.height}px`,
                    animationDelay: `${imageIndex * 100}ms`,
                  }}
                  onTouchStart={() => handleImageTouch(image.id)}
                  onClick={() => handleImageTouch(image.id)}
                >
                  {/* ✅ Next.js Image */}
                  <Image
                    src={image.src}
                    alt={`Gallery image ${image.id}`}
                    fill
                    className={`object-cover transition-all duration-300 sm:duration-700 
                      ${touchedImageId === image.id ? 'scale-105 brightness-110' : 'scale-100'}
                      sm:group-hover:scale-110 sm:group-hover:brightness-110`}
                  />

                  {/* Overlay - Works on both mobile touch and desktop hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${image.color} 
                      transition-all duration-200 sm:duration-500
                      ${touchedImageId === image.id ? 'opacity-100' : 'opacity-0'}
                      sm:group-hover:opacity-100`}
                  />

                  {/* Shine effect - Desktop only */}
                  <div className="hidden sm:block absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                  {/* Floating button - Works on both mobile and desktop */}
                  <div className={`absolute top-2 sm:top-4 right-2 sm:right-4 
                    transition-all duration-200 sm:duration-300 delay-0 sm:delay-200
                    ${touchedImageId === image.id ? 'opacity-100' : 'opacity-0'}
                    sm:group-hover:opacity-100`}>
                    <div className="w-5 sm:w-8 h-5 sm:h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <span className="text-white text-xs sm:text-sm">✨</span>
                    </div>
                  </div>

                  {/* Bottom Info - Works on both mobile and desktop */}
                  <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2 sm:p-4 
                    transition-transform duration-200 sm:duration-300
                    ${touchedImageId === image.id ? 'translate-y-0' : 'translate-y-full'}
                    sm:group-hover:translate-y-0`}>
                    <p className="text-white text-xs sm:text-sm font-medium">
                      Image {image.id}
                    </p>
                    <p className="text-gray-300 text-xs hidden sm:block">Click to explore</p>
                  </div>

                  {/* Particles - Optimized for both mobile and desktop */}
                  <div className={`absolute inset-0 pointer-events-none 
                    transition-opacity duration-300 sm:duration-500
                    ${touchedImageId === image.id ? 'opacity-100' : 'opacity-0'}
                    sm:group-hover:opacity-100`}>
                    {[...Array(3)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-0.5 sm:w-1 h-0.5 sm:h-1 bg-white rounded-full animate-ping"
                        style={{
                          top: `${Math.random() * 100}%`,
                          left: `${Math.random() * 100}%`,
                          animationDelay: `${i * 200}ms`,
                          animationDuration: "1s",
                        }}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Mobile specific footer info - More compact */}
        <div className="block sm:hidden text-center mt-2">
          <p className="text-red-100 text-xs opacity-75">
            Touch images • Scroll to explore
          </p>
        </div>
      </div>

     
    </div>
  );
};

export default EnhancedMasonryGallery;








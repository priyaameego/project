import { useState, useRef, useEffect } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

interface CompareSliderProps {
  imageSrc?: string; // For stitched images (backward compatibility)
  beforeSrc?: string; // For separate images
  afterSrc?: string; // For separate images
  stitchedReverse?: boolean; // If true, stitched image is [After | Before]. Default false [Before | After].
}

export function CompareSlider({ imageSrc, beforeSrc, afterSrc, stitchedReverse = false }: CompareSliderProps) {
  const [position, setPosition] = useState(95);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const isStitched = !!imageSrc;
  const actualBefore = isStitched ? imageSrc : beforeSrc;
  const actualAfter = isStitched ? imageSrc : afterSrc;

  const handlePointerDown = () => {
    setIsDragging(true);
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  const handlePointerMove = (e: React.PointerEvent | PointerEvent) => {
    if (!isDragging || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    let x = e.clientX - rect.left;
    const width = rect.width;
    
    if (x < 0) x = 0;
    if (x > width) x = width;
    
    const percentage = (x / width) * 100;
    setPosition(percentage);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("pointerup", handlePointerUp);
      window.addEventListener("pointermove", handlePointerMove as any);
    } else {
      window.removeEventListener("pointerup", handlePointerUp);
      window.removeEventListener("pointermove", handlePointerMove as any);
    }
    return () => {
      window.removeEventListener("pointerup", handlePointerUp);
      window.removeEventListener("pointermove", handlePointerMove as any);
    };
  }, [isDragging]);

  return (
    <div 
      ref={containerRef}
      className={`relative w-full overflow-hidden rounded-[16px] select-none touch-none bg-gray-100 ${isStitched ? 'aspect-square sm:aspect-[4/3] lg:aspect-[1.5/1]' : 'aspect-[4/3] sm:aspect-[1.5/1]'}`}
      onPointerDown={handlePointerDown}
      style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
    >
      {/* After image - acts as background */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src={actualAfter} 
          alt="After" 
          className="absolute top-0 pointer-events-none h-full object-cover max-w-none"
          style={isStitched ? { width: '200%', left: stitchedReverse ? '0' : '-100%' } : { width: '100%', left: '0' }}
        />
      </div>

      {/* Before image - cropped with clip-path */}
      <div 
        className="absolute inset-0 w-full h-full z-10"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <img 
          src={actualBefore} 
          alt="Before" 
          className="absolute top-0 pointer-events-none h-full object-cover max-w-none"
          style={isStitched ? { width: '200%', left: stitchedReverse ? '-100%' : '0' } : { width: '100%', left: '0' }}
        />
      </div>

      {/* Slider Handle */}
      <div 
        className="absolute top-0 bottom-0 z-20 w-[3px] bg-white cursor-ew-resize flex items-center justify-center transform -translate-x-1/2 shadow-lg"
        style={{ left: `${position}%` }}
      >
        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(0,0,0,0.4)] border border-gray-200">
          <FiArrowLeft className="w-3 h-3 text-gray-700 -mr-0.5" />
          <FiArrowRight className="w-3 h-3 text-gray-700 -ml-0.5" />
        </div>
      </div>

      {/* Before / After Labels */}
      <div className="absolute inset-0 pointer-events-none z-30 flex items-end justify-between p-4 sm:p-6">
        <span className="text-white bg-black/30 px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold backdrop-blur-md shadow-sm transition-opacity duration-300" style={{ opacity: position > 15 ? 1 : 0 }}>
          Before
        </span>
        <span className="text-white bg-black/30 px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold backdrop-blur-md shadow-sm transition-opacity duration-300" style={{ opacity: position < 85 ? 1 : 0 }}>
          After
        </span>
      </div>
    </div>
  );
}

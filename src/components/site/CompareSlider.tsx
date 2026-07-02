import { useState, useRef, useEffect } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

interface CompareSliderProps {
  imageSrc?: string; // For stitched images (backward compatibility)
  beforeSrc?: string; // For separate images
  afterSrc?: string; // For separate images
}

export function CompareSlider({ imageSrc, beforeSrc, afterSrc }: CompareSliderProps) {
  const [position, setPosition] = useState(50);
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
      className={`relative w-full overflow-hidden rounded-[12px] select-none touch-none bg-gray-100 ${isStitched ? 'aspect-[4/3] sm:aspect-[2.5/1]' : 'aspect-[4/3] sm:aspect-[1.5/1]'}`}
      onPointerDown={handlePointerDown}
      style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
    >
      {/* After image - acts as background */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src={actualAfter} 
          alt="After" 
          className={`absolute inset-0 h-full object-cover pointer-events-none ${isStitched ? 'w-[200%] max-w-[200%]' : 'w-full'}`}
          style={isStitched ? { objectPosition: 'right center' } : {}}
        />
        <div className="absolute bottom-3 right-3 text-white text-sm font-medium drop-shadow-md z-0 bg-black/30 px-2 py-0.5 rounded-full backdrop-blur-sm">
          After
        </div>
      </div>

      {/* Before image - cropped with clip-path */}
      <div 
        className="absolute inset-0 w-full h-full z-10"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <img 
          src={actualBefore} 
          alt="Before" 
          className={`absolute inset-0 h-full object-cover pointer-events-none ${isStitched ? 'w-[200%] max-w-[200%]' : 'w-full'}`}
          style={isStitched ? { objectPosition: 'left center' } : {}}
        />
        <div className="absolute bottom-3 left-3 text-white text-sm font-medium drop-shadow-md bg-black/30 px-2 py-0.5 rounded-full backdrop-blur-sm">
          Before
        </div>
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
    </div>
  );
}

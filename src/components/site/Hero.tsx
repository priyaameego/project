import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";


const SLIDES = [
  "https://mckinneyddscenter.com/wp-content/uploads/2021/10/rsw_1300h_800-2.webp",
  "https://mckinneyddscenter.com/wp-content/uploads/2022/01/Photo-19-min.jpg",
  "https://mckinneyddscenter.com/wp-content/uploads/2022/01/Photo-3-min.jpg",
  "https://mckinneyddscenter.com/wp-content/uploads/2022/01/Photo-4-min.jpg",
  "https://mckinneyddscenter.com/wp-content/uploads/2022/01/Photo-5-min.jpg",
];

export function Hero() {
  const [burnActive, setBurnActive] = useState(true);
  const burnTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    burnTimeout.current = setTimeout(() => setBurnActive(false), 1600);
    return () => { if (burnTimeout.current) clearTimeout(burnTimeout.current); };
  }, []);

  const triggerBurn = () => {
    setBurnActive(true);
    if (burnTimeout.current) clearTimeout(burnTimeout.current);
    burnTimeout.current = setTimeout(() => setBurnActive(false), 1600);
  };

  return (
    <section id="home" className="relative h-[75svh] w-full overflow-hidden">
      <div className={`burn-reveal-overlay ${burnActive ? "active" : ""}`} aria-hidden />
      <div className={`burn-reveal-glow ${burnActive ? "active" : ""}`} aria-hidden />

      {/* Dark gradient overlay for text readability */}
      <div
        className="absolute inset-0 z-[5] pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.15) 40%, rgba(0,0,0,0.45) 100%)",
        }}
        aria-hidden
      />

      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        autoplay={{ delay: 5500, disableOnInteraction: false }}
        loop
        pagination={{ clickable: true }}
        className="absolute inset-0 h-full w-full"
        onSlideChange={triggerBurn}
      >
        {SLIDES.map((src, i) => (
          <SwiperSlide key={i}>
            <div className="relative h-[75svh] w-full overflow-hidden">
              <img src={src} alt="" className="ken-burns h-full w-full object-cover" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </section>
  );
}

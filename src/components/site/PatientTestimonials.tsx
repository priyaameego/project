import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight, FiActivity } from "react-icons/fi";

const testimonials = [
  {
    name: "Bailey McBride",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    quote:
      "McKinney Dental and Implant Center took amazing care of me. I walked in and Maria explained everything that was going to happen next. Dr. Juma took the time to listen to my past experiences and my needs. My teeth looking amazing and can't wait to go back in 6 months. I highly recommend McKinney Dental and Implant Center.",
  },
  {
    name: "Jessica R.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
    quote:
      "I love what he is doing here. Dr. Juma is funny, smart & he takes great care of me too!!! The whole team makes every visit comfortable and the office is beautiful, modern, and welcoming.",
  },
  {
    name: "Michael T.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    quote:
      "The entire staff is absolutely wonderful. From the front desk to the hygienists, customer service is top notch. The office looks fantastic and he explains every step of the process clearly.",
  },
];

export function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 6000);
    return () => clearInterval(t);
  }, []);

  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const t = testimonials[index];

  return (
    <section className="relative py-20 md:py-28 bg-white overflow-hidden">
      {/* Watermark heartbeat */}
      <FiActivity className="absolute top-8 left-1/2 -translate-x-1/2 text-[180px] sm:text-[240px] text-primary/5 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-ink tracking-tight">
            See What Our <span className="text-primary">Patient</span> Are{" "}
            <span className="text-primary">Saying</span>
          </h2>
          <p className="mt-5 max-w-3xl mx-auto text-base sm:text-lg text-muted-foreground leading-relaxed">
            Our focus is your comprehensive oral health and wellness.. but we love the challange of guiding you through any reconstructive cosmetic needs!
          </p>
        </motion.div>

        <div className="relative mt-16 sm:mt-20">
          {/* Avatar floating */}
          <div className="absolute left-1/2 -translate-x-1/2 -top-12 z-20">
            <AnimatePresence mode="wait">
              <motion.img
                key={t.avatar}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                src={t.avatar}
                alt={t.name}
                className="w-24 h-24 rounded-full object-cover ring-4 ring-white shadow-xl"
              />
            </AnimatePresence>
          </div>

          {/* Card */}
          <div className="relative bg-white rounded-3xl shadow-[0_20px_60px_-20px_rgba(15,76,129,0.25)] ring-1 ring-primary/10 px-6 sm:px-12 md:px-20 pt-20 pb-12 sm:pb-16 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <h3 className="text-xl sm:text-2xl font-semibold text-primary">{t.name}</h3>
                <p className="mt-6 text-base sm:text-lg md:text-xl text-ink/75 leading-relaxed max-w-3xl mx-auto">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Arrows */}
            <button
              onClick={prev}
              aria-label="Previous"
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white ring-1 ring-primary/15 text-primary hover:bg-primary hover:text-white shadow-md transition flex items-center justify-center"
            >
              <FiChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              aria-label="Next"
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white ring-1 ring-primary/15 text-primary hover:bg-primary hover:text-white shadow-md transition flex items-center justify-center"
            >
              <FiChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Dots */}
          <div className="mt-8 flex justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Slide ${i + 1}`}
                className={`h-2 rounded-full transition-all ${
                  i === index ? "w-8 bg-primary" : "w-2 bg-primary/25 hover:bg-primary/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

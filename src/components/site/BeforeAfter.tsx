import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import { FiAward, FiCheckCircle, FiHeart, FiArrowUpRight, FiCamera } from "react-icons/fi";
import { Link } from "@tanstack/react-router";
import { CompareSlider } from "./CompareSlider";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import imgAfter from "@/assets/After.png";
import imgAfterbe from "@/assets/afterbe.jpg";
import imgMan from "@/assets/man.jpg";
import imgMouth from "@/assets/mouth.jpg";
import imgLips from "@/assets/lips.jpg";
const IMAGES = [
  {
    beforeSrc: "https://mckinneyddscenter.com/wp-content/uploads/2022/01/Before-min-1.png",
    afterSrc: "https://mckinneyddscenter.com/wp-content/uploads/2022/01/After.png",
    label: "Smile Restoration",
    category: "Smile Design",
    treatment: "Porcelain Veneers · Whitening",
    duration: "6 weeks",
    reverse: false,
  },
  {
    beforeSrc: "https://mckinneyddscenter.com/wp-content/uploads/2024/02/2-600x252.jpg",
    afterSrc: "https://mckinneyddscenter.com/wp-content/uploads/2024/03/17b475b4-2051-4dbb-a055-8bdcc1352baa-768x298.jpg",
    label: "Full Mouth Rehabilitation",
    category: "Implants",
    treatment: "Full Arch Implants",
    duration: "4 months",
    reverse: true,
  },
  {
    beforeSrc: "https://mckinneyddscenter.com/wp-content/uploads/2022/01/Before-liplase.png",
    afterSrc: "https://mckinneyddscenter.com/wp-content/uploads/2022/01/After-liplase.png",
    label: "Cosmetic Enhancement",
    category: "Cosmetic",
    treatment: "Smile Makeover",
    duration: "Varies",
    reverse: true,
  },
];

const STATS = [
  { icon: FiAward, value: "1,200+", label: "Smile Transformations" },
  { icon: FiHeart, value: "98%", label: "Patient Satisfaction" },
  { icon: FiCheckCircle, value: "15+", label: "Years of Expertise" },
];

export function BeforeAfter() {

  return (
    <>
      {/* Intro / stats */}
      <section className="relative overflow-hidden bg-white">
        <div
          aria-hidden
          className="absolute -left-32 top-10 h-[380px] w-[380px] rounded-full"
          style={{ background: "radial-gradient(closest-side, rgba(46,182,204,0.10), transparent)" }}
        />
        <div
          aria-hidden
          className="absolute -right-32 bottom-0 h-[380px] w-[380px] rounded-full"
          style={{ background: "radial-gradient(closest-side, rgba(11,47,92,0.08), transparent)" }}
        />

        <div className="container-x relative py-16 sm:py-20 text-center">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 mb-4 text-[#0B2F5C] bg-blue-50 text-sm font-bold tracking-[0.2em] uppercase rounded-full border border-blue-100"
          >
            Before & After
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#0B2F5C] leading-tight"
          >
            Real Smile <span className="italic text-[#7BD0E0]">Transformations</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-[#6B7C95] text-lg sm:text-xl max-w-2xl mx-auto font-light leading-relaxed"
          >
            Swipe to explore the life-changing results of our personalized, high-quality dental care.
          </motion.p>
        </div>
      </section>

      {/* Grid of Compare Sliders */}
      <section className="relative bg-white pb-16 sm:pb-24">
        <div className="container-x max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {IMAGES.map((img, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="w-full group"
              >
                <div className="w-full rounded-3xl overflow-hidden shadow-[0_10px_30px_rgba(11,47,92,0.15)] border-[6px] border-white bg-white hover:shadow-[0_20px_40px_rgba(11,47,92,0.2)] transition-shadow duration-300">
                  <CompareSlider 
                    imageSrc={img.imageSrc} 
                    beforeSrc={img.beforeSrc}
                    afterSrc={img.afterSrc}
                    stitchedReverse={img.reverse}
                  />
                  <div className="p-5 text-center">
                    <h3 className="font-semibold text-[#0B2F5C] text-lg">{img.label}</h3>
                    <p className="text-sm text-[#6B7C95] mt-1">{img.treatment}</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="bg-white pb-20">
        <div className="container-x">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-[#0B2F5C] via-[#143F7A] to-[#1B4A8F] px-8 sm:px-14 py-12 sm:py-14"
          >
            <div
              aria-hidden
              className="absolute -right-24 -top-24 h-72 w-72 rounded-full"
              style={{ background: "radial-gradient(closest-side, rgba(46,182,204,0.35), transparent)" }}
            />
            <div className="relative grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight">
                  Ready to design <span className="italic font-serif text-[#7BD0E0]">your</span> smile?
                </h3>
                <p className="mt-3 text-white/75 max-w-lg text-[15px]">
                  Schedule a complimentary smile consultation and see a personalized preview of
                  your transformation.
                </p>
              </div>
              <div className="flex flex-wrap lg:justify-end gap-3">
                <a
                  href="https://local.demandforce.com/b/mckinneydentalandimplantcenter/schedule?widget=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full pl-6 pr-2 py-2.5 text-sm font-semibold text-[#0B2F5C] bg-[#E9C77B] hover:bg-white transition-colors"
                >
                  Book Consultation
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-[#0B2F5C] text-white group-hover:rotate-45 transition-transform">
                    <FiArrowUpRight />
                  </span>
                </a>
                <a
                  href="tel:+19728336825"
                  className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white border border-white/30 hover:border-[#7BD0E0] hover:text-[#7BD0E0] transition-colors"
                >
                  (972) 833-6825
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

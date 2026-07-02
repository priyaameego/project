import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import { FiAward, FiCheckCircle, FiHeart, FiArrowUpRight, FiCamera } from "react-icons/fi";
import { Link } from "@tanstack/react-router";
import { CompareSlider } from "./CompareSlider";
import imgAfter from "@/assets/After.png";
import img2 from "@/assets/2-600x252.jpg";

// Use the imported images
const IMAGES = [
  {
    imageSrc: imgAfter,
    label: "Smile Restoration",
    category: "Smile Design",
    treatment: "Porcelain Veneers · Whitening",
    duration: "6 weeks",
  },
  {
    imageSrc: img2,
    label: "Full Mouth Rehabilitation",
    category: "Implants",
    treatment: "Full Arch Implants",
    duration: "4 months",
  },
  {
    imageSrc: "https://mckinneyddscenter.com/wp-content/uploads/2022/02/After-1024x683.jpg",
    label: "Cosmetic Enhancement",
    category: "Cosmetic",
    treatment: "Smile Makeover",
    duration: "Varies",
  },
];

const STATS = [
  { icon: FiAward, value: "1,200+", label: "Smile Transformations" },
  { icon: FiHeart, value: "98%", label: "Patient Satisfaction" },
  { icon: FiCheckCircle, value: "15+", label: "Years of Expertise" },
];

export function BeforeAfter() {
  const [filter, setFilter] = useState("All Results");

  const visible = IMAGES.filter((i) => filter === "All Results" || i.category === filter);

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
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-display text-4xl sm:text-5xl font-semibold text-[#1B4A8F]"
          >
            Before And After Picture
          </motion.h2>
          <div className="mt-4 mx-auto h-1 w-20 bg-[#0B2F5C]" />
        </div>
      </section>

      {/* Gallery — horizontal drag strip */}
      <section className="relative bg-white pb-16 sm:pb-20">
        <div className="container-x max-w-6xl mx-auto">
          {visible.length === 0 ? (
            <p className="text-center text-[#6B7C95] py-16">No results for this category.</p>
          ) : (
            <div
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {visible.map((img, i) => (
                <motion.article
                  key={i}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="w-full flex justify-center"
                >
                  <CompareSlider 
                    imageSrc={img.imageSrc} 
                    beforeSrc={img.beforeSrc} 
                    afterSrc={img.afterSrc} 
                  />
                </motion.article>
              ))}
            </div>
          )}
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
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 rounded-full pl-6 pr-2 py-2.5 text-sm font-semibold text-[#0B2F5C] bg-white hover:bg-[#EAF6F9] transition-colors"
                >
                  Book Consultation
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-[#2EB6CC] text-white group-hover:rotate-45 transition-transform">
                    <FiArrowUpRight />
                  </span>
                </Link>
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

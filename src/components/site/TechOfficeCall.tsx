import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiCpu, FiMapPin, FiPhone, FiClock, FiMail, FiCheck } from "react-icons/fi";

type TabKey = "technology" | "office" | "call";

const TABS: { key: TabKey; label: string }[] = [
  { key: "technology", label: "Technology" },
  { key: "office", label: "Our Office" },
  { key: "call", label: "Call Us" },
];

const TECH_BARS = [
  "Absolute Implant Precision",
  "Dynamic 3D Navigation for Dental Implants",
  "Deliver Implant with Confidence",
  "X-Guide Provides Easy, Color Tracking of Drill Depth During Surgery",
];

export function TechOfficeCall() {
  const [active, setActive] = useState<TabKey>("technology");

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#F6FBFC] to-white py-20 lg:py-24">
      {/* molecule watermark */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 top-10 h-[420px] w-[420px] rounded-full opacity-[0.07] blur-2xl"
        style={{ background: "radial-gradient(circle, #2EB6CC 0%, transparent 70%)" }}
      />

      <div className="container-x relative">
        {/* Tabs */}
        <div role="tablist" className="flex flex-wrap items-end justify-center gap-6 sm:gap-12 border-b border-slate-200">
          {TABS.map((t) => {
            const isActive = active === t.key;
            return (
              <button
                key={t.key}
                role="tab"
                aria-selected={isActive}
                onMouseEnter={() => setActive(t.key)}
                onFocus={() => setActive(t.key)}
                onClick={() => setActive(t.key)}
                className={`relative pb-4 text-lg sm:text-2xl font-display transition-colors duration-300 ${
                  isActive ? "text-[#2E6BE6]" : "text-slate-400 hover:text-[#2E6BE6]/80"
                }`}
              >
                {t.label}
                {isActive && (
                  <>
                    <motion.div
                      layoutId="tab-underline"
                      className="absolute -bottom-[2px] left-0 right-0 h-[3px] rounded-full"
                      style={{ background: "linear-gradient(90deg, #2EB6CC, #2E6BE6)" }}
                      transition={{ type: "spring", stiffness: 320, damping: 30 }}
                    />
                    <motion.div
                      layoutId="tab-arrow"
                      className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-0 w-0"
                      style={{
                        borderLeft: "8px solid transparent",
                        borderRight: "8px solid transparent",
                        borderTop: "8px solid #2E6BE6",
                      }}
                      transition={{ type: "spring", stiffness: 320, damping: 30 }}
                    />
                  </>
                )}
              </button>
            );
          })}
        </div>

        {/* Panels */}
        <div className="relative mt-14 min-h-[480px]">
          <AnimatePresence mode="wait">
            {active === "technology" && (
              <motion.div
                key="technology"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"
              >
                <div className="relative">
                  <div className="absolute -inset-6 -z-10 rounded-3xl bg-gradient-to-tr from-[#EAF7FA] to-transparent blur-2xl" />
                  <img
                    src="https://www.sakraworldhospital.com/assets/spl_splimgs/digital-dentistry.webp"
                    alt="Digital dentistry with intra-oral scanning"
                    className="w-full rounded-2xl shadow-[0_20px_50px_-20px_rgba(15,76,129,0.35)] object-cover aspect-[4/3]"
                  />
                </div>
                <div>
                  <h3 className="font-display text-3xl sm:text-4xl font-semibold text-[#1f2937] mb-8">
                    Digital Dentistry with Intra-Oral Scanning
                  </h3>
                  <div className="space-y-6">
                    {TECH_BARS.map((label, i) => (
                      <motion.div
                        key={label}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
                      >
                        <div className="flex items-baseline justify-between mb-2">
                          <span className="text-sm sm:text-base text-slate-600">{label}</span>
                          <span className="text-sm font-semibold text-[#2E6BE6]">100%</span>
                        </div>
                        <div className="relative h-[3px] w-full overflow-hidden rounded-full bg-slate-100">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{ delay: 0.25 + i * 0.08, duration: 1, ease: "easeOut" }}
                            className="absolute inset-y-0 left-0 rounded-full"
                            style={{ background: "linear-gradient(90deg, #2EB6CC, #2E6BE6)" }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  <div className="mt-8 space-y-5 text-sm sm:text-base text-slate-500 leading-relaxed">
                    <p>
                      As part of our commitment to provide you and your family with the best possible
                      oral healthcare, we have invested in a state-of-the-art 3D dental imaging system
                      from Planmeca. This piece of dental technology not only provides a wealth of
                      information, but it does so with the lowest radiation possible, and that's
                      important to us. In fact, we are a Planmeca Ultra Low Dose™ certified practice.
                    </p>
                    <p>
                      Our 3D imaging system allows us to see your anatomy in three-dimensional detail.
                      It can be enlarged, rotated, and divided in any direction, thus revealing
                      critical information not always seen in 2D images. Having this kind of technology
                      at our fingertips allows us to diagnose and treat a wide variety of dental-related
                      issues with accuracy and predictability.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            {active === "office" && (
              <motion.div
                key="office"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"
              >
                <div className="relative">
                  <div className="absolute -inset-6 -z-10 rounded-3xl bg-gradient-to-tr from-[#EAF7FA] to-transparent blur-2xl" />
                  <img
                    src="https://mckinneyddscenter.com/wp-content/uploads/2024/01/255A4063.bak-Medium.jpg"
                    alt="Modern dental office interior"
                    className="w-full rounded-2xl shadow-[0_20px_50px_-20px_rgba(15,76,129,0.35)] object-cover aspect-[4/3]"
                  />
                </div>
                <div>
                  <h3 className="font-display text-3xl sm:text-4xl font-semibold text-[#1f2937] mb-4">
                    A calm, modern office built around you
                  </h3>
                  <p className="text-slate-500 mb-8 leading-relaxed">
                    Spa-inspired treatment suites, soft natural light and warm finishes — designed to feel
                    nothing like a typical dental visit.
                  </p>
                  <ul className="space-y-4">
                    {[
                      "Private suites with relaxing amenities",
                      "Same-day digital crowns & restorations",
                      "Sedation options for anxious patients",
                      "Family-friendly waiting lounge",
                    ].map((line, i) => (
                      <motion.li
                        key={line}
                        initial={{ opacity: 0, x: 18 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.15 + i * 0.08 }}
                        className="flex items-start gap-3 text-slate-700"
                      >
                        <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#EAF7FA] text-[#2EB6CC]">
                          <FiCheck size={14} />
                        </span>
                        <span className="text-sm sm:text-base">{line}</span>
                      </motion.li>
                    ))}
                  </ul>
                  <div className="mt-8 flex items-center gap-3 text-sm text-slate-500">
                    <FiMapPin className="text-[#2E6BE6]" />
                    <span>McKinney, TX — easy parking, family-friendly</span>
                  </div>
                </div>
              </motion.div>
            )}

            {active === "call" && (
              <motion.div
                key="call"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col items-center justify-center text-center py-10"
              >
                <div className="grid h-16 w-16 sm:h-20 sm:w-20 place-items-center rounded-xl bg-[#2E6BE6] text-white shadow-lg mb-8">
                  <FiPhone size={28} className="sm:scale-125" />
                </div>
                <a
                  href="tel:+19728336825"
                  className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#333] hover:text-[#2E6BE6] transition-colors"
                >
                  Call Us Now: (972) 833-6825
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

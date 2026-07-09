import { motion } from "framer-motion";
import { FiActivity } from "react-icons/fi";

const LOGOS = [
  {
    name: "X-Nav Technologies",
    content: (
      <span className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
        <span className="text-[#8BC34A]">X</span>
        <span className="text-[#0F4C81]">-NAV</span>
      </span>
    )
  },
  {
    name: "Invisalign Certified Provider",
    content: (
      <div className="flex flex-col items-center">
        <span className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0F4C81]">
          invisalign<span className="text-xl align-top">&reg;</span>
        </span>
        <span className="text-[#64748b] text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase mt-1">Provider</span>
      </div>
    )
  },
  {
    name: "Clear Aligners",
    content: (
      <div className="flex flex-col items-center justify-center h-full">
        <span className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#0F4C81] leading-none">
          Clear<span className="text-[#8BC34A] block sm:inline sm:ml-2">Aligners</span>
        </span>
      </div>
    )
  },
];

const STATS = [
  { num: "6+", label: "Expert Professionals" },
  { num: "15+", label: "Years of Experience" },
  { num: "3k+", label: "Satisfied Patients" },
];

export function TimeYouNeed() {
  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-28">
      {/* heartbeat watermark */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-10 mx-auto flex justify-center opacity-[0.06]">
        <FiActivity size={260} className="text-[#0F4C81]" />
      </div>

      <div className="container-x relative">
        {/* Logos row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 items-center justify-items-center gap-10 sm:gap-16 mb-20">
          {LOGOS.map((logo, i) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ 
                scale: 1.1, 
                y: -5, 
                rotateY: 15, 
                rotateX: 10,
                transition: { type: "spring", stiffness: 300, damping: 15, delay: 0 } 
              }}
              className={`group relative ${i === 2 ? "col-span-2 sm:col-span-1" : ""}`}
              style={{ perspective: 1000 }}
            >
              <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-[#EAF7FA] to-transparent opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
              <div className="flex items-center justify-center grayscale opacity-70 transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100 min-h-[80px]">
                {logo.content}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#1f2937] leading-[1.08]">
            We take <span className="text-[#2E6BE6] italic font-serif">the time</span> you need
          </h2>
          <p className="mt-5 text-base sm:text-lg text-slate-500">
            Innovative practice with over 15 years of work
          </p>
        </motion.div>

        {/* Stats */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              <div
                className="relative overflow-hidden rounded-2xl px-8 py-12 sm:py-16 text-center shadow-[0_18px_40px_-18px_rgba(46,107,230,0.55)] transition-all duration-500 group-hover:shadow-[0_28px_60px_-20px_rgba(46,107,230,0.7)]"
                style={{
                  background:
                    "linear-gradient(135deg, #3A7BE8 0%, #2E6BE6 50%, #1E4FB8 100%)",
                }}
              >
                {/* doctor silhouette wash */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-30 mix-blend-overlay"
                  style={{
                    backgroundImage:
                      "url('http://mckinneyddscenter.com/wp-content/uploads/2021/11/7F8A4027_1-1.png')",
                  }}
                />
                {/* shine sweep */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute -inset-y-2 -left-1/3 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-0 transition-all duration-700 group-hover:left-[110%] group-hover:opacity-100"
                />
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: i * 0.12 + 0.2, type: "spring", stiffness: 120 }}
                  className="relative font-display text-6xl sm:text-7xl lg:text-8xl font-light text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.2)]"
                >
                  {s.num}
                </motion.div>
              </div>
              <div className="mt-5 text-center text-base sm:text-lg font-medium text-[#2E6BE6] tracking-wide">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

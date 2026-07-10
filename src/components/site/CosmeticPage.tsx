import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  FiStar,
  FiAward,
  FiHeart,
  FiCheckCircle,
  FiArrowUpRight,
  FiPhone,
  FiChevronDown,
  FiSun,
  FiSmile,
  FiShield,
  FiClock,
} from "react-icons/fi";
import cosmeticHero from "@/assets/cosmetic-hero.jpg";
import veneersImg from "@/assets/proc.png";
import crownImg from "@/assets/images.jpg";
import makeoverImg from "@/assets/smile-makeover.jpg";
import whiteningImg from "@/assets/proffesiona.jpg";

const TREATMENTS = [
  {
    icon: FiStar,
    title: "Porcelain Veneers",
    desc: "Ultra-thin, hand-crafted ceramic shells that reshape, brighten, and perfect your smile with natural brilliance.",
    img: veneersImg,
    tag: "Signature",
  },
  {
    icon: FiShield,
    title: "Cosmetic Crowns",
    desc: "Zirconia and E-max crowns engineered for strength, translucency, and a flawless aesthetic finish.",
    img: crownImg,
    tag: "Restorative",
  },
  {
    icon: FiSmile,
    title: "Smile Makeovers",
    desc: "A fully personalized treatment plan combining veneers, professional whitening, and precise contouring.",
    img: makeoverImg,
    tag: "Full Design",
  },
];

const BENEFITS = [
  { icon: FiAward, title: "Artistry-Led Design", desc: "Each smile is sculpted by hand with the precision of a master ceramist." },
  { icon: FiSun, title: "Natural Brilliance", desc: "Layered porcelain mimics real enamel — never flat, never fake." },
  { icon: FiHeart, title: "Confidence That Lasts", desc: "Premium materials engineered for 15+ years of beautiful wear." },
  { icon: FiClock, title: "Two-Visit Process", desc: "Most full-smile transformations are completed in just two appointments." },
];

const FAQS = [
  {
    q: "How long do porcelain veneers last?",
    a: "With proper care, premium porcelain veneers last 15–20 years. We use the highest-grade ceramics bonded with precision adhesives for long-term durability.",
  },
  {
    q: "Will veneers look natural?",
    a: "Absolutely. Every veneer is custom-layered in our master ceramist's studio to match your facial features, skin tone, and personality.",
  },
  {
    q: "Is the procedure painful?",
    a: "No. The process is comfortable and minimally invasive. Most patients describe it as easier than a routine cleaning.",
  },
  {
    q: "What's the investment for a smile makeover?",
    a: "Investments vary based on your custom plan. We offer transparent pricing and flexible financing during your complimentary consultation.",
  },
];

export function CosmeticPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0B2F5C] via-[#143F7A] to-[#1B4A8F]">
        <div
          aria-hidden
          className="absolute -right-32 -top-32 h-[520px] w-[520px] rounded-full"
          style={{ background: "radial-gradient(closest-side, rgba(46,182,204,0.28), transparent)" }}
        />
        <div
          aria-hidden
          className="absolute -left-32 bottom-0 h-[420px] w-[420px] rounded-full"
          style={{ background: "radial-gradient(closest-side, rgba(233,199,123,0.18), transparent)" }}
        />
        <div className="container-x relative py-20 lg:py-28">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 text-white">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 backdrop-blur px-4 py-1.5 text-[12px] font-semibold tracking-[0.18em] uppercase text-[#E9C77B]"
              >
                <FiStar /> Luxury Cosmetic Dentistry
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mt-6 font-display text-5xl sm:text-6xl lg:text-[72px] font-semibold leading-[1.02] text-white"
              >
                The Art of a{" "}
                <span className="italic font-serif text-[#E9C77B]">Flawless</span>
                <br /> Smile.
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-6 max-w-xl text-[16px] leading-relaxed text-white/80"
              >
                Hand-crafted porcelain veneers, premium crowns, and full smile makeovers —
                designed in-house at McKinney's most trusted cosmetic dental studio.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-9 flex flex-wrap gap-3"
              >
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 rounded-full pl-6 pr-2 py-2.5 text-sm font-semibold text-[#0B2F5C] bg-[#E9C77B] hover:bg-white transition-colors"
                >
                  Book Smile Consultation
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-[#0B2F5C] text-white group-hover:rotate-45 transition-transform">
                    <FiArrowUpRight />
                  </span>
                </Link>
                <a
                  href="tel:+19728336825"
                  className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white border border-white/30 hover:border-[#E9C77B] hover:text-[#E9C77B] transition-colors"
                >
                  <FiPhone /> (972) 833-6825
                </a>
              </motion.div>

              <div className="mt-12 grid grid-cols-3 gap-6 max-w-lg">
                {[
                  { v: "1,200+", l: "Smiles Designed" },
                  { v: "15+", l: "Years Mastery" },
                  { v: "98%", l: "Patient Love" },
                ].map((s) => (
                  <div key={s.l}>
                    <div className="font-display text-3xl font-semibold text-[#E9C77B]">{s.v}</div>
                    <div className="text-[12px] uppercase tracking-wider text-white/60 mt-1">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative rounded-[32px] overflow-hidden shadow-[0_40px_80px_-30px_rgba(0,0,0,0.6)] border border-white/10 group">
                <img src="https://dentakademiglobal.com/wp-content/uploads/2024/12/smile-design.webp" alt="Radiant cosmetic dentistry smile" className="w-full h-[520px] object-cover transition-transform duration-[1200ms] group-hover:scale-[1.03]" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2F5C]/60 via-[#0B2F5C]/10 to-transparent" />
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute -bottom-6 -left-6 bg-white rounded-[24px] p-6 shadow-[0_20px_50px_-20px_rgba(11,47,92,0.4)] max-w-[250px] hidden sm:block border border-[#E5ECF3]"
              >
                <div className="flex items-center gap-1 text-[#E9C77B] mb-3">
                  {[...Array(5)].map((_, i) => <FiStar key={i} className="fill-current" />)}
                </div>
                <p className="text-[13.5px] text-[#5A6B82] leading-relaxed font-light">
                  "Best decision I've ever made. My smile is exactly what I dreamed of."
                </p>
                <div className="text-[12.5px] font-semibold text-[#0B2F5C] mt-3">— Sarah M., McKinney</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-[#F8FAFC] py-24">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#EAF6F9] text-[#0B2F5C] px-4 py-1.5 text-[12px] font-semibold tracking-[0.18em] uppercase shadow-sm">
              Why McKinney Dental
            </span>
            <h2 className="mt-6 font-display text-[38px] sm:text-[46px] font-semibold text-[#0B2F5C] leading-tight">
              Where <span className="italic font-serif text-[#1B4A8F]">precision</span> meets artistry.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {BENEFITS.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-[24px] bg-white border border-[#E5ECF3] p-8 shadow-[0_15px_40px_-20px_rgba(11,47,92,0.1)] hover:shadow-[0_25px_50px_-20px_rgba(11,47,92,0.15)] transition-all duration-300 hover:-translate-y-2 group"
              >
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-[#EAF6F9] to-[#D5EDF3] text-[#1B4A8F] mb-6 group-hover:scale-110 transition-transform duration-500">
                  <b.icon className="text-2xl" />
                </span>
                <h3 className="font-display text-[20px] font-semibold text-[#0B2F5C]">{b.title}</h3>
                <p className="mt-3 text-[14.5px] text-[#5A6B82] leading-relaxed font-light">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TREATMENTS */}
      <section className="bg-white py-24">
        <div className="container-x">
          <div className="grid lg:grid-cols-12 gap-10 items-end mb-16">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#EAF6F9] text-[#0B2F5C] px-4 py-1.5 text-[12px] font-semibold tracking-[0.18em] uppercase shadow-sm">
                Our Signature Treatments
              </span>
              <h2 className="mt-6 font-display text-[38px] sm:text-[46px] font-semibold text-[#0B2F5C] leading-[1.05]">
                Designed for{" "}
                <span className="italic font-serif text-[#1B4A8F]">you</span>. Crafted by hand.
              </h2>
            </div>
            <p className="lg:col-span-5 text-[16px] text-[#5A6B82] leading-relaxed font-light">
              Every smile begins with a 3D digital preview so you can see your transformation
              before treatment begins. No surprises — only artistry.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {TREATMENTS.map((t, i) => (
              <motion.article
                key={t.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-[28px] bg-white border border-[#E5ECF3] shadow-[0_15px_40px_-20px_rgba(11,47,92,0.1)] hover:shadow-[0_25px_50px_-20px_rgba(11,47,92,0.2)] transition-all duration-300 hover:-translate-y-2 flex flex-col"
              >
                <div className="relative h-[280px] overflow-hidden">
                  <img
                    src={t.img}
                    alt={t.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                  />
                  <div className="absolute top-5 left-5">
                    <span className="rounded-full bg-white/95 backdrop-blur-md px-4 py-1.5 text-[11px] font-bold text-[#0B2F5C] tracking-[0.1em] shadow-sm uppercase">
                      {t.tag}
                    </span>
                  </div>
                </div>
                <div className="p-8 flex-grow flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <div>
                        <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#EAF6F9] text-[#1B4A8F] mb-5">
                          <t.icon className="text-xl" />
                        </span>
                        <h3 className="font-display text-[22px] font-semibold text-[#0B2F5C]">{t.title}</h3>
                      </div>
                    </div>
                    <p className="text-[14.5px] text-[#5A6B82] leading-[1.7] font-light">{t.desc}</p>
                  </div>
                  <Link
                    to="/contact"
                    className="mt-6 inline-flex items-center gap-2 text-[13px] font-semibold text-[#1B4A8F] hover:text-[#2EB6CC] transition-colors uppercase tracking-wider"
                  >
                    Learn More <FiArrowUpRight className="text-base" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* TEETH WHITENING */}
      <section className="bg-gradient-to-b from-white to-[#F8FBFD] py-20">
        <div className="container-x">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-[#EAF6F9] text-[#0B2F5C] px-4 py-1.5 text-[12px] font-semibold tracking-[0.18em] uppercase">
                Brighter Smiles
              </span>
              <h2 className="mt-5 font-display text-4xl sm:text-5xl font-semibold text-[#0B2F5C] leading-[1.05]">
                Professional{" "}
                <span className="italic font-serif text-[#1B4A8F]">Teeth Whitening</span>
              </h2>
              <p className="mt-5 text-[15px] text-[#5A6B82] leading-relaxed max-w-md">
                Erase years of stains in a single visit with clinically-proven whitening technology. Our in-office system delivers dramatic results safely, comfortably, and fast.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Up to 8 shades lighter in one session",
                  "Clinically-proven LED-activated formula",
                  "Sensitivity-free comfort protocol",
                  "Long-lasting results with proper care",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[14px] text-[#5A6B82]">
                    <FiCheckCircle className="text-[#2EB6CC] mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative rounded-[22px] overflow-hidden shadow-[0_22px_55px_-28px_rgba(11,47,92,0.4)]"
            >
              <img
                src={whiteningImg}
                alt="Professional teeth whitening treatment"
                className="w-full h-[380px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2F5C]/30 to-transparent" />
            </motion.div>
          </div>

          {/* ZOOM Logo */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-16 flex flex-col items-center justify-center gap-3"
          >
            <p className="text-[12px] font-semibold tracking-[0.2em] uppercase text-[#5A6B82]">
              Powered by
            </p>
            <svg viewBox="0 0 260 70" className="h-10 sm:h-12 w-auto" xmlns="http://www.w3.org/2000/svg">
              <text x="130" y="26" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="700" fill="#0B2F5C" letterSpacing="2">PHILIPS</text>
              <text x="130" y="58" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="32" fontWeight="900" fill="#0B2F5C" letterSpacing="1">z<tspan fill="#E9C77B">o</tspan><tspan fill="#0B2F5C">om</tspan></text>
            </svg>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20">
        <div className="container-x">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#EAF6F9] text-[#0B2F5C] px-4 py-1.5 text-[12px] font-semibold tracking-[0.18em] uppercase">
                Common Questions
              </span>
              <h2 className="mt-5 font-display text-4xl sm:text-5xl font-semibold text-[#0B2F5C] leading-[1.05]">
                Everything you want to{" "}
                <span className="italic font-serif text-[#1B4A8F]">know</span>.
              </h2>
              <p className="mt-5 text-[15px] text-[#5A6B82] leading-relaxed">
                Considering veneers or a full smile makeover? Here's what our patients ask most.
              </p>
              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-2 text-[14px] font-semibold text-[#1B4A8F] hover:text-[#2EB6CC] transition-colors"
              >
                Have another question? Ask us <FiArrowUpRight />
              </Link>
            </div>

            <div className="lg:col-span-7 space-y-3">
              {FAQS.map((f, i) => {
                const open = openFaq === i;
                return (
                  <motion.div
                    key={f.q}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                    className="rounded-2xl border border-[#E5ECF3] bg-white overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenFaq(open ? null : i)}
                      className="w-full flex items-center justify-between gap-4 p-5 text-left"
                    >
                      <span className="font-display text-[17px] font-semibold text-[#0B2F5C]">{f.q}</span>
                      <FiChevronDown className={`text-[#1B4A8F] flex-shrink-0 transition-transform ${open ? "rotate-180" : ""}`} />
                    </button>
                    <motion.div
                      initial={false}
                      animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 text-[14.5px] text-[#5A6B82] leading-relaxed">{f.a}</div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white pb-20">
        <div className="container-x">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-[#0B2F5C] via-[#143F7A] to-[#1B4A8F] px-8 sm:px-14 py-14"
          >
            <div
              aria-hidden
              className="absolute -right-24 -top-24 h-72 w-72 rounded-full"
              style={{ background: "radial-gradient(closest-side, rgba(233,199,123,0.35), transparent)" }}
            />
            <div className="relative grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight">
                  Ready to design{" "}
                  <span className="italic font-serif text-[#E9C77B]">your</span> dream smile?
                </h3>
                <p className="mt-3 text-white/75 max-w-lg text-[15px]">
                  Book a complimentary cosmetic consultation. See a 3D preview of your new smile
                  before treatment begins.
                </p>
                <div className="mt-5 flex flex-wrap gap-4 text-white/80 text-[13px]">
                  <span className="inline-flex items-center gap-1.5"><FiCheckCircle className="text-[#E9C77B]" /> Free Consultation</span>
                  <span className="inline-flex items-center gap-1.5"><FiCheckCircle className="text-[#E9C77B]" /> Flexible Financing</span>
                  <span className="inline-flex items-center gap-1.5"><FiCheckCircle className="text-[#E9C77B]" /> 3D Smile Preview</span>
                </div>
              </div>
              <div className="flex flex-wrap lg:justify-end gap-3">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 rounded-full pl-6 pr-2 py-2.5 text-sm font-semibold text-[#0B2F5C] bg-[#E9C77B] hover:bg-white transition-colors"
                >
                  Book Consultation
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-[#0B2F5C] text-white group-hover:rotate-45 transition-transform">
                    <FiArrowUpRight />
                  </span>
                </Link>
                <a
                  href="tel:+19728336825"
                  className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white border border-white/30 hover:border-[#E9C77B] hover:text-[#E9C77B] transition-colors"
                >
                  <FiPhone /> (972) 833-6825
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

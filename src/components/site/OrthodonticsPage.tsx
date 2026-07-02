import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  FiCheck,
  FiClock,
  FiSmile,
  FiShield,
  FiAward,
  FiArrowUpRight,
  FiChevronDown,
  FiStar,
  FiHeart,
  FiCalendar,
  FiActivity,
} from "react-icons/fi";
import g1Asset from "@/assets/gallery-1.png.asset.json";
import g2Asset from "@/assets/gallery-2.png.asset.json";
import g3Asset from "@/assets/gallery-3.png.asset.json";
const g1 = g1Asset.url;
const g2 = g2Asset.url;
const g3 = g3Asset.url;
import HERO_IMG from "@/assets/ortho-hero.jpg";
import ALIGNER_IMG from "@/assets/ortho-aligner.jpg";
import CONSULT_IMG from "@/assets/ortho-consult.jpg";
import SMILE_IMG from "@/assets/ortho-smile.jpg";

const BENEFITS = [
  { icon: FiSmile, title: "Virtually Invisible", desc: "Clear aligners that go unnoticed in everyday life and on camera." },
  { icon: FiShield, title: "Comfortable Fit", desc: "Smooth, BPA-free medical-grade plastic — no brackets, no wires." },
  { icon: FiClock, title: "Faster Results", desc: "Most cases complete in 6–18 months with predictable progress." },
  { icon: FiHeart, title: "Removable", desc: "Eat, brush, and floss naturally. No food restrictions." },
  { icon: FiActivity, title: "3D Treatment Preview", desc: "See your future smile before treatment even begins." },
  { icon: FiAward, title: "Diamond Provider Care", desc: "Guided by experienced orthodontic clinicians at McKinney Dental." },
];

const STEPS = [
  { n: "01", title: "Smile Consultation", desc: "Complimentary exam, digital records and a customized treatment discussion." },
  { n: "02", title: "3D iTero Scan", desc: "Quick, radiation-free digital impressions — no messy molds." },
  { n: "03", title: "Custom Aligner Plan", desc: "Your aligners are precision-crafted from our doctor-designed treatment plan." },
  { n: "04", title: "Wear & Progress Checks", desc: "Switch trays every 1–2 weeks. Short check-ins every 6–8 weeks." },
  { n: "05", title: "Reveal & Retain", desc: "Reveal your new smile, then protect it with custom retainers." },
];

const RESULTS = [
  { src: g1, label: "Crowding Correction", time: "9 months" },
  { src: g2, label: "Spacing & Alignment", time: "11 months" },
  { src: g3, label: "Bite Refinement", time: "7 months" },
];

const FAQS = [
  { q: "How long does Invisalign treatment take?", a: "Most adults complete treatment in 6 to 18 months. Your custom plan will give you an accurate timeline at your consultation." },
  { q: "Does it hurt?", a: "Aligners are far more comfortable than braces. You may feel mild pressure for a day or two with each new tray — a sign your smile is moving." },
  { q: "How many hours a day do I wear them?", a: "For best results, wear your aligners 20–22 hours a day, removing them only to eat, drink anything but water, and brush." },
  { q: "Is Invisalign covered by insurance?", a: "Many PPO plans include orthodontic benefits. Our team verifies your coverage and offers transparent monthly financing." },
  { q: "Can teens get Invisalign?", a: "Yes — Invisalign Teen includes compliance indicators and replacement aligners designed for growing smiles." },
];

export function OrthodonticsPage() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="bg-[#F6F1E8]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0B2F5C] via-[#103a70] to-[#1B4A8F] text-white">

        <div
          aria-hidden
          className="absolute -top-32 -right-32 h-[480px] w-[480px] rounded-full"
          style={{ background: "radial-gradient(closest-side, rgba(46,182,204,0.18), transparent)" }}
        />
        <div
          aria-hidden
          className="absolute -bottom-40 -left-32 h-[520px] w-[520px] rounded-full"
          style={{ background: "radial-gradient(closest-side, rgba(11,47,92,0.10), transparent)" }}
        />
        <div className="container-x relative py-16 sm:py-24 lg:py-28 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 backdrop-blur px-4 py-1.5 text-[12px] font-semibold tracking-[0.18em] uppercase text-white shadow-sm"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#E9C77B]" />
              Invisalign® · Clear Aligners
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.05 }}
              className="mt-6 font-display text-[40px] sm:text-5xl lg:text-[60px] leading-[1.05] font-semibold text-white"
            >
              A Straighter Smile,{" "}
              <span className="italic font-serif text-[#E9C77B]">Quietly</span> Crafted.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="mt-5 max-w-xl text-[16px] leading-relaxed text-white/75"
            >
              Modern, comfortable, virtually invisible orthodontics for adults and teens — designed
              with precision 3D planning right here at McKinney Dental & Implant Center.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.15 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full pl-6 pr-2 py-2.5 text-sm font-semibold text-[#0B2F5C] bg-gradient-to-r from-[#E9C77B] to-[#F3D88F] hover:shadow-[0_18px_40px_-18px_rgba(233,199,123,0.7)] transition-shadow"
              >
                Book Free Consultation
                <span className="grid h-9 w-9 place-items-center rounded-full bg-[#0B2F5C] text-white group-hover:rotate-45 transition-transform">
                  <FiArrowUpRight />
                </span>
              </Link>
              <a
                href="tel:+19728336825"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white border border-white/30 hover:border-[#E9C77B] hover:text-[#E9C77B] transition-colors"
              >
                (972) 833-6825
              </a>
            </motion.div>

            <div className="mt-10 grid grid-cols-3 max-w-md gap-6">
              {[
                { v: "1,200+", l: "Smiles Aligned" },
                { v: "98%", l: "Patient Approval" },
                { v: "15+", l: "Years Experience" },
              ].map((s, i) => (
                <motion.div
                  key={s.l}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
                >
                  <div className="font-display text-2xl font-semibold text-white">{s.v}</div>
                  <div className="text-[11.5px] uppercase tracking-wider text-white/55 mt-0.5">{s.l}</div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-[28px] overflow-hidden shadow-[0_40px_80px_-30px_rgba(11,47,92,0.45)]">
              <img src={HERO_IMG} alt="Smiling patient with clear aligners" className="w-full h-[460px] sm:h-[540px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0B2F5C]/35 via-transparent to-transparent" />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-6 -left-4 sm:left-6 bg-white rounded-2xl shadow-[0_22px_50px_-24px_rgba(11,47,92,0.55)] border border-[#E5ECF3] p-4 flex items-center gap-3"
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-[#0B2F5C] to-[#1B4A8F] text-white">
                <FiStar />
              </span>
              <div>
                <div className="font-semibold text-[#0B2F5C] text-sm">Top Invisalign Provider</div>
                <div className="text-[12px] text-[#6B7C95]">McKinney, TX · 5.0 ★ patient reviews</div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="hidden sm:flex absolute -top-6 -right-4 bg-[#0B2F5C] text-white rounded-2xl px-5 py-4 shadow-xl items-center gap-3"
            >
              <FiCalendar />
              <div className="text-xs">
                <div className="font-semibold">Same-week consults</div>
                <div className="opacity-75">Mon — Fri</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-20 sm:py-24">
        <div className="container-x">
          <div className="max-w-2xl mb-12">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#EAF6F9] px-4 py-1.5 text-[12px] font-semibold tracking-[0.18em] uppercase text-[#0B2F5C]">
              Why Invisalign
            </span>
            <h2 className="mt-5 font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#0B2F5C] leading-tight">
              Designed for the way you{" "}
              <span className="italic font-serif text-[#1B4A8F]">live</span>.
            </h2>
            <p className="mt-4 text-[15.5px] text-[#5A6B82]">
              Clear aligners are the modern alternative to traditional braces — discreet, comfortable
              and tailored entirely to your smile.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {BENEFITS.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                whileHover={{ y: -6 }}
                className="group rounded-2xl bg-white border border-[#E5ECF3] p-7 shadow-[0_18px_40px_-26px_rgba(11,47,92,0.35)] hover:shadow-[0_30px_55px_-28px_rgba(11,47,92,0.5)] transition-shadow"
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-[#EAF6F9] to-white text-[#2EB6CC] border border-[#E5ECF3] group-hover:from-[#0B2F5C] group-hover:to-[#1B4A8F] group-hover:text-white transition-colors">
                  <b.icon className="text-xl" />
                </span>
                <h3 className="mt-5 font-display text-[19px] font-semibold text-[#0B2F5C]">{b.title}</h3>
                <p className="mt-2 text-[14px] text-[#6B7C95] leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS TIMELINE */}
      <section className="py-20 sm:py-24 bg-gradient-to-b from-[#EFE6D4] via-[#F2EBDC] to-[#F6F1E8]">
        <div className="container-x">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <span className="inline-flex items-center gap-2 rounded-full bg-white border border-[#E5ECF3] px-4 py-1.5 text-[12px] font-semibold tracking-[0.18em] uppercase text-[#0B2F5C]">
                Your Journey
              </span>
              <h2 className="mt-5 font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#0B2F5C] leading-tight">
                A clear path to your{" "}
                <span className="italic font-serif text-[#1B4A8F]">best</span> smile.
              </h2>
              <p className="mt-4 text-[15.5px] text-[#5A6B82] max-w-md">
                From your first scan to the final reveal — every step is digital, predictable, and
                doctor-guided.
              </p>
              <div className="mt-8 rounded-2xl overflow-hidden border border-[#E5ECF3] shadow-[0_22px_50px_-26px_rgba(11,47,92,0.4)]">
                <img src={CONSULT_IMG} alt="Doctor consultation" className="w-full h-64 object-cover" />
              </div>
            </div>

            <div className="lg:col-span-7 relative">
              <div className="absolute left-[27px] top-2 bottom-2 w-px bg-gradient-to-b from-[#2EB6CC] via-[#1B4A8F] to-transparent" />
              <div className="space-y-6">
                {STEPS.map((s, i) => (
                  <motion.div
                    key={s.n}
                    initial={{ opacity: 0, x: 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    className="relative pl-20"
                  >
                    <span className="absolute left-0 top-0 grid h-14 w-14 place-items-center rounded-full bg-white border border-[#E5ECF3] shadow-md font-display text-[#0B2F5C] font-semibold">
                      {s.n}
                    </span>
                    <div className="rounded-2xl bg-white border border-[#E5ECF3] p-6 shadow-[0_18px_40px_-26px_rgba(11,47,92,0.35)]">
                      <h3 className="font-display text-[20px] font-semibold text-[#0B2F5C]">{s.title}</h3>
                      <p className="mt-2 text-[14.5px] text-[#6B7C95] leading-relaxed">{s.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ALIGNER FEATURE */}
      <section className="py-20 sm:py-24">
        <div className="container-x">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="rounded-[28px] overflow-hidden shadow-[0_40px_80px_-30px_rgba(11,47,92,0.45)]">
                <img src={ALIGNER_IMG} alt="Clear aligners on display" className="w-full h-[480px] object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-4 sm:right-6 bg-white border border-[#E5ECF3] rounded-2xl p-5 shadow-xl max-w-[240px]">
                <div className="text-3xl font-display font-semibold text-[#0B2F5C]">
                  20–22<span className="text-base text-[#6B7C95] font-normal"> hrs</span>
                </div>
                <div className="text-xs text-[#6B7C95] mt-1">Daily wear for fastest results</div>
              </div>
            </motion.div>

            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-[#EAF6F9] px-4 py-1.5 text-[12px] font-semibold tracking-[0.18em] uppercase text-[#0B2F5C]">
                Premium Care
              </span>
              <h2 className="mt-5 font-display text-3xl sm:text-4xl lg:text-[44px] font-semibold text-[#0B2F5C] leading-tight">
                The most advanced{" "}
                <span className="italic font-serif text-[#1B4A8F]">clear aligner</span> system.
              </h2>
              <p className="mt-4 text-[15.5px] text-[#5A6B82]">
                SmartTrack® material applies gentle, continuous force for predictable tooth movement —
                planned by your doctor and visualized in 3D before you begin.
              </p>
              <ul className="mt-7 space-y-3">
                {[
                  "Complimentary smile consultation & 3D preview",
                  "Treats crowding, spacing, overbite, underbite & crossbite",
                  "Compatible with whitening for a brighter finish",
                  "Flexible monthly financing — 0% APR available",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <span className="mt-0.5 grid h-6 w-6 place-items-center rounded-md bg-[#2EB6CC]/15 text-[#2EB6CC]">
                      <FiCheck />
                    </span>
                    <span className="text-[14.5px] text-[#3F4B5C]">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* BEFORE/AFTER */}
      <section className="py-20 sm:py-24 bg-gradient-to-b from-[#F6F1E8] via-[#EFE6D4] to-[#F6F1E8]">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-flex items-center gap-2 rounded-full bg-white border border-[#E5ECF3] px-4 py-1.5 text-[12px] font-semibold tracking-[0.18em] uppercase text-[#0B2F5C]">
              Real Results
            </span>
            <h2 className="mt-5 font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#0B2F5C] leading-tight">
              Smiles transformed at{" "}
              <span className="italic font-serif text-[#1B4A8F]">McKinney Dental</span>.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {RESULTS.map((r, i) => (
              <motion.article
                key={r.label}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -8 }}
                className="group rounded-[22px] overflow-hidden bg-white border border-[#E5ECF3] shadow-[0_22px_55px_-28px_rgba(11,47,92,0.45)] hover:shadow-[0_30px_65px_-26px_rgba(11,47,92,0.55)] transition-shadow"
              >
                <div className="overflow-hidden">
                  <img
                    src={r.src}
                    alt={r.label}
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-5 flex items-center justify-between">
                  <div>
                    <h3 className="font-display text-[17px] font-semibold text-[#0B2F5C]">{r.label}</h3>
                    <p className="text-[12px] text-[#6B7C95] mt-0.5">Treatment · {r.time}</p>
                  </div>
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-[#EAF6F9] text-[#2EB6CC] group-hover:bg-[#2EB6CC] group-hover:text-white transition-colors">
                    <FiArrowUpRight />
                  </span>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#0B2F5C] hover:text-[#2EB6CC] transition-colors"
            >
              View the full smile gallery <FiArrowUpRight />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 sm:py-24">
        <div className="container-x grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#EAF6F9] px-4 py-1.5 text-[12px] font-semibold tracking-[0.18em] uppercase text-[#0B2F5C]">
              FAQ
            </span>
            <h2 className="mt-5 font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#0B2F5C] leading-tight">
              Questions, <span className="italic font-serif text-[#1B4A8F]">answered</span>.
            </h2>
            <p className="mt-4 text-[15.5px] text-[#5A6B82] max-w-md">
              Still curious? Our orthodontic team is happy to walk you through every detail at your
              complimentary consultation.
            </p>
            <div className="mt-8 rounded-2xl overflow-hidden border border-[#E5ECF3] shadow-md">
              <img src={SMILE_IMG} alt="Patient smiling" className="w-full h-64 object-cover" />
            </div>
          </div>

          <div className="lg:col-span-7 space-y-3">
            {FAQS.map((f, i) => {
              const isOpen = open === i;
              return (
                <motion.div
                  key={f.q}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="rounded-2xl bg-white border border-[#E5ECF3] overflow-hidden shadow-[0_14px_36px_-26px_rgba(11,47,92,0.35)]"
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left cursor-pointer"
                  >
                    <span className="font-display text-[17px] font-semibold text-[#0B2F5C]">{f.q}</span>
                    <span
                      className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border border-[#E5ECF3] text-[#0B2F5C] transition-transform ${
                        isOpen ? "rotate-180 bg-[#0B2F5C] text-white border-[#0B2F5C]" : ""
                      }`}
                    >
                      <FiChevronDown />
                    </span>
                  </button>
                  <motion.div
                    initial={false}
                    animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 sm:px-6 pb-6 text-[14.5px] text-[#6B7C95] leading-relaxed">{f.a}</p>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="container-x">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-[#0B2F5C] via-[#143F7A] to-[#1B4A8F] px-8 sm:px-14 py-14"
          >
            <div
              aria-hidden
              className="absolute -right-24 -top-24 h-72 w-72 rounded-full"
              style={{ background: "radial-gradient(closest-side, rgba(46,182,204,0.35), transparent)" }}
            />
            <div
              aria-hidden
              className="absolute -left-24 -bottom-24 h-72 w-72 rounded-full"
              style={{ background: "radial-gradient(closest-side, rgba(123,208,224,0.25), transparent)" }}
            />
            <div className="relative grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="font-display text-3xl sm:text-4xl lg:text-[44px] font-semibold text-white leading-tight">
                  Start your Invisalign journey{" "}
                  <span className="italic font-serif text-[#7BD0E0]">today</span>.
                </h3>
                <p className="mt-4 text-white/75 max-w-lg text-[15.5px]">
                  Complimentary consultation · 3D smile preview · Transparent pricing & financing.
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
    </div>
  );
}

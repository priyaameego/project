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
import HERO_IMG from "@/assets/craft.png";
import ALIGNER_IMG from "@/assets/ortho-aligner.jpg";
import CONSULT_IMG from "@/assets/ortho-consult.jpg";
import SMILE_IMG from "@/assets/ortho-smile.jpg";

const BENEFITS = [
  { icon: FiSmile, title: "Virtually Invisible", desc: "Custom-made clear aligners that go unnoticed in everyday life — no metal brackets or wires." },
  { icon: FiShield, title: "Comfortable Fit", desc: "Crafted from smooth, BPA-free SmartTrack® material for a snug, irritation-free experience." },
  { icon: FiHeart, title: "Removable Convenience", desc: "Enjoy all your favorite foods. Simply remove aligners to eat, brush, and floss normally." },
  { icon: FiActivity, title: "Advanced Digital Planning", desc: "3D scanning and computer modeling map out your exact treatment before it even begins." },
  { icon: FiAward, title: "Teens & Adults", desc: "Personalized care plans suitable for growing teen smiles as well as adults seeking refinement." },
  { icon: FiClock, title: "Faster Results", desc: "Predictable progress with many cases completing in 6 to 18 months under expert guidance." },
];

const STEPS = [
  { n: "01", title: "McKinney Dental Consultation", desc: "Meet with Dr. Juma for a complimentary exam and customized treatment discussion at our McKinney office." },
  { n: "02", title: "3D Digital Scanning", desc: "We use advanced 3D scanning technology at McKinney Dental to take quick, comfortable digital impressions—no messy molds." },
  { n: "03", title: "Dr. Juma's Custom Plan", desc: "Dr. Juma personally designs your treatment plan to ensure your aligners are precision-crafted for your smile." },
  { n: "04", title: "Progress Checks in McKinney", desc: "Switch your clear aligners every 1–2 weeks and visit us every 6–8 weeks for short, convenient progress checks." },
  { n: "05", title: "Reveal Your New Smile", desc: "Celebrate your new smile with the McKinney Dental team, then protect it with custom retainers." },
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
    <div className="bg-[#FAFCFF]">
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
              Modern, comfortable, virtually invisible orthodontics for adults and teens — using custom-made clear aligners to straighten teeth without metal braces.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.15 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a
                href="https://local.demandforce.com/b/mckinneydentalandimplantcenter/schedule?widget=1"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full pl-6 pr-2 py-2.5 text-sm font-semibold text-[#0B2F5C] bg-gradient-to-r from-[#E9C77B] to-[#F3D88F] hover:shadow-[0_18px_40px_-18px_rgba(233,199,123,0.7)] transition-shadow"
              >
                Book Free Consultation
                <span className="grid h-9 w-9 place-items-center rounded-full bg-[#0B2F5C] text-white group-hover:rotate-45 transition-transform">
                  <FiArrowUpRight />
                </span>
              </a>
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
          </motion.div>
        </div>
      </section>

      {/* DOCTOR CREDENTIALS */}
      <section className="py-24 overflow-hidden relative bg-white">
        {/* Background accent */}
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none" />
        
        <div className="container-x max-w-6xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-[0_20px_60px_-15px_rgba(11,47,92,0.15)] bg-slate-100 aspect-[4/5]">
                <img 
                  src="https://mckinneyddscenter.com/wp-content/uploads/2023/11/DR.-JUMA-PORTRAIT.jpg" 
                  alt="Dr. Daniel Juma" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-7"
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-[12px] font-semibold tracking-[0.18em] uppercase text-[#1B4A8F] mb-4">
                Meet Your Orthodontic Expert
              </span>
              <h2 className="text-[34px] sm:text-[44px] font-semibold text-[#0B2F5C] leading-[1.1] mb-6">
                Dr. Daniel Juma, <span className="text-[#1B4A8F] font-light">DDS</span>
              </h2>
              
              <div className="space-y-5 text-[#5A6B82] text-[16px] leading-relaxed">
                <p>
                  As an elite Platinum Invisalign Provider, Dr. Daniel Juma has successfully transformed thousands of smiles for patients across McKinney and the surrounding areas. His deep expertise in biomechanics and digital treatment planning ensures every patient receives an incredibly precise and predictable outcome.
                </p>
                <p>
                  By leveraging advanced 3D scanning and computer modeling, Dr. Juma creates custom-tailored aligner plans that straighten teeth comfortably, efficiently, and discreetly — allowing both teens and adults to achieve their dream smile without the hassle of traditional metal braces.
                </p>
              </div>

              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                {[
                  "Platinum Invisalign Certified",
                  "Advanced Digital Treatment Planning",
                  "Over 15 Years of Clinical Experience",
                  "Customized Care for Teens & Adults"
                ].map((cert, i) => (
                  <div key={i} className="flex items-center gap-3 bg-[#FAFCFF] border border-[#E5ECF3] rounded-xl p-3.5 shadow-sm">
                    <FiCheck className="text-[#1B4A8F] shrink-0 text-lg" />
                    <span className="text-[14.5px] font-medium text-[#0B2F5C]">{cert}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-24 bg-[#FAFCFF]">
        <div className="container-x">
          <div className="max-w-3xl mb-16 text-center mx-auto">
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-[12px] font-semibold tracking-[0.18em] uppercase text-[#1B4A8F]">
              Why Invisalign
            </span>
            <h2 className="mt-5 font-display text-[34px] sm:text-[44px] font-semibold text-[#0B2F5C] leading-tight">
              Designed for the way you{" "}
              <span className="italic font-serif text-[#1B4A8F]">live</span>.
            </h2>
            <p className="mt-4 text-[16px] text-[#5A6B82] max-w-2xl mx-auto">
              Clear aligners are the modern alternative to traditional braces. Discover a discreet, comfortable, and highly effective path to a straighter smile.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {BENEFITS.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                whileHover={{ y: -8 }}
                className="group relative rounded-[28px] bg-white border border-[#E5ECF3] p-8 shadow-[0_15px_40px_-20px_rgba(11,47,92,0.1)] hover:shadow-[0_25px_50px_-20px_rgba(11,47,92,0.2)] transition-all duration-500 overflow-hidden"
              >
                {/* Subtle gradient hover effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-blue-50/0 group-hover:from-blue-50/50 group-hover:to-transparent transition-colors duration-500 pointer-events-none" />
                
                <div className="relative z-10">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-[#FAFCFF] text-[#1B4A8F] border border-[#E5ECF3] group-hover:bg-[#1B4A8F] group-hover:text-white group-hover:border-transparent transition-colors duration-500 shadow-sm">
                    <b.icon className="text-[22px]" />
                  </span>
                  <h3 className="mt-6 font-display text-[22px] font-semibold text-[#0B2F5C] group-hover:text-[#1B4A8F] transition-colors">{b.title}</h3>
                  <p className="mt-3 text-[15px] text-[#6B7C95] leading-relaxed">{b.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS TIMELINE */}
      <section className="py-24 bg-white border-y border-[#E5ECF3]">
        <div className="container-x">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-[12px] font-semibold tracking-[0.18em] uppercase text-[#1B4A8F]">
                Your Journey
              </span>
              <h2 className="mt-5 font-display text-[34px] sm:text-[44px] font-semibold text-[#0B2F5C] leading-tight">
                A clear path to your{" "}
                <span className="italic font-serif text-[#1B4A8F]">best</span> smile.
              </h2>
              <p className="mt-4 text-[16px] text-[#5A6B82] max-w-md">
                From your first scan to the final reveal — every step is digital, predictable, and guided directly by Dr. Juma.
              </p>
              <div className="mt-10 rounded-[2rem] overflow-hidden border border-[#E5ECF3] shadow-[0_20px_50px_-20px_rgba(11,47,92,0.15)]">
                <img src="https://www.ccsmileswa.com/assets/images/clear-aligners-1.jpg" alt="Clear aligners treatment" className="w-full h-72 object-cover" />
              </div>
            </div>

            <div className="lg:col-span-7 relative pt-4">
              <div className="absolute left-[31px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-[#1B4A8F] via-[#1B4A8F]/30 to-transparent" />
              <div className="space-y-10">
                {STEPS.map((s, i) => (
                  <motion.div
                    key={s.n}
                    initial={{ opacity: 0, x: 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    className="relative pl-24 group"
                  >
                    <span className="absolute left-0 top-1 grid h-16 w-16 place-items-center rounded-full bg-white border-2 border-[#1B4A8F] shadow-[0_10px_20px_-10px_rgba(27,74,143,0.3)] font-display text-[#1B4A8F] text-lg font-bold group-hover:bg-[#1B4A8F] group-hover:text-white transition-colors duration-300">
                      {s.n}
                    </span>
                    <div className="rounded-[24px] bg-[#FAFCFF] border border-[#E5ECF3] p-7 shadow-sm group-hover:shadow-[0_15px_30px_-15px_rgba(11,47,92,0.1)] transition-shadow duration-300">
                      <h3 className="font-display text-[22px] font-semibold text-[#0B2F5C]">{s.title}</h3>
                      <p className="mt-2 text-[15.5px] text-[#6B7C95] leading-relaxed">{s.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#FAFCFF]">
        <div className="container-x max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-[#0B2F5C] via-[#103a70] to-[#1B4A8F] px-8 sm:px-16 py-16 sm:py-20 text-center shadow-[0_30px_60px_-15px_rgba(11,47,92,0.3)]"
          >
            <div
              aria-hidden
              className="absolute -right-32 -top-32 h-96 w-96 rounded-full"
              style={{ background: "radial-gradient(closest-side, rgba(46,182,204,0.25), transparent)" }}
            />
            <div
              aria-hidden
              className="absolute -left-32 -bottom-32 h-96 w-96 rounded-full"
              style={{ background: "radial-gradient(closest-side, rgba(233,199,123,0.15), transparent)" }}
            />
            <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 backdrop-blur px-4 py-1.5 text-[12px] font-semibold tracking-[0.18em] uppercase text-white shadow-sm mb-6">
                Take the First Step
              </span>
              <h3 className="font-display text-[36px] sm:text-[48px] font-semibold text-white leading-[1.1] tracking-tight">
                Schedule your <span className="italic font-serif text-[#E9C77B]">Invisalign</span> consultation today.
              </h3>
              <p className="mt-6 text-white/80 text-[16px] leading-relaxed">
                Join the thousands of patients who have achieved their dream smiles with Dr. Juma. Let’s map out a customized treatment plan that works for your goals and lifestyle.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <a
                  href="https://local.demandforce.com/b/mckinneydentalandimplantcenter/schedule?widget=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 rounded-full px-10 py-4 text-[15px] tracking-wide font-semibold text-[#0B2F5C] bg-white hover:bg-[#F3D88F] hover:shadow-[0_15px_30px_-10px_rgba(233,199,123,0.4)] transition-all duration-300 inline-block"
                >
                  Book My Consultation
                </a>
                <a
                  href="tel:+19728336825"
                  className="inline-flex items-center justify-center gap-2 rounded-full px-10 py-4 text-[15px] tracking-wide font-semibold text-white border-2 border-white/30 hover:border-white transition-all duration-300"
                >
                  Call (972) 833-6825
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

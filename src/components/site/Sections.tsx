import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import {
  FiAward, FiUsers, FiZap, FiHeart,
  FiCheckCircle, FiSmile, FiCamera, FiActivity, FiSettings,
  FiChevronDown, FiMapPin, FiClock, FiMail, FiPhone, FiArrowRight,
  FiStar, FiMonitor, FiCoffee, FiShield
} from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import logoImg from "@/assets/logo.png.asset.json";
import veneersImg from "@/assets/cosmetic-veneers.jpg";
import crownImg from "@/assets/cosmetic-crown.jpg";
import makeoverImg from "@/assets/cosmetic-makeover.jpg";
import invisalignCertified from "@/assets/invisalign-certified.png.asset.json";
import implant3dVideo from "@/assets/implant-3d-animation.mp4.asset.json";

/* ---------- Helpers ---------- */
function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => `${Math.floor(v).toLocaleString()}${suffix}`);
  useEffect(() => {
    if (inView) {
      const controls = animate(mv, to, { duration: 1.8, ease: "easeOut" });
      return controls.stop;
    }
  }, [inView, mv, to]);
  return (
    <motion.span ref={ref}>
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      <motion.span>{rounded as any}</motion.span>
    </motion.span>
  );
}

function Reveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}

function SectionEyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full bg-primary/8 text-primary px-4 py-1.5 text-xs font-semibold tracking-[0.2em] uppercase">
      {children}
    </div>
  );
}

/* ---------- Trust ---------- */
export function Trust() {
  const items = [
    { icon: <FiAward />, n: 15, suffix: "+", label: "Years of Experience" },
    { icon: <FiUsers />, n: 3000, suffix: "+", label: "Happy Patients" },
    { icon: <FiZap />, n: 25, suffix: "+", label: "Advanced Technologies" },
    { icon: <FiHeart />, n: 24, suffix: "/7", label: "Patient Support" },
  ];
  return (
    <section className="relative pt-10">
      <div className="container-x">
        <div className="glass rounded-3xl shadow-[var(--shadow-glow)] grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-border/60">
          {items.map((it, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 sm:p-8 text-center"
            >
              <div className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-[var(--gradient-primary)] text-white text-xl shadow-[var(--shadow-soft)]">
                {it.icon}
              </div>
              <div className="mt-4 font-display text-3xl sm:text-4xl font-semibold text-ink">
                <Counter to={it.n} suffix={it.suffix} />
              </div>
              <div className="mt-1 text-sm text-ink-muted">{it.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- About ---------- */
export function About() {
  return (
    <section id="about" className="section-pad">
      <div className="container-x grid lg:grid-cols-2 gap-14 items-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative rounded-[2rem] overflow-hidden shadow-[var(--shadow-glow)] aspect-[4/5]"
          >
            <img
              src="https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=1200&q=80"
              alt="Modern dental office interior"
              className="h-full w-full object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="hidden md:block absolute -right-6 -bottom-10 w-56 rounded-2xl overflow-hidden shadow-[var(--shadow-glow)] border-4 border-white"
          >
            <img
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80"
              alt="Dental treatment room"
              className="h-full w-full object-cover aspect-square"
            />
          </motion.div>
        </div>

        <div>
          <Reveal>
            <SectionEyebrow>About Our Practice</SectionEyebrow>
            <h2 className="mt-5 font-display text-4xl sm:text-5xl font-semibold text-ink leading-[1.1]">
              Modern dentistry, <span className="text-gradient italic">delivered with care.</span>
            </h2>
            <p className="mt-5 text-ink-muted text-base sm:text-lg leading-relaxed">
              McKinney Dental & Implant Center blends advanced clinical expertise with a
              warm, patient-first experience. From routine checkups to full smile
              restorations, every visit is designed around your comfort, your timeline,
              and your goals.
            </p>
          </Reveal>

          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            {[
              "Board-Certified Clinicians",
              "Same-Day Crown Technology",
              "Sedation & Comfort Options",
              "Transparent, Upfront Pricing",
            ].map((t, i) => (
              <Reveal key={t} delay={0.05 * i}>
                <div className="flex items-start gap-3 rounded-2xl bg-white p-4 shadow-[var(--shadow-card)]">
                  <FiCheckCircle className="text-secondary mt-0.5 text-xl shrink-0" />
                  <span className="text-ink font-medium text-sm">{t}</span>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <div className="mt-9 flex flex-wrap gap-4">
              <a href="#appointment" className="btn-primary">Meet The Team</a>
              <a href="#services" className="btn-ghost">Explore Services</a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- Services ---------- */
const SERVICES = [
  { title: "General Dentistry", desc: "Cleanings, exams and family care.", img: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=900&q=80", icon: <FiSmile /> },
  { title: "Dental Implants", desc: "Permanent tooth replacement.", img: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=900&q=80", icon: <FiActivity /> },
  { title: "Orthodontics", desc: "Modern brackets & clear aligners.", img: "https://images.unsplash.com/photo-1581585504594-d6f7a4d1ad7e?auto=format&fit=crop&w=900&q=80", icon: <FiSettings /> },
  { title: "Invisalign®", desc: "Discreet, removable, effective.", img: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=900&q=80", icon: <FiZap /> },
  { title: "Cosmetic Dentistry", desc: "Smile makeovers that fit you.", img: "https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?auto=format&fit=crop&w=900&q=80", icon: <FiStar /> },
  { title: "Crowns & Veneers", desc: "Natural-looking restorations.", img: "https://images.unsplash.com/photo-1581595220892-10e30379435b?auto=format&fit=crop&w=900&q=80", icon: <FiAward /> },
  { title: "Teeth Whitening", desc: "Brighten in a single visit.", img: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&w=900&q=80", icon: <FiCamera /> },
  { title: "Digital Dentistry", desc: "3D imaging & guided precision.", img: "https://images.unsplash.com/photo-1666214280391-8ff5bd3c0bf0?auto=format&fit=crop&w=900&q=80", icon: <FiZap /> },
];

export function Services() {
  return (
    <section id="services" className="section-pad bg-white">
      <div className="container-x">
        <div className="max-w-3xl">
          <SectionEyebrow>What We Offer</SectionEyebrow>
          <h2 className="mt-5 font-display text-4xl sm:text-5xl font-semibold leading-[1.1] text-ink tracking-tight">
            Comprehensive care under <span className="text-gradient italic">one roof.</span>
          </h2>
          <p className="mt-5 text-ink-muted text-lg sm:text-xl">
            From your first cleaning to a complete smile transformation, our team
            delivers the full spectrum of modern dentistry.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {SERVICES.map((s, i) => (
            <motion.a
              key={s.title}
              href="#appointment"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="group flex flex-col relative overflow-hidden rounded-[2rem] bg-white shadow-[0_20px_50px_-25px_rgba(11,37,69,0.2)] hover:shadow-[0_40px_80px_-25px_rgba(15,76,129,0.3)] border border-border/40 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <img src={s.img} alt={s.title} className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
                
                <div className="absolute top-4 left-4 grid h-11 w-11 place-items-center rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 text-white text-xl shadow-lg">
                  {s.icon}
                </div>
                
                <div className="absolute bottom-4 left-5 right-5">
                  <h3 className="font-display font-semibold text-xl text-white tracking-wide">{s.title}</h3>
                </div>
              </div>
              <div className="p-5 sm:p-6 flex flex-col flex-1 bg-white">
                <p className="text-[14.5px] text-ink-muted leading-relaxed flex-1">{s.desc}</p>
                <div className="mt-5 inline-flex items-center gap-2 text-[14px] font-semibold text-primary group-hover:gap-3 transition-all">
                  Learn More <FiArrowRight />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Implants ---------- */
export function Implants() {
  const steps = [
    { t: "Consultation", d: "Full exam & treatment plan tailored to your needs." },
    { t: "Digital Planning", d: "3D imaging maps the ideal implant position." },
    { t: "Implant Placement", d: "Guided, minimally invasive surgical procedure." },
    { t: "Crown Restoration", d: "Custom crown delivers a natural, lasting smile." },
  ];
  return (
    <section id="implants" className="section-pad relative overflow-hidden bg-[oklch(0.97_0.012_240)]">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(80%_60%_at_50%_0%,color-mix(in_oklab,var(--accent)_15%,transparent),transparent)]" />
      <div className="container-x grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
        
        {/* Content on Left */}
        <div className="order-2 lg:order-1">
          <SectionEyebrow>Implant Dentistry</SectionEyebrow>
          <h2 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] text-ink tracking-tight">
            Permanent solutions for a <span className="text-gradient italic">complete smile.</span>
          </h2>
          <p className="mt-6 text-ink-muted text-lg sm:text-xl leading-relaxed">
            Replace missing teeth with implants engineered to look, feel, and function
            like the real thing — backed by 3D planning and guided precision.
          </p>

          <ol className="mt-10 relative space-y-7 before:absolute before:left-[21px] before:top-2 before:bottom-2 before:w-[2px] before:bg-gradient-to-b before:from-primary/30 before:to-transparent">
            {steps.map((s, i) => (
              <motion.li
                key={s.t}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="relative pl-14 sm:pl-16 group"
              >
                <div className="absolute left-0 top-0 grid h-11 w-11 place-items-center rounded-full bg-white border border-border/80 text-primary font-bold shadow-[0_8px_20px_-8px_rgba(15,76,129,0.2)] transition-all group-hover:bg-primary group-hover:text-white group-hover:border-primary">
                  {i + 1}
                </div>
                <div className="font-display font-semibold text-[18px] text-ink">{s.t}</div>
                <div className="text-[15px] text-ink-muted mt-1.5 leading-relaxed">{s.d}</div>
              </motion.li>
            ))}
          </ol>
          
          <div className="mt-12">
            <a href="#appointment" className="btn-primary">Schedule a Consultation</a>
          </div>
        </div>

        {/* Video on Right */}
        <Reveal>
          <div className="order-1 lg:order-2 relative">
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-[0_40px_80px_-25px_rgba(11,37,69,0.4)] aspect-[4/5] border-4 border-white">
              <video 
                src={implant3dVideo.url} 
                autoPlay 
                loop 
                muted 
                playsInline
                className="absolute inset-0 w-full h-full object-cover scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545]/70 via-transparent to-transparent opacity-80" />
              
              <div className="absolute inset-0 grid place-items-center pointer-events-none">
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="rounded-[2rem] bg-white/95 backdrop-blur-xl px-8 py-6 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] text-center pointer-events-auto border border-white/50"
                >
                  <img src={logoImg.url} alt="McKinney Dental Center" className="h-16 w-auto mx-auto mb-2" />
                  <div className="text-[11px] tracking-[0.25em] uppercase text-primary font-bold">
                    Implant Center
                  </div>
                </motion.div>
              </div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="absolute -bottom-10 -left-6 sm:-left-10 bg-white rounded-[2rem] p-6 shadow-[0_20px_50px_-20px_rgba(11,37,69,0.25)] border border-border/50 max-w-[280px]"
            >
              <div className="flex items-center gap-4">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-[var(--gradient-primary)] text-white shadow-md shrink-0">
                  <FiAward size={24} />
                </div>
                <div>
                  <div className="font-display text-2xl font-bold text-ink">98.7%</div>
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-ink-muted mt-1">Success Rate</div>
                </div>
              </div>
            </motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Digital ---------- */
export function Digital() {
  const cards = [
    { t: "3D Imaging", d: "Crystal-clear CBCT scans for precision diagnosis." },
    { t: "Intraoral Scanner", d: "Digital impressions — no putty, no gag reflex." },
    { t: "Digital Treatment Planning", d: "Visualize your outcome before treatment begins." },
    { t: "Guided Implant Navigation", d: "X-Guide® technology for sub-millimeter accuracy." },
  ];
  return (
    <section className="section-pad bg-[oklch(0.97_0.012_240)]">
      <div className="container-x">
        <div className="max-w-3xl">
          <SectionEyebrow>Digital Dentistry</SectionEyebrow>
          <h2 className="mt-5 font-display text-4xl sm:text-5xl font-semibold leading-[1.1]">
            The future of dentistry, <span className="text-gradient italic">today.</span>
          </h2>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((c, i) => (
            <motion.div
              key={c.t}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="relative rounded-3xl p-6 bg-white border border-border/60 overflow-hidden group"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-[var(--gradient-primary)]" />
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-accent/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/8 text-primary text-xl">
                  <FiZap />
                </div>
                <h3 className="mt-5 font-display font-semibold text-lg text-ink">{c.t}</h3>
                <p className="mt-2 text-sm text-ink-muted">{c.d}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Orthodontics ---------- */
export function Orthodontics() {
  return (
    <section id="orthodontics" className="section-pad">
      <div className="container-x grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        <div className="order-2 lg:order-1">
          <SectionEyebrow>Orthodontics</SectionEyebrow>
          <h2 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-tight text-ink">
            Straighten with <span className="text-gradient italic">confidence.</span>
          </h2>
          <p className="mt-6 text-ink-muted text-lg sm:text-xl leading-relaxed">
            Achieve your best smile with our advanced orthodontic solutions. We provide 
            customized Invisalign® treatment options designed entirely around your goals.
          </p>
          <div className="mt-10 grid sm:grid-cols-2 gap-5">
            {[
              { t: "Invisalign®", d: "Virtually invisible, removable." },
              { t: "Clear Aligners", d: "Comfortable and precise." },
              { t: "3D Smile Preview", d: "See your result before starting." },
              { t: "Flexible Payment", d: "Plans that fit your budget." },
            ].map((f) => (
              <div key={f.t} className="rounded-2xl bg-white p-5 border border-border/50 shadow-[0_15px_30px_-15px_rgba(11,37,69,0.15)] hover:shadow-[0_20px_40px_-20px_rgba(15,76,129,0.25)] transition-shadow">
                <div className="font-display font-semibold text-ink text-lg">{f.t}</div>
                <div className="text-[14.5px] text-ink-muted mt-1.5 leading-relaxed">{f.d}</div>
              </div>
            ))}
          </div>
          <a href="#appointment" className="btn-primary mt-10">Start your aligner journey</a>
        </div>
        <Reveal>
          <div className="order-1 lg:order-2 relative">
            <div className="relative grid grid-cols-2 gap-5">
              <img src="https://images.unsplash.com/photo-1629909614553-61ba472be987?auto=format&fit=crop&w=900&q=80" alt="Clear aligners treatment" className="rounded-[2rem] shadow-[0_20px_40px_-20px_rgba(11,37,69,0.3)] aspect-[3/4] object-cover row-span-2 w-full h-full" />
              <img src="https://images.unsplash.com/photo-1598331668826-20cefac91e06?auto=format&fit=crop&w=800&q=80" alt="Orthodontic consultation" className="rounded-[2rem] shadow-[0_15px_30px_-15px_rgba(11,37,69,0.2)] aspect-square object-cover w-full h-full" />
              <img src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80" alt="Modern dental office" className="rounded-[2rem] shadow-[0_15px_30px_-15px_rgba(11,37,69,0.2)] aspect-square object-cover w-full h-full" />
            </div>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="absolute -top-6 -left-6 sm:-top-8 sm:-left-8 rounded-[2rem] bg-white px-6 py-4 shadow-[0_20px_50px_-15px_rgba(11,37,69,0.3)] border border-border/50 flex items-center gap-4"
            >
              <img
                src={invisalignCertified.url}
                alt="Invisalign certified provider"
                className="h-8 w-auto"
                loading="lazy"
              />
              <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-primary">Certified Provider</span>
            </motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Cosmetic ---------- */
export function Cosmetic() {
  return (
    <section id="cosmetic" className="py-24 bg-[#FAFCFF] relative overflow-hidden">
      {/* Decorative background blur */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#EAF6F9] rounded-full blur-[120px] opacity-60 pointer-events-none -translate-y-1/2 translate-x-1/3" />
      
      <div className="container-x relative z-10">
        <div className="max-w-3xl">
          <SectionEyebrow>Cosmetic Dentistry</SectionEyebrow>
          <h2 className="mt-5 font-display text-[40px] sm:text-[54px] lg:text-[64px] font-semibold leading-[1.05] text-[#0B2F5C] tracking-tight">
            Smile makeovers, <span className="italic font-serif text-[#1B4A8F]">perfected.</span>
          </h2>
          <p className="mt-6 text-[#5A6B82] text-lg sm:text-[20px] leading-relaxed max-w-2xl">
            From hand-crafted porcelain veneers to professional ZOOM whitening, our cosmetic treatments
            are tailored to enhance your unique features and confidence.
          </p>
        </div>
        
        <div className="mt-16 grid lg:grid-cols-12 gap-8">
          {/* Main Hero Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative rounded-[32px] overflow-hidden shadow-[0_20px_60px_-15px_rgba(11,47,92,0.15)] group min-h-[500px]"
          >
            <img 
              src="https://images.unsplash.com/photo-1590623321556-9477e682d334?auto=format&fit=crop&w=1000&q=80" 
              alt="Complete smile makeover" 
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1500ms] group-hover:scale-[1.03]" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B2F5C] via-[#0B2F5C]/40 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-80" />
            
            <div className="absolute inset-0 p-10 flex flex-col justify-end text-white">
              <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mb-6 border border-white/30">
                <FiStar className="text-white text-xl" />
              </div>
              <h3 className="font-display text-[32px] sm:text-[36px] font-semibold tracking-tight leading-[1.1] mb-4">
                Signature Smile<br />Transformations
              </h3>
              <p className="text-white/85 text-[16px] leading-[1.7] max-w-sm">
                Veneers, premium crowns, whitening & precise contouring — designed in perfect harmony with your facial aesthetics.
              </p>
            </div>
          </motion.div>
          
          {/* Grid of Services */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-8">
            {[
              { 
                t: "Porcelain Veneers", 
                desc: "Ultra-thin, custom crafted ceramics for a flawless, natural finish.", 
                img: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80", 
                badge: null 
              },
              { 
                t: "Custom Crowns", 
                desc: "Seamless and durable restorations that protect and beautify.", 
                img: "https://images.unsplash.com/photo-1598331668826-20cefac91e06?auto=format&fit=crop&w=800&q=80", 
                badge: null 
              },
              { 
                t: "ZOOM Whitening", 
                desc: "Professional in-office whitening for instantly brighter smiles.", 
                img: "https://images.unsplash.com/photo-1520975867597-0af37a22e31e?auto=format&fit=crop&w=800&q=80", 
                badge: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Philips_Zoom_logo.svg/320px-Philips_Zoom_logo.svg.png" 
              },
              { 
                t: "3D Smile Design", 
                desc: "Digital previews of your potential outcome before treatment begins.", 
                img: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80", 
                badge: null 
              },
            ].map((c, i) => (
              <motion.div
                key={c.t}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="group relative overflow-hidden rounded-[28px] shadow-[0_15px_40px_-15px_rgba(11,47,92,0.1)] hover:shadow-[0_25px_50px_-15px_rgba(11,47,92,0.2)] transition-all duration-500 aspect-square sm:aspect-auto border border-white"
              >
                <img 
                  src={c.img} 
                  alt={c.t} 
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" 
                />
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2F5C]/95 via-[#0B2F5C]/40 to-transparent opacity-85 group-hover:opacity-75 transition-opacity duration-500" />
                
                {/* Brand Badge (e.g. ZOOM) */}
                {c.badge && (
                  <div className="absolute top-5 right-5 rounded-2xl bg-white/95 backdrop-blur-md px-4 py-2.5 shadow-xl border border-white">
                    <img src={c.badge} alt="Brand Partner" className="h-[22px] w-auto" />
                  </div>
                )}
                
                {/* Content */}
                <div className="absolute inset-x-0 bottom-0 p-8 transform transition-transform duration-500">
                  <h4 className="font-display text-white text-[24px] font-semibold tracking-wide mb-2 group-hover:-translate-y-1 transition-transform duration-500">
                    {c.t}
                  </h4>
                  <p className="text-white/80 text-[15px] leading-relaxed opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                    {c.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Office gallery ---------- */
export function Office() {
  const highlights = [
    { icon: <FiMonitor />, title: "Modern Dental Technology", desc: "Digital imaging, 3D scans & guided precision for every treatment." },
    { icon: <FiCoffee />, title: "Comfortable Waiting Lounge", desc: "Relax in a spa-like atmosphere with refreshments and entertainment." },
    { icon: <FiShield />, title: "Clean & Spacious Treatment Rooms", desc: "Immaculate, private suites designed for your safety and comfort." },
    { icon: <FiUsers />, title: "Friendly Family-Focused Care", desc: "Welcoming patients of all ages with gentle, personalized attention." },
  ];

  return (
    <section className="section-pad bg-white">
      <div className="container-x">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Large Office Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-[2rem] overflow-hidden shadow-[var(--shadow-glow)] aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80"
                alt="Modern dental office reception and waiting area"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-6 -right-4 sm:right-8 glass rounded-2xl px-5 py-4 shadow-[var(--shadow-card)] flex items-center gap-3 border border-white/60"
            >
              <div className="grid h-10 w-10 place-items-center rounded-full bg-[var(--gradient-primary)] text-white text-lg">
                <FiStar />
              </div>
              <div>
                <div className="font-semibold text-ink text-sm">Top Rated</div>
                <div className="text-xs text-ink-muted">McKinney, TX</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionEyebrow>Our Office</SectionEyebrow>
              <h2 className="mt-5 font-display text-4xl sm:text-5xl font-semibold leading-[1.1] text-ink">
                Welcome to Our <span className="text-gradient italic">Modern Dental Office</span>
              </h2>
              <p className="mt-5 text-ink-muted text-base sm:text-lg leading-relaxed">
                Step into a thoughtfully designed environment where advanced dentistry meets
                genuine comfort. From our welcoming reception to our state-of-the-art treatment
                rooms, every detail is crafted around your experience.
              </p>
            </motion.div>

            {/* 4 Highlights */}
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.08 }}
                  className="flex flex-col gap-3 rounded-2xl bg-[oklch(0.97_0.012_240)] p-5 border border-border/40 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-soft)] transition-shadow duration-300"
                >
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-white text-primary text-lg shadow-sm">
                    {h.icon}
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-ink text-sm">{h.title}</h4>
                    <p className="mt-1 text-xs text-ink-muted leading-relaxed">{h.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-8"
            >
              <Link to="/gallery" className="btn-primary">
                View Our Office <FiArrowRight />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Testimonials ---------- */
export function Testimonials() {
  const items = [
    { name: "Jessica M.", text: "From the first consultation to my final crown, the entire team made me feel completely cared for. My implant looks better than my real teeth!", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80" },
    { name: "Mark T.", text: "Incredible technology and an even better team. The 3D scans made the whole Invisalign process feel effortless and predictable.", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80" },
    { name: "Priya S.", text: "I never thought I'd look forward to going to the dentist. The office feels more like a luxury spa than a clinic.", img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=300&q=80" },
    { name: "Daniel R.", text: "After years of avoiding dental care, McKinney made me feel comfortable and confident. My new smile changed everything.", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80" },
  ];
  return (
    <section className="section-pad bg-[oklch(0.97_0.012_240)]">
      <div className="container-x">
        <div className="max-w-3xl">
          <SectionEyebrow>Patient Stories</SectionEyebrow>
          <h2 className="mt-5 font-display text-4xl sm:text-5xl font-semibold leading-[1.1]">
            Trusted by smiles <span className="text-gradient italic">across McKinney.</span>
          </h2>
        </div>
        <div className="mt-12">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            autoplay={{ delay: 4500, disableOnInteraction: false }}
            loop
            pagination={{ clickable: true }}
            breakpoints={{ 0: { slidesPerView: 1 }, 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
            className="!pb-14"
          >
            {items.map((t, i) => (
              <SwiperSlide key={i}>
                <div className="glass rounded-3xl p-7 h-full shadow-[var(--shadow-card)]">
                  <div className="flex gap-1 text-gold">
                    {Array.from({ length: 5 }).map((_, j) => <FiStar key={j} className="fill-current" />)}
                  </div>
                  <p className="mt-5 text-ink leading-relaxed">"{t.text}"</p>
                  <div className="mt-6 flex items-center gap-3">
                    <img src={t.img} alt={t.name} className="h-12 w-12 rounded-full object-cover" />
                    <div>
                      <div className="font-semibold text-ink">{t.name}</div>
                      <div className="text-xs text-ink-muted">Verified Patient</div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

/* ---------- Appointment ---------- */
export function Appointment() {
  return (
    <section id="appointment" className="section-pad">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-[2.5rem] shadow-[var(--shadow-glow)]" style={{ background: 'var(--gradient-primary)' }}>
          <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-accent/30 blur-3xl" />
          <div className="absolute -bottom-24 -left-12 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="relative grid lg:grid-cols-2 gap-10 p-8 sm:p-12 lg:p-16 text-white">
            <div>
              <SectionEyebrow><span className="!text-white">Book Online</span></SectionEyebrow>
              <h2 className="mt-5 font-display text-4xl sm:text-5xl font-semibold leading-[1.1] text-white">
                Schedule your visit in <span className="italic text-accent">under a minute.</span>
              </h2>
              <p className="mt-5 text-white/85 text-lg">
                Choose a time that works for you. Our team will confirm your appointment
                within one business hour.
              </p>
              <div className="mt-8 space-y-4">
                {[
                  { i: <FiPhone />, l: "(972) 833-6825", s: "Speak with our team" },
                  { i: <FiMail />, l: "info@mckinneyddscenter.com", s: "Email any time" },
                  { i: <FiMapPin />, l: "McKinney, Texas", s: "3100 Ridge Road, Ste 300" },
                ].map((r, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="grid h-11 w-11 place-items-center rounded-2xl bg-white/15 text-white text-lg">{r.i}</div>
                    <div>
                      <div className="font-semibold">{r.l}</div>
                      <div className="text-xs text-white/70">{r.s}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <form
              onSubmit={(e) => { e.preventDefault(); alert("Thanks! We'll be in touch shortly."); }}
              className="bg-white rounded-3xl p-6 sm:p-8 shadow-[var(--shadow-glow)] text-ink"
            >
              <div className="font-display text-xl font-semibold">Request an Appointment</div>
              <div className="mt-5 grid sm:grid-cols-2 gap-4">
                <Field label="Full Name" name="name" placeholder="Jane Doe" required />
                <Field label="Phone" name="phone" placeholder="(555) 123-4567" required />
                <Field label="Email" name="email" type="email" placeholder="you@email.com" required />
                <Field label="Preferred Date" name="date" type="date" required />
                <div className="sm:col-span-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-ink-muted">Service</label>
                  <select required className="mt-1.5 w-full rounded-xl border border-border px-4 py-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-secondary">
                    <option>General Checkup</option>
                    <option>Dental Implants</option>
                    <option>Invisalign / Orthodontics</option>
                    <option>Cosmetic Consultation</option>
                    <option>Whitening</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-ink-muted">Message</label>
                  <textarea rows={3} placeholder="Tell us about your goals" className="mt-1.5 w-full rounded-xl border border-border px-4 py-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-secondary" />
                </div>
              </div>
              <button className="btn-primary mt-6 w-full">Request Appointment</button>
              <div className="text-xs text-ink-muted mt-3 text-center">Your information is private and HIPAA-secured.</div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, ...rest }: { label: string; name: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="text-xs font-semibold uppercase tracking-wider text-ink-muted">{label}</label>
      <input
        name={name}
        {...rest}
        className="mt-1.5 w-full rounded-xl border border-border px-4 py-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-secondary"
      />
    </div>
  );
}

/* ---------- FAQ ---------- */
const FAQS = [
  { q: "Are dental implants right for me?", a: "Most adults with good general health and adequate bone are candidates. We'll confirm with a 3D scan during your consultation." },
  { q: "How long does Invisalign take?", a: "Treatment usually ranges from 6 to 18 months depending on case complexity. We'll preview your result before starting." },
  { q: "Do you offer cosmetic consultations?", a: "Yes — complimentary smile design consultations include digital previews of your potential outcome." },
  { q: "Do you accept insurance?", a: "We accept most major PPO insurance plans and offer flexible financing through CareCredit and in-house plans." },
  { q: "Are you accepting new patients?", a: "Absolutely. We welcome individuals, families, and patients of all ages." },
];

export function FAQ() {
  return (
    <section id="faq" className="section-pad bg-white">
      <div className="container-x grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <SectionEyebrow>Patient Resources</SectionEyebrow>
          <h2 className="mt-5 font-display text-4xl sm:text-5xl font-semibold leading-[1.1]">
            Frequently asked <span className="text-gradient italic">questions.</span>
          </h2>
          <p className="mt-5 text-ink-muted text-lg">
            Have something else on your mind? Our team is happy to answer any
            questions before your visit.
          </p>
          <Link to="/contact" className="btn-ghost mt-6">Contact our team</Link>
        </div>
        <div className="lg:col-span-7 space-y-3">
          {FAQS.map((f, i) => <FaqItem key={i} q={f.q} a={f.a} defaultOpen={i === 0} />)}
        </div>
      </div>
    </section>
  );
}

function FaqItem({ q, a, defaultOpen = false }: { q: string; a: string; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="rounded-2xl border border-border bg-white shadow-[var(--shadow-card)] overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between gap-4 p-5 text-left">
        <span className="font-display font-semibold text-ink text-base sm:text-lg">{q}</span>
        <motion.span animate={{ rotate: open ? 180 : 0 }} className="text-primary text-xl shrink-0">
          <FiChevronDown />
        </motion.span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="px-5 pb-5 text-ink-muted">{a}</div>
      </motion.div>
    </div>
  );
}



/* ---------- Contact ---------- */
export function Contact() {
  return (
    <section id="contact" className="section-pad">
      <div className="container-x">
        {/* Top info cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              i: <FiMail />,
              t: "Drop us a line",
              l1: "info@mckinneyddscenter.com",
              href: "mailto:info@mckinneyddscenter.com",
            },
            {
              i: <FiPhone />,
              t: "Phone",
              l1: "(972) 833-6825",
              href: "tel:+19728336825",
            },
            {
              i: <FiMapPin />,
              t: "McKinney Dental and Implant Center",
              l1: "3100 Ridge Road, Ste 300, Mckinney, Texas 75070, United States",
              href: "https://www.google.com/maps?ll=33.172678,-96.698463&z=18",
            },
          ].map((c, i) => (
            <motion.a
              key={i}
              href={c.href}
              target={c.href?.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.45 }}
              className="group flex items-start gap-5 rounded-3xl bg-white p-6 sm:p-7 shadow-[var(--shadow-card)] border border-border/60 hover:-translate-y-1 transition-all"
            >
              <div
                className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl text-white text-xl shadow-[var(--shadow-soft)] group-hover:scale-105 transition-transform"
                style={{ background: "var(--gradient-primary)" }}
              >
                {c.i}
              </div>
              <div className="min-w-0">
                <h3 className="font-display font-semibold text-lg text-ink leading-snug">{c.t}</h3>
                <div className="mt-1 text-ink-muted text-sm break-words">{c.l1}</div>
                
              </div>
            </motion.a>
          ))}
        </div>

        {/* Map */}
        <div className="mt-14">
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden rounded-[2rem] shadow-[var(--shadow-card)] border border-border/60 min-h-[420px] lg:min-h-full"
          >
            <iframe
              title="McKinney Dental and Implant Center — Map"
              src="https://www.google.com/maps?q=McKinney+Dental+and+Implant+Center,3100+Ridge+Road,Ste+300,McKinney,TX+75070&ll=33.172678,-96.698463&z=17&output=embed"
              className="h-full w-full min-h-[420px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}


/* ---------- Footer ---------- */
export function Footer() {
  return (
    <footer className="bg-[oklch(0.18_0.04_252)] text-white/85 pt-20 pb-8">
      <div className="container-x grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-4">
          <div className="flex items-center gap-2.5">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-[var(--gradient-primary)] text-white font-display font-bold text-lg">M</div>
            <div>
              <div className="font-display font-semibold text-white">McKinney Dental</div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-white/60">& Implant Center</div>
            </div>
          </div>
          <p className="mt-5 text-white/70 max-w-sm">
            A modern dental practice committed to creating beautiful, healthy smiles
            with advanced technology and compassionate care.
          </p>
        </div>
        <FooterCol title="Quick Links" links={["Home", "About", "Services", "Patient Resources", "Contact"]} />
        <FooterCol title="Services" links={["General Dentistry", "Dental Implants", "Invisalign®", "Cosmetic", "Whitening"]} />
        <div className="lg:col-span-2">
          <div className="font-display font-semibold text-white">Contact</div>
          <ul className="mt-4 space-y-2 text-sm">
            <li>(972) 833-6825</li>
            <li>info@mckinneyddscenter.com</li>
            
            <li>3100 Ridge Road, Ste 300, Mckinney, Texas 75070, United States</li>
          </ul>
        </div>
      </div>
      <div className="container-x mt-14 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs text-white/55">
        <div>© {new Date().getFullYear()} McKinney Dental & Implant Center. All rights reserved.</div>
        <div className="flex gap-5">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms</a>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: string[] }) {
  return (
    <div className="lg:col-span-2">
      <div className="font-display font-semibold text-white">{title}</div>
      <ul className="mt-4 space-y-2 text-sm">
        {links.map((l) => <li key={l}><a href="#" className="hover:text-white transition-colors">{l}</a></li>)}
      </ul>
    </div>
  );
}

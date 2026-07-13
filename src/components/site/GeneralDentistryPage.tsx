import { useState } from "react";
import { FiChevronDown, FiCheckCircle, FiArrowUpRight, FiPhone, FiStar } from "react-icons/fi";
import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import generalCare from "@/assets/general1.jpg";
import generalHero from "@/assets/general-hero.jpg";
import general2 from "@/assets/general2.jpg";

const ACCORDION_ITEMS = [
  {
    q: "How often should I get a dental cleaning?",
    a: (
      <>
        <p className="mb-4">The best way to prevent dental problems is through routine cleanings and maintaining your oral health at home.</p>
        <ul className="list-disc pl-6 space-y-3">
          <li>For most patients, we recommend a professional cleaning every six months.</li>
          <li>Depending on your gum health, you might need deep cleanings or more frequent maintenance cleanings.</li>
          <li>Regular visits allow us to catch small issues before they become major problems.</li>
        </ul>
      </>
    )
  },
  {
    q: "Do you offer metal-free fillings?",
    a: (
      <p>Cavities happen to the best of us. Yes, we use aesthetic, tooth-colored composite fillings to restore small cavities in a conservative and natural-looking way.</p>
    )
  }
];

const PROCESS_STEPS = [
  {
    title: "Cleanings",
    desc: "The best way to prevent dental problems is through cleanings and maintaining your oral health at home. Depending on your gum health, come see us for routine cleanings, deep cleanings, or maintenance cleanings.",
  },
  {
    title: "Metal-Free Fillings",
    desc: "Cavities happen to the best of us. We use aesthetic, tooth-colored composite fillings to restore small cavities in a conservative way.",
  },
  {
    title: "Crowns",
    desc: "When cavities get a bit more serious, then crowns are the way to go. Crowns are used to protect your teeth after a large cavity is taken out, and they come in all shapes and materials.",
  },
  {
    title: "Root Canal Therapy",
    desc: "Have severe tooth pain? Root canals are used to clean out the nerve of a tooth when it is infected, eliminating any tooth pain and infection that you might have.",
  },
  {
    title: "Extractions",
    desc: "Sometimes, teeth need to come out, whether it's a baby tooth, wisdom tooth, or a tooth in pain. Come visit us, and we can help.",
  },
  {
    title: "Dentures",
    desc: "Missing multiple teeth? Dentures might be a good solution for you. Whether it's your smile or your ability to chew, dentures can significantly increase your quality of life.",
  },
  {
    title: "Sleep Appliances",
    desc: "Does your significant other tell you that you snore in your sleep? Do you wake up feeling tired even after a full night of sleep? If this describes you, it might be time to consider a sleep study. Sleep appliances can greatly improve your quality of sleep, and your quality of life.",
  },
];

export function GeneralDentistryPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="bg-[#FAFCFF]">
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
                <FiStar /> Comprehensive Care
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mt-6 font-display text-5xl sm:text-6xl lg:text-[72px] font-semibold leading-[1.02] text-white"
              >
                Premium, <span className="italic font-serif text-[#E9C77B]">Gentle</span>
                <br /> Dentistry.
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-6 max-w-xl text-[16px] leading-relaxed text-white/80"
              >
                Experience modern general dentistry designed around your comfort, health, and long-term well-being for the entire family.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-9 flex flex-wrap gap-3"
              >
                <a
                  href="https://local.demandforce.com/b/mckinneydentalandimplantcenter/schedule?widget=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full pl-6 pr-2 py-2.5 text-sm font-semibold text-[#0B2F5C] bg-[#E9C77B] hover:bg-white transition-colors"
                >
                  Book Appointment
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-[#0B2F5C] text-white group-hover:rotate-45 transition-transform">
                    <FiArrowUpRight />
                  </span>
                </a>
                <a
                  href="tel:+19728336825"
                  className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white border border-white/30 hover:border-[#E9C77B] hover:text-[#E9C77B] transition-colors"
                >
                  <FiPhone /> (972) 833-6825
                </a>
              </motion.div>

              <div className="mt-12 grid grid-cols-3 gap-6 max-w-lg">
                {[
                  { v: "5,000+", l: "Happy Smiles" },
                  { v: "100%", l: "Patient Focus" },
                  { v: "15+", l: "Years Experience" },
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
                <img src="https://greenleafdentists.com/blog/wp-content/uploads/2024/06/patient-receiving-Gentle-Dentistry-NJ.jpg" alt="General Dentistry" className="w-full h-[520px] object-cover transition-transform duration-[1200ms] group-hover:scale-[1.03]" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2F5C]/60 via-[#0B2F5C]/10 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* THE PROCESS */}
      <section className="py-24 relative overflow-hidden">
        {/* Subtle premium background accent */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-slate-50 to-transparent pointer-events-none" />
        
        <div className="container-x max-w-7xl mx-auto relative z-10">
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left side: Information and Bullet Points */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-xs font-semibold tracking-[0.2em] uppercase text-[#1B4A8F] mb-4">
                Our Services
              </div>
              <h2 className="text-[34px] sm:text-[46px] font-semibold text-[#0B2F5C] leading-tight tracking-tight mb-8">
                Complete care for a <span className="italic font-serif text-[#1B4A8F]">healthy life.</span>
              </h2>

              <div className="space-y-5 mt-8">
                {PROCESS_STEPS.map((step, i) => (
                  <motion.div 
                    key={step.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.15 }}
                    className="flex gap-4"
                  >
                    <div className="shrink-0 mt-0.5">
                      <div className="grid h-8 w-8 text-sm place-items-center rounded-full bg-[#1B4A8F]/10 text-[#1B4A8F] font-bold shadow-sm">
                        {i + 1}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-[18px] font-medium text-[#0B2F5C] mb-1 font-sans tracking-tight">
                        {step.title}
                      </h3>
                      <p className="text-[#5A6B82] font-light leading-relaxed text-[14px]">
                        {step.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-12">
                <a
                  href="https://local.demandforce.com/b/mckinneydentalandimplantcenter/schedule?widget=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#1B4A8F] hover:bg-[#113264] text-white px-8 py-3.5 font-serif text-[13px] tracking-[0.15em] uppercase shadow-lg hover:shadow-xl rounded-sm transition-colors duration-300"
                >
                  Schedule A Consultation
                </a>
              </div>
            </motion.div>

            {/* Right side: Image instead of Video for General Dentistry */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative rounded-3xl overflow-hidden shadow-[0_30px_60px_-15px_rgba(11,47,92,0.25)] bg-[#0B2F5C] border-8 border-white aspect-[4/3] sm:aspect-video lg:aspect-auto lg:h-[600px]"
            >
              <img 
                src={generalCare}
                alt="General Dental Care"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </motion.div>

          </div>
        </div>
      </section>

      {/* ADVANCED TECHNOLOGY */}
      <section className="py-20 sm:py-24 bg-white relative">
        <div className="container-x max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 relative rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_-20px_rgba(11,47,92,0.2)] aspect-[4/3] w-full bg-[#F8FAFC] flex items-center justify-center p-8"
          >
            <img 
              src={general2} 
              alt="Comfortable Dental Experience" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B2F5C]/40 to-transparent pointer-events-none" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-xs font-semibold tracking-[0.2em] uppercase text-[#1B4A8F] mb-4">
              Patient Comfort
            </div>
            <h2 className="text-[34px] sm:text-[42px] font-semibold text-[#0B2F5C] leading-tight tracking-tight">
              A Modern Approach
            </h2>
            <div className="mt-5 space-y-5 text-[#5A6B82] font-light leading-relaxed text-[15px]">
              <p>
                We believe that visiting the dentist shouldn't be a source of anxiety. Our practice is equipped 
                with modern technology and comfort amenities designed to make your experience as relaxing and 
                efficient as possible.
              </p>
              
              <div className="bg-[#F8FAFC] rounded-xl p-5 border border-[#E5ECF3]">
                <p className="mb-3 text-[15px] font-medium text-[#0B2F5C]">What to expect:</p>
                <ul className="space-y-3">
                  {[
                    "Gentle, compassionate care",
                    "State-of-the-art digital imaging",
                    "Clear, transparent treatment plans",
                    "A calm and welcoming environment",
                    "Comprehensive care for the whole family"
                  ].map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <FiCheckCircle className="text-[#1B4A8F] mt-1 shrink-0 text-lg" />
                      <span className="text-[#3F4B5C]">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ACCORDION FAQ */}
      <section className="pb-28 bg-[#FAFCFF] pt-24 border-t border-gray-100">
        <div className="container-x max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-[34px] font-semibold text-[#0B2F5C] tracking-tight">Frequently Asked Questions</h2>
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[24px] bg-white shadow-[0_15px_40px_-15px_rgba(11,47,92,0.1)] border border-[#E5ECF3] overflow-hidden"
          >
            {ACCORDION_ITEMS.map((item, i) => {
              const open = openFaq === i;
              return (
                <div key={item.q} className="border-b border-[#E5ECF3] last:border-b-0">
                  <button 
                    onClick={() => setOpenFaq(open ? null : i)}
                    className="w-full flex items-center justify-between p-6 sm:p-8 text-left hover:bg-[#F8FAFC] transition-colors group"
                  >
                    <span className="text-[20px] sm:text-[22px] font-medium text-[#0B2F5C] group-hover:text-[#1B4A8F] transition-colors">
                      {item.q}
                    </span>
                    <span className={`grid h-10 w-10 place-items-center rounded-full border border-[#E5ECF3] text-[#0B2F5C] transition-all duration-300 ${open ? 'bg-[#0B2F5C] text-white border-transparent rotate-180' : ''}`}>
                      <FiChevronDown className="text-xl" />
                    </span>
                  </button>
                  <motion.div 
                    initial={false}
                    animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 sm:px-8 pb-8 pt-2 text-[#5A6B82] font-light leading-relaxed text-[15.5px]">
                      {item.a}
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </div>
  );
}

import { useState } from "react";
import { FiChevronDown, FiCheckCircle, FiArrowUpRight, FiPhone, FiStar } from "react-icons/fi";
import { PageHeader } from "@/components/site/PageHeader";
import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import implantScan from "@/assets/x-guide-navigation.png";
import dentalImplantHero from "@/assets/dental_implant_hero.png";
import implantsWebp from "@/assets/implants.webp";

const ACCORDION_ITEMS = [
  {
    q: "Why Dental Implants?",
    a: (
      <>
        <p className="mb-4">Dental implants have become the preferred method of tooth replacement for several important reasons:</p>
        <ul className="list-disc pl-6 space-y-3">
          <li>No other treatment option prevents the bone resorption/deterioration that occurs when a tooth is lost or removed.</li>
          <li>This is the only tooth replacement option that preserves the adjacent teeth, as opposed to cutting them down to place a bridge or hooking a partial denture to them.</li>
          <li>Dental implants have by far the best long-term success rates of any treatment option – and this has been documented in the scientific literature for over four decades.</li>
          <li>Since dental implants are designed to last a lifetime, there is rarely a need for additional treatment. With other forms of tooth replacement that need to be replaced every 5 to 10 years, additional dentistry is almost always necessary in the future. As a result, dental implant treatment is the most cost-effective option long-term.</li>
        </ul>
      </>
    )
  },
  {
    q: "Replacing Multiple teeth",
    a: (
      <p>When multiple teeth are missing, dental implants can support a bridge or partial denture, eliminating the need for metal clasps or grinding down healthy adjacent teeth.</p>
    )
  }
];

const PROCESS_STEPS = [
  {
    title: "Implant Placement",
    desc: "Your doctor will administer anesthesia to prevent any sensation during surgery. Utilizing a gentle technique, your doctor will prepare the surgical site and place the dental implant in the proper position. A small cover screw will then be attached. The implant will be left undisturbed for several weeks to allow the bone to remodel around the implant."
  },
  {
    title: "Abutment Attachment",
    desc: "Once the bone has fused to the implant and formed a strong biological bond, a small connector post is attached. Your new replacement teeth will be attached to these custom abutments, designed specifically for the ideal shape of your replacement teeth."
  },
  {
    title: "Replacement Teeth",
    desc: "The final phase of treatment is designing and fabricating the final replacement crown, bridge, or set of teeth. We take digital impressions to create teeth that perfectly match your natural shade and smile, completing your permanent restoration."
  }
];

export function ImplantsPage() {
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
                <FiStar /> Advanced Implantology
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mt-6 font-display text-5xl sm:text-6xl lg:text-[72px] font-semibold leading-[1.02] text-white"
              >
                A Permanent,{" "}
                <span className="italic font-serif text-[#E9C77B]">Natural</span>
                <br /> Smile.
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-6 max-w-xl text-[16px] leading-relaxed text-white/80"
              >
                Restore your confidence, chewing ability, and aesthetics with our state-of-the-art dental implants and X-Guide navigation technology.
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
                  Book Implant Consultation
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
                  { v: "1,500+", l: "Implants Placed" },
                  { v: "99%", l: "Success Rate" },
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
                <img src={implantsWebp} alt="Precision Dental Implant" className="w-full h-[520px] object-cover transition-transform duration-[1200ms] group-hover:scale-[1.03]" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2F5C]/60 via-[#0B2F5C]/10 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* THE IMPLANT PROCESS (WITH VIDEO) */}
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
                The Process
              </div>
              <h2 className="text-[34px] sm:text-[46px] font-semibold text-[#0B2F5C] leading-tight tracking-tight mb-8">
                Your journey to a <span className="italic font-serif text-[#1B4A8F]">complete smile.</span>
              </h2>

              <div className="space-y-8 mt-10">
                {PROCESS_STEPS.map((step, i) => (
                  <motion.div 
                    key={step.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.15 }}
                    className="flex gap-5"
                  >
                    <div className="shrink-0 mt-1">
                      <div className="grid h-10 w-10 place-items-center rounded-full bg-[#1B4A8F]/10 text-[#1B4A8F] font-bold shadow-sm">
                        {i + 1}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-[22px] font-medium text-[#0B2F5C] mb-2 font-sans tracking-tight">
                        {step.title}
                      </h3>
                      <p className="text-[#5A6B82] font-light leading-relaxed text-[15.5px]">
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

            {/* Right side: YouTube Video */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative rounded-3xl overflow-hidden shadow-[0_30px_60px_-15px_rgba(11,47,92,0.25)] bg-[#0B2F5C] border-8 border-white aspect-[4/3] sm:aspect-video lg:aspect-auto lg:h-[600px]"
            >
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/14VfJ-BE31I?autoplay=0" 
                title="Colorado Maxillofacial & Oral Surgery Implants" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="absolute inset-0 w-full h-full object-cover"
              ></iframe>
            </motion.div>

          </div>
        </div>
      </section>

      {/* X-GUIDE NAVIGATION */}
      <section className="py-20 sm:py-24 bg-white relative">
        <div className="container-x max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 relative rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_-20px_rgba(11,47,92,0.2)] aspect-[4/3] w-full bg-white"
          >
            <img 
              src={implantScan} 
              alt="Advanced 3D X-Guide Navigation System" 
              className="absolute inset-0 w-full h-full object-contain p-4 transition-transform duration-1000 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B2F5C]/60 to-transparent pointer-events-none" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-xs font-semibold tracking-[0.2em] uppercase text-[#1B4A8F] mb-4">
              Precision Technology
            </div>
            <h2 className="text-[34px] sm:text-[42px] font-semibold text-[#0B2F5C] leading-tight tracking-tight">
              X-Guide Navigation
            </h2>
            <div className="mt-6 space-y-6 text-[#5A6B82] font-light leading-relaxed text-[16px]">
              <p>
                Traditional dental implant placement can be a long, drawn-out surgery. With the X-Guide Navigation
                System, we are able to place implants with greater efficiency and unprecedented precision. 
                The system provides a real-time 3D map, allowing for absolute accuracy throughout the procedure.
              </p>
              
              <div className="pt-4 bg-[#F8FAFC] rounded-2xl p-6 border border-[#E5ECF3]">
                <p className="mb-4 text-[16px] font-medium text-[#0B2F5C]">Benefits include:</p>
                <ul className="space-y-4">
                  {[
                    "Less invasive surgeries",
                    "Decreased chair & appointment time",
                    "Increased patient comfort",
                    "Decreased recovery time",
                    "Decreased risk of incorrect implant placement"
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

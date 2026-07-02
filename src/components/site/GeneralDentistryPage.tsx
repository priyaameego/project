import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { FiHome, FiChevronsRight, FiArrowUpRight, FiPhone } from "react-icons/fi";

const SERVICES = [
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
  return (
    <>
      {/* PAGE HEADER */}
      <section className="relative overflow-hidden bg-[#EAF2FB]">
        <div
          aria-hidden
          className="absolute top-0 right-0 h-[360px] w-[60%] rounded-bl-[100%] bg-white/70"
        />
        <div className="container-x relative py-14 sm:py-20">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-display text-4xl sm:text-6xl font-bold text-[#1B2A3D] tracking-tight"
          >
            General Dentistry
          </motion.h1>
          <motion.nav
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 shadow-sm border border-white"
          >
            <Link to="/" className="text-[#0F4C81] hover:text-[#0B3A66]">
              <FiHome size={18} />
            </Link>
            <FiChevronsRight className="text-[#0F4C81]" />
            <span className="text-[#0F4C81] font-semibold">General Dentistry</span>
          </motion.nav>
        </div>
      </section>

      {/* SERVICES STACK */}
      <section className="bg-white py-16 sm:py-20">
        <div className="container-x space-y-6">
          {SERVICES.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="group relative rounded-2xl bg-[#F5F6F8] hover:bg-white border border-transparent hover:border-[#0F4C81]/15 px-7 sm:px-12 py-10 sm:py-14 shadow-[0_1px_0_rgba(15,76,129,0.04)] hover:shadow-[0_20px_50px_-20px_rgba(15,76,129,0.25)] transition-all duration-500"
            >
              <span
                aria-hidden
                className="absolute left-0 top-1/2 -translate-y-1/2 h-12 w-1 rounded-r bg-[#0F4C81] opacity-0 group-hover:opacity-100 transition-opacity"
              />
              <h2 className="font-display text-3xl sm:text-5xl font-semibold text-[#3D7BD9] tracking-tight">
                {s.title}
              </h2>
              <p className="mt-5 text-[15px] sm:text-[17px] leading-[1.85] text-slate-500 max-w-5xl">
                {s.desc}
              </p>
            </motion.article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[#0F4C81] via-[#1B4A8F] to-[#0B2545] text-white py-20">
        <div className="container-x text-center max-w-3xl mx-auto">
          <h2 className="font-display text-4xl sm:text-5xl font-semibold leading-tight">
            Ready for your healthiest smile yet?
          </h2>
          <p className="mt-5 text-white/80">
            Book your comprehensive new-patient exam today — gentle care, transparent pricing, and a team that genuinely cares.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full pl-6 pr-2 py-2 text-sm font-semibold text-[#0F4C81] bg-white hover:bg-[#2EB6CC] hover:text-white transition-colors"
            >
              Book Appointment
              <span className="grid h-9 w-9 place-items-center rounded-full bg-[#0F4C81] text-white group-hover:rotate-45 transition-transform">
                <FiArrowUpRight />
              </span>
            </Link>
            <a
              href="tel:+19728336825"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white border border-white/30 hover:border-white hover:bg-white/10 transition-colors"
            >
              <FiPhone /> (972) 833-6825
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

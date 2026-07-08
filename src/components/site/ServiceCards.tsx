import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { GiDiamonds, GiMagicSwirl } from "react-icons/gi";
import { FaTooth } from "react-icons/fa";
import { FiArrowRight, FiShield } from "react-icons/fi";
import orthoImg from "@/assets/ortho-smile.jpg";

const CARDS = [
  {
    title: "Dental Implants",
    subtitle: "Permanent tooth replacement",
    img: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80",
    icon: <FaTooth />,
    to: "/implants",
  },
  {
    title: "General Dentistry",
    subtitle: "Healthy smiles, every visit",
    img: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=800&q=80",
    icon: <FiShield />,
    to: "/general-dentistry",
  },
  {
    title: "Cosmetic Dentistry",
    subtitle: "Veneers, whitening & more",
    img: "https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?auto=format&fit=crop&w=800&q=80",
    icon: <GiDiamonds />,
    to: "/cosmetic",
  },
  {
    title: "Orthodontics",
    subtitle: "Invisalign® & clear aligners",
    img: orthoImg,
    icon: <GiMagicSwirl />,
    to: "/orthodontics",
  },
] as const;

export function ServiceCards() {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden bg-white">
      <div className="container-x relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 sm:mb-16 text-center max-w-3xl mx-auto"
        >
          <span className="inline-block mb-5 px-4 py-1.5 text-[12px] font-semibold tracking-[0.2em] uppercase rounded-full bg-[#EAF6F9] text-[#0B2F5C]">
            Our Services
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold text-[#0B2F5C] leading-tight">
            Premium Care, <span className="italic text-[#1B4A8F]">Tailored</span> for You
          </h2>
          <p className="mt-5 text-[#5A6B82] text-lg max-w-2xl mx-auto">
            Experience the highest standard of modern dentistry in a calm, welcoming environment.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {CARDS.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative flex flex-col overflow-hidden rounded-[2rem] bg-white shadow-[0_20px_50px_-25px_rgba(11,47,92,0.2)] hover:shadow-[0_40px_80px_-25px_rgba(11,47,92,0.35)] border border-[#E5ECF3] transition-all duration-700 hover:-translate-y-3"
            >
              <div className="relative h-48 sm:h-56 overflow-hidden [perspective:1000px]">
                <img src={card.img} alt={card.title} className="h-full w-full object-cover transition-transform duration-[1500ms] group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2F5C]/90 via-[#0B2F5C]/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
                
                {/* Float Icon */}
                <div className="absolute top-4 left-4 grid h-12 w-12 place-items-center rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 text-white text-2xl shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12 group-hover:bg-blue-600/80">
                  {card.icon}
                </div>
                
                <div className="absolute bottom-4 left-5 right-5 transition-transform duration-500 group-hover:-translate-y-1">
                  <h3 className="font-display font-semibold text-xl text-white tracking-wide">{card.title}</h3>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1 bg-white">
                <p className="text-[15px] text-[#5A6B82] leading-relaxed flex-1">{card.subtitle}</p>
                <Link
                  to={card.to}
                  className="mt-6 inline-flex items-center gap-2 text-[14px] font-semibold text-[#1B4A8F] group-hover:gap-3 transition-all"
                >
                  Learn More <FiArrowRight />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

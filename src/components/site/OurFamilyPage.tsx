import { motion } from "framer-motion";
import { FiAward, FiHeart, FiStar, FiArrowUpRight } from "react-icons/fi";
import juma from "@/assets/team-juma.jpg";
import amanda from "@/assets/team-amanda.jpg";
import saghar from "@/assets/team-saghar.jpg";

const TEAM = [
  { img: "https://mckinneyddscenter.com/wp-content/uploads/2023/11/AMANDA-PORTRAIT.jpg", name: "Amanda", role: "Office Manager" },
  { img: saghar, name: "Saghar", role: "Hygienist" },
];



export function OurFamilyPage() {
  return (
    <>
      {/* HERO & DR. JUMA UNIFIED */}
      <section className="relative pt-16 lg:pt-24">
        {/* Split Background */}
        <div className="absolute inset-0 z-0 flex flex-col">
          <div className="h-[65%] bg-white" />
          <div className="h-[35%] bg-[#285BBB]" />
        </div>

        <div className="container-x relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="font-display text-4xl sm:text-5xl lg:text-[52px] font-normal text-[#444] leading-tight">
            About Our <span className="text-[#285BBB]">Family</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 max-w-4xl mx-auto text-[16px] sm:text-[19px] leading-[1.8] text-slate-400 font-light">
            The diversity of our family at McKinney Dental and implant Center reflects our commitment to <br className="hidden lg:block" /> serving your family with respect, dignity and heartfelt care!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-12 max-w-[700px] mx-auto rounded-t-lg overflow-hidden relative shadow-2xl">
            <img src={juma} alt="Dr. Daniel Juma" className="w-full h-auto object-cover align-bottom" />
          </motion.div>
        </div>
      </section>

      {/* DR. JUMA BIO (in the blue section) */}
      <section className="bg-[#285BBB] pb-24 pt-10 text-white relative z-10">
        <div className="container-x max-w-3xl mx-auto text-center px-6">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold">Daniel Juma, DDS</h2>
          <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-[11px] tracking-[0.15em] uppercase font-semibold">
            Founder & Lead Dentist
          </div>

          <div className="mt-10 space-y-5 text-white/90 text-[15.5px] leading-[1.8] text-left">
            <p>
              Dr. Daniel Juma is a graduate of Baylor College of Dentistry, Dallas, Texas. Dr. Juma earned his Doctorate in Dental Surgery in 2012 from Baylor, having been awarded for his excellence in Periodontology as well as being a recipient of the prestigious W.R Hammond Scholar and Dr. P Earl Williams Awards. 
            </p>
            <p>
              In addition, Dr. Juma’s preceptorship at Strong Memorial Hospital, Rochester General Hospital and Eastman Institute in New York exposed him to the different specialties of dentistry including Oral Pathology, Oral Surgery and Prosthodontics. During his tenure at Baylor, Dr. Juma also received training in enteral oral sedation and nitrous oxide administration.
            </p>
            <p>
              Additionally, Dr Juma is a proud member of the International Congress of Oral Implantologist’s and is relentless in his pursuit of higher learning, innovative technology and best practices when it comes to patient care.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-2.5">
            {["DDS, Baylor 2012", "ICOI Member", "W.R Hammond Scholar", "Sedation Certified"].map((c) => (
              <span key={c} className="inline-flex items-center gap-1.5 rounded-full bg-white/10 border border-white/20 px-3.5 py-1.5 text-xs text-white">
                <FiStar className="text-[#E9C77B]" /> {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="bg-[#F4F9FD] py-20 lg:py-28">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-[12px] font-semibold tracking-[0.2em] uppercase text-[#0F4C81]">Our Team</span>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl font-semibold text-[#0B2545]">
              The faces behind your <span className="italic font-serif text-[#0F4C81]">smile</span>
            </h2>
            <p className="mt-4 text-slate-600">
              A close-knit team committed to making every visit comfortable, professional, and personal.
            </p>
          </div>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-2 gap-10 max-w-4xl mx-auto">
            {TEAM.map((m, i) => (
              <motion.div key={m.name}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all">
                
                <div className="relative pt-12">
                  {/* Split Background inside the card */}
                  <div className="absolute inset-0 z-0 flex flex-col">
                    <div className="h-[55%] bg-transparent" />
                    <div className="h-[45%] bg-[#285BBB]" />
                  </div>
                  
                  <div className="relative z-10 px-8">
                    <div className="rounded-t-lg overflow-hidden shadow-2xl">
                      <img src={m.img} alt={`${m.name}, ${m.role}`} loading="lazy"
                        className="w-full h-[380px] object-cover align-bottom group-hover:scale-105 transition-transform duration-700" />
                    </div>
                  </div>
                  
                  <div className="relative z-10 bg-[#285BBB] p-6 text-center text-white pb-10">
                    <div className="font-display text-3xl font-semibold">{m.name}</div>
                    <div className="text-[12px] tracking-[0.15em] uppercase text-white/80 mt-2 font-medium">{m.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCED DOCTORS — SPECIALTY BAND */}
      <section className="relative overflow-hidden">
        {/* Background Layer with overlay */}
        <div className="relative">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1920&q=80" 
              alt="Premium Dental Clinic" 
              className="w-full h-full object-cover object-center"
            />
            {/* Subtle blue overlay: #0E3A5D */}
            <div className="absolute inset-0 bg-[#0E3A5D]/85 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0E3A5D] via-transparent to-[#0E3A5D]/50" />
          </div>

          <div className="container-x relative pt-24 lg:pt-36 pb-48 lg:pb-60 text-center z-10">
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
            >
              <h2 className="font-display text-4xl sm:text-5xl lg:text-[64px] font-semibold text-white leading-tight tracking-tight">
                Experienced doctors in <br className="hidden sm:block" />
                <span className="relative inline-block mt-1 sm:mt-2">
                  <span className="text-[#29B6E8] font-light italic">every specialty</span>
                  <motion.span
                    initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    style={{ transformOrigin: "left" }}
                    className="absolute left-0 right-0 -bottom-1 sm:-bottom-2 h-[2px] bg-[#29B6E8]/70 rounded-full" />
                </span>
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-8 max-w-3xl mx-auto text-white/90 text-[16px] sm:text-[18px] leading-[1.8] font-light">
              From general dentistry to implants, cosmetic care and orthodontics — our team brings
              advanced training and a calm, personal touch to every chair.
            </motion.p>
          </div>
        </div>

        {/* Overlapping image strip */}
        <div className="bg-[#F8FAFC]">
          <div className="container-x">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 -mt-32 lg:-mt-44 relative z-20">
              {[
                { src: "https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=800&q=80", alt: "State-of-the-art office" },
                { src: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80", alt: "Experienced specialist" },
                { src: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80", alt: "Personalized patient care" },
              ].map((img, i) => (
                <motion.div
                  key={img.src}
                  initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative rounded-[1.5rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(14,58,93,0.25)] bg-white cursor-pointer">
                  
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img src={img.src} alt={img.alt} loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0E3A5D]/80 via-[#0E3A5D]/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700" />
                    
                    {/* Inner border reveal */}
                    <div className="absolute inset-4 border border-white/0 group-hover:border-white/30 rounded-xl transition-colors duration-700 ease-in-out" />
                    
                    {/* Hover text & accent reveal */}
                    <div className="absolute bottom-6 left-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out flex items-center justify-between">
                      <span className="text-white font-medium tracking-wide text-sm">{img.alt}</span>
                      <div className="h-8 w-8 rounded-full bg-[#29B6E8] flex items-center justify-center shadow-lg">
                        <FiArrowUpRight className="text-white" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="h-24 lg:h-32" />
          </div>
        </div>
      </section>
    </>
  );
}


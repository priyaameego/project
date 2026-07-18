import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import amanda from "@/assets/team-amanda.jpg"; // Keeping Amanda as she's Office Manager, not Andrea

import implantScan from "@/assets/implant-scan.jpg";
import implantResult from "@/assets/implant-result.jpg";
import generalTech from "@/assets/general-care.jpg";

// Note: Removed Dr. He and Andrea as requested.
const TEAM = [
  { img: "https://mckinneyddscenter.com/wp-content/uploads/2023/11/AMANDA-PORTRAIT.jpg", name: "Amanda", role: "Office Manager" },
  { img: "https://mckinneyddscenter.com/wp-content/uploads/2023/11/Saghar-Hygienist-600x900.jpeg", name: "Saghar", role: "Hygienist" },
];

export function MeetTheTeamPage() {
  return (
    <>
      {/* TEAM HEADER & ROSTER */}
      <section className="bg-slate-50 pt-12 pb-20 lg:pt-16 lg:pb-28">
        <div className="container-x">
          <div className="text-center max-w-3xl mx-auto px-4">
            <motion.h1
              initial={{ opacity: 0, y: 16 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6 }}
              className="font-display text-4xl sm:text-5xl lg:text-[52px] font-semibold text-slate-900 leading-tight"
            >
              About Our <span className="text-blue-700">Family</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 text-[16px] sm:text-[19px] leading-[1.8] text-slate-600 font-light"
            >
              Our team is as diverse as the community we serve. Together, we're dedicated to providing exceptional dental care in a welcoming, inclusive environment where every patient feels valued.
            </motion.p>
          </div>

          <div className="mt-20 grid sm:grid-cols-2 gap-10 max-w-4xl mx-auto px-4">
            {TEAM.map((m, i) => (
              <motion.div 
                key={m.name}
                initial={{ opacity: 0, y: 24 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 bg-white"
              >
                <div className="relative overflow-hidden aspect-[4/5]">
                  <img 
                    src={m.img} 
                    alt={`${m.name}, ${m.role}`} 
                    loading="lazy"
                    className="w-full h-full object-cover align-bottom group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-blue-900/10 to-transparent opacity-80" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-center text-white">
                    <div className="font-display text-3xl font-semibold mb-2">{m.name}</div>
                    <div className="text-[12px] tracking-[0.2em] uppercase text-blue-200 font-bold">{m.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNOLOGY & CARE BAND */}
      <section className="relative overflow-hidden">
        {/* Background Layer with overlay */}
        <div className="relative">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1920&q=80" 
              alt="Premium Dental Clinic" 
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-blue-950/85 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-transparent to-blue-950/50" />
          </div>

          <div className="container-x relative pt-24 lg:pt-32 pb-48 lg:pb-60 text-center z-10">
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
            >
              <h2 className="font-display text-4xl sm:text-5xl lg:text-[56px] font-semibold text-white leading-tight tracking-tight max-w-4xl mx-auto">
                High-Quality Dental Care, <br className="hidden sm:block" />
                <span className="relative inline-block mt-2">
                  <span className="text-blue-300 font-light italic">Designed for Healthy Smiles</span>
                  <motion.span
                    initial={{ scaleX: 0 }} 
                    whileInView={{ scaleX: 1 }} 
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    style={{ transformOrigin: "left" }}
                    className="absolute left-0 right-0 -bottom-2 h-[2px] bg-blue-400/70 rounded-full" 
                  />
                </span>
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 16 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-8 max-w-3xl mx-auto text-white/90 text-[16px] sm:text-[18px] leading-[1.8] font-light">
              Experience the pinnacle of modern dentistry. We combine advanced technology, digital precision, and a calm, personal touch to deliver exceptional care tailored to you.
            </motion.p>
          </div>
        </div>

        {/* Premium Technology Gallery Strip */}
        <div className="bg-slate-50">
          <div className="container-x">
            <div className="-mt-32 lg:-mt-44 relative z-20 px-4">
              <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                autoplay={{ delay: 3500, disableOnInteraction: false }}
                loop
                pagination={{ clickable: true }}
                navigation={true}
                spaceBetween={30}
                slidesPerView={1}
                breakpoints={{
                  640: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                }}
                className="pb-16"
              >
                {[
                  { 
                    src: "https://mckinneyddscenter.com/wp-content/uploads/2022/01/Photo-9-min.jpg", 
                    alt: "Our Practice",
                    desc: "Modern Facility"
                  },

                  { 
                    src: "https://mckinneyddscenter.com/wp-content/uploads/2023/11/OFFICE-PHOTO.jpg", 
                    alt: "Office Interior",
                    desc: "Welcoming Reception"
                  },
                  { 
                    src: "https://mckinneyddscenter.com/wp-content/uploads/2021/10/rsw_1300h_800-2.webp", 
                    alt: "State of the Art",
                    desc: "Advanced Technology"
                  },
                  { 
                    src: "https://mckinneyddscenter.com/wp-content/uploads/2022/01/Photo-19-min.jpg", 
                    alt: "Consultation Room",
                    desc: "Personalized Care"
                  },
                  { 
                    src: "https://mckinneyddscenter.com/wp-content/uploads/2022/01/Photo-3-min.jpg", 
                    alt: "Treatment Area",
                    desc: "Pristine Environment"
                  },
                  { 
                    src: "https://mckinneyddscenter.com/wp-content/uploads/2022/01/Photo-4-min.jpg", 
                    alt: "Dental Suite",
                    desc: "Relaxing Experience"
                  },
                  { 
                    src: "https://mckinneyddscenter.com/wp-content/uploads/2022/01/Photo-5-min.jpg", 
                    alt: "Patient Care",
                    desc: "Dedicated Team"
                  },
                ].map((img, i) => (
                  <SwiperSlide key={img.src + i}>
                    <motion.div
                      initial={{ opacity: 0, y: 50 }} 
                      whileInView={{ opacity: 1, y: 0 }} 
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                      className="group relative rounded-3xl overflow-hidden shadow-2xl bg-white cursor-pointer"
                    >
                      <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
                        <img 
                          src={img.src} 
                          alt={img.alt} 
                          loading="lazy"
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-110" 
                        />
                      </div>
                    </motion.div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="h-24 lg:h-32" />
          </div>
        </div>
      </section>
    </>
  );
}

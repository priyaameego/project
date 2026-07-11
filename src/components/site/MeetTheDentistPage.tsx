import { motion } from "framer-motion";
import { FiStar, FiArrowUpRight, FiHeart, FiUsers, FiBookOpen, FiActivity } from "react-icons/fi";
import imp from "@/assets/imp.png";
import { CommunityService } from "@/components/site/CommunityService";
import { CommunitySlider } from "@/components/site/CommunitySlider";

const programs = [
  {
    icon: FiActivity,
    title: "Dental Outreach Programs",
    text: "Free dental screenings, cleanings, and treatments for underserved families across North Texas.",
    image:
      "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1200&q=80",
    tag: "Outreach",
  },
  {
    icon: FiUsers,
    title: "Volunteer Work",
    text: "Our team partners with local shelters and nonprofits to give time, care, and smiles where they're needed most.",
    image:
      "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=1200&q=80",
    tag: "Volunteer",
  },
  {
    icon: FiBookOpen,
    title: "Patient Education Events",
    text: "Workshops in schools and community centers teaching oral hygiene, nutrition, and preventive care.",
    image:
      "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=1200&q=80",
    tag: "Education",
  },
  {
    icon: FiHeart,
    title: "Community Service",
    text: "Sponsoring local events, supporting charities, and showing up for the McKinney community year-round.",
    image:
      "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1200&q=80",
    tag: "Service",
  },
];

export function MeetTheDentistPage() {
  return (
    <>
      <section className="relative pt-12 pb-16 lg:pt-16 lg:pb-24 overflow-hidden bg-slate-50">
        <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-blue-100/50 to-transparent pointer-events-none" />

        <div className="container-x relative z-10 px-6 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left: Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative rounded-3xl overflow-hidden shadow-2xl group mx-auto w-full max-w-sm lg:max-w-md aspect-[4/5]"
            >
              <img 
                src="https://mckinneyddscenter.com/wp-content/uploads/2023/11/DR.-JUMA-PORTRAIT.jpg" 
                alt="Dr. Daniel Juma" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 text-white">
                <h2 className="text-3xl font-display font-semibold text-white">Dr. Daniel Juma</h2>
                <p className="text-blue-200 font-medium tracking-widest uppercase text-xs mt-1">Founder & Lead Dentist</p>
              </div>
            </motion.div>

            {/* Right: Bio */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="flex flex-col space-y-8"
            >
              <div>
                <span className="text-blue-600 font-semibold tracking-widest uppercase text-sm">Meet The Dentist</span>
                <h1 className="text-4xl lg:text-5xl font-display font-semibold text-slate-900 mt-2 leading-tight">
                  A Passion for <span className="text-blue-600 italic">Perfect Smiles</span>
                </h1>
              </div>

              <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
                <p>
                  Dr. Daniel Juma is a graduate of Baylor College of Dentistry, Dallas, Texas. Earning his Doctorate in Dental Surgery in 2012, he was recognized for excellence in Periodontology and received the prestigious W.R Hammond Scholar and Dr. P Earl Williams Awards.
                </p>
                <p>
                  His preceptorship at Strong Memorial Hospital, Rochester General Hospital, and Eastman Institute in New York exposed him to diverse specialties including Oral Pathology, Oral Surgery, and Prosthodontics. He also holds advanced training in enteral oral sedation and nitrous oxide administration.
                </p>
                <p>
                  A proud member of the International Congress of Oral Implantologists (ICOI), Dr. Juma is relentless in his pursuit of higher learning, innovative technology, and best practices to ensure optimal patient care.
                </p>
              </div>

              {/* Credentials / Highlights */}
              <div className="pt-6 border-t border-slate-200">
                <div className="grid grid-cols-2 gap-4">
                  {["DDS, Baylor 2012", "ICOI Member", "W.R Hammond Scholar", "Sedation Certified"].map((c, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                        <FiStar className="text-blue-600 w-4 h-4" />
                      </div>
                      <span className="font-medium text-slate-800 text-sm">{c}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Article Section */}
      <section className="py-24 bg-white relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-50 rounded-full blur-[120px] pointer-events-none" />
        <div className="container-x max-w-5xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{ y: -8 }}
            className="relative rounded-[2.5rem] overflow-hidden shadow-[0_20px_60px_-15px_rgba(30,64,175,0.4)] bg-slate-900 text-white flex flex-col md:flex-row group border border-slate-800/50"
          >
            {/* Ambient inner glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-10" />
            
            <div className="md:w-1/2 p-12 lg:p-16 flex flex-col justify-center relative z-20">
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="inline-block px-4 py-1.5 bg-blue-500/20 text-blue-300 text-[11px] font-bold tracking-[0.2em] uppercase rounded-full w-max mb-6 border border-blue-400/20 shadow-sm"
              >
                Must Read
              </motion.span>
              <h3 className="text-3xl lg:text-4xl font-display font-semibold leading-tight mb-5 text-white">
                The Future of Implant Dentistry
              </h3>
              <p className="text-slate-300 text-lg mb-8 leading-relaxed font-light">
                Discover how 3D-guided surgery and advanced digital scanning are making implants safer, faster, and more comfortable than ever before.
              </p>
              <button className="flex items-center gap-2 font-semibold text-white group-hover:text-blue-400 transition-colors duration-300 w-max text-sm uppercase tracking-wider">
                Read Full Article <FiArrowUpRight className="text-lg group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
            
            <div className="md:w-1/2 relative min-h-[350px] md:min-h-full overflow-hidden">
              {/* Slanted divider overlay for desktop */}
              <div className="hidden md:block absolute -left-12 top-0 bottom-0 w-24 bg-slate-900 -skew-x-[15deg] z-10" />
              
              <div className="absolute inset-0 bg-slate-900/20 mix-blend-multiply z-10 group-hover:bg-transparent transition-colors duration-700" />
              <motion.img 
                src={imp} 
                alt="Implant Dentistry Technology" 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110" 
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Community Content Migrated Here */}
      <div className="border-t border-slate-200">
        <CommunityService />
        <CommunitySlider />

        {/* Kenya 2019 Video */}
        <section className="relative overflow-hidden bg-white py-24">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(40,91,187,0.04),transparent_60%)] pointer-events-none" />
          <div className="relative mx-auto max-w-5xl px-6">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-10"
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-800 text-[11px] font-bold tracking-[0.2em] uppercase border border-blue-200/60 shadow-sm">
                Mission Trip
              </span>
              <h2 className="mt-5 font-display font-semibold text-3xl md:text-4xl text-slate-900 tracking-tight">
                KENYA <span className="italic text-blue-600">2019</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="relative rounded-[2rem] overflow-hidden shadow-[0_24px_80px_-30px_rgba(15,76,129,0.35)] bg-slate-900 border border-slate-200"
            >
              <div className="aspect-video w-full">
                <iframe
                  src="https://player.vimeo.com/video/509890241?h=27b2119189&title=0&byline=0&portrait=0"
                  className="w-full h-full"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title="Kenya Mission Trip 2019"
                />
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}

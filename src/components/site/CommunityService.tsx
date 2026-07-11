import { motion } from "framer-motion";
import { FiHeart, FiGlobe, FiUsers, FiGift } from "react-icons/fi";

const highlights = [
  { icon: FiHeart, title: "Compassionate Care", text: "Treating every patient like family, near and far." },
  { icon: FiGlobe, title: "Global Mission Trips", text: "Bringing dental care to underserved communities abroad." },
  { icon: FiUsers, title: "Local Volunteering", text: "Active partners with McKinney charities and schools." },
  { icon: FiGift, title: "Paying It Forward", text: "Honoring the mentors and families who shaped us." },
];

export function CommunityService() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#f5f9ff] to-white pt-12 pb-24">
      {/* Decorative blobs */}
      <motion.div
        aria-hidden
        className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-[#285BBB]/10 blur-3xl"
        animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-[#2EB6CC]/10 blur-3xl"
        animate={{ y: [0, -30, 0], x: [0, -20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#285BBB]/10 text-[#285BBB] text-sm font-semibold tracking-wider uppercase">
            Our Heart
          </span>
          <h2 className="mt-4 font-serif text-4xl md:text-6xl text-slate-900">
            Community <span className="italic text-[#285BBB]">Service</span>
          </h2>
          <p className="mt-5 max-w-2xl mx-auto text-lg text-slate-600 leading-relaxed">
            We strongly believe in giving back to the community and those in need.
            Our purpose goes above and beyond dentistry as a job.
          </p>
        </motion.div>

        {/* Main split */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <motion.div
              whileHover={{ scale: 1.02, rotate: -1 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="relative overflow-hidden rounded-3xl shadow-2xl"
            >
              <img
                src="https://mckinneyddscenter.com/wp-content/uploads/2021/10/GivinfBack.png"
                alt="Dentist hugging a young patient during a community service trip"
                className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2F5C]/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="text-xs uppercase tracking-widest opacity-80">Mission moment</p>
                <p className="font-serif text-2xl mt-1">Smiles that travel the world.</p>
              </div>
            </motion.div>

          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-3xl bg-white shadow-xl border border-slate-100 p-8 md:p-10">
              <h3 className="font-serif text-3xl md:text-4xl text-slate-900 tracking-tight">
                Giving Back
              </h3>
              <div className="mt-2 h-1 w-16 bg-gradient-to-r from-[#285BBB] to-[#2EB6CC] rounded-full" />

              <p className="mt-6 text-slate-600 leading-relaxed">
                From the beginning of our dental careers, we have always believed in giving back to the community.
                Each of us came from humble beginnings, and we hope to honor our families, mentors, and friends
                by always paying it forward.
              </p>
              <p className="mt-4 text-slate-600 leading-relaxed">
                We are actively involved in our local communities through volunteer events and charities.
                Internationally, we travel on mission trips to provide dental care where it is needed most.
              </p>

              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                {highlights.map((h, i) => (
                  <motion.div
                    key={h.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i, duration: 0.5 }}
                    className="group flex gap-2.5 p-3 rounded-xl bg-gradient-to-br from-[#f5f9ff] to-white border border-slate-100 hover:border-[#285BBB]/30 hover:shadow-lg transition-all"
                  >
                    <div className="shrink-0 h-8 w-8 rounded-lg bg-[#285BBB]/10 text-[#285BBB] flex items-center justify-center text-sm group-hover:bg-[#285BBB] group-hover:text-white transition-colors">
                      <h.icon />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 text-sm">{h.title}</p>
                      <p className="text-xs text-slate-500 mt-1 leading-relaxed">{h.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { FiHeart, FiUsers, FiBookOpen, FiActivity } from "react-icons/fi";

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


export function CommunityOutreach() {
  return (
    <section className="relative overflow-clip bg-white py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(40,91,187,0.06),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#2EB6CC]/10 text-[#0F4C81] text-xs font-semibold tracking-[0.18em] uppercase">
            Community Outreach
          </span>
          <h2 className="mt-5 font-serif text-4xl md:text-5xl text-slate-900 leading-tight">
            Caring beyond the <span className="italic text-[#285BBB]">clinic walls</span>
          </h2>
          <p className="mt-5 text-lg text-slate-600 leading-relaxed">
            From dental outreach to education and volunteering, we're committed to building healthier
            smiles and stronger communities — one neighborhood at a time.
          </p>
        </motion.div>

        {/* Gallery grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-12">
          {programs.map((p, i) => {
            const span =
              i === 0
                ? "lg:col-span-7 lg:row-span-2"
                : i === 1
                ? "lg:col-span-5"
                : i === 2
                ? "lg:col-span-5"
                : "lg:col-span-7";
            const h = i === 0 ? "h-[520px]" : "h-[250px]";
            return (
              <motion.article
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className={`group relative overflow-hidden rounded-3xl shadow-[0_20px_60px_-30px_rgba(15,76,129,0.45)] ${span} ${h}`}
              >
                <img
                  src={p.image}
                  alt={p.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2F5C]/90 via-[#0B2F5C]/40 to-transparent" />

                <div className="absolute top-5 left-5">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/95 backdrop-blur px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-[#0F4C81] shadow">
                    <p.icon className="text-[#2EB6CC]" />
                    {p.tag}
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                  <h3 className="font-serif text-2xl md:text-3xl leading-tight">{p.title}</h3>
                  <p className="mt-2 text-sm md:text-base text-white/85 max-w-xl leading-relaxed">
                    {p.text}
                  </p>
                  <div className="mt-4 h-[2px] w-12 bg-[#2EB6CC] transition-all duration-500 group-hover:w-24" />
                </div>
              </motion.article>
            );
          })}
        </div>

      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { FiCheck } from "react-icons/fi";

const SERVICES = [
  { label: "Cleanings" },
  { label: "Metal-Free Fillings" },
  { label: "Crowns" },
  { label: "Root Canals" },
  { label: "Dentures" },
  { label: "Sleep Appliances" },
  { label: "X-Guide Implant Navigation" },
  { label: "Orthodontics" },
  { label: "Cosmetic Dentistry" },
  { label: "Dental Implants" },
];

export function Welcome() {
  return (
    <section className="relative overflow-hidden">
      <div className="grid lg:grid-cols-2">
        {/* Left — Clinic Photo */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative h-72 sm:h-96 lg:h-auto lg:min-h-[520px]"
        >
          <img
            src="https://mckinneyddscenter.com/wp-content/uploads/2023/11/OFFICE-PHOTO.jpg"
            alt="McKinney Dental & Implant Center exterior with team"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </motion.div>

        {/* Right */}
        <div className="flex flex-col">
          {/* Top — Gray heading area */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-[#5a6b7e] px-8 py-10 lg:px-12 lg:py-14"
          >
            <p className="text-sm font-medium tracking-[0.25em] uppercase text-white/80">
              Our Specialty
            </p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold leading-[1.15] text-white">
              Individualized Dental Care
            </h2>
          </motion.div>

          {/* Bottom — White services area */}
          <div className="flex-1 bg-white px-8 py-8 lg:px-12 lg:py-10">
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-5">
              {SERVICES.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: 0.05 * i }}
                  className="flex items-center gap-3.5"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#285BBB] text-white">
                    <FiCheck className="text-base" />
                  </span>
                  <span className="text-[15px] font-medium text-[#4a6fa5]">
                    {s.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

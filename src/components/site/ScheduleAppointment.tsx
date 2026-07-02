import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";

export function ScheduleAppointment() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Dark wood-grain style background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #1a1f2a 0%, #0f1419 50%, #1a1f2a 100%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-30 mix-blend-overlay"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, rgba(255,255,255,0.04) 0px, rgba(255,255,255,0.04) 1px, transparent 1px, transparent 6px)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-6 md:gap-10 items-center">
          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10 group"
          >
            <img
              src="https://mckinneyddscenter.com/wp-content/uploads/2021/11/7F8A4027_1-1.png"
              alt="Dr. Juma — McKinney Dental & Implant Center"
              className="w-full h-[320px] sm:h-[420px] md:h-[520px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </motion.div>

          {/* Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative rounded-2xl bg-[#0d1117]/95 backdrop-blur-sm ring-1 ring-white/10 shadow-2xl p-8 sm:p-12 md:p-16 text-center"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              Schedule an Appointment
            </h2>
            <p className="mt-4 text-base sm:text-lg text-white/70">
              Your New Smile Begins Here.
            </p>

            <div className="mt-8 sm:mt-10 flex justify-center">
              <Link
                to="/patient-checkin"
                className="group relative inline-flex w-full sm:w-auto items-center justify-center px-8 sm:px-12 py-3 sm:py-4 rounded-xl text-white text-sm sm:text-base font-semibold bg-[#2EB6CC] hover:bg-[#26a3b8] transition-all duration-300 shadow-[0_0_30px_rgba(46,182,204,0.5)] hover:shadow-[0_0_45px_rgba(46,182,204,0.75)] hover:-translate-y-0.5"
              >
                <span className="relative z-10">Book Appointment</span>
                <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 -translate-x-full group-hover:translate-x-full transition-all duration-700" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

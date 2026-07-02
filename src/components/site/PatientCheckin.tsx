import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiUser,
  FiCalendar,
  FiPhone,
  FiMail,
  FiMapPin,
  FiCheckCircle,
  FiShield,
  FiArrowRight,
  FiClock,
  FiClipboard,
  FiSmile,
} from "react-icons/fi";

const STEPS = [
  { icon: FiClipboard, label: "Verify your appointment" },
  { icon: FiSmile, label: "Confirm your information" },
  { icon: FiCheckCircle, label: "You're checked in" },
];

export function PatientCheckin() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0B2F5C] via-[#143F7A] to-[#1B4A8F] py-16 sm:py-24">
      <div
        aria-hidden
        className="absolute -left-32 top-10 h-[460px] w-[460px] rounded-full"
        style={{ background: "radial-gradient(closest-side, rgba(46,182,204,0.30), transparent)" }}
      />
      <div
        aria-hidden
        className="absolute -right-32 bottom-0 h-[500px] w-[500px] rounded-full"
        style={{ background: "radial-gradient(closest-side, rgba(123,208,224,0.18), transparent)" }}
      />
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      <div className="container-x relative">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-white"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-4 py-1.5 text-[11.5px] font-semibold tracking-[0.2em] uppercase text-[#BBE3F9] border border-white/15">
              <FiClock className="text-[#7BD0E0]" /> Skip The Front Desk
            </span>

            <h1 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05]">
              Patient{" "}
              <span className="italic font-serif text-[#7BD0E0]">Check-In</span>
            </h1>

            <p className="mt-5 text-white/75 max-w-lg text-[15px] leading-relaxed">
              Save time on the day of your visit — check in online from your phone or computer
              before you arrive at McKinney Dental and Implant Center.
            </p>

            <div className="mt-8 space-y-3 text-white/85 text-[14.5px]">
              <div className="flex items-start gap-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-white/10 border border-white/15 text-[#7BD0E0]">
                  <FiMapPin />
                </span>
                <span className="pt-1.5">3100 Ridge Road, Ste 300, McKinney, TX 75070</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-white/10 border border-white/15 text-[#7BD0E0]">
                  <FiPhone />
                </span>
                <a href="tel:+19728336825" className="pt-1.5 hover:text-[#7BD0E0] transition-colors">
                  (972) 833-6825
                </a>
              </div>
            </div>

            <div className="mt-8 space-y-3">
              {STEPS.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.15 + i * 0.08 }}
                  className="flex items-center gap-3 text-[14.5px] text-white/90"
                >
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-[#2EB6CC]/20 text-[#7BD0E0]">
                    <s.icon className="text-[13px]" />
                  </span>
                  <span className="text-white/70 text-[12px] font-semibold tracking-[0.15em] uppercase mr-1">
                    Step {i + 1}
                  </span>
                  {s.label}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="relative"
          >
            <div
              aria-hidden
              className="absolute -inset-3 rounded-[28px] bg-gradient-to-br from-[#7BD0E0]/40 via-white/10 to-transparent blur-xl"
            />
            <div className="relative rounded-[24px] bg-white shadow-[0_40px_80px_-30px_rgba(0,0,0,0.55)] overflow-hidden">
              <div className="h-1.5 bg-gradient-to-r from-[#2EB6CC] via-[#1B4A8F] to-[#0B2F5C]" />

              <div className="p-7 sm:p-10">
                {!submitted ? (
                  <>
                    <div className="flex items-center gap-3">
                      <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-[#0B2F5C] to-[#1B4A8F] text-white">
                        <FiClipboard />
                      </span>
                      <div>
                        <h2 className="font-display text-[24px] sm:text-[26px] font-semibold text-[#0B2F5C] leading-tight">
                          Check In For Your Visit
                        </h2>
                        <p className="text-[12.5px] text-[#6B7C95]">
                          Takes less than 60 seconds.
                        </p>
                      </div>
                    </div>

                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        setSubmitted(true);
                      }}
                      className="mt-7 space-y-4"
                    >
                      <Field icon={FiUser} label="Full Name" type="text" placeholder="Jane Doe" />
                      <div className="grid sm:grid-cols-2 gap-4">
                        <Field icon={FiCalendar} label="Date of Birth" type="date" />
                        <Field icon={FiPhone} label="Phone Number" type="tel" placeholder="(972) 555-0123" />
                      </div>
                      <Field icon={FiMail} label="Email Address" type="email" placeholder="you@email.com" />
                      <Field icon={FiCalendar} label="Appointment Date" type="date" />

                      <label className="flex items-start gap-2.5 text-[12.5px] text-[#475569] leading-relaxed">
                        <input type="checkbox" required className="mt-0.5 accent-[#0B2F5C]" />
                        <span>
                          I confirm my information is accurate and consent to McKinney Dental's{" "}
                          <a href="#" className="text-[#1B4A8F] font-semibold hover:underline">
                            HIPAA Privacy Notice
                          </a>
                          .
                        </span>
                      </label>

                      <motion.button
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        className="group w-full inline-flex items-center justify-center gap-2 rounded-full py-3.5 text-[14px] font-semibold text-white bg-gradient-to-r from-[#0B2F5C] to-[#1B4A8F] shadow-[0_14px_30px_-12px_rgba(11,47,92,0.6)] hover:shadow-[0_18px_36px_-12px_rgba(11,47,92,0.75)] transition-all"
                      >
                        Complete Check-In
                        <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                      </motion.button>
                    </form>
                  </>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className="py-6 text-center"
                  >
                    <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-[#EAF6F9] text-[#2EB6CC]">
                      <FiCheckCircle className="text-3xl" />
                    </div>
                    <h3 className="mt-5 font-display text-2xl font-semibold text-[#0B2F5C]">
                      You're checked in!
                    </h3>
                    <p className="mt-2 text-[14px] text-[#6B7C95] max-w-sm mx-auto">
                      Please have a seat in our lobby. A team member will greet you shortly.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-6 text-[13px] font-semibold text-[#1B4A8F] hover:text-[#2EB6CC] transition-colors"
                    >
                      Check in another patient
                    </button>
                  </motion.div>
                )}

                <div className="mt-7 pt-5 border-t border-[#EEF2F7] flex items-center justify-center gap-2 text-[11.5px] text-[#6B7C95]">
                  <FiShield className="text-[#2EB6CC]" />
                  256-bit SSL · HIPAA-Compliant · Your data is protected
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Field({
  icon: Icon,
  label,
  type,
  placeholder,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  type: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block text-[12px] font-semibold tracking-wide text-[#475569] mb-1.5">
        {label}
      </label>
      <div className="relative group">
        <Icon className="absolute left-4 top-1/2 -translate-y-1/2 text-[#94A3B8] group-focus-within:text-[#2EB6CC] transition-colors" />
        <input
          type={type}
          placeholder={placeholder}
          required
          className="w-full rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] pl-11 pr-4 py-3 text-[14px] text-[#0B2F5C] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#2EB6CC] focus:bg-white focus:ring-4 focus:ring-[#2EB6CC]/15 transition-all"
        />
      </div>
    </div>
  );
}

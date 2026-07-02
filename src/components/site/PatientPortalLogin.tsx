import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiMail,
  FiLock,
  FiUser,
  FiPhone,
  FiMapPin,
  FiCheckCircle,
  FiCalendar,
  FiMessageCircle,
  FiFileText,
  FiShield,
  FiArrowRight,
  FiEye,
  FiEyeOff,
} from "react-icons/fi";

const FEATURES = [
  { icon: FiCalendar, label: "Confirm & Schedule Appointments" },
  { icon: FiMessageCircle, label: "Communicate With Your Provider" },
  { icon: FiFileText, label: "Fill Out & Submit Patient Forms" },
];

export function PatientPortalLogin() {
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [showPwd, setShowPwd] = useState(false);
  const [remember, setRemember] = useState(false);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0B2F5C] via-[#143F7A] to-[#1B4A8F] py-16 sm:py-24">
      {/* ambient glow */}
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
          {/* Left: brand & info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-white"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-4 py-1.5 text-[11.5px] font-semibold tracking-[0.2em] uppercase text-[#BBE3F9] border border-white/15">
              <FiShield className="text-[#7BD0E0]" /> Secure Patient Portal
            </span>

            <h1 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05]">
              McKinney Dental{" "}
              <span className="italic font-serif text-[#7BD0E0]">and</span> Implant Center
            </h1>

            <p className="mt-5 text-white/75 max-w-lg text-[15px] leading-relaxed">
              Access your dental records, manage appointments and communicate securely with your
              care team — anytime, anywhere.
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
              {FEATURES.map((f, i) => (
                <motion.div
                  key={f.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.15 + i * 0.08 }}
                  className="flex items-center gap-3 text-[14.5px] text-white/90"
                >
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-[#2EB6CC]/20 text-[#7BD0E0]">
                    <FiCheckCircle />
                  </span>
                  {f.label}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: card */}
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
              {/* accent bar */}
              <div className="h-1.5 bg-gradient-to-r from-[#2EB6CC] via-[#1B4A8F] to-[#0B2F5C]" />

              <div className="p-7 sm:p-10">
                {/* Toggle */}
                <div className="relative grid grid-cols-2 p-1 rounded-full bg-[#F1F5FA] border border-[#E5ECF3]">
                  <motion.div
                    layout
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    className={`absolute inset-y-1 w-[calc(50%-4px)] rounded-full bg-gradient-to-r from-[#0B2F5C] to-[#1B4A8F] shadow-[0_8px_20px_-8px_rgba(11,47,92,0.55)] ${
                      mode === "login" ? "left-1" : "left-[calc(50%+0px)]"
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setMode("login")}
                    className={`relative z-10 py-2.5 text-[13.5px] font-semibold rounded-full transition-colors ${
                      mode === "login" ? "text-white" : "text-[#0B2F5C]"
                    }`}
                  >
                    Sign In
                  </button>
                  <button
                    type="button"
                    onClick={() => setMode("signup")}
                    className={`relative z-10 py-2.5 text-[13.5px] font-semibold rounded-full transition-colors ${
                      mode === "signup" ? "text-white" : "text-[#0B2F5C]"
                    }`}
                  >
                    Create Account
                  </button>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={mode}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                    className="mt-7"
                  >
                    <h2 className="font-display text-[26px] sm:text-[28px] font-semibold text-[#0B2F5C]">
                      {mode === "login" ? "Welcome back" : "Create your account"}
                    </h2>
                    <p className="mt-1 text-[13.5px] text-[#6B7C95]">
                      {mode === "login"
                        ? "Sign in to manage your appointments and records."
                        : "Join the McKinney Dental patient portal in under a minute."}
                    </p>

                    <form
                      onSubmit={(e) => e.preventDefault()}
                      className="mt-6 space-y-4"
                    >
                      {mode === "signup" && (
                        <Field icon={FiUser} label="Full Name" type="text" placeholder="Jane Doe" />
                      )}
                      <Field icon={FiMail} label="Email Address" type="email" placeholder="you@email.com" />
                      {mode === "signup" && (
                        <Field icon={FiPhone} label="Phone Number" type="tel" placeholder="(972) 555-0123" />
                      )}
                      <PasswordField
                        show={showPwd}
                        onToggle={() => setShowPwd((s) => !s)}
                        label="Password"
                      />

                      {mode === "login" ? (
                        <div className="flex items-center justify-between text-[13px]">
                          <label className="inline-flex items-center gap-2 cursor-pointer select-none">
                            <button
                              type="button"
                              onClick={() => setRemember((r) => !r)}
                              className={`grid h-4 w-4 place-items-center rounded border transition-colors ${
                                remember
                                  ? "bg-[#0B2F5C] border-[#0B2F5C] text-white"
                                  : "bg-white border-[#CBD5E1]"
                              }`}
                              aria-pressed={remember}
                            >
                              {remember && <FiCheckCircle className="text-[10px]" />}
                            </button>
                            <span className="text-[#475569]">Remember me</span>
                          </label>
                          <a href="#" className="font-semibold text-[#1B4A8F] hover:text-[#2EB6CC] transition-colors">
                            Forgot password?
                          </a>
                        </div>
                      ) : (
                        <label className="flex items-start gap-2.5 text-[12.5px] text-[#475569] leading-relaxed">
                          <input type="checkbox" className="mt-0.5 accent-[#0B2F5C]" />
                          <span>
                            I agree to the{" "}
                            <a href="#" className="text-[#1B4A8F] font-semibold hover:underline">
                              Terms of Service
                            </a>{" "}
                            and{" "}
                            <a href="#" className="text-[#1B4A8F] font-semibold hover:underline">
                              HIPAA Privacy Notice
                            </a>
                            .
                          </span>
                        </label>
                      )}

                      <motion.button
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        className="group w-full inline-flex items-center justify-center gap-2 rounded-full py-3.5 text-[14px] font-semibold text-white bg-gradient-to-r from-[#0B2F5C] to-[#1B4A8F] shadow-[0_14px_30px_-12px_rgba(11,47,92,0.6)] hover:shadow-[0_18px_36px_-12px_rgba(11,47,92,0.75)] transition-all"
                      >
                        {mode === "login" ? "Sign In Securely" : "Create My Account"}
                        <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                      </motion.button>

                      <div className="flex items-center gap-3 pt-1">
                        <span className="h-px flex-1 bg-[#E5ECF3]" />
                        <span className="text-[11px] uppercase tracking-[0.2em] text-[#94A3B8]">or</span>
                        <span className="h-px flex-1 bg-[#E5ECF3]" />
                      </div>

                      <p className="text-center text-[13.5px] text-[#475569]">
                        {mode === "login" ? "Don't have an account?" : "Already registered?"}{" "}
                        <button
                          type="button"
                          onClick={() => setMode(mode === "login" ? "signup" : "login")}
                          className="font-semibold text-[#1B4A8F] hover:text-[#2EB6CC] transition-colors"
                        >
                          {mode === "login" ? "Sign Up" : "Sign In"}
                        </button>
                      </p>
                    </form>
                  </motion.div>
                </AnimatePresence>

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
          className="w-full rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] pl-11 pr-4 py-3 text-[14px] text-[#0B2F5C] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#2EB6CC] focus:bg-white focus:ring-4 focus:ring-[#2EB6CC]/15 transition-all"
        />
      </div>
    </div>
  );
}

function PasswordField({
  show,
  onToggle,
  label,
}: {
  show: boolean;
  onToggle: () => void;
  label: string;
}) {
  return (
    <div>
      <label className="block text-[12px] font-semibold tracking-wide text-[#475569] mb-1.5">
        {label}
      </label>
      <div className="relative group">
        <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-[#94A3B8] group-focus-within:text-[#2EB6CC] transition-colors" />
        <input
          type={show ? "text" : "password"}
          placeholder="••••••••"
          className="w-full rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] pl-11 pr-12 py-3 text-[14px] text-[#0B2F5C] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#2EB6CC] focus:bg-white focus:ring-4 focus:ring-[#2EB6CC]/15 transition-all"
        />
        <button
          type="button"
          onClick={onToggle}
          className="absolute right-3 top-1/2 -translate-y-1/2 grid h-8 w-8 place-items-center rounded-lg text-[#94A3B8] hover:text-[#0B2F5C] hover:bg-[#F1F5FA] transition-colors"
          aria-label={show ? "Hide password" : "Show password"}
        >
          {show ? <FiEyeOff /> : <FiEye />}
        </button>
      </div>
    </div>
  );
}

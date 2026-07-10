import { motion } from "framer-motion";
import { FiExternalLink, FiShield, FiLock } from "react-icons/fi";
const LOGO_SRC = "https://mckinneyddscenter.com/wp-content/uploads/2026/06/MDIC-scaled.png";

export function PatientForms() {
  return (
    <div className="min-h-screen bg-[#F5F7FA] flex flex-col">
      {/* Header Bar */}
      <header
        className="w-full py-6 sm:py-8 px-6 sm:px-10"
        style={{ background: "linear-gradient(135deg, #2B4A7C 0%, #1E3A5F 100%)" }}
      >
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
          <img
            src={LOGO_SRC}
            alt="McKinney Dental and Implant Center"
            className="h-12 sm:h-14 w-auto bg-white rounded-md p-1 object-contain shrink-0"
          />
          <div className="text-white">
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight leading-tight">
              McKinney Dental and Implant Center
            </h1>
            <p className="mt-1 text-sm sm:text-base text-white/85 font-light italic">
              (972) 833-6825 &nbsp;&nbsp;|&nbsp;&nbsp; 3100 Ridge Road, Ste 300, McKinney, TX 75070
            </p>
          </div>
        </div>
      </header>

      {/* Form Body */}
      <main className="flex-1 flex items-start justify-center px-4 py-10 sm:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-xl"
        >
          <div className="bg-white rounded-2xl shadow-[0_8px_40px_-12px_rgba(30,58,95,0.12)] border border-[#E8ECF1] p-8 sm:p-10 text-center">
            <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-[#EAF6F9] text-[#2EB6CC] mb-5">
              <FiShield size={32} />
            </div>
            <h2 className="text-2xl sm:text-[28px] font-bold text-[#2D3748] tracking-tight">
              Patient Forms
            </h2>
            <p className="mt-3 text-[15px] text-[#718096] leading-relaxed">
              Please complete your new-patient paperwork securely through our partnered HIPAA-compliant portal.
            </p>

            <div className="mt-8 flex items-center justify-center gap-2 text-sm text-[#718096]">
              <FiLock size={16} className="text-[#2EB6CC]" />
              <span>Your information is encrypted and secure.</span>
            </div>

            <motion.a
              href="https://forms.mydentistlink.com/7c4248ed-922b-4a5c-b9f4-401cd38657b3"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-xl py-4 text-[15px] font-semibold text-white transition-all"
              style={{ background: "#2EB6CC", boxShadow: "0 4px 20px rgba(46,182,204,0.35)" }}
            >
              Open Patient Form
              <FiExternalLink size={18} />
            </motion.a>

            <p className="mt-6 text-xs text-[#A0AEC0]">
              You will be redirected to our secure forms partner to complete your registration.
            </p>
          </div>
        </motion.div>
      </main>
    </div>
  );
}

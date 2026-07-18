import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useRouterState } from "@tanstack/react-router";
import { HiMenu, HiX } from "react-icons/hi";
import {
  FiPhone,
  FiMail,
  FiInstagram,
  FiFacebook,
  FiChevronDown,
  FiArrowUpRight,
  FiMapPin,
  FiClock,
} from "react-icons/fi";
import LOGO_SRC from "@/assets/logo.png";

type Item = { label: string; to: string; children?: { label: string; to: string; desc?: string }[] };

const NAV: Item[] = [
  {
    label: "Our Family",
    to: "/meet-the-dentist",
    children: [
      { label: "Meet The Dentist", to: "/meet-the-dentist", desc: "Dr. Daniel Juma" },
      { label: "Meet The Team", to: "/meet-the-team", desc: "Our dedicated staff" },
    ],
  },
  {
    label: "Services",
    to: "/services",
    children: [
      { label: "General Dentistry", to: "/general-dentistry", desc: "Cleanings, exams & restorative care" },
      { label: "Implants", to: "/implants", desc: "Permanent tooth replacement" },
      { label: "Orthodontics", to: "/orthodontics", desc: "Invisalign & clear aligners" },
      { label: "Cosmetic Dentistry", to: "/cosmetic", desc: "Veneers, whitening & smile design" },
    ],
  },
  {
    label: "Patients",
    to: "https://login.mydentistlink.com/auth/realms/dental/protocol/openid-connect/auth?client_id=dental-portal&business_info_uri=https%3A%2F%2Fmydentistlink.com%2Fapi%2Fv0%2Flogininfo%3Fsubdomain%3Dmckddscenter.mydentistlink.com&redirect_uri=https%3A%2F%2Fmckddscenter.mydentistlink.com%2Fapi%2Fv0%2Flogin%3Fbrand%3Ddentrix%26subdomain%3Dmckddscenter.mydentistlink.com&response_type=code",
    children: [
      { label: "Patient Forms", to: "https://forms.mydentistlink.com/7c4248ed-922b-4a5c-b9f4-401cd38657b3", desc: "Complete before your visit" },
      { label: "Patient Check-In", to: "https://ibcv2.internetbrands.com/auth/realms/demandforce/protocol/openid-connect/auth?state=25d198c2510dd01f1e6934042c813c22&scope=openid&response_type=code&approval_prompt=auto&redirect_uri=https%3A%2F%2Fkiosk.mydentistlink.com%2Fibconnect%2Flogin&client_id=smbkiosk", desc: "Skip the front desk" },
      { label: "Patient Portal", to: "https://login.mydentistlink.com/auth/realms/dental/protocol/openid-connect/auth?client_id=dental-portal&business_info_uri=https%3A%2F%2Fmydentistlink.com%2Fapi%2Fv0%2Flogininfo%3Fsubdomain%3Dmckddscenter.mydentistlink.com&redirect_uri=https%3A%2F%2Fmckddscenter.mydentistlink.com%2Fapi%2Fv0%2Flogin%3Fbrand%3Ddentrix%26subdomain%3Dmckddscenter.mydentistlink.com&response_type=code", desc: "Records & statements" },
    ],
  },
  { label: "Community", to: "/community" },
  { label: "Gallery", to: "/gallery" },
  {
    label: "More",
    to: "/contact",
    children: [
      { label: "Payment Plans", to: "/payment-plans", desc: "Flexible financing options" },
      { label: "Contact Us", to: "/contact", desc: "Visit, call or message us" },
    ],
  },
];

// Premium palette — deep teal + warm gold accents
const ACCENT = "#0E7C8C"; // deep teal
const GOLD = "#E2B66B";
const INK = "#0B2A33";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);
  const [openMobile, setOpenMobile] = useState<string | null>(null);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (to: string) => (to === "/" ? pathname === "/" : pathname.startsWith(to));

  return (
    <>
      {/* Utility bar — animated gradient */}
      <div
        className="text-white text-[11px] sm:text-[12.5px] tracking-wide relative overflow-hidden"
        style={{
          background: `linear-gradient(110deg, ${INK} 0%, #103E48 45%, ${ACCENT} 100%)`,
        }}
      >
        <motion.div
          aria-hidden
          className="absolute inset-0 opacity-30"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.18) 50%, transparent 100%)",
          }}
          animate={{ x: ["-30%", "130%"] }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        />
        <div className="container-x flex flex-col lg:flex-row items-center justify-between py-2 lg:py-0 lg:h-9 relative gap-2 lg:gap-0">
          <div className="flex flex-col sm:flex-row items-center gap-1.5 sm:gap-6 text-center">
            <a href="https://www.google.com/maps/search/?api=1&query=3100+Ridge+Road,+Ste+300,+McKinney,+TX+75070" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:opacity-80 transition-opacity">
              <FiMapPin style={{ color: GOLD }} className="shrink-0" />
              3100 Ridge Road, Ste 300, McKinney, TX 75070
            </a>
            <span className="inline-flex items-center gap-1.5">
              <FiClock style={{ color: GOLD }} className="shrink-0" />
              Monday - Friday 9:00 am - 5:00 PM
            </span>
          </div>
          <div className="flex items-center gap-4 sm:gap-5">
            <a href="tel:+19728336825" className="inline-flex items-center gap-1.5 hover:text-[color:var(--gold)] transition-colors" style={{ ['--gold' as never]: GOLD } as React.CSSProperties}>
              <FiPhone style={{ color: GOLD }} className="shrink-0" /> <span className="hidden sm:inline">(972) 833-6825</span><span className="sm:hidden">Call Us</span>
            </a>
            <a href="mailto:info@mckinneyddscenter.com" className="inline-flex items-center gap-1.5 hover:text-white transition-colors">
              <FiMail style={{ color: GOLD }} className="shrink-0" /> <span className="hidden sm:inline">info@mckinneyddscenter.com</span><span className="sm:hidden">Email Us</span>
            </a>
            <span className="flex items-center gap-2 pl-3 sm:pl-4 border-l border-white/20">
              <a href="#" aria-label="Instagram" className="hover:opacity-80 transition-opacity" style={{ color: GOLD }}><FiInstagram /></a>
              <a href="#" aria-label="Facebook" className="hover:opacity-80 transition-opacity" style={{ color: GOLD }}><FiFacebook /></a>
            </span>
          </div>
        </div>
      </div>

      <motion.header
        initial={{ y: -32, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/85 backdrop-blur-xl shadow-[0_12px_40px_-18px_rgba(11,42,51,0.22)] border-b border-[#0B2A33]/8"
            : "bg-white/95 backdrop-blur-sm border-b border-[#0B2A33]/6"
        }`}
      >
        <div className="container-x">
          <div className={`flex items-center justify-between transition-all duration-500 ${scrolled ? "h-[68px]" : "h-[88px]"}`}>
            {/* Logo */}
            <Link to="/" className="shrink-0 group">
              <motion.img
                whileHover={{ scale: 1.04 }}
                transition={{ type: "spring", stiffness: 300, damping: 18 }}
                src={LOGO_SRC}
                alt="McKinney Dental and Implant Center"
                className="h-11 sm:h-12 w-auto object-contain"
              />
            </Link>

            {/* Center nav */}
            <nav className="hidden lg:flex items-center gap-0.5">
              {NAV.map((n) => {
                const active = isActive(n.to);
                const isOpen = hovered === n.label;
                return (
                  <div
                    key={n.label}
                    className="relative"
                    onMouseEnter={() => setHovered(n.label)}
                    onMouseLeave={() => setHovered((h) => (h === n.label ? null : h))}
                  >
                    <Link
                      to={n.to as string}
                      className="relative px-4 py-2.5 inline-flex items-center gap-1.5 text-[14px] font-medium text-[#334155] hover:text-[#0B2A33] transition-colors"
                    >
                      <span className="relative z-10">{n.label}</span>
                      {n.children && (
                        <FiChevronDown
                          className={`text-[13px] text-[#94A3B8] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                          style={isOpen ? { color: ACCENT } : undefined}
                        />
                      )}
                      {(active || isOpen) && (
                        <motion.span
                          layoutId="nav-underline"
                          className="absolute left-3 right-3 -bottom-0.5 h-[2px] rounded-full"
                          style={{ background: `linear-gradient(90deg, ${ACCENT}, ${GOLD})` }}
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                    </Link>

                    {n.children && (
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.97 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 6, scale: 0.98 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[360px]"
                          >
                            <div className="relative rounded-2xl border border-[#0B2A33]/8 bg-white shadow-[0_28px_60px_-22px_rgba(11,42,51,0.28)] overflow-hidden">
                              <div className="absolute inset-x-0 top-0 h-1" style={{ background: `linear-gradient(90deg, ${ACCENT}, ${GOLD})` }} />
                              <div className="p-2.5">
                                {n.children.map((c, idx) => (
                                  <motion.div
                                    key={c.label}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.05, duration: 0.22 }}
                                  >
                                    {c.to.startsWith("http") ? (
                                      <a
                                        href={c.to}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group block rounded-xl px-3.5 py-3 hover:bg-[#0E7C8C]/6 transition-colors"
                                      >
                                        <div className="flex items-center justify-between">
                                          <div className="text-[14px] font-semibold text-[#0B2A33]">
                                            {c.label}
                                          </div>
                                          <FiArrowUpRight className="text-[#94A3B8] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                                        </div>
                                        {c.desc && (
                                          <div className="text-[12.5px] text-[#64748B] mt-0.5">{c.desc}</div>
                                        )}
                                      </a>
                                    ) : (
                                      <Link
                                        to={c.to as string}
                                        className="group block rounded-xl px-3.5 py-3 hover:bg-[#0E7C8C]/6 transition-colors"
                                      >
                                        <div className="flex items-center justify-between">
                                          <div className="text-[14px] font-semibold text-[#0B2A33]">
                                            {c.label}
                                          </div>
                                          <FiArrowUpRight className="text-[#94A3B8] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                                        </div>
                                        {c.desc && (
                                          <div className="text-[12.5px] text-[#64748B] mt-0.5">{c.desc}</div>
                                        )}
                                      </Link>
                                    )}
                                  </motion.div>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* CTA cluster */}
            <div className="flex items-center gap-3">
              <div className="hidden sm:flex items-center gap-2">

                <a
                  href="https://local.demandforce.com/b/mckinneydentalandimplantcenter/schedule?widget=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 rounded-[4px] px-6 py-2.5 text-[15px] font-medium text-white shadow-sm transition-opacity hover:opacity-90 whitespace-nowrap"
                  style={{ background: `linear-gradient(110deg, ${INK} 0%, #103E48 45%, ${ACCENT} 100%)` }}
                >
                  <span className="text-xl leading-none font-bold">+</span> Make An Appointment
                </a>
              </div>

              <button
                className="lg:hidden grid h-11 w-11 place-items-center rounded-full border border-[#0B2A33]/15 text-[#0B2A33] hover:bg-[#0B2A33]/5 transition-colors"
                onClick={() => setOpen(true)}
                aria-label="Open menu"
              >
                <HiMenu className="text-2xl" />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-[60] bg-[#0B2A33]/55 backdrop-blur-sm"
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 240 }}
              className="fixed right-0 top-0 z-[70] h-full w-[88%] max-w-sm bg-white shadow-2xl flex flex-col overflow-y-auto"
            >
              <div className="flex items-center justify-between px-6 py-5 border-b border-[#0B2A33]/8">
                <img
                  src={LOGO_SRC}
                  alt="McKinney Dental and Implant Center"
                  className="h-10 w-auto object-contain"
                />
                <button
                  className="grid h-10 w-10 place-items-center rounded-full bg-[#0B2A33]/6 text-[#0B2A33]"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                >
                  <HiX className="text-xl" />
                </button>
              </div>

              <nav className="flex-1 px-4 py-4">
                <Link
                  to="/"
                  onClick={() => setOpen(false)}
                  className="block px-3 py-3 rounded-lg text-[15px] font-semibold text-[#0B2A33] hover:bg-[#0E7C8C]/8"
                >
                  Home
                </Link>
                {NAV.map((n) => {
                  const isOpenMobile = openMobile === n.label;
                  return (
                    <div key={n.label} className="border-t border-[#0B2A33]/8 first:border-t-0">
                      {n.children ? (
                        <>
                          <button
                            onClick={() => setOpenMobile(isOpenMobile ? null : n.label)}
                            className="w-full flex items-center justify-between px-3 py-3 rounded-lg text-[15px] font-semibold text-[#0B2A33] hover:bg-[#0E7C8C]/8"
                          >
                            {n.label}
                            <FiChevronDown
                              className={`text-[#94A3B8] transition-transform ${isOpenMobile ? "rotate-180" : ""}`}
                              style={isOpenMobile ? { color: ACCENT } : undefined}
                            />
                          </button>
                          <AnimatePresence>
                            {isOpenMobile && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.25 }}
                                className="overflow-hidden"
                              >
                                <div className="pl-5 pb-2 flex flex-col">
                                  {n.children.map((c) => (
                                    c.to.startsWith("http") ? (
                                      <a
                                        key={c.label}
                                        href={c.to}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={() => setOpen(false)}
                                        className="py-2 px-3 rounded-lg text-[14px] text-[#334155] hover:bg-[#0E7C8C]/8"
                                      >
                                        {c.label}
                                      </a>
                                    ) : (
                                      <Link
                                        key={c.label}
                                        to={c.to as string}
                                        onClick={() => setOpen(false)}
                                        className="py-2 px-3 rounded-lg text-[14px] text-[#334155] hover:bg-[#0E7C8C]/8"
                                      >
                                        {c.label}
                                      </Link>
                                    )
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </>
                      ) : (
                        <Link
                          to={n.to as string}
                          onClick={() => setOpen(false)}
                          className="block px-3 py-3 rounded-lg text-[15px] font-semibold text-[#0B2A33] hover:bg-[#0E7C8C]/8"
                        >
                          {n.label}
                        </Link>
                      )}
                    </div>
                  );
                })}
              </nav>

              <div className="px-6 py-5 border-t border-[#0B2A33]/8 space-y-3" style={{ background: `linear-gradient(180deg, ${INK} 0%, #103E48 100%)` }}>
                <a
                  href="https://local.demandforce.com/b/mckinneydentalandimplantcenter/schedule?widget=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_24px_-10px_rgba(14,124,140,0.6)]"
                  style={{ background: `linear-gradient(110deg, ${ACCENT}, ${GOLD})` }}
                >
                  Book Appointment <FiArrowUpRight />
                </a>
                <a
                  href="tel:+19728336825"
                  className="flex items-center justify-center gap-2 text-sm font-medium text-white/85"
                >
                  <FiPhone style={{ color: GOLD }} /> (972) 833-6825
                </a>
                <div className="flex items-center justify-center gap-4 pt-1">
                  <a href="#" aria-label="Instagram" className="hover:opacity-80" style={{ color: GOLD }}><FiInstagram /></a>
                  <a href="#" aria-label="Facebook" className="hover:opacity-80" style={{ color: GOLD }}><FiFacebook /></a>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

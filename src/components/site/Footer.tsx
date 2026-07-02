import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiClock,
  FiFacebook,
  FiInstagram,
  FiChevronUp,
  FiArrowRight,
} from "react-icons/fi";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden">
      {/* Top wave accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-[var(--gradient-primary)]" />

      {/* Main footer body */}
      <div className="bg-[oklch(0.14_0.05_252)] text-white/80">
        <div className="container-x pt-16 pb-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
            {/* Brand column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-4"
            >
              <div className="flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-[var(--gradient-primary)] text-white font-display font-bold text-xl shadow-lg">
                  M
                </div>
                <div>
                  <div className="font-display font-semibold text-white text-lg leading-tight">
                    McKinney Dental
                  </div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-white/50">
                    & Implant Center
                  </div>
                </div>
              </div>
              <p className="mt-5 text-white/60 text-sm leading-relaxed max-w-xs">
                A modern dental practice committed to creating beautiful,
                healthy smiles with advanced technology and compassionate care.
              </p>
              <div className="mt-6 flex items-center gap-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid h-10 w-10 place-items-center rounded-full bg-white/5 text-white/70 hover:bg-white/10 hover:text-white transition-all border border-white/10"
                  aria-label="Facebook"
                >
                  <FiFacebook className="text-lg" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid h-10 w-10 place-items-center rounded-full bg-white/5 text-white/70 hover:bg-white/10 hover:text-white transition-all border border-white/10"
                  aria-label="Instagram"
                >
                  <FiInstagram className="text-lg" />
                </a>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-2"
            >
              <h4 className="font-display font-semibold text-white text-sm tracking-wide uppercase">
                Quick Links
              </h4>
              <ul className="mt-5 space-y-3">
                {[
                  { label: "Home", to: "/" },
                  { label: "Our Family", to: "/our-family" },
                  { label: "Services", to: "/services" },
                  { label: "Gallery", to: "/gallery" },
                  { label: "Contact Us", to: "/contact" },
                ].map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.to}
                      className="group inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
                    >
                      <FiArrowRight className="text-xs opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-3"
            >
              <h4 className="font-display font-semibold text-white text-sm tracking-wide uppercase">
                Our Services
              </h4>
              <ul className="mt-5 space-y-3">
                {[
                  { label: "General Dentistry", to: "/services" },
                  { label: "Dental Implants", to: "/implants" },
                  { label: "Invisalign®", to: "/orthodontics" },
                  { label: "Cosmetic Dentistry", to: "/cosmetic" },
                  { label: "Teeth Whitening", to: "/services" },
                ].map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.to}
                      className="group inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
                    >
                      <FiArrowRight className="text-xs opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="lg:col-span-3"
            >
              <h4 className="font-display font-semibold text-white text-sm tracking-wide uppercase">
                Get In Touch
              </h4>
              <ul className="mt-5 space-y-4">
                <li className="flex items-start gap-3">
                  <div className="mt-0.5 text-[var(--color-accent)]">
                    <FiPhone className="text-sm" />
                  </div>
                  <div>
                    <div className="text-xs text-white/40 uppercase tracking-wider">
                      Phone
                    </div>
                    <a
                      href="tel:+19728336825"
                      className="text-sm text-white/80 hover:text-white transition-colors"
                    >
                      (972) 833-6825
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-0.5 text-[var(--color-accent)]">
                    <FiMail className="text-sm" />
                  </div>
                  <div>
                    <div className="text-xs text-white/40 uppercase tracking-wider">
                      Email
                    </div>
                    <a
                      href="mailto:info@mckinneyddscenter.com"
                      className="text-sm text-white/80 hover:text-white transition-colors"
                    >
                      info@mckinneyddscenter.com
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-0.5 text-[var(--color-accent)]">
                    <FiMapPin className="text-sm" />
                  </div>
                  <div>
                    <div className="text-xs text-white/40 uppercase tracking-wider">
                      Address
                    </div>
                    <span className="text-sm text-white/80">
                      3100 Ridge Road, Ste 300
                      <br />
                      Mckinney, Texas 75070, United States
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-0.5 text-[var(--color-accent)]">
                    <FiClock className="text-sm" />
                  </div>
                  <div>
                    <div className="text-xs text-white/40 uppercase tracking-wider">
                      Hours
                    </div>
                    <span className="text-sm text-white/80">
                      Mon–Thu: 8a – 5p
                      <br />
                      Fri: 8a – 2p
                    </span>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom bar — matches reference style */}
      <div className="bg-[#2E86C1] relative">
        <div className="container-x py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-white/90">
            &copy; Copyright {new Date().getFullYear()}. All Rights Reserved - Mckinney DDS Center
          </p>
          <div className="flex items-center gap-6 text-sm text-white/90">
            <Link
              to="/contact"
              className="hover:text-white transition-colors"
            >
              Contact Us
            </Link>
            <span className="w-8 h-px bg-white/40" />
            <a
              href="#"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
          </div>
        </div>

        {/* Back to top button */}
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="absolute right-4 sm:right-8 -top-5 grid h-10 w-10 place-items-center rounded-md bg-[#2E86C1] text-white shadow-lg hover:bg-[#2678B0] transition-colors border border-white/10"
        >
          <FiChevronUp className="text-lg" />
        </button>
      </div>
    </footer>
  );
}

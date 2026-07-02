import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { FiHome, FiChevronsRight } from "react-icons/fi";

export function PageHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#eaf1fb] via-[#f1f5fb] to-white">
      <div
        aria-hidden
        className="absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full"
        style={{ background: "radial-gradient(closest-side, rgba(40,91,187,0.10), transparent)" }}
      />
      <div className="container-x relative py-16 sm:py-20 lg:py-24">
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#1f2937]"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="mt-3 max-w-2xl text-base sm:text-lg text-[#6B7280]"
          >
            {subtitle}
          </motion.p>
        )}

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.16 }}
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white/90 px-5 py-3 shadow-[0_12px_40px_-18px_rgba(40,91,187,0.35)] backdrop-blur"
        >
          <Link to="/" className="text-[#285BBB] hover:opacity-80">
            <FiHome className="text-lg" />
          </Link>
          <FiChevronsRight className="text-[#9ca3af]" />
          <span className="text-sm font-medium text-[#285BBB]">{title}</span>
        </motion.div>
      </div>
    </section>
  );
}

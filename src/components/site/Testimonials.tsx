import { motion } from "framer-motion";
import { useEffect } from "react";

export function Testimonials() {
  useEffect(() => {
    // Add Elfsight platform script
    const script = document.createElement("script");
    script.src = "https://elfsightcdn.com/platform.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up script if component unmounts
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#fdfdfd] py-24">
      <div className="relative mx-auto max-w-[1200px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl sm:text-5xl lg:text-[42px] font-semibold text-[#444] leading-tight">
            Real Stories. <span className="text-[#3269c3]">Real Smiles.</span>
          </h2>
          <p className="mt-6 text-[15px] sm:text-base text-slate-400 max-w-4xl mx-auto leading-relaxed font-light">
            See why patients trust us for patient-centered care, healthy smiles, and exceptional results.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.7 }}
          className="relative px-2 md:px-14"
        >
          {/* Elfsight Google Reviews | Untitled Google Reviews */}
          <div className="elfsight-app-92698e47-764d-4e15-ae3e-a73b0ee40342" data-elfsight-app-lazy></div>
        </motion.div>
      </div>
    </section>
  );
}

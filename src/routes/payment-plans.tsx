import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { PageHeader } from "@/components/site/PageHeader";

const ACCENT = "#0E7C8C";
const GOLD = "#E2B66B";
const INK = "#0B2A33";



function PaymentPlansPage() {
  return (
    <>
      <PageHeader
        title="Payment Plans"
        subtitle="Quality dental care that fits your budget — explore the options that work for you."
      />

      <section className="pt-8 pb-16 sm:pt-10 sm:pb-20">
        <div className="container-x">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h2 className="font-display text-[32px] sm:text-[40px] font-semibold text-[#0B2A33] leading-tight mb-6">
              Flexible Financing with <span className="italic text-[#0E7C8C]">CareCredit</span>
            </h2>
            <p className="text-[#64748B] text-lg leading-relaxed">
              We accept CareCredit, a healthcare financing solution that allows qualified patients to spread the cost of their dental treatment into manageable monthly payments. With flexible financing options, you can move forward with the care you need while staying within your budget.
            </p>
          </motion.div>

          {/* Dedicated CareCredit Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12"
          >
            <a
              href="https://www.carecredit.com/go/788TMB/?dtc=DS1X&sitecode=CCQRCDS1X"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block transition-transform hover:scale-105"
            >
              <img 
                src="https://www.carecredit.com/sites/pc/image/carecredit_button_applypay_prequal_350x213_green_v1.jpg" 
                alt="Get Started with CareCredit" 
                className="max-w-full h-auto rounded-xl shadow-lg"
              />
            </a>

            <div className="flex flex-col items-center bg-white p-6 rounded-2xl shadow-[0_10px_30px_rgba(11,42,51,0.08)] border border-[#E5ECF3]">
              <p className="font-semibold text-[#0B2A33] mb-3 text-center">Scan to Apply or Pay</p>
              <img 
                src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent("https://www.carecredit.com/go/788TMB/?dtc=DS1X&sitecode=CCQRCDS1X")}`}
                alt="CareCredit QR Code"
                className="w-[150px] h-[150px]"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-20 rounded-3xl p-8 sm:p-12 text-center text-white"
            style={{ background: `linear-gradient(120deg, ${INK} 0%, ${ACCENT} 100%)` }}
          >
            <h3 className="font-display text-2xl sm:text-3xl font-semibold text-white">
              Have questions about financing?
            </h3>
            <p className="mt-3 text-white/80 max-w-xl mx-auto">
              Our team will help you understand your options and choose the plan that fits your family best.
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-[#0B2A33] transition-transform hover:-translate-y-0.5"
              style={{ background: GOLD }}
            >
              Contact our team <FiArrowUpRight />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export const Route = createFileRoute("/payment-plans")({
  head: () => ({
    meta: [
      { title: "Payment Plans — McKinney Dental & Implant Center" },
      { name: "description", content: "Flexible payment plans and financing options for your dental care at McKinney Dental & Implant Center." },
    ],
  }),
  component: PaymentPlansPage,
});

import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { FiCheck, FiCreditCard, FiDollarSign, FiShield, FiArrowUpRight } from "react-icons/fi";
import { PageHeader } from "@/components/site/PageHeader";

const ACCENT = "#0E7C8C";
const GOLD = "#E2B66B";
const INK = "#0B2A33";

const PLANS = [
  {
    name: "CareCredit®",
    tagline: "Healthcare financing made simple",
    points: [
      "0% interest plans available",
      "Flexible 6, 12, 18 or 24-month terms",
      "Quick online application",
      "Use for any treatment",
    ],
    icon: FiCreditCard,
  },
  {
    name: "In-House Membership",
    tagline: "Save on routine care, no insurance needed",
    points: [
      "2 cleanings & exams per year",
      "Discounts on most treatments",
      "No deductibles or claim forms",
      "Family pricing available",
    ],
    icon: FiShield,
    featured: true,
  },
  {
    name: "Insurance Friendly",
    tagline: "We work with most PPO plans",
    points: [
      "Maximize your benefits",
      "We file claims for you",
      "Pre-treatment estimates",
      "Transparent pricing",
    ],
    icon: FiDollarSign,
  },
];

function PaymentPlansPage() {
  return (
    <>
      <PageHeader
        title="Payment Plans"
        subtitle="Quality dental care that fits your budget — explore the options that work for you."
      />

      <section className="py-16 sm:py-20">
        <div className="container-x">
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {PLANS.map((p, idx) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={p.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.08 }}
                  className={`relative rounded-3xl p-7 sm:p-8 border transition-all hover:-translate-y-1 ${
                    p.featured
                      ? "text-white shadow-[0_30px_60px_-20px_rgba(14,124,140,0.55)] border-transparent"
                      : "bg-white border-[#0B2A33]/8 shadow-[0_18px_40px_-22px_rgba(11,42,51,0.18)]"
                  }`}
                  style={
                    p.featured
                      ? { background: `linear-gradient(150deg, ${ACCENT} 0%, ${INK} 100%)` }
                      : undefined
                  }
                >
                  {p.featured && (
                    <span
                      className="absolute -top-3 right-6 text-[11px] font-semibold tracking-wider uppercase px-3 py-1 rounded-full"
                      style={{ background: GOLD, color: INK }}
                    >
                      Most Popular
                    </span>
                  )}
                  <div
                    className="grid h-12 w-12 place-items-center rounded-2xl mb-5"
                    style={{
                      background: p.featured ? "rgba(255,255,255,0.14)" : `${ACCENT}14`,
                      color: p.featured ? GOLD : ACCENT,
                    }}
                  >
                    <Icon className="text-xl" />
                  </div>
                  <h3 className={`font-display text-xl font-semibold ${p.featured ? "text-white" : "text-[#0B2A33]"}`}>
                    {p.name}
                  </h3>
                  <p className={`mt-1 text-sm ${p.featured ? "text-white/80" : "text-[#64748B]"}`}>
                    {p.tagline}
                  </p>
                  <ul className="mt-6 space-y-3">
                    {p.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-3 text-sm">
                        <span
                          className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full"
                          style={{
                            background: p.featured ? GOLD : `${ACCENT}14`,
                            color: p.featured ? INK : ACCENT,
                          }}
                        >
                          <FiCheck className="text-[11px]" />
                        </span>
                        <span className={p.featured ? "text-white/90" : "text-[#334155]"}>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>

          {/* Dedicated CareCredit Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 bg-white border border-[#0B2A33]/10 shadow-[0_25px_50px_-20px_rgba(11,42,51,0.15)] rounded-[2.5rem] p-8 sm:p-12 lg:p-16 relative overflow-hidden"
          >
            {/* Background accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#0E7C8C]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
            
            <div className="relative z-10 grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 rounded-full bg-[#0E7C8C]/10 px-4 py-1.5 text-xs font-semibold tracking-wider uppercase text-[#0E7C8C] mb-6">
                  Financing Partner
                </div>
                <h2 className="font-display text-[32px] sm:text-[40px] font-semibold text-[#0B2A33] leading-tight mb-4">
                  Smile now. Pay over time with <span className="italic text-[#0E7C8C] font-serif">CareCredit</span>.
                </h2>
                <p className="text-[#64748B] text-[16px] leading-relaxed mb-6">
                  CareCredit is a healthcare credit card designed specifically to help you finance your dental and health treatments. It allows you to break down the cost of procedures into manageable, budget-friendly monthly payments rather than paying a lump sum upfront.
                </p>
                
                <div className="grid sm:grid-cols-2 gap-5 mb-8">
                  {[
                    "Flexible 6 to 24-month terms",
                    "No interest if paid in full options",
                    "Quick and easy online application",
                    "Use for almost any dental procedure"
                  ].map((benefit, i) => (
                    <div key={i} className="flex items-start gap-3 bg-[#FAFCFF] border border-[#0B2A33]/5 p-3.5 rounded-xl">
                      <FiCheck className="text-[#E2B66B] mt-0.5 shrink-0 text-lg" />
                      <span className="text-[14px] font-medium text-[#0B2A33]">{benefit}</span>
                    </div>
                  ))}
                </div>
                
                <a
                  href="https://www.carecredit.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-[14px] font-semibold text-white transition-all hover:shadow-[0_15px_30px_-10px_rgba(14,124,140,0.5)]"
                  style={{ background: ACCENT }}
                >
                  Apply for CareCredit <FiArrowUpRight />
                </a>
              </div>
              
              <div className="lg:col-span-5 relative">
                <div className="rounded-3xl overflow-hidden shadow-xl aspect-square sm:aspect-[4/3] lg:aspect-square">
                  <img 
                    src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80" 
                    alt="Patient paying for dental care" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl shadow-xl border border-[#0B2A33]/5">
                  <div className="flex items-center gap-4">
                    <div className="grid h-12 w-12 place-items-center rounded-xl bg-[#E2B66B]/20 text-[#E2B66B]">
                      <FiDollarSign size={24} />
                    </div>
                    <div>
                      <div className="font-semibold text-[#0B2A33]">Affordable Care</div>
                      <div className="text-xs text-[#64748B]">Fit dentistry into your budget</div>
                    </div>
                  </div>
                </div>
              </div>
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
            <h3 className="font-display text-2xl sm:text-3xl font-semibold">
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

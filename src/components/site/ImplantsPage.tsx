import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { PageHeader } from "@/components/site/PageHeader";
import { motion } from "framer-motion";

const ACCORDION_ITEMS = [
  {
    q: "Why Dental Implants?",
    a: (
      <>
        <p className="mb-4">Dental implants have become the preferred method of tooth replacement for several important reasons:</p>
        <ul className="list-disc pl-6 space-y-3">
          <li>No other treatment option prevents the bone resorption/deterioration that occurs when a tooth is lost or removed.</li>
          <li>This is the only tooth replacement option that preserves the adjacent teeth, as opposed to cutting them down to place a bridge or hooking a partial denture to them.</li>
          <li>Dental implants have by far the best long-term success rates of any treatment option – and this has been documented in the scientific literature for over four decades.</li>
          <li>Since dental implants are designed to last a lifetime, there is rarely a need for additional treatment. With other forms of tooth replacement that need to be replaced every 5 to 10 years, additional dentistry is almost always necessary in the future. As a result, dental implant treatment is the most cost-effective option long-term.</li>
        </ul>
      </>
    )
  },
  {
    q: "Replacing Multiple teeth",
    a: (
      <p>When multiple teeth are missing, dental implants can support a bridge or partial denture, eliminating the need for metal clasps or grinding down healthy adjacent teeth.</p>
    )
  }
];

const PROCESS_STEPS = [
  {
    title: "Implant Placement",
    desc: "Your doctor will administer anesthesia to prevent any sensation during surgery. Utilizing a gentle technique, your doctor will prepare the surgical site and place the dental implant in the proper position. A small cover screw will then be attached to the implant. A temporary replacement tooth (or set of teeth) may be inserted following surgery. The implant will be left undisturbed for several weeks to a few months, to allow the bone to remodel around the implant."
  },
  {
    title: "Abutment Attachment",
    desc: "Once the bone has fused to the implant and formed a strong biological bond, you will then have a small connector post attached to each implant. Your new replacement teeth will be attached to these abutments. Your doctor will determine the best abutment to use for your case. This is often a custom abutment, which is utilized to enable your doctor to design the ideal shape of your replacement teeth."
  },
  {
    title: "Replacement Teeth",
    desc: "The final phase of treatment is designing and fabricating the final replacement crown, bridge, or set of teeth. Your doctor will take impressions of your teeth and the abutments and send them to a dental technician, who will create the replacement teeth. Together with your doctor, you will determine the best shade to match your natural teeth. Once the technician has fabricated your new teeth, your dentist will carefully attach them, completing your new, permanent smile."
  }
];

export function ImplantsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      <PageHeader 
        title="Dental Implants" 
        subtitle="Permanent tooth replacement and advanced X-Guide navigation."
      />

      {/* YOUTUBE VIDEO SECTION */}
      <section className="pt-16 pb-12 bg-[#F8FAFC]">
        <div className="container-x max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative aspect-video rounded-3xl overflow-hidden shadow-[0_20px_50px_-20px_rgba(11,47,92,0.2)] bg-black border-[6px] border-white"
          >
            <iframe 
              width="100%" 
              height="100%" 
              src="https://www.youtube.com/embed/14VfJ-BE31I?autoplay=0" 
              title="Colorado Maxillofacial & Oral Surgery Implants" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
              className="absolute inset-0"
            ></iframe>
          </motion.div>
        </div>
      </section>

      {/* THE IMPLANT PROCESS */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Subtle premium background accent */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-slate-50 to-transparent pointer-events-none" />
        
        <div className="container-x max-w-4xl mx-auto relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-[34px] sm:text-[42px] font-semibold text-[#333333] tracking-tight mb-16"
          >
            The Implant Process
          </motion.h2>

          <div className="space-y-16">
            {PROCESS_STEPS.map((step, i) => (
              <motion.div 
                key={step.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative pl-8 md:pl-12 border-l-2 border-[#E5E5E5] hover:border-[#8DC63F] transition-colors duration-500"
              >
                {/* Accent dot */}
                <span className="absolute -left-[9px] top-2 h-4 w-4 rounded-full bg-white border-[3px] border-[#8DC63F]" />
                
                <h3 className="text-[28px] sm:text-[32px] font-medium text-[#4A4A4A] mb-5 font-sans tracking-tight">
                  {step.title}
                </h3>
                <p className="text-[#757575] font-light leading-[1.8] text-[16.5px]">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* X-GUIDE NAVIGATION */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="container-x max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 relative rounded-2xl overflow-hidden shadow-[0_15px_40px_-15px_rgba(0,0,0,0.15)] aspect-[4/3] lg:aspect-auto h-full min-h-[400px]"
          >
            <img 
              src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80" 
              alt="X-Guide Implant Navigation screen" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-[32px] sm:text-[38px] font-medium text-[#4A4A4A] leading-tight font-sans tracking-tight">
              X-Guide Implant Navigation
            </h2>
            <div className="mt-8 space-y-6 text-[#757575] font-light leading-[1.8] text-[16.5px]">
              <p>
                Traditional dental implant placement can be long, drawn-out surgeries. With the X-Guide Navigation
                System, we are able to place implants with greater efficiency and precision. The navigation system
                provides a real-time map of where the implant is at all times, allowing for unprecedented accuracy in
                implant placement.
              </p>
              <div className="pt-2">
                <p className="mb-4 text-[16px] font-medium text-[#4A4A4A]">Benefits include:</p>
                <ul className="space-y-3 pl-4">
                  {[
                    "Less invasive surgeries",
                    "Decreased chair/appointment time",
                    "Increased patient comfort",
                    "Decreased recovery time",
                    "Decreased risk of incorrect implant placement"
                  ].map((benefit, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className="h-[6px] w-[6px] rounded-full bg-[#8DC63F] flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* HOW X-GUIDE WORKS */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container-x max-w-5xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[26px] sm:text-[30px] text-[#4A4A4A] tracking-[0.02em] font-normal mb-8 uppercase"
          >
            HOW THE X-GUIDE WORKS
          </motion.h2>
          
          {/* CONSULTATION PHASE */}
          <div className="mb-24">
            <motion.h3 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-[28px] sm:text-[34px] font-bold text-[#8DC63F] tracking-wide mb-16 uppercase"
            >
              CONSULTATION:
            </motion.h3>
            
            <div className="max-w-4xl mx-auto flex flex-col items-center relative">
              {/* Fake dotted line for desktop */}
              <div className="hidden md:block absolute top-[22px] left-[180px] right-[180px] h-0 border-t-[3px] border-dotted border-[#D1D1D1]" />

              {/* Row 1 (Step 1 and 2) */}
              <div className="flex flex-col md:flex-row w-full justify-between items-center md:items-start gap-12 md:gap-4 relative z-10">
                
                {/* Step 1 */}
                <motion.div 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col items-center md:items-start bg-white"
                >
                  <div className="flex items-center gap-3 mb-6 pr-4 bg-white rounded-full">
                    <div className="h-11 w-11 rounded-full bg-[#8DC63F] text-white flex items-center justify-center font-bold text-xl shadow-md">1</div>
                    <div className="text-[22px] font-bold text-[#1F4160] whitespace-nowrap">
                      X-Clip <span className="text-[#8DC63F] text-[14px] ml-1 font-semibold">(&lt;5 mins)</span>
                    </div>
                  </div>
                  <div className="border border-gray-200 p-1.5 bg-white shadow-[0_10px_30px_-15px_rgba(0,0,0,0.15)] rounded-lg w-[260px] transition-transform duration-500 hover:scale-105">
                    <img src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=400&q=80" alt="X-Clip" className="w-full h-[150px] object-cover rounded-md" />
                  </div>
                </motion.div>
                
                {/* Step 2 */}
                <motion.div 
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="flex flex-col items-center md:items-start bg-white"
                >
                  <div className="flex items-center gap-3 mb-6 md:pl-8 bg-white rounded-full">
                    <div className="h-11 w-11 rounded-full bg-[#B2D87B] text-[#1F4160] flex items-center justify-center font-bold text-xl shadow-md">2</div>
                    <div className="text-[22px] font-bold text-[#1F4160]">Scan</div>
                  </div>
                  <div className="border border-gray-200 p-1.5 bg-black shadow-[0_10px_30px_-15px_rgba(0,0,0,0.15)] rounded-lg w-[260px] transition-transform duration-500 hover:scale-105">
                    <img src="https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=400&q=80" alt="Scan" className="w-full h-[150px] object-cover opacity-85 rounded-md" />
                  </div>
                </motion.div>
              </div>

              {/* Row 2 (Step 3) */}
              <div className="flex flex-col md:flex-row w-full justify-start items-center md:items-start mt-16 md:mt-20 relative z-10">
                 {/* Step 3 */}
                 <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="flex flex-col items-center md:items-start bg-white"
                >
                  <div className="flex items-center gap-3 mb-6 pr-4 bg-white rounded-full">
                    <div className="h-11 w-11 rounded-full bg-[#8DC63F] text-white flex items-center justify-center font-bold text-xl shadow-md">3</div>
                    <div className="text-[22px] font-bold text-[#1F4160]">Plan</div>
                  </div>
                  <div className="border border-gray-200 p-1.5 bg-black shadow-[0_10px_30px_-15px_rgba(0,0,0,0.15)] rounded-lg w-[260px] transition-transform duration-500 hover:scale-105">
                    <img src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=400&q=80" alt="Plan" className="w-full h-[150px] object-cover opacity-85 rounded-md" />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* SURGERY PHASE */}
          <div>
            <motion.h3 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-[28px] sm:text-[34px] font-bold text-[#8DC63F] tracking-wide mb-16 uppercase"
            >
              SURGERY:
            </motion.h3>
            
            <div className="max-w-4xl mx-auto flex flex-col items-center relative">
              {/* Fake dotted line for desktop */}
              <div className="hidden md:block absolute top-[22px] left-[180px] right-[180px] h-0 border-t-[3px] border-dotted border-[#D1D1D1]" />

              {/* Row 1 (Step 4 and 5) */}
              <div className="flex flex-col md:flex-row w-full justify-between items-center md:items-start gap-12 md:gap-4 relative z-10">
                
                {/* Step 4 */}
                <motion.div 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col items-center md:items-start bg-white"
                >
                  <div className="flex items-center gap-3 mb-6 pr-4 bg-white rounded-full">
                    <div className="h-11 w-11 rounded-full bg-[#8DC63F] text-white flex items-center justify-center font-bold text-xl shadow-md">4</div>
                    <div className="text-[22px] font-bold text-[#1F4160] whitespace-nowrap">
                      Calibrate <span className="text-[#8DC63F] text-[14px] ml-1 font-semibold">(&lt;5 mins)</span>
                    </div>
                  </div>
                  <div className="border border-gray-200 p-1.5 bg-white shadow-[0_10px_30px_-15px_rgba(0,0,0,0.15)] rounded-lg w-[260px] transition-transform duration-500 hover:scale-105">
                    <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=400&q=80" alt="Calibrate" className="w-full h-[150px] object-cover rounded-md" />
                  </div>
                </motion.div>
                
                {/* Step 5 */}
                <motion.div 
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="flex flex-col items-center md:items-start bg-white"
                >
                  <div className="flex items-center gap-3 mb-6 md:pl-8 bg-white rounded-full">
                    <div className="h-11 w-11 rounded-full bg-[#B2D87B] text-[#1F4160] flex items-center justify-center font-bold text-xl shadow-md">5</div>
                    <div className="text-[22px] font-bold text-[#1F4160] whitespace-nowrap">
                      System Check <span className="text-[#8DC63F] text-[14px] ml-1 font-semibold">(&lt;1 min)</span>
                    </div>
                  </div>
                  <div className="border border-gray-200 p-1.5 bg-white shadow-[0_10px_30px_-15px_rgba(0,0,0,0.15)] rounded-lg w-[260px] transition-transform duration-500 hover:scale-105">
                    <img src="https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?auto=format&fit=crop&w=400&q=80" alt="System Check" className="w-full h-[150px] object-cover rounded-md" />
                  </div>
                </motion.div>
              </div>

              {/* Row 2 (Step 6) */}
              <div className="flex flex-col md:flex-row w-full justify-end items-center md:items-start mt-16 md:mt-20 relative z-10">
                 {/* Step 6 */}
                 <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="flex flex-col items-center md:items-start bg-white"
                >
                  <div className="flex items-center gap-3 mb-6 pr-4 bg-white rounded-full">
                    <div className="h-11 w-11 rounded-full bg-[#8DC63F] text-white flex items-center justify-center font-bold text-xl shadow-md">6</div>
                    <div className="text-[22px] font-bold text-[#1F4160]">Navigation Surgery</div>
                  </div>
                  <div className="border border-gray-200 p-1.5 bg-black shadow-[0_10px_30px_-15px_rgba(0,0,0,0.15)] rounded-lg w-[260px] transition-transform duration-500 hover:scale-105">
                    <img src="https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=400&q=80" alt="Navigation Surgery" className="w-full h-[150px] object-cover opacity-85 rounded-md" />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ACCORDION FAQ */}
      <section className="pb-28 bg-[#F8FAFC] pt-20 border-t border-gray-100">
        <div className="container-x max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border border-[#E5E5E5] rounded-xl bg-white shadow-lg overflow-hidden"
          >
            {ACCORDION_ITEMS.map((item, i) => {
              const open = openFaq === i;
              return (
                <div key={item.q} className="border-b border-[#E5E5E5] last:border-b-0">
                  <button 
                    onClick={() => setOpenFaq(open ? null : i)}
                    className="w-full flex items-center justify-between p-6 sm:p-8 text-left hover:bg-[#FAFAFA] transition-colors group"
                  >
                    <span className="text-[22px] sm:text-[24px] font-medium text-[#4A4A4A] group-hover:text-[#1F4160] transition-colors">{item.q}</span>
                    <FiChevronDown className={`text-2xl text-[#8DC63F] transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
                  </button>
                  <motion.div 
                    initial={false}
                    animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 sm:px-8 pb-8 pt-2 text-[#757575] font-light leading-[1.8] text-[16px]">
                      {item.a}
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </>
  );
}

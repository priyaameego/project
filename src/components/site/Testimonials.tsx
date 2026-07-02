import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link } from "@tanstack/react-router";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const TESTIMONIALS = [
  {
    name: "Bailey McBride",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
    text: "McKinney Dental and Implant Center took amazing care of me. I walked in and Maria explained everything that was going to happen next. Dr. He took the time to listen to my past experiences and my needs. My teeth looking amazing and can't wait to go back in 6 months. I highly recommend McKinney Dental and Implant Center."
  },
  {
    name: "Elisha Ayuak",
    image: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?auto=format&fit=crop&w=150&q=80",
    text: "The team at McKinney Dental and Implant Center always go over and above giving the best dental consultation and treatment services. The customer service, ambiance and professionalism experience makes me look forward to my appointments. The team is so great with my toddler that he enjoys his time whenever he is attended to. I consider myself privileged to have been referred to this practice."
  },
  {
    name: "Nellie Oduguwa",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1baf8a?auto=format&fit=crop&w=150&q=80",
    text: "Dr. Juma is the best dentist ever. He explains every step of what he is doing very patiently & does not rush you. He is very professional, funny, smart & very knowledgeable. The office staff is super awesome too!!!"
  }
];

export function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-[#fdfdfd] py-24">
      <div className="relative mx-auto max-w-[1000px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl sm:text-5xl lg:text-[42px] font-semibold text-[#444] leading-tight">
            See What Our <span className="text-[#3269c3]">Patient</span> Are <span className="text-[#3269c3]">Saying</span>
          </h2>
          <p className="mt-6 text-[15px] sm:text-base text-slate-400 max-w-4xl mx-auto leading-relaxed font-light">
            Our focus is your comprehensive oral health and wellness.. but we love the challange of guiding you through any reconstructiv cosmetic needs!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.7 }}
          className="relative px-2 md:px-14"
        >
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            autoplay={{ delay: 6000, disableOnInteraction: false }}
            loop
            pagination={{ clickable: true }}
            navigation={{
              prevEl: ".testimonial-prev",
              nextEl: ".testimonial-next",
            }}
            slidesPerView={1}
            spaceBetween={30}
            className="testimonial-swiper pb-16"
          >
            {TESTIMONIALS.map((t, i) => (
              <SwiperSlide key={i}>
                <div className="flex flex-col items-center text-center pb-4 pt-10 px-1 md:px-6">
                  <div className="bg-white rounded-sm shadow-[0_5px_40px_-15px_rgba(0,0,0,0.08)] p-8 md:p-14 pt-14 w-full relative">
                    <div className="absolute left-1/2 -top-10 -translate-x-1/2 h-20 w-20 rounded-full overflow-hidden shadow-sm border-4 border-white z-10 bg-white">
                      <img src={t.image} alt={t.name} className="h-full w-full object-cover" />
                    </div>
                    <h3 className="text-[17px] font-semibold text-[#3269c3] mb-6">{t.name}</h3>
                    <p className="text-slate-400 leading-[2] text-[15px] sm:text-[16px] font-light">
                      “{t.text}”
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom nav arrows */}
          <button
            className="testimonial-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 hidden md:flex h-10 w-10 items-center justify-center text-[#3269c3]/50 hover:text-[#3269c3] transition-all"
            aria-label="Previous slide"
          >
            <FiChevronLeft className="text-4xl font-extralight" />
          </button>
          <button
            className="testimonial-next absolute right-0 top-1/2 -translate-y-1/2 z-10 hidden md:flex h-10 w-10 items-center justify-center text-[#3269c3]/50 hover:text-[#3269c3] transition-all"
            aria-label="Next slide"
          >
            <FiChevronRight className="text-4xl font-extralight" />
          </button>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-2"
        >
          <Link to="/" className="inline-block px-6 py-3 bg-[#f1f1f1] text-[#777] text-[13px] rounded-sm hover:bg-[#e2e2e2] transition-colors">
            Read More reviews
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

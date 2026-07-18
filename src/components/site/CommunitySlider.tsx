import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const ACTION_IMAGES: Array<{src: string, alt: string}> = [];

export function CommunitySlider() {
  return (
    <section className="relative overflow-hidden bg-white py-0">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(40,91,187,0.05),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-6">


        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop
            pagination={{ clickable: true }}
            navigation={{
              prevEl: ".community-prev",
              nextEl: ".community-next",
            }}
            slidesPerView={1}
            spaceBetween={24}
            breakpoints={{
              640: { slidesPerView: 1.5, centeredSlides: true },
              768: { slidesPerView: 2.2, centeredSlides: true },
              1024: { slidesPerView: 3, centeredSlides: true },
            }}
            className="community-swiper pb-8"
          >
            {ACTION_IMAGES.map((img, i) => (
              <SwiperSlide key={i}>
                {({ isActive }) => (
                  <motion.div
                    animate={{
                      scale: isActive ? 1 : 0.92,
                      opacity: isActive ? 1 : 0.65,
                    }}
                    transition={{ duration: 0.45 }}
                    className="group relative overflow-hidden rounded-3xl shadow-[0_20px_60px_-30px_rgba(15,76,129,0.4)]"
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-110"
                        loading="lazy"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B2F5C]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </motion.div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom nav arrows */}
          <button
            className="community-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 hidden md:flex h-12 w-12 items-center justify-center rounded-full bg-white/90 backdrop-blur shadow-lg text-[#0F4C81] hover:bg-[#0F4C81] hover:text-white transition-all"
            aria-label="Previous slide"
          >
            <FiChevronLeft className="text-xl" />
          </button>
          <button
            className="community-next absolute right-0 top-1/2 -translate-y-1/2 z-10 hidden md:flex h-12 w-12 items-center justify-center rounded-full bg-white/90 backdrop-blur shadow-lg text-[#0F4C81] hover:bg-[#0F4C81] hover:text-white transition-all"
            aria-label="Next slide"
          >
            <FiChevronRight className="text-xl" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}

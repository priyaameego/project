import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import implantImg from "@/assets/implant-hero.jpg";

export function Hero() {
  return (
    <section className="relative h-[70vh] min-h-[70vh] w-full flex items-center overflow-hidden bg-[#fafafa] pt-24 pb-16 lg:pt-32">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');
          .font-script {
            font-family: 'Great Vibes', cursive;
          }
          .btn-gold {
            background-color: #bfa888;
            color: white;
            transition: background-color 0.3s ease;
          }
          .btn-gold:hover {
            background-color: #a89172;
          }
          .text-gold {
            color: #bfa888;
          }
        `}
      </style>

      {/* Main container matching the screenshot layout */}
      <div className="container-x relative z-10 w-full max-w-[1400px] mx-auto px-6 h-full flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-between">
        
        {/* Left side - 3D Animation Video acting like the 3D render in the screenshot */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full lg:w-1/2 flex justify-center lg:justify-end relative mt-12 lg:mt-0 z-0 lg:pr-10"
        >
          <div className="relative w-full max-w-[500px] lg:max-w-[600px] aspect-square mix-blend-multiply">
            <motion.img 
              src={implantImg} 
              alt="Dental Implants"
              className="w-full h-full object-cover sm:object-contain"
              style={{ maskImage: 'radial-gradient(circle, black 45%, transparent 70%)', WebkitMaskImage: 'radial-gradient(circle, black 45%, transparent 70%)' }}
              animate={{ 
                scale: [1.1, 1.25, 1.1],
                x: [0, 10, -10, 0],
                y: [0, -10, 10, 0]
              }}
              transition={{ repeat: Infinity, duration: 25, ease: "easeInOut" }}
            />
          </div>
        </motion.div>

        {/* Right side - Text Content exactly matching the screenshot */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left z-10 lg:-ml-10"
        >
          <h1 className="font-script text-[4.5rem] sm:text-[6rem] lg:text-[7rem] leading-[0.8] text-[#111] -rotate-2 mb-2 lg:mb-4 drop-shadow-sm">
            Dental Implants
          </h1>
          
          <h2 className="text-gold tracking-[0.35em] text-[11px] sm:text-[14px] font-semibold uppercase mb-6 drop-shadow-sm ml-2">
            Rediscover the beauty of your smile
          </h2>
          
          <p className="text-[#333] text-[15px] sm:text-[18px] mb-10 max-w-lg font-light tracking-wide">
            <span className="font-medium text-[#111]">Dental implants can restore:</span> natural aesthetics & natural function
          </p>
          
          <Link
            to="/contact"
            className="bg-[#1B4A8F] hover:bg-[#113264] text-white px-10 py-4 font-serif text-[13px] tracking-[0.15em] uppercase shadow-lg hover:shadow-xl rounded-sm transition-colors duration-300"
          >
            Book A Consultation
          </Link>
        </motion.div>

      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import implantImg from "@/assets/dental-implant-motion.png";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] lg:min-h-[75vh] lg:h-[75vh] w-full flex items-center overflow-hidden bg-[#fafafa] pt-28 pb-12 lg:py-0">
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
      <div className="container-x relative z-10 w-full max-w-[1400px] mx-auto px-6 h-full flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-between gap-8 lg:gap-0 mt-8 lg:mt-0">
        
        {/* Left side - 3D Animation Video acting like the 3D render in the screenshot */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full lg:w-1/2 flex justify-center lg:justify-end relative z-0 lg:pr-10"
        >
          {/* Subtle animated glow behind the implant */}
          <motion.div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-64 sm:h-64 bg-white/40 rounded-full blur-[80px]"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="relative w-[85%] max-w-[320px] sm:max-w-[400px] lg:max-w-[600px] lg:w-full aspect-square mix-blend-multiply">
            <motion.img 
              src={implantImg} 
              alt="Dental Implants"
              className="w-full h-full object-cover sm:object-contain relative z-10"
              style={{ maskImage: 'radial-gradient(circle, black 45%, transparent 70%)', WebkitMaskImage: 'radial-gradient(circle, black 45%, transparent 70%)' }}
              animate={{ 
                scale: [1, 1.05, 1],
                y: [0, -15, 0],
                rotateX: [0, 15, -15, 0],
                rotateY: [0, 25, -25, 0]
              }}
              transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
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
          <h1 className="font-script text-[3.5rem] sm:text-[5rem] lg:text-[7rem] leading-[0.8] text-[#111] -rotate-2 mb-2 lg:mb-4 drop-shadow-sm">
            Dental Implants
          </h1>
          
          <h2 className="text-gold tracking-[0.2em] sm:tracking-[0.35em] text-[10px] sm:text-[14px] font-semibold uppercase mb-6 drop-shadow-sm sm:ml-2">
            Rediscover the beauty of your smile
          </h2>
          
          <p className="text-[#333] text-[15px] sm:text-[18px] mb-10 max-w-lg font-light tracking-wide">
            <span className="font-medium text-[#111]">Dental implants can restore:</span> natural aesthetics & natural function
          </p>
          
          <a
            href="https://local.demandforce.com/b/mckinneydentalandimplantcenter/schedule?widget=1"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#1B4A8F] hover:bg-[#113264] text-white px-10 py-4 font-serif text-[13px] tracking-[0.15em] uppercase shadow-lg hover:shadow-xl rounded-sm transition-colors duration-300 inline-block"
          >
            Book A Consultation
          </a>
        </motion.div>

      </div>
    </section>
  );
}

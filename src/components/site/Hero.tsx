import { motion } from "framer-motion";
import React, { useRef } from "react";
import dentVideo from "@/assets/den.mp4";
import mobileDentVideo from "@/assets/dental.mp4";
import logoImg from "@/assets/logo.png";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <section className="relative min-h-[100svh] lg:min-h-[75vh] lg:h-[75vh] w-full flex items-center overflow-hidden bg-[#fafafa] pt-28 pb-12 lg:py-0">
      {/* Absolute Full width Video Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video 
          src={mobileDentVideo} 
          autoPlay
          muted
          playsInline
          loop
          className="w-full h-full object-cover block lg:hidden"
        />
        <video 
          ref={videoRef}
          src={dentVideo} 
          autoPlay
          muted
          playsInline
          loop
          className="w-full h-full object-cover hidden lg:block"
        />
        {/* Mobile overlay for readability */}
        <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px] lg:hidden"></div>
        {/* Desktop overlay */}
        <div className="absolute inset-0 hidden lg:block bg-gradient-to-r from-black/10 via-white/40 to-white/95"></div>
      </div>

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
      <div className="container-x relative z-10 w-full max-w-[1400px] mx-auto px-6 h-full flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-end gap-8 lg:gap-0 mt-8 lg:mt-0">
        
        {/* Right side - Text Content exactly matching the screenshot */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="w-full lg:w-[50%] flex flex-col items-center lg:items-end text-center lg:text-right z-10"
        >
          <div className="flex flex-col items-center lg:items-end mb-6">
            <img src={logoImg} alt="McKinney Dental & Implant Center" className="h-16 sm:h-24 lg:h-32 mb-4 object-contain drop-shadow-md" />
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-[#111] uppercase font-bold tracking-wide">
              McKinney
            </h1>
            <h2 className="text-lg sm:text-2xl lg:text-3xl font-light text-[#333] tracking-[0.2em] mt-1">
              Dental & Implant Center
            </h2>
          </div>
          
          <h2 className="text-gold tracking-[0.2em] sm:tracking-[0.35em] text-[10px] sm:text-[14px] font-semibold uppercase mb-6 drop-shadow-sm sm:mr-2">
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


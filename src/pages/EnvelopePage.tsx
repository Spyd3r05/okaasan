import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { Heart } from "lucide-react";
import Letter from "../components/Letter";
import { triggerConfetti } from "../utils/utils";

const EnvelopePage: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    if (isOpen) return;
    setIsOpen(true);

    //trigger confetti
    triggerConfetti();
  };

  return (
    <motion.div
      className="absolute inset-0 flex flex-col items-center justify-center p-4 md:p-8 z-20 w-full h-full max-w-6xl mx-auto"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Decorative Floaties */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="absolute top-[20%] left-[10%] opacity-40 text-[#ff4d6d]"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <Heart
                fill="currentColor"
                strokeWidth={0}
                className="w-8 h-8 -rotate-12"
              />
            </motion.div>
            <motion.div
              className="absolute top-[10%] right-[30%] opacity-20 text-[#ff4d6d]"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            >
              <Heart
                fill="currentColor"
                strokeWidth={0}
                className="w-4 h-4 rotate-12"
              />
            </motion.div>
            <motion.div
              className="absolute top-[45%] left-[5%] opacity-20 text-[#ff4d6d]"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              <Heart
                fill="currentColor"
                strokeWidth={0}
                className="w-6 h-6 rotate-45"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header Text */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            className="absolute top-28 left-0 w-full text-center px-4 z-10 flex flex-col items-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <p className="font-sans text-lg md:text-xl text-slate-700 tracking-[0.02em] font-[500]">
              A special letter, just for you...
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Envelope Wrapper */}
      <motion.div
        className="relative w-full max-w-[800px] aspect-[1.1] md:aspect-[1.55] flex items-center justify-center mt-4 md:mt-12 cursor-pointer"
        onClick={handleOpen}
      >
        {/* Special Delivery Tag */}
        <AnimatePresence>
          {!isOpen && (
            <motion.div
              className="absolute -top-10 md:-top-16 right-4 md:-right-8 bg-[#b52a4e] text-white px-6 py-2 md:py-3 rounded-full border-[2px] border-white/80 shadow-2xl flex items-center gap-2 z-60"
              initial={{ rotate: 15, scale: 0 }}
              animate={{ rotate: 15, scale: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ type: "spring", delay: 0.5 }}
            >
              <Heart size={16} fill="white" strokeWidth={0} />
              <span className="font-sans text-xs md:text-sm font-bold tracking-[0.15em] uppercase mt-[1px]">
                Special Delivery
              </span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* --- Envelope Parts that slide down --- */}
        <motion.div
          className="absolute inset-0 z-0 pointer-events-none"
          animate={{
            y: isOpen ? "100vh" : 0,
            opacity: isOpen ? 0 : 1,
            scale: isOpen ? 0.8 : 1,
          }}
          transition={{
            duration: 1.5,
            ease: [0.4, 0, 0.2, 1],
            delay: isOpen ? 0.9 : 0,
          }}
        >
          {/* Envelope Back / Inside */}
          <div className="absolute inset-0 bg-[#fff5f7] rounded-[24px] shadow-inner overflow-hidden pointer-events-auto border-2 border-pink-100/30" />
        </motion.div>

        {/* --- The Letter --- */}
        <Letter isOpen={isOpen} />
        {/* --- Envelope Front Layers --- */}
        <motion.div
          className="absolute inset-0 z-20 pointer-events-none"
          animate={{
            y: isOpen ? "100vh" : 0,
            opacity: isOpen ? 0 : 1,
            scale: isOpen ? 0.8 : 1,
          }}
          transition={{
            duration: 1.5,
            ease: [0.4, 0, 0.2, 1],
            delay: isOpen ? 0.9 : 0,
          }}
        >
          {/* Envelope Front Flaps (Left, Right, Bottom) */}
          <div className="absolute inset-0 pointer-events-none rounded-[24px] overflow-hidden">
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 800 520"
              preserveAspectRatio="none"
            >
              {/* Left Flap */}
              <path d="M 0,0 L 410,270 L 0,520 Z" fill="#fd8aa5" />
              {/* Right Flap */}
              <path d="M 800,0 L 390,270 L 800,520 Z" fill="#fd8aa5" />
              {/* Bottom Flap */}
              <path
                d="M 0,520 L 380,275 Q 400,260 420,275 L 800,520 Z"
                fill="#fc7495"
              />
            </svg>

            {/* Bottom Corners Hearts */}
            <div className="absolute bottom-6 left-8 text-[#ff1a40] opacity-80">
              <Heart
                fill="currentColor"
                strokeWidth={0}
                className="w-6 h-6 md:w-8 md:h-8"
              />
            </div>
            <div className="absolute bottom-6 right-8 text-[#ff1a40] opacity-80">
              <Heart
                fill="currentColor"
                strokeWidth={0}
                className="w-6 h-6 md:w-8 md:h-8"
              />
            </div>

            {/* Label Card */}
            <div className="absolute bottom-[4%] md:bottom-[8%] left-1/2 -translate-x-1/2 w-[70%] max-w-[400px] rounded-[24px] border border-white/60 bg-white/30 backdrop-blur-md py-4 px-6 md:py-6 md:px-8 text-center shadow-[0_8px_30px_rgba(0,0,0,0.08)] pointer-events-auto">
              <h3 className="font-display font-black text-lg md:text-2xl tracking-widest text-[#d81b43] uppercase mb-2">
                To: MY MOM
              </h3>
              <p className="font-sans text-xs md:text-sm font-[500] italic leading-relaxed text-slate-800 max-w-[100%] mb-3">
                Happy Mother's Day. I love you.
                <br />
                PS, press the center seal to open!
              </p>
              <h3 className="font-display font-[700] text-sm md:text-base tracking-widest text-[#d81b43] uppercase italic">
                From: YOUR DAUGHTER
              </h3>
            </div>
          </div>
        </motion.div>

        {/* Envelope Top Flap (opens) */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full origin-top pointer-events-none z-30 rounded-t-[24px] overflow-hidden"
          initial={{ rotateX: 0 }}
          animate={{
            rotateX: isOpen ? 180 : 0,
            y: isOpen ? "100vh" : 0,
            opacity: isOpen ? 0 : 1,
            scale: isOpen ? 0.8 : 1,
          }}
          transition={{
            rotateX: { duration: 0.8, ease: "easeInOut" },
            y: {
              duration: 1.5,
              ease: [0.4, 0, 0.2, 1],
              delay: isOpen ? 0.9 : 0,
            },
            opacity: {
              duration: 1.5,
              ease: [0.4, 0, 0.2, 1],
              delay: isOpen ? 0.9 : 0,
            },
            scale: {
              duration: 1.5,
              ease: [0.4, 0, 0.2, 1],
              delay: isOpen ? 0.9 : 0,
            },
          }}
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Front Face of Top Flap */}
          <div
            className="absolute inset-0"
            style={{ backfaceVisibility: "hidden" }}
          >
            <svg
              className="w-full h-full drop-shadow-[0_12px_20px_rgba(0,0,0,0.15)]"
              viewBox="0 0 800 520"
              preserveAspectRatio="none"
            >
              <path
                d="M 0,0 L 800,0 L 800,5 Q 650,5 425,280 Q 400,305 375,280 Q 150,5 0,5 Z"
                fill="#fb7195"
              />
            </svg>

            {/* Seal */}
            <AnimatePresence>
              {!isOpen && (
                <motion.div
                  className="absolute left-1/2 top-[53%] -translate-x-1/2 -translate-y-1/2 z-40 bg-[#ff2044] rounded-full w-[60px] h-[60px] md:w-[80px] md:h-[80px] flex flex-col items-center justify-center cursor-pointer pointer-events-auto shadow-2xl border-[3px] border-[#fb7195]"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleOpen();
                  }}
                  exit={{ scale: 0, opacity: 0 }}
                >
                  <Heart
                    className="text-white w-[30px] h-[30px] md:w-[40px] md:h-[40px] mb-1 drop-shadow-md"
                    fill="white"
                    strokeWidth={0}
                  />
                  <span className="text-white font-sans text-[10px] md:text-[12px] font-black tracking-[0.15em] opacity-100 uppercase drop-shadow-md">
                    Press
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Back Face of Top Flap */}
          <div
            className="absolute inset-0"
            style={{
              transform: "rotateX(180deg)",
              backfaceVisibility: "hidden",
            }}
          >
            <svg
              className="w-full h-full"
              viewBox="0 0 800 520"
              preserveAspectRatio="none"
            >
              <path
                d="M 0,0 L 800,0 L 800,5 Q 650,5 425,280 Q 400,305 375,280 Q 150,5 0,5 Z"
                fill="#ffe9ed"
              />
            </svg>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default EnvelopePage;

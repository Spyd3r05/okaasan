import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import React from "react";

//define types for prop
interface open {
  isOpen: boolean;
}
const Letter = ({ isOpen }: open) => {
  return (
    <motion.div
      className="absolute w-[92%] max-w-[700px] max-h-[90vh] h-auto z-10 flex flex-col items-center justify-start pointer-events-auto cursor-auto"
      initial={{ y: "20%", opacity: 0, scale: 0.9 }}
      animate={{
        y: isOpen ? "0%" : "20%",
        opacity: isOpen ? 1 : 0,
        scale: isOpen ? 1 : 0.9,
        zIndex: isOpen ? 50 : 10,
      }}
      transition={{
        duration: 1.2,
        delay: isOpen ? 1 : 0,
        ease: [0.16, 1, 0.3, 1],
      }}
      style={{
        background:
          "linear-gradient(135deg, #e6d3af 0%, #f4e3c5 50%, #d8c29b 100%)",
        boxShadow:
          "inset 0 0 60px rgba(139, 69, 19, 0.12), 0 20px 40px rgba(0,0,0,0.15)",
        border: "1px solid rgba(139, 69, 19, 0.1)",
        padding: "10% 8% 12% 8%",
      }}
    >
      {/* Faint corner stamp/icon */}
      <div className="absolute top-6 right-8 opacity-40 border-2 border-[#b84e4e] text-[#b84e4e] w-14 h-14 rounded-full flex flex-col items-center justify-center rotate-[15deg]">
        <span className="text-[8px] tracking-[0.2em] font-sans font-bold uppercase border-b border-[#b84e4e] mb-1 leading-none pb-[2px]">
          Date
        </span>
        <span className="text-[10px] font-sans font-bold uppercase leading-none mt-[2px]">
          Today
        </span>
      </div>

      <div className="absolute top-6 left-8 opacity-20 text-slate-800 rotate-[-10deg]">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          className="w-10 h-10"
        >
          <path
            d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 14C8 14 10 16 12 16C14 16 16 14 16 14"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M9 9H9.01" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M15 9H15.01" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      <h2 className="font-letter text-2xl md:text-5xl text-[#2a2624] text-center mb-6 md:mb-8">
        Dear Mom,
      </h2>

      <div className="w-full text-center md:text-left space-y-4 md:space-y-6 text-[#1f1b19] font-letter text-lg md:text-3xl leading-relaxed px-2">
        <p className="break-words">Happy Mother's Day, Mom.</p>
        <p className="break-words">
          Thank you for always being my cheerleader and friend.
        </p>
        <p className="break-words">Without you, I literally would not exist.</p>
        <p className="tracking-wide break-words uppercase md:normal-case">
          without any doubt mother, I LOVE YOU.
        </p>
      </div>

      <div className="mt-8 md:mt-16 text-center text-[#2a2624] font-letter text-base md:text-2xl leading-relaxed max-w-[90%] md:max-w-[80%] opacity-90 italic">
        <p>
          I made this little digital space just for you, filled with things that
          remind me of your love.
        </p>
      </div>

      <div className="mt-auto pt-10 pb-2 flex items-center justify-center gap-2 font-letter text-xl md:text-2xl text-[#2a2624] opacity-80">
        <Heart className="w-3 h-3 fill-current" strokeWidth={0} />
        Lots of Love
        <Heart className="w-3 h-3 fill-current" strokeWidth={0} />
      </div>

      <div className="absolute bottom-6 right-8 opacity-20 text-slate-800 rotate-[5deg]">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          className="w-8 h-8"
        >
          <path
            d="M12 22c5.52 0 10-4.48 10-10S17.52 2 12 2 2 6.48 2 12s4.48 10 10 10z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M12 8v4l3 3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </motion.div>
  );
};
export default Letter;

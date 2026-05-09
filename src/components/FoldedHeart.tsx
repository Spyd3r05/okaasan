import { motion } from "framer-motion";

interface FoldedHeartProps {
  color: string;
  size: number;
  rotation: number;
  x: number;
  y: number;
  delay: number;
  zIndex: number;
}

const FoldedHeart = ({
  color,
  size,
  rotation,
  x,
  y,
  delay,
  zIndex,
}: FoldedHeartProps) => {
  return (
    <motion.div
      className="absolute flex items-center justify-center pointer-events-none opacity-80"
      style={{
        width: size,
        height: size,
        left: `${x}%`,
        top: `${y}%`,
        marginLeft: -size / 2,
        marginTop: -size / 2,
        zIndex: zIndex,
        filter: "drop-shadow(0px 8px 8px rgba(0,0,0,0.15))",
      }}
      initial={{ scale: 0, opacity: 0, rotate: rotation - 30 }}
      animate={{ scale: 1, opacity: 1, rotate: rotation }}
      transition={{ delay: delay, duration: 0.8, type: "spring" }}
    >
      <svg viewBox="0 0 24 24" className="w-full h-full drop-shadow-sm">
        {/* Left half */}
        <path
          d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09V21.35z"
          fill={color}
        />
        {/* Right half */}
        <path
          d="M12 21.35V5.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
          fill={color}
        />
        <path
          d="M12 21.35V5.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
          fill="black"
          opacity="0.15"
        />
      </svg>
    </motion.div>
  );
};

export default FoldedHeart;

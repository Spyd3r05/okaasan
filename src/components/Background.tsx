import { motion } from "framer-motion";
import { getRandomFloat } from "../utils/utils";

//define elements types
type element = {
  id: number;
  left: number;
  delay: number;
  size: number;
  duration: number;
  content: string;
};

const Background = () => {
  const elementsList = ["🌸", "✨", "🎀", "♡", "💖", "(≧◡≦)", "૮ ˶ᵔ ᵕ ᵔ˶ ა"];

  function generateElements(): element[] {
    const newElements = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      left: getRandomFloat(0, 100),
      delay: getRandomFloat(0, 5),
      size: getRandomFloat(15, 30),
      duration: getRandomFloat(10, 25),
      content: elementsList[Math.floor(getRandomFloat(0, elementsList.length))],
    }));
    return newElements;
  }
  const elements = generateElements();

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {elements.map((el) => (
        <motion.div
          key={el.id}
          className="absolute text-pink-400/50 font-bold"
          style={{ fontSize: `${el.size}px` }}
          initial={{ y: "100vh", x: `${el.left}vw`, opacity: 0, rotate: 0 }}
          animate={{
            y: "-10vh",
            x: `${el.left + (getRandomFloat(-1, 1) * 10 - 5)}vw`,
            opacity: [0, 0.7, 0.7, 0],
            rotate: el.content.length > 2 ? [-10, 10, -10] : 360,
          }}
          transition={{
            duration: el.duration,
            delay: el.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {el.content}
        </motion.div>
      ))}
    </div>
  );
};

export default Background;

import { motion } from "framer-motion";
import HeartCluster from "../components/HeartCluster";

//define prop types
interface LandingPageProps {
  onNext: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onNext }) => {
  return (
    <motion.div
      className="absolute inset-0 flex flex-col items-center justify-center p-4 z-20 w-full h-full max-w-sm mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -50, scale: 0.95 }}
      transition={{ duration: 0.8 }}
    >
      <div className="relative flex items-center justify-center mt-6 mb-8 w-full max-w-[360px] aspect-square">
        {/* Animated Heart Background */}
        <motion.div
          animate={{ scale: [1, 1.05, 1], rotate: [-2, 2, -2] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="relative text-pink-500 w-full h-full flex items-center justify-center"
        >
          <HeartCluster />

          <div className="absolute inset-0 flex flex-col items-center justify-center text-white pointer-events-none text-center z-[200]">
            <div className="absolute w-[120%] h-[120%] bg-pink-500/20 blur-3xl rounded-full -z-10" />
            <span className="font-sans font-black tracking-[0.4em] uppercase text-sm md:text-base mb-[-8px] text-pink-50 drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)]">
              Happy
            </span>
            <span className="font-cursive text-[6rem] md:text-[8rem] text-white py-0 leading-[1] drop-shadow-[0_10px_20px_rgba(150,0,50,0.5)]">
              Mother's
            </span>
            <span className="font-sans font-black tracking-[0.5em] uppercase text-3xl md:text-4xl mt-[-12px] text-pink-50 drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)] z-10">
              Day
            </span>
          </div>
        </motion.div>
      </div>

      <div className="text-center mb-8 z-10">
        <h2 className="text-pink-600 font-display text-2xl md:text-3xl font-bold mb-2">
          Mom, this is for you!
        </h2>
        <p className="text-pink-500/90 font-semibold text-sm">
          A special message just for the best mom.
        </p>
      </div>

      <motion.button
        onClick={onNext}
        className="z-10 bg-gradient-to-br from-pink-500 to-rose-400 text-white font-bold py-4 px-8 mt-4 rounded-full shadow-[0_10px_25px_rgba(255,105,180,0.5)] border-2 border-pink-300 transform hover:-translate-y-1 transition-all duration-300 font-sans text-lg flex items-center gap-2"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Read my letter 💌
      </motion.button>
    </motion.div>
  );
};

export default LandingPage;

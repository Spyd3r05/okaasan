import {useEffect, useState} from "react";
import {motion} from "framer-motion";

const Background = () => {
    {
        const elementsList = ['🌸', '✨', '🎀', '♡', '💖', '(≧◡≦)', '૮ ˶ᵔ ᵕ ᵔ˶ ა'];
        const [elements, setElements] = useState<{
            id: number;
            left: number;
            delay: number;
            size: number;
            duration: number;
            content: string
        }[]>([]);

        useEffect(() => {
            // Generate random floating chibi/kawaii elements
            const newElements = Array.from({length: 20}).map((_, i) => ({
                id: i,
                left: Math.random() * 100,
                delay: Math.random() * 5,
                size: Math.random() * 15 + 15, // slightly larger for emojis
                duration: Math.random() * 10 + 15,
                content: elementsList[Math.floor(Math.random() * elementsList.length)],
            }));
            setElements(newElements);
        }, []);

        return (
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                {elements.map((el   ) => (
                    <motion.div
                        key={el.id}
                        className="absolute text-pink-400/50 font-bold"
                        style={{fontSize: `${el.size}px`}}
                        initial={{y: '100vh', x: `${el.left}vw`, opacity: 0, rotate: 0}}
                        animate={{
                            y: '-10vh',
                            // eslint-disable-next-line react-hooks/purity
                            x: `${el.left + (Math.random() * 10 - 5)}vw`,
                            opacity: [0, 0.7, 0.7, 0],
                            rotate: el.content.length > 2 ? [-10, 10, -10] : 360, // Don't flip kaomoji entirely
                        }}
                        transition={{
                            duration: el.duration,
                            delay: el.delay,
                            repeat: Infinity,
                            ease: 'linear',
                        }}
                    >
                        {el.content}
                    </motion.div>
                ))}
            </div>
        );
    };
}

export default Background;
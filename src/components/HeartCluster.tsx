import * as React from "react";
import FoldedHeart from "./FoldedHeart.tsx";

const HeartCluster = () => {
    const items = React.useMemo(() => {
        const result = [];
        const colors = ['#f43f5e', '#e11d48', '#be123c', '#fb7185', '#ff1493', '#db7093', '#ff69b4', '#ef4444'];

        // Create random hearts within a heart shape equation
        let attempts = 0;
        while(result.length < 50 && attempts < 2000) {
            attempts++;
            const x = (Math.random() * 2 - 1) * 1.5;
            const y = (Math.random() * 2 - 1) * 1.5;

            const px = x;
            const py = -y;
            const mathVal = Math.pow(px*px + py*py - 1, 3) - px*px * py*py*py;
            if (mathVal <= 0) {
                // Map back to 0-100%
                result.push({
                    id: result.length,
                    x: (x + 1.5) / 3 * 100,
                    y: (y + 1.5) / 3 * 100,
                    size: Math.random() * 30 + 35, // 35px to 65px size
                    rotation: (Math.random() - 0.5) * 70, // -35 to 35 deg
                    color: colors[Math.floor(Math.random() * colors.length)],
                    delay: Math.random() * 0.8,
                    zIndex: Math.floor(Math.random() * 100)
                });
            }
        }

        // Add some random floating ones outside
        for(let i=0; i<15; i++) {
            result.push({
                id: result.length,
                x: Math.random() * 120 - 10,
                y: Math.random() * 120 - 10,
                size: Math.random() * 20 + 20,
                rotation: (Math.random() - 0.5) * 180,
                color: colors[Math.floor(Math.random() * colors.length)],
                delay: Math.random() * 1.5,
                zIndex: Math.floor(Math.random() * 20)
            });
        }

        return result.sort((a,b) => a.zIndex - b.zIndex);
    }, []);

    return (
        <div className="absolute inset-0">
            {items.map(item => (
                <FoldedHeart key={item.id} {...item} />
            ))}
        </div>
    );
};

export default HeartCluster;
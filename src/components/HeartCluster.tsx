import * as React from "react";
import { getRandomFloat } from "../utils/utils.ts";
import FoldedHeart from "./FoldedHeart.tsx";

//define type for heart item
type HeartItem = {
  id: number;
  x: number;
  y: number;
  size: number;
  rotation: number;
  color: string;
  delay: number;
  zIndex: number;
};

const HeartCluster = () => {
  const items = React.useMemo(() => {
    const result: HeartItem[] = [];
    const colors = [
      "#f43f5e",
      "#e11d48",
      "#be123c",
      "#fb7185",
      "#ff1493",
      "#db7093",
      "#ff69b4",
      "#ef4444",
    ];

    // Create random hearts within a heart shape equation
    let attempts = 0;
    while (result.length < 50 && attempts < 2000) {
      attempts++;
      const x = (getRandomFloat(0, 1) * 2 - 1) * 1.5;
      const y = (getRandomFloat(0, 1) * 2 - 1) * 1.5;

      const px = x;
      const py = -y;
      const mathVal =
        Math.pow(px * px + py * py - 1, 3) - px * px * py * py * py;
      if (mathVal <= 0) {
        // Map back to 0-100%
        result.push({
          id: result.length,
          x: ((x + 1.5) / 3) * 100,
          y: ((y + 1.5) / 3) * 100,
          size: getRandomFloat(35, 65),
          rotation: getRandomFloat(-35, 35),
          color: colors[Math.floor(getRandomFloat(0, colors.length))],
          delay: getRandomFloat(0, 0.8),
          zIndex: Math.floor(getRandomFloat(0, 100)),
        });
      }
    }

    // Add some random floating ones outside
    for (let i = 0; i < 15; i++) {
      result.push({
        id: result.length,
        x: getRandomFloat(0, 1) * 120 - 10,
        y: getRandomFloat(0, 1) * 120 - 10,
        size: getRandomFloat(20, 40),
        rotation: getRandomFloat(-90, 90),
        color: colors[Math.floor(getRandomFloat(0, colors.length))],
        delay: getRandomFloat(0, 1.5),
        zIndex: Math.floor(getRandomFloat(0, 20)),
      });
    }

    return result.sort((a, b) => a.zIndex - b.zIndex);
  }, []);

  return (
    <div className="absolute inset-0">
      {items.map((item) => (
        <FoldedHeart key={item.id} {...item} />
      ))}
    </div>
  );
};

export default HeartCluster;

import { motion } from "framer-motion";

export default function AnimatedNetworkOrb() {
  const points = [
    [18, 68], [28, 42], [45, 30], [63, 38], [78, 58], [70, 78], [48, 86], [30, 82],
    [40, 56], [56, 60], [62, 24], [84, 34], [18, 28], [88, 76], [52, 44],
  ];

  const lines = [
    [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 0],
    [1, 8], [8, 9], [9, 4], [2, 14], [14, 9], [3, 10], [10, 11], [11, 4],
    [12, 1], [12, 2], [5, 13], [13, 6], [8, 2], [9, 3], [7, 8],
  ];

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none absolute -right-24 top-28 h-80 w-80 opacity-[0.12] sm:-right-20 sm:h-96 sm:w-96 sm:opacity-[0.18] lg:-right-20 lg:bottom-4 lg:top-auto lg:h-[34rem] lg:w-[34rem] lg:opacity-40"
      animate={{ y: [0, -18, 0], rotate: [0, 1.5, 0] }}
      transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
    >
      <div className="absolute inset-0 rounded-full bg-white/5 blur-3xl" />
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full">
        <defs>
          <radialGradient id="orbFade" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="white" stopOpacity="0.95" />
            <stop offset="100%" stopColor="white" stopOpacity="0.08" />
          </radialGradient>
        </defs>

        <motion.g animate={{ opacity: [0.35, 0.85, 0.35] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}>
          {lines.map(([a, b], index) => (
            <motion.line
              key={`${a}-${b}`}
              x1={points[a][0]}
              y1={points[a][1]}
              x2={points[b][0]}
              y2={points[b][1]}
              stroke="url(#orbFade)"
              strokeWidth="0.18"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: [0.25, 0.8, 0.25] }}
              transition={{ duration: 2.8, delay: index * 0.03, repeat: Infinity, repeatType: "mirror" }}
            />
          ))}
        </motion.g>

        {points.map(([x, y], index) => (
          <motion.rect
            key={`${x}-${y}`}
            x={x - 0.65}
            y={y - 0.65}
            width="1.3"
            height="1.3"
            fill="white"
            opacity="0.72"
            animate={{ opacity: [0.25, 0.9, 0.25], scale: [0.8, 1.25, 0.8] }}
            transition={{ duration: 2.5 + (index % 4) * 0.35, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </svg>
    </motion.div>
  );
}

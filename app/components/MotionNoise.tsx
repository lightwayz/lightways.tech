"use client";

import { motion } from "framer-motion";

export default function MotionNoise() {
    return (
        <motion.div
            animate={{
                x: [0, 30, 0],
                y: [0, -20, 0],
            }}
            transition={{
                duration: 20,
                repeat: Infinity,
                ease: "easeInOut",
            }}
            className="pointer-events-none fixed inset-0 z-[9997] opacity-[0.02]"
            style={{
                backgroundImage:
                    "url('https://grainy-gradients.vercel.app/noise.svg')",
            }}
        />
    );
}
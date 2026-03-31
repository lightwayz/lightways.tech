"use client";

import { motion } from "framer-motion";

export default function FilmGlow() {
    return (
        <motion.div
            animate={{
                opacity: [0.15, 0.25, 0.15],
            }}
            transition={{
                duration: 8,
                repeat: Infinity,
            }}
            className="pointer-events-none fixed inset-0 z-[9996] bg-gradient-to-br from-yellow-400/5 via-transparent to-transparent"
        />
    );
}
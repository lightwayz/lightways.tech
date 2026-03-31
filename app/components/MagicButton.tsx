"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

export default function MagneticButton({ children }: any) {
    const ref = useRef(null);

    return (
        <motion.button
            ref={ref}
            whileHover={{ scale: 1.1 }}
            className="bg-yellow-400 text-black px-8 py-4 rounded-full"
        >
            {children}
        </motion.button>
    );
}
"use client";

import { motion } from "framer-motion";

export default function Button({ children }: any) {
    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-yellow-400 text-black px-6 py-3 rounded-full"
        >
            {children}
        </motion.button>
    );
}
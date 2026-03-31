"use client";

import { motion } from "framer-motion";

export default function AnimatedText({ text }: any) {
    return (
        <div className="overflow-hidden">
            {text.split(" ").map((word: string, i: number) => (
                <motion.span
                    key={i}
                    initial={{ y: 100 }}
                    animate={{ y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="inline-block mr-2"
                >
                    {word}
                </motion.span>
            ))}
        </div>
    );
}
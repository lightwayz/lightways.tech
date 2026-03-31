"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function PageIntro() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1800);

        return () => clearTimeout(timer);
    }, []);

    if (!loading) return null;

    return (
        <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="fixed inset-0 bg-black z-[9999] flex items-center justify-center"
        >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1]
                }}
                className="text-2xl md:text-3xl font-semibold tracking-tight"
            >
                <span className="text-yellow-400">Lightways</span>
                <span className="text-white">.tech</span>
            </motion.div>
        </motion.div>
    );
}
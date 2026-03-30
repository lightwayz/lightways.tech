"use client";

import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="min-h-screen flex items-center px-6 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <motion.h1
                    initial={{ y: 80, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="text-6xl md:text-8xl font-bold leading-tight"
                >
                    We Build
                    <br />
                    Intelligent Systems
                    <br />
                    That Think.
                </motion.h1>

                <motion.p
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="mt-6 text-neutral-400 max-w-lg"
                >
                    Human-centric AI, innovation labs, and startup ecosystems.
                </motion.p>

                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="mt-8 flex gap-4"
                >
                    <button className="bg-yellow-400 text-black px-6 py-3 rounded-full">
                        Start Project
                    </button>

                    <button className="border border-neutral-700 px-6 py-3 rounded-full">
                        Explore
                    </button>
                </motion.div>
            </motion.div>
        </section>
    );
}
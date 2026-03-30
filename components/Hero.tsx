"use client";

import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center px-6 max-w-7xl mx-auto overflow-hidden">

            {/* Background Glow */}
            <motion.div
                animate={{
                    backgroundPosition: ["0% 50%", "100% 50%"],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                }}
                className="absolute inset-0 opacity-10 bg-gradient-to-r from-yellow-400 via-transparent to-yellow-400 blur-3xl"
            />

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="relative z-10"
            >

                {/* Headline */}
                <motion.h1
                    initial={{ y: 80, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight"
                >
                    <span className="block">We Build</span>
                    <span className="block text-yellow-400">
            Intelligent Systems
          </span>
                    <span className="block">That Think.</span>
                </motion.h1>

                {/* Description */}
                <motion.p
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="mt-6 text-neutral-400 max-w-lg text-lg"
                >
                    Human-centric AI, innovation labs, and startup ecosystems.
                </motion.p>

                {/* Buttons */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="mt-8 flex gap-4"
                >
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-yellow-400 text-black px-8 py-4 rounded-full font-medium"
                    >
                        Start Project
                    </motion.button>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="border border-neutral-700 px-8 py-4 rounded-full"
                    >
                        Explore
                    </motion.button>
                </motion.div>

            </motion.div>

        </section>
    );
}
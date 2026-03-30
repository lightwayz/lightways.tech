"use client";

import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="min-h-screen flex items-center px-6 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="text-6xl md:text-8xl font-bold leading-tight">
                    We Build <br />
                    Intelligent Systems <br />
                    That Think.
                </h1>

                <p className="mt-6 text-neutral-400 max-w-lg">
                    Human‑centric AI, innovation labs, and startup ecosystems.
                </p>

                <div className="mt-8 flex gap-4">
                    <button className="bg-yellow-400 text-black px-6 py-3 rounded-full">
                        Start Project
                    </button>

                    <button className="border border-neutral-700 px-6 py-3 rounded-full">
                        Explore
                    </button>
                </div>
            </motion.div>
        </section>
    );
}
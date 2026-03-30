"use client";

import { motion } from "framer-motion";

export default function Navbar() {
    return (
        <motion.nav
            initial={{ y: -80 }}
            animate={{ y: 0 }}
            className="fixed w-full top-0 z-50 backdrop-blur-lg bg-black/40 border-b border-neutral-800"
        >
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <h1 className="text-xl font-semibold tracking-wide">
                    Lightways.tech
                </h1>

                <div className="flex gap-8 items-center">
                    <a>Work</a>
                    <a>Services</a>
                    <a>Lab</a>
                    <a>About</a>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        className="border border-yellow-400 px-4 py-2 rounded-full"
                    >
                        Start Project
                    </motion.button>
                </div>
            </div>
        </motion.nav>
    );
}
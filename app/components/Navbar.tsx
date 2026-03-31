"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
    return (
        <motion.nav
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="fixed w-full top-0 z-50 backdrop-blur-xl bg-black/40 border-b border-neutral-800"
        >
            <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

                {/* Logo */}
                <Link href="/lightways.tech/public">
                    <h1 className="text-xl font-semibold tracking-wide cursor-pointer hover:text-yellow-400 transition">
                        Lightways.tech
                    </h1>
                </Link>

                {/* Navigation */}
                <div className="hidden md:flex gap-10 items-center">

                    <Link href="/work" className="text-neutral-400 hover:text-white transition">
                        Work
                    </Link>

                    <Link href="/services" className="text-neutral-400 hover:text-white transition">
                        Services
                    </Link>

                    <Link href="/lab" className="text-neutral-400 hover:text-white transition">
                        Lab
                    </Link>

                    <Link href="/about" className="text-neutral-400 hover:text-white transition">
                        About
                    </Link>

                    {/* CTA Button */}
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="border border-yellow-400 text-white px-5 py-2.5 rounded-full hover:bg-yellow-400 hover:text-black transition-all"
                    >
                        Start Project
                    </motion.button>

                </div>
            </div>
        </motion.nav>
    );
}
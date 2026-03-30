"use client";

import { motion } from "framer-motion";

export default function Lab() {
    return (
        <section className="py-40 text-center">
            <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-6xl font-bold"
            >
                The Lightways Lab
            </motion.h2>

            <p className="mt-6 text-neutral-400">
                Researching and building future intelligent systems.
            </p>
        </section>
    );
}
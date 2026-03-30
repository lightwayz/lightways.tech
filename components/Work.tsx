"use client";

import { motion } from "framer-motion";

export default function Work() {
    return (
        <section className="py-32 px-6 max-w-7xl mx-auto">
            <h2 className="text-5xl mb-16">Selected Work</h2>

            <div className="grid md:grid-cols-2 gap-10">
                {[1, 2].map((item) => (
                    <motion.div
                        key={item}
                        whileHover={{ scale: 1.02 }}
                        className="border border-neutral-800 p-20 rounded-2xl"
                    >
                        <h3 className="text-3xl">Project {item}</h3>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
"use client";

import { motion } from "framer-motion";

const capabilities = [
    "AI Engineering",
    "Platform Architecture",
    "Failure-First Engineering",
    "Human-Centric Systems",
    "Cybersecurity AI",
    "Automation Systems"
];

export default function Capabilities() {
    return (
        <section className="py-32 px-6 max-w-7xl mx-auto">
            <h2 className="text-4xl mb-12">Capabilities</h2>

            <div className="grid md:grid-cols-2 gap-6">
                {capabilities.map((item, i) => (
                    <motion.div
                        key={i}
                        whileHover={{ rotateX: 3, rotateY: 3 }}
                        className="border border-neutral-800 p-8 rounded-2xl"
                    >
                        {item}
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
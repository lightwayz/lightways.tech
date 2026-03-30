"use client";

import { motion } from "framer-motion";

const services = [
    "AI Systems",
    "Innovation Lab",
    "Startup Builder",
    "Human-Centric AI"
];

export default function Services() {
    return (
        <section className="py-32 px-6 max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
                {services.map((service, i) => (
                    <motion.div
                        key={i}
                        whileHover={{ rotateX: 4, rotateY: 4 }}
                        className="border border-neutral-800 p-10 rounded-2xl"
                    >
                        <h3 className="text-3xl">{service}</h3>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
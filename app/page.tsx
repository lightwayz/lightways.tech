"use client";

import { motion } from "framer-motion";
import Hero from "@/app/components/Hero";
import Philosophy from "@/app/components/Philosophy";
import Services from "@/app/components/Services";
import Capabilities from "@/app/components/Capabilities";
import Process from "@/app/components/Process";
import Lab from "@/app/components/Lab";
import CTA from "@/app/components/CTA";
import Divider from "@/app/components/Divider";
import { smallMotion, mediumMotion, largeMotion } from "@/lib/motion";

export default function Home() {
    const brandLogos = ["brand1", "brand2", "brand3", "brand4", "brand5"];

    return (
        <main>
            {/* Hero */}
            <Hero />

            {/* Divider */}
            <Divider />

            {/* Scrollable Brand Logos */}
            <motion.section
                id="brands"
                className="py-12 overflow-x-auto whitespace-nowrap flex items-center gap-8 px-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={mediumMotion}
            >
                {brandLogos.map((logo, i) => (
                    <motion.img
                        key={i}
                        src={`/logos/${logo}.svg`}
                        alt={logo}
                        className="h-16 object-contain inline-block"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    />
                ))}
            </motion.section>

            {/* What We Stand For */}
            <motion.section
                id="values"
                className="py-24 text-center max-w-3xl mx-auto px-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={mediumMotion}
            >
                {[
                    "Human-centric AI, responsible innovation,",
                    "transformative systems that prioritize people over technology.",
                ].map((line, i) => (
                    <motion.p
                        key={i}
                        className="text-lg md:text-xl text-neutral-400"
                        variants={smallMotion}
                        transition={{ delay: i * 0.2 }}
                    >
                        {line}
                    </motion.p>
                ))}
            </motion.section>

            {/* Philosophy */}
            <motion.section
                id="philosophy"
                className="py-24 max-w-5xl mx-auto px-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={mediumMotion}
            >
                <Philosophy />
            </motion.section>

            {/* Services */}
            <motion.section
                id="services"
                className="py-24 max-w-5xl mx-auto px-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={mediumMotion}
            >
                <Services />
            </motion.section>

            {/* Capabilities */}
            <motion.section
                id="capabilities"
                className="py-24 max-w-5xl mx-auto px-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={mediumMotion}
            >
                <Capabilities />
            </motion.section>

            {/* Process */}
            <motion.section
                id="process"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={largeMotion}
            >
                <Process />
            </motion.section>

            {/* Lab */}
            <motion.section
                id="lab"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={largeMotion}
            >
                <Lab />
            </motion.section>

            {/* CTA */}
            <motion.section
                id="cta"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={largeMotion}
            >
                <CTA />
            </motion.section>
        </main>
    );
}
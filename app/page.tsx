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
import { mediumMotion } from "@/lib/motion";

export default function Home() {
    return (
        <main>
            {/* Hero Section (already animates internally) */}
            <section id="hero">
                <Hero />
            </section>

            <Divider />

            {/* Philosophy Section */}
            <motion.section
                id="philosophy"
                className="py-24"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={mediumMotion}
            >
                <div className="h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent mb-12" />
                <Philosophy />
            </motion.section>

            {/* Services Section */}
            <motion.section
                id="services"
                className="py-24"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={mediumMotion}
            >
                <div className="h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent mb-12" />
                <Services />
            </motion.section>

            {/* Capabilities Section */}
            <motion.section
                id="capabilities"
                className="py-24"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={mediumMotion}
            >
                <div className="h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent mb-12" />
                <Capabilities />
            </motion.section>

            {/* Process Section */}
            <motion.section
                id="process"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={mediumMotion}
            >
                <Process />
            </motion.section>

            {/* Lab Section */}
            <motion.section
                id="lab"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={mediumMotion}
            >
                <Lab />
            </motion.section>

            {/* CTA Section */}
            <motion.section
                id="cta"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={mediumMotion}
            >
                <CTA />
            </motion.section>
        </main>
    );
}
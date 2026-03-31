"use client";

import { motion } from "framer-motion";
import Reveal from "@/app/components/Reveal";
import MagneticButton from "@/app/components/MagneticButton";

export default function Hero() {
    return (
        <section className="relative min-h-[90vh] md:min-h-screen flex items-center px-6 md:px-8 lg:px-12 max-w-7xl mx-auto overflow-hidden">

            {/* Background Glow */}
            <motion.div
                animate={{
                    backgroundPosition: ["0% 50%", "100% 50%"],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute inset-0 opacity-10 bg-gradient-to-r from-yellow-400 via-transparent to-yellow-400 blur-3xl"
            />

            {/* Subtle floating glow */}
            <motion.div
                animate={{
                    y: [0, -30, 0],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-yellow-400/10 blur-[140px] rounded-full"
            />

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="relative z-10 w-full"
            >

                {/* Headline */}
                <Reveal>
                    <motion.h1
                        className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tight"
                    >
                        <motion.span
                            initial={{ y: 40, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{
                                duration: 0.6,
                                delay: 0,
                                ease: [0.22, 1, 0.36, 1]
                            }}
                            className="block"
                        >
                            We Build
                        </motion.span>

                        <motion.span
                            initial={{ y: 40, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{
                                duration: 0.6,
                                delay: 0.15,
                                ease: [0.22, 1, 0.36, 1]
                            }}
                            className="block text-yellow-400"
                        >
                            Intelligent Systems
                        </motion.span>

                        <motion.span
                            initial={{ y: 40, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{
                                duration: 0.6,
                                delay: 0.3,
                                ease: [0.22, 1, 0.36, 1]
                            }}
                            className="block"
                        >
                            For Human Progress.
                        </motion.span>
                    </motion.h1>
                </Reveal>

                {/* Description */}
                <Reveal>
                    <motion.p
                        className="mt-5 md:mt-6 text-neutral-400 max-w-md md:max-w-lg text-base md:text-lg leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            delay: 0.45,
                            ease: [0.22, 1, 0.36, 1]
                        }}
                    >
                        Human-centric AI, innovation labs, and startup ecosystems.
                    </motion.p>
                </Reveal>

                {/* Buttons */}
                <Reveal>
                    <motion.div
                        className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            delay: 0.6,
                            ease: [0.22, 1, 0.36, 1]
                        }}
                    >

                        <MagneticButton
                            className="bg-yellow-400 text-black px-6 py-3 md:px-8 md:py-4 rounded-full font-medium transition-colors duration-300 hover:bg-yellow-300"
                        >
                            Start Project
                        </MagneticButton>

                        <MagneticButton
                            className="border border-neutral-700 px-6 py-3 md:px-8 md:py-4 rounded-full hover:border-yellow-400 transition-colors duration-300"
                        >
                            Explore
                        </MagneticButton>

                    </motion.div>
                </Reveal>

            </motion.div>

        </section>
    );
}
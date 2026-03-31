"use client";

import { motion, Transition } from "framer-motion";
import Reveal from "@/app/components/Reveal";
import MagneticButton from "@/app/components/MagneticButton";
import { largeMotion, smallMotion, mediumMotion } from "@/lib/motion";

// Wrap MagneticButton in motion for hover/tap animations
const MotionMagneticButton = motion(MagneticButton);

const springTransition: Transition = {
    type: "spring",
    stiffness: 400,
    damping: 20,
};

export default function Hero() {
    return (
        <motion.section
            id="hero"
            className="relative min-h-[90vh] md:min-h-screen flex items-center px-6 md:px-8 lg:px-12 max-w-7xl mx-auto overflow-hidden"
            initial="hidden"
            animate="visible"
            variants={largeMotion} // Hero entrance
            transition={{ duration: 0.8 }}
        >
            {/* Background Glow */}
            <motion.div
                animate={{ backgroundPosition: ["0% 50%", "100% 50%"] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 opacity-10 bg-gradient-to-r from-yellow-400 via-transparent to-yellow-400 blur-3xl"
            />

            {/* Floating Glow */}
            <motion.div
                animate={{ y: [0, -30, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-yellow-400/10 blur-[140px] rounded-full"
            />

            {/* Content */}
            <div className="relative z-10 w-full">
                {/* Headline */}
                <Reveal>
                    <motion.h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tight">
                        {["We Build", "Intelligent Systems", "For Human Progress."].map(
                            (line, i) => (
                                <motion.span
                                    key={i}
                                    variants={smallMotion} // smallMotion for individual line reveal
                                    className={`block ${i === 1 ? "text-yellow-400" : ""}`}
                                    transition={{ delay: i * 0.15 }}
                                >
                                    {line}
                                </motion.span>
                            )
                        )}
                    </motion.h1>
                </Reveal>

                {/* Description */}
                <Reveal>
                    <motion.p
                        className="mt-5 md:mt-6 text-neutral-400 max-w-md md:max-w-lg text-base md:text-lg leading-relaxed"
                        variants={smallMotion}
                        transition={{ delay: 0.45 }}
                    >
                        Human-centric AI, innovation labs, and startup ecosystems.
                    </motion.p>
                </Reveal>

                {/* Buttons */}
                <Reveal>
                    <motion.div
                        className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4"
                        variants={mediumMotion} // medium motion for buttons
                        transition={{ delay: 0.6 }}
                    >
                        <MotionMagneticButton
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            transition={springTransition}
                            className="bg-yellow-400 text-black px-6 py-3 md:px-8 md:py-4 rounded-full font-medium transition-colors duration-300 hover:bg-yellow-300"
                        >
                            Start Project
                        </MotionMagneticButton>

                        <MotionMagneticButton
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            transition={springTransition}
                            className="border border-neutral-700 px-6 py-3 md:px-8 md:py-4 rounded-full hover:border-yellow-400 transition-colors duration-300"
                        >
                            Explore
                        </MotionMagneticButton>
                    </motion.div>
                </Reveal>
            </div>
        </motion.section>
    );
}
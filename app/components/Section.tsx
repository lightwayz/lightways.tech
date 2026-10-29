"use client";

import { motion } from "framer-motion";

export default function Section({ children }: { children: React.ReactNode }) {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            {children}
        </motion.section>
    );
}

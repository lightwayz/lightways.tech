"use client";

import { motion } from "framer-motion";

export default function TiltCard({ children }: any) {
    return (
        <motion.div
            whileHover={{
                rotateX: 6,
                rotateY: 6,
                scale: 1.02,
            }}
            transition={{ type: "spring", stiffness: 200 }}
            className="transition-all"
        >
            {children}
        </motion.div>
    );
}
"use client";

import { motion } from "framer-motion";

export default function Tilt3D({ children }: any) {
    return (
        <motion.div
            whileHover={{
                rotateX: 8,
                rotateY: -8,
                scale: 1.03,
            }}
            transition={{ type: "spring", stiffness: 200 }}
        >
            {children}
        </motion.div>
    );
}
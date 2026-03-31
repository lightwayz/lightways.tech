// noinspection ES6UnusedImports

"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import React, { useRef } from "react";

export default function MagneticButton({
                                           children,
                                           className = "",
                                       }: {
    children: React.ReactNode;
    className?: string;
}) {
    const ref = useRef<HTMLButtonElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const offsetX = e.clientX - (rect.left + rect.width / 2);
        const offsetY = e.clientY - (rect.top + rect.height / 2);

        x.set(offsetX * 0.2);
        y.set(offsetY * 0.2);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.button
            ref={ref}
            className={`relative z-10 ${className}`}
            style={{ x, y }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            {children}
        </motion.button>
    );
}
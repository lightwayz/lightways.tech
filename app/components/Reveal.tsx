"use client";

import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

export default function Reveal({
                                   children,
                               }: {
    children: React.ReactNode;
}) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
        >
            {children}
        </motion.div>
    );
}
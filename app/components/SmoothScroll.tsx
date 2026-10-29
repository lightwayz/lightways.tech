"use client";

import useSmoothScroll from "@/lib/SmoothScroll";
import React from "react";
import { MotionConfig } from "framer-motion";

export default function SmoothScroll({
                                         children,
                                     }: {
    children: React.ReactNode;
}) {
    useSmoothScroll();

    return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

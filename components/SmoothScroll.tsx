"use client";

import useSmoothScroll from "@/lib/smoothScroll";
import React from "react";

export default function SmoothScroll({
                                         children,
                                     }: {
    children: React.ReactNode;
}) {
    useSmoothScroll();

    return <>{children}</>;
}
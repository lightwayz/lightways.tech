"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const move = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", move);

        return () => window.removeEventListener("mousemove", move);
    }, []);

    return (
        <div
            className="fixed w-6 h-6 bg-yellow-400 rounded-full pointer-events-none z-[9999] mix-blend-difference transition-transform duration-75"
            style={{
                transform: `translate(${position.x}px, ${position.y}px)`
            }}
        />
    );
}
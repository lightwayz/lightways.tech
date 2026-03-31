"use client";

import { useEffect, useState } from "react";

export default function Cursor() {
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
            className="fixed w-40 h-40 rounded-full pointer-events-none blur-3xl opacity-30 bg-yellow-400"
            style={{
                left: position.x - 80,
                top: position.y - 80,
            }}
        />
    );
}
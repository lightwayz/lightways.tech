"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [hovering, setHovering] = useState(false);

    useEffect(() => {
        let mouseX = 0;
        let mouseY = 0;

        const move = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        };

        const animate = () => {
            setPosition((prev) => ({
                x: prev.x + (mouseX - prev.x) * 0.12,
                y: prev.y + (mouseY - prev.y) * 0.12,
            }));

            requestAnimationFrame(animate);
        };

        const handleHover = (e: MouseEvent) => {
            const target = e.target as HTMLElement;

            if (
                target.tagName === "BUTTON" ||
                target.tagName === "A" ||
                target.closest("button") ||
                target.closest("a")
            ) {
                setHovering(true);
            } else {
                setHovering(false);
            }
        };

        window.addEventListener("mousemove", move);
        window.addEventListener("mousemove", handleHover);

        animate();

        return () => {
            window.removeEventListener("mousemove", move);
            window.removeEventListener("mousemove", handleHover);
        };
    }, []);

    return (
        <div
            className={`fixed w-6 h-6 rounded-full pointer-events-none z-[9999] mix-blend-difference transition-all duration-200 ${
                hovering ? "scale-150 bg-yellow-300" : "bg-yellow-400"
            }`}
            style={{
                transform: `translate(${position.x}px, ${position.y}px)`
            }}
        />
    );
}
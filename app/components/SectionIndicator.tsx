"use client";

import { useEffect, useState } from "react";

const sections = ["hero", "about", "services", "contact"];

export default function SectionIndicator() {
    const [active, setActive] = useState("hero");

    useEffect(() => {
        const handleScroll = () => {
            sections.forEach((section) => {
                const el = document.getElementById(section);

                if (!el) return;

                const rect = el.getBoundingClientRect();

                if (rect.top <= 200 && rect.bottom >= 200) {
                    setActive(section);
                }
            });
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="fixed right-6 top-1/2 -translate-y-1/2 z-[9998] flex flex-col gap-3">
            {sections.map((section) => (
                <div
                    key={section}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        active === section
                            ? "bg-yellow-400 scale-150"
                            : "bg-neutral-600"
                    }`}
                />
            ))}
        </div>
    );
}
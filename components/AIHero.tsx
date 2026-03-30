"use client";

import { useState } from "react";

export default function AIHero() {
    const [idea, setIdea] = useState("");

    return (
        <section className="py-40 text-center">
            <h2 className="text-6xl font-bold">
                Describe Your Idea
            </h2>

            <input
                value={idea}
                onChange={(e) => setIdea(e.target.value)}
                placeholder="Type your idea..."
                className="mt-8 bg-black border border-neutral-700 px-6 py-4 rounded-full w-full max-w-xl"
            />

            <button className="mt-6 bg-yellow-400 text-black px-8 py-4 rounded-full">
                Analyze
            </button>
        </section>
    );
}
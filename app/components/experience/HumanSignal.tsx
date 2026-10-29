"use client";
import Image from "next/image";
import { useState } from "react";

const stages = [
  { id: "understand", label: "Understand", copy: "Listen to the people doing the work. Map the current process, identify the friction and agree a useful outcome." },
  { id: "build", label: "Build", copy: "Build a focused solution and review it against the agreed requirements." },
  { id: "improve", label: "Improve", copy: "Review what happens in practice. Compare the result with the starting point, listen to feedback and prioritise the next improvement." },
] as const;

export default function HumanSignal() {
  const [selected, setSelected] = useState<string>(stages[0].id);
  const stage = stages.find(item => item.id === selected) ?? stages[0];
  return <figure className="human-signal" aria-labelledby="human-signal-title">
    <div className="human-signal-heading"><p className="eyebrow">PEOPLE AT THE CENTRE</p><h3 id="human-signal-title">The Human Signal</h3></div>
    <Image src="/images/brand/human-signal.svg" alt="A single yellow point represents a person’s need. Surrounding fine paths resolve into three connected, translucent stages: Understand, Build and Improve." width={1100} height={600} sizes="(max-width: 800px) 90vw, 1328px" loading="lazy" unoptimized />
    <figcaption>
      <p className="human-signal-key"><span aria-hidden="true" /> A person’s need. A clearer way forward.</p>
      <fieldset className="human-signal-controls"><legend>Explore the three stages</legend>{stages.map((item, index) => <label key={item.id}>
        <input type="radio" name="human-signal-stage" value={item.id} checked={selected === item.id} onChange={() => setSelected(item.id)} aria-controls="human-signal-explanation" />
        <span aria-hidden="true">0{index + 1}</span><strong>{item.label}</strong>
      </label>)}</fieldset>
      <p id="human-signal-explanation" className="human-signal-explanation" role="status" aria-live="polite" aria-atomic="true"><strong>{stage.label}. </strong>{stage.copy}</p>
      <noscript><div className="human-signal-no-script"><dl>{stages.map(item => <div key={item.id}><dt>{item.label}</dt><dd>{item.copy}</dd></div>)}</dl></div></noscript>
    </figcaption>
  </figure>;
}

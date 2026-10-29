"use client";
import { useState } from "react";
import { serviceExamples } from "../../../lib/service-examples";

export default function ServiceDemo({ scenario }: { scenario: keyof typeof serviceExamples }) {
  const [step, setStep] = useState(0);
  const example = serviceExamples[scenario];
  return <div id="service-example" className="service-demo" aria-labelledby="service-demo-title">
    <div className="service-demo-intro"><p className="eyebrow">TRY A SMALL EXAMPLE</p><h4 id="service-demo-title">{example.title}</h4><p>{example.introduction}</p><p className="service-demo-disclosure">Illustrative demonstration · Sample data only. No business systems are connected or messages sent.</p></div>
    <div className="service-demo-screen"><div className="service-demo-toolbar"><span>LIGHTWAYS / SAMPLE WORKSPACE</span><span>{step + 1} / 3</span></div>
      <dl>{example.items.map((item, index) => <div key={item}><dt>{item}</dt><dd><span className={step ? "sample-state is-reviewed" : "sample-state"}>{example.states[step][index]}</span></dd></div>)}</dl>
      <p className="service-demo-status" role="status" aria-live="polite" aria-atomic="true">{example.messages[step]}</p>
      <div className="service-demo-actions"><button type="button" className="button button-outline" onClick={() => setStep(value => value >= 2 ? 0 : value + 1)}>{step < 2 ? example.actions[step] : "Restart sample"} <span aria-hidden="true">↗</span></button>
        <button type="button" className="sample-reset" onClick={() => setStep(0)}>Reset example</button></div>
      <noscript><p className="service-demo-no-script">Static sample view. Contact us to explore the work you would like to simplify.</p></noscript>
    </div>
  </div>;
}

"use client";
import { useState } from "react";
import { startingPoints, startingPointMessage } from "../../../lib/clear-path";
import { openExperience } from "./events";
import ServiceDemo from "./ServiceDemo";

export default function ClearPath() {
  const [selected, setSelected] = useState<string>(startingPoints[0].id);
  const point = startingPoints.find(item => item.id === selected) ?? startingPoints[0];
  const index = startingPoints.findIndex(item => item.id === point.id);
  function changeChannel(direction: number) {
    setSelected(startingPoints[(index + direction + startingPoints.length) % startingPoints.length].id);
  }
  return <div id="clear-path" className="clear-path" aria-labelledby="clear-path-title">
    <div className="clear-path-intro"><p className="eyebrow">FIND YOUR CLEAR PATH</p>
      <h3 id="clear-path-title">What is taking<br />too much of your time?</h3>
      <p>Choose a starting point. Explore how we could approach it together, then bring your own circumstances to the conversation.</p>
    </div>
    <fieldset className="clear-path-choices"><legend>Choose the challenge closest to yours</legend>
      {startingPoints.map(item => <label className="clear-path-choice" key={item.id}>
        <input type="radio" name="clear-path" value={item.id} checked={selected === item.id} onChange={() => setSelected(item.id)} aria-controls="clear-path-result" />
        <span className="clear-path-number" aria-hidden="true">{item.number}</span><span>{item.label}</span><span className="clear-path-choice-arrow" aria-hidden="true">↗</span>
      </label>)}
    </fieldset>
    <div className="clear-path-result" id="clear-path-result" role="region" aria-labelledby="clear-path-result-title" aria-describedby="clear-path-shortcuts" tabIndex={0} onKeyDown={event => {
      if (event.target !== event.currentTarget || event.altKey || event.ctrlKey || event.metaKey) return;
      if (event.key === "ArrowLeft" || event.key === "ArrowRight") { event.preventDefault(); changeChannel(event.key === "ArrowRight" ? 1 : -1); }
      else if (/^[1-4]$/.test(event.key)) { event.preventDefault(); setSelected(startingPoints[Number(event.key) - 1].id); }
    }}>
      <div className="service-channel-controls" role="group" aria-label="Explore starting points">
        <button type="button" aria-label="Previous starting point" onClick={() => changeChannel(-1)}>←</button>
        <div className="service-channel-buttons">{startingPoints.map((item, channel) => <button key={item.id} type="button" aria-label={`Starting point ${channel + 1}: ${item.label}`} aria-pressed={point.id === item.id} onClick={() => setSelected(item.id)}>{item.number}</button>)}</div>
        <button type="button" aria-label="Next starting point" onClick={() => changeChannel(1)}>→</button>
      </div>
      <p className="service-channel-shortcuts" id="clear-path-shortcuts">Focus this panel to explore with ← / → or keys 1–4.</p>
      <p className="micro-label">A POSSIBLE WAY FORWARD / {point.number}</p>
      <h4 id="clear-path-result-title">{point.title}</h4><p className="clear-path-summary" role="status" aria-live="polite" aria-atomic="true">{point.summary}</p>
      <ol className="clear-path-route" aria-label="Illustrative approach">{point.steps.map((step, index) => <li key={step}><span aria-hidden="true">0{index + 1}</span>{step}</li>)}</ol>
      <dl className="clear-path-detail"><div><dt>Understand</dt><dd>{point.investigate}</dd></div><div><dt>Build</dt><dd>{point.deliver}</dd></div><div><dt>Measure</dt><dd>{point.measure}</dd></div></dl>
      <button type="button" className="button button-primary" onClick={event => openExperience("enquiry", event.currentTarget, startingPointMessage(point.id))}>Discuss this starting point <span aria-hidden="true">↗</span></button>
      <p className="clear-path-disclosure">An introduction to discovery. Your scope, price and success measures are agreed together. No assessment is made or information sent when you select an option.</p>
    </div>
    <ServiceDemo key={point.id} scenario={point.id} />
    <noscript><p>Prefer a direct conversation? <a href="mailto:admin@lightways.tech">Email admin@lightways.tech</a> about the work you would like to simplify.</p></noscript>
  </div>;
}

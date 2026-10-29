export default function ProcessIcon({ stage }: { stage: number }) {
  return <span className="process-stage-symbol" aria-hidden="true"><svg viewBox="0 0 80 80" width="80" height="80" fill="none" focusable="false">
    <rect x="5" y="5" width="70" height="70" rx="15" fill="#11150f" stroke="#70652c" />
    <path d="M14 19V14H19M61 14H66V19M66 61V66H61M19 66H14V61" stroke="#ffd700" strokeOpacity=".55" />
    {stage === 0 && <><circle cx="40" cy="40" r="17" stroke="#d4d9c9" /><circle cx="40" cy="40" r="8" stroke="#ffd700" /><path d="M40 19V27M40 53V61M19 40H27M53 40H61" stroke="#d4d9c9" /><circle cx="40" cy="40" r="2.5" fill="#ffd700" /></>}
    {stage === 1 && <><path d="M21 32 40 23 59 32 40 42Z" stroke="#ffd700" /><path d="M21 41 40 51 59 41M21 50 40 60 59 50" stroke="#d4d9c9" /><path d="M40 42V60M21 32V41M59 32V41" stroke="#8d967f" /></>}
    {stage === 2 && <><path d="M23 31 40 22 57 31V50L40 59 23 50Z" stroke="#d4d9c9" /><path d="M23 31 40 41 57 31M40 41V59" stroke="#ffd700" /><path d="M31 27 49 36V45" stroke="#8d967f" /><circle cx="40" cy="41" r="3" fill="#ffd700" /></>}
    {stage === 3 && <><path d="M55 32A17 17 0 0 0 24 36M24 48A17 17 0 0 0 56 45" stroke="#d4d9c9" /><path d="M55 22V32H45M24 58V48H34" stroke="#ffd700" /><circle cx="40" cy="40" r="4" fill="#ffd700" /></>}
  </svg></span>;
}

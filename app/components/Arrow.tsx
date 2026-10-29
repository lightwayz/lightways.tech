import type { SVGProps } from "react";
export default function Arrow({
  className,
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={className ?? "arrow-icon"}
      aria-hidden="true"
      {...props}
    >
      <path d="M5 19 19 5M5 5h14v14" />
    </svg>
  );
}

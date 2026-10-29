import Link from "next/link";
export default function NotFound() {
  return (
    <main id="main" tabIndex={-1} className="not-found container">
      <p className="eyebrow">404 / PAGE NOT FOUND</p>
      <h1>
        A different
        <br />
        <span>way forward.</span>
      </h1>
      <p>We couldn’t find that page. Let’s take you back to Lightways.</p>
      <Link href="/" className="button button-primary">
        Return home <span aria-hidden="true">↗</span>
      </Link>
    </main>
  );
}

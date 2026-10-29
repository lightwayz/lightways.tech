import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Website Privacy",
  description:
    "How information is handled when you visit the Lightways.Tech company website or contact us by email.",
  alternates: { canonical: "/privacy" },
};
export default function Privacy() {
  return (
    <main id="main" tabIndex={-1} className="legal-page container">
      <Link href="/" className="back-link">
        ← Back to Lightways
      </Link>
      <p className="eyebrow">WEBSITE INFORMATION</p>
      <h1>
        Privacy,
        <br />
        <span>in plain language.</span>
      </h1>
      <div className="legal-copy">
        <p>
          This notice describes the Lightways.Tech company website. It does not
          describe a PADI service: PADI is planned and has not launched.
        </p>
        <section>
          <h2>Visiting this website</h2>
          <p>
            This version of the website has no accounts, contact forms,
            advertising tools or site-added analytics. Hosting providers may
            process technical information such as IP addresses, request times
            and browser information to deliver and protect the site. The
            published version may be served through Vercel or the company’s
            selected hosting provider.
          </p>
        </section>
        <section>
          <h2>Contacting us</h2>
          <p>
            Email links open your own email application. If you contact us, your
            email provider and our email provider process the message. Please
            share only what is needed for your enquiry and avoid sending
            passwords or other sensitive information.
          </p>
        </section>
        <section>
          <h2>Links to other services</h2>
          <p>
            Links to GitHub take you to another service, whose own privacy
            practices apply. This site does not load GitHub tracking or embedded
            content.
          </p>
        </section>
        <section>
          <h2>Questions</h2>
          <p>
            For questions about information you share with Lightways.Tech,
            contact{" "}
            <a href="mailto:admin@lightways.tech">admin@lightways.tech</a>.
          </p>
        </section>
      </div>
    </main>
  );
}

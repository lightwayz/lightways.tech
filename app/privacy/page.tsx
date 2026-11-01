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
            This version of the website has no accounts,
            advertising tools or site-added analytics. Hosting providers may
            process technical information such as IP addresses, request times
            and browser information to deliver and protect the site. The
            published version may be served through Vercel or the company’s
            selected hosting provider.
          </p>
        </section>
        <section>
          <h2>Contacting us</h2>
          <p>The enquiry composer prepares a draft in your browser. It does not send or store your details. Opening the draft passes its content to your email app; copying uses your device clipboard. You choose whether to send the email.</p>
          <p>
            Email links open your own email application. If you contact us, your
            email provider and our email provider process the message. Please
            share only what is needed for your enquiry and avoid sending
            passwords or other sensitive information.
          </p>
        </section>
        <section><h2>Your preferences</h2><p>If you save a motion preference, this site stores that choice in your browser’s local storage. The welcome animation also uses a session-storage flag so it runs once in a browser-tab session. Neither value contains your enquiry details. Your device’s reduced-motion preference is always respected. You can remove these preferences through your browser’s site-data controls.</p></section>
        <section>
          <h2>Links to other services</h2>
          <p>
            Links to GitHub and the project websites take you to other services,
            whose own privacy practices apply. Project links open public websites;
            Lightways does not request access to their private customer records.
          </p>
          <p>The WhatsApp button opens WhatsApp with a draft addressed to our business number. WhatsApp processes information according to its own terms when you use that service. No message is sent until you choose to send it there.</p>
          <p>Choosing a translated language opens Google Translate in a new tab with the published page URL and the selected language. Google processes that request under its own policies. The language links do not include enquiry drafts, local development addresses or page query parameters. Translation is automatic; English is the original version.</p>
          <p>This website does not load embedded WhatsApp, Google Translate or GitHub tracking scripts. Those external services are opened only when you choose their links.</p>
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

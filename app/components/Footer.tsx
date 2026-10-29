import Link from "next/link";
import Brand from "./Brand";
import Arrow from "./Arrow";
import ExperienceAction from "./experience/ExperienceAction";
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <Brand />
            <p>
              Intelligent systems.
              <br />
              For human progress.
            </p>
          </div>
          <nav aria-label="Footer navigation">
            <Link href="/#philosophy">About Lightways</Link>
            <Link href="/#services">Expertise</Link>
            <Link href="/#lab">The Lab</Link>
            <Link href="/padi">PADI · Upcoming</Link>
          </nav>
          <div className="footer-connect">
            <a href="mailto:admin@lightways.tech">
              Get in touch <Arrow />
            </a>
            <a href="https://github.com/lightwayz">
              Find us on GitHub <Arrow />
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Lightways.Tech</span>
          <span>Human first. Forward always.</span>
          <Link href="/privacy">Privacy</Link>
          <ExperienceAction panel="preferences">Experience preferences</ExperienceAction>
        </div>
      </div>
    </footer>
  );
}

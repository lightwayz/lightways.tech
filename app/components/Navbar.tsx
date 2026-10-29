import Link from "next/link";
import Brand from "./Brand";
import Arrow from "./Arrow";
import MobileMenu from "./MobileMenu";
import ExpertiseMenu from "./experience/ExpertiseMenu";
export default function Navbar() {
  return (
    <header className="site-header">
      <div className="header-inner container">
        <Brand />
        <nav aria-label="Main navigation" className="desktop-nav">
          <Link href="/#philosophy">About</Link>
          <ExpertiseMenu />
          <Link href="/#lab">The Lab</Link>
          <Link href="/padi">
            PADI <span className="nav-status">Upcoming</span>
          </Link>
          <Link href="/#contact" className="header-contact">
            Let’s talk <Arrow />
          </Link>
        </nav>
        <MobileMenu />
      </div>
    </header>
  );
}

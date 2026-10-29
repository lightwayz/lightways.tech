import Image from "next/image";
import Link from "next/link";
export default function Brand() {
  return (
    <Link href="/" className="brand" aria-label="Lightways.Tech home">
      <span className="brand-symbol" aria-hidden="true">
        <Image
          src="/images/lightways-logo.jpg"
          alt=""
          width={1024}
          height={1024}
          className="brand-image"
          unoptimized
        />
      </span>
      <span>
        Lightways<span className="brand-domain">.tech</span>
      </span>
    </Link>
  );
}

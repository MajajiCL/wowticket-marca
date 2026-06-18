"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Download } from "./icons";
import { BRAND } from "../site";
import { asset } from "../asset";
import styles from "./brand.module.css";

const LINKS = [
  { href: "#logo", label: "Logo" },
  { href: "#color", label: "Color" },
  { href: "#descargas", label: "Descargas" },
  { href: "#ecosistema", label: "Ecosistema" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <nav className={`container ${styles.nav}`} aria-label="Principal">
        <a href="#top" className={styles.brand} aria-label="Wowticket Brand — inicio">
          <Image src={asset("/logos/wowticket-color.png")} alt="Wowticket" width={56} height={42} priority className={styles.logo} />
          <span className={styles.brandTag}>Brand</span>
        </a>

        <ul className={styles.links}>
          {LINKS.map((l) => (
            <li key={l.href}><a href={l.href}>{l.label}</a></li>
          ))}
        </ul>

        <a href={BRAND.assetsZip} className="btn btn-primary" download>
          <Download aria-hidden /> Descargar pack
        </a>
      </nav>
    </header>
  );
}

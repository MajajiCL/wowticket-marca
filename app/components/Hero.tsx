"use client";
import Image from "next/image";
import { Download, Palette, ArrowRight } from "./icons";
import { BRAND } from "../site";
import styles from "./brand.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} id="top">
      <div className={`container ${styles.heroInner}`}>
        <div className={styles.heroCopy}>
          <span className="eyebrow">Manual de marca</span>
          <h1 className={styles.heroTitle}>Wowticket <span className="text-pink">Brand</span></h1>
          <p className={styles.heroLead}>
            Utilización de logo wowticket para productos digitales. Puedes cambiar el color de
            nuestro logo según la linea gráfica de tu diseño.
          </p>
          <div className={styles.heroCtas}>
            <a href={BRAND.assetsZip} className="btn btn-primary btn-lg" download>
              <Download aria-hidden /> Descargar pack de contenido
            </a>
            <a href="#logo" className="btn btn-ghost btn-lg">
              Ver uso del logo <ArrowRight aria-hidden />
            </a>
          </div>
        </div>

        <div className={styles.heroLogoWrap} aria-hidden="true">
          <div className={`card ${styles.heroLogoCard}`}>
            <Image src="/logos/wowticket-color.png" alt="Logo Wowticket a todo color" width={760} height={570} className={styles.heroLogo} priority />
            <span className={styles.heroChip}><Palette /> Color plano oficial</span>
          </div>
        </div>
      </div>
    </section>
  );
}

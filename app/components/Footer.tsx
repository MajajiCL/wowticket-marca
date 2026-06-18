import Image from "next/image";
import { Instagram, Facebook } from "./icons";
import { BRAND } from "../site";
import { asset } from "../asset";
import styles from "./brand.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerInner}`}>
        <div className={styles.footerBrand}>
          <Image src={asset("/logos/wowticket-blanco.png")} alt="Wowticket" width={140} height={105} className={styles.footerLogo} />
          <p>Manual de marca · Utilización del logo corporativo de Wowticket.</p>
        </div>
        <div className={styles.footerRight}>
          <span className={styles.footerSocialLabel}>Redes sociales</span>
          <div className={styles.social}>
            <a href={BRAND.social.facebook} target="_blank" rel="noopener" aria-label="Facebook de Wowticket"><Facebook /></a>
            <a href={BRAND.social.instagram} target="_blank" rel="noopener" aria-label="Instagram de Wowticket"><Instagram /></a>
          </div>
        </div>
      </div>
      <div className={`container ${styles.footerBottom}`}>
        <p>Wowticket 2023, All right reserved</p>
      </div>
    </footer>
  );
}

import Image from "next/image";
import Reveal from "./Reveal";
import styles from "./brand.module.css";

/* Fuente oficial: "FONDOS BLANCOS – FULL COLOR – FONDOS NEGROS" */
const USES = [
  { variant: "dark", src: "/logos/wowticket-blanco.png", alt: "Logo Wowticket blanco sobre fondo negro", title: "Fondo negro, logo blanco" },
  { variant: "light", src: "/logos/wowticket-negro.png", alt: "Logo Wowticket negro sobre fondo blanco", title: "Fondo blanco, logo negro" },
  { variant: "color", src: "/logos/wowticket-color.png", alt: "Logo Wowticket a color sobre fondo de muchos colores", title: "Para fondos de muchos colores usa color plano" },
];

export default function LogoUsage() {
  return (
    <section className="section" id="logo">
      <div className="container">
        <Reveal className={styles.head}>
          <p className="eyebrow">Fondos blancos · Full color · Fondos negros</p>
          <h2 className="section-title">Uso correcto del logo</h2>
          <p className="section-lead">
            Tres aplicaciones según el fondo de tu diseño. Mantén el área de respeto y la proporción originales.
          </p>
        </Reveal>

        <div className="grid grid-3">
          {USES.map((u, i) => (
            <Reveal key={u.title} delay={i * 90}>
              <figure className={`card card-hover ${styles.useCard}`}>
                <div className={`${styles.preview} ${styles["preview_" + u.variant]}`}>
                  <Image src={u.src} alt={u.alt} width={380} height={285} className={styles.useLogo} />
                </div>
                <figcaption className={styles.useCaption}>{u.title}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

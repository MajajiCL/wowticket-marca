import Reveal from "./Reveal";
import { Ticket2, CreditCard, Star, ArrowUpRight } from "./icons";
import { BRAND } from "../site";
import styles from "./brand.module.css";

/* Sección "Encuentra más" (ecosistema) */
const ITEMS = [
  { icon: Ticket2, title: "Ticketera", text: "Venta de entradas online para tus eventos.", href: BRAND.links.wowticket },
  { icon: CreditCard, title: "WOWPOS", text: "Barra, boletería, guardarropía y estacionamiento en un solo sistema.", href: BRAND.links.wowpos },
  { icon: Star, title: "Embajadores", text: "Programa de embajadores Wowticket.", href: BRAND.links.embajadores },
];

export default function Ecosystem() {
  return (
    <section className="section" id="ecosistema">
      <div className="container">
        <Reveal className={`${styles.head} ${styles.headCenter}`}>
          <p className="eyebrow">Encuentra más</p>
          <h2 className="section-title">El ecosistema Wowticket</h2>
        </Reveal>

        <div className="grid grid-3">
          {ITEMS.map((it, i) => {
            const Icon = it.icon;
            return (
              <Reveal key={it.title} delay={i * 90}>
                <a href={it.href} target="_blank" rel="noopener" className={`card card-hover ${styles.ecoCard}`}>
                  <div className="icon-badge"><Icon aria-hidden /></div>
                  <h3>{it.title} <ArrowUpRight aria-hidden className={styles.ecoArrow} /></h3>
                  <p>{it.text}</p>
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import Reveal from "./Reveal";
import { Ticket2, Handshake, Star, ArrowUpRight } from "./icons";
import { BRAND } from "../site";
import styles from "./brand.module.css";

/* Fuente oficial: sección "Encuentra más" */
const ITEMS = [
  { icon: Ticket2, title: "Wowticket", text: "Venta de entradas online para tus eventos.", href: BRAND.links.wowticket },
  { icon: Handshake, title: "WowPartner", text: "Conviértete en partner y haz crecer tu negocio.", href: BRAND.links.wowpartner },
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

"use client";
import { useState } from "react";
import Reveal from "./Reveal";
import { Copy, Check } from "./icons";
import { BRAND } from "../site";
import styles from "./brand.module.css";

export default function ColorSection() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(BRAND.colorHex);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch { /* clipboard no disponible */ }
  };

  return (
    <section className="section" id="color">
      <div className={`container ${styles.colorWrap}`}>
        <Reveal className={styles.colorInfo}>
          <p className="eyebrow">Color corporativo</p>
          <h2 className="section-title">Un solo fucsia, infinitas aplicaciones</h2>
          <p className="section-lead" style={{ marginInline: 0 }}>
            Usa el color oficial o ajústalo a tu necesidad.
          </p>

          <div className={styles.colorMeta}>
            <div>
              <span className={styles.metaLabel}>Color HTML</span>
              <button className={styles.copyBtn} onClick={copy} aria-label={`Copiar color ${BRAND.colorHex}`}>
                <span className={styles.metaValue}>{BRAND.colorHex}</span>
                {copied ? <Check aria-hidden /> : <Copy aria-hidden />}
              </button>
              <span className={styles.copyHint} aria-live="polite">{copied ? "¡Copiado!" : "Clic para copiar"}</span>
            </div>
            <div>
              <span className={styles.metaLabel}>Pantone</span>
              <span className={styles.metaValue}>{BRAND.pantone}</span>
            </div>
          </div>
        </Reveal>

        <Reveal className={styles.swatch} as="div" delay={120}>
          <div className={styles.swatchBig} style={{ background: BRAND.colorHex }}>
            <span>{BRAND.colorHex}</span>
          </div>
          <div className={styles.swatchScale} aria-hidden="true">
            <span style={{ background: "#ff6fb4" }} />
            <span style={{ background: "#ff4fa3" }} />
            <span style={{ background: BRAND.colorHex }} />
            <span style={{ background: "#b9135f" }} />
            <span style={{ background: "#7d0c41" }} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

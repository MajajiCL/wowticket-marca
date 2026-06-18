import Reveal from "./Reveal";
import { Download } from "./icons";
import { BRAND } from "../site";
import styles from "./brand.module.css";

export default function DownloadPack() {
  return (
    <section className="section" id="descargas">
      <div className="container">
        <Reveal className={`card ${styles.download}`} as="div">
          <div>
            <p className="eyebrow">Recursos</p>
            <h2 className={styles.downloadTitle}>Descarga el pack de contenido</h2>
            <p className={styles.downloadText}>
              Logos en sus tres versiones (blanco, negro y color plano) listos para usar en tus piezas digitales.
            </p>
          </div>
          <a href={BRAND.assetsZip} className="btn btn-primary btn-lg" download>
            <Download aria-hidden /> Descargar
          </a>
        </Reveal>
      </div>
    </section>
  );
}

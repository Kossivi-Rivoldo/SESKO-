// Developed with ❤️ by KOSSIVI
import { Link } from "react-router-dom";
import { heroImage } from "../siteData.js";
import Arrow from "./Arrow.jsx";

function Hero() {
  return (
    <section className="hero" id="accueil">
      <div className="hero-copy">
        <p className="eyebrow">Photographie, portraits et instants de vie</p>
        <h1>Le beau est<br />dans <em>l'instant.</em></h1>
        <p className="hero-intro">
          Des images sincères, lumineuses et pleines de vie. Laissez-moi raconter la vôtre.
        </p>
        <div className="hero-actions">
          <Link className="button button-dark" to="/contact">Réserver une séance <Arrow /></Link>
          <Link className="text-link" to="/portfolio">Découvrir le portfolio <Arrow /></Link>
        </div>
        <div className="hero-note">
          <i aria-hidden="true" className="note-star bi bi-stars" />
          <span>Des souvenirs vrais,<br />à garder pour toujours.</span>
        </div>
      </div>
      <div className="hero-visual">
        <img
          src={heroImage.image}
          alt={heroImage.alt}
          fetchPriority="high"
        />
        <div className="image-caption">
          <span className="hero-image-title">{heroImage.caption}</span>
        </div>
        <div className="hero-stamp" aria-hidden="true">
          <span>SESKO</span><i className="bi bi-stars" /><span>ARTS</span>
        </div>
      </div>
      <Link className="scroll-cue" to="/portfolio"><span /> DÉFILER POUR EXPLORER</Link>
    </section>
  );
}

export default Hero;


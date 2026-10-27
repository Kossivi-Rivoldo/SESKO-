// Developed with ❤️ by KOSSIVI
import { useState } from "react";
import { Link } from "react-router-dom";
import { heroSlides } from "../siteData.js";
import Arrow from "./Arrow.jsx";

function Hero() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const activeSlide = heroSlides[activeSlideIndex];
  const changeSlide = (direction) => {
    setActiveSlideIndex((currentIndex) =>
      (currentIndex + direction + heroSlides.length) % heroSlides.length
    );
  };

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
      <div className="hero-visual" role="region" aria-roledescription="carrousel" aria-label="Photographies à la une">
        <img
          key={activeSlide.image}
          src={activeSlide.image}
          alt={activeSlide.alt}
          fetchPriority={activeSlideIndex === 0 ? "high" : "auto"}
        />
        <div className="image-caption">
          <span className="hero-image-title">{activeSlide.caption}</span>
          <div className="hero-carousel-controls" aria-label="Navigation du carrousel">
            <button
              className="hero-carousel-control"
              type="button"
              onClick={() => changeSlide(-1)}
              disabled={heroSlides.length < 2}
              aria-label="Photo précédente"
            >
              <i className="bi bi-chevron-left" aria-hidden="true" />
            </button>
            <span className="hero-slide-count" aria-live="polite">
              {String(activeSlideIndex + 1).padStart(2, "0")} / {String(heroSlides.length).padStart(2, "0")}
            </span>
            <button
              className="hero-carousel-control"
              type="button"
              onClick={() => changeSlide(1)}
              disabled={heroSlides.length < 2}
              aria-label="Photo suivante"
            >
              <i className="bi bi-chevron-right" aria-hidden="true" />
            </button>
          </div>
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



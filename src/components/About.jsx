// Developed with ❤️ by KOSSIVI
import Arrow from "./Arrow.jsx";
import { Link } from "react-router-dom";

function About() {
  return (
    <section className="about" id="apropos">
      <div className="about-image">
        <img
          src="/images/ses1.jpg"
          alt="Mathieu SESSOU, photographe, avec son appareil photo"
          loading="lazy"
        />
        <span className="about-image-tag">LE REGARD SESKO ARTS</span>
      </div>
      <div className="about-copy">
        <p className="eyebrow">DERRIÈRE L'OBJECTIF</p>
        <h2>Photographier<br />avec <em>le cœur.</em></h2>
        <p className="about-lead">
          Une belle photo ne raconte pas seulement ce que l'on voit. Elle fait ressentir ce que l'on a vécu.
        </p>
        <p>
          Sesko Arts imagine des séances où l'on prend le temps d'être soi. Pas de poses figées ni de sourires forcés : juste votre énergie, votre histoire et la lumière qui vous ressemble.
        </p>
        <p>
          Le résultat ? Des images personnelles, élégantes et authentiques, que vous aurez plaisir à retrouver au fil des années.
        </p>
        <Link className="text-link" to="/contact">Faisons connaissance <Arrow /></Link>
      </div>
    </section>
  );
}

export default About;



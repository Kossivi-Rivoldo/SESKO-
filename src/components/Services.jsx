// Developed with ❤️ by KOSSIVI
import { services } from "../siteData.js";
import { Link } from "react-router-dom";
import Arrow from "./Arrow.jsx";

function Services() {
  return (
    <section className="services section-wrap" id="prestations">
      <div className="section-heading">
        <div>
          <p className="eyebrow">IMAGINONS VOTRE SÉANCE</p>
          <h2>Une histoire,<br /><em>votre histoire.</em></h2>
        </div>
        <p className="section-aside">Une envie particulière ?<br />Chaque projet commence par une conversation.</p>
      </div>
      <div className="service-list">
        {services.map((service) => (
          <article className="service-row" data-reveal key={service.number}>
            <span className="service-number">{service.number}</span>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <Link to="/contact" aria-label={`Demander un devis pour ${service.title}`}>
              <Arrow diagonal />
            </Link>
          </article>
        ))}
      </div>
      <div className="price-note">
        <span>Chaque séance est pensée sur mesure.</span>
        <Link className="text-link" to="/contact">Demander un devis <Arrow /></Link>
      </div>
    </section>
  );
}

export default Services;



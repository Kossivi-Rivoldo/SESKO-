// Developed with ❤️ by KOSSIVI
import { siteData } from "../siteData.js";
import Arrow from "./Arrow.jsx";

function Contact() {
  function handleSubmit(event) {
    event.preventDefault();
    if (!siteData.email) return;

    const formData = new FormData(event.currentTarget);
    const subject = `Demande de séance photo pour ${formData.get("name")}`;
    const body = [
      `Nom : ${formData.get("name")}`,
      `Courriel : ${formData.get("email")}`,
      `Type de séance : ${formData.get("session")}`,
      "",
      formData.get("message"),
    ].join("\n");

    window.location.href = `mailto:${siteData.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <section className="contact" id="contact">
      <div className="contact-inner">
        <p className="eyebrow">ET SI ON SE RENCONTRAIT ?</p>
        <h2>Votre histoire<br />mérite <em>sa lumière.</em></h2>
        <p className="contact-intro">Parlez-moi de votre projet, de vos envies et des instants que vous souhaitez garder.</p>

        <div className="contact-methods">
          {!siteData.email && !siteData.phone && !siteData.whatsapp && (
            <span className="contact-pending">Coordonnées de contact à ajouter.</span>
          )}
          {siteData.email && (
            <a href={`mailto:${siteData.email}`}>
              <i aria-hidden="true" className="bi bi-envelope" /> {siteData.email}
            </a>
          )}
          {siteData.phone && (
            <a href={`tel:${siteData.phone}`}>
              <i aria-hidden="true" className="bi bi-telephone" /> {siteData.phone}
            </a>
          )}
          {siteData.location && <span>{siteData.location}</span>}
          {siteData.whatsapp && (
            <a href={`https://wa.me/${siteData.whatsapp}`} target="_blank" rel="noreferrer">
              <i aria-hidden="true" className="bi bi-whatsapp" /> WhatsApp <Arrow diagonal />
            </a>
          )}
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-fields">
            <label>
              Votre nom
              <input name="name" autoComplete="name" placeholder="Ex. Amina K." required />
            </label>
            <label>
              Votre courriel
              <input name="email" type="email" autoComplete="email" placeholder="Ex. amina@exemple.com" required />
            </label>
          </div>
          <label>
            Votre projet
            <select name="session" defaultValue="" required>
              <option value="" disabled>Choisir un type de séance</option>
              <option value="Portrait">Portrait</option>
              <option value="Couple et famille">Couple et famille</option>
              <option value="Événement">Événement</option>
              <option value="Autre projet">Autre projet</option>
            </select>
          </label>
          <label>
            Votre message
            <textarea
              name="message"
              rows="4"
              placeholder="Parlez-moi de votre projet, de la date souhaitée et de vos envies."
              required
            />
          </label>
          <button className="button button-light" type="submit" disabled={!siteData.email}>
            {siteData.email ? <>Préparer mon courriel <Arrow diagonal /></> : "Contact bientôt disponible"}
          </button>
          {!siteData.email && (
            <p className="contact-setup" role="status">
              Le formulaire est visible, mais son envoi sera activé après l'ajout de l'adresse de courriel dans <code>src/siteData.js</code>.
            </p>
          )}
        </form>
      </div>
      <div className="contact-side">
        <img className="contact-logo" src="/images/SES40.jpg" alt="Logo Sesko Arts" loading="lazy" />
      </div>
    </section>
  );
}

export default Contact;



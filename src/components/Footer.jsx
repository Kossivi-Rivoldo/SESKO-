// Developed with ❤️ by KOSSIVI
import { siteData } from "../siteData.js";
import { Link } from "react-router-dom";
import { Brand } from "./Header.jsx";
import Arrow from "./Arrow.jsx";

const socialNetworks = [
  { name: "Facebook", url: siteData.facebook, icon: "bi-facebook" },
  { name: "TikTok", url: siteData.tiktok, icon: "bi-tiktok" },
  {
    name: "WhatsApp",
    url: siteData.whatsapp ? `https://wa.me/${siteData.whatsapp}` : "",
    icon: "bi-whatsapp",
  },
].filter((network) => network.url);

function Footer() {
  const legalFields = [
    ["Responsable de publication", siteData.legal.ownerName],
    ["Nom commercial / entreprise", siteData.legal.businessName],
    ["Adresse professionnelle", siteData.legal.address],
    ["Numéro d'immatriculation", siteData.legal.registrationNumber],
    ["Courriel de publication", siteData.legal.publisherEmail || siteData.email],
    ["Hébergeur du site", siteData.legal.hostName],
    ["Adresse de l'hébergeur", siteData.legal.hostAddress],
  ];

  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-identity">
          <Brand footer />
          <p>Des images sincères pour raconter les histoires qui comptent.</p>
          {siteData.location && <span className="footer-location">{siteData.location}</span>}
        </div>

        <nav className="footer-column" aria-label="Navigation de pied de page">
          <h2>Explorer</h2>
          <Link to="/">Accueil</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/prestations">Prestations</Link>
          <Link to="/apropos">À propos</Link>
          <Link to="/avis">Avis clients</Link>
        </nav>

        <div className="footer-column">
          <h2>Contact</h2>
          {siteData.email ? (
            <a href={`mailto:${siteData.email}`}>
              <i aria-hidden="true" className="bi bi-envelope" /> {siteData.email}
            </a>
          ) : (
            <Link to="/contact">Écrire à Sesko Arts</Link>
          )}
          {siteData.phone && (
            <a href={`tel:${siteData.phone}`}>
              <i aria-hidden="true" className="bi bi-telephone" /> {siteData.phone}
            </a>
          )}
          {siteData.whatsapp && (
            <a href={`https://wa.me/${siteData.whatsapp}`} target="_blank" rel="noreferrer">
              <i aria-hidden="true" className="bi bi-whatsapp" /> WhatsApp <Arrow diagonal />
            </a>
          )}
          <Link to="/contact">Demander un devis <Arrow /></Link>
        </div>

        <div className="footer-column">
          <h2>Suivre</h2>
          {socialNetworks.map(({ name, url, icon }) => (
            <a key={name} href={url} target="_blank" rel="noreferrer">
              <i aria-hidden="true" className={`bi ${icon}`} /> {name} <Arrow diagonal />
            </a>
          ))}
        </div>
      </div>

      <div className="footer-legal">
        <details id="mentions-legales">
          <summary>Mentions légales</summary>
          <div className="legal-content">
            {legalFields
              .filter(([, value]) => value)
              .map(([label, value]) => (
                <p key={label}><strong>{label} :</strong> {value}</p>
              ))}
            <p><strong>Propriété intellectuelle :</strong> Les photographies, textes, éléments graphiques et contenus présentés sur ce site sont protégés. Toute reproduction ou utilisation sans autorisation préalable est interdite.</p>
            <p><strong>Responsabilité :</strong> Sesko Arts s'efforce de présenter des informations exactes, sans garantie d'exhaustivité ou de mise à jour permanente.</p>
          </div>
        </details>
        <details id="confidentialite">
          <summary>Confidentialité</summary>
          <div className="legal-content">
            <p><strong>Données collectées :</strong> Ce portfolio ne crée pas de compte utilisateur ni de stockage automatique des informations saisies. Le formulaire de contact ouvre l'application de messagerie de la personne qui utilise le site afin qu'elle transmette volontairement ses coordonnées et son message.</p>
            <p><strong>Services utilisés :</strong> Le lien WhatsApp redirige vers WhatsApp et les liens de réseaux sociaux vers leurs plateformes respectives. L'ouverture de ces services peut soumettre leurs propres règles de confidentialité. La police Inter est chargée depuis Google Fonts.</p>
            <p><strong>Suivi :</strong> Aucun cookie publicitaire, outil d'analyse ou dispositif de suivi tiers n'est actuellement configuré sur ce site.</p>
            <p><strong>Vos droits :</strong> Toute demande relative aux informations transmises à Sesko Arts peut être adressée à <a href={`mailto:${siteData.email}`}>{siteData.email}</a>.</p>
            <p><strong>Protection des données au Bénin :</strong> Le traitement des données personnelles doit respecter les dispositions applicables de la législation béninoise en vigueur.</p>
          </div>
        </details>
        <span className="footer-copy">© {new Date().getFullYear()} Sesko Arts · Tous droits réservés</span>
      </div>
    </footer>
  );
}

export default Footer;



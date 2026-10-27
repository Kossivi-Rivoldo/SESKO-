// Developed with ❤️ by KOSSIVI
import { useState } from "react";
import { portfolioAlbums } from "../siteData.js";

function Portfolio() {
  const [activePhoto, setActivePhoto] = useState(null);
  const [activeAlbumId, setActiveAlbumId] = useState(portfolioAlbums[0].id);
  const activeAlbum = portfolioAlbums.find((album) => album.id === activeAlbumId);

  return (
    <>
      <section className="portfolio section-wrap" id="portfolio">
        <div className="section-heading">
          <div>
            <p className="eyebrow">SÉLECTION VISUELLE</p>
            <h2>Des instants <em>à revivre.</em></h2>
          </div>
          <p className="section-aside">Chaque histoire est différente.<br />Chaque image en garde la trace.</p>
        </div>
        <div className="portfolio-tabs" role="group" aria-label="Catégories du portfolio">
          {portfolioAlbums.map((album) => (
            <button
              key={album.id}
              type="button"
              className={activeAlbum.id === album.id ? "portfolio-tab is-active" : "portfolio-tab"}
              aria-pressed={activeAlbum.id === album.id}
              onClick={() => setActiveAlbumId(album.id)}
            >
              {album.title}
            </button>
          ))}
        </div>
        <div className="gallery">
          {activeAlbum.photographs.map((photo, index) => (
            <button
              className="gallery-card"
              data-reveal
              key={photo.title}
              type="button"
              style={{ "--gallery-image": `url("${photo.image}")` }}
              onClick={() => setActivePhoto({ ...photo, category: activeAlbum.title })}
              aria-label={`Agrandir la photo : ${photo.title}`}
            >
              <img src={photo.image} alt={photo.alt} loading="lazy" />
              <span className="gallery-overlay">
                <span className="gallery-index">{String(index + 1).padStart(2, "0")} / {activeAlbum.title}</span>
                <span className="gallery-title">
                  {photo.title}<i aria-hidden="true" className="gallery-expand bi bi-arrows-fullscreen" />
                </span>
              </span>
            </button>
          ))}
        </div>
        {activeAlbum.photographs.length === 0 && (
          <div className="portfolio-empty">
            <i aria-hidden="true" className="bi bi-camera" />
            <p>L'espace est réservé aux photos de mariage.</p>
            <span>Les images seront ajoutées dès qu'elles seront disponibles.</span>
          </div>
        )}
        <p className="sample-note">Photographies réalisées par Sesko Arts.</p>
      </section>

      {activePhoto && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`Photo : ${activePhoto.title}`}
          onClick={() => setActivePhoto(null)}
        >
          <button
            className="lightbox-close"
            type="button"
            aria-label="Fermer l'image"
            onClick={() => setActivePhoto(null)}
          >
            <i aria-hidden="true" className="bi bi-x-lg" />
          </button>
          <img
            src={activePhoto.image}
            alt={activePhoto.alt}
            onClick={(event) => event.stopPropagation()}
          />
          <p>{activePhoto.title} <span>· {activePhoto.category}</span></p>
        </div>
      )}
    </>
  );
}

export default Portfolio;



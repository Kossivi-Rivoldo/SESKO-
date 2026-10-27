// Developed with ❤️ by KOSSIVI
import { useState } from "react";
import { testimonials } from "../siteData.js";

const PAGE_SIZE = 6;

function Testimonials() {
  const [currentPage, setCurrentPage] = useState(1);
  const pageCount = Math.ceil(testimonials.length / PAGE_SIZE);
  const firstIndex = (currentPage - 1) * PAGE_SIZE;
  const visibleTestimonials = testimonials.slice(firstIndex, firstIndex + PAGE_SIZE);

  return (
    <>
      <section className="quote-section" aria-label="Citation">
        <i className="quote-mark bi bi-quote" aria-hidden="true" />
        <p>Les photos sont les pages lumineuses de notre mémoire.</p>
        <span className="quote-caption">VOTRE HISTOIRE, EN IMAGES</span>
      </section>
      <section className="testimonials section-wrap" id="avis" aria-labelledby="testimonials-title">
        <p className="eyebrow">MOTS DOUX</p>
        <h2 id="testimonials-title">Les souvenirs restent.<br /><em>Les mots aussi.</em></h2>
        <p className="testimonial-note">Découvrez les retours de celles et ceux qui ont fait confiance à Sesko Arts.</p>
        <div className="testimonial-grid" aria-live="polite">
          {visibleTestimonials.map((testimonial) => (
            <article className="testimonial-card" data-reveal key={testimonial.name}>
              <div className="testimonial-author">
                <div>
                  <h3>{testimonial.name}</h3>
                  <p>{testimonial.role}</p>
                </div>
              </div>
              <p className="testimonial-project">{testimonial.project}</p>
              <blockquote>{testimonial.text}</blockquote>
            </article>
          ))}
        </div>
        {pageCount > 1 && (
          <nav className="testimonial-pagination" aria-label="Pagination des avis clients">
            <button
              type="button"
              onClick={() => setCurrentPage((page) => page - 1)}
              disabled={currentPage === 1}
              aria-label="Afficher les avis précédents"
            >
              <i aria-hidden="true" className="bi bi-arrow-left" />
              Précédents
            </button>
            <div className="testimonial-page-list">
              {Array.from({ length: pageCount }, (_, index) => index + 1).map((page) => (
                <button
                  type="button"
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  aria-label={`Page ${page}`}
                  aria-current={currentPage === page ? "page" : undefined}
                >
                  {page}
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={() => setCurrentPage((page) => page + 1)}
              disabled={currentPage === pageCount}
              aria-label="Afficher les avis suivants"
            >
              Suivants
              <i aria-hidden="true" className="bi bi-arrow-right" />
            </button>
          </nav>
        )}
      </section>
    </>
  );
}

export default Testimonials;



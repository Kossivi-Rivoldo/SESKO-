// Developed with ❤️ by KOSSIVI
import { useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Portfolio from "./components/Portfolio.jsx";
import Services from "./components/Services.jsx";
import Testimonials from "./components/Testimonials.jsx";
import ScrollReveal from "./components/ScrollReveal.jsx";

const pageTitles = {
  "/": "Accueil",
  "/portfolio": "Portfolio",
  "/prestations": "Prestations",
  "/apropos": "À propos",
  "/avis": "Avis clients",
  "/contact": "Contact",
};

const pageDescriptions = {
  "/": "Sesko Arts, photographie de portraits et d'instants précieux à vivre et à conserver.",
  "/portfolio": "Découvrez les galeries photographiques de Sesko Arts : portraits, mariages, événements et culture.",
  "/prestations": "Portraits, mariages, événements et prestations photographiques proposées par Sesko Arts.",
  "/apropos": "Découvrez Mathieu Sessou et l'approche sensible qui guide Sesko Arts.",
  "/avis": "Découvrez les témoignages de celles et ceux qui ont fait appel à Sesko Arts.",
  "/contact": "Contactez Sesko Arts pour parler de votre projet photographique et préparer une séance.",
};

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Portfolio />
      <Services />
      <Testimonials />
      <Contact />
    </>
  );
}

function RouteEffects() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `${pageTitles[pathname] ?? "Accueil"} | Sesko Arts`;
    const description = document.querySelector('meta[name="description"]');
    if (description) {
      description.setAttribute("content", pageDescriptions[pathname] ?? pageDescriptions["/"]);
    }
  }, [pathname]);

  return null;
}

function SiteLayout() {
  return (
    <>
      <RouteEffects />
      <ScrollReveal />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/prestations" element={<Services />} />
          <Route path="/apropos" element={<About />} />
          <Route path="/avis" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <SiteLayout />
    </BrowserRouter>
  );
}

export default App;



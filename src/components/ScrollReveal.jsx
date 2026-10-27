// Developed with ❤️ by KOSSIVI
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollReveal() {
  const { pathname } = useLocation();

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !("IntersectionObserver" in window)) return;

    const revealSelector =
      "main > section, main [data-reveal], main h1, main h2, main h3, main p, main blockquote";
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -36px 0px" },
    );
    const observedElements = new WeakSet();

    document.documentElement.classList.add("has-scroll-reveal");
    const observeElements = (root) => {
      const elements = [];
      if (root instanceof Element && root.matches(revealSelector)) elements.push(root);
      elements.push(...root.querySelectorAll(revealSelector));

      elements.forEach((element) => {
        if (element.closest(".quote-section") || observedElements.has(element)) return;
        observedElements.add(element);
        if (element.matches("h1, h2, h3, p, blockquote")) {
          element.classList.add("text-reveal");
        }
        observer.observe(element);
      });
    };
    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node instanceof Element) observeElements(node);
        });
      });
    });

    const main = document.querySelector("main");
    if (main) {
      observeElements(main);
      mutationObserver.observe(main, { childList: true, subtree: true });
    }

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, [pathname]);

  return null;
}

export default ScrollReveal;



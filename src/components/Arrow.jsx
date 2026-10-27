// Developed with ❤️ by KOSSIVI
function Arrow({ diagonal = false }) {
  return (
    <span
      aria-hidden="true"
      className={`arrow bi ${diagonal ? "bi-arrow-up-right" : "bi-arrow-right"}`}
    />
  );
}

export default Arrow;



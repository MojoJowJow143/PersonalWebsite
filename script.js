(() => {
  const root = document.documentElement;
  const toggle = document.getElementById("theme-toggle");
  const stored = localStorage.getItem("theme");
  const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
  const initial = stored ?? (prefersLight ? "light" : "dark");
  root.dataset.theme = initial;

  toggle?.addEventListener("click", () => {
    const next = root.dataset.theme === "light" ? "dark" : "light";
    root.dataset.theme = next;
    localStorage.setItem("theme", next);
  });

  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();

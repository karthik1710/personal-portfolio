// Karthik Palani — Portfolio v2
// Small interactivity script: theme toggle, IST clock, scroll progress

(function () {
  // --- Theme toggle (persisted) ---
  const btn = document.getElementById("themeToggle");
  function setTheme(t) {
    document.documentElement.setAttribute("data-theme", t);
    localStorage.setItem("kp2-theme", t);
  }
  btn && btn.addEventListener("click", () => {
    const cur = document.documentElement.getAttribute("data-theme") || "light";
    setTheme(cur === "light" ? "dark" : "light");
  });

  // --- Live IST clock ---
  const clockEl = document.getElementById("clock");
  function tick() {
    if (!clockEl) return;
    const now = new Date();
    const utc = now.getTime() + now.getTimezoneOffset() * 60000;
    const ist = new Date(utc + 5.5 * 3600000);
    const h = String(ist.getHours()).padStart(2, "0");
    const m = String(ist.getMinutes()).padStart(2, "0");
    clockEl.textContent = `${h}:${m} · IST`;
  }
  tick();
  setInterval(tick, 30 * 1000);

  // --- Date stamp ---
  const dateEl = document.getElementById("dateStamp");
  if (dateEl) {
    const now = new Date();
    const months = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];
    dateEl.textContent = `${months[now.getMonth()]} ${now.getFullYear()}`;
  }

  // --- Dynamic years of experience (start: July 2017) ---
  (function () {
    const NUMBER_WORDS = [
      "", "one", "two", "three", "four", "five", "six", "seven", "eight",
      "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen",
      "sixteen", "seventeen", "eighteen", "nineteen", "twenty"
    ];
    const START = new Date(2017, 6, 1); // July 2017
    const now = new Date();
    const totalMonths =
      (now.getFullYear() - START.getFullYear()) * 12 +
      (now.getMonth() - START.getMonth());
    const decimalYears = (totalMonths / 12).toFixed(1);
    const wholeYears = Math.floor(totalMonths / 12);
    const wordLower = NUMBER_WORDS[wholeYears] || String(wholeYears);
    const wordCapital = wordLower.charAt(0).toUpperCase() + wordLower.slice(1);

    const metaEl = document.getElementById("metaYears");
    if (metaEl) metaEl.textContent = decimalYears + " years";

    const heroEl = document.getElementById("heroYearsWord");
    if (heroEl) heroEl.textContent = wordCapital;

    const expEl = document.getElementById("expSubYearsWord");
    if (expEl) expEl.textContent = wordLower;
  })();

  // --- Scroll progress ---
  const prog = document.getElementById("scrollProgress");
  function onScroll() {
    if (!prog) return;
    const h = document.documentElement;
    const max = h.scrollHeight - h.clientHeight;
    const pct = max > 0 ? (h.scrollTop / max) * 100 : 0;
    prog.style.width = pct + "%";
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
})();

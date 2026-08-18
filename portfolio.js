// Karthik Palani — Portfolio v3
// Theme toggle, IST clock, scroll progress, active nav, scroll reveal,
// and the avatar photo/drawing swap.

(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // --- Theme toggle (persisted) ---
  var btn = document.getElementById("themeToggle");
  if (btn) {
    btn.addEventListener("click", function () {
      var cur = document.documentElement.getAttribute("data-theme") || "light";
      var next = cur === "light" ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", next);
      localStorage.setItem("kp3-theme", next);
    });
  }

  // --- Live IST clock ---
  var clockEl = document.getElementById("clock");
  function tick() {
    if (!clockEl) return;
    var now = new Date();
    var ist = new Date(now.getTime() + now.getTimezoneOffset() * 60000 + 5.5 * 3600000);
    clockEl.textContent =
      String(ist.getHours()).padStart(2, "0") + ":" +
      String(ist.getMinutes()).padStart(2, "0") + " IST";
  }
  tick();
  setInterval(tick, 30000);

  // --- Date stamp + footer year ---
  var MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  var today = new Date();
  var dateEl = document.getElementById("dateStamp");
  if (dateEl) dateEl.textContent = MONTHS[today.getMonth()] + " " + today.getFullYear();
  var yearEl = document.getElementById("footYear");
  if (yearEl) yearEl.textContent = today.getFullYear();

  // --- Years of experience, counted from July 2017 ---
  (function () {
    var WORDS = ["", "one","two","three","four","five","six","seven","eight","nine","ten",
                 "eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen",
                 "eighteen","nineteen","twenty"];
    var start = new Date(2017, 6, 1);
    var now = new Date();
    var months = (now.getFullYear() - start.getFullYear()) * 12 + (now.getMonth() - start.getMonth());
    var whole = Math.floor(months / 12);
    var word = WORDS[whole] || String(whole);

    var meta = document.getElementById("metaYears");
    if (meta) meta.textContent = (months / 12).toFixed(1) + " years";

    var hero = document.getElementById("heroYearsWord");
    if (hero) hero.textContent = word.charAt(0).toUpperCase() + word.slice(1);

    var exp = document.getElementById("expSubYearsWord");
    if (exp) exp.textContent = word;

    var note = document.getElementById("noteYears");
    if (note) note.textContent = String(whole);
  })();

  // --- Avatar: use the real photo if assets/avatar.jpg exists, else keep the ink drawing ---
  (function () {
    var photo = document.getElementById("avatarPhoto");
    var ink = document.getElementById("avatarInk");
    if (!photo || !ink) return;
    photo.addEventListener("load", function () {
      if (photo.naturalWidth > 0) {
        photo.hidden = false;
        ink.style.display = "none";
      }
    });
    // no handler needed on error — the drawing is already what's showing
  })();

  // --- Scroll progress ---
  var prog = document.getElementById("scrollProgress");
  function onScroll() {
    if (!prog) return;
    var h = document.documentElement;
    var max = h.scrollHeight - h.clientHeight;
    prog.style.width = (max > 0 ? (h.scrollTop / max) * 100 : 0) + "%";
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // --- Active nav link ---
  var navLinks = Array.prototype.slice.call(document.querySelectorAll(".topnav a[data-nav]"));
  var sections = navLinks
    .map(function (a) { return document.getElementById(a.dataset.nav); })
    .filter(Boolean);

  if (sections.length && "IntersectionObserver" in window) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        navLinks.forEach(function (a) {
          a.classList.toggle("is-active", a.dataset.nav === e.target.id);
        });
      });
    }, { rootMargin: "-45% 0px -50% 0px", threshold: 0 });
    sections.forEach(function (s) { spy.observe(s); });
  }

  // --- Scroll reveal ---
  var targets = document.querySelectorAll(
    ".now-card, .ai-entry, .exp-row, .work-card, .stack-col, .contact-card, .big-email"
  );
  if (reduceMotion || !("IntersectionObserver" in window)) {
    targets.forEach(function (el) { el.classList.add("is-in"); });
  } else {
    targets.forEach(function (el) { el.classList.add("reveal"); });
    var reveal = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        e.target.classList.add("is-in");
        obs.unobserve(e.target);
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    targets.forEach(function (el) { reveal.observe(el); });

    // Failsafe: never leave content invisible because an observer didn't fire.
    setTimeout(function () {
      targets.forEach(function (el) { el.classList.add("is-in"); });
    }, 2500);
  }
})();

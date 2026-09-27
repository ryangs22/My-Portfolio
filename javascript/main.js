/* ---------- Partículas do fundo ---------- */
function createParticles() {
  const layer = document.querySelector(".profile-background-layer");
  if (!layer) return;

  const colors = ["rgba(0, 157, 134, 0.35)", "rgba(1, 206, 175, 0.55)", "#2bffe3"];

  for (let i = 0; i < 18; i++) {
    const p = document.createElement("i");
    p.className = "profile-particle";
    const size = 2 + Math.random() * 3;
    p.style.left = Math.random() * 100 + "%";
    p.style.width = size + "px";
    p.style.height = size + "px";
    p.style.background = colors[i % 3];
    p.style.boxShadow = "0 0 8px " + colors[i % 3];
    p.style.animationDuration = 9 + Math.random() * 14 + "s";
    p.style.animationDelay = -Math.random() * 20 + "s";
    layer.appendChild(p);
  }
};

/* ---------- Barra de progresso de leitura ---------- */
function initProgress() {
  const bar = document.getElementById("profile-progress");
  if (!bar) return;

  function update() {
    const doc = document.documentElement;
    const max = doc.scrollHeight - doc.clientHeight;
    bar.style.transform = "scaleX(" + (max > 0 ? doc.scrollTop / max : 0) + ")";
  }

  window.addEventListener("scroll", update, { passive: true });
  update();
};

/* ---------- Brilho que segue o cursor ---------- */
function initCursorGlow() {
  const glow = document.getElementById("profile-cursor-glow");
  if (!glow) return;

  window.addEventListener("mousemove", function (e) {
    glow.style.transform = "translate(" + (e.clientX - 200) + "px, " + (e.clientY - 200) + "px)";
  });
};

/* ---------- Nav pílula: esconde ao rolar p/ baixo ---------- */
function initPill() {
  const pill = document.getElementById("profile-pill");
  if (!pill) return;

  let lastY = window.scrollY;
  window.addEventListener("scroll", function () {
    const y = window.scrollY;
    pill.classList.toggle("hide", y > lastY && y > 140);
    lastY = y;
  }, { passive: true });
};

/* ---------- Menu mobile ---------- */
function initMobileMenu() {
  const button = document.getElementById("profile-menu-button");
  const nav = document.getElementById("profile-mobile-nav");
  if (!button || !nav) return;

  function setOpen(open) {
    button.classList.toggle("open", open);
    nav.classList.toggle("open", open);
    button.setAttribute("aria-expanded", String(open));
    document.body.style.overflow = open ? "hidden" : "";
  }

  button.addEventListener("click", function () {
    setOpen(!nav.classList.contains("open"));
  });

  nav.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", function () {
      setOpen(false);
    });
  });
};

/* ---------- Link ativo conforme a seção visível ---------- */
function initActiveLinks() {
  const links = Array.prototype.slice.call(document.querySelectorAll(".profile-pill-link"));
  const ids = ["home", "about", "services", "projects", "contact"];
  const sections = ids
    .map(function (id) { return document.getElementById(id); })
    .filter(Boolean);

  if (!links.length || !sections.length) return;

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      links.forEach(function (link) {
        link.classList.toggle("active", link.dataset.id === entry.target.id);
      });
    });
  }, { rootMargin: "-45% 0px -45% 0px" });

  sections.forEach(function (s) { observer.observe(s); });
};

/* ---------- Reveal: elementos entram ao aparecer na tela ---------- */
function initReveal() {
  const els = document.querySelectorAll(".reveal");
  if (!els.length) return;

  els.forEach(function (el) {
    if (el.dataset.delay) el.style.transitionDelay = el.dataset.delay + "s";
  });

  const observer = new IntersectionObserver(function (entries, obs) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("in");
      obs.unobserve(entry.target);
    });
  }, { rootMargin: "-70px 0px" });

  els.forEach(function (el) { observer.observe(el); });
};

/* ---------- Typewriter do Inicio ---------- */
function initTypewriter() {
  const el = document.getElementById("profile-typed");
  if (!el) return;

  const roles = ["Dev Full Stack", "Data Analyst", "Dev Front-End", "Problem Solver", "Dev Back-End" ];
  let roleIndex = 0;
  let text = "";
  let deleting = false;

  function tick() {
    const word = roles[roleIndex % roles.length];
    let wait = 0;

    if (!deleting && text === word) {
      deleting = true;
      wait = 1700; // pausa com a palavra completa na tela
    } else if (deleting && text === "") {
      deleting = false;
      roleIndex++;
    } else {
      text = deleting
        ? word.slice(0, text.length - 1)
        : word.slice(0, text.length + 1);
      el.textContent = text;
    }

    setTimeout(tick, wait || (deleting ? 40 : 70));
  }

  tick();
};

/* ---------- Botão voltar ao topo ---------- */
function initBackToTop() {
  const button = document.getElementById("profile-back-top");
  if (!button) return;

  window.addEventListener("scroll", function () {
    button.classList.toggle("show", window.scrollY > 600);
  }, { passive: true });

  button.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
};

document.addEventListener("DOMContentLoaded", function () {
  createParticles();
  initProgress();
  initCursorGlow();
  initPill();
  initMobileMenu();
  initActiveLinks();
  initReveal();
  initDrag();
  initTypewriter();
  initBackToTop();
});

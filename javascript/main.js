/* ---------- Partículas do fundo ---------- */
function createParticles() {
  const layer = document.querySelector(".profile-background-layer");
  if (!layer) return;

  const colors = ["rgba(157, 0, 26, 0.35)", "rgba(255, 23, 68, 0.55)", "#ff4d6d"];

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
}

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
}

/* ---------- Brilho que segue o cursor ---------- */
function initCursorGlow() {
  const glow = document.getElementById("profile-cursor-glow");
  if (!glow) return;

  window.addEventListener("mousemove", function (e) {
    glow.style.transform = "translate(" + (e.clientX - 200) + "px, " + (e.clientY - 200) + "px)";
  });
}

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
}

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
}

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
}

/* ---------- Reveal: elementos entram ao aparecer na tela ---------- */
function initReveal() {
  const els = Array.prototype.slice.call(document.querySelectorAll(".reveal"));
  if (!els.length) return;

  els.forEach(function (el) {
    if (el.dataset.delay) el.style.transitionDelay = el.dataset.delay + "s";
  });

  function revealVisibleFallback() {
    const vh = window.innerHeight || document.documentElement.clientHeight;
    els.forEach(function (el) {
      if (el.classList.contains("in")) return;
      const rect = el.getBoundingClientRect();
      if (rect.width > 0 && rect.top < vh + 40) {
        el.classList.add("in");
      }
    });
  }

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("in");
        obs.unobserve(entry.target);
      });
    }, { rootMargin: "0px 0px -20px 0px", threshold: 0.01 });

    els.forEach(function (el) { observer.observe(el); });
  } else {
    els.forEach(function (el) { el.classList.add("in"); });
  }

  window.addEventListener("scroll", revealVisibleFallback, { passive: true });
  window.addEventListener("resize", revealVisibleFallback, { passive: true });
  window.addEventListener("pageshow", function () {
    setTimeout(revealVisibleFallback, 150);
  }, { passive: true });
  setTimeout(revealVisibleFallback, 350);
  setTimeout(revealVisibleFallback, 900);
}

/* ---------- Garante renderização completa da Hero em WebViews (Discord/Instagram) ---------- */
function initHeroWebViewFix() {
  const heroItems = document.querySelectorAll(".h-anim");
  if (!heroItems.length) return;

  function unlockHeroItems() {
    heroItems.forEach(function (el) {
      if (getComputedStyle(el).opacity === "0") {
        el.classList.remove("h-anim");
        el.style.opacity = "1";
        el.style.transform = "none";
      }
    });
  }

  setTimeout(unlockHeroItems, 1600);
  window.addEventListener("pageshow", function () {
    window.dispatchEvent(new Event("resize"));
    setTimeout(unlockHeroItems, 500);
  }, { passive: true });
  window.addEventListener("load", function () {
    window.dispatchEvent(new Event("resize"));
    setTimeout(unlockHeroItems, 1200);
  }, { passive: true });
}

/* ---------- Typewriter do Inicio ---------- */
function initTypewriter() {
  const el = document.getElementById("profile-typed");
  if (!el) return;

  const roles = ["Dev Full Stack", "Data Analyst", "Dev Front-End", "Problem Solver", "Dev Back-End"];
  let roleIndex = 0;
  let text = "";
  let deleting = false;

  function tick() {
    const word = roles[roleIndex % roles.length];
    let wait = 0;

    if (!deleting && text === word) {
      deleting = true;
      wait = 1700;
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
}

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
}

/* ---------- Função de perspectiva 3d com o cursor ---------- */
function initTilt() {
  const targets = document.querySelectorAll(".profile-ryan-bento, .input-areas, .profile-about-card");
  const MAX = 5;

  targets.forEach(function (element) {
    element.addEventListener("animationend", function () {
      element.classList.remove("h-anim");
    }, { once: true });

    element.addEventListener("mousemove", function (e) {
      const r = element.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width;
      const py = (e.clientY - r.top) / r.height;
      const ry = (px - 0.5) * 2 * MAX;
      const rx = (0.5 - py) * 2 * MAX;

      element.style.transition = "transform 0.2s ease-out";
      element.style.transform = "perspective(1000px) rotateX(" + rx.toFixed(2) + "deg) rotateY(" + ry.toFixed(2) + "deg) translateZ(8px)";
    });

    element.addEventListener("mouseleave", function () {
      element.style.transition = "transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)";
      element.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0)";
    });
  });
}

document.addEventListener("DOMContentLoaded", function () {
  initTilt();
  createParticles();
  initProgress();
  initCursorGlow();
  initPill();
  initMobileMenu();
  initActiveLinks();
  initReveal();
  initHeroWebViewFix();
  initTypewriter();
  initBackToTop();
});
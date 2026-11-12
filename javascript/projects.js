var PROJECT_IMAGES = {
  portfolio1: "public/images/portfolio/Portfolio1.png",
  portfolio2: "public/images/portfolio/Portfolio2.png",
  auroraLogo: "public/images/aurora/AuroraLogo.png",
  aurora1: "public/images/aurora/Aurora1.png",
  aurora2: "public/images/aurora/Aurora2.png",
  aurora3: "public/images/aurora/Aurora3.png",
  aurora4: "public/images/aurora/Aurora4.png",
  aurora5: "public/images/aurora/Aurora5.png",
  aurora6: "public/images/aurora/Aurora6.png",
  aurora7: "public/images/aurora/Aurora7.png",
  aurora8: "public/images/aurora/Aurora8.png",
  rsa1: "public/images/rsa/Rsa1.png",
  rsa2: "public/images/rsa/Rsa2.png",
  rsa3: "public/images/rsa/Rsa3.png",
  huffman1: "public/images/huffman/Huffman1.png",
  huffman2: "public/images/huffman/Huffman2.png",
  huffman3: "public/images/huffman/Huffman3.png",
  huffman4: "public/images/huffman/Huffman4.png",
  satsolver1: "public/images/satsolver/SatSolver1.png",
  satsolver2: "public/images/satsolver/SatSolver2.png",
  satsolver3: "public/images/satsolver/SatSolver3.png",
  embreve: "public/ProjetoEmBreveCYAN.jpg",
  nodeJS1: "public/images/nodejs_project/NodeJS1.png",
  sentient1: "public/images/sentient/Sentient1.png",
  sentientLogo: "public/images/sentient/SentientLogoDark.png",
  relic1: "public/images/relic/RelicLogoDark.png",
  eaurouge1: "public/images/eaurouge/EauRouge.png",
};

var PROJECTS = [
  {
    title: "Sentient",
    text: "Plataforma SaaS Full Stack com agentes de IA integrados em um workspace colaborativo, utilizando canvas interativo (tldraw), edição de documentos estilo Notion, IA com Gemini e Vercel AI SDK, autenticação, billing e tempo real.",
    tags: ["SAAS", "React", "TypeScript", "Next.js", "Tailwind CSS", "Supabase", "Prisma", "Shadcn UI", "Canvas (tldraw)", "Vercel AI SDK"],
    kanji: "脳",
    photos: [PROJECT_IMAGES.sentientLogo, PROJECT_IMAGES.sentient1],
    links: [
      { label: "Site Em Desenvolvimento", href: "#projects" },
      { label: "Ver Repositório", href: "https://github.com/ryangs22/Sentient" }
    ],
  },
  {
    title: "AURORA",
    text: "GameTracker moderno de fácil utilização, estilizado com tema espacial e dinâmico utilizando Front/Back-End, RAWG API e Banco de Dados. Projeto da matéria de Projeto de Software (UFAL)",
    tags: ["HTML", "Tailwind CSS", "JavaScript", "React", "Python", "PostgreSQL", "RAWG API"],
    kanji: "星",
    photos: [PROJECT_IMAGES.auroraLogo, PROJECT_IMAGES.aurora1, PROJECT_IMAGES.aurora2, PROJECT_IMAGES.aurora3, PROJECT_IMAGES.aurora4, PROJECT_IMAGES.aurora5, PROJECT_IMAGES.aurora6, PROJECT_IMAGES.aurora7, PROJECT_IMAGES.aurora8],
    links: [
      { label: "Site Em Manutenção", href: "#projects" },
      { label: "Ver Repositório", href: "https://github.com/ryangs22/aurora-Gametracker" }
    ],
  },
  {
    title: "RELIC",
    text: "Plataforma SaaS de E-Learning focada no ensino de programção com temática em pixel-art, dashboard personalizado com progresso e XP e Code Playground integrado",
    tags: ["SaaS", "Next.Js", "React", "Tailwind CSS", "TypeScript", "Neon PostgreSQL", "Clerk", "Drizzle ORM", "CodeRabbit AI"],
    kanji: "宝",
    photos: [PROJECT_IMAGES.relic1],
    links: [
      { label: "Site Em Desenvolvimento", href: "#projects" }
    ],
  },
  {
    title: "NEXKEY",
    text: "Projeto de Criptografia RSA com inverso modular e números primos (Encriptar e Desencriptar mensagens). Projeto da matéria de Matemática Discreta (UFAL)",
    tags: ["HTML", "CSS", "JavaScript", "C (GMP)"],
    kanji: "暗",
    photos: [PROJECT_IMAGES.rsa1, PROJECT_IMAGES.rsa2, PROJECT_IMAGES.rsa3],
    links: [
      { label: "Ir para o Site", href: "https://nexkeyrsa.vercel.app/" },
      { label: "Ver Repositório", href: "https://github.com/ryangs22/Criptografia-RSA" }
    ],
  },
  {
    title: "Aplicação Node.JS",
    text: "Projeto de Aprendizado com Node.JS e banco de dados",
    tags: ["Node.JS", "Express", "Sequelize", "PostgreSQL"],
    kanji: "Node",
    photos: [PROJECT_IMAGES.nodeJS1],
    links: [
      { label: "Ver Repositório", href: "https://github.com/ryangs22/NodeJS" }
    ],
  },
  {
    title: "Código de Huffman",
    text: "Compressão e Descompressão de arquivos. Válido para formatos PNG, TXT, MP3, MP4, Wav, Bin, etc. Projeto da matéria de Estrutura de Dados (UFAL)",
    tags: ["C", "Estrutura de Dados"],
    kanji: "符",
    photos: [PROJECT_IMAGES.huffman1, PROJECT_IMAGES.huffman2, PROJECT_IMAGES.huffman3, PROJECT_IMAGES.huffman4],
    links: [
      { label: "Ver Repositório", href: "https://github.com/ryangs22/Estrutura-de-Dados/tree/main/Huffman-Codification" }
    ],
  },
  {
    title: "Sat-Solver",
    text: "Algoritmo de satisfativilidade booleana baseado em lógica computacional. Projeto da matéria de Estrutura de Dados (UFAL)",
    tags: ["C", "Estrutura de Dados"],
    kanji: "論",
    photos: [PROJECT_IMAGES.satsolver1, PROJECT_IMAGES.satsolver2, PROJECT_IMAGES.satsolver3],
    links: [
      { label: "Ver Repositório", href: "https://github.com/ryangs22/Estrutura-de-Dados/tree/main/Sat-Solver" }
    ],
  },
  {
    title: "Matterhorn",
    text: "",
    tags: ["Em Breve"],
    kanji: "峰",
    photos: [PROJECT_IMAGES.embreve],
    links: [
      { label: "Site Em Planejamento (IDEAÇÃO)", href: "#projects" }
    ],
  },
  {
    title: "RGS Portfolio",
    text: "Aqui você verá um pouco sobre mim, meus projetos, minhas skills, além de poder entrar em contato comigo.",
    tags: ["HTML", "CSS", "JavaScript"],
    kanji: "私",
    photos: [PROJECT_IMAGES.portfolio1, PROJECT_IMAGES.portfolio2],
    links: [
      { label: "Ir para o Site", href: "#home" },
      { label: "Ver Repositório", href: "https://github.com/ryangs22/My-Portfolio" }
    ],
  },
  {
    title: "BRILLIANCE",
    text: "",
    tags: ["Em Breve"],
    kanji: "輝",
    photos: [PROJECT_IMAGES.embreve],
    links: [
      { label: "Site Em Planejamento (IDEAÇÃO)", href: "#projects" }
    ],
  },
  /*{
    title: "EauRouge",
    text: "Hub Full Stack de Fórmula 1 com dados em tempo real de campeonatos, corridas, equipes e pilotos com painel interativo, mapa dos circuitos, comparador de pilotos e analisador de estratégias",
    tags: ["Next.Js", "Tailwind CSS", "React", "Python (FastAPI)", "FastF1 / OpenF1 API", "PostgreSQL"],
    kanji: "速",
    photos: [PROJECT_IMAGES.eaurouge1],
    links: [
      { label: "Site Em Planejamento (IDEAÇÃO)", href: "#projects" }
    ],
  },*/
];

var CHEVRON_LEFT_ICON = '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>';
var CHEVRON_RIGHT_ICON = '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>';

var globalProjectIndex = 0;

// Elementos da UI
var profileDeckElement = document.getElementById("profile-deck");  // Wrapper Desktop
var showcaseElement = document.getElementById("profile-showcase"); // Wrapper Mobile
var counterElement = document.getElementById("profile-counter");

// No desktop ele ficava reconstruindo o innerHTML e recarregando imagens a cada troca.
var desktopMQ = window.matchMedia("(min-width: 768px)");

function padZero(n) { 
  return String(n).padStart(2, "0"); 
}

function updateCounterDisplay() {
  if (!counterElement) return;
  counterElement.innerHTML = 
    '<span class="profile-gradient-text">' + padZero(globalProjectIndex + 1) + '</span>' +
    '<span> / ' + padZero(PROJECTS.length) + '</span>';
}

// LÓGICA DO MOBILE (CARD ÚNICO)

var mobileDirection = 1;
var mobileGalleryIndex = 0;

var IMG_STYLE = "position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;transition:opacity .3s ease-in-out;";

function generateMobileGalleryHTML(project) {
  var total = project.photos.length;
  var arrows = total > 1
    ? '<button class="profile-screen-arrow left" data-g="prev" aria-label="Foto anterior">' + CHEVRON_LEFT_ICON + '</button>' +
      '<button class="profile-screen-arrow right" data-g="next" aria-label="Próxima foto">' + CHEVRON_RIGHT_ICON + '</button>'
    : '';
    
  var dots = project.photos.map(function (_, i) {
    return '<button class="profile-dot' + (i === mobileGalleryIndex ? " active" : "") + '" data-i="' + i + '"></button>';
  }).join("");

  var imgElements = project.photos.map(function(photoUrl, i) {
    var isVisible = (i === mobileGalleryIndex);
    var opacityVal = isVisible ? "1" : "0";
    var pointerVal = isVisible ? "auto" : "none";
    return '<img class="profile-gallery-img" data-p="' + i + '" src="' + photoUrl + '" alt="' + project.title + '" decoding="async" draggable="false" style="' + IMG_STYLE + 'opacity:' + opacityVal + ';pointer-events:' + pointerVal + ';">';
  }).join("");

  return (
    '<div class="profile-monitor">' +
      '<div class="profile-monitor-bar">' +
        '<div class="profile-monitor-dots"><i></i><i></i><i></i></div>' +
        '<span class="profile-monitor-count">' + (mobileGalleryIndex + 1) + " / " + total + "</span>" +
      '</div>' +
      '<div class="profile-monitor-screen" style="position:relative;overflow:hidden;">' +
        '<div class="profile-gallery-slide" style="position:relative;width:100%;height:100%;">' +
          imgElements +
        '</div>' + 
        arrows +
      '</div>' +
    '</div>' +
    '<div class="profile-gallery-dots">' + dots + '</div>'
  );
}

function renderMobileMedia(animDirection) {
  if (!showcaseElement) return;
  
  var media = showcaseElement.querySelector(".profile-showcase-media");
  if (!media) return;
  
  var project = PROJECTS[globalProjectIndex];
  var total = project.photos.length;

  var countEl = showcaseElement.querySelector(".profile-monitor-count");
  if (countEl) countEl.textContent = (mobileGalleryIndex + 1) + " / " + total;

  var imgs = media.querySelectorAll(".profile-gallery-img");
  for (var i = 0; i < imgs.length; i++) {
    var on = Number(imgs[i].dataset.p) === mobileGalleryIndex;
    imgs[i].style.opacity = on ? "1" : "0";
    imgs[i].style.pointerEvents = on ? "auto" : "none";
  }

  var dots = media.querySelectorAll(".profile-dot");
  for (var d = 0; d < dots.length; d++) {
    dots[d].classList.toggle("active", d === mobileGalleryIndex);
  }
}

function stepMobileGallery(d) {
  var total = PROJECTS[globalProjectIndex].photos.length;
  mobileGalleryIndex = (mobileGalleryIndex + d + total) % total;
  renderMobileMedia(d);
}

function renderMobileProject() {
// No desktop/tablet o layout mobile fica oculto: não precisa renderizar.
  if (!showcaseElement || desktopMQ.matches) return;
  
  var project = PROJECTS[globalProjectIndex];
  mobileGalleryIndex = 0; 
  
  var buttons = project.links.map(function(l, i) {
    var ext = l.href.indexOf("#") === 0 ? "" : ' target="_blank" rel="noreferrer"';
    return '<a href="' + l.href + '"' + ext + ' class="' + (i === 0 ? "profile-button" : "profile-button-outline") + '">' + l.label + '</a>';
  }).join("");
  
  var tagsHTML = (project.tags || []).map(function(t) { 
    return '<span class="profile-tech-pill">' + t + '</span>'; 
  }).join("");

  showcaseElement.innerHTML =
    '<div class="profile-showcase-media">' + generateMobileGalleryHTML(project) + '</div>' +
    '<div class="profile-project-info">' +
      '<h3 class="profile-gradient-text profile-showcase-title">' + project.title + '</h3>' +
      '<p>' + project.text + '</p>' +
      '<div class="profile-project-tags">' + tagsHTML + '</div>' +
      '<div class="profile-project-buttons">' + buttons + '</div>' +
    '</div>' +
    '<span class="profile-showcase-kanji" aria-hidden="true">' + project.kanji + '</span>';

  renderMobileMedia(0);
  
  showcaseElement.classList.remove("from-left", "from-right");
  void showcaseElement.offsetWidth;
  showcaseElement.classList.add(mobileDirection > 0 ? "from-right" : "from-left");

  var media = showcaseElement.querySelector(".profile-showcase-media");
  if (media) {
    media.querySelectorAll("[data-g]").forEach(function(btn) {
      btn.addEventListener("click", function(e) {
        e.stopPropagation();
        stepMobileGallery(btn.dataset.g === "next" ? 1 : -1);
      });
    });
    media.querySelectorAll(".profile-dot").forEach(function(dot) {
      dot.addEventListener("click", function(e) {
        e.stopPropagation();
        mobileGalleryIndex = Number(dot.dataset.i);
        renderMobileMedia(0);
      });
    });
  }
}

/* Drag Mobile (Gestos de arrastar) */
if (showcaseElement) {
  var mobStartX = null;
  showcaseElement.addEventListener("pointerdown", function (e) { 
    mobStartX = e.clientX; 
  });
  
  showcaseElement.addEventListener("pointerup", function (e) {
    if (mobStartX === null) return;
    var dx = e.clientX - mobStartX;
    mobStartX = null;
    
    if (Math.abs(dx) < 60) return;
    navigateGlobal(dx < 0 ? 1 : -1);
  });
  
  showcaseElement.addEventListener("pointercancel", function () { 
    mobStartX = null; 
  });
}

// Ao redimensionar/girar o aparelho para mobile, renderiza o card mobile na hora.
if (desktopMQ.addEventListener) {
  desktopMQ.addEventListener("change", function () {
    if (!desktopMQ.matches) renderMobileProject();
  });
} else if (desktopMQ.addListener) {
  desktopMQ.addListener(function () {
    if (!desktopMQ.matches) renderMobileProject();
  });
}

// LÓGICA DO DESKTOP (CARROSSEL 3D)

var cardElementsList = [];
var desktopGalleryIndexes = PROJECTS.map(function () { return 0; });
var cardHeights = [];
var deckBuilt = false;
var layoutRaf = 0;
var settleTimer = 0;
var isDragActive = false;
var blockClickAfterDrag = false;

function createPhotoElement(project, photoIndex, visible) {
  var img = document.createElement("img");
  img.className = "profile-gallery-img"; 
  img.alt = project.title; 
  img.decoding = "async"; 
  img.draggable = false; 
  img.dataset.p = photoIndex;
  img.style.cssText = IMG_STYLE + "opacity:" + (visible ? 1 : 0) + ";pointer-events:" + (visible ? "auto" : "none") + ";";
  img.src = project.photos[photoIndex];
  return img;
}

function ensurePhoto(cardIndex, photoIndex) {
  var card = cardElementsList[cardIndex];
  if (!card) return null;
  
  var slide = card.querySelector(".profile-gallery-slide");
  var existing = slide.querySelector('[data-p="' + photoIndex + '"]');
  if (existing) return existing;
  
  var img = createPhotoElement(PROJECTS[cardIndex], photoIndex, false);
  slide.appendChild(img);
  
  void img.offsetWidth;
  
  return img;
}

function generateDesktopMonitorHTML(project, cardIndex) {
  var total = project.photos.length;
  
  var arrows = total > 1 
    ? '<button class="profile-screen-arrow left" data-g="prev">' + CHEVRON_LEFT_ICON + '</button>' + 
      '<button class="profile-screen-arrow right" data-g="next">' + CHEVRON_RIGHT_ICON + '</button>' 
    : "";
    
  var dots = total > 1 
    ? '<div class="profile-gallery-dots">' + project.photos.map(function (_, i) { 
        return '<button class="profile-dot' + (i === 0 ? " active" : "") + '" data-i="' + i + '"></button>'; 
      }).join("") + "</div>" 
    : "";
    
  var firstImg = '<img class="profile-gallery-img" data-p="0" src="' + project.photos[0] + '" alt="' + project.title + '" decoding="async" draggable="false" style="' + IMG_STYLE + 'opacity:1;pointer-events:auto;"/>';

  return (
    '<div class="profile-monitor">' +
      '<div class="profile-monitor-bar">' +
        '<div class="profile-monitor-dots"><i></i><i></i><i></i></div>' +
        '<span class="profile-monitor-count">1 / ' + total + '</span>' +
      '</div>' +
      '<div class="profile-monitor-screen" style="position:relative;overflow:hidden;">' +
        '<div class="profile-gallery-slide" style="position:relative;width:100%;height:100%;">' + 
          firstImg + 
        '</div>' + 
        arrows +
      '</div>' +
    '</div>' + 
    dots
  );
}

function buildDesktopDeck() {
  if (deckBuilt || !profileDeckElement) return;
  deckBuilt = true;
  var html = "";
  
  for (var i = 0; i < PROJECTS.length; i++) {
    var p = PROJECTS[i];
    
    var tags = (p.tags || []).map(function (t) { 
      return '<span class="profile-tech-pill">' + t + "</span>"; 
    }).join("");
    
    var btns = p.links.map(function (l, idx) { 
      var ext = l.href.indexOf("#") === 0 ? "" : ' target="_blank" rel="noreferrer"';
      var btnClass = idx === 0 ? "profile-button" : "profile-button-outline";
      return '<a href="' + l.href + '"' + ext + ' class="' + btnClass + '">' + l.label + "</a>"; 
    }).join("");
    
    html += 
      '<article class="profile-deck-card" data-i="' + i + '">' +
        '<span class="profile-showcase-kanji" aria-hidden="true">' + (p.kanji || "") + '</span>' +
        '<div class="profile-card-inner">' +
          generateDesktopMonitorHTML(p, i) +
          '<div class="profile-project-info" style="text-align:center;display:flex;flex-direction:column;align-items:center;">' +
            '<h3 class="profile-gradient-text profile-showcase-title">' + p.title + '</h3>' +
            '<div class="profile-project-tags" style="display:flex;flex-wrap:wrap;gap:8px;justify-content:center;margin:16px 0 14px 0;">' + tags + '</div>' +
            '<p>' + p.text + '</p>' +
            '<div class="profile-project-buttons" style="display:flex;justify-content:center;gap:10px;width:100%;margin-top:14px;">' + btns + '</div>' +
          '</div>' +
        '</div>' +
      '</article>';
  }
  
  profileDeckElement.innerHTML = html;
  cardElementsList = Array.prototype.slice.call(profileDeckElement.children);
  
  if ("ResizeObserver" in window) {
    var ro = new ResizeObserver(function (entries) {
      entries.forEach(function (e) { 
        cardHeights[Number(e.target.dataset.i)] = e.borderBoxSize ? e.borderBoxSize[0].blockSize : e.target.offsetHeight; 
      });
      scheduleDeckHeight();
    });
    cardElementsList.forEach(function (c) { ro.observe(c); });
  }
  
  if ("IntersectionObserver" in window) {
    new IntersectionObserver(function (entries) { 
      profileDeckElement.classList.toggle("is-paused", !entries[0].isIntersecting); 
    }, { rootMargin: "200px 0px" }).observe(profileDeckElement);
  }
}

function applyDesktopLayout() {
  if (!profileDeckElement) return;
  var total = PROJECTS.length;
  
  for (var i = 0; i < total; i++) {
    var offset = i - globalProjectIndex;
    
    if (offset > total / 2) offset -= total;
    if (offset < -total / 2) offset += total;
    
    var pos = Math.abs(offset) > 2 ? "hidden" : String(offset);
    var card = cardElementsList[i];
    
    if (card.dataset.pos !== pos) card.dataset.pos = pos;
    card.classList.toggle("is-active", offset === 0);
    card.classList.remove("is-settled");
    
    var inner = card.querySelector(".profile-card-inner");
    if (inner) inner.toggleAttribute("inert", offset !== 0);
  }
  
  // Só depois de assentado, liga as animações infinitas (brilho/gradiente).
  clearTimeout(settleTimer);
  settleTimer = setTimeout(function () {
    requestAnimationFrame(function () {
      var activeCard = cardElementsList[globalProjectIndex];
      if (activeCard) activeCard.classList.add("is-settled");
    });
  }, 800);
  
  scheduleDeckHeight();
}

function scheduleDeckHeight() {
  if (layoutRaf || !profileDeckElement) return;
  
  layoutRaf = requestAnimationFrame(function () {
    layoutRaf = 0;
    var h = cardHeights[globalProjectIndex];
    if (h) profileDeckElement.style.minHeight = h + 60 + "px";
  });
}

function renderDesktopGallery(cardIndex) {
  var card = cardElementsList[cardIndex];
  if (!card) return;
  
  var project = PROJECTS[cardIndex];
  var active = desktopGalleryIndexes[cardIndex];
  var total = project.photos.length;
  
  ensurePhoto(cardIndex, active);
  
  card.querySelector(".profile-monitor-count").textContent = active + 1 + " / " + total;
  
  var imgs = card.querySelectorAll(".profile-gallery-img");
  for (var i = 0; i < imgs.length; i++) {
    var on = Number(imgs[i].dataset.p) === active;
    imgs[i].style.opacity = on ? "1" : "0";
    imgs[i].style.pointerEvents = on ? "auto" : "none";
  }
  
  var dots = card.querySelectorAll(".profile-dot");
  for (var d = 0; d < dots.length; d++) {
    dots[d].classList.toggle("active", d === active);
  }
  
  if (total > 1) {
    var next = (active + 1) % total;
    var idle = window.requestIdleCallback || function (fn) { return setTimeout(fn, 200); };
    idle(function () { ensurePhoto(cardIndex, next); });
  }
}

/* Eventos do Desktop */
if (profileDeckElement) {
  profileDeckElement.addEventListener("click", function (event) {
    if (isDragActive || blockClickAfterDrag) return;
    
    var arrow = event.target.closest("[data-g]");
    if (arrow) {
      event.stopPropagation();
      var d = arrow.dataset.g === "next" ? 1 : -1;
      var tot = PROJECTS[globalProjectIndex].photos.length;
      desktopGalleryIndexes[globalProjectIndex] = (desktopGalleryIndexes[globalProjectIndex] + d + tot) % tot;
      renderDesktopGallery(globalProjectIndex);
      return;
    }
    
    var dot = event.target.closest(".profile-dot");
    if (dot) {
      event.stopPropagation();
      desktopGalleryIndexes[globalProjectIndex] = Number(dot.dataset.i);
      renderDesktopGallery(globalProjectIndex);
      return;
    }
    
    if (event.target.closest("a")) return;
    
    var card = event.target.closest(".profile-deck-card");
    if (!card) return;
    
    var idx = Number(card.dataset.i);
    if (idx !== globalProjectIndex) {
      var offset = idx - globalProjectIndex;
      var total = PROJECTS.length;
      if (offset > total / 2) offset -= total;
      if (offset < -total / 2) offset += total;
      navigateGlobal(offset);
    }
  });

  var startX = null, startY = null, onActivePhoto = false;
  
  profileDeckElement.addEventListener("pointerdown", function (e) {
    startX = e.clientX; 
    startY = e.clientY; 
    isDragActive = false;
    onActivePhoto = !!(e.target.closest(".profile-monitor-screen") && e.target.closest(".profile-deck-card.is-active"));
  }, { passive: true });
  
  profileDeckElement.addEventListener("pointermove", function (e) {
    if (startX === null || isDragActive) return;
    if (Math.abs(e.clientX - startX) > 10 || Math.abs(e.clientY - startY) > 10) {
      isDragActive = true;
    }
  }, { passive: true });
  
  profileDeckElement.addEventListener("pointerup", function (e) {
    if (startX === null) return;
    var deltaX = e.clientX - startX;
    var wasDragging = isDragActive;
    startX = null; 
    startY = null;
    
    if (!wasDragging) { 
      isDragActive = false; 
      onActivePhoto = false; 
      return; 
    }
    
    blockClickAfterDrag = true;
    setTimeout(function () { 
      blockClickAfterDrag = false; 
      isDragActive = false; 
    }, 350);
    
    if (onActivePhoto) {
      onActivePhoto = false;
      if (Math.abs(deltaX) >= 45) {
        var d = deltaX < 0 ? 1 : -1;
        var tot = PROJECTS[globalProjectIndex].photos.length;
        desktopGalleryIndexes[globalProjectIndex] = (desktopGalleryIndexes[globalProjectIndex] + d + tot) % tot;
        renderDesktopGallery(globalProjectIndex);
      }
      return;
    }
    
    if (Math.abs(deltaX) >= 55) {
      navigateGlobal(deltaX < 0 ? 1 : -1);
    }
  }, { passive: true });
  
  profileDeckElement.addEventListener("pointercancel", function () { 
    startX = startY = null; 
    isDragActive = onActivePhoto = false; 
  }, { passive: true });
}

// CONTROLADOR GLOBAL E NAVEGAÇÃO

function navigateGlobal(delta) {
  var total = PROJECTS.length;
  globalProjectIndex = (globalProjectIndex + delta + total) % total;
  
  // Define direção apenas para a animação do Mobile
  mobileDirection = delta > 0 ? 1 : -1;
  mobileGalleryIndex = 0; // reseta foto interna do mobile (comportamento antigo mantido)

  // Mobile só renderiza se estiver em mobile (guard dentro da função)
  renderMobileProject();
  applyDesktopLayout();
  updateCounterDisplay();
}

var btnPrev = document.getElementById("profile-prev");
var btnNext = document.getElementById("profile-next");

if (btnPrev) btnPrev.addEventListener("click", function () { navigateGlobal(-1); });
if (btnNext) btnNext.addEventListener("click", function () { navigateGlobal(1); });

// INICIALIZAÇÃO

function initProjects() {
  buildDesktopDeck();
  applyDesktopLayout();
  renderMobileProject();
  updateCounterDisplay();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initProjects);
} else {
  initProjects();
}

// MODAL DE MANUTENÇÃO

function initializeMaintenanceModal() {
  var overlay = document.getElementById("profile-modal-overlay");
  var actionButton = document.getElementById("profile-modal-btn");
  var titleEl = document.getElementById("profile-modal-title");
  var messageEl = document.getElementById("profile-modal-message");
  var sectionProjectsElement = document.getElementById("projects");
  
  if (!overlay || !sectionProjectsElement) return;

  function openModal(projectName, statusType) {
    var status = statusType.toLowerCase();
    var isDev = status.indexOf("desenvolvimento") !== -1;
    var isPlanning = status.indexOf("planejamento") !== -1 || status.indexOf("ideação") !== -1 || status.indexOf("ideacao") !== -1;

    var name = '<strong class="profile-modal-highlight">' + projectName + "</strong>";
    
    if (isPlanning) {
      if (titleEl) titleEl.textContent = "Ops! Projeto Em Planejamento";
      if (messageEl) {
        messageEl.innerHTML = "O projeto " + name + " está na fase de ideação/planejamento e em breve começará a ser desenvolvido!";
      }
    } else if (isDev) {
      if (titleEl) titleEl.textContent = "Ops! Projeto Em Desenvolvimento";
      if (messageEl) {
        messageEl.innerHTML = "O projeto " + name + " ainda está sendo construído e estará disponível em breve!";
      }
    } else {
      if (titleEl) titleEl.textContent = "Ops! Site Em Manutenção";
      if (messageEl) {
        messageEl.innerHTML = "O projeto " + name + " está em manutenção no momento e não poderá ser acessado agora. Tente novamente mais tarde ou acesse o repositório!";
      }
    }
    
    overlay.classList.add("open");
    overlay.setAttribute("aria-hidden", "false");
  }

  function closeModal() {
    overlay.classList.remove("open");
    overlay.setAttribute("aria-hidden", "true");
  }

  if (actionButton) actionButton.addEventListener("click", closeModal);
  
  sectionProjectsElement.addEventListener("click", function (event) {
    var link = event.target.closest("a");
    if (!link) return;
    
    var label = link.textContent.trim();
    var isBlockedStatus = 
      label.indexOf("Manutenção") !== -1 || 
      label.indexOf("Desenvolvimento") !== -1 || 
      label.indexOf("Planejamento") !== -1 || 
      label.indexOf("IDEAÇÃO") !== -1 || 
      label.indexOf("Ideação") !== -1;

    if (isBlockedStatus) {
      event.preventDefault();
      openModal(PROJECTS[globalProjectIndex].title, label);
    }
  });
}

initializeMaintenanceModal();

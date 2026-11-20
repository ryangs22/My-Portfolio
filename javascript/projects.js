var PROJECT_IMAGES = {
  portfolio1: "public/images/portfolio/Portfolio1.png",
  portfolio2: "public/images/portfolio/Portfolio2.png",
  portfolio3: "public/images/portfolio/Portfolio3.png",
  portfolio4: "public/images/portfolio/Portfolio4.png",
  portfolio5: "public/images/portfolio/Portfolio5.png",
  auroraLogo: "public/images/aurora/AuroraLogo.png",
  auroraLoginPage: "public/images/aurora/AuroraLoginPage.png",
  aurora1: "public/images/aurora/Aurora1.png",
  aurora2: "public/images/aurora/Aurora2.png",
  aurora3: "public/images/aurora/Aurora3.png",
  aurora4: "public/images/aurora/Aurora4.png",
  aurora5: "public/images/aurora/Aurora5.png",
  aurora6: "public/images/aurora/Aurora6.png",
  aurora7: "public/images/aurora/Aurora7.png",
  aurora8: "public/images/aurora/Aurora8.png",
  aurora9: "public/images/aurora/Aurora9.png",
  aurora10: "public/images/aurora/Aurora10.png",
  aurora11: "public/images/aurora/Aurora11.png",
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
  embreve: "public/ProjetoEmBreveRED.png",
  nodeJS1: "public/images/nodejs_project/NodeJS1.png",
  sentientLogo: "public/images/sentient/SentientLogoDark.png",
  sentient1: "public/images/sentient/Sentient1.png",
  sentient2: "public/images/sentient/Sentient2.png",
  sentient3: "public/images/sentient/Sentient3.png",
  sentient4: "public/images/sentient/Sentient4.png",
  sentient5: "public/images/sentient/Sentient5.png",
  relic1: "public/images/relic/RelicLogoDark.png",
};

var PROJECTS = [
  {
    title: "Sentient",
    text: "Plataforma SaaS Full Stack com agentes de IA integrados em um workspace colaborativo, utilizando canvas interativo (tldraw), edição de documentos estilo Notion, IA com Gemini e Vercel AI SDK, autenticação, billing e tempo real.",
    tags: ["SAAS", "React", "TypeScript", "Next.js", "Tailwind CSS", "Supabase", "Prisma", "Shadcn UI", "Canvas (tldraw)", "Vercel AI SDK"],
    kanji: "脳",
    photos: [PROJECT_IMAGES.sentientLogo, PROJECT_IMAGES.sentient1, PROJECT_IMAGES.sentient2, PROJECT_IMAGES.sentient3, PROJECT_IMAGES.sentient4, PROJECT_IMAGES.sentient5],
    links: [
      { label: "Site Em Desenvolvimento", href: "#projects" },
      { label: "Ver Repositório", href: "https://github.com/ryangs22/Sentient" }
    ],
  },
  {
    title: "AURORA",
    text: "GameTracker moderno de fácil utilização, estilizado com tema espacial e dinâmico utilizando Full Stack, IGDB API e Banco de Dados Neon. Projeto da matéria de Projeto de Software (UFAL)",
    tags: ["HTML", "Tailwind CSS", "JavaScript", "React", "Python", "Neon (PostgreSQL)", "IGDB API"],
    kanji: "星",
    photos: [PROJECT_IMAGES.auroraLogo,PROJECT_IMAGES.auroraLoginPage ,PROJECT_IMAGES.aurora1, PROJECT_IMAGES.aurora2, PROJECT_IMAGES.aurora3, PROJECT_IMAGES.aurora4, PROJECT_IMAGES.aurora5, PROJECT_IMAGES.aurora6, PROJECT_IMAGES.aurora7, PROJECT_IMAGES.aurora8, PROJECT_IMAGES.aurora9, PROJECT_IMAGES.aurora10, PROJECT_IMAGES.aurora11],
    links: [
      { label: "Site Em Manutenção", href: "#projects" },
      { label: "Ver Repositório", href: "https://github.com/ryangs22/aurora-Gametracker" }
    ],
  },
  {
    title: "RELIC",
    text: "Plataforma SaaS de E-Learning focada no ensino de programação com temática em pixel-art, dashboard personalizado com progresso de XP e Code Playground integrado",
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
    photos: [PROJECT_IMAGES.portfolio1, PROJECT_IMAGES.portfolio2, PROJECT_IMAGES.portfolio3, PROJECT_IMAGES.portfolio4, PROJECT_IMAGES.portfolio5],
    links: [
      { label: "Ir para o Site", href: "#home" },
      { label: "Ver Repositório", href: "https://github.com/ryangs22/My-Portfolio" }
    ],
  },
  {
    title: "Brilliance",
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

// Desktop/tablet (>= 768px) usa o card único com flip; abaixo disso, o card mobile.
var desktopMQ = window.matchMedia("(min-width: 768px)");
var reduceMotionMQ = window.matchMedia("(prefers-reduced-motion: reduce)");

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

function renderTechPillHTML(t) {
  return (
    '<span class="profile-tech-pill">' +
      '<span class="profile-tech-shine" aria-hidden="true"></span>' +
      '<span class="profile-tech-label">' + t + '</span>' +
    '</span>'
  );
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
  
  var tagsHTML = (project.tags || []).map(renderTechPillHTML).join("");

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

// Ao redimensionar/girar o aparelho: renderiza o card mobile ou sincroniza o card desktop.
function onBreakpointChange() {
  if (!desktopMQ.matches) {
    renderMobileProject();
  } else if (stageCard && !stageBusy && renderedIndex !== globalProjectIndex) {
    fillStage(globalProjectIndex);
  }
}

if (desktopMQ.addEventListener) {
  desktopMQ.addEventListener("change", onBreakpointChange);
} else if (desktopMQ.addListener) {
  desktopMQ.addListener(onBreakpointChange);
}

// LÓGICA DO DESKTOP (CARD ÚNICO: FLIP + REVELAÇÃO DIAGONAL)

/* Ajustes de animação (em milissegundos / graus) */
var STAGE_LEAVE_MS = 320;      // saída do card atual (flip para o lado)
var STAGE_REVEAL_MS = 1000;    // revelação diagonal do novo card
var STAGE_FLIP_MS = 750;       // flip de entrada do novo card
var STAGE_FLIP_DEG = 70;       // ângulo do flip
var STAGE_REVEAL_END = 2.3;    // até onde a diagonal avança (>= 2 cobre o card inteiro)
var STAGE_REVEAL_EASE = "cubic-bezier(0.55, 0.05, 0.25, 1)";
var STAGE_FLIP_EASE = "cubic-bezier(0.16, 1, 0.3, 1)";

var stageCard = null;          // <article> único do desktop
var renderedIndex = -1;        // projeto que está desenhado no card agora
var stageGalleryIndex = 0;     // foto atual da galeria do card
var stageBusy = false;         // true enquanto uma animação está rodando
var stageDir = 1;              // última direção pedida (1 = próximo, -1 = anterior)
var stageInView = false;       // a vitrine está visível na tela?
var stageNeedsIntro = true;    // precisa tocar a revelação ao entrar na seção?
var isDragActive = false;
var blockClickAfterDrag = false;
var preloadedPhotos = {};

function preloadProject(index) {
  var total = PROJECTS.length;
  var src = PROJECTS[((index % total) + total) % total].photos[0];
  if (preloadedPhotos[src]) return;
  preloadedPhotos[src] = true;
  var img = new Image();
  img.decoding = "async";
  img.src = src;
}

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

function ensureStagePhoto(photoIndex) {
  var slide = stageCard.querySelector(".profile-gallery-slide");
  if (!slide) return null;
  
  var existing = slide.querySelector('[data-p="' + photoIndex + '"]');
  if (existing) return existing;
  
  var img = createPhotoElement(PROJECTS[renderedIndex], photoIndex, false);
  slide.appendChild(img);
  void img.offsetWidth;
  return img;
}

function generateDesktopMonitorHTML(project) {
  var total = project.photos.length;
  
  var arrows = total > 1 
    ? '<button class="profile-screen-arrow left" data-g="prev" aria-label="Foto anterior">' + CHEVRON_LEFT_ICON + '</button>' + 
      '<button class="profile-screen-arrow right" data-g="next" aria-label="Próxima foto">' + CHEVRON_RIGHT_ICON + '</button>' 
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

function generateStageHTML(project) {
  var tags = (project.tags || []).map(renderTechPillHTML).join("");
  
  var btns = project.links.map(function (l, idx) { 
    var ext = l.href.indexOf("#") === 0 ? "" : ' target="_blank" rel="noreferrer"';
    var btnClass = idx === 0 ? "profile-button" : "profile-button-outline";
    return '<a href="' + l.href + '"' + ext + ' class="' + btnClass + '">' + l.label + "</a>"; 
  }).join("");

  return (
    '<span class="profile-showcase-kanji" aria-hidden="true">' + (project.kanji || "") + '</span>' +
    '<div class="profile-card-inner">' +
      '<div class="profile-card-media">' + generateDesktopMonitorHTML(project) + '</div>' +
      '<div class="profile-project-info">' +
        '<h3 class="profile-gradient-text profile-showcase-title">' + project.title + '</h3>' +
        '<div class="profile-project-tags">' + tags + '</div>' +
        '<p>' + project.text + '</p>' +
        '<div class="profile-project-buttons">' + btns + '</div>' +
      '</div>' +
    '</div>'
  );
}

function buildStage() {
  if (stageCard || !profileDeckElement) return;
  
  // Nasce escondido (is-pending): a revelação diagonal o "constrói" quando a seção entra na tela.
  profileDeckElement.innerHTML =
    '<article class="profile-deck-card is-pending">' +
      '<div class="profile-card-content"></div>' +
      '<span class="profile-reveal-glow" aria-hidden="true"></span>' +
    '</article>';
  
  stageCard = profileDeckElement.firstElementChild;
  fillStage(globalProjectIndex);
}

function fillStage(index) {
  if (!stageCard) return;
  renderedIndex = index;
  stageGalleryIndex = 0;
  stageCard.querySelector(".profile-card-content").innerHTML = generateStageHTML(PROJECTS[index]);
  stageCard.classList.remove("is-settled");
}

function renderStageGallery() {
  if (!stageCard) return;
  
  var project = PROJECTS[renderedIndex];
  var total = project.photos.length;
  var active = stageGalleryIndex;
  
  ensureStagePhoto(active);
  
  stageCard.querySelector(".profile-monitor-count").textContent = (active + 1) + " / " + total;
  
  var imgs = stageCard.querySelectorAll(".profile-gallery-img");
  for (var i = 0; i < imgs.length; i++) {
    var on = Number(imgs[i].dataset.p) === active;
    imgs[i].style.opacity = on ? "1" : "0";
    imgs[i].style.pointerEvents = on ? "auto" : "none";
  }
  
  var dots = stageCard.querySelectorAll(".profile-dot");
  for (var d = 0; d < dots.length; d++) {
    dots[d].classList.toggle("active", d === active);
  }
  
  if (total > 1) {
    var next = (active + 1) % total;
    var idle = window.requestIdleCallback || function (fn) { return setTimeout(fn, 200); };
    idle(function () { if (stageCard) ensureStagePhoto(next); });
  }
}

function stepStageGallery(d) {
  var total = PROJECTS[renderedIndex].photos.length;
  stageGalleryIndex = (stageGalleryIndex + d + total) % total;
  renderStageGallery();
}

/* ---------- Animações do card ---------- */

// Polígono da revelação diagonal. t vai de 0 (nada) até >= 2 (card inteiro).
// dir > 0: começa no canto superior esquerdo. dir < 0: no canto superior direito.
function stageClip(dir, t) {
  var a = (t * 100).toFixed(1);
  if (dir > 0) {
    return "polygon(0% 0%, " + a + "% 0%, 0% " + a + "%)";
  }
  return "polygon(100% 0%, " + (100 - t * 100).toFixed(1) + "% 0%, 100% " + a + "%)";
}

function playReveal(dir, withFlip, done) {
  var card = stageCard;
  var glow = card.querySelector(".profile-reveal-glow");
  var anims = [];
  
  glow.classList.toggle("is-mirrored", dir < 0);
  card.classList.remove("is-pending");
  card.classList.add("is-revealing");                    // tira a sombra pesada durante a revelação
  // 1) Revelação diagonal (clip-path)
  anims.push(card.animate(
    [
      { clipPath: stageClip(dir, 0) },
      { clipPath: stageClip(dir, STAGE_REVEAL_END) }
    ],
    { duration: STAGE_REVEAL_MS, easing: STAGE_REVEAL_EASE, fill: "backwards" }
  ));

  // 2) Faixa de brilho: agora só anima transform + opacity
  var sx = dir > 0 ? -1 : 1;
  var endPct = (((3 - STAGE_REVEAL_END) / 6) * 100).toFixed(2);
  anims.push(glow.animate(
    [
      { opacity: 1, transform: "translate(" + (sx * 50) + "%, -50%)", offset: 0 },
      { opacity: 1, offset: 0.88 },
      { opacity: 0, transform: "translate(" + (sx * endPct) + "%, -" + endPct + "%)", offset: 1 }
    ],
    { duration: STAGE_REVEAL_MS, easing: STAGE_REVEAL_EASE, fill: "backwards" }
  ));

  // 3) Flip de entrada (na navegação) ou subida suave (na primeira revelação)
  var from = withFlip
    ? "rotateY(" + (dir * STAGE_FLIP_DEG) + "deg) translateX(" + (dir * 7) + "%) scale(0.94)"
    : "translateY(26px) scale(0.96)";
  var to = withFlip
    ? "rotateY(0deg) translateX(0%) scale(1)"
    : "translateY(0px) scale(1)";
  
  anims.push(card.animate(
    [{ transform: from }, { transform: to }],
    { duration: withFlip ? STAGE_FLIP_MS : STAGE_REVEAL_MS, easing: STAGE_FLIP_EASE, fill: "backwards" }
  ));

  var finish = function () {
    card.classList.remove("is-revealing");
    done();
  };
  Promise.all(anims.map(function (a) { return a.finished; })).then(finish, finish);
}

// Espera a 1ª imagem do card decodificar antes de revelar (evita travada no meio da animação).
function whenStageImageReady(cb) {
  var img = stageCard.querySelector(".profile-gallery-img");
  var called = false;
  function go() { if (called) return; called = true; cb(); }
  if (img && img.decode) {
    img.decode().then(go, go);
    setTimeout(go, 450);
  } else {
    go();
  }
}

function finishStage() {
  stageBusy = false;
  
  // Se o usuário navegou durante a animação, faz a próxima transição.
  if (renderedIndex !== globalProjectIndex) {
    if (stageInView) {
      runTransition(stageDir);
      return;
    }
    fillStage(globalProjectIndex);
  }
  
  if (stageInView) {
    stageCard.classList.add("is-settled");
  } else {
    stageCard.classList.add("is-pending");
  }
}

function runTransition(dir) {
  stageBusy = true;
  
  // Sai flipando para o lado do gesto (o ponto de partida é o estado atual, inclusive a inclinação do arraste).
  var leave = stageCard.animate(
    [{ 
      transform: "rotateY(" + (-dir * STAGE_FLIP_DEG) + "deg) translateX(" + (-dir * 8) + "%) scale(0.94)", 
      opacity: 0 
    }],
    { duration: STAGE_LEAVE_MS, easing: "cubic-bezier(0.5, 0, 0.9, 0.4)", fill: "forwards" }
  );
  
  leave.onfinish = function () {
    leave.cancel();
    stageCard.style.transform = "";
    stageCard.classList.remove("is-settled");
    fillStage(globalProjectIndex);
    preloadProject(globalProjectIndex + 1);
    preloadProject(globalProjectIndex - 1);
    playReveal(dir, true, finishStage);
  };
}

function transitionDesktop(delta) {
  if (!stageCard) return;
  
  stageDir = delta > 0 ? 1 : -1;
  
  if (!desktopMQ.matches || reduceMotionMQ.matches || !stageCard.animate) {
    if (!stageBusy) fillStage(globalProjectIndex);
    return;
  }
  
  if (stageBusy) return;
  if (stageCard.classList.contains("is-pending")) {
    fillStage(globalProjectIndex);
    return;
  }
  
  runTransition(stageDir);
}

function playIntro() {
  if (!stageCard || stageBusy) return;
  
  stageNeedsIntro = false;
  if (renderedIndex !== globalProjectIndex) fillStage(globalProjectIndex);
  
  stageBusy = true;
  whenStageImageReady(function () { playReveal(1, false, finishStage); });
}

function initStageObserver() {
  if (!profileDeckElement || !stageCard) return;
  
  if (!("IntersectionObserver" in window) || reduceMotionMQ.matches) {
    stageInView = true;
    stageNeedsIntro = false;
    stageCard.classList.remove("is-pending");
    stageCard.classList.add("is-settled");
    return;
  }
  
  var stageObserver = new IntersectionObserver(function (entries) {
    var e = entries[entries.length - 1];
    profileDeckElement.classList.toggle("is-paused", !e.isIntersecting);
    
    if (e.intersectionRatio >= 0.3) {
      if (!stageInView) {
        stageInView = true;
        if (stageNeedsIntro) playIntro();
      }
    } else if (e.intersectionRatio < 0.02) {
      stageInView = false;
      stageNeedsIntro = true;
      if (!stageBusy) stageCard.classList.add("is-pending");
    }
  }, { threshold: [0, 0.02, 0.3] });

  stageObserver.observe(profileDeckElement);
}

/* Eventos do Desktop */
if (profileDeckElement) {
  // Depois de um arraste, bloqueia o clique "fantasma"
  profileDeckElement.addEventListener("click", function (event) {
    if (blockClickAfterDrag) {
      event.preventDefault();
      event.stopPropagation();
    }
  }, true);

  profileDeckElement.addEventListener("click", function (event) {
    if (isDragActive || blockClickAfterDrag || stageBusy) return;
    
    var arrow = event.target.closest("[data-g]");
    if (arrow) {
      stepStageGallery(arrow.dataset.g === "next" ? 1 : -1);
      return;
    }
    
    var dot = event.target.closest(".profile-dot");
    if (dot) {
      stageGalleryIndex = Number(dot.dataset.i);
      renderStageGallery();
    }
  });

  var dragStartX = null, dragStartY = null;

  function clamp(v, min, max) { 
    return Math.max(min, Math.min(max, v)); 
  }

  function removeDragListeners() {
    window.removeEventListener("pointermove", onDragMove);
    window.removeEventListener("pointerup", onDragEnd);
    window.removeEventListener("pointercancel", onDragCancel);
  }

  function resetTilt() {
    if (!stageCard) return;
    stageCard.classList.remove("is-dragging");
    stageCard.style.transition = "transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)";
    stageCard.style.transform = "";
    setTimeout(function () { if (stageCard) stageCard.style.transition = ""; }, 380);
  }

  function onDragMove(e) {
    if (dragStartX === null || !stageCard) return;
    var dx = e.clientX - dragStartX;
    var dy = e.clientY - dragStartY;
    
    if (!isDragActive) {
      if (Math.abs(dx) > 10 && Math.abs(dx) > Math.abs(dy)) {
        isDragActive = true;
        stageCard.classList.add("is-dragging");
      } else {
        return;
      }
    }
    
    // O card acompanha o dedo/mouse com uma leve inclinação 3D.
    stageCard.style.transform = 
      "rotateY(" + clamp(dx / 12, -16, 16) + "deg) translateX(" + clamp(dx * 0.12, -50, 50) + "px)";
  }

  function onDragEnd(e) {
    removeDragListeners();
    if (dragStartX === null) return;
    
    var dx = e.clientX - dragStartX;
    var wasDragging = isDragActive;
    dragStartX = dragStartY = null;
    
    if (!wasDragging) { 
      isDragActive = false; 
      return; 
    }
    
    blockClickAfterDrag = true;
    setTimeout(function () { 
      blockClickAfterDrag = false; 
      isDragActive = false; 
    }, 350);
    
    if (Math.abs(dx) >= 80) {
      if (stageCard) stageCard.classList.remove("is-dragging");
      navigateGlobal(dx < 0 ? 1 : -1);
    } else {
      resetTilt();
    }
  }

  function onDragCancel() {
    removeDragListeners();
    dragStartX = dragStartY = null;
    isDragActive = false;
    resetTilt();
  }

  profileDeckElement.addEventListener("pointerdown", function (e) {
    if (stageBusy || (e.pointerType === "mouse" && e.button !== 0)) return;
    dragStartX = e.clientX; 
    dragStartY = e.clientY; 
    isDragActive = false;
    window.addEventListener("pointermove", onDragMove, { passive: true });
    window.addEventListener("pointerup", onDragEnd);
    window.addEventListener("pointercancel", onDragCancel);
  }, { passive: true });
}

// Setas do teclado (só quando a vitrine está na tela e não está digitando).
window.addEventListener("keydown", function (e) {
  if (!stageInView || e.altKey || e.ctrlKey || e.metaKey) return;
  var t = e.target;
  if (t && (/^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName) || t.isContentEditable)) return;
  if (e.key === "ArrowRight") navigateGlobal(1);
  else if (e.key === "ArrowLeft") navigateGlobal(-1);
});

// CONTROLADOR GLOBAL E NAVEGAÇÃO

function navigateGlobal(delta) {
  var total = PROJECTS.length;
  globalProjectIndex = (globalProjectIndex + delta + total) % total;
  
  // Define direção apenas para a animação do Mobile
  mobileDirection = delta > 0 ? 1 : -1;
  mobileGalleryIndex = 0; // reseta foto interna do mobile (comportamento antigo mantido)

  // Mobile só renderiza se estiver em mobile (guard dentro da função)
  renderMobileProject();
  transitionDesktop(delta);
  updateCounterDisplay();
}

var btnPrev = document.getElementById("profile-prev");
var btnNext = document.getElementById("profile-next");

if (btnPrev) btnPrev.addEventListener("click", function () { navigateGlobal(-1); });
if (btnNext) btnNext.addEventListener("click", function () { navigateGlobal(1); });

// INICIALIZAÇÃO

function initProjects() {
  buildStage();
  renderMobileProject();
  updateCounterDisplay();
  preloadProject(globalProjectIndex + 1);
  preloadProject(globalProjectIndex - 1);
  initStageObserver();
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
var IMG = {
  portfolio1: "public/images/portfolio/Portfolio1.png",
  portfolio2: "public/images/portfolio/Portfolio2.png",
  noctis1: "public/images/noctis/Noctis1.png",
  noctis2: "public/images/noctis/Noctis2.png",
  noctis3: "public/images/noctis/Noctis3.png",
  noctis4: "public/images/noctis/Noctis4.png",
  noctis5: "public/images/noctis/Noctis5.png",
  noctis6: "public/images/noctis/Noctis6.png",
  noctis7: "public/images/noctis/Noctis7.png",
  noctis8: "public/images/noctis/Noctis8.png",
  noctis9: "public/images/noctis/Noctis9.png",
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
  embreve: "public/ProjetoEmBreveCYAN.jpg"
};

var PROJECTS = [
  {
    title: "Meu Portfolio",
    text: "Aqui você verá um pouco sobre mim, meus projetos, minhas skills, além de poder entrar em contato comigo.",
    tags: ["HTML", "CSS", "JavaScript"],
    kanji: "私のポートフォリオ",
    photos: [IMG.portfolio1, IMG.portfolio2],
    links: [
      { label: "Ir para o Site", href: "#home" },
      { label: "Ver Repositório", href: "https://github.com/ryangs22/My-Portfolio" },
    ],
  },
  {
    title: "NOCTIS",
    text: "GameTracker moderno de fácil utilização, estilizado com tema espacial e dinâmico utilizando Front/Back-End, RAWG API e Banco de Dados. Projeto da matéria de Projeto de Software (UFAL)",
    tags: ["HTML", "Tailwind CSS", "JavaScript", "React", "Python", "PostgreSQL", "RAWG API"],
    kanji: "アストラリス",
    photos: [IMG.noctis1, IMG.noctis2, IMG.noctis3, IMG.noctis4, IMG.noctis5, IMG.noctis6, IMG.noctis7, IMG.noctis8, IMG.noctis9],
    links: [
      { label: "Site Em Manutenção", href: "#projects"},
      { label: "Ver Repositório", href: "https://github.com/ryangs22/Noctis-Gametracker" },
    ],
  },
  {
    title: "Criptografia RSA",
    text: "Projeto de Criptografia RSA com inverso modular e números primos (Encriptar e Desencriptar mensagens). Projeto da matéria de Matemática Discreta (UFAL)",
    tags: ["HTML", "CSS", "JavaScript", "C (GMP)"],
    kanji: "RSA暗号",
    photos: [IMG.rsa1, IMG.rsa2, IMG.rsa3],
    links: [
      { label: "Ir para o Site", href: "https://nexkeyrsa.vercel.app/" },
      { label: "Ver Repositório", href: "https://github.com/ryangs22/Criptografia-RSA" },
    ],
  },
  {
    title: "Código de Huffman",
    text: "Compressão e Descompressão de arquivos. Válido para formatos PNG, TXT, MP3, MP4, Wav, Bin, etc. Projeto da matéria de Estrutura de Dados (UFAL)",
    tags: ["C", "Estrutura de Dados"],
    kanji:"ハフマン符号化",
    photos: [IMG.huffman1, IMG.huffman2, IMG.huffman3, IMG.huffman4],
    links: [{ label: "Ver Repositório", href: "https://github.com/ryangs22/Estrutura-de-Dados/tree/main/Huffman-Codification" }],
  },
  {
    title: "Sat-Solver",
    text: "Algoritmo de satisfativilidade booleana baseado em lógica computacional. Projeto da matéria de Estrutura de Dados (UFAL)",
    tags: ["C", "Estrutura de Dados"],
    kanji: "SATソルバー",
    photos: [IMG.satsolver1, IMG.satsolver2, IMG.satsolver3],
    links: [{ label: "Ver Repositório", href: "https://github.com/ryangs22/Estrutura-de-Dados/tree/main/Sat-Solver" }],
  },
  {
    title: "Novo Projeto em Breve",
    text: "",
    tags: ["Em Breve"],
    kanji: "新プロジェクト近日公開",
    photos: [IMG.embreve],
    links: [],
  },
  {
    title: "Novo Projeto em Breve",
    text: "",
    tags: ["Em Breve"],
    kanji: "新プロジェクト近日公開",
    photos: [IMG.embreve],
    links: [],
  },
];

var CHEV_LEFT =
  '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>';
var CHEV_RIGHT =
  '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>';

var showcase = document.getElementById("profile-showcase");
var counterEl = document.getElementById("profile-counter");

var current = 0; // índice do projeto
var direction = 1;     // direção da animação (1 = próximo, -1 = anterior)
var galleryIndex = 0;    // índice da foto dentro da galeria do projeto

function pad(n) {
  return String(n).padStart(2, "0");
}

/* ---------- HTML da galeria (monitor) ---------- */
function galleryHTML(project) {
  var total = project.photos.length;

  var arrows =
    total > 1
      ? '<button class="profile-screen-arrow left" data-g="prev" aria-label="Foto anterior">' + CHEV_LEFT + "</button>" +
        '<button class="profile-screen-arrow right" data-g="next" aria-label="Próxima foto">' + CHEV_RIGHT + "</button>"
      : "";

  var dots = project.photos
    .map(function (_, i) {
      return '<button class="profile-dot' + (i === galleryIndex ? " active" : "") + '" data-i="' + i + '" aria-label="Foto ' + (i + 1) + '"></button>';
    })
    .join("");

  return (
    '<div class="profile-monitor">' +
      '<div class="profile-monitor-bar">' +
        '<div class="profile-monitor-dots"><i></i><i></i><i></i></div>' +
        '<span class="profile-monitor-count">' + (galleryIndex + 1) + " / " + total + "</span>" +
      "</div>" +
      '<div class="profile-monitor-screen">' +
        '<div class="profile-gallery-slide">' +
          '<img class="profile-gallery-img" src="' + project.photos[galleryIndex] + '" alt="' + project.title + '">' +
        "</div>" +
        arrows +
      "</div>" +
    "</div>" +
    '<div class="profile-gallery-dots">' + dots + "</div>"
  );
}

/* ---------- Eventos internos da galeria ---------- */
function wireGallery() {
  showcase.querySelectorAll("[data-g]").forEach(function (button) {
    button.addEventListener("click", function (e) {
      e.stopPropagation();
      stepGallery(button.dataset.g === "next" ? 1 : -1);
    });
  });

  showcase.querySelectorAll(".profile-dot").forEach(function (dot) {
    dot.addEventListener("click", function (e) {
      e.stopPropagation();
      galleryIndex = Number(dot.dataset.i);
      renderMedia(0);
    });
  });
}

/* ---------- Renderiza só a coluna da galeria ---------- */
function renderMedia(animdirection) {
  var media = showcase.querySelector(".profile-showcase-media");
  media.innerHTML = galleryHTML(PROJECTS[current]);

  if (animdirection !== 0) {
    media.classList.remove("gal-left", "gal-right");
    void media.offsetWidth; // reinicia a animação
    media.classList.add(animdirection > 0 ? "gal-right" : "gal-left");
  }

  wireGallery();
}

function stepGallery(d) {
  var total = PROJECTS[current].photos.length;
  galleryIndex = (galleryIndex + d + total) % total;
  renderMedia(d);
}

/* ---------- Renderiza o projeto inteiro ---------- */
function renderProject() {
  var project = PROJECTS[current];

  counterEl.innerHTML =
    '<span class="profile-gradient-text">' + pad(current + 1) + "</span><span> / " + pad(PROJECTS.length) + "</span>";

  var buttons = project.links
    .map(function (link, i) {
      var external = link.href.indexOf("#") === 0 ? "" : ' target="_blank" rel="noreferrer"';
      return (
        '<a href="' + link.href + '"' + external + ' class="' + (i === 0 ? "profile-button" : "profile-button-outline") + '">' + link.label + "</a>"
      );
    })
    .join("");

  var tagsHTML = (project.tags || [])
    .map(function(tag) {
      return '<span class="profile-tech-pill">' + tag + '</span>';
    })
    .join("");

  showcase.innerHTML =
    '<div class="profile-showcase-media"></div>' +
    '<div class="profile-project-info">' +
      '<h3 class="profile-grad-text profile-showcase-title">' + project.title + "</h3>" +
      "<p>" + project.text + "</p>" +
      '<div class="profile-project-tags">' + tagsHTML + '</div>' +
      '<div class="profile-project-buttons">' + buttons + "</div>" +
    "</div>" +
    '<span class="profile-showcase-kanji" aria-hidden="true">' + project.kanji + '</span>';

  renderMedia(0);

  // reinicia a animação de entrada do projeto
  showcase.classList.remove("from-left", "from-right");
  void showcase.offsetWidth;
  showcase.classList.add(direction > 0 ? "from-right" : "from-left");
}

/* ---------- Navegação entre projetos ---------- */
function go(d) {
  direction = d;
  current = (current + d + PROJECTS.length) % PROJECTS.length;
  galleryIndex = 0;
  renderProject();
}

document.getElementById("profile-prev").addEventListener("click", function () { go(-1); });
document.getElementById("profile-next").addEventListener("click", function () { go(1); });

/* ---------- Arrastar (mouse ou toque) para navegar ---------- */
function initDrag() {
  var startX = null;

  showcase.addEventListener("pointerdown", function (e) {
    startX = e.clientX;
  });

  showcase.addEventListener("pointerup", function (e) {
    if (startX === null) return;
    var dx = e.clientX - startX;
    startX = null;
    if (Math.abs(dx) < 60) return;
    go(dx < 0 ? 1 : -1);
  });

  showcase.addEventListener("pointercancel", function () {
    startX = null;
  });
};

/* ---------- Pré-carregamento das imagens ---------- */
function preloadAllImages() {
  Object.keys(IMG).forEach(function (key) {
    var imgPath = IMG[key];
    if (imgPath) {
      var img = new Image();
      img.src = imgPath;
    }
  });
}

preloadAllImages();
renderProject();

var PROJECT_IMAGES = {
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
  embreve: "public/ProjetoEmBreveCYAN.jpg",
  nodeJS: "public/nodejs.png",
};

var PROJECTS = [
  {
    title: "Meu Portfolio",
    text: "Aqui você verá um pouco sobre mim, meus projetos, minhas skills, além de poder entrar em contato comigo.",
    tags: ["HTML", "CSS", "JavaScript"],
    kanji: "私",
    photos: [PROJECT_IMAGES.portfolio1, PROJECT_IMAGES.portfolio2],
    links: [
      { label: "Ir para o Site", href: "#home" },
      { label: "Ver Repositório", href: "https://github.com/ryangs22/My-Portfolio" },
    ],
  },
  {
    title: "NOCTIS",
    text: "GameTracker moderno de fácil utilização, estilizado com tema espacial e dinâmico utilizando Front/Back-End, RAWG API e Banco de Dados. Projeto da matéria de Projeto de Software (UFAL)",
    tags: ["HTML", "Tailwind CSS", "JavaScript", "React", "Python", "PostgreSQL", "RAWG API"],
    kanji: "星",
    photos: [
      PROJECT_IMAGES.noctis1,
      PROJECT_IMAGES.noctis2,
      PROJECT_IMAGES.noctis3,
      PROJECT_IMAGES.noctis4,
      PROJECT_IMAGES.noctis5,
      PROJECT_IMAGES.noctis6,
      PROJECT_IMAGES.noctis7,
      PROJECT_IMAGES.noctis8,
      PROJECT_IMAGES.noctis9,
    ],
    links: [
      { label: "Site Em Manutenção", href: "#projects" },
      { label: "Ver Repositório", href: "https://github.com/ryangs22/Noctis-Gametracker" },
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
      { label: "Ver Repositório", href: "https://github.com/ryangs22/Criptografia-RSA" },
    ],
  },
  {
    title: "Aplicação Node.JS",
    text: "Projeto de Aprendizado com Node.JS e banco de dados",
    tags: ["Node.JS", "Express", "Sequelize", "PostgreSQL"],
    kanji: "Node",
    photos: [PROJECT_IMAGES.nodeJS],
    links: [{ label: "Ver Repositório", href: "https://github.com/ryangs22/NodeJS" }],
  },
  {
    title: "Código de Huffman",
    text: "Compressão e Descompressão de arquivos. Válido para formatos PNG, TXT, MP3, MP4, Wav, Bin, etc. Projeto da matéria de Estrutura de Dados (UFAL)",
    tags: ["C", "Estrutura de Dados"],
    kanji: "符",
    photos: [
      PROJECT_IMAGES.huffman1,
      PROJECT_IMAGES.huffman2,
      PROJECT_IMAGES.huffman3,
      PROJECT_IMAGES.huffman4,
    ],
    links: [
      {
        label: "Ver Repositório",
        href: "https://github.com/ryangs22/Estrutura-de-Dados/tree/main/Huffman-Codification",
      },
    ],
  },
  {
    title: "Sat-Solver",
    text: "Algoritmo de satisfativilidade booleana baseado em lógica computacional. Projeto da matéria de Estrutura de Dados (UFAL)",
    tags: ["C", "Estrutura de Dados"],
    kanji: "論",
    photos: [PROJECT_IMAGES.satsolver1, PROJECT_IMAGES.satsolver2, PROJECT_IMAGES.satsolver3],
    links: [
      {
        label: "Ver Repositório",
        href: "https://github.com/ryangs22/Estrutura-de-Dados/tree/main/Sat-Solver",
      },
    ],
  },
  {
    title: "Site 7",
    text: "",
    tags: ["Em Breve"],
    kanji: "新",
    photos: [PROJECT_IMAGES.embreve],
    links: [{ label: "Site Em Desenvolvimento", href: "#projects" }],
  },
  {
    title: "Site 8",
    text: "",
    tags: ["Em Breve"],
    kanji: "開",
    photos: [PROJECT_IMAGES.embreve],
    links: [{ label: "Site Em Desenvolvimento", href: "#projects" }],
  },
];

var CHEVRON_LEFT_ICON =
  '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>';
var CHEVRON_RIGHT_ICON =
  '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>';

var profileDeckElement = document.getElementById("profile-deck");
var counterElement = document.getElementById("profile-counter");
var sectionProjectsElement = document.getElementById("projects");

var currentProjectIndex = 0;
var activeGalleryIndex = 0;
var cardElementsList = [];

var isDragActive = false;
var blockClickAfterDrag = false;

function padZero(number) {
  return String(number).padStart(2, "0");
}

/* ---------- Estrutura do Monitor de Fotos ---------- */
function generateMonitorHTML(project, isActiveProject, cardGalleryIndex) {
  var totalPhotos = project.photos.length;
  var currentPhotoIndex = isActiveProject ? cardGalleryIndex : 0;

  var navigationArrowsHTML =
    totalPhotos > 1
      ? '<button class="profile-screen-arrow left" data-g="prev" aria-label="Foto anterior">' +
        CHEVRON_LEFT_ICON +
        "</button>" +
        '<button class="profile-screen-arrow right" data-g="next" aria-label="Próxima foto">' +
        CHEVRON_RIGHT_ICON +
        "</button>"
      : "";

  var galleryDotsHTML =
    totalPhotos > 1
      ? '<div class="profile-gallery-dots">' +
        project.photos
          .map(function (_, index) {
            var activeClass = index === currentPhotoIndex ? " active" : "";
            return (
              '<button class="profile-dot' +
              activeClass +
              '" data-i="' +
              index +
              '" aria-label="Foto ' +
              (index + 1) +
              '"></button>'
            );
          })
          .join("") +
        "</div>"
      : "";

  var photoSlidesHTML = project.photos
    .map(function (photoSource, index) {
      var isVisible = index === currentPhotoIndex;
      var opacityStyle = isVisible ? "1" : "0";
      var pointerStyle = isVisible ? "auto" : "none";

      return (
        '<img class="profile-gallery-img" src="' +
        photoSource +
        '" alt="' +
        project.title +
        '" style="position:absolute; top:0; left:0; width:100%; height:100%; object-fit:cover; opacity:' +
        opacityStyle +
        "; transition: opacity 0.3s ease-in-out; pointer-events:" +
        pointerStyle +
        ';"/>'
      );
    })
    .join("");

  return (
    '<div class="profile-monitor">' +
      '<div class="profile-monitor-bar">' +
        '<div class="profile-monitor-dots"><i></i><i></i><i></i></div>' +
        '<span class="profile-monitor-count">' +
        (currentPhotoIndex + 1) +
        " / " +
        totalPhotos +
        "</span>" +
      "</div>" +
      '<div class="profile-monitor-screen" style="position:relative; overflow:hidden;">' +
        '<div class="profile-gallery-slide" style="position:relative; width:100%; height:100%;">' +
          photoSlidesHTML +
        "</div>" +
        navigationArrowsHTML +
      "</div>" +
    "</div>" +
    galleryDotsHTML
  );
}

/* ---------- Estrutura Completa do Card ---------- */
function generateCardHTML(project, isActiveProject, cardGalleryIndex) {
  var techTagsHTML = (project.tags || [])
    .map(function (tagText) {
      return '<span class="profile-tech-pill">' + tagText + "</span>";
    })
    .join("");

  var projectButtonsHTML = project.links
    .map(function (linkItem, index) {
      var isExternal = linkItem.href.indexOf("#") === 0 ? "" : ' target="_blank" rel="noreferrer"';
      var buttonClass = index === 0 ? "profile-button" : "profile-button-outline";
      return (
        '<a href="' + linkItem.href + '"' + isExternal + ' class="' + buttonClass + '">' + linkItem.label + "</a>"
      );
    })
    .join("");

  return (
    '<span class="profile-showcase-kanji" aria-hidden="true">' +
    (project.kanji || "") +
    "</span>" +
    generateMonitorHTML(project, isActiveProject, cardGalleryIndex) +
    '<div class="profile-project-info" style="text-align: center; display: flex; flex-direction: column; align-items: center; position: relative; z-index: 1;">' +
      '<h3 class="profile-gradient-text profile-showcase-title">' + project.title + "</h3>" +
      '<div class="profile-project-tags" style="display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; margin: 16px 0 14px 0;">' + techTagsHTML + "</div>" +
      "<p>" + project.text + "</p>" +
      '<div class="profile-project-buttons" style="display: flex; justify-content: center; gap: 10px; width: 100%; margin-top: 14px;">' + projectButtonsHTML + "</div>" +
    "</div>"
  );
}

/* ---------- Contador Numérico ---------- */
function updateCounterDisplay() {
  if (!counterElement) return;
  counterElement.innerHTML =
    '<span class="profile-gradient-text">' +
    padZero(currentProjectIndex + 1) +
    "</span><span> / " +
    padZero(PROJECTS.length) +
    "</span>";
}

/* ---------- Montagem do Carrossel 3D ---------- */
function buildDeck() {
  if (!profileDeckElement) return;

  profileDeckElement.innerHTML = PROJECTS.map(function (project, index) {
    var isActive = index === currentProjectIndex;
    var activeClass = isActive ? " is-active" : "";
    return (
      '<article class="profile-deck-card' +
      activeClass +
      '" data-i="' +
      index +
      '">' +
      generateCardHTML(project, isActive, isActive ? activeGalleryIndex : 0) +
      "</article>"
    );
  }).join("");

  cardElementsList = Array.prototype.slice.call(
    profileDeckElement.querySelectorAll(".profile-deck-card")
  );
  
  updateCounterDisplay();
  apply3dLayout();
}

/* ---------- Distribuição Espacial 3D dos Cards ---------- */
function apply3dLayout() {
  if (!cardElementsList.length) return;

  var totalProjects = PROJECTS.length;
  var isNarrowScreen = window.innerWidth < 760;

  var translateXStep = isNarrowScreen ? 62 : 46;
  var rotateYStep = isNarrowScreen ? 24 : 34;
  var translateZStep = isNarrowScreen ? 130 : 210;

  cardElementsList.forEach(function (cardElement, index) {
    var indexOffset = index - currentProjectIndex;

    if (indexOffset > totalProjects / 2) indexOffset -= totalProjects;
    if (indexOffset < -totalProjects / 2) indexOffset += totalProjects;

    var absoluteOffset = Math.abs(indexOffset);
    var isActive = indexOffset === 0;

    cardElement.classList.toggle("is-active", isActive);

    if (absoluteOffset > 2) {
      cardElement.style.opacity = "0";
      cardElement.style.filter = "blur(14px)";
      cardElement.style.zIndex = "0";
      cardElement.style.pointerEvents = "none";
      cardElement.style.transform = "translate3d(-50%, -50%, -520px)";
      return;
    }

    cardElement.style.zIndex = String(10 - absoluteOffset);
    cardElement.style.pointerEvents = "auto";
    cardElement.style.opacity = String(1 - absoluteOffset * 0.3);
    cardElement.style.filter = absoluteOffset === 0 ? "none" : "blur(" + (absoluteOffset * 4 + 2) + "px)";
    cardElement.style.transform =
      "translate3d(calc(-50% + " + (indexOffset * translateXStep) + "%), -50%, " + (-absoluteOffset * translateZStep) + "px)" +
      " rotateY(" + (-indexOffset * rotateYStep) + "deg)" +
      " scale(" + (1 - absoluteOffset * 0.12) + ")";
  });

  if (cardElementsList[currentProjectIndex]) {
    profileDeckElement.style.height = cardElementsList[currentProjectIndex].offsetHeight + 60 + "px";
  }
}

/* ---------- Galeria de Imagens Interna do Card Ativo ---------- */
function updateActiveCardGalleryDisplay() {
  var activeCardElement = cardElementsList[currentProjectIndex];
  if (!activeCardElement) return;

  var project = PROJECTS[currentProjectIndex];
  var totalPhotos = project.photos.length;

  var counterElement = activeCardElement.querySelector(".profile-monitor-count");
  if (counterElement) {
    counterElement.textContent = (activeGalleryIndex + 1) + " / " + totalPhotos;
  }

  var imageElements = activeCardElement.querySelectorAll(".profile-gallery-img");
  imageElements.forEach(function (imageElement, index) {
    if (index === activeGalleryIndex) {
      imageElement.style.opacity = "1";
      imageElement.style.pointerEvents = "auto";
    } else {
      imageElement.style.opacity = "0";
      imageElement.style.pointerEvents = "none";
    }
  });

  var dotElements = activeCardElement.querySelectorAll(".profile-dot");
  dotElements.forEach(function (dotElement, index) {
    if (index === activeGalleryIndex) {
      dotElement.classList.add("active");
    } else {
      dotElement.classList.remove("active");
    }
  });
}

/* ---------- Navegação entre Projetos ---------- */
function navigateProjects(deltaIndex) {
  var totalProjects = PROJECTS.length;
  currentProjectIndex = (currentProjectIndex + deltaIndex + totalProjects) % totalProjects;
  activeGalleryIndex = 0;

  updateCounterDisplay();

  cardElementsList.forEach(function (cardElement, index) {
    var isActive = index === currentProjectIndex;
    cardElement.classList.toggle("is-active", isActive);
    if (isActive) {
      updateActiveCardGalleryDisplay();
    }
  });

  apply3dLayout();
}

function calculateShortestDirection(targetIndex) {
  var totalProjects = PROJECTS.length;
  var offset = targetIndex - currentProjectIndex;

  if (offset > totalProjects / 2) offset -= totalProjects;
  if (offset < -totalProjects / 2) offset += totalProjects;

  return offset > 0 ? 1 : -1;
}

function stepGalleryPhoto(deltaIndex) {
  var totalPhotos = PROJECTS[currentProjectIndex].photos.length;
  if (totalPhotos < 2) return;
  activeGalleryIndex = (activeGalleryIndex + deltaIndex + totalPhotos) % totalPhotos;
  updateActiveCardGalleryDisplay();
}

function jumpToGalleryPhoto(targetPhotoIndex) {
  var totalPhotos = PROJECTS[currentProjectIndex].photos.length;
  if (totalPhotos < 2 || targetPhotoIndex === activeGalleryIndex) return;
  activeGalleryIndex = targetPhotoIndex;
  updateActiveCardGalleryDisplay();
}

/* ---------- Gerenciador de Eventos de Clique ---------- */
if (profileDeckElement) {
  profileDeckElement.addEventListener("click", function (event) {
    if (isDragActive || blockClickAfterDrag) return;

    var arrowButton = event.target.closest("[data-g]");
    if (arrowButton) {
      event.stopPropagation();
      stepGalleryPhoto(arrowButton.dataset.g === "next" ? 1 : -1);
      return;
    }

    var dotButton = event.target.closest(".profile-dot");
    if (dotButton) {
      event.stopPropagation();
      var targetIndex = Number(dotButton.dataset.i);
      jumpToGalleryPhoto(targetIndex);
      return;
    }

    if (event.target.closest("a")) return;

    var cardElement = event.target.closest(".profile-deck-card");
    if (!cardElement) return;

    var clickedCardIndex = Number(cardElement.dataset.i);
    if (clickedCardIndex !== currentProjectIndex) {
      navigateProjects(calculateShortestDirection(clickedCardIndex));
    }
  });
}

var previousButtonElement = document.getElementById("profile-prev");
var nextButtonElement = document.getElementById("profile-next");

if (previousButtonElement) {
  previousButtonElement.addEventListener("click", function () {
    navigateProjects(-1);
  });
}

if (nextButtonElement) {
  nextButtonElement.addEventListener("click", function () {
    navigateProjects(1);
  });
}

/* ---------- Sistema de Arraste (Drag) ---------- */
function initializeDragSystem() {
  if (!profileDeckElement) return;

  var pointerStartX = null;
  var pointerStartY = null;
  var isPointerOnActivePhoto = false;

  profileDeckElement.addEventListener("pointerdown", function (event) {
    pointerStartX = event.clientX;
    pointerStartY = event.clientY;
    isDragActive = false;

    var activeCardElement = event.target.closest(".profile-deck-card.is-active");
    var monitorScreenElement = event.target.closest(".profile-monitor-screen");

    isPointerOnActivePhoto = !!(monitorScreenElement && activeCardElement);
  });

  profileDeckElement.addEventListener("pointermove", function (event) {
    if (pointerStartX === null || pointerStartY === null) return;

    var deltaX = event.clientX - pointerStartX;
    var deltaY = event.clientY - pointerStartY;

    if (Math.abs(deltaX) > 10 || Math.abs(deltaY) > 10) {
      isDragActive = true;
    }
  });

  profileDeckElement.addEventListener("pointerup", function (event) {
    if (pointerStartX === null) return;

    var deltaX = event.clientX - pointerStartX;
    var wasDragging = isDragActive;

    pointerStartX = null;
    pointerStartY = null;

    if (wasDragging) {
      blockClickAfterDrag = true;

      setTimeout(function () {
        blockClickAfterDrag = false;
        isDragActive = false;
      }, 350);

      if (isPointerOnActivePhoto) {
        isPointerOnActivePhoto = false;
        if (Math.abs(deltaX) >= 45) {
          stepGalleryPhoto(deltaX < 0 ? 1 : -1);
        }
        return;
      }

      if (Math.abs(deltaX) >= 55) {
        navigateProjects(deltaX < 0 ? 1 : -1);
      }
    } else {
      isDragActive = false;
      isPointerOnActivePhoto = false;
    }
  });

  profileDeckElement.addEventListener("pointercancel", function () {
    pointerStartX = null;
    pointerStartY = null;
    isDragActive = false;
    isPointerOnActivePhoto = false;
  });
}

initializeDragSystem();

/* ---------- Redimensionamento e Pré-carregamento ---------- */
var resizeTimerId;
window.addEventListener("resize", function () {
  clearTimeout(resizeTimerId);
  resizeTimerId = setTimeout(apply3dLayout, 100);
});

window.addEventListener("load", function () {
  buildDeck();
});

if (document.readyState === "complete" || document.readyState === "interactive") {
  buildDeck();
}

var imageCacheList = [];
function preloadAllProjectImages() {
  Object.keys(PROJECT_IMAGES).forEach(function (key) {
    var imagePath = PROJECT_IMAGES[key];
    if (imagePath) {
      var imageObject = new Image();
      imageObject.src = imagePath;
      imageCacheList.push(imageObject);
    }
  });
}
preloadAllProjectImages();

/* ---------- Modal Dinâmico de Manutenção ---------- */
function initializeMaintenanceModal() {
  var overlayElement = document.getElementById("profile-modal-overlay");
  var actionButtonElement = document.getElementById("profile-modal-btn");
  var modalTitleElement = document.getElementById("profile-modal-title");
  var modalMessageElement = document.getElementById("profile-modal-message");

  if (!overlayElement || !sectionProjectsElement) return;

  function openModal(projectName, statusType) {
    var isDevelopment = statusType.toLowerCase().indexOf("desenvolvimento") !== -1;

    if (modalTitleElement) {
      modalTitleElement.textContent = isDevelopment
        ? "Ops! Projeto Em Desenvolvimento"
        : "Ops! Site Em Manutenção";
    }

    if (modalMessageElement) {
      var highlightedName = '<strong class="profile-modal-highlight">' + projectName + "</strong>";
      if (isDevelopment) {
        modalMessageElement.innerHTML =
          "O projeto " + highlightedName + " ainda está sendo construído e estará disponível em breve!";
      } else {
        modalMessageElement.innerHTML =
          "O projeto " +
          highlightedName +
          " está em manutenção no momento e não poderá ser acessado agora. Tente novamente mais tarde ou acesse o repositório!";
      }
    }

    overlayElement.classList.add("open");
    overlayElement.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "";
  }

  function closeModal() {
    overlayElement.classList.remove("open");
    overlayElement.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  if (actionButtonElement) {
    actionButtonElement.addEventListener("click", closeModal);
  }

  sectionProjectsElement.addEventListener("click", function (event) {
    var targetLink = event.target.closest("a");
    if (!targetLink) return;

    var linkLabelText = targetLink.textContent.trim();
    if (linkLabelText.indexOf("Manutenção") !== -1 || linkLabelText.indexOf("Desenvolvimento") !== -1) {
      event.preventDefault();
      var activeProject = PROJECTS[currentProjectIndex];
      openModal(activeProject.title, linkLabelText);
    }
  });
}
initializeMaintenanceModal();

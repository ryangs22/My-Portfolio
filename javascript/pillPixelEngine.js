(function () {
  "use strict";

  var CYCLE_MS = 4800;          // duração do ciclo (tags + botão)
  var PIXEL_STEP = 5;           // 4px pixel + 1px gap
  var PIXEL_SIZE = 4;
  var FRAME_MS = 1000 / 30;     // 30fps: pixel-art não precisa de 60 e custa metade

  var PALETTE = ["#ef233c", "#d90429", "#b80022", "#94021d", "#ff3b5c"];

  if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  function cellHash(c, r) {
    var n = Math.sin(c * 127.1 + r * 311.7) * 43758.5453;
    return n - Math.floor(n);
  }
  function clamp01(v) { return v < 0 ? 0 : v > 1 ? 1 : v; }
  function smoothstep(e0, e1, x) {
    var t = clamp01((x - e0) / (e1 - e0));
    return t * t * (3 - 2 * t);
  }

  class PillPixelEngine {
    constructor() {
      this.groups = new Map();
      this.raf = 0;
      this.lastFrame = 0;
      this.scanQueued = false;
      this.dpr = Math.min(window.devicePixelRatio || 1, 2);

      this.loop = this.loop.bind(this);
      this.queueScan = this.queueScan.bind(this);
      this.refreshAll = this.refreshAll.bind(this);

      // Mede as pílulas só quando o tamanho muda (antes: leitura de layout
      // forçada a cada frame, logo depois de escrever estilos).
      this.resizeObserver = "ResizeObserver" in window
        ? new ResizeObserver((entries) => {
            for (var i = 0; i < entries.length; i++) {
              var state = entries[i].target.__pillState;
              if (state) this.resizePill(state);
            }
          })
        : null;

      this.init();
    }

    init() {
      var roots = ["profile-deck", "profile-showcase"]
        .map(function (id) { return document.getElementById(id); })
        .filter(Boolean);
      if (!roots.length) return;

      // Observa só os containers dos projetos (antes: a seção inteira)
      this.mutationObserver = new MutationObserver(this.queueScan);
      roots.forEach((root) => {
        this.mutationObserver.observe(root, { childList: true, subtree: true });
      });

      // Sem listener de "resize": no mobile ele dispara a cada barra de
      // endereço que aparece/some. O ResizeObserver cuida disso.
      window.addEventListener("orientationchange", () => setTimeout(this.refreshAll, 250), { passive: true });
      window.addEventListener("pageshow", () => setTimeout(this.refreshAll, 150), { passive: true });
      window.addEventListener("load", () => setTimeout(this.refreshAll, 150), { passive: true });
      if (document.fonts && document.fonts.ready) document.fonts.ready.then(this.refreshAll);

      this.scan();
    }

    queueScan() {
      if (this.scanQueued) return;
      this.scanQueued = true;
      requestAnimationFrame(() => {
        this.scanQueued = false;
        this.scan();
      });
    }

    refreshAll() {
      this.dpr = Math.min(window.devicePixelRatio || 1, 2);
      this.groups.forEach((group) => {
        group.pills.forEach((state) => {
          state.w = 0;
          state.h = 0;
          this.resizePill(state);
        });
      });
      this.scan();
    }

    scan() {
      this.groups.forEach((group, el) => {
        if (!document.documentElement.contains(el)) this.removeGroup(el, group);
      });

      var containers = document.querySelectorAll("#projects .profile-project-info");
      for (var i = 0; i < containers.length; i++) {
        if (!this.groups.has(containers[i])) this.createGroup(containers[i]);
      }
      this.kick();
    }

    createGroup(container) {
      var pills = [];
      var pillEls = container.querySelectorAll(".profile-tech-pill");

      for (var i = 0; i < pillEls.length; i++) {
        var pill = pillEls[i];
        var canvas = pill.querySelector(".profile-pill-canvas");
        if (!canvas) {
          canvas = document.createElement("canvas");
          canvas.className = "profile-pill-canvas";
          canvas.setAttribute("aria-hidden", "true");
          pill.insertBefore(canvas, pill.firstChild);
        }

        var ctx = canvas.getContext && canvas.getContext("2d");
        if (!ctx) continue; // sem canvas: a pílula continua visível, só sem o efeito

        var state = { el: pill, canvas: canvas, ctx: ctx, w: 0, h: 0, cells: [], drawn: false };
        pill.__pillState = state;
        this.resizePill(state);
        if (this.resizeObserver) this.resizeObserver.observe(pill);
        pills.push(state);
      }

      var hasIO = "IntersectionObserver" in window;
      var group = {
        el: container,
        tags: container.querySelector(".profile-project-tags") || container,
        deck: container.closest(".profile-deck-card"),
        pills: pills,
        cycleStart: null,
        visible: !hasIO,
        cache: {},
        io: null
      };

      if (hasIO) {
        // visibilidade do PRÓPRIO bloco (antes: a seção inteira)
        group.io = new IntersectionObserver((entries) => {
          group.visible = entries[entries.length - 1].isIntersecting;
          if (group.visible) this.kick();
        }, { threshold: 0 });
        group.io.observe(container);
      }

      this.groups.set(container, group);
    }

    removeGroup(el, group) {
      if (group.io) group.io.disconnect();
      if (this.resizeObserver) {
        group.pills.forEach((s) => { this.resizeObserver.unobserve(s.el); s.el.__pillState = null; });
      }
      this.groups.delete(el);
    }

    resizePill(state) {
      var w = Math.max(0, state.el.clientWidth - 2);
      var h = Math.max(0, state.el.clientHeight - 2);

      if (w <= 1 || h <= 1) return;
      if (w === state.w && h === state.h && state.cells.length > 0) return;

      state.w = w;
      state.h = h;
      state.canvas.width = Math.round(w * this.dpr);
      state.canvas.height = Math.round(h * this.dpr);
      state.drawn = false;

      var cols = Math.ceil(w / PIXEL_STEP);
      var rows = Math.ceil(h / PIXEL_STEP);
      var maxC = Math.max(1, cols - 1);
      var maxR = Math.max(1, rows - 1);
      var cells = [];

      for (var r = 0; r < rows; r++) {
        for (var c = 0; c < cols; c++) {
          var h1 = cellHash(c, r);
          var h2 = cellHash(c + 19, r + 47);
          var diag = (c / maxC) * 0.74 + (r / maxR) * 0.26;
          var norm = clamp01(diag + (h1 - 0.5) * 0.13);

          cells.push({
            x: c * PIXEL_STEP,
            y: r * PIXEL_STEP,
            tStart: 0.13 + norm * 0.15,
            tEnd: 0.41 + norm * 0.15,
            color: PALETTE[Math.floor(h2 * PALETTE.length)],
            phase: h1 * Math.PI * 2
          });
        }
      }
      state.cells = cells;
    }

    // só escreve a custom property se o valor mudou
    setVar(group, el, name, value) {
      if (group.cache[name] === value) return;
      group.cache[name] = value;
      el.style.setProperty(name, value);
    }

    resetGroup(group) {
      group.cycleStart = null;
      this.setVar(group, group.el, "--shine-x", "-140%");
      this.setVar(group, group.el, "--shine-op", "0");
      this.setVar(group, group.tags, "--glow-p", "0");
      this.setVar(group, group.tags, "--pill-color", "rgb(138, 138, 153)");
      this.setVar(group, group.tags, "--pill-border", "rgba(255, 255, 255, 0.14)");

      for (var i = 0; i < group.pills.length; i++) this.clearPill(group.pills[i]);
    }

    clearPill(state) {
      if (!state.drawn || !state.w) return;
      state.ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
      state.ctx.clearRect(0, 0, state.w, state.h);
      state.drawn = false;
    }

    isReady(group) {
      if (!group.visible) return false;
      if (group.deck && !group.deck.classList.contains("is-settled")) return false;
      return true;
    }

    drawPill(state, t, now) {
      if (!state.w || !state.cells.length) return;

      if (t < 0.125 || t > 0.565) {
        this.clearPill(state);
        return;
      }

      var ctx = state.ctx;
      var cells = state.cells;
      ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
      ctx.clearRect(0, 0, state.w, state.h);
      state.drawn = true;

      for (var i = 0; i < cells.length; i++) {
        var cell = cells[i];
        if (t < cell.tStart || t > cell.tEnd) continue;

        var age = t - cell.tStart;
        var lifeLeft = cell.tEnd - t;

        ctx.fillStyle = "rgba(12, 2, 5, 0.9)";
        ctx.fillRect(cell.x, cell.y, PIXEL_STEP, PIXEL_STEP);

        if (age < 0.026) {
          ctx.fillStyle = age / 0.026 < 0.45 ? "#ffffff" : "#ff8fa3";
          ctx.fillRect(cell.x, cell.y, PIXEL_SIZE, PIXEL_SIZE);
        } else if (lifeLeft < 0.028) {
          var k = Math.max(0.25, lifeLeft / 0.028);
          var sz = PIXEL_SIZE * k;
          var off = (PIXEL_SIZE - sz) * 0.5;
          ctx.fillStyle = "#ff4d6d";
          ctx.fillRect(cell.x + off, cell.y + off, sz, sz);
        } else {
          ctx.globalAlpha = 0.8 + 0.2 * Math.sin(now * 0.01 + cell.phase);
          ctx.fillStyle = cell.color;
          ctx.fillRect(cell.x, cell.y, PIXEL_SIZE, PIXEL_SIZE);
          ctx.globalAlpha = 1;
        }
      }
    }

    tick(group, now) {
      if (group.cycleStart === null) group.cycleStart = now;
      var t = ((now - group.cycleStart) % CYCLE_MS) / CYCLE_MS;

      // FASE 1 (0 -> 0.16): brilho branco deslizando nas tags e no botão
      var shineX = -140;
      var shineOp = 0;
      if (t <= 0.16) {
        var p = t / 0.16;
        shineX = -140 + p * 380;
        shineOp = p < 0.15 ? p / 0.15 : p > 0.8 ? (1 - p) / 0.2 : 1;
      }
      this.setVar(group, group.el, "--shine-x", shineX.toFixed(1) + "%");
      this.setVar(group, group.el, "--shine-op", shineOp.toFixed(2));

      // FASE 2 (0.11 -> 0.58): pixelização diagonal + texto branco nas tags
      var glowP = smoothstep(0.11, 0.17, t) * (1 - smoothstep(0.50, 0.58, t));
      var r = Math.round(138 + glowP * 117);
      var g = Math.round(138 + glowP * 117);
      var b = Math.round(153 + glowP * 102);
      var bG = Math.round(255 - glowP * 148);
      var bB = Math.round(255 - glowP * 130);
      var bA = (0.14 + glowP * 0.76).toFixed(2);

      // variáveis do glow ficam só no container das tags
      // (invalida estilo de ~10 pílulas, não do card inteiro)
      this.setVar(group, group.tags, "--glow-p", glowP.toFixed(2));
      this.setVar(group, group.tags, "--pill-color", "rgb(" + r + ", " + g + ", " + b + ")");
      this.setVar(group, group.tags, "--pill-border", "rgba(255, " + bG + ", " + bB + ", " + bA + ")");

      for (var i = 0; i < group.pills.length; i++) this.drawPill(group.pills[i], t, now);
    }

    kick() {
      if (!this.raf) this.raf = requestAnimationFrame(this.loop);
    }

    loop(now) {
      this.raf = 0;

      var doWork = now - this.lastFrame >= FRAME_MS - 1;
      if (doWork) this.lastFrame = now;

      var anyVisible = false;
      this.groups.forEach((group) => {
        if (!group.visible) {
          if (group.cycleStart !== null) this.resetGroup(group);
          return;
        }
        anyVisible = true;

        if (!this.isReady(group)) {
          if (group.cycleStart !== null) this.resetGroup(group);
          return;
        }
        if (doWork) this.tick(group, now);
      });

      // nada visível: para o rAF (o IntersectionObserver religa)
      if (anyVisible) this.raf = requestAnimationFrame(this.loop);
    }
  }

  function boot() {
    window.__pillPixelEngine = new PillPixelEngine();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
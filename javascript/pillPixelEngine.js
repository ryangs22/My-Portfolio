(function () {
  const CYCLE_MS = 4800;   // Duração total do ciclo compartilhado (Tags + Botão)
  const PIXEL_STEP = 5;    // 4px pixel + 1px gap
  const PIXEL_SIZE = 4;

  const PALETTE = [
    "#ef233c",
    "#d90429",
    "#b80022",
    "#94021d",
    "#ff3b5c"
  ];

  function cellHash(c, r) {
    const n = Math.sin(c * 127.1 + r * 311.7) * 43758.5453;
    return n - Math.floor(n);
  }

  function clamp01(v) {
    return v < 0 ? 0 : v > 1 ? 1 : v;
  }

  function smoothstep(edge0, edge1, x) {
    const t = clamp01((x - edge0) / (edge1 - edge0));
    return t * t * (3 - 2 * t);
  }

  class PillPixelEngine {
    constructor() {
      this.groups = new Map();
      this.raf = 0;
      this.inView = true;
      this.dpr = Math.min(window.devicePixelRatio || 1, 2);

      this.loop = this.loop.bind(this);
      this.scan = this.scan.bind(this);
      this.refreshAll = this.refreshAll.bind(this);
      this.init();
    }

    init() {
      const section = document.getElementById("projects");
      if (!section) return;

      this.mutationObserver = new MutationObserver(() => this.scan());
      this.mutationObserver.observe(section, { childList: true, subtree: true });

      if ("IntersectionObserver" in window) {
        this.viewObserver = new IntersectionObserver(
          (entries) => {
            const visible = entries[entries.length - 1].isIntersecting;
            this.inView = visible;
            if (!visible) {
              for (const group of this.groups.values()) {
                this.resetGroup(group);
              }
              return;
            }
            if (!this.raf) {
              this.raf = requestAnimationFrame(this.loop);
            }
          },
          { threshold: 0 }
        );
        this.viewObserver.observe(section);
      }

      // Garante medição correta após WebView (Discord/Instagram) terminar de abrir
      window.addEventListener("resize", this.refreshAll, { passive: true });
      window.addEventListener("orientationchange", () => setTimeout(this.refreshAll, 200), { passive: true });
      window.addEventListener("pageshow", () => setTimeout(this.refreshAll, 150), { passive: true });
      window.addEventListener("load", () => setTimeout(this.refreshAll, 150), { passive: true });
      setTimeout(this.refreshAll, 400);

      this.scan();
      this.raf = requestAnimationFrame(this.loop);
    }

    refreshAll() {
      this.dpr = Math.min(window.devicePixelRatio || 1, 2);
      this.scan();
      for (const group of this.groups.values()) {
        for (const pillState of group.pills) {
          this.resizePill(pillState);
        }
      }
      if (!this.raf && this.inView) {
        this.raf = requestAnimationFrame(this.loop);
      }
    }

    scan() {
      for (const [container] of this.groups) {
        if (!document.body.contains(container)) {
          this.groups.delete(container);
        }
      }

      const containers = document.querySelectorAll("#projects .profile-project-info");
      containers.forEach((container) => {
        if (this.groups.has(container)) return;

        const pills = [];
        container.querySelectorAll(".profile-tech-pill").forEach((pill) => {
          let canvas = pill.querySelector(".profile-pill-canvas");
          if (!canvas) {
            canvas = document.createElement("canvas");
            canvas.className = "profile-pill-canvas";
            canvas.setAttribute("aria-hidden", "true");
            pill.insertBefore(canvas, pill.firstChild);
          }

          const state = {
            el: pill,
            canvas,
            ctx: canvas.getContext("2d"),
            w: 0,
            h: 0,
            cells: []
          };
          this.resizePill(state);
          pills.push(state);
        });

        const group = {
          el: container,
          cycleStart: null,
          pills
        };
        this.resetGroup(group);
        this.groups.set(container, group);
      });
    }

    resetGroup(group) {
      group.cycleStart = null;
      group.el.style.setProperty("--shine-x", "-140%");
      group.el.style.setProperty("--shine-op", "0");
      group.el.style.setProperty("--glow-p", "0");
      group.el.style.setProperty("--pill-color", "rgb(138, 138, 153)");
      group.el.style.setProperty("--pill-border", "rgba(255, 255, 255, 0.14)");

      for (const state of group.pills) {
        if (state.w > 0 && state.h > 0) {
          state.ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
          state.ctx.clearRect(0, 0, state.w, state.h);
        }
      }
    }

    isGroupReady(group) {
      if (!this.inView) return false;
      if (group.el.offsetParent === null) return false;

      const deckCard = group.el.closest(".profile-deck-card");
      if (deckCard && !deckCard.classList.contains("is-settled")) {
        return false;
      }
      return true;
    }

    resizePill(state) {
      const w = Math.max(0, state.el.clientWidth - 2);
      const h = Math.max(0, state.el.clientHeight - 2);

      if (w <= 1 || h <= 1) return;
      if (w === state.w && h === state.h && state.cells.length > 0) return;

      state.w = w;
      state.h = h;
      state.canvas.width = Math.round(w * this.dpr);
      state.canvas.height = Math.round(h * this.dpr);

      const cols = Math.ceil(w / PIXEL_STEP);
      const rows = Math.ceil(h / PIXEL_STEP);
      const cells = [];
      const maxC = Math.max(1, cols - 1);
      const maxR = Math.max(1, rows - 1);

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const h1 = cellHash(c, r);
          const h2 = cellHash(c + 19, r + 47);

          const diag = (c / maxC) * 0.74 + (r / maxR) * 0.26;
          const jitter = (h1 - 0.5) * 0.13;
          const norm = clamp01(diag + jitter);

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

    drawPill(state, t, now) {
      const curW = Math.max(0, state.el.clientWidth - 2);
      const curH = Math.max(0, state.el.clientHeight - 2);

      if (curW <= 1 || curH <= 1) return;
      if (curW !== state.w || curH !== state.h || state.cells.length === 0) {
        this.resizePill(state);
      }

      const { ctx, w, h, cells } = state;
      ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);

      if (t < 0.125 || t > 0.565) return;

      for (let i = 0; i < cells.length; i++) {
        const cell = cells[i];
        if (t < cell.tStart || t > cell.tEnd) continue;

        const age = t - cell.tStart;
        const lifeLeft = cell.tEnd - t;

        ctx.fillStyle = "rgba(12, 2, 5, 0.9)";
        ctx.fillRect(cell.x, cell.y, PIXEL_STEP, PIXEL_STEP);

        if (age < 0.026) {
          const k = age / 0.026;
          ctx.fillStyle = k < 0.45 ? "#ffffff" : "#ff8fa3";
          ctx.fillRect(cell.x, cell.y, PIXEL_SIZE, PIXEL_SIZE);
        } else if (lifeLeft < 0.028) {
          const k = Math.max(0.25, lifeLeft / 0.028);
          const sz = PIXEL_SIZE * k;
          const off = (PIXEL_SIZE - sz) * 0.5;
          ctx.fillStyle = "#ff4d6d";
          ctx.fillRect(cell.x + off, cell.y + off, sz, sz);
        } else {
          const pulse = 0.8 + 0.2 * Math.sin(now * 0.01 + cell.phase);
          ctx.globalAlpha = pulse;
          ctx.fillStyle = cell.color;
          ctx.fillRect(cell.x, cell.y, PIXEL_SIZE, PIXEL_SIZE);
          ctx.globalAlpha = 1;
        }
      }
    }

    loop(now) {
      if (!this.inView) {
        this.raf = 0;
        return;
      }

      for (const group of this.groups.values()) {
        if (!this.isGroupReady(group)) {
          if (group.cycleStart !== null) this.resetGroup(group);
          continue;
        }

        if (group.cycleStart === null) {
          group.cycleStart = now;
        }

        const t = ((now - group.cycleStart) % CYCLE_MS) / CYCLE_MS;

        // FASE 1 (0.00 -> 0.16): Slide branco espelhado simultâneo nas TAGS e no BOTÃO
        if (t <= 0.16) {
          const p = t / 0.16;
          const x = -140 + p * 380;
          const op = p < 0.15 ? p / 0.15 : p > 0.8 ? (1 - p) / 0.2 : 1;
          group.el.style.setProperty("--shine-x", `${x.toFixed(1)}%`);
          group.el.style.setProperty("--shine-op", op.toFixed(2));
        } else {
          group.el.style.setProperty("--shine-op", "0");
        }

        // FASE 2 (0.11 -> 0.58): Pixelização diagonal + texto branco + glow nas tags
        const glowIn = smoothstep(0.11, 0.17, t);
        const glowOut = 1 - smoothstep(0.50, 0.58, t);
        const glowP = glowIn * glowOut;

        const r = Math.round(138 + glowP * 117);
        const g = Math.round(138 + glowP * 117);
        const b = Math.round(153 + glowP * 102);

        const bG = Math.round(255 - glowP * 148);
        const bB = Math.round(255 - glowP * 130);
        const bA = (0.14 + glowP * 0.76).toFixed(3);

        group.el.style.setProperty("--glow-p", glowP.toFixed(3));
        group.el.style.setProperty("--pill-color", `rgb(${r}, ${g}, ${b})`);
        group.el.style.setProperty("--pill-border", `rgba(255, ${bG}, ${bB}, ${bA})`);

        for (let i = 0; i < group.pills.length; i++) {
          this.drawPill(group.pills[i], t, now);
        }
      }

      this.raf = requestAnimationFrame(this.loop);
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
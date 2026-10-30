"use client";
import { useLayoutEffect } from "react";

// Homepage motion: every element carries its own preset via data-anim, and each one is
// revealed when *it* enters the viewport. Presets use the individual transform properties
// (translate / scale / rotate) so they compose with transforms the CSS already sets.
const OUT = "cubic-bezier(.18,.72,.24,1)";
const EXPO = "cubic-bezier(.16,1,.3,1)";
const POP = "cubic-bezier(.3,.7,.4,1)";
const WIPE = "cubic-bezier(.65,0,.35,1)";
const FULL = "inset(0 0 0 0)";
const CLIP = {
  "wipe-l": "inset(0 100% 0 0)",
  "wipe-r": "inset(0 0 0 100%)",
  "wipe-u": "inset(100% 0 0 0)",
  shutter: "inset(0 49% 0 49%)",
};
const GLYPHS = "ABCDEFGHJKLMNPQRSTUVWXYZ0123456789";

const GROUP_SLOW = 1.5;
const STEP_GAP = 650;

const simple = k => ({
  fade: [[{ opacity: 0 }, { opacity: 1 }], 800, OUT],
  rise: [[{ opacity: 0, translate: `0 ${24 * k}px` }, { opacity: 1, translate: "0 0" }], 900, OUT],
  drop: [[{ opacity: 0, translate: `0 ${-24 * k}px` }, { opacity: 1, translate: "0 0" }], 800, OUT],
  "pan-l": [[{ opacity: 0, translate: `${-56 * k}px 0` }, { opacity: 1, translate: "0 0" }], 950, OUT],
  "pan-r": [[{ opacity: 0, translate: `${56 * k}px 0` }, { opacity: 1, translate: "0 0" }], 950, OUT],
  pop: [[{ opacity: 0, scale: ".4" }, { opacity: 1, scale: "1.14", offset: .6 }, { opacity: 1, scale: "1" }], 650, POP],
  tumble: [[{ opacity: 0, rotate: "-9deg", translate: "0 30px" }, { opacity: 1, rotate: "2deg", translate: "0 -4px", offset: .65 }, { opacity: 1, rotate: "0deg", translate: "0 0" }], 900, OUT],
  "tilt-l": [[{ opacity: 0, rotate: "-3deg", translate: "0 26px" }, { opacity: 1, rotate: "0deg", translate: "0 0" }], 950, OUT],
  "tilt-r": [[{ opacity: 0, rotate: "3deg", translate: "0 26px" }, { opacity: 1, rotate: "0deg", translate: "0 0" }], 950, OUT],
  blur: [[{ opacity: 0, filter: "blur(12px)" }, { opacity: 1, filter: "blur(0px)" }], 900, OUT],
  scale: [[{ opacity: 0, scale: ".88" }, { opacity: 1, scale: "1" }], 950, EXPO],
  rotate: [[{ opacity: 0, rotate: "-4deg", scale: "1.08" }, { opacity: 1, rotate: "0deg", scale: "1" }], 1100, EXPO],
});

const SPLITS = {
  words: [{ opacity: 0, translate: "0 .5em" }, 55],
  drift: [{ opacity: 0, translate: "-.55em 0" }, 60],
  burst: [{ opacity: 0, scale: "1.4" }, 75],
};

export default function HomeMotion() {
  useLayoutEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches || !("IntersectionObserver" in window) || !Element.prototype.animate) return;

    const root = document.querySelector(".fh-home");
    const nodes = [...root.querySelectorAll("[data-anim]")];
    const k = window.matchMedia("(max-width: 1000px)").matches ? .5 : 1;
    const SIMPLE = simple(k);
    const animations = new Set();
    const prepared = new Map();
    const after = new Map();
    const restores = [];
    const started = new Set();
    const watching = new Map();
    const imageTasks = new Map();
    const imageCleanups = [];
    let observer;
    let groupObserver;
    let dead = false;

    /* ---------- images: decode before a reveal so it never plays over a blank frame ---------- */
    const warmImage = img => {
      if (imageTasks.has(img)) return imageTasks.get(img);
      img.loading = "eager";
      const task = new Promise(resolve => {
        const done = () => {
          img.removeEventListener("load", done);
          img.removeEventListener("error", done);
          if (img.naturalWidth && img.decode) img.decode().catch(() => {}).then(resolve);
          else resolve();
        };
        if (img.complete) done();
        else {
          img.addEventListener("load", done, { once: true });
          img.addEventListener("error", done, { once: true });
          imageCleanups.push(() => { img.removeEventListener("load", done); img.removeEventListener("error", done); resolve(); });
        }
      });
      imageTasks.set(img, task);
      return task;
    };
    const warmer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.querySelectorAll("img").forEach(warmImage); warmer.unobserve(entry.target); }
    }), { rootMargin: "900px 200px" });
    root.querySelectorAll("img").forEach(img => warmer.observe(img.parentElement));

    /* ---------- text splitting (restored on cleanup) ---------- */
    const keepHtml = node => { const html = node.innerHTML; restores.push(() => { node.innerHTML = html; }); };
    const splitWords = node => {
      keepHtml(node);
      const text = node.textContent;
      node.textContent = "";
      const spans = [];
      text.split(/(\s+)/).forEach(part => {
        if (!part) return;
        if (/^\s+$/.test(part)) { node.append(" "); return; }
        const span = document.createElement("span");
        span.className = "fh-w";
        span.textContent = part;
        node.append(span);
        spans.push(span);
      });
      return spans;
    };
    const splitChars = node => {
      keepHtml(node);
      const text = node.textContent;
      node.innerHTML = "";
      const sr = document.createElement("span");
      sr.className = "fh-sr";
      sr.textContent = text;
      const visual = document.createElement("span");
      visual.setAttribute("aria-hidden", "true");
      const chars = [...text].map(ch => {
        if (ch === " ") { visual.append(" "); return null; }
        const span = document.createElement("span");
        span.textContent = ch;
        visual.append(span);
        return span;
      }).filter(Boolean);
      node.append(sr, visual);
      return chars;
    };
    const splitLines = node => {
      const existing = [...node.querySelectorAll(".fh-title-line > span")];
      if (existing.length) return existing;
      keepHtml(node);
      node.innerHTML = node.innerHTML.split(/<br\s*\/?>/i).map(part => `<span class="fh-title-line"><span>${part}</span></span>`).join(" ");
      return [...node.querySelectorAll(".fh-title-line > span")];
    };

    /* ---------- one preset -> a list of paused tracks ---------- */
    function build(node) {
      const type = node.dataset.anim;
      const tracks = [];
      const slow = node.closest("[data-anim-step]") ? GROUP_SLOW : 1;
      const add = (el, frames, duration, easing, delay = 0, hook) => {
        const a = el.animate(frames, { duration: duration * slow, easing, fill: "both" });
        a.pause();
        animations.add(a);
        tracks.push({ a, delay: delay * slow, hook });
        return a;
      };
      const img = node.matches("img") ? node : node.querySelector("img");

      if (SIMPLE[type]) {
        const [frames, duration, easing] = SIMPLE[type];
        add(node, frames, duration, easing);
      } else if (CLIP[type]) {
        add(node, [{ clipPath: CLIP[type] }, { clipPath: FULL }], type === "shutter" ? 1300 : 1150, EXPO);
        if (img && img !== node) add(img, [{ scale: "1.18" }, { scale: "1" }], 1500, EXPO);
      } else if (type === "iris") {
        const at = node.dataset.animOrigin || "50% 50%";
        add(node, [{ clipPath: `circle(0% at ${at})` }, { clipPath: `circle(150% at ${at})` }], 1300, EXPO);
        if (img && img !== node) add(img, [{ scale: "1.2" }, { scale: "1" }], 1500, EXPO);
      } else if (type === "zoom") {
        add(img, [{ opacity: 0, scale: "1.22" }, { opacity: 1, offset: .3 }, { opacity: 1, scale: "1" }], 1500, EXPO);
      } else if (type === "focus") {
        add(img, [{ opacity: 0, filter: "blur(18px)", scale: "1.1" }, { opacity: 1, offset: .25 }, { opacity: 1, filter: "blur(0px)", scale: "1" }], 1400, OUT);
      } else if (SPLITS[type]) {
        const [from, step] = SPLITS[type];
        splitWords(node).forEach((word, i) => add(word, [from, { opacity: 1, translate: "0 0", scale: "1" }], 800, OUT, i * step));
      } else if (type === "lines") {
        splitLines(node).forEach((line, i) => add(line, [{ translate: "0 108%" }, { translate: "0 0" }], 1000, OUT, i * 150));
      } else if (type === "typewriter") {
        splitChars(node).forEach((ch, i) => add(ch, [{ opacity: 0 }, { opacity: 1 }], 60, "linear", i * 32));
      } else if (type === "scramble") {
        const finalText = node.textContent;
        const a = add(node, [{ opacity: 0 }, { opacity: 1, offset: .15 }, { opacity: 1 }], 900, "linear", 0, () => {
          const tick = () => {
            if (dead) return;
            const p = a.effect.getComputedTiming().progress;
            if (a.playState === "running" && (p === null || p < 1)) {
              const fixed = Math.floor(((p || 0) - .15) / .85 * finalText.length);
              node.textContent = [...finalText].map((ch, i) => (i < fixed || ch === "$" || ch === " " ? ch : GLYPHS[Math.floor(Math.random() * GLYPHS.length)])).join("");
              requestAnimationFrame(tick);
            } else node.textContent = finalText;
          };
          tick();
        });
        restores.push(() => { node.textContent = finalText; });
      } else if (type === "block") {
        keepHtml(node);
        const style = node.getAttribute("style");
        restores.push(() => { if (style === null) node.removeAttribute("style"); else node.setAttribute("style", style); });
        const inner = document.createElement("span");
        inner.innerHTML = node.innerHTML;
        const bar = document.createElement("span");
        bar.className = "fh-block-bar";
        bar.setAttribute("aria-hidden", "true");
        bar.style.background = node.dataset.animColor || "var(--accent)";
        node.innerHTML = "";
        node.append(inner, bar);
        node.style.position = "relative";
        node.style.overflow = "clip";
        add(bar, [{ translate: "-101% 0" }, { translate: "0 0", offset: .5 }, { translate: "101% 0" }], 1000, WIPE);
        add(inner, [{ opacity: 0 }, { opacity: 0, offset: .5 }, { opacity: 1, offset: .5001 }, { opacity: 1 }], 1000, WIPE);
        after.set(node, [() => { node.innerHTML = inner.innerHTML; if (style === null) node.removeAttribute("style"); else node.setAttribute("style", style); }]);
      } else if (type === "rule") {
        node.style.transformOrigin = "0 50%";
        restores.push(() => { node.style.transformOrigin = ""; });
        add(node, [{ scale: "0 1" }, { scale: "1 1" }], 1200, EXPO);
      } else if (type === "draw") {
        node.querySelectorAll("path").forEach((path, i) => {
          const len = Math.ceil(path.getTotalLength?.() || 100);
          add(path, [{ strokeDasharray: len, strokeDashoffset: len }, { strokeDasharray: len, strokeDashoffset: 0 }], 900, OUT, i * 260);
        });
      } else add(node, SIMPLE.fade[0], 800, OUT);

      prepared.set(node, tracks);
    }

    /* ---------- playback ---------- */
    async function play(node, base = 0, gate = null) {
      if (started.has(node) || dead) return;
      started.add(node);
      const up = node.parentElement?.closest("[data-anim]");
      const imgs = [...(node.matches("img") ? [node] : node.querySelectorAll("img")), ...(up ? up.querySelectorAll("img") : [])];
      await Promise.all(imgs.map(warmImage));
      if (gate) await gate;
      if (dead) return;
      const tracks = prepared.get(node) || [];
      const extra = Number(node.dataset.animDelay) || 0;
      tracks.forEach(({ a, delay, hook }) => {
        a.effect.updateTiming({ delay: base + extra + delay });
        a.play();
        hook?.();
      });
      await Promise.all(tracks.map(({ a }) => a.finished.catch(() => {})));
      if (dead) return;
      node.dataset.entered = "true";
      tracks.forEach(({ a }) => { a.cancel(); animations.delete(a); });
      (after.get(node) || []).forEach(fn => fn());
    }

    const teardown = () => {
      dead = true;
      warmer.disconnect();
      observer?.disconnect();
      groupObserver?.disconnect();
      imageCleanups.forEach(fn => fn());
      animations.forEach(a => a.cancel());
      animations.clear();
      restores.reverse().forEach(fn => fn());
      nodes.forEach(node => { node.removeAttribute("data-anim-ready"); node.removeAttribute("data-entered"); });
    };

    try {
      // Hero copy waits for the photo (capped) so the focus pull and headline stay in sequence.
      const heroImg = root.querySelector(".fh-hero-photo img");
      const heroGate = heroImg ? Promise.race([warmImage(heroImg), new Promise(resolve => setTimeout(resolve, 2500))]) : null;
      const onEnter = (entries, obs) => {
        const visible = entries.filter(e => e.isIntersecting).sort((a, b) => (a.target.compareDocumentPosition(b.target) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1));
        // Items in one group (data-anim-step) reveal one after another in step order; a lone item plays at once.
        const stepOf = e => { const s = e.target.closest("[data-anim-step]"); return s ? Number(s.dataset.animStep) : null; };
        const steps = [...new Set(visible.map(stepOf).filter(s => s !== null))].sort((x, y) => x - y);
        visible.forEach((entry, i) => {
          obs.unobserve(entry.target);
          const step = stepOf(entry);
          const base = step === null ? Math.min(i * 85, 500) : steps.indexOf(step) * STEP_GAP;
          watching.get(entry.target).forEach(n => play(n, base));
        });
      };
      observer = new IntersectionObserver(onEnter, { threshold: 0, rootMargin: "0px 0px -6% 0px" });
      // Grouped cards wait until they are well inside the viewport, so the reveal is seen rather than missed.
      groupObserver = new IntersectionObserver(onEnter, { threshold: 0, rootMargin: "0px 0px -26% 0px" });

      nodes.forEach(node => {
        build(node);
        node.setAttribute("data-anim-ready", "");
        const rect = node.getBoundingClientRect();
        if (node.closest(".fh-hero") && rect.top < window.innerHeight * .94 && rect.bottom > 0) {
          play(node, 0, node.matches(".fh-hero-photo") ? null : heroGate);
        } else {
          // Clip-path on a node or its ancestors hides it from the observer, so watch the unclipped host instead.
          let host = null;
          for (let up = node.parentElement?.closest("[data-anim]"); up; up = up.parentElement?.closest("[data-anim]")) host = up;
          const watch = node.matches("img") ? node.parentElement : (host || node);
          if (!watching.has(watch)) { watching.set(watch, []); (watch.closest("[data-anim-step]") ? groupObserver : observer).observe(watch); }
          watching.get(watch).push(node);
        }
      });
    } catch {
      teardown();
    }

    const onChange = () => { if (media.matches) teardown(); };
    media.addEventListener("change", onChange);
    return () => { media.removeEventListener("change", onChange); teardown(); };
  }, []);
  return null;
}

"use client";
import { useLayoutEffect } from "react";

const EASE = "cubic-bezier(.18,.72,.24,1)";
// FoxHound's field-observation motion: camera-shutter image reveals, measured copy and field-record rows.
export default function Entrance() {
  useLayoutEffect(() => {
    const nodes = [...document.querySelectorAll(".fh-home [data-entrance]")];
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches || !("IntersectionObserver" in window)) return;
    const animations = new Set();
    const prepared = new Map();
    let observer;
    let disposed = false;
    let stopped = false;
    const started = new Set();
    const compact = window.matchMedia("(max-width: 1000px)");
    const imageTasks = new Map();
    const imageCleanups = [];
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
          img.addEventListener("load", done, {once: true});
          img.addEventListener("error", done, {once: true});
          imageCleanups.push(() => { img.removeEventListener("load", done); img.removeEventListener("error", done); resolve(); });
        }
      });
      imageTasks.set(img, task);
      return task;
    };
    const warmer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.querySelectorAll("img").forEach(warmImage); warmer.unobserve(entry.target); }
    }), {rootMargin: "900px 200px"});
    document.querySelectorAll(".fh-home img").forEach(img => warmer.observe(img.closest("[data-entrance]") || img.parentElement));
    const finishAll = () => {
      animations.forEach(animation => animation.cancel());
      nodes.forEach(node => { node.removeAttribute("data-motion"); node.removeAttribute("data-entered"); });
    };
    function prepare(node) {
      const image = node.dataset.entrance === "image";
      const effect = node.dataset.motionEffect || (image ? "settle" : node.matches("article") ? "card" : node.matches("li") ? "row" : "fade");
      let targets = image ? [...node.querySelectorAll("img")].slice(0, 1) : [...node.children].filter(child => !child.matches("br"));
      // Keep cards intact; only copy groups use an internal sequence.
      if (!image && (node.matches("article,a,li") || !node.querySelector("h1,h2,h3") || node.matches("h1,h2,h3"))) targets = [node];
      if (!targets.length) targets = [node];
      const tracks = [];
      targets.forEach((target, index) => {
        const lines = target.matches("h1,h2,h3") ? [...target.querySelectorAll(".fh-title-line > span")] : [];
        const parts = lines.length ? lines : [target];
        parts.forEach((part, lineIndex) => {
          const isTitle = lines.length || target.matches("h1,h2,h3");
          const delay = Math.min(index * 180, 360) + lineIndex * 150;
          const horizontal = effect === "from-left" || effect === "from-right" || effect === "row";
          const direction = effect === "from-right" ? 1 : -1;
          const shift = horizontal && !compact.matches ? 'translateX(' + direction * 24 + 'px)' : "translateY(12px)";
          let frames;
          if (image) {
            const clips = {
              "wipe-left": "inset(0 100% 0 0)",
              "wipe-right": "inset(0 0 0 100%)",
              "wipe-up": "inset(100% 0 0 0)",
              "shutter": "inset(0 49% 0 49%)",
            };
            frames = clips[effect]
              ? [{clipPath: clips[effect], transform: "scale(1.025)"}, {clipPath: "inset(0 0 0 0)", transform: "scale(1)"}]
              : effect === "focus"
                ? [{filter: "blur(14px)", transform: "scale(1.08)"}, {filter: "blur(0px)", transform: "scale(1)"}]
                : [{opacity: .35, transform: "scale(1.04)"}, {opacity: 1, transform: "scale(1)"}];
          } else if (lines.length) {
            frames = [{transform: "translateY(108%)"}, {transform: "translateY(0)"}];
          } else if (effect === "card") {
            frames = [{opacity: 0, transform: "translateY(20px) scale(.985)"}, {opacity: 1, transform: "translateY(0) scale(1)"}];
          } else if (horizontal) {
            frames = [{opacity: 0, transform: shift}, {opacity: 1, transform: "translate(0,0)"}];
          } else if (isTitle) {
            frames = [{opacity: 0, transform: "translateY(22px)"}, {opacity: 1, transform: "translateY(0)"}];
          } else {
            frames = [{opacity: 0}, {opacity: 1}];
          }
          if (!part.animate) return;
          const animation = part.animate(frames, { duration: image ? (effect === "shutter" ? 1360 : effect === "focus" ? 1300 : 1200) : isTitle ? 980 : 850, delay, easing: EASE, fill: "both" });
          animation.pause();
          animations.add(animation);
          tracks.push({animation, delay});
        });
      });
      prepared.set(node, tracks);
    }
    // The hero's copy waits for the photo (capped) so the focus pull and the headline stay in sequence.
    const heroImg = document.querySelector(".fh-hero-photo img");
    const heroGate = heroImg ? Promise.race([warmImage(heroImg), new Promise(resolve => setTimeout(resolve, 2500))]) : null;
    async function play(node, offset = 0, gate = null) {
      if (started.has(node) || disposed || stopped) return;
      started.add(node);
      await Promise.all([...node.querySelectorAll("img")].map(warmImage));
      if (gate) await gate;
      if (disposed || stopped) return;
      const tracks = prepared.get(node) || [];
      node.dataset.motion = "playing";
      tracks.forEach(({animation, delay}) => {
        animation.effect.updateTiming({delay: delay + offset});
        animation.play();
      });
      Promise.all(tracks.map(({animation}) => animation.finished.catch(() => {}))).then(() => {
        if (disposed || stopped) return;
        node.dataset.entered = "true";
        tracks.forEach(({animation}) => { animation.cancel(); animations.delete(animation); });
      });
    }
    try {
      observer = new IntersectionObserver(entries => {
        const visible = entries.filter(entry => entry.isIntersecting);
        // Stagger only this visible batch; no accumulating page-long delay.
        visible.forEach((entry, index) => {
          play(entry.target, Math.min(index * 140, 280));
          observer.unobserve(entry.target);
        });
      }, {threshold: 0, rootMargin: "0px 0px -6% 0px"});
      nodes.forEach(node => {
        prepare(node);
        const rect = node.getBoundingClientRect();
        const opening = node.closest(".fh-hero, [data-entrance-opening]");
        if (opening && rect.top < window.innerHeight * .94 && rect.bottom > 0) {
          const title = node.matches("h1") || node.querySelector("h1");
          const image = node.dataset.entrance === "image";
          play(node, image ? 120 : title ? 420 : node.matches("a") ? 900 : 220, image ? null : heroGate);
        } else observer.observe(node);
      });
    } catch {
      stopped = true;
      warmer.disconnect();
      observer?.disconnect();
      finishAll();
    }
    const reduce = () => { if (media.matches) { stopped = true; observer?.disconnect(); warmer.disconnect(); finishAll(); } };
    media.addEventListener("change", reduce);
    return () => { disposed = true; warmer.disconnect(); imageCleanups.forEach(cleanup => cleanup()); observer?.disconnect(); media.removeEventListener("change", reduce); finishAll(); };
  }, []);
  return null;
}

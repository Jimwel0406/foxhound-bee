"use client";

import { useEffect } from "react";

export default function Behaviours() {
  useEffect(() => {
    var navItems = Array.prototype.slice.call(
      document.querySelectorAll("[data-nav]")
    );
    var spyIds = ["top", "harvest", "hives", "journal", "support"];
    var spySections = [];
    spyIds.forEach(function (id) {
      var el = document.getElementById(id);
      if (el) spySections.push(el);
    });

    function spy() {
      if (window.location.pathname === "/") {
        navItems.forEach(function (a) { a.classList.remove("is-current"); });
        return;
      }
      var doc = document.documentElement;
      var atBottom =
        window.pageYOffset + window.innerHeight >= doc.scrollHeight - 4;
      var y = window.pageYOffset + 140;
      var cur = spyIds[0];
      spySections.forEach(function (s) {
        if (s.getBoundingClientRect().top + window.pageYOffset <= y) cur = s.id;
      });
      if (atBottom) cur = spyIds[spyIds.length - 1];
      navItems.forEach(function (a) {
        a.classList.toggle("is-current", a.getAttribute("data-nav") === (window.location.pathname === "/harvest" ? "harvest" : window.location.pathname === "/hives" ? "hives" : window.location.pathname === "/journal" ? "journal" : window.location.pathname === "/support" ? "support" : cur));
      });
    }
    window.addEventListener("scroll", spy, { passive: true });
    window.addEventListener("resize", spy);
    spy();

    /* --- mobile flyout --- */
    var flyout = document.getElementById("flyout");
    var menuBtn = document.getElementById("menuBtn");
    function closeFlyout() {
      flyout.classList.remove("is-open");
      menuBtn.setAttribute("aria-expanded", "false");
    }
    function onMenuClick() {
      var open = flyout.classList.toggle("is-open");
      menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
      closeBag();
    }
    menuBtn.addEventListener("click", onMenuClick);
    var flyoutLinks = Array.prototype.slice.call(
      flyout.querySelectorAll("a")
    );
    flyoutLinks.forEach(function (a) {
      a.addEventListener("click", closeFlyout);
    });

    /* --- search overlay --- */
    var overlay = document.getElementById("searchOverlay");
    var input = document.getElementById("searchInput");
    var searchBtn = document.getElementById("searchBtn");
    function onSearchOpen() {
      overlay.classList.add("is-open");
      window.setTimeout(function () {
        input.focus();
      }, 40);
      closeBag();
    }
    searchBtn.addEventListener("click", onSearchOpen);
    function closeSearch() {
      overlay.classList.remove("is-open");
      input.blur();
    }
    var searchClose = document.getElementById("searchClose");
    searchClose.addEventListener("click", closeSearch);
    function onOverlayClick(e) {
      if (e.target === overlay) closeSearch();
    }
    overlay.addEventListener("click", onOverlayClick);

    /* --- bag popover --- */
    var bagPop = document.getElementById("bagPop");
    var bagBtn = document.getElementById("bagBtn");
    function closeBag() {
      bagPop.classList.remove("is-open");
      bagBtn.setAttribute("aria-expanded", "false");
    }
    function onBagClick(e) {
      e.stopPropagation();
      var open = bagPop.classList.toggle("is-open");
      bagBtn.setAttribute("aria-expanded", open ? "true" : "false");
      if (open) closeFlyout();
    }
    bagBtn.addEventListener("click", onBagClick);
    function onDocClick(e) {
      if (!bagPop.contains(e.target) && e.target !== bagBtn) closeBag();
    }
    document.addEventListener("click", onDocClick);
    var bagLinks = Array.prototype.slice.call(bagPop.querySelectorAll("a"));
    bagLinks.forEach(function (a) {
      a.addEventListener("click", closeBag);
    });

    function onKeydown(e) {
      if (e.key === "Escape") {
        closeSearch();
        closeBag();
        closeFlyout();
      }
    }
    document.addEventListener("keydown", onKeydown);

    /* --- horizontal rails --- */
    var railCleanups = [];
    Array.prototype.forEach.call(document.querySelectorAll(".rail"), function (rail) {
      var wrap = rail.parentElement;
      var prev = wrap ? wrap.querySelector(".rail-nav--prev") : null;
      var next = wrap ? wrap.querySelector(".rail-nav--next") : null;
      var target = 0,
        raf = 0;

      function maxScroll() {
        return Math.max(0, rail.scrollWidth - rail.clientWidth);
      }
      function sync() {
        var m = maxScroll();
        if (prev) prev.disabled = rail.scrollLeft <= 1;
        if (next) next.disabled = m <= 1 || rail.scrollLeft >= m - 1;
      }
      function stopGlide() {
        if (raf) {
          cancelAnimationFrame(raf);
          raf = 0;
        }
        target = rail.scrollLeft;
      }
      function tick() {
        target = Math.max(0, Math.min(maxScroll(), target));
        var cur = rail.scrollLeft;
        var d = target - cur;
        if (Math.abs(d) < 0.4) {
          rail.scrollLeft = target;
          raf = 0;
          sync();
          return;
        }
        rail.scrollLeft = cur + d * 0.18;
        raf = requestAnimationFrame(tick);
      }
      function glideTo(v) {
        target = Math.max(0, Math.min(maxScroll(), v));
        if (!raf) raf = requestAnimationFrame(tick);
      }
      function step(dir) {
        var from = raf ? target : rail.scrollLeft;
        glideTo(from + dir * Math.max(320, rail.clientWidth * 0.72));
      }

      function onPrev() {
        step(-1);
      }
      function onNext() {
        step(1);
      }
      function onScroll() {
        sync();
      }
      function onWheel(e) {
        if (Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return;
        var m = maxScroll();
        if (m <= 1) return;
        var pos = raf ? target : rail.scrollLeft;
        if ((e.deltaY > 0 && pos >= m - 1) || (e.deltaY < 0 && pos <= 1)) return;
        e.preventDefault();
        glideTo(pos + e.deltaY);
      }

      var down = false,
        sx = 0,
        sl = 0,
        moved = false,
        lx = 0,
        lt = 0,
        vel = 0;

      function onPointerDown(e) {
        if (e.pointerType !== "mouse" || e.button !== 0) return;
        if (maxScroll() <= 1) return;
        stopGlide();
        down = true;
        moved = false;
        sx = e.clientX;
        sl = rail.scrollLeft;
        lx = e.clientX;
        lt = e.timeStamp;
        vel = 0;
        rail.classList.add("is-dragging");
      }
      function onPointerMove(e) {
        if (!down) return;
        var dx = e.clientX - sx;
        if (!moved && Math.abs(dx) > 5) {
          moved = true;
          try {
            rail.setPointerCapture(e.pointerId);
          } catch (err) {}
        }
        if (!moved) return;
        e.preventDefault();
        rail.scrollLeft = Math.max(0, Math.min(maxScroll(), sl - dx));
        var dt = e.timeStamp - lt;
        if (dt > 0) {
          vel = (e.clientX - lx) / dt;
          lx = e.clientX;
          lt = e.timeStamp;
        }
      }
      function endDrag(e) {
        if (!down) return;
        down = false;
        rail.classList.remove("is-dragging");
        if (moved) {
          try {
            rail.releasePointerCapture(e.pointerId);
          } catch (err) {}
          var thrown = vel * 150;
          if (Math.abs(thrown) > 24) glideTo(rail.scrollLeft - thrown);
          else sync();
        }
        vel = 0;
      }
      function onClickCapture(e) {
        if (moved) {
          e.preventDefault();
          e.stopPropagation();
          moved = false;
        }
      }
      function onDragStart(e) {
        e.preventDefault();
      }

      if (prev) prev.addEventListener("click", onPrev);
      if (next) next.addEventListener("click", onNext);
      rail.addEventListener("scroll", onScroll, { passive: true });
      rail.addEventListener("wheel", onWheel, { passive: false });
      rail.addEventListener("pointerdown", onPointerDown);
      rail.addEventListener("pointermove", onPointerMove);
      rail.addEventListener("pointerup", endDrag);
      rail.addEventListener("pointercancel", endDrag);
      rail.addEventListener("click", onClickCapture, true);
      rail.addEventListener("dragstart", onDragStart);

      sync();

      railCleanups.push(function () {
        if (prev) prev.removeEventListener("click", onPrev);
        if (next) next.removeEventListener("click", onNext);
        rail.removeEventListener("scroll", onScroll);
        rail.removeEventListener("wheel", onWheel);
        rail.removeEventListener("pointerdown", onPointerDown);
        rail.removeEventListener("pointermove", onPointerMove);
        rail.removeEventListener("pointerup", endDrag);
        rail.removeEventListener("pointercancel", endDrag);
        rail.removeEventListener("click", onClickCapture, true);
        rail.removeEventListener("dragstart", onDragStart);
      });
    });

    function onResize() {
      Array.prototype.forEach.call(document.querySelectorAll(".rail"), function (r) {
        r.dispatchEvent(new Event("scroll"));
      });
    }
    window.addEventListener("resize", onResize);

    return function cleanup() {
      window.removeEventListener("scroll", spy);
      window.removeEventListener("resize", spy);
      window.removeEventListener("resize", onResize);
      menuBtn.removeEventListener("click", onMenuClick);
      flyoutLinks.forEach(function (a) {
        a.removeEventListener("click", closeFlyout);
      });
      searchBtn.removeEventListener("click", onSearchOpen);
      searchClose.removeEventListener("click", closeSearch);
      overlay.removeEventListener("click", onOverlayClick);
      bagBtn.removeEventListener("click", onBagClick);
      document.removeEventListener("click", onDocClick);
      bagLinks.forEach(function (a) {
        a.removeEventListener("click", closeBag);
      });
      document.removeEventListener("keydown", onKeydown);
      railCleanups.forEach(function (fn) {
        fn();
      });
    };
  }, []);

  return null;
}



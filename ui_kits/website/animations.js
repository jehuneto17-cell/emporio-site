(function () {
  function initSmoothScroll() {
    if (window.__lenis || !window.Lenis) return;
    const lenis = new Lenis({ duration: 1.1, easing: (t) => 1 - Math.pow(1 - t, 3), smoothWheel: true });
    function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
    lenis.on("scroll", ScrollTrigger.update);
    window.__lenis = lenis;
  }

  function splitWords(el) {
    if (el.dataset.split) return;
    const words = el.textContent.split(/(\s+)/).filter((w) => w.length);
    el.innerHTML = "";
    words.forEach((w) => {
      if (/^\s+$/.test(w)) { el.appendChild(document.createTextNode(w)); return; }
      const wrap = document.createElement("span");
      wrap.style.cssText = "display:inline-block;overflow:hidden;vertical-align:top;padding-bottom:0.15em;margin-bottom:-0.15em";
      const inner = document.createElement("span");
      inner.className = "__word";
      inner.style.display = "inline-block";
      inner.textContent = w;
      wrap.appendChild(inner);
      el.appendChild(wrap);
    });
    el.dataset.split = "true";
  }

  function revealWords(root) {
    root.querySelectorAll("h1,h2").forEach((h) => {
      splitWords(h);
      const words = h.querySelectorAll(".__word");
      if (!words.length) return;
      gsap.fromTo(words, { yPercent: 110, opacity: 0 }, {
        yPercent: 0, opacity: 1, duration: 0.8, ease: "power3.out", stagger: 0.045,
        scrollTrigger: { trigger: h, start: "top 90%", toggleActions: "play none none none", once: true },
      });
    });
  }

  function staggerGrids(root) {
    root.querySelectorAll("div").forEach((el) => {
      if (el.dataset.staggered) return;
      const cs = getComputedStyle(el);
      if (cs.display === "grid" && el.children.length > 1 && el.children.length <= 8) {
        el.dataset.staggered = "true";
        gsap.fromTo(el.children, { opacity: 0, y: 28 }, {
          opacity: 1, y: 0, duration: 0.6, ease: "power2.out", stagger: 0.1,
          scrollTrigger: { trigger: el, start: "top 90%", toggleActions: "play none none none", once: true },
        });
      }
    });
  }

  function parallaxImages(root) {
    root.querySelectorAll("img").forEach((img) => {
      if (img.dataset.parallax) return;
      img.dataset.parallax = "true";
      gsap.to(img, { yPercent: -8, ease: "none", scrollTrigger: { trigger: img, start: "top bottom", end: "bottom top", scrub: 0.5 } });
    });
  }

  function eyebrowLines(root) {
    root.querySelectorAll("p").forEach((p) => {
      if (p.dataset.squiggle) return;
      const cs = getComputedStyle(p);
      const next = p.nextElementSibling;
      if (parseInt(cs.fontWeight, 10) >= 600 && next && /^H[12]$/.test(next.tagName)) {
        p.dataset.squiggle = "true";
        p.style.display = "inline-flex";
        p.style.alignItems = "center";
        p.style.gap = "10px";
        const svgNS = "http://www.w3.org/2000/svg";
        const svg = document.createElementNS(svgNS, "svg");
        svg.setAttribute("viewBox", "0 0 40 20");
        svg.setAttribute("width", "32");
        svg.setAttribute("height", "16");
        svg.style.overflow = "visible";
        const path = document.createElementNS(svgNS, "path");
        path.setAttribute("d", "M2,18 C8,2 14,2 20,10 C26,18 32,18 38,4");
        path.setAttribute("fill", "none");
        path.setAttribute("stroke", "var(--color-di-serria)");
        path.setAttribute("stroke-width", "2");
        path.setAttribute("stroke-linecap", "round");
        svg.appendChild(path);
        p.appendChild(svg);
        const len = path.getTotalLength();
        path.style.strokeDasharray = String(len);
        gsap.fromTo(path, { strokeDashoffset: len }, {
          strokeDashoffset: 0, duration: 0.9, ease: "power2.inOut",
          scrollTrigger: { trigger: p, start: "top 92%", toggleActions: "play none none none", once: true },
        });
      }
    });
  }

  function waveDividers(root) {
    const sections = Array.from(new Set(root.querySelectorAll("section, footer")));
    sections.forEach((sec, i) => {
      if (sec.dataset.waved) return;
      const next = sections[i + 1];
      if (!next) return;
      sec.dataset.waved = "true";
      if (!sec.style.position) sec.style.position = "relative";
      const nextBg = getComputedStyle(next).backgroundColor;
      const svgNS = "http://www.w3.org/2000/svg";
      const svg = document.createElementNS(svgNS, "svg");
      svg.setAttribute("viewBox", "0 0 1440 60");
      svg.setAttribute("preserveAspectRatio", "none");
      svg.style.cssText = "position:absolute;left:0;right:0;bottom:-1px;width:100%;height:44px;display:block;pointer-events:none;";
      const path = document.createElementNS(svgNS, "path");
      path.setAttribute("d", "M0,30 C220,58 380,2 620,18 C860,34 1040,58 1220,26 C1320,10 1380,10 1440,20 L1440,60 L0,60 Z");
      path.setAttribute("fill", nextBg);
      svg.appendChild(path);
      sec.appendChild(svg);
    });
  }

  function runAll() {
    const root = document.getElementById("root");
    if (!root || !window.gsap || !window.ScrollTrigger) return;
    gsap.registerPlugin(ScrollTrigger);
    initSmoothScroll();
    waveDividers(root);
    revealWords(root);
    staggerGrids(root);
    parallaxImages(root);
    eyebrowLines(root);
    root.querySelectorAll("img").forEach((img) => {
      if (img.complete) return;
      img.addEventListener("load", () => ScrollTrigger.refresh(), { once: true });
    });
    ScrollTrigger.refresh();
    // Safety net: force-complete any tween whose trigger is already active (above-the-fold content)
    // so it never sits hidden waiting for a scroll event that already happened.
    requestAnimationFrame(() => {
      ScrollTrigger.getAll().forEach((st) => {
        if (st.isActive && st.animation && st.animation.progress() < 1) st.animation.progress(1);
      });
    });
  }

  function reset() {
    if (window.ScrollTrigger) ScrollTrigger.getAll().forEach((t) => t.kill());
  }

  window.EmpAnim = { runAll, reset };
})();

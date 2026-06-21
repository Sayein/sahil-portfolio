document.addEventListener("DOMContentLoaded", function () {
  const root = document.documentElement;
  const sections = Array.from(document.querySelectorAll(".case-section"));
  const ratios = new Map();

  function applyTheme(section) {
    root.style.setProperty("--theme-h", section.dataset.h);
    root.style.setProperty("--theme-s", section.dataset.s);
    root.style.setProperty("--theme-l", section.dataset.l);
    root.style.setProperty("--theme-h2", section.dataset.h2);
    root.style.setProperty("--theme-s2", section.dataset.s2);
    root.style.setProperty("--theme-l2", section.dataset.l2);
  }

  function buildThresholdList() {
    const list = [];
    for (let i = 0; i <= 1; i += 0.05) list.push(i);
    return list;
  }

  const themeObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        ratios.set(entry.target, entry.intersectionRatio);
      });

      let best = null;
      let bestRatio = 0;
      ratios.forEach(function (ratio, el) {
        if (ratio > bestRatio) {
          bestRatio = ratio;
          best = el;
        }
      });

      if (best && bestRatio > 0.12) {
        applyTheme(best);
      }
    },
    { threshold: buildThresholdList() }
  );

  sections.forEach(function (s) {
    themeObserver.observe(s);
  });

  if (sections[0]) applyTheme(sections[0]);

  const cards = document.querySelectorAll(".case-card");
  const revealObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );
  cards.forEach(function (c) {
    revealObserver.observe(c);
  });

  sections.forEach(function (section) {
    const thumbs = section.querySelectorAll(".thumb");
    const frame = section.querySelector(".media-frame");
    const placeholder = section.querySelector(".media-placeholder");

    thumbs.forEach(function (thumb) {
      thumb.addEventListener("click", function () {
        thumbs.forEach(function (t) {
          t.classList.remove("active");
        });
        thumb.classList.add("active");

        const src = thumb.dataset.img;
        if (src) {
          let img = frame.querySelector("img");
          if (!img) {
            img = document.createElement("img");
            img.alt = frame.dataset.alt || "Project screenshot";
            frame.appendChild(img);
          }
          img.src = src;
          img.classList.add("active");
        } else if (placeholder) {
          const existingImg = frame.querySelector("img");
          if (existingImg) existingImg.classList.remove("active");
          placeholder.style.display = "flex";
        }
      });
    });
  });
});

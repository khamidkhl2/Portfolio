/* ===================================================================
   Khamid Kholmatov — Portfolio v2 interactions
   Vanilla JS. Add a project = add one object to PROJECTS below.
   =================================================================== */
(function () {
  "use strict";

  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var coarse = window.matchMedia("(pointer: coarse)").matches;

  /* =========================================================
     LIGHT / DARK THEME
     ========================================================= */
  var themeToggle = document.getElementById("themeToggle");

  function updateThemeToggle() {
    if (!themeToggle) return;
    var dark = document.documentElement.dataset.theme === "dark";
    var label = dark ? "Switch to light theme" : "Switch to dark theme";
    themeToggle.setAttribute("aria-label", label);
    themeToggle.setAttribute("title", label);
    themeToggle.setAttribute("aria-pressed", String(dark));
  }

  if (themeToggle) {
    updateThemeToggle();
    themeToggle.addEventListener("click", function () {
      var next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
      document.documentElement.dataset.theme = next;
      try { localStorage.setItem("portfolio-theme", next); } catch (e) {}
      updateThemeToggle();
    });
  }

  /* =========================================================
     PROJECT DATA  ·  drives the gallery strip AND the modal
     ---------------------------------------------------------
     id        unique slug
     accent    the project's color (used for card + modal theme)
     accentSoft a light tint of that color
     example   true → shows an "Example" flag (remove these two
               when you add your own real projects)
     ========================================================= */
  var PROJECTS = [
    {
      id: "safa",
      title: "Safa Prayer",
      year: "2026",
      eyebrow: "iOS Application · Solo",
      accent: "#0d9488",
      accentSoft: "#ccfbf1",
      image: "assets/img/safa-icon.png",
      logoPreview: true,
      tagline: "A prayer companion, shipped to the App Store.",
      modalTitle: "Safa: A Calm Companion for Daily Prayer",
      description: [
        "Safa is a native iOS app I designed and developed to make daily prayer easier to follow, record, and sustain. It combines accurate prayer times, Quran reading, ayah identification, Qibla direction, personalized reminders, and prayer tracking in one calm, focused experience.",
        "A central challenge was creating motivation without making worship feel gamified or overwhelming. I built a thoughtful streak system, prayer-completion celebrations, calendar history, and five-prayer daily progress that encourage consistency while respecting the personal nature of prayer.",
        "The app was developed with SwiftUI and integrates Core Location, local notifications, speech recognition, Sign in with Apple, Google authentication, and Supabase account synchronization. It supports multiple calculation methods and Asr madhhabs, securely synchronizes profiles and prayer records across devices, and provides complete in-app account deletion.",
        "I handled the project from product concept and interface design through backend integration, App Store compliance, testing, deployment, and launch. The result is a polished, privacy-conscious product that balances practical religious tools with a modern and memorable iOS experience."
      ],
      photos: [
        {
          src: "assets/img/safa-prayer-dashboard.jpg",
          alt: "Safa daily prayer dashboard displayed on an iPhone"
        },
        {
          src: "assets/img/safa-app-store-launch.jpg",
          alt: "Safa Prayer live on the App Store"
        },
        {
          src: "assets/img/safa-ratings-review.jpg",
          alt: "Safa Prayer five-star App Store rating and user review"
        }
      ],
      highlights: [],
      tags: ["SwiftUI", "Core Location", "Local Notifications", "Speech Recognition", "Sign in with Apple", "Google Auth", "Supabase", "App Store"],
      links: [{ label: "View on App Store", href: "#", primary: true }]
    },
    {
      id: "fridgy",
      title: "Fridgy",
      year: "2026",
      eyebrow: "AI Nutrition App",
      accent: "#4d7c0f",
      accentSoft: "#ecfccb",
      image: "assets/img/fridgy-icon.png",
      logoPreview: true,
      tagline: "Point your camera at the fridge, get a meal plan.",
      modalTitle: "Fridgy: Smarter Meals from What You Have",
      description: [
        "Fridgy is a cross-platform mobile app I designed and developed to help people turn the food they already have into practical, personalized meals. Users can scan their fridge, manage ingredients, discover recipes, save favorites, and track nutrition, hydration, and daily health targets in one focused experience.",
        "A central challenge was transforming an unstructured fridge photo into something genuinely useful. I created a guided scanning and ingredient-review flow that lets users verify detected foods before receiving recipe recommendations tailored to their dietary preferences, allergies, goals, and available ingredients.",
        "The app was built with React Native and Expo, with Supabase powering authentication, database synchronization, serverless functions, and account management. It integrates Sign in with Apple, Google authentication, camera capture, AI-assisted food recognition and recipe generation, USDA food search, secure Row-Level Security policies, and complete in-app account deletion.",
        "I handled the project from product concept and interface design through application architecture, backend development, authentication, testing, and deployment preparation. The result is a polished, privacy-conscious product that reduces food waste while making everyday meal planning faster, healthier, and more personal."
      ],
      photos: [
        {
          src: "assets/img/fridgy-dashboard.jpg",
          alt: "Fridgy nutrition dashboard showing calories, macros, and daily meals"
        },
        {
          src: "assets/img/fridgy-fridge-scan.jpg",
          alt: "Fridgy fridge scan identifying thirteen ingredients from a photo"
        }
      ],
      highlights: [],
      tags: ["React Native", "Expo", "Supabase", "AI Recognition", "USDA API", "Sign in with Apple", "Google Auth", "Row-Level Security"],
      statusNote: "Fridgy is still in development and will be announced as soon as it is finished and released on the App Store.",
      links: []
    },
    {
      id: "chapter-one",
      title: "Chapter One",
      year: "2026",
      eyebrow: "Retail Brand Website · Freelance",
      accent: "#be185d",
      accentSoft: "#fce7f3",
      image: "assets/img/chapter-one-logo.png",
      logoPreview: true,
      tagline: "A multilingual storefront, shipped solo.",
      modalTitle: "Chapter One: A Boutique Storefront for a London Collection",
      description: [
        "Chapter One is a retail website I designed and developed to give a boutique cosmetic-bag brand a polished online home. It presents the collection — embroidered velvet bags imported from London — through a clean, single-page storefront that brings the product, the brand story, and a direct path to ordering together in one calm, considered experience.",
        "A central challenge was delivering a premium, boutique feel while keeping the site fast, lightweight, and easy to maintain — and doing it across three languages. I built the entire interface without a framework, designing a trilingual experience (Russian, English, and Uzbek) with seamless in-page language switching, so every visitor in the local market meets the brand in their own language without a heavier, slower build.",
        "The site is built with vanilla HTML, CSS, and JavaScript, with a fully responsive, mobile-first layout and a client-side localization system handling all three languages. It features a curated product showcase, a brand-story and mission section, and a streamlined ordering flow that routes customers straight to the brand's Telegram sales channel, all deployed under the chapterone.uz domain.",
        "I handled the project end to end — from concept and interface design through development, multilingual content, deployment, and the ongoing updates the brand needs as it grows. As sole developer, I continue to maintain and expand the site. The result is a fast, trilingual storefront that gives a small, independent brand a genuinely professional presence online."
      ],
      photos: [
        {
          src: "assets/img/chapter-one-storefront.jpg",
          alt: "Chapter One trilingual boutique storefront homepage"
        },
        {
          src: "assets/img/chapter-one-product.jpg",
          alt: "Embroidered navy velvet Chapter One cosmetic bag"
        },
        {
          src: "assets/img/chapter-one-lifestyle.jpg",
          alt: "Floral embroidered Chapter One cosmetic bag photographed outdoors"
        }
      ],
      highlights: [],
      tags: ["HTML", "CSS", "JavaScript", "Localization", "Responsive Design", "Vercel"],
      links: [{ label: "Visit Chapter One", href: "https://www.chapterone.uz/", primary: true }]
    },
    {
      id: "chat-jpt",
      title: "Chat JPT",
      year: "2026",
      eyebrow: "Private AI Assistant · Personal Project",
      accent: "#926de4",
      accentSoft: "#eee7ff",
      image: "assets/img/chat-jpt-icon.png",
      logoPreview: true,
      tagline: "An inside joke turned polished personal assistant.",
      modalTitle: "Chat JPT: A Personal AI Assistant",
      description: [
        "Chat JPT started as a joke between friends: a playful idea to create a personal AI assistant for my friend. I decided to give it a serious try, and it turned into a surprisingly polished and genuinely interesting product.",
        "The assistant helps with rewriting messages, planning, advice, motivation, and organizing ideas. It supports English and Russian, streams responses through the Groq API, stores chats locally, and includes focused per-chat memory, multiple conversations, and a private password gate.",
        "I designed it as a mobile-first single-page app using HTML, CSS, and vanilla JavaScript. The result turned out much better than expected: a fun inside joke transformed into a stylish, functional assistant built specifically for personal use."
      ],
      photos: [
        {
          src: "assets/img/chat-jpt-landing.jpg",
          alt: "Chat JPT landing page introducing Jamola's private personal assistant"
        },
        {
          src: "assets/img/chat-jpt-chat.jpg",
          alt: "Chat JPT mobile chat interface with writing, planning, and advice prompts"
        }
      ],
      highlights: [],
      tags: ["HTML", "CSS", "JavaScript", "Groq API", "Streaming", "Local Storage", "Bilingual UI"],
      accessNote: "mmrklvvJPT",
      links: [{ label: "Visit Chat JPT", href: "https://chatjpt-gray.vercel.app/", primary: true }]
    }
  ];

  var ARROW =
    '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17L17 7M9 7h8v8"/></svg>';

  /* ---- tiny helpers ---- */
  function el(id) { return document.getElementById(id); }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) {
    return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
  }); }

  /* =========================================================
     CERTIFICATE MARQUEE + VIEWER
     ========================================================= */
  var CERTIFICATES = [
    {
      title: "Speak, Learn & Connect Volunteer",
      issuer: "AUT · Global Shapers Community",
      image: "assets/img/certificates/speak-learn-connect.jpg",
      alt: "Certificate of appreciation for volunteering in the Speak, Learn and Connect program"
    },
    {
      title: "Volunteering & Community Engagement",
      issuer: "American University of Technology",
      image: "assets/img/certificates/aut-appreciation.jpg",
      alt: "AUT certificate of appreciation for volunteering and community engagement",
      portrait: true
    },
    {
      title: "Ramadan Community Service",
      issuer: "TAWFIQ Charity",
      image: "assets/img/certificates/tawfiq-appreciation.jpg",
      alt: "TAWFIQ certificate of appreciation for distributing Iftars during Ramadan"
    },
    {
      title: "Social Media Management",
      issuer: "Leader School",
      image: "assets/img/certificates/social-media-management.jpg",
      alt: "Certificate of completion in Social Media Management"
    },
    {
      title: "Bodybuilding & Fitness Seminar",
      issuer: "Kevin Levrone Seminar · Tashkent",
      image: "assets/img/certificates/bodybuilding-fitness.jpg",
      alt: "Certificate for participating in a Bodybuilding and Fitness seminar"
    },
    {
      title: "International English Olympiad",
      issuer: "Amity University Tashkent",
      image: "assets/img/certificates/english-olympiad.jpg",
      alt: "Certificate of participation in the first International English Olympiad"
    }
  ];

  var certificateTrack = el("certificateTrack");
  var certificateScroller = el("certificateScroller");
  var certificateViewer = el("certificateViewer");
  var certificateViewerClose = el("certificateViewerClose");
  var lastCertificateFocused = null;

  function renderCertificateSet(hidden) {
    return '<div class="certificate-marquee__set"' + (hidden ? ' aria-hidden="true"' : "") + ">" +
      CERTIFICATES.map(function (certificate, index) {
        return '<button class="certificate-card' + (certificate.portrait ? " certificate-card--portrait" : "") +
          '" type="button" data-certificate-index="' + index + '"' + (hidden ? ' tabindex="-1"' : "") + ">" +
          '<span class="certificate-card__media"><img src="' + esc(certificate.image) + '" alt="' +
          (hidden ? "" : esc(certificate.alt)) + '" loading="lazy"></span>' +
          '<span class="certificate-card__caption"><strong>' + esc(certificate.title) +
          "</strong><span>" + esc(certificate.issuer) + "</span></span></button>";
      }).join("") +
    "</div>";
  }

  if (certificateTrack) {
    certificateTrack.innerHTML = renderCertificateSet(false) + renderCertificateSet(true);
  }

  function openCertificateViewer(index, trigger) {
    var certificate = CERTIFICATES[index];
    if (!certificate || !certificateViewer) return;
    lastCertificateFocused = trigger || null;
    el("certificateViewerImage").src = certificate.image;
    el("certificateViewerImage").alt = certificate.alt;
    el("certificateViewerIssuer").textContent = certificate.issuer;
    el("certificateViewerTitle").textContent = certificate.title;
    document.body.style.overflow = "hidden";
    certificateViewer.classList.add("is-open");
    certificateViewer.setAttribute("aria-hidden", "false");
    certificateViewerClose.focus();
  }

  function closeCertificateViewer() {
    if (!certificateViewer) return;
    certificateViewer.classList.remove("is-open");
    certificateViewer.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    if (lastCertificateFocused) lastCertificateFocused.focus();
  }

  if (certificateTrack) {
    certificateTrack.addEventListener("click", function (event) {
      var card = event.target.closest("[data-certificate-index]");
      if (!card) return;
      openCertificateViewer(Number(card.getAttribute("data-certificate-index")), card);
    });
  }

  if (certificateScroller) {
    var certificateDragging = false;
    var certificateMoved = false;
    var certificateStartX = 0;
    var certificateStartScroll = 0;

    certificateScroller.addEventListener("wheel", function (event) {
      if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return;
      var maxScroll = certificateScroller.scrollWidth - certificateScroller.clientWidth;
      var movingBack = event.deltaY < 0;
      var atStart = certificateScroller.scrollLeft <= 1;
      var atEnd = certificateScroller.scrollLeft >= maxScroll - 1;
      if ((movingBack && atStart) || (!movingBack && atEnd)) return;
      event.preventDefault();
      certificateScroller.scrollLeft += event.deltaY;
    }, { passive: false });

    certificateScroller.addEventListener("pointerdown", function (event) {
      if (event.button !== undefined && event.button !== 0) return;
      certificateDragging = true;
      certificateMoved = false;
      certificateStartX = event.clientX;
      certificateStartScroll = certificateScroller.scrollLeft;
      certificateScroller.classList.add("is-dragging");
      certificateScroller.setPointerCapture(event.pointerId);
    });

    certificateScroller.addEventListener("pointermove", function (event) {
      if (!certificateDragging) return;
      var delta = event.clientX - certificateStartX;
      if (Math.abs(delta) > 5) certificateMoved = true;
      certificateScroller.scrollLeft = certificateStartScroll - delta;
    });

    function endCertificateDrag(event) {
      if (!certificateDragging) return;
      certificateDragging = false;
      certificateScroller.classList.remove("is-dragging");
      try { certificateScroller.releasePointerCapture(event.pointerId); } catch (error) {}
    }

    certificateScroller.addEventListener("pointerup", endCertificateDrag);
    certificateScroller.addEventListener("pointercancel", endCertificateDrag);
    certificateScroller.addEventListener("click", function (event) {
      if (!certificateMoved) return;
      event.preventDefault();
      event.stopPropagation();
      certificateMoved = false;
    }, true);
  }

  if (certificateViewer) {
    certificateViewer.addEventListener("click", function (event) {
      if (event.target.closest("[data-certificate-close]")) closeCertificateViewer();
    });
  }

  document.addEventListener("keydown", function (event) {
    if (!certificateViewer || !certificateViewer.classList.contains("is-open")) return;
    if (event.key === "Escape") closeCertificateViewer();
    if (event.key === "Tab") {
      event.preventDefault();
      certificateViewerClose.focus();
    }
  });

  /* =========================================================
     RENDER GALLERY STRIP
     ========================================================= */
  var strip = el("strip");
  PROJECTS.forEach(function (p, i) {
    var li = document.createElement("li");
    li.innerHTML =
      '<button class="card" data-id="' + p.id + '" style="--accent:' + p.accent +
        ";--accent-soft:" + p.accentSoft + '" aria-label="' + esc(p.title) + ' — open details">' +
        '<div class="card__media' + (p.logoPreview ? ' card__media--logo' : '') + '">' +
          '<span class="card__badge">' + (i < 9 ? "0" : "") + (i + 1) + "</span>" +
          (p.example ? '<span class="card__flag">Example</span>' : "") +
          '<img src="' + p.image + '" alt="' + esc(p.title) + '" loading="lazy">' +
          '<span class="card__view">View ' + ARROW + "</span>" +
        "</div>" +
        '<div class="card__meta">' +
          '<h3 class="card__title">' + esc(p.title) + "</h3>" +
          '<p class="card__tagline">' + esc(p.tagline) + "</p>" +
          '<div class="card__tags">' +
            p.tags.slice(0, 3).map(function (t) { return "<span>" + esc(t) + "</span>"; }).join("") +
          "</div>" +
        "</div>" +
      "</button>";
    strip.appendChild(li);
  });

  /* =========================================================
     STRIP CONTROLS  ·  drag, arrows, progress, active color
     ========================================================= */
  var bar = el("stripBar");
  var prevBtn = el("prevBtn");
  var nextBtn = el("nextBtn");
  var work = document.querySelector(".work");
  var root = document.documentElement;
  var activeProjectAccent = PROJECTS[0].accent;
  var pointerInsideWork = false;

  function updateCursorAccent() {
    if (pointerInsideWork) root.style.setProperty("--cursor", activeProjectAccent);
    else root.style.removeProperty("--cursor");
  }

  function setCursorScope(target) {
    var nextInsideWork = !!(work && target && target.closest && target.closest(".work"));
    if (nextInsideWork === pointerInsideWork) return;
    pointerInsideWork = nextInsideWork;
    updateCursorAccent();
  }

  function step() {
    var first = strip.querySelector("li");
    if (!first) return strip.clientWidth * 0.8;
    var gap = parseFloat(getComputedStyle(strip).columnGap || getComputedStyle(strip).gap) || 24;
    return first.offsetWidth + gap;
  }

  function updateStrip() {
    var max = strip.scrollWidth - strip.clientWidth;
    var p = max > 0 ? strip.scrollLeft / max : 0;
    var ratio = strip.clientWidth / strip.scrollWidth;
    bar.style.width = ratio * 100 + "%";
    bar.style.transform = "translateX(" + (p * (1 - ratio) / ratio) * 100 + "%)";

    if (prevBtn) prevBtn.disabled = strip.scrollLeft <= 2;
    if (nextBtn) nextBtn.disabled = strip.scrollLeft >= max - 2;

    var idx = Math.min(PROJECTS.length - 1, Math.max(0, Math.round(strip.scrollLeft / step())));
    Array.prototype.forEach.call(strip.children, function (item, itemIndex) {
      item.classList.toggle("is-active", itemIndex === idx);
      item.classList.toggle("is-before", itemIndex < idx);
      item.classList.toggle("is-after", itemIndex > idx);
      var card = item.querySelector(".card");
      if (card) {
        if (itemIndex === idx) card.setAttribute("aria-current", "true");
        else card.removeAttribute("aria-current");
      }
    });
    activeProjectAccent = PROJECTS[idx].accent;
    root.style.setProperty("--work-accent", activeProjectAccent);
    updateCursorAccent();
    if (work) work.style.setProperty("--section-accent", activeProjectAccent);
  }

  strip.addEventListener("scroll", function () {
    window.requestAnimationFrame(updateStrip);
  }, { passive: true });
  window.addEventListener("resize", updateStrip);

  if (prevBtn) prevBtn.addEventListener("click", function () {
    strip.scrollBy({ left: -step(), behavior: "smooth" });
  });
  if (nextBtn) nextBtn.addEventListener("click", function () {
    strip.scrollBy({ left: step(), behavior: "smooth" });
  });

  /* ---- pointer drag-to-scroll ---- */
  var dragging = false, dragCaptured = false, activePointerId = null;
  var startX = 0, startScroll = 0, moved = 0;
  strip.addEventListener("pointerdown", function (e) {
    if (e.button !== undefined && e.button !== 0) return;
    dragging = true;
    dragCaptured = false;
    activePointerId = e.pointerId;
    moved = 0;
    startX = e.clientX; startScroll = strip.scrollLeft;
  });
  strip.addEventListener("pointermove", function (e) {
    if (!dragging || e.pointerId !== activePointerId) return;
    var dx = e.clientX - startX;
    moved = Math.max(moved, Math.abs(dx));
    if (moved > 4) {
      if (!dragCaptured) {
        dragCaptured = true;
        strip.setPointerCapture(e.pointerId);
        strip.classList.add("is-dragging");
      }
      strip.scrollLeft = startScroll - dx;
    }
  });
  function endDrag(e) {
    if (!dragging || e.pointerId !== activePointerId) return;
    dragging = false;
    activePointerId = null;
    if (dragCaptured) {
      try { strip.releasePointerCapture(e.pointerId); } catch (err) {}
    }
    setTimeout(function () { strip.classList.remove("is-dragging"); }, 0);
  }
  strip.addEventListener("pointerup", endDrag);
  strip.addEventListener("pointercancel", endDrag);

  /* ---- every part of a card opens the modal; real drags stay suppressed ---- */
  strip.querySelectorAll(".card").forEach(function (card) {
    card.addEventListener("click", function (e) {
      if (moved > 6) {
        e.preventDefault();
        return;
      }
      openModal(card.getAttribute("data-id"), card);
    });
  });

  updateStrip();
  window.requestAnimationFrame(function () {
    if (PROJECTS.length > 1 && strip.scrollLeft < 2) {
      strip.scrollLeft = step();
      updateStrip();
    }
  });

  /* =========================================================
     PROJECT MODAL
     ========================================================= */
  var modal = el("modal");
  var panel = modal.querySelector(".modal__panel");
  var modalMedia = document.querySelector(".modal__media");
  var modalGallery = el("modalGallery");
  var highlightsWrap = el("modalHighlightsWrap");
  var lastFocused = null;

  function openModal(id, trigger) {
    var p = PROJECTS.filter(function (x) { return x.id === id; })[0];
    if (!p) return;
    lastFocused = trigger || null;

    panel.style.setProperty("--accent", p.accent);
    panel.style.setProperty("--accent-soft", p.accentSoft);
    panel.classList.toggle("modal__panel--case-study", Boolean(p.description));

    el("modalImg").src = p.image;
    el("modalImg").alt = p.title;
    el("modalImg").hidden = Boolean(p.photos);
    modalGallery.hidden = !p.photos;
    modalGallery.style.setProperty("--gallery-count", Math.min((p.photos || []).length, 3));
    modalGallery.innerHTML = (p.photos || []).map(function (photo) {
      return '<figure class="modal__photo-slot modal__photo-slot--image">' +
        '<img src="' + esc(photo.src) + '" alt="' + esc(photo.alt) + '">' +
      '</figure>';
    }).join("");
    modalMedia.classList.toggle("has-gallery", Boolean(p.photos));
    el("modalYear").textContent = p.year;
    el("modalEyebrow").textContent = p.eyebrow;
    el("modalTitle").textContent = p.modalTitle || p.title;
    el("modalSummary").innerHTML = p.description
      ? p.description.map(function (paragraph) {
          return "<p>" + esc(paragraph) + "</p>";
        }).join("")
      : "<p>" + esc(p.summary) + "</p>";
    highlightsWrap.hidden = !p.highlights.length;
    el("modalHighlights").innerHTML = p.highlights
      .map(function (h) { return "<li>" + esc(h) + "</li>"; }).join("");
    el("modalTags").innerHTML = p.tags
      .map(function (t) { return "<span>" + esc(t) + "</span>"; }).join("");
    el("modalAccess").hidden = !p.accessNote;
    el("modalPassword").textContent = p.accessNote || "";
    el("modalLinks").innerHTML =
      (p.statusNote ? '<p class="modal__status">' + esc(p.statusNote) + "</p>" : "") +
      (p.links || [])
      .map(function (l) {
        return '<a class="' + (l.primary ? "primary" : "secondary") + '" href="' + l.href +
          '"' + (l.href.charAt(0) === "#" ? "" : ' target="_blank" rel="noopener"') + ">" + esc(l.label) + "</a>";
      }).join("");

    var sw = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.paddingRight = sw + "px";
    document.body.style.overflow = "hidden";
    panel.scrollTop = 0;
    panel.scrollLeft = 0;
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    el("modalClose").focus();
  }

  function closeModal() {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    document.body.style.paddingRight = "";
    if (lastFocused) lastFocused.focus();
  }

  modal.addEventListener("click", function (e) {
    if (e.target.closest("[data-close]")) closeModal();
  });
  document.addEventListener("keydown", function (e) {
    if (!modal.classList.contains("is-open")) return;
    if (e.key === "Escape") { closeModal(); return; }
    if (e.key === "Tab") {
      var f = panel.querySelectorAll('a[href], button:not([disabled])');
      if (!f.length) return;
      var first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });

  /* =========================================================
     VOLUNTEERING ORGANIZATION MODAL
     ========================================================= */
  var VOLUNTEER_GROUPS = {
    aut: {
      logo: "assets/img/aut-volunteering-logo.jpg",
      logoAlt: "AUT Volunteering and Charity Club logo",
      title: "AUT Volunteering & Charity Club",
      role: "Founding member · Active volunteer",
      accent: "#28785b",
      intro: "I helped establish the club at American University of Technology in October 2025. Our work spans university events, external event support, community care, fundraising, and large-scale aid campaigns.",
      channel: "https://t.me/aut_volunteers",
      channelLabel: "Open Telegram channel",
      activities: [
        {
          accent: "#7c6ee6",
          type: "AUT · University events",
          title: "Open Days, festivals & student events",
          description: "Planning, coordination, logistics, and on-the-day support for Open Door Days, Autumn Fest, the Winter Party, and other university activities.",
          photos: [
            { src: "assets/img/aut-open-door-day-1.jpg", alt: "AUT Open Door Day volunteering activity" },
            { src: "assets/img/aut-open-door-day-2.jpg", alt: "AUT volunteers together during Open Door Day" }
          ]
        },
        {
          accent: "#2f9f91",
          type: "AUT · External support",
          title: "iTicket football event operations",
          description: "Worked with the volunteer team to support iTicket Uzbekistan with event operations, attendee assistance, and practical coordination.",
          photos: [
            { src: "assets/img/aut-football-event-1.jpg", alt: "AUT volunteers supporting football event operations" },
            { src: "assets/img/aut-football-event-2.jpg", alt: "Volunteer team assisting during the iTicket football event" }
          ]
        },
        {
          accent: "#d46791",
          type: "AUT · Community care",
          title: "Nursing home visit",
          description: "Delivered food and supplies, spent time speaking with elderly residents, and offered meaningful social interaction and support.",
          photos: [
            { src: "assets/img/aut-nursing-home-1.jpg", alt: "AUT volunteers visiting and supporting nursing home residents" },
            { src: "assets/img/aut-nursing-home-2.jpg", alt: "Community visit organized by AUT Volunteering and Charity Club" }
          ]
        },
        {
          accent: "#e09a3e",
          type: "AUT · Ramadan campaign",
          title: "Large-scale food & water distribution",
          description: "Helped prepare and distribute approximately 2,000 Ramadan packages, primarily containing dates and water.",
          stat: "≈ 2,000",
          statLabel: "packages distributed",
          photos: [
            { src: "assets/img/aut-ramadan-1.jpg", alt: "AUT Ramadan food and water package distribution" },
            { src: "assets/img/aut-ramadan-2.jpg", alt: "AUT volunteers preparing and distributing Ramadan packages" }
          ]
        },
        {
          accent: "#5f8cd8",
          type: "AUT · Fundraising",
          title: "Community family-support campaign",
          description: "Raised funds through social outreach and community donations, providing 12 families with approximately 650,000 UZS each in food and essential supplies.",
          stat: "12 families",
          statLabel: "supported with essentials",
          photos: [
            { src: "assets/img/aut-family-support-1.jpg", alt: "Food and essential supplies prepared for families in need" },
            { src: "assets/img/aut-family-support-2.jpg", alt: "AUT family-support charity campaign supplies" }
          ]
        }
      ]
    },
    tawfiq: {
      logo: "assets/img/tawfiq-charity-logo.jpg",
      logoAlt: "TAWFIQ Charity logo",
      title: "TAWFIQ Charity",
      role: "Charity volunteer · Recurring Ramadan campaigns",
      accent: "#126187",
      intro: "My direct involvement focuses on annual Ramadan campaigns organized by a friend-founded charity, preparing and distributing dates and water to people in need.",
      channel: "https://t.me/tawfiqcharity",
      channelLabel: "Open Telegram channel",
      activities: [
        {
          accent: "#42a66c",
          type: "TAWFIQ · Annual initiative",
          title: "Recurring Ramadan distributions",
          description: "Participated in multiple annual campaigns preparing and distributing dates and water to community members and individuals who require support.",
          photos: [
            {
              src: "assets/img/tawfiq-ramadan-1.jpg",
              alt: "TAWFIQ volunteers carrying water and date packages for Ramadan distribution"
            },
            {
              src: "assets/img/tawfiq-ramadan-2.jpg",
              alt: "TAWFIQ volunteer distributing Ramadan packages to community members"
            }
          ]
        }
      ]
    },
    slc: {
      logo: "assets/img/global-shapers-logo.jpg",
      logoAlt: "Global Shapers Community logo",
      title: "Speak, Learn & Connect",
      role: "Youth development · Program volunteer",
      accent: "#9563c0",
      intro: "A youth-development, communication, and community-engagement program connected with Global Shapers Community and activities associated with the World Economic Forum network.",
      channel: "https://www.globalshapers.org/",
      channelLabel: "Open Global Shapers website",
      activities: [
        {
          accent: "#9b68c6",
          type: "Youth development",
          title: "Speak, Learn & Connect volunteer program",
          description: "Built practical experience in teamwork, public communication, leadership, and community participation through a youth-focused volunteer program.",
          photos: [
            { src: "assets/img/speak-learn-connect-1.jpg", alt: "Speak, Learn and Connect youth program activity" },
            { src: "assets/img/speak-learn-connect-2.jpg", alt: "Volunteer participation in the Speak, Learn and Connect program" }
          ]
        }
      ]
    }
  };

  var communityModal = el("communityModal");
  var communityPanel = communityModal ? communityModal.querySelector(".community-modal__panel") : null;
  var communityClose = el("communityModalClose");
  var communityActivities = el("communityModalActivities");
  var communityChannel = el("communityModalChannel");
  var lastCommunityFocused = null;
  var PHOTO_ICON = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5h16v14H4zM4 15l4-4 4 4 3-3 5 5M15.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"/></svg>';

  function renderVolunteerActivity(activity) {
    var visual;
    if (activity.photos && activity.photos.length) {
      visual = '<div class="volunteer-event__photos">' +
        activity.photos.map(function (photo) {
          return '<img src="' + esc(photo.src) + '" alt="' + esc(photo.alt) + '" loading="lazy">';
        }).join("") +
      "</div>";
      if (activity.stat) {
        visual += '<div class="volunteer-event__stat"><strong>' + esc(activity.stat) +
          "</strong><span>" + esc(activity.statLabel) + "</span></div>";
      }
    } else {
      visual = '<div class="photo-placeholder">' + (activity.stat
        ? "<strong>" + esc(activity.stat) + "</strong><span>" + esc(activity.statLabel) + "</span>"
        : PHOTO_ICON + "<span>" + esc(activity.photoLabel) + "</span>") + "</div>";
    }

    return '<article class="volunteer-event' + (activity.stat ? ' volunteer-event--impact' : '') +
      (activity.photos ? ' volunteer-event--has-photos' : '') +
      '" style="--event-accent:' + activity.accent + '">' +
        '<figure class="volunteer-event__media" aria-label="Photo space for ' + esc(activity.title) + '">' +
          visual +
        "</figure>" +
        '<div class="volunteer-event__body">' +
          '<span class="volunteer-event__type">' + esc(activity.type) + "</span>" +
          "<h4>" + esc(activity.title) + "</h4>" +
          "<p>" + esc(activity.description) + "</p>" +
        "</div>" +
      "</article>";
  }

  function openCommunityModal(id, trigger) {
    var group = VOLUNTEER_GROUPS[id];
    if (!group || !communityModal) return;
    lastCommunityFocused = trigger || null;

    communityPanel.style.setProperty("--community-accent", group.accent);
    el("communityModalMark").innerHTML = '<img src="' + esc(group.logo) + '" alt="' + esc(group.logoAlt) + '">';
    el("communityModalRole").textContent = group.role;
    el("communityModalTitle").textContent = group.title;
    el("communityModalIntro").textContent = group.intro;
    communityActivities.innerHTML = group.activities.map(renderVolunteerActivity).join("");
    communityChannel.hidden = !group.channel;
    communityChannel.href = group.channel || "#";
    communityChannel.innerHTML = esc(group.channelLabel || "Open organization website") + ' <span aria-hidden="true">↗</span>';

    var sw = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.paddingRight = sw + "px";
    document.body.style.overflow = "hidden";
    communityPanel.scrollTop = 0;
    communityPanel.scrollLeft = 0;
    communityModal.classList.add("is-open");
    communityModal.setAttribute("aria-hidden", "false");
    communityClose.focus();
  }

  function closeCommunityModal() {
    if (!communityModal) return;
    communityModal.classList.remove("is-open");
    communityModal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    document.body.style.paddingRight = "";
    if (lastCommunityFocused) lastCommunityFocused.focus();
  }

  document.querySelectorAll("[data-volunteer-org]").forEach(function (button) {
    button.addEventListener("click", function () {
      openCommunityModal(button.getAttribute("data-volunteer-org"), button);
    });
  });

  if (communityModal) {
    communityModal.addEventListener("click", function (e) {
      if (e.target.closest("[data-community-close]")) closeCommunityModal();
    });
    document.addEventListener("keydown", function (e) {
      if (!communityModal.classList.contains("is-open")) return;
      if (e.key === "Escape") { closeCommunityModal(); return; }
      if (e.key === "Tab") {
        var f = communityPanel.querySelectorAll('a[href]:not([hidden]), button:not([disabled])');
        if (!f.length) return;
        var first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    });
  }

  /* =========================================================
     CURSOR GLOW
     ========================================================= */
  var heroScene = document.querySelector(".hero__bg");
  var ambientScene = document.querySelector(".ambient-bg");
  if (!reduce && !coarse) {
    var glow = el("cursorGlow");
    var gx = window.innerWidth / 2, gy = window.innerHeight / 2;
    var tx = gx, ty = gy, raf = null;
    function loop() {
      gx += (tx - gx) * 0.16;
      gy += (ty - gy) * 0.16;
      glow.style.transform = "translate(" + gx + "px," + gy + "px)";
      if (heroScene) {
        heroScene.style.setProperty("--hero-x", (gx / window.innerWidth - 0.5) * 24 + "px");
        heroScene.style.setProperty("--hero-y", (gy / window.innerHeight - 0.5) * 18 + "px");
      }
      if (ambientScene) {
        ambientScene.style.setProperty("--ambient-x", (gx / window.innerWidth - 0.5) * 10 + "px");
        ambientScene.style.setProperty("--ambient-y", (gy / window.innerHeight - 0.5) * 8 + "px");
      }
      raf = window.requestAnimationFrame(loop);
    }
    window.addEventListener("pointermove", function (e) {
      tx = e.clientX; ty = e.clientY;
      setCursorScope(e.target);
      if (!document.body.classList.contains("cursor-on")) document.body.classList.add("cursor-on");
      if (!raf) loop();
    });
    document.addEventListener("mouseleave", function () { document.body.classList.remove("cursor-on"); });
  }

  /* =========================================================
     MAGNETIC ELEMENTS
     ========================================================= */
  if (!reduce && !coarse) {
    document.querySelectorAll("[data-magnetic]").forEach(function (m) {
      m.addEventListener("pointermove", function (e) {
        var r = m.getBoundingClientRect();
        var x = e.clientX - (r.left + r.width / 2);
        var y = e.clientY - (r.top + r.height / 2);
        m.style.transform = "translate(" + x * 0.25 + "px," + y * 0.35 + "px)";
      });
      m.addEventListener("pointerleave", function () { m.style.transform = ""; });
    });
  }

  /* =========================================================
     CARD 3D TILT + IMAGE PARALLAX
     ========================================================= */
  if (!reduce && !coarse) {
    strip.addEventListener("pointermove", function (e) {
      if (dragging) return;
      var card = e.target.closest(".card");
      if (!card) return;
      var media = card.querySelector(".card__media");
      var img = card.querySelector("img");
      var r = media.getBoundingClientRect();
      var px = (e.clientX - r.left) / r.width - 0.5;
      var py = (e.clientY - r.top) / r.height - 0.5;
      media.style.setProperty("--ry", px * 8 + "deg");
      media.style.setProperty("--rx", -py * 8 + "deg");
      if (img) {
        img.style.setProperty("--px", -px * 14 + "px");
        img.style.setProperty("--py", -py * 14 + "px");
      }
    });
    strip.addEventListener("pointerleave", function () {
      strip.querySelectorAll(".card__media").forEach(function (m) {
        m.style.setProperty("--rx", "0deg"); m.style.setProperty("--ry", "0deg");
      });
      strip.querySelectorAll(".card img").forEach(function (i) {
        i.style.setProperty("--px", "0px"); i.style.setProperty("--py", "0px");
      });
    });
  }

  /* =========================================================
     NAV  ·  scrolled state, hide-on-scroll-down, scrollspy
     ========================================================= */
  var nav = el("nav");
  var navLinks = Array.prototype.slice.call(document.querySelectorAll('.nav__links a[href^="#"]'));
  var workTop = function () { var w = el("work"); return w ? w.offsetTop : 600; };
  var lastY = window.scrollY;
  function onScroll() {
    var y = window.scrollY;
    nav.classList.toggle("is-scrolled", y > 24);
    if (y > 400 && y > lastY + 4) nav.classList.add("is-hidden");
    else if (y < lastY - 4) nav.classList.remove("is-hidden");
    lastY = y;
    if (heroScene && !reduce) {
      heroScene.style.setProperty("--hero-scroll", Math.min(y, window.innerHeight) * 0.08 + "px");
    }
    if (ambientScene && !reduce) {
      ambientScene.style.setProperty("--ambient-scroll", Math.max(-14, y * -0.004) + "px");
    }
    // No section active while over the hero
    if (y < workTop() - 200) navLinks.forEach(function (a) { a.classList.remove("is-active"); });
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  if ("IntersectionObserver" in window) {
    var links = navLinks;
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        var id = "#" + en.target.id;
        links.forEach(function (a) { a.classList.toggle("is-active", a.getAttribute("href") === id); });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    ["work", "about", "contact"].forEach(function (id) {
      var s = el(id); if (s) spy.observe(s);
    });
  }

  /* =========================================================
     SCROLL REVEAL (+ stagger)
     ========================================================= */
  var revealEls = document.querySelectorAll(".reveal, .reveal--stagger");
  if (!("IntersectionObserver" in window) || reduce) {
    revealEls.forEach(function (e) { e.classList.add("is-visible"); });
  } else {
    function setRevealSide(target, fromTop) {
      target.classList.toggle("is-reveal-from-top", fromTop);
      target.classList.toggle("is-reveal-from-bottom", !fromTop);
    }

    // Keep observing after the first reveal. Leaving resets the element toward
    // the edge it crossed, so returning from either direction replays the motion.
    var ro = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        var t = en.target;
        var staggered = t.classList.contains("reveal--stagger");
        var fromTop = en.boundingClientRect.top < window.innerHeight / 2;

        setRevealSide(t, fromTop);

        if (en.isIntersecting) {
          if (staggered) {
            Array.prototype.forEach.call(t.children, function (c, i) {
              c.style.transitionDelay = i * 0.06 + "s";
            });
          }
          t.classList.add("is-visible");
        } else {
          if (staggered) {
            Array.prototype.forEach.call(t.children, function (c) {
              c.style.transitionDelay = "0s";
            });
          }
          t.classList.remove("is-visible");
        }
      });
    }, { threshold: 0.12, rootMargin: "-8% 0px -8% 0px" });

    revealEls.forEach(function (e) {
      setRevealSide(e, e.getBoundingClientRect().top < window.innerHeight / 2);
      ro.observe(e);
    });
  }

  /* ---- footer year ---- */
  var yearEl = el("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();

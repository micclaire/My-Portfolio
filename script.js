/* ============================================
   PORTFOLIO JS — All Interactions & Animations
   ============================================ */

// ─── 1. LOADER ─────────────────────────────────────────
// Hides the loading screen once the page is ready
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  // Wait a tiny bit so the fill animation finishes
  setTimeout(() => {
    loader.classList.add("hidden");
  }, 1900);
});


// ─── 2. CUSTOM CURSOR ──────────────────────────────────
// Follows the mouse for a fun, branded cursor experience
const cursor = document.getElementById("cursor");
const cursorTrail = document.getElementById("cursorTrail");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
  // Trail lags slightly behind for a cool effect
  setTimeout(() => {
    cursorTrail.style.left = e.clientX + "px";
    cursorTrail.style.top = e.clientY + "px";
  }, 80);
});

// Enlarge cursor when hovering links/buttons
document.querySelectorAll("a, button, .project-card, .skill-pill").forEach((el) => {
  el.addEventListener("mouseenter", () => {
    cursor.style.transform = "translate(-50%, -50%) scale(2.5)";
    cursorTrail.style.transform = "translate(-50%, -50%) scale(1.5)";
  });
  el.addEventListener("mouseleave", () => {
    cursor.style.transform = "translate(-50%, -50%) scale(1)";
    cursorTrail.style.transform = "translate(-50%, -50%) scale(1)";
  });
});


// ─── 3. NAVBAR ─────────────────────────────────────────
// Adds a frosted-glass effect when user scrolls down
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 40);
  updateActiveNavLink(); // also updates active nav link
});


// ─── 4. HAMBURGER MENU ─────────────────────────────────
// Toggles the mobile nav open/close
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  navLinks.classList.toggle("open");
});

// Close menu when a link is clicked (mobile UX)
navLinks.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("open");
    navLinks.classList.remove("open");
  });
});


// ─── 5. ACTIVE NAV LINK ────────────────────────────────
// Highlights the nav link for the currently visible section
function updateActiveNavLink() {
  const sections = document.querySelectorAll("section[id]");
  const navLinkEls = document.querySelectorAll(".nav-link");
  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinkEls.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("active");
    }
  });
}


// ─── 6. DARK MODE TOGGLE ───────────────────────────────
const themeToggle = document.getElementById("themeToggle");
const themeIcon = themeToggle.querySelector(".theme-icon");
const html = document.documentElement;
 
// SVG icons for sun and moon
const ICONS = {
  sun: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="4"/>
    <line x1="12" y1="2"  x2="12" y2="5"/>
    <line x1="12" y1="19" x2="12" y2="22"/>
    <line x1="4.22" y1="4.22"  x2="6.34" y2="6.34"/>
    <line x1="17.66" y1="17.66" x2="19.78" y2="19.78"/>
    <line x1="2"  y1="12" x2="5"  y2="12"/>
    <line x1="19" y1="12" x2="22" y2="12"/>
    <line x1="4.22" y1="19.78" x2="6.34" y2="17.66"/>
    <line x1="17.66" y1="6.34" x2="19.78" y2="4.22"/>
  </svg>`,
  moon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
  </svg>`,
};
 
// Load saved preference from localStorage — defaults to dark
const savedTheme = localStorage.getItem("theme") || "dark";
html.setAttribute("data-theme", savedTheme);
themeIcon.innerHTML = savedTheme === "dark" ? ICONS.sun : ICONS.moon;
 
themeToggle.addEventListener("click", () => {
  const current = html.getAttribute("data-theme");
  const next = current === "dark" ? "light" : "dark";
  html.setAttribute("data-theme", next);
  themeIcon.innerHTML = next === "dark" ? ICONS.sun : ICONS.moon;
  localStorage.setItem("theme", next); // remember preference
});


// ─── 7. PORTFOLIO FILTER ───────────────────────────────
// Shows/hides projects based on the selected category
const filterBtns = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Update active button
    filterBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.getAttribute("data-filter");

    projectCards.forEach((card) => {
      const category = card.getAttribute("data-category");
      if (filter === "all" || category === filter) {
        card.classList.remove("hidden");
        // Animate back in
        card.style.animation = "none";
        card.offsetHeight; // reflow trick to restart animation
        card.style.animation = "fadeUp 0.4s ease forwards";
      } else {
        card.classList.add("hidden");
      }
    });
  });
});


// ─── 8. SCROLL REVEAL ANIMATIONS ──────────────────────
// Elements with class "reveal" or "reveal-stagger" animate in
// when they enter the viewport — no library needed!
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        // Once visible, stop observing (no repeated triggers)
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 } // triggers when 12% of element is visible
);

// Apply to all reveal elements
document.querySelectorAll(".reveal, .reveal-stagger").forEach((el) => {
  revealObserver.observe(el);
});

// Also observe individual cards in the portfolio grid
document.querySelectorAll(".project-card, .stat-card, .about-text, .about-image-wrap").forEach((el) => {
  el.classList.add("reveal");
  revealObserver.observe(el);
});

document.querySelectorAll(".contact-left, .contact-form").forEach((el) => {
  el.classList.add("reveal");
  revealObserver.observe(el);
});


// ─── 9. CONTACT FORM ──────────────────────────────────
// Handles the form submit with a friendly success message.
// To actually send emails, hook this up to Formspree or EmailJS!
const contactForm = document.getElementById("contactForm");
const formSuccess = document.getElementById("formSuccess");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault(); // prevent default page reload

  const btn = contactForm.querySelector("button[type=submit]");
  btn.textContent = "Sending... ✦";
  btn.disabled = true;

  // Simulate a short delay (replace with real API call if needed)
  setTimeout(() => {
    contactForm.reset();
    btn.textContent = "Send Message ✦";
    btn.disabled = false;
    formSuccess.classList.add("show");
    setTimeout(() => formSuccess.classList.remove("show"), 5000);
  }, 1200);
});


// ─── 10. SMOOTH SCROLL for anchor links ───────────────
// Already handled by CSS (scroll-behavior: smooth),
// but this ensures offset for the fixed navbar
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      const navHeight = document.getElementById("navbar").offsetHeight;
      const top = target.offsetTop - navHeight;
      window.scrollTo({ top, behavior: "smooth" });
    }
  });
});


// ─── 11. HERO PARALLAX (subtle) ───────────────────────
// The blobs move slightly as you scroll for depth
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const blob1 = document.querySelector(".blob-1");
  const blob2 = document.querySelector(".blob-2");
  if (blob1) blob1.style.transform = `translateY(${scrollY * 0.08}px)`;
  if (blob2) blob2.style.transform = `translateY(${-scrollY * 0.05}px)`;
});

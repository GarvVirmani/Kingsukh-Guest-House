const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

// Scroll Reveal Animations
const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};
ScrollReveal().reveal(".section__header, .section__subheader", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".room__card, .service__list li, .gallery__grid img", {
  ...scrollRevealOption,
  interval: 200,
});

// Contact Form Validation + Toast
const contactForm = document.getElementById("contactForm");
const toast = document.getElementById("toast");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const fname = document.getElementById("fname").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!fname || !email || !message) {
    showToast("Please fill all required fields ❌", "#ef476f");
    return;
  }

  if (!/^[^@]+@[^@]+\.[^@]+$/.test(email)) {
    showToast("Invalid email format ❌", "#ef476f");
    return;
  }

  contactForm.reset();
  showToast("Message sent successfully ✅", "#06d6a0");
});

function showToast(msg, color) {
  toast.textContent = msg;
  toast.style.background = color;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 3000);
}

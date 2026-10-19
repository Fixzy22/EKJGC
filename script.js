const header = document.getElementById("header");
const nav = document.getElementById("nav");
const menuToggle = document.getElementById("menuToggle");
const year = document.getElementById("year");
const form = document.getElementById("quoteForm");
const formNote = document.getElementById("formNote");

year.textContent = new Date().getFullYear();

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 12);
});

menuToggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!form.reportValidity()) {
    formNote.textContent = "Please complete the required fields.";
    return;
  }
  form.reset();
  formNote.textContent = "Thank you. Your message has been noted. Ekj-Gc Enterprise will be in touch.";
});

const root = document.documentElement;
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const modal = document.getElementById("projectModal");
const modalClose = document.getElementById("modalClose");
let lastFocusedElement = null;

const savedTheme = localStorage.getItem("portfolio-theme");
if (savedTheme === "light" || savedTheme === "dark") root.dataset.theme = savedTheme;
updateThemeButton();

function updateThemeButton() {
  const isLight = root.dataset.theme === "light";
  themeIcon.textContent = isLight ? "☾" : "☼";
  themeToggle.setAttribute("aria-label", isLight ? "Switch to dark theme" : "Switch to light theme");
}
themeToggle.addEventListener("click", () => {
  root.dataset.theme = root.dataset.theme === "light" ? "dark" : "light";
  localStorage.setItem("portfolio-theme", root.dataset.theme);
  updateThemeButton();
});

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});
navLinks.querySelectorAll("a").forEach(link => link.addEventListener("click", closeMenu));
function closeMenu() {
  navLinks.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open navigation");
}

const projectDetails = {
  incident: {
    category: "SERVICENOW · ITSM PRACTICE",
    title: "Incident Management Practice",
    description: "A hands-on learning project focused on understanding the incident lifecycle and configuring common ServiceNow ITSM behaviours in a personal training instance.",
    bullets: ["Worked with incident records and key fields such as caller, category, state and priority.", "Practised GlideRecord-based server-side record operations.", "Explored form behaviour and validation using client-side configuration."],
    tech: ["ServiceNow", "ITSM", "GlideRecord", "Client Scripts"]
  },
  automation: {
    category: "SERVICENOW · FLOW DESIGNER",
    title: "High Priority Incident Notification",
    description: "A practice automation that checks newly created incidents and sends a notification to a manager when the incident meets the configured priority condition.",
    bullets: ["Configured an Incident-created trigger.", "Added a condition for priority 1 or 2.", "Built an email notification action and tested the flow execution."],
    tech: ["Flow Designer", "Subflows", "Notifications", "ITSM"]
  },
  api: {
    category: "SERVICENOW · API PRACTICE",
    title: "ServiceNow REST API Practice",
    description: "Explored REST concepts and practised a Scripted REST API pattern for looking up an incident and creating or updating records based on request data.",
    bullets: ["Reviewed HTTP methods, request bodies and response handling.", "Practised working with incident records using server-side scripting.", "Tested API requests with Postman in a personal development instance."],
    tech: ["Scripted REST API", "JavaScript", "GlideRecord", "Postman"]
  },
  portfolio: {
    category: "PERSONAL PROJECT · FRONT END",
    title: "Developer Portfolio Website",
    description: "This portfolio is a responsive static website built to present my learning journey, selected practice projects and professional background.",
    bullets: ["Created a mobile-first layout using CSS Grid and Flexbox.", "Implemented a dark/light theme toggle and mobile navigation.", "Added project detail modals, accessible controls and smooth in-page navigation."],
    tech: ["HTML5", "CSS3", "JavaScript ES6", "Responsive Design"]
  }
};

function openProject(key, trigger) {
  const data = projectDetails[key];
  if (!data) return;
  lastFocusedElement = trigger || document.activeElement;
  document.getElementById("modalCategory").textContent = data.category;
  document.getElementById("modalTitle").textContent = data.title;
  document.getElementById("modalDescription").textContent = data.description;
  const bullets = document.getElementById("modalBullets");
  bullets.replaceChildren(...data.bullets.map(item => {
    const li = document.createElement("li");
    li.textContent = item;
    return li;
  }));
  const tech = document.getElementById("modalTech");
  tech.replaceChildren(...data.tech.map(item => {
    const span = document.createElement("span");
    span.textContent = item;
    return span;
  }));
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  modalClose.focus();
}
function closeProject() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  if (lastFocusedElement) lastFocusedElement.focus();
}
document.querySelectorAll("[data-open]").forEach(button => {
  button.addEventListener("click", () => openProject(button.dataset.open, button));
});
modalClose.addEventListener("click", closeProject);
modal.addEventListener("click", event => { if (event.target === modal) closeProject(); });
document.addEventListener("keydown", event => {
  if (event.key === "Escape" && modal.classList.contains("open")) closeProject();
});
document.getElementById("year").textContent = new Date().getFullYear();

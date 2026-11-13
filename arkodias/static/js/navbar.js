(async function() {
  const script = document.currentScript;
  if (!script || !script.src) {
    throw new Error("The navigation component script must have a source URL.");
  }

  const siteRoot = new URL("../../", script.src);
  const mount = document.querySelector("[data-navbar]");
  if (!mount) {
    throw new Error("The page is missing the [data-navbar] navigation mount.");
  }

  const stylesheet = document.createElement("link");
  stylesheet.rel = "stylesheet";
  stylesheet.href = new URL("static/css/navbar.css", siteRoot).href;
  stylesheet.dataset.navbarStylesheet = "";
  document.head.append(stylesheet);

  const response = await fetch(new URL("components/navbar.html", siteRoot));
  if (!response.ok) {
    throw new Error(`Unable to load the navigation template: ${response.status}`);
  }

  const template = document.createElement("template");
  template.innerHTML = await response.text();
  const navbar = template.content.querySelector("nav");
  if (!navbar) {
    throw new Error("The navigation template does not contain a nav element.");
  }

  navbar.querySelectorAll("a[href]").forEach(link => {
    link.href = new URL(link.getAttribute("href"), siteRoot).href;
  });
  mount.replaceChildren(navbar);
})().catch(error => {
  console.error("Unable to initialize the navigation component:", error);
});

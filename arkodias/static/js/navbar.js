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
  const stylesheetUrl = new URL("static/css/navbar.css", siteRoot);
  const version = new URL(script.src).searchParams.get("v") || "20261121-2";
  stylesheetUrl.searchParams.set("v", version);
  stylesheet.href = stylesheetUrl.href;
  stylesheet.dataset.navbarStylesheet = "";
  document.head.append(stylesheet);

  const templateUrl = new URL("components/navbar.html", siteRoot);
  templateUrl.searchParams.set("v", Date.now().toString());
  const response = await fetch(templateUrl, {
    cache: "no-store"
  });
  if (!response.ok) {
    throw new Error(`Unable to load the navigation template: ${response.status}`);
  }

  const template = document.createElement("template");
  template.innerHTML = await response.text();
  const navbar = template.content.querySelector("nav");
  if (!navbar) {
    throw new Error("The navigation template does not contain a nav element.");
  }

  const currentPath = window.location.pathname === siteRoot.pathname
    ? new URL("index.html", siteRoot).pathname
    : window.location.pathname;
  navbar.querySelectorAll("a[href]").forEach(link => {
    link.href = new URL(link.getAttribute("href"), siteRoot).href;
    if (new URL(link.href).pathname === currentPath) {
      link.setAttribute("aria-current", "page");
    }
  });
  mount.replaceChildren(navbar);
})().catch(error => {
  console.error("Unable to initialize the navigation component:", error);
});

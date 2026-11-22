const siteRoot = new URL("../../", import.meta.url);

export async function createPdfSidebar(indexUrl, source, navigate, firstPage = 1) {
  const [templateResponse, indexResponse] = await Promise.all([
    fetch(new URL("components/pdf-sidebar.html", siteRoot)),
    fetch(indexUrl)
  ]);
  if (!templateResponse.ok || !indexResponse.ok) {
    throw new Error("Unable to load the PDF sidebar template or index.");
  }

  const template = document.createElement("template");
  template.innerHTML = await templateResponse.text();
  const sidebar = template.content.firstElementChild.cloneNode(true);
  const index = await indexResponse.json();
  const links = [];

  function appendEntries(entries, list) {
    entries.forEach(entry => {
      if (entry.page < firstPage) {
        if (entry.children) appendEntries(entry.children, list);
        return;
      }
      const item = document.createElement("li");
      const link = document.createElement("a");
      const destination = new URL(source);
      destination.hash = `page=${entry.page}&toolbar=0&navpanes=0&view=FitH`;
      link.href = destination.href;
      link.className = "pdf-sidebar__link";

      const title = document.createElement("span");
      title.textContent = entry.title;
      const page = document.createElement("span");
      page.className = "pdf-sidebar__page";
      page.textContent = entry.page;
      page.setAttribute("aria-label", `pagina ${entry.page}`);
      link.append(title, page);

      link.addEventListener("click", event => {
        if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
        event.preventDefault();
        navigate(entry.page);
        links.forEach(other => other.removeAttribute("aria-current"));
        link.setAttribute("aria-current", "location");
      });
      links.push(link);
      item.append(link);

      if (entry.children && entry.children.length) {
        const children = document.createElement("ol");
        children.className = "pdf-sidebar__items";
        appendEntries(entry.children, children);
        item.append(children);
      }
      list.append(item);
    });
  }

  appendEntries(index.entries, sidebar.querySelector("ol"));
  const startPage = Number(new URLSearchParams(source.hash.slice(1)).get("page")) || 1;
  if (links.length && index.entries[0].page === startPage) {
    links[0].setAttribute("aria-current", "location");
  }
  return sidebar;
}

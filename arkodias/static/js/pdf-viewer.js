import { createPdfSidebar } from "./pdf-sidebar.js";
import { getDocument, GlobalWorkerOptions, TextLayer } from "./vendor/pdfjs/pdf.min.mjs";

const siteRoot = new URL("../../", import.meta.url);
const pdfAssets = new URL("static/js/vendor/pdfjs/", siteRoot);
GlobalWorkerOptions.workerSrc = new URL("pdf.worker.min.mjs", pdfAssets).href;

async function initializeViewer(mount, template) {
  const viewer = template.content.firstElementChild.cloneNode(true);
  const source = new URL(mount.dataset.src, siteRoot);
  const title = mount.dataset.title || "il documento PDF";
  const firstPage = Math.max(1, Number.parseInt(mount.dataset.startPage, 10) || 1);
  const pages = viewer.querySelector(".pdf-viewer__pages");
  const status = viewer.querySelector(".pdf-viewer__status");
  const link = viewer.querySelector("a");
  link.href = `${source.href}#page=${firstPage}`;
  link.textContent = `Apri ${title}`;
  pages.setAttribute("aria-label", title);
  mount.replaceChildren(viewer);

  function showError(error) {
    status.hidden = false;
    status.textContent = "Impossibile visualizzare il documento. Puoi aprirlo dal collegamento qui sopra.";
    pages.setAttribute("aria-busy", "false");
    console.error("Unable to render the PDF:", error);
  }

  try {
    if (mount.dataset.index) {
      try {
        const sidebarSource = new URL(source);
        sidebarSource.hash = `page=${firstPage}`;
        const sidebar = await createPdfSidebar(new URL(mount.dataset.index, siteRoot), sidebarSource, page => {
          const destination = pages.querySelector(`[data-pdf-page="${page}"]`);
          if (!destination) return;
          // Scroll only the document pane, keeping the site navigation in place.
          pages.scrollTop = destination.offsetTop - pages.offsetTop;
          pages.focus({ preventScroll: true });
        }, firstPage);
        mount.prepend(sidebar);
      } catch (error) {
        console.error("Unable to initialize the PDF sidebar:", error);
      }
    }

    const pdf = await getDocument({
      url: source.href,
      cMapUrl: new URL("cmaps/", pdfAssets).href,
      cMapPacked: true,
      standardFontDataUrl: new URL("standard_fonts/", pdfAssets).href,
      wasmUrl: new URL("wasm/", pdfAssets).href
    }).promise;
    if (firstPage > pdf.numPages) throw new Error("The PDF has no content pages.");

    const contentPages = [];
    // The original PDF is read unchanged. Excluded pages are never mounted or rendered.
    for (let number = firstPage; number <= pdf.numPages; number++) {
      const page = await pdf.getPage(number);
      const frame = document.createElement("section");
      frame.className = "pdf-viewer__page";
      frame.dataset.pdfPage = number;
      frame.setAttribute("aria-label", `Pagina ${number}`);
      const viewport = page.getViewport({ scale: 1 });
      frame.style.aspectRatio = `${viewport.width} / ${viewport.height}`;
      pages.append(frame);
      contentPages.push({ page, frame });
    }

    let rendering = false;
    let pending = false;
    let renderedWidth = 0;
    async function renderPages() {
      if (rendering) {
        pending = true;
        return;
      }
      rendering = true;
      try {
        do {
          pending = false;
          const width = contentPages[0].frame.clientWidth;
          if (!width || width === renderedWidth) continue;
          pages.setAttribute("aria-busy", "true");
          for (const { page, frame } of contentPages) {
            const viewport = page.getViewport({ scale: width / page.getViewport({ scale: 1 }).width });
            const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
            const canvas = document.createElement("canvas");
            canvas.width = Math.ceil(viewport.width * pixelRatio);
            canvas.height = Math.ceil(viewport.height * pixelRatio);
            canvas.setAttribute("aria-hidden", "true");
            await page.render({
              canvasContext: canvas.getContext("2d"),
              viewport,
              transform: [pixelRatio, 0, 0, pixelRatio, 0, 0]
            }).promise;

            const text = document.createElement("div");
            text.className = "textLayer";
            frame.style.setProperty("--total-scale-factor", viewport.scale);
            await new TextLayer({
              textContentSource: page.streamTextContent(),
              container: text,
              viewport
            }).render();
            frame.replaceChildren(canvas, text);
          }
          renderedWidth = width;
          status.hidden = true;
          pages.setAttribute("aria-busy", "false");
        } while (pending);
      } finally {
        rendering = false;
      }
    }

    await renderPages();
    let resizeTimer;
    const observer = new ResizeObserver(() => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => renderPages().catch(showError), 120);
    });
    observer.observe(pages);
  } catch (error) {
    showError(error);
  }
}

(async function() {
  const mounts = document.querySelectorAll("[data-pdf-viewer]");
  if (!mounts.length) return;
  const response = await fetch(new URL("components/pdf-viewer.html", siteRoot));
  if (!response.ok) throw new Error(`Unable to load the PDF viewer template: ${response.status}`);
  const template = document.createElement("template");
  template.innerHTML = await response.text();
  await Promise.all(Array.from(mounts, mount => initializeViewer(mount, template)));
})().catch(error => {
  console.error("Unable to initialize the PDF viewer component:", error);
});

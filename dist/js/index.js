import { renderCargaisonPage, renderProduitsPage, renderDetailsCargaisonPage } from "./pages.js";
const mainContent = document.querySelector("#main-content");
const linksNavPage = document.querySelectorAll("a[data-page]");
function renderPage(page) {
    switch (page) {
        case 'cargaisons':
            mainContent.innerHTML = renderCargaisonPage();
        case 'produits':
            mainContent.innerHTML = renderProduitsPage();
        case 'detailsCargaison':
            mainContent.innerHTML = renderDetailsCargaisonPage();
        default:
            mainContent.innerHTML = renderCargaisonPage();
    }
}
linksNavPage.forEach((link) => {
    link.addEventListener("click", (e) => {
        let page = link.dataset.page;
        renderPage(page);
    });
});
renderPage('cargaisons');

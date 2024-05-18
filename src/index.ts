import {cargaisons} from "./cargaisons.js";
import {produits} from "./produits.js";
import  {renderCargaisonPage, renderProduitsPage, renderDetailsCargaisonPage} from "./pages.js";

const mainContent = document.querySelector("#main-content") as HTMLElement;
const linksNavPage = document.querySelectorAll("a[data-page]");

function renderPage(page: string | undefined){
  switch (page){
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
    let page : string | undefined = (link as HTMLElement).dataset.page
    renderPage(page);
  })
})


renderPage('cargaisons');
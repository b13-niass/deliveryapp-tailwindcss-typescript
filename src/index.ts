import {cargaisonsTraitement} from "./cargaisons.js";
import {produitsTraitement} from "./produits.js";
import  {renderCargaisonPage, renderProduitsPage, renderDetailsCargaisonPage} from "./pages.js";

const mainContent = document.querySelector("#main-content") as HTMLElement;
const linksNavPage = document.querySelectorAll("a[data-page]");

function renderPage(page: string | undefined){
  switch (page){
    case 'cargaisons':
      mainContent.innerHTML = renderCargaisonPage();
        cargaisonsTraitement();
        break;
    case 'produits':
      mainContent.innerHTML = renderProduitsPage();
        produitsTraitement();
        break;
    case 'detailsCargaison':
      mainContent.innerHTML = renderDetailsCargaisonPage();
      break;
    default:
      mainContent.innerHTML = renderCargaisonPage();
      break;
  }
}

linksNavPage.forEach((link) => {
  link.addEventListener("click", (e) => {
    let page : string | undefined = (link as HTMLElement).dataset.page
    renderPage(page);
  })
})


renderPage('cargaisons');
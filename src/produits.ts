import { ICargaison } from "./Model/ICargaison.js";
import { Produit } from "./Model/Produit.js";
import { produitTypeComplete } from "./Model/IProduits.js";
import { Cargaison } from "./Model/Cargaison.js";
import { Validation } from "./Model/Validation.js";
import { Routiere } from "./Model/Routiere.js";
import { Maritime } from "./Model/Maritime.js";
import { Aerienne } from "./Model/Aerienne.js";
import { DB } from "./DB.js";
import { Alimentaire } from "./Model/Alimentaire.js";
import { Chimique } from "./Model/Chimique.js";
import { Fragile } from "./Model/Fragile.js";
import { Incassable } from "./Model/Incassable.js";

export function produitsTraitement(){
  /** Déclaration des variables **/
  const addProduitForm = document.getElementById('addProduitForm') as HTMLFormElement;
  const listeProduitContent = document.getElementById('listeProduitContent') as HTMLElement;
  const imageProduitInput = document.querySelector('#imagep') as HTMLInputElement;
  const imageProduitPreview = document.getElementById('image-produit') as HTMLImageElement;
  const uneLigneProduit = document.querySelectorAll('#uneLigneProduit') as NodeListOf<HTMLElement>;
  const typepChange = document.getElementById('typep') as HTMLSelectElement;
  const toxiciteChange = document.getElementById('toxiciteChange') as HTMLInputElement;


  let listeProduits: produitTypeComplete[] = [];


  /** Déclaration des fonctions**/
  const templateListProduit = (produit: produitTypeComplete) => {
    return `
       <tr class="border-b" id="">
          <td class="w-24 px-4 py-2">
              <img src="https://via.placeholder.com/50" alt="Product Image" class="rounded">
          </td>
          <td class="px-4 py-2">${produit.libelle}</td>
          <td class="px-4 py-2">
              <span class="inline-block bg-blue-200 text-blue-800 text-sm px-2 rounded-full">${produit.poids}kg</span>
          </td>
          <td class="px-4 py-2">
              <span class="inline-block bg-green-200 text-green-800 text-sm px-2 rounded-full">${getLibelleTypeProduit(produit.typep)}</span>
          </td>
          <td class="px-4 py-2">
              <button data-id="${produit.id}" class="bg-gray-800 font-semibold text-white py-1 px-2 border border-transparent rounded">
                  Modifier
              </button>
              <button data-id="${produit.id}" class="bg-red-800 font-semibold text-white py-1 px-2 border border-transparent rounded">
                  supprimer
              </button>
              <button data-id="${produit.id}" class="openModalBtn bg-emerald-800 font-semibold text-white py-1 px-2 border border-transparent rounded">
                  Affecter
              </button>
          </td>
      </tr>
    `;
  };

  const getLibelleTypeProduit = (num: number) => {
    const libelleTypeArray = [{type: 'alimentaire', num: 1},{type: 'chimique', num: 2},{type: 'Materiel', num: 3}];
    return libelleTypeArray.find((type)=>type.num == num)?.type;
  }

  const buildListProduit = () => {
    // listeProduits = Produit.getAllProduits();
    listeProduits.forEach((produit) => {
      listeProduitContent.insertAdjacentHTML(
        "beforeend",
        templateListProduit(produit)
      );
    });
  };

  function removeListElement() {
    let unProduitElements = document.querySelectorAll('#unProduitElement') as NodeListOf<HTMLElement>;
    unProduitElements.forEach((unProduitElement) => {
      unProduitElement.remove();
    });
  }


  /** Initialisations **/
  listeProduits = Produit.getAllProduits().filter((produit) => produit.cargaison == 0);
  buildListProduit();
  clickOnBtnAffecter();


  /** Déclaration des Événements**/

  typepChange.addEventListener("change", () => {
    if (typepChange.value == "2"){
      console.log();
      toxiciteChange.classList.remove("hidden");
    }else {
      toxiciteChange.classList.add("hidden");
    }
  })

  imageProduitInput.addEventListener("input", (e: Event) => {
    imageProduitPreview.src = imageProduitInput.value;
  })

  addProduitForm.addEventListener("submit", (e: Event) => {
    e.preventDefault();
    let formControls = addProduitForm.querySelectorAll(".form-control1") as NodeListOf<HTMLInputElement>;
    const libellep = document.getElementById('libellep') as HTMLInputElement;
    const typep = document.getElementById('typep') as HTMLSelectElement;
    const poidsp = document.getElementById('poidsp') as HTMLInputElement;
    const imagep = document.getElementById('imagep') as HTMLInputElement;
    const toxicite = document.getElementById('toxicite') as HTMLInputElement;

    if (Validation.checkRequireGlobal2(formControls) && Validation.validerEntier(poidsp)){
      let p: Alimentaire = new Alimentaire();

      if(typep.value == "1"){
        p = new Alimentaire();
      }else if(typep.value == "2"){
        if (Validation.validerToxicite(toxicite)){
        p = new Chimique();
        (p as Chimique).setToxicite(parseInt(toxicite.value));
        }else {
          return;
        }

      }else if (typep.value == "3"){
        if(typep.options[typep.selectedIndex].text == "Materiel Fragile")
        p = new Fragile();

        if(typep.options[typep.selectedIndex].text == "Materiel Incassable")
        p = new Incassable();

      }
      console.log(typep);
      p.setCargaison(0);
      p.setImage(imagep.value);
      p.setLibelle(libellep.value);
      p.setTypeP(parseInt(typep.value));
      p.setPoids(parseInt(poidsp.value));
      p.ajouterProduits();

      libellep.value = "";
      typep.value = "";
      poidsp.value = "";
      imagep.value = "";
      toxicite.value = "-1";
      toxiciteChange.classList.add("hidden");

      // Pile de Call
      removeListElement()
      listeProduits = Produit.getAllProduits().filter((produit) => produit.cargaison == 0);
      buildListProduit();
      clickOnBtnAffecter();

    }
  })



  // Modal
  function clickOnBtnAffecter(){
    const allBtnAffecter = document.querySelectorAll('.openModalBtn') as NodeListOf<HTMLElement>;
    allBtnAffecter.forEach((btnAffecter: HTMLElement) => {
      btnAffecter.addEventListener('click', function() {
        (document.getElementById('modal')as HTMLElement).classList.remove('hidden');
      });
    })
  }


  (document.getElementById('closeModalBtn')as HTMLElement).addEventListener('click', function() {
    (document.getElementById('modal')as HTMLElement).classList.add('hidden');
  });

  (document.getElementById('closeModalFooterBtn')as HTMLElement).addEventListener('click', function() {
    (document.getElementById('modal')as HTMLElement).classList.add('hidden');
  });
}
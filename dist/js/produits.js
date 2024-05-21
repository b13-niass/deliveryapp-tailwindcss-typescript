import { Produit } from "./Model/Produit.js";
import { Validation } from "./Model/Validation.js";
import { Alimentaire } from "./Model/Alimentaire.js";
import { Chimique } from "./Model/Chimique.js";
import { Fragile } from "./Model/Fragile.js";
import { Incassable } from "./Model/Incassable.js";
export function produitsTraitement() {
    const addProduitForm = document.getElementById('addProduitForm');
    const listeProduitContent = document.getElementById('listeProduitContent');
    const imageProduitInput = document.querySelector('#imagep');
    const imageProduitPreview = document.getElementById('image-produit');
    const uneLigneProduit = document.querySelectorAll('#uneLigneProduit');
    const typepChange = document.getElementById('typep');
    const toxiciteChange = document.getElementById('toxiciteChange');
    let listeProduits = [];
    const templateListProduit = (produit) => {
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
    const getLibelleTypeProduit = (num) => {
        const libelleTypeArray = [{ type: 'alimentaire', num: 1 }, { type: 'chimique', num: 2 }, { type: 'Materiel', num: 3 }];
        return libelleTypeArray.find((type) => type.num == num)?.type;
    };
    const buildListProduit = () => {
        listeProduits.forEach((produit) => {
            listeProduitContent.insertAdjacentHTML("beforeend", templateListProduit(produit));
        });
    };
    function removeListElement() {
        let unProduitElements = document.querySelectorAll('#unProduitElement');
        unProduitElements.forEach((unProduitElement) => {
            unProduitElement.remove();
        });
    }
    listeProduits = Produit.getAllProduits().filter((produit) => produit.cargaison == 0);
    buildListProduit();
    clickOnBtnAffecter();
    typepChange.addEventListener("change", () => {
        if (typepChange.value == "2") {
            console.log();
            toxiciteChange.classList.remove("hidden");
        }
        else {
            toxiciteChange.classList.add("hidden");
        }
    });
    imageProduitInput.addEventListener("input", (e) => {
        imageProduitPreview.src = imageProduitInput.value;
    });
    addProduitForm.addEventListener("submit", (e) => {
        e.preventDefault();
        let formControls = addProduitForm.querySelectorAll(".form-control1");
        const libellep = document.getElementById('libellep');
        const typep = document.getElementById('typep');
        const poidsp = document.getElementById('poidsp');
        const imagep = document.getElementById('imagep');
        const toxicite = document.getElementById('toxicite');
        if (Validation.checkRequireGlobal2(formControls) && Validation.validerEntier(poidsp)) {
            let p = new Alimentaire();
            if (typep.value == "1") {
                p = new Alimentaire();
            }
            else if (typep.value == "2") {
                if (Validation.validerToxicite(toxicite)) {
                    p = new Chimique();
                    p.setToxicite(parseInt(toxicite.value));
                }
                else {
                    return;
                }
            }
            else if (typep.value == "3") {
                if (typep.options[typep.selectedIndex].text == "Materiel Fragile")
                    p = new Fragile();
                if (typep.options[typep.selectedIndex].text == "Materiel Incassable")
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
            removeListElement();
            listeProduits = Produit.getAllProduits().filter((produit) => produit.cargaison == 0);
            buildListProduit();
            clickOnBtnAffecter();
        }
    });
    function clickOnBtnAffecter() {
        const allBtnAffecter = document.querySelectorAll('.openModalBtn');
        allBtnAffecter.forEach((btnAffecter) => {
            btnAffecter.addEventListener('click', function () {
                document.getElementById('modal').classList.remove('hidden');
            });
        });
    }
    document.getElementById('closeModalBtn').addEventListener('click', function () {
        document.getElementById('modal').classList.add('hidden');
    });
    document.getElementById('closeModalFooterBtn').addEventListener('click', function () {
        document.getElementById('modal').classList.add('hidden');
    });
}

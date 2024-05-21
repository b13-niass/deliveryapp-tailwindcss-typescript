import { Validation } from "./Model/Validation.js";
import { Cargaison } from "./Model/Cargaison.js";
import { DB } from "./DB.js";
import { Routiere } from "./Model/Routiere.js";
import { Maritime } from "./Model/Maritime.js";
import { Aerienne } from "./Model/Aerienne.js";
export function cargaisonsTraitement() {
    const addCargaisonForm = document.getElementById('AddCargaisonForm');
    const listeCargaisonContent = document.getElementById('listeCargaisonContent');
    const imageCargaisonInput = document.querySelector('.image-cargaison-input');
    const imageCargaison = document.getElementById('image-cargaison');
    const uneCargaisonElement = document.querySelectorAll('#uneCargaisonElement');
    let listeCargaisons = [];
    const produitAccepter = (cargaison) => {
        let stringArray = [];
        if (cargaison.typec == 1) {
            stringArray = DB.cargaison.routiere.produitsAccepter;
        }
        else if (cargaison.typec == 2) {
            stringArray = DB.cargaison.maritime.produitsAccepter;
        }
        else if (cargaison.typec == 3) {
            stringArray = DB.cargaison.aerienne.produitsAccepter;
        }
        return stringArray;
    };
    const pourcentageEspaceOccupe = (cargaison) => {
        if (cargaison.typec == 1) {
            let c = new Routiere();
            c.setId(cargaison.id);
            return (c.nbrDeProduit() * 100) / 10;
        }
        else if (cargaison.typec == 2) {
            let c = new Maritime();
            c.setId(cargaison.id);
            return (c.nbrDeProduit() * 100) / 10;
        }
        else if (cargaison.typec == 3) {
            let c = new Aerienne();
            c.setId(cargaison.id);
            return (c.nbrDeProduit() * 100) / 10;
        }
        return 0;
    };
    const templateListCargaison = (cargaison) => {
        return `
      <div id="uneCargaisonElement"  class="lg:w-[30%] hover:cursor-pointer hover:border-2 hover:border-borderCard
        h-[400px] bg-white shadow-lg hover:shadow-beautiful-hover rounded-lg overflow-hidden">
            <!-- <img class="w-full h-32 object-cover" src="https://via.placeholder.com/300x200" alt="Card Image">-->

            <img class="w-full h-[50%] object-cover" src="${cargaison.image}" alt="Card Image">
            <div class="p-4">
                <div class="text-sm text-gray-500">Date départ: ${formatDate3(cargaison.dateDepart)}</div>
                <div class="text-sm text-gray-500">Date arrivé: ${formatDate3(cargaison.dateDepart)}</div>
                <h2 class="mt-2 text-lg font-bold text-gray-800">${cargaison.libelle}</h2>
                <div class="flex flex-wrap mt-2">
                    <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-1 mb-1 px-2.5 py-0.5 rounded">${produitAccepter(cargaison)[0]}</span>
                    <span class="bg-green-100 text-green-800 text-xs font-semibold mr-1 mb-1 px-2.5 py-0.5 rounded">${produitAccepter(cargaison)[1]}</span>
                    <span class="bg-red-100 text-red-800 text-xs ${produitAccepter(cargaison)[2] ? 'block' : 'hidden'} font-semibold mr-1 mb-1 px-2.5 py-0.5 rounded">${produitAccepter(cargaison)[2]}</span>
                </div>
                <div class="mt-2 text-gray-700 font-bold">
                    Espace Occupé: <span class="text-green-600">${pourcentageEspaceOccupe(cargaison)}%</span>
                </div>
            </div>
        </div>
    `;
    };
    const buildListCargaison = () => {
        listeCargaisons.forEach((cargaison) => {
            listeCargaisonContent.insertAdjacentHTML("beforeend", templateListCargaison(cargaison));
        });
    };
    function formatDate1(date) {
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        let formattedDay = (day < 10 ? "0" : "") + day;
        let formattedMonth = (month < 10 ? "0" : "") + month;
        return formattedDay + "/" + formattedMonth + "/" + year;
    }
    function formatDate2(originalDate) {
        let parts = originalDate.split("/");
        let day = parseInt(parts[0]);
        let month = parseInt(parts[1]);
        let year = parseInt(parts[2]);
        let dateObj = new Date(year, month - 1, day);
        let hours = "16";
        let minutes = "45";
        let seconds = "30";
        let formattedDate = dateObj.getFullYear() +
            "-" +
            ("0" + (dateObj.getMonth() + 1)).slice(-2) +
            "-" +
            ("0" + dateObj.getDate()).slice(-2) +
            "T" +
            hours +
            ":" +
            minutes +
            ":" +
            seconds;
        return formattedDate;
    }
    function formatDate3(originalDate) {
        let dateObj = new Date(originalDate);
        let day = ("0" + dateObj.getDate()).slice(-2);
        let month = ("0" + (dateObj.getMonth() + 1)).slice(-2);
        let year = dateObj.getFullYear();
        let formattedDate = day + "/" + month + "/" + year;
        return formattedDate;
    }
    function formatDate4(originalDate) {
        let parts = originalDate.split("/");
        let day = parts[0];
        let month = parts[1];
        let year = parts[2];
        let formattedDate = year + "-" + ("0" + month).slice(-2) + "-" + ("0" + day).slice(-2);
        return formattedDate;
    }
    function formatDate5(originalDate) {
        let dateObj = new Date(originalDate);
        let year = dateObj.getFullYear();
        let month = ("0" + (dateObj.getMonth() + 1)).slice(-2);
        let day = ("0" + dateObj.getDate()).slice(-2);
        let formattedDate = year + "-" + month + "-" + day;
        return formattedDate;
    }
    function formatDate6(originalDate, heureChoisit) {
        let parts = originalDate.split("-");
        let year = parseInt(parts[0]);
        let month = parseInt(parts[1]);
        let day = parseInt(parts[2]);
        let dateObj = new Date(year, month - 1, day);
        let hours = heureChoisit[0];
        let minutes = heureChoisit[1];
        let seconds = "00";
        let formattedDate = dateObj.getFullYear() +
            "-" +
            ("0" + (dateObj.getMonth() + 1)).slice(-2) +
            "-" +
            ("0" + dateObj.getDate()).slice(-2) +
            "T" +
            hours +
            ":" +
            minutes +
            ":" +
            seconds;
        return formattedDate;
    }
    function removeListElement() {
        let uneCargaisonElement = document.querySelectorAll('#uneCargaisonElement');
        uneCargaisonElement.forEach((uneCargE) => {
            uneCargE.remove();
        });
    }
    listeCargaisons = Cargaison.getAllCargaison();
    buildListCargaison();
    imageCargaisonInput.addEventListener("input", (e) => {
        imageCargaison.src = imageCargaisonInput.value;
    });
    addCargaisonForm.addEventListener("submit", (e) => {
        e.preventDefault();
        let formControls = addCargaisonForm.querySelectorAll(".form-control");
        const libelle = document.getElementById('libelle');
        const type = document.getElementById('type');
        const dateDepart = document.getElementById('date-depart');
        const dateArrivee = document.getElementById('date-arrivee');
        const distance = document.getElementById('distance');
        const image = document.getElementById('image');
        if (Validation.checkRequireGlobal(formControls)) {
            let c = new Routiere();
            if (type.value == "1") {
                c = new Routiere();
            }
            else if (type.value == "2") {
                c = new Maritime();
            }
            else if (type.value == "3") {
                c = new Aerienne();
            }
            c.setLibelle(libelle.value);
            c.setDateDepart(dateDepart.value);
            c.setDateArrive(dateArrivee.value);
            c.setImage(image.value);
            c.setTypeC(parseInt(type.value));
            c.setDistance(parseInt(distance.value));
            c.setEtat(1);
            console.log(c);
            c.ajouterCargaison();
            console.log(DB.cargaison);
            libelle.value = "";
            type.value = "";
            dateDepart.value = "";
            dateArrivee.value = "";
            distance.value = "";
            image.value = "";
            imageCargaison.src = "https://placehold.co/50";
            removeListElement();
            listeCargaisons = Cargaison.getAllCargaison();
            buildListCargaison();
        }
    });
}

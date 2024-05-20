import { Maritime } from "./Model/Maritime.js";
import { Aerienne } from "./Model/Aerienne.js";
import { Routiere } from "./Model/Routiere.js";
import { Alimentaire } from "./Model/Alimentaire.js";
import { Chimique } from "./Model/Chimique.js";
import { Fragile } from "./Model/Fragile.js";
import { Incassable } from "./Model/Incassable.js";
import { DB } from "./DB.js";

const produitA_1 = new Alimentaire( 1, "riz", 1, 10, "https://placehold.co/400", 0);
const produitA_2 = new Alimentaire(2, "huile", 1, 10, "https://placehold.co/400", 0);
const produitCh_1 = new Chimique(3, "ammoniac", 2, 10, "https://placehold.co/400", 0, 5);
const produitCh_2 = new Chimique(4, "acide", 2, 10, "https://placehold.co/400", 0, 2);
const fragile_1 = new Fragile(5, "tasse", 3, 10, "https://placehold.co", 0);
const fragile_2 = new Fragile(6, "fleure", 3, 10, "https://placehold.co", 0);
const incassable_1 = new Incassable(7, "camion", 3, 10, "https://placehold.co", 0);
const incassable_2 = new Incassable(8, "tracteur", 3, 10, "https://placehold.co", 0);
/** Ajout de Produit à la base de donnée **/
produitA_1.ajouterProduits();
produitA_2.ajouterProduits();
produitCh_1.ajouterProduits();
produitCh_2.ajouterProduits();
fragile_1.ajouterProduits();
fragile_2.ajouterProduits();
incassable_1.ajouterProduits();
incassable_2.ajouterProduits();

// console.log(DB.produits);

const routiere: Routiere = new Routiere(1, "Routiere", 1, "2024-05-22", "2024-05-30", "https://placehold.co/800", 1000, 1);
const maritime: Maritime = new Maritime(2, "Maritime", 2, "2024-05-22", "2024-05-30", "https://placehold.co/800", 1000, 1);
const aerienne: Aerienne = new Aerienne(3, "Aerienne", 3, "2024-05-22", "2024-05-30", "https://placehold.co/800", 1000, 1);
/** Ajout de Cargaison à la base de donnée **/
routiere.ajouterCargaison();
maritime.ajouterCargaison();
aerienne.ajouterCargaison();

// console.log(DB.cargaison.routiere.values);
// console.log(DB.cargaison.maritime.values);
// console.log(DB.cargaison.aerienne.values);

/** Affectation de Produit à une cargaison **/
console.log("================ Maritime ================");
maritime.ajouterProduit(produitA_1);
console.log(maritime.calculerFrais(produitA_1 as any));
maritime.ajouterProduit(produitCh_1);
console.log(maritime.calculerFrais(produitCh_1 as any));
// maritime.ajouterProduit(fragile_1);
// console.log(maritime.calculerFrais(fragile_1 as any));
console.log("La somme de la cargaison maritime: " +maritime.sommeTotale());

console.log("================ Routiere ================");
routiere.ajouterProduit(produitA_2);
console.log(routiere.calculerFrais(produitA_2 as any));
routiere.ajouterProduit(fragile_1);
console.log(routiere.calculerFrais(fragile_1 as any));
console.log("La somme de la cargaison routiere :" +routiere.sommeTotale());

console.log("================ Aerienne ================");
aerienne.ajouterProduit(fragile_2);
console.log(aerienne.calculerFrais(fragile_2 as any));
aerienne.ajouterProduit(incassable_1);
console.log(aerienne.calculerFrais(incassable_1 as any));
console.log("La somme de la cargaison aerienne :" +aerienne.sommeTotale());
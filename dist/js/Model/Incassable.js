import { Materiel } from "./Materiel.js";
import { Produit } from "./Produit.js";
import { DB } from "../DB.js";
export class Incassable extends Materiel {
    constructor(id, libelle, typep, poids, image, cargaison) {
        super(id, libelle, typep, poids, image, cargaison);
    }
    listerLesProduits() {
        let produits = [];
        DB.produits.materiel.incassable.forEach((prod) => {
            produits.push(prod);
        });
        return produits;
    }
    produitParId(id) {
        const produit = DB.produits.materiel.incassable.find(produit => produit.id === id);
        return produit;
    }
    supprimerProduit() {
        let result = 0;
        const indexProduitI = DB.produits.materiel.incassable.findIndex(p => p.id === this.getId());
        if (indexProduitI) {
            DB.produits.materiel.incassable.splice(indexProduitI, 1);
            result = 1;
        }
        return result;
    }
    ajouterProduits() {
        let produit = {
            id: Produit.getLastId() + 1,
            libelle: this.getLibelle(),
            cargaison: this.getCargaison(),
            poids: this.getPoids(),
            typep: this.getTypeP(),
            image: this.getImage()
        };
        return DB.produits.materiel.incassable.push(produit);
    }
    modifierProduits() {
        const indexProduit = DB.produits.materiel.incassable.findIndex(p => p.id === this.id);
        DB.produits.materiel.incassable[indexProduit].libelle = this.libelle;
        DB.produits.materiel.incassable[indexProduit].poids = this.poids;
        DB.produits.materiel.incassable[indexProduit].typep = this.typep;
        DB.produits.materiel.incassable[indexProduit].image = this.image;
        return 1;
    }
    affecterProduit(cargaison) {
        const indexProduit = DB.produits.materiel.incassable.findIndex(p => p.id === this.id);
        DB.produits.materiel.incassable[indexProduit].cargaison = cargaison;
        return 1;
    }
    info() {
        return `${this.libelle} est un produit incassable de poids ${this.poids},`;
    }
}

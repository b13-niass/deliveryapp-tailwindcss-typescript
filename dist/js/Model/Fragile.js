import { Materiel } from "./Materiel.js";
import { Produit } from "./Produit.js";
import { DB } from "../DB.js";
export class Fragile extends Materiel {
    constructor(id, libelle, typep, poids, image, cargaison) {
        super(id, libelle, typep, poids, image, cargaison);
    }
    listerLesProduits() {
        let produits = [];
        DB.produits.materiel.fragile.forEach((prod) => {
            produits.push(prod);
        });
        return produits;
    }
    produitParId(id) {
        const produit = DB.produits.materiel.fragile.find(produit => produit.id === id);
        return produit;
    }
    supprimerProduit() {
        let result = 0;
        const indexProduitF = DB.produits.materiel.fragile.findIndex(p => p.id === this.getId());
        if (indexProduitF) {
            DB.produits.materiel.fragile.splice(indexProduitF, 1);
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
        return DB.produits.materiel.fragile.push(produit);
    }
    modifierProduits() {
        const indexProduit = DB.produits.materiel.fragile.findIndex(p => p.id === this.id);
        DB.produits.materiel.fragile[indexProduit].libelle = this.libelle;
        DB.produits.materiel.fragile[indexProduit].poids = this.poids;
        DB.produits.materiel.fragile[indexProduit].typep = this.typep;
        DB.produits.materiel.fragile[indexProduit].image = this.image;
        return 1;
    }
    affecterProduit(cargaison) {
        const indexProduit = DB.produits.materiel.fragile.findIndex(p => p.id === this.id);
        DB.produits.materiel.fragile[indexProduit].cargaison = cargaison;
        return 1;
    }
    info() {
        return `${this.libelle} est un produit fragile de poids ${this.poids},`;
    }
}

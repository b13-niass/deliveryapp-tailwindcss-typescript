import { Produit } from "./Produit.js";
import { DB } from "../DB.js";
export class Alimentaire extends Produit {
    constructor(id, libelle, typep, poids, image, cargaison) {
        super(id, libelle, typep, poids, image, cargaison);
    }
    listerLesProduits() {
        let produits = [];
        DB.produits.alimentaire.forEach((prod) => {
            produits.push(prod);
        });
        return produits;
    }
    produitParId(id) {
        const produit = DB.produits.alimentaire.find(produit => produit.id === id);
        return produit;
    }
    supprimerProduit() {
        let result = 0;
        const indexProduit = DB.produits.alimentaire.findIndex(p => p.id === this.getId());
        if (indexProduit) {
            DB.produits.alimentaire.splice(indexProduit, 1);
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
        return DB.produits.alimentaire.push(produit);
    }
    modifierProduits() {
        const indexProduit = DB.produits.alimentaire.findIndex((p) => p.id === this.id);
        DB.produits.alimentaire[indexProduit].libelle = this.libelle;
        DB.produits.alimentaire[indexProduit].poids = this.poids;
        DB.produits.alimentaire[indexProduit].typep = this.typep;
        DB.produits.alimentaire[indexProduit].image = this.image;
        return 1;
    }
    affecterProduit(cargaison) {
        const indexProduit = DB.produits.alimentaire.findIndex(p => p.id === this.id);
        DB.produits.alimentaire[indexProduit].cargaison = cargaison;
        return 1;
    }
    info() {
        return `${this.libelle} est un produit alimentaire de poids ${this.poids},`;
    }
}

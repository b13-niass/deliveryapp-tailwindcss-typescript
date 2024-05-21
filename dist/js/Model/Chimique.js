import { Produit } from "./Produit.js";
import { DB } from "../DB.js";
export class Chimique extends Produit {
    toxicite;
    constructor(id, libelle, typep, poids, image, cargaison, toxicite) {
        super(id, libelle, typep, poids, image, cargaison);
        this.toxicite = toxicite;
    }
    setToxicite(toxicite) {
        this.toxicite = toxicite;
    }
    getToxicite() {
        return this.toxicite;
    }
    listerLesProduits() {
        let produits = [];
        DB.produits.chimique.forEach((prod) => {
            produits.push(prod);
        });
        return produits;
    }
    produitParId(id) {
        const produit = DB.produits.chimique.find(produit => produit.id === id);
        return produit;
    }
    supprimerProduit() {
        let result = 0;
        const indexProduit = DB.produits.chimique.findIndex(p => p.id === this.getId());
        if (indexProduit) {
            DB.produits.chimique.splice(indexProduit, 1);
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
            image: this.getImage(),
            toxicite: this.getToxicite()
        };
        return DB.produits.chimique.push(produit);
    }
    modifierProduits() {
        const indexProduit = DB.produits.chimique.findIndex(p => p.id === this.id);
        DB.produits.chimique[indexProduit].libelle = this.libelle;
        DB.produits.chimique[indexProduit].poids = this.poids;
        DB.produits.chimique[indexProduit].typep = this.typep;
        DB.produits.chimique[indexProduit].image = this.image;
        return 1;
    }
    affecterProduit(cargaison) {
        const indexProduit = DB.produits.chimique.findIndex(p => p.id === this.id);
        DB.produits.chimique[indexProduit].cargaison = cargaison;
        return 1;
    }
    info() {
        return `${this.libelle} est un produit chimique de poids ${this.poids} et de toxicitee ${this.toxicite}`;
    }
}

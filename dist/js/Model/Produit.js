import { DB } from "../DB.js";
export class Produit {
    id;
    libelle;
    typep;
    poids;
    image;
    cargaison;
    constructor(id, libelle, typep, poids, image, cargaison) {
        this.id = id;
        this.libelle = libelle;
        this.typep = typep;
        this.poids = poids;
        this.image = image;
        this.cargaison = cargaison;
    }
    setId(id) {
        this.id = id;
    }
    getId() {
        return this.id;
    }
    setLibelle(libelle) {
        this.libelle = libelle;
    }
    getLibelle() {
        return this.libelle;
    }
    setTypeP(typep) {
        this.typep = typep;
    }
    getTypeP() {
        return this.typep;
    }
    setPoids(poids) {
        this.poids = poids;
    }
    getPoids() {
        return this.poids;
    }
    setImage(image) {
        this.image = image;
    }
    getImage() {
        return this.image;
    }
    setCargaison(cargaison) {
        this.cargaison = cargaison;
    }
    getCargaison() {
        return this.cargaison;
    }
    listerLesProduits() {
        let produits = [];
        DB.produits.alimentaire.forEach((prod) => {
            produits.push(prod);
        });
        DB.produits.chimique.forEach((prod) => {
            produits.push(prod);
        });
        DB.produits.materiel.incassable.forEach((prod) => {
            produits.push(prod);
        });
        DB.produits.materiel.fragile.forEach((prod) => {
            produits.push(prod);
        });
        return produits;
    }
    ;
}

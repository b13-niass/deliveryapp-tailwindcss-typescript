import { Cargaison } from "./Cargaison.js";
import { DB } from "../DB.js";
export class Maritime extends Cargaison {
    constructor(id, libelle, typec, dateDepart, dateArrive, image, distance, etat) {
        super(id, libelle, typec, dateDepart, dateArrive, image, distance, etat);
    }
    cargaisonParId(id) {
        const cargo = DB.cargaison.maritime.values.find(cargo => cargo.id === id);
        return cargo;
    }
    supprimerCargaison() {
        let result = 0;
        const indexCargaison = DB.cargaison.maritime.values.findIndex(c => c.id === this.getId());
        if (indexCargaison) {
            DB.cargaison.maritime.values.splice(indexCargaison, 1);
            result = 1;
        }
        return result;
    }
    ajouterCargaison() {
        let cargaison = {
            id: Cargaison.getLastId() + 1,
            libelle: this.getLibelle(),
            dateArrive: this.getDateArrive(),
            dateDepart: this.getDateDepart(),
            distance: this.getDistance(),
            typec: this.getTypeC(),
            image: this.getImage(),
            etat: this.getEtat()
        };
        return DB.cargaison.maritime.values.push(cargaison);
    }
    modifierCargaison() {
        const indexProduit = DB.cargaison.maritime.values.findIndex(p => p.id === this.id);
        DB.cargaison.maritime.values[indexProduit] = this.getCargaison();
        return 1;
    }
    getAllFrais() {
        return DB.cargaison.maritime.fraisTransport;
    }
    calculerFrais(produit) {
        const frais = this.getAllFrais().find((frais) => frais.typep == produit.typep);
        if (produit.typep == 2) {
            const chimique = produit;
            return ((chimique.poids / frais.poids) * (chimique.toxicite / frais.param) * frais.tarif) + frais.autreFrais;
        }
        return ((produit.poids / frais.poids) * (this.distance / frais.param) * frais.tarif) + frais.autreFrais;
    }
    ajouterProduit(produit) {
        let result = 0;
        if (produit.getTypeP() == 1) {
            DB.produits.alimentaire.map((prod) => {
                if (prod.id == produit.getId()) {
                    result = 1;
                    prod.cargaison = this.getId();
                }
            });
        }
        else if (produit.getTypeP() == 2) {
            DB.produits.chimique.map((prod) => {
                if (prod.id == produit.getId()) {
                    result = 1;
                    prod.cargaison = this.getId();
                }
            });
        }
        else if (produit.getTypeP() == 3) {
            DB.produits.materiel.fragile.map((prod) => {
                if (prod.id == produit.getId()) {
                    result = 1;
                    prod.cargaison = this.getId();
                }
            });
            DB.produits.materiel.incassable.map((prod) => {
                if (prod.id == produit.getId()) {
                    result = 1;
                    prod.cargaison = this.getId();
                }
            });
        }
        return result;
    }
    sommeTotale() {
        let somme = 0;
        this.listerLesProduits().forEach((produit) => {
            somme += this.calculerFrais(produit);
        });
        return somme;
    }
    nbrDeProduit() {
        return this.listerLesProduits().length;
    }
    listerLesProduits() {
        let produits = [];
        DB.produits.alimentaire.forEach((prod) => {
            if (prod.cargaison == this.getId()) {
                produits.push(prod);
            }
        });
        DB.produits.chimique.forEach((prod) => {
            if (prod.cargaison == this.getId()) {
                produits.push(prod);
            }
        });
        DB.produits.materiel.incassable.forEach((prod) => {
            if (prod.cargaison == this.getId()) {
                produits.push(prod);
            }
        });
        DB.produits.materiel.fragile.forEach((prod) => {
            if (prod == this.getId()) {
                produits.push(prod);
            }
        });
        return produits;
    }
    supprimerProduit(produit) {
        let result = 0;
        if (produit.getTypeP() == 1) {
            DB.produits.alimentaire.map((prod) => {
                if (prod.id == produit.getId()) {
                    result = 1;
                    prod.cargaison = 0;
                }
            });
        }
        else if (produit.getTypeP() == 2) {
            DB.produits.chimique.map((prod) => {
                if (prod.id == produit.getId()) {
                    result = 1;
                    prod.cargaison = 0;
                }
            });
        }
        else if (produit.getTypeP() == 3) {
            DB.produits.materiel.fragile.map((prod) => {
                if (prod.id == produit.getId()) {
                    result = 1;
                    prod.cargaison = this.getId();
                }
            });
            DB.produits.materiel.incassable.map((prod) => {
                if (prod.id == produit.getId()) {
                    result = 1;
                    prod.cargaison = 0;
                }
            });
        }
        return result;
    }
}

import {Materiel} from "./Materiel.js";
import { Produit } from "./Produit.js";
import { DB } from "../DB.js";

import {incassableType} from "./IProduits.js"

export class Incassable extends Materiel{

  constructor(id?:number, libelle?: string, typep?: number, poids?:number, image?:string, cargaison?: number) {
    super(id, libelle, typep, poids, image, cargaison);
  }

  listerLesProduits(): Produit[] {
    let produits: Produit[] = [];
    DB.produits.materiel.incassable.forEach((prod) => {
      produits.push(prod as any);
    })
    return produits;
  }
  produitParId(id: number): Produit {
    const produit = DB.produits.materiel.incassable.find(produit => produit.id === id) as unknown;
    return produit as Produit;
  }
  supprimerProduit(): number {
    let result: number = 0
      const indexProduitI = DB.produits.materiel.incassable.findIndex(p => p.id === this.getId());
      if (indexProduitI){
        DB.produits.materiel.incassable.splice(indexProduitI,1);
        result = 1;
    }
    return result;
  }
  ajouterProduits(): number {
    let produit : incassableType = {
      id: Produit.getLastId() + 1,
      libelle : this.getLibelle() as string,
      cargaison : this.getCargaison() as number,
      poids : this.getPoids() as number,
      typep: this.getTypeP() as number,
      image: this.getImage() as string
    };
    return DB.produits.materiel.incassable.push(produit)
  }
  modifierProduits(): number {
    const indexProduit = DB.produits.materiel.incassable.findIndex(p => p.id === this.id);
    DB.produits.materiel.incassable[indexProduit].libelle = this.libelle as string;
    // DB.produits.materiel.incassable[indexProduit].cargaison = this.cargaison as number;
    DB.produits.materiel.incassable[indexProduit].poids = this.poids as number;
    DB.produits.materiel.incassable[indexProduit].typep = this.typep as number;
    DB.produits.materiel.incassable[indexProduit].image = this.image as string;
    return 1;
  }
  affecterProduit(cargaison:number): number {
    const indexProduit = DB.produits.materiel.incassable.findIndex(p => p.id === this.id);
    DB.produits.materiel.incassable[indexProduit].cargaison = cargaison
    return 1;
  }
  info(): string {
    return `${this.libelle} est un produit incassable de poids ${this.poids},`;
  }
}
import {Materiel} from "./Materiel.js";
import { Produit } from "./Produit.js";
import { DB } from "../DB.js";

import {fragileType} from "./IProduits.js"

export class Fragile extends Materiel{

  constructor(id?:number, libelle?: string, typep?: number, poids?:number, image?:string, cargaison?: number) {
    super(id, libelle, typep, poids, image, cargaison);
  }

  listerLesProduits(): Produit[] {
    let produits: Produit[] = [];
    DB.produits.materiel.fragile.forEach((prod) => {
      produits.push(prod as any);
    })
    return produits;
  }
  produitParId(id: number): Produit {
    const produit = DB.produits.materiel.fragile.find(produit => produit.id === id) as unknown;
    return produit as Produit;
  }
  supprimerProduit(): number {
    let result: number = 0
      const indexProduitF = DB.produits.materiel.fragile.findIndex(p => p.id === this.getId());
      if (indexProduitF){
        DB.produits.materiel.fragile.splice(indexProduitF,1);
        result = 1;
      }
    return result;
  }
  ajouterProduits(): number {
    let produit : fragileType = {
      id: Produit.getLastId() + 1,
      libelle : this.getLibelle() as string,
      cargaison : this.getCargaison() as number,
      poids : this.getPoids() as number,
      typep: this.getTypeP() as number,
      image: this.getImage() as string
    };
    return DB.produits.materiel.fragile.push(produit)
  }
  modifierProduits(): number {
    const indexProduit = DB.produits.materiel.fragile.findIndex(p => p.id === this.id);
    DB.produits.materiel.fragile[indexProduit].libelle = this.libelle as string;
    // DB.produits.materiel.fragile[indexProduit].cargaison = this.cargaison as number;
    DB.produits.materiel.fragile[indexProduit].poids = this.poids as number;
    DB.produits.materiel.fragile[indexProduit].typep = this.typep as number;
    DB.produits.materiel.fragile[indexProduit].image = this.image as string;
    return 1;
  }
  affecterProduit(cargaison:number): number {
    const indexProduit = DB.produits.materiel.fragile.findIndex(p => p.id === this.id);
    DB.produits.materiel.fragile[indexProduit].cargaison = cargaison
    return 1;
  }
  info(): string {
    return `${this.libelle} est un produit fragile de poids ${this.poids},`;
  }
}
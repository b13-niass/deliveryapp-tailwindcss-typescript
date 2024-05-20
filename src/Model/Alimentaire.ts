import {Produit} from "./Produit.js";
import { DB } from "../DB.js";
import {alimentaireType} from "./IProduits.js"
export class Alimentaire extends Produit{

  constructor(id?:number, libelle?: string, typep?: number, poids?:number, image?:string, cargaison?: number) {
    super(id, libelle, typep, poids, image, cargaison);
  }

  listerLesProduits(): Produit[] {
    let produits: Produit[] = [];
    DB.produits.alimentaire.forEach((prod) => {
      produits.push(prod as any);
    })
    return produits;
  }
  produitParId(id: number): Produit {
    const produit = DB.produits.alimentaire.find(produit => produit.id === id) as unknown;
    return produit as Produit;
  }
  supprimerProduit(): number {
    let result: number = 0
    const indexProduit = DB.produits.alimentaire.findIndex(p => p.id === this.getId());
    if (indexProduit){
      DB.produits.alimentaire.splice(indexProduit,1);
      result = 1;
    }
   return result;
  }
  ajouterProduits(): number {
    let produit : alimentaireType = {
      id: this.getId() as number,
      libelle : this.getLibelle() as string,
      cargaison : this.getCargaison() as number,
      poids : this.getPoids() as number,
      typep: this.getTypeP() as number,
      image: this.getImage() as string
    };
   return DB.produits.alimentaire.push(produit)
  }
  modifierProduits(): number {
    const indexProduit = DB.produits.alimentaire.findIndex((p) => p.id === this.id);
    DB.produits.alimentaire[indexProduit].libelle = this.libelle as string;
    // DB.produits.alimentaire[indexProduit].cargaison = this.cargaison as number;
    DB.produits.alimentaire[indexProduit].poids = this.poids as number;
    DB.produits.alimentaire[indexProduit].typep = this.typep as number;
    DB.produits.alimentaire[indexProduit].image = this.image as string;
    return 1;
  }
  affecterProduit(cargaison:number): number {
    const indexProduit = DB.produits.alimentaire.findIndex(p => p.id === this.id);
    DB.produits.alimentaire[indexProduit].cargaison = cargaison
    return 1;
  }
  info(): string {
    return `${this.libelle} est un produit alimentaire de poids ${this.poids},`;
  }
}
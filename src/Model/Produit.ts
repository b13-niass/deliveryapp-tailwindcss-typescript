import { DB } from "../DB.js";
import { ICargaison } from "./ICargaison";
import { produitTypeComplete } from "./IProduits";

export abstract class Produit{
  // protected id?:number;
  // protected libelle?: string;
  // protected typep?: number;
  // protected poids?:number;
  // protected image?:string;
  // protected cargaison?: number;

  constructor(  protected id?:number,
  protected libelle?: string,
  protected typep?: number,
  protected poids?:number,
  protected image?:string,
  protected cargaison?: number) {
  }


  setId(id: number){
    this.id = id;
  }
  getId() : number|undefined{
    return this.id
  }

  setLibelle(libelle: string){
    this.libelle = libelle;
  }
  getLibelle() : string|undefined{
    return this.libelle
  }

  setTypeP(typep: number){
    this.typep = typep;
  }
  getTypeP() : number|undefined{
    return this.typep
  }

  setPoids(poids: number){
    this.poids = poids;
  }
  getPoids() : number|undefined{
    return this.poids
  }

  setImage(image: string){
    this.image = image;
  }
  getImage() : string|undefined{
    return this.image
  }

  setCargaison(cargaison: number){
    this.cargaison = cargaison;
  }
  getCargaison() : number|undefined{
    return this.cargaison
  }

  abstract info():string;

  listerLesProduits(): Produit[]{
    let produits: Produit[] = [];
    DB.produits.alimentaire.forEach((prod) => {
        produits.push(prod as any);
    })

    DB.produits.chimique.forEach((prod) => {
        produits.push(prod as any);
    })

    DB.produits.materiel.incassable.forEach((prod) => {
        produits.push(prod as any);
    })

    DB.produits.materiel.fragile.forEach((prod) => {
        produits.push(prod as any);
    })
    return produits;
  };
  abstract produitParId(id: number): Produit ;
  abstract supprimerProduit():number;
  abstract ajouterProduits():number;
  abstract modifierProduits(): number;
  abstract affecterProduit(cargaison:number): number;


  static getLastId(): number{
    return this.getAllProduits().reduce((max, item) => item.id > max ? item.id : max, this.getAllProduits()[0].id);
  }
  static getAllProduits(): produitTypeComplete[]{
    return [...DB.produits.alimentaire, ...DB.produits.materiel.fragile,...DB.produits.materiel.incassable, ...DB.produits.chimique];
  }

}


import { Cargaison } from "./Cargaison.js";
import { Produit } from "./Produit.js";
import { IFrais } from "./IFrais.js";
import { DB } from "../DB.js";
import { IRoutiere } from "./ICargaison";
import { alimentaireType } from "./IProduits";

export class Routiere extends Cargaison{

  constructor(id?: number, libelle?: string, typec?: number, dateDepart?: string, dateArrive?: string, image?: string, distance?: number, etat?: number) {
    super(id, libelle, typec, dateDepart, dateArrive, image, distance, etat);
  }


  cargaisonParId(id: number): Cargaison {
    const cargo = DB.cargaison.routiere.values.find(cargo => cargo.id === id) as unknown;
    return cargo as Cargaison;
  }
  supprimerCargaison(): number {
    let result: number = 0
    const indexCargaison = DB.cargaison.routiere.values.findIndex(c => c.id === this.getId());
    if (indexCargaison) {
      DB.cargaison.routiere.values.splice(indexCargaison, 1);
      result = 1;
    }
    return result;
  }
  ajouterCargaison(): number {
    let cargaison : IRoutiere = {
      id: Cargaison.getLastId() + 1,
      libelle : this.getLibelle() as string,
      dateArrive : this.getDateArrive() as string,
      dateDepart : this.getDateDepart() as string,
      distance: this.getDistance() as number,
      typec: this.getTypeC() as number,
      image: this.getImage() as string,
      etat: this.getEtat() as number
    };
    return DB.cargaison.routiere.values.push(cargaison)
  }
  modifierCargaison(): number {
    const indexProduit = DB.cargaison.routiere.values.findIndex(p => p.id === this.id);
    DB.cargaison.routiere.values[indexProduit] = this.getCargaison();
    return 1;
  }


  getAllFrais(): Array<IFrais>{
    return DB.cargaison.routiere.fraisTransport;
  }

  calculerFrais(produit: alimentaireType): number {
    const frais = this.getAllFrais().find((frais ) => frais.typep == produit.typep) as IFrais
    return ((produit.poids as number  / frais.poids) * (this.distance as number/ frais.param) * frais.tarif) + frais.autreFrais;
  }



  ajouterProduit(produit: Produit): number {
    let result: number = 0
    if (produit.getTypeP() == 1){
      DB.produits.alimentaire.map((prod) => {
        if (prod.id == produit.getId()){
          result = 1;
          prod.cargaison = this.getId() as number
        }
      })
    }
    // else if(produit.getTypeP() == 2){
    //   DB.produits.chimique.map((prod) => {
    //     if (prod.id == produit.getId()){
    //       result = 1;
    //       prod.cargaison = this.getId() as number
    //     }
    //   })
    // }
    else if(produit.getTypeP() == 3){
      DB.produits.materiel.fragile.map((prod) => {
        if (prod.id == produit.getId()){
          result = 1;
          prod.cargaison = this.getId() as number
        }
      })
      DB.produits.materiel.incassable.map((prod) => {
        if (prod.id == produit.getId()){
          result = 1;
          prod.cargaison = this.getId() as number
        }
      })
    }
    return result;
  }

  sommeTotale(): number {
    let somme: number = 0;
    this.listerLesProduits().forEach((produit: any) =>{
      somme += this.calculerFrais(produit);
    })
    return somme;
  }

  nbrDeProduit(): number {
    return this.listerLesProduits().length;
  }

  listerLesProduits(): Produit[] {
    let produits: Produit[] = [];
    DB.produits.alimentaire.forEach((prod) => {
      if (prod.cargaison == this.getId()){
        produits.push(prod as any);
      }
    })

    DB.produits.materiel.incassable.forEach((prod) => {
      if (prod.cargaison == this.getId()){
        produits.push(prod as any);
      }
    })

    DB.produits.materiel.fragile.forEach((prod) => {
      if (prod.cargaison == this.getId()){
        produits.push(prod as any);
      }
    })
    // console.log(produits);
    return produits;
  }

  supprimerProduit(produit:Produit): number {
    let result: number = 0
    if (produit.getTypeP() == 1){
      DB.produits.alimentaire.map((prod) => {
        if (prod.id == produit.getId()){
          result = 1;
          prod.cargaison = 0
        }
      })
    }
    else if(produit.getTypeP() == 2){
      DB.produits.chimique.map((prod) => {
        if (prod.id == produit.getId()){
          result = 1;
          prod.cargaison = 0
        }
      })
    }
    else if(produit.getTypeP() == 3){
      DB.produits.materiel.fragile.map((prod) => {
        if (prod.id == produit.getId()){
          result = 1;
          prod.cargaison = this.getId() as number
        }
      })
      DB.produits.materiel.incassable.map((prod) => {
        if (prod.id == produit.getId()){
          result = 1;
          prod.cargaison = 0
        }
      })
    }

    return result;
  }
}
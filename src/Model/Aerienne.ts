import { Cargaison } from "./Cargaison.js";
import {DB} from "../DB.js";
import { Produit } from "./Produit.js";
import { IFrais } from "./IFrais.js";
import { IAerrienne } from "./ICargaison.js"
import { alimentaireType } from "./IProduits";

export class Aerienne extends Cargaison{

  constructor(id?: number, libelle?: string, typec?: number, dateDepart?: string, dateArrive?: string, image?: string, distance?: number, etat?: number) {
    super(id, libelle, typec, dateDepart, dateArrive, image, distance, etat);
  }

  cargaisonParId(id: number): Cargaison {
    const cargo = DB.cargaison.aerienne.values.find(cargo => cargo.id === id) as unknown;
    return cargo as Cargaison;
  }
  supprimerCargaison(): number {
    let result: number = 0
    const indexCargaison = DB.cargaison.aerienne.values.findIndex(c => c.id === this.getId());
    if (indexCargaison) {
      DB.cargaison.aerienne.values.splice(indexCargaison, 1);
      result = 1;
    }
    return result;
  }
  ajouterCargaison(): number {
    let cargaison : IAerrienne = {
      id: this.getId() as number,
      libelle : this.getLibelle() as string,
      dateArrive : this.getDateArrive() as string,
      dateDepart : this.getDateDepart() as string,
      distance: this.getDistance() as number,
      typec: this.getTypeC() as number,
      image: this.getImage() as string,
      etat: this.getEtat() as number
    };
    return DB.cargaison.aerienne.values.push(cargaison)
  }
  modifierCargaison(): number {
    const indexProduit = DB.cargaison.aerienne.values.findIndex(p => p.id === this.id);
    DB.cargaison.aerienne.values[indexProduit] = this.getCargaison();
    return 1;
  }
   getAllFrais(): Array<IFrais>{
     return DB.cargaison.aerienne.fraisTransport;
   }

  calculerFrais(produit: alimentaireType): number {
    const frais = this.getAllFrais().find((frais ) => frais.typep == produit.typep) as IFrais
    return ((produit.poids as number  / frais.poids) * (this.distance as number/ frais.param) * frais.tarif)+frais.autreFrais;
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

    DB.produits.chimique.forEach((prod) => {
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
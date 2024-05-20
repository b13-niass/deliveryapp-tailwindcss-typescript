import { Produit } from "./Produit.js";

export abstract class Cargaison{
  // protected id?: number;
  // protected libelle?: string;
  // protected typec?: number;
  // protected dateDepart?: string;
  // protected dateArrive?: string;
  // protected image?: string;
  // protected distance?: number;
  // protected produitsAccepter?: string[];
  // protected fraisTransport?: [];
  // protected etat?: number;

  constructor(protected id?: number,
  protected libelle?: string,
  protected typec?: number,
  protected dateDepart?: string,
  protected dateArrive?: string,
  protected image?: string,
  protected distance?: number,
  protected etat?: number) {
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

  setTypeC(typec: number){
    this.typec = typec;
  }
  getTypeC() : number|undefined{
    return this.typec
  }

  setDateDepart(dateDepart: string){
    this.dateDepart = dateDepart;
  }
  getDateDepart() : string|undefined{
    return this.dateDepart
  }

  setDateArrive(dateArrive: string){
    this.dateArrive = dateArrive;
  }
  getDateArrive() : string|undefined{
    return this.dateArrive
  }

  setImage(image: string){
    this.image = image;
  }
  getImage() : string|undefined{
    return this.image
  }

  setDistance(distance: number){
    this.distance = distance;
  }
  getDistance() : number|undefined{
    return this.distance
  }

  // setProduitsAccepter(produitsAccepter: string[]){
  //   this.produitsAccepter = produitsAccepter;
  // }
  // getProduitsAccepter() : string[]|undefined{
  //   return this.produitsAccepter
  // }
  //
  // setFraisTransport(fraisTransport: []){
  //   this.fraisTransport = fraisTransport;
  // }
  // getFraisTransport() : []|undefined{
  //   return this.fraisTransport
  // }

  setEtat(etat: number){
    this.etat = etat;
  }
  getEtat() : number|undefined{
    return this.etat
  }

  getCargaison(): Object{
    return {
      id: this.getId(),
      libelle: this.getLibelle,
      typec: this.getTypeC(),
      dateDepart: this.getDateDepart(),
      dateArrive: this.getDateArrive(),
      image: this.getImage(),
      distance: this.getDistance(),
      etat: this.getEtat()
    }
  }

  abstract ajouterProduit(produit: Produit):number;
  abstract calculerFrais(produit: any):number;
  abstract sommeTotale():number;
  abstract nbrDeProduit():number;
  abstract supprimerProduit(produit: Produit):number;
  abstract listerLesProduits():Produit[];
}
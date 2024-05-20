import {Produit} from "./Produit.js";
import { DB } from "../DB.js";
import {chimiqueType} from "./IProduits.js"

export class Chimique extends Produit{
    // private toxicite?: number;

     constructor(id?: number, libelle?: string,typep?: number, poids?: number,  image?: string,cargaison?: number, private toxicite?: number) {
         super(id, libelle, typep, poids, image, cargaison);
        // this.toxicite = toxicite;
    }

    setToxicite(toxicite: number){
        this.toxicite = toxicite;
    }
    getToxicite(){
        return this.toxicite;
    }


    listerLesProduits(): Produit[] {
        let produits: Produit[] = [];
        DB.produits.chimique.forEach((prod) => {
            produits.push(prod as any);
        })
        return produits;
    }
    produitParId(id: number): Produit {
        const produit = DB.produits.chimique.find(produit => produit.id === id) as unknown;
        return produit as Chimique;
    }
    supprimerProduit(): number {
        let result: number = 0
            const indexProduit = DB.produits.chimique.findIndex(p => p.id === this.getId());
        if (indexProduit) {
            DB.produits.chimique.splice(indexProduit, 1);
            result = 1;
        }
        return result;
    }
    ajouterProduits(): number {
        let produit : chimiqueType = {
            id: this.getId() as number,
            libelle : this.getLibelle() as string,
            cargaison : this.getCargaison() as number,
            poids : this.getPoids() as number,
            typep: this.getTypeP() as number,
            image: this.getImage() as string,
            toxicite: this.getToxicite() as number
        };
        return DB.produits.chimique.push(produit)
    }
    modifierProduits(): number {
        const indexProduit = DB.produits.chimique.findIndex(p => p.id === this.id);
        DB.produits.chimique[indexProduit].libelle = this.libelle as string;
        // DB.produits.alimentaire[indexProduit].cargaison = this.cargaison as number;
        DB.produits.chimique[indexProduit].poids = this.poids as number;
        DB.produits.chimique[indexProduit].typep = this.typep as number;
        DB.produits.chimique[indexProduit].image = this.image as string;
        return 1;
    }
    affecterProduit(cargaison:number): number {
        const indexProduit = DB.produits.chimique.findIndex(p => p.id === this.id);
        DB.produits.chimique[indexProduit].cargaison = cargaison
        return 1;
    }
    info(): string {
        return `${this.libelle} est un produit chimique de poids ${this.poids} et de toxicitee ${this.toxicite}`;
    }
}
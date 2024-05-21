import { DB } from "../DB.js";
export class Cargaison {
    id;
    libelle;
    typec;
    dateDepart;
    dateArrive;
    image;
    distance;
    etat;
    constructor(id, libelle, typec, dateDepart, dateArrive, image, distance, etat) {
        this.id = id;
        this.libelle = libelle;
        this.typec = typec;
        this.dateDepart = dateDepart;
        this.dateArrive = dateArrive;
        this.image = image;
        this.distance = distance;
        this.etat = etat;
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
    setTypeC(typec) {
        this.typec = typec;
    }
    getTypeC() {
        return this.typec;
    }
    setDateDepart(dateDepart) {
        this.dateDepart = dateDepart;
    }
    getDateDepart() {
        return this.dateDepart;
    }
    setDateArrive(dateArrive) {
        this.dateArrive = dateArrive;
    }
    getDateArrive() {
        return this.dateArrive;
    }
    setImage(image) {
        this.image = image;
    }
    getImage() {
        return this.image;
    }
    setDistance(distance) {
        this.distance = distance;
    }
    getDistance() {
        return this.distance;
    }
    setEtat(etat) {
        this.etat = etat;
    }
    getEtat() {
        return this.etat;
    }
    getCargaison() {
        return {
            id: this.getId(),
            libelle: this.getLibelle,
            typec: this.getTypeC(),
            dateDepart: this.getDateDepart(),
            dateArrive: this.getDateArrive(),
            image: this.getImage(),
            distance: this.getDistance(),
            etat: this.getEtat()
        };
    }
    static getLastId() {
        return this.getAllCargaison().reduce((max, item) => item.id > max ? item.id : max, this.getAllCargaison()[0].id);
    }
    static getAllCargaison() {
        return [...DB.cargaison.aerienne.values, ...DB.cargaison.maritime.values, ...DB.cargaison.routiere.values];
    }
}

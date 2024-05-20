interface FraisTransport {
  typep: number;
  tarif: number;
  poids: number;
  param: number;
  autreFrais: number;
}

interface Cargaison {
  produitsAccepter: string[];
  fraisTransport: FraisTransport[];
  values: any[];
}

interface Produits {
  alimentaire: any[];
  chimique: any[];
  materiel: {
    incassable: any[];
    fragile: any[];
  };
}

interface DBStructure {
  cargaison: {
    maritime: Cargaison;
    routiere: Cargaison;
    aerienne: Cargaison;
  };
  produits: Produits;
}
export const DB: DBStructure = {
  cargaison:
    {
      maritime: {
        produitsAccepter: [
          "chimique",
          "materiel",
          "alimentaire"
        ],
        fraisTransport: [
          {typep: 1, tarif: 90, poids: 1, param: 1, autreFrais: 5000},
          {typep: 2, tarif: 500, poids: 1,  param: 1, autreFrais: 10000},
          {typep: 3, tarif: 400, poids: 1,  param: 1, autreFrais: 0},
        ],
        values: []
      },
      routiere: {
        produitsAccepter: [
          "materiel",
          "alimentaire"
        ],
        fraisTransport: [
          {typep: 1, tarif: 100, poids: 1, param: 1, autreFrais: 5000},
          {typep: 3, tarif: 200, poids: 1,  param: 1, autreFrais: 0},
        ],
        values: []
      },
      aerienne: {
        produitsAccepter: [
          "materiel",
          "alimentaire"
        ],
        fraisTransport: [
          {typep: 1, tarif: 300, poids: 1, param: 1, autreFrais: 5000},
          {typep: 3, tarif: 1000, poids: 1,  param: 1, autreFrais: 0},
        ],
        values: []
      },
    },
  produits: {
    alimentaire: [],
    chimique: [],
    materiel: {
       incassable: [],
      fragile: []
    }
  }
}
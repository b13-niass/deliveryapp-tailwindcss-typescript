export const DB = {
    cargaison: {
        maritime: {
            produitsAccepter: [
                "chimique",
                "materiel",
                "alimentaire"
            ],
            fraisTransport: [
                { typep: 1, tarif: 90, poids: 1, param: 1, autreFrais: 5000 },
                { typep: 2, tarif: 500, poids: 1, param: 1, autreFrais: 10000 },
                { typep: 3, tarif: 400, poids: 1, param: 1, autreFrais: 0 },
            ],
            values: [
                {
                    id: 1,
                    libelle: "Maritime",
                    typec: 2,
                    dateDepart: "2024-01-05",
                    dateArrive: "2024-01-15",
                    image: "https://www.innovation24.news/wp-content/uploads/2020/01/shutterstock_1048692464.jpg",
                    distance: 1000,
                    etat: 0
                },
                {
                    id: 2,
                    libelle: "Maritime",
                    typec: 2,
                    dateDepart: "2024-05-25",
                    dateArrive: "2024-05-30",
                    image: "https://www.innovation24.news/wp-content/uploads/2020/01/shutterstock_1048692464.jpg",
                    distance: 1000,
                    etat: 1
                }
            ]
        },
        routiere: {
            produitsAccepter: [
                "materiel",
                "alimentaire"
            ],
            fraisTransport: [
                { typep: 1, tarif: 100, poids: 1, param: 1, autreFrais: 5000 },
                { typep: 3, tarif: 200, poids: 1, param: 1, autreFrais: 0 },
            ],
            values: [
                {
                    id: 3,
                    libelle: "Routiere",
                    typec: 1,
                    dateDepart: "2024-01-05",
                    dateArrive: "2024-01-15",
                    image: "https://static.actu.fr/uploads/2023/08/fourgon-livraison-adobestock-kirill-gorlov.jpeg",
                    distance: 1000,
                    etat: 0,
                },
                {
                    id: 4,
                    libelle: "Routiere",
                    typec: 1,
                    dateDepart: "2024-05-25",
                    dateArrive: "2024-05-30",
                    image: "https://static.actu.fr/uploads/2023/08/fourgon-livraison-adobestock-kirill-gorlov.jpeg",
                    distance: 1000,
                    etat: 1,
                }
            ]
        },
        aerienne: {
            produitsAccepter: [
                "materiel",
                "alimentaire"
            ],
            fraisTransport: [
                { typep: 1, tarif: 300, poids: 1, param: 1, autreFrais: 5000 },
                { typep: 3, tarif: 1000, poids: 1, param: 0, autreFrais: 0 },
            ],
            values: [
                {
                    id: 5,
                    libelle: "Aerienne",
                    typec: 3,
                    dateDepart: "2024-01-05",
                    dateArrive: "2024-01-15",
                    image: "https://www.lemoci.com/wp-content/uploads/2020/05/bollore-logistics-lvmh-pont-aerien-chine-29-mars-2020-roissy-cdg-scaled.jpg",
                    distance: 1000,
                    etat: 0,
                },
                {
                    id: 6,
                    libelle: "Aerienne",
                    typec: 3,
                    dateDepart: "2024-05-25",
                    dateArrive: "2024-05-30",
                    image: "https://www.lemoci.com/wp-content/uploads/2020/05/bollore-logistics-lvmh-pont-aerien-chine-29-mars-2020-roissy-cdg-scaled.jpg",
                    distance: 1000,
                    etat: 1,
                }
            ]
        },
    },
    produits: {
        alimentaire: [
            {
                id: 1,
                libelle: "riz",
                typep: 1,
                poids: 10,
                image: "https://placehold.co/400",
                cargaison: 1
            },
            {
                id: 2,
                libelle: "lait",
                typep: 1,
                poids: 10,
                image: "https://placehold.co/400",
                cargaison: 0
            },
            {
                id: 3,
                libelle: "pain",
                typep: 1,
                poids: 10,
                image: "https://placehold.co/400",
                cargaison: 0
            },
            {
                id: 4,
                libelle: "huile",
                typep: 1,
                poids: 10,
                image: "https://placehold.co/400",
                cargaison: 0
            }
        ],
        chimique: [
            {
                id: 5,
                libelle: "ammoniac",
                typep: 2,
                poids: 10,
                image: "https://placehold.co/400",
                cargaison: 0,
                toxicite: 5
            },
            {
                id: 6,
                libelle: "acide",
                typep: 2,
                poids: 10,
                image: "https://placehold.co/400",
                cargaison: 0,
                toxicite: 2
            },
            {
                id: 7,
                libelle: "oxyde",
                typep: 2,
                poids: 10,
                image: "https://placehold.co/400",
                cargaison: 0,
                toxicite: 8
            }
        ],
        materiel: {
            incassable: [
                {
                    id: 8,
                    libelle: "fourgon",
                    typep: 3,
                    poids: 10,
                    image: "https://placehold.co/400",
                    cargaison: 0,
                },
                {
                    id: 9,
                    libelle: "camion",
                    typep: 3,
                    poids: 10,
                    image: "https://placehold.co/400",
                    cargaison: 0,
                },
                {
                    id: 10,
                    libelle: "tracteur",
                    typep: 3,
                    poids: 10,
                    image: "https://placehold.co/400",
                    cargaison: 0,
                }
            ],
            fragile: [
                {
                    id: 11,
                    libelle: "tasse",
                    typep: 3,
                    poids: 10,
                    image: "https://placehold.co/400",
                    cargaison: 0,
                },
                {
                    id: 12,
                    libelle: "fleure",
                    typep: 3,
                    poids: 20,
                    image: "https://placehold.co/400",
                    cargaison: 0,
                },
                {
                    id: 13,
                    libelle: "bouteille",
                    typep: 3,
                    poids: 15,
                    image: "https://placehold.co/400",
                    cargaison: 0,
                }
            ]
        }
    }
};

let entreprise = {
    "nom" : "Google",
    "siègeSocial": [
        {
            "ville" : "TexGoogleplex",
            "departement" : "Mountain View",
            "etat" : "California",
            "pays" : "United States"
        }
    ],
    "fondateurs": [
        {
            "nom": "Page",
            "prenom": "Larry",
            "dateNaissance": "26/03/1973",
            "lieuNaissance": "East Lansing",
            "region": "Michigan"
        },
        {
            "nom": "Brin",
            "prenom": "Sergey",
            "dateNaissance": "21/08/1973",
            "lieuNaissance": "Moscou",
            "region": "Union Soviétique"
        }
    ],
    "chiffreAffaires": [
        {
            "date": 2008,
            "valeur": 16.49
        },
        {
            "date": 2012,
            "valeur": 37.97
        },
        {
            "date": 2016,
            "valeur": 89.46
        },
        {
            "date": 2018,
            "valeur": 136.2
        }
    ]
}


//Faites une boucle pour afficher les fondateurs de la société ainsi que les chiffres
//d’affaires de la société.

console.log("=== Information sur " + entreprise.nom + "===");

console.log("Siège social : "+ entreprise.siègeSocial);

console.log("=== Fondateurs ===");
for (let i = 0; i < entreprise.fondateurs.length; i++) {
    const fondateur = entreprise.fondateurs[i];
    console.log("- " + fondateur.nom +" " + fondateur.prenom + " n\é le " + fondateur.dateNaissance + " à " + fondateur.lieuNaissance);    
}

console.log("=== Chiffre d'affaires ===");
for (let i = 0; i < entreprise.chiffreAffaires.length; i++) {
    const ca = entreprise.chiffreAffaires[i];
    console.log("- " + ca.date +" : " + ca.valeur + " milliard de $ ");    
}


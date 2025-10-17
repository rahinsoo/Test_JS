// EXERCICE FONCTIONCONSTANTE
// • Ecrivez une fonction qui ne prend pas de paramètre et retourne le nombre 33.
// • Appelez cette méthode et affichez son résultat d’appel

console.log("=== EXERCICE FONCTION CONSTANTE===");

function constante() {
    let chiffre = 33;
    return chiffre;
}

let chiffre = constante();
console.log(chiffre);


console.log("=== FIN ===");
// EXERCICE BONJOURUNTEL
// • Ecrivez une fonction qui prend en paramètre une variable de type chaine de caractères
// et affichage « Bonjour » suivi de la variable.
// o Exemple : si le paramètre vaut "Marcel" alors la fonction affiche Bonjour
// Marcel
// • Appelez cette méthode et affichez son résultat d’appel

console.log("=== BONJOUR UNTEL ===");

function bonjourMoi(nom) {
    let tonNom = "Bonjour " + nom;
    return tonNom;

}
console.log(bonjourMoi("Xavier"));

console.log("=== FIN ===");

// EXERCICE FONCTIONCALCUL
// • Ecrivez une fonction qui prend 2 nombres a et b en paramètres et retourne le résultat
// suivant : a * b + a + b
// • Appelez cette méthode avec 2 nombres quelconques et affichez le résultat d’appel
// • Que se passe t’il si vous appelez cette fonction non pas avec des nombres mais avec
// des chaines de caractères ? Faites le test.

console.log("=== FONCTION CALCUL ===");

function fonctCalc(a, b) {
    let c = a * b + a + b;
    return c
}

console.log(fonctCalc(10, 5));
// si utilisation de mots "lemot", il est affiché : NaN pour la multiplication puis aditionne (concatène) lemot et le chifre

console.log("=== FIN ===");

// EXERCICE FONCTIONCONTROLETABLEAU
// • Créer une fonction qui vérifie le contenu d’un tableau
// o Si le tableau ne contient que des nombres alors la fonction retourne true
// o Sinon la fonction retourne false
// • Réalisez 3 appels à cette fonction avec :
// o Un tableau contenant des nombres
// o Un tableau contenant des nombres et une chaine de caractères
// o Un tableau vide.

console.log("=== FONCTION CONTROLE TABLEAU ===");

let array = [1, 15, -3, 8, 7, 4, -2, 28, -1, 17, 2, 3, 0, 14, -4];
let array2 = ["test", "vide", "plein", 28, -1, 17];
let array3 = [];

function controleTableau(tableau) {
    for (i = 0; i < tableau.length; i++) {
        // si tableau i est diff de number alors false
        if (typeof tableau[i] !== 'number') {
            return false;
        }
    }
    return true;
}

console.log(controleTableau(array));
console.log(controleTableau(array2));
console.log(controleTableau(array3));

console.log("=== FIN ===");


//EXERCICE FONCTIONMOYENNE
// • Créer une fonction qui calcule et retourne la moyenne d’un tableau passé en
// paramètre.
// • Cette fonction doit retourner un message d’erreur dans le cas où un élément du
// tableau n’est pas un nombre
// • Réalisez 3 appels à cette fonction avec :
// o Un tableau contenant des éléments
// o Un tableau vide. Que se passe-t-il dans ce second cas ? Faites-en sorte que
// votre fonction retourne 0 dans le cas où le tableau est vide.
// o Une chaine de caractères. Que se passe-t-il dans ce troisième cas ?

console.log("=== FONCTION MOYENNE ===");

let array4 = [1, 15, -3, 8, 7, 4, -2, 28, -1, 17, 2, 3, 0, 14, -4];


function fontionMoyenne(tableau) {
    let somme = 0;
    // boucle pour chercher dans le tableau
    for (i = 0; i < tableau.length; i++) {
        somme = somme + tableau[i];
    }
    // Je calcule la moyenne : 
    let moyenne = somme / i;

    return "La moyenne du tableau : " + moyenne;
}

console.log(fontionMoyenne(array4));
console.log(fontionMoyenne(array3)); // calcule avec un tableau vide
console.log(fontionMoyenne(array2)); // calcule avec un tableau contenant des lettres et des chiffres

console.log("=== FIN ===");

// EXERCICE FONCTIONMAJ
// • Créer une fonction qui prend en paramètre une chaine de caractères.
// • Cette fonction retourne la chaine de caractères passée en paramètre avec la première
// lettre en majuscule.

console.log("=== FONCTION MAJ ===");

let phrase = "je suis le plus fort"
console.log(phrase);
function maj(str) {

    str = str.charAt(0).toUpperCase() + str.slice(1);
    return str;

}

console.log(maj(phrase));

console.log("=== FIN ===");

// EXERCICE FONCTIONPHRASEMAJ
// • Créer une fonction qui prend en paramètre une chaine de caractères.
// • Cette fonction retourne cette chaine de caractères dans laquelle chaque mot a sa
// première lettre mis en majuscule
// • Exemple :
// o Si je passe à cette fonction la chaine de caractères "Bonjour tout le monde"
// o La fonction retourne alors "Bonjour Tout Le Monde"
// • Astuce : Cette fonction utilisera la fonction précédente pour la mise en majuscule de la
// première lettre de chaque mot.

console.log("=== FONCTION PHRASE MAJ ===");

let phrase2 = "je suis le plus fort"
console.log(phrase);
function maj2(str) {

    str = str.charAt(0).toUpperCase() + str.slice(1);
    return str;

}

console.log(maj2(phrase2));

console.log("=== FIN ===");

// EXERCICE FONCTION QUI RETOURNE UNE FONCTION
// • Créer une fonction qui prend en paramètre un entier n et retourne une fonction qui
// elle-même :
// o Prend en paramètre un nombre nb
// o Retourne ce nombre multiplié par n
// • Invoquez cette fonction avec 2 valeurs de n différentes et stockez le résultat dans 2
// variables différentes.
// • Les variables ainsi retournées sont également des fonctions
// 2• Invoquez ces fonctions avec un nombre nb et affichez le résultat

console.log("=== FONCTION QUI RETOURNE UNE FONCTION ===");

function creerMultiplicateur(n) {
    return function(nb) {
        // Multiplie le nombre donné (nb) par le 'n' mémorisé.
        console.log(`Calcul : ${nb} * ${n} = ${nb * n}`);
        return nb * n;
    };
}

console.log("--- Création des Multiplicateurs ---");

// multiParDix est maintenant une fonction qui a mémorisé n = 10.
const multiParDix = creerMultiplicateur(10); 
console.log("Variable 'multiParDix' est une fonction qui multiplie par 10.");
// console.log(multiParDix);
// multiParCinq est une AUTRE fonction qui a mémorisé n = 5.
const multiParCinq = creerMultiplicateur(5); 
console.log("Variable 'multiParCinq' est une fonction qui multiplie par 5.");


// Invoquer les fonctions retournées avec un nombre 'nb'.

console.log("\n--- Invocations des Fonctions Retournées ---");

let nombreDeTest = 7;

console.log(`\nTest avec le nombre ${nombreDeTest}:`);

// Elle utilise son 'n' mémorisé (10).
const resultatDix = multiParDix(nombreDeTest);
console.log(`Résultat de multiParDix(7) : ${resultatDix}`); // Affichera 70

console.log('---');

// Elle utilise son 'n' mémorisé (5).
const resultatCinq = multiParCinq(nombreDeTest);
console.log(`Résultat de multiParCinq(7) : ${resultatCinq}`); // Affichera 35

console.log("=== FIN ===");

// EXERCICE : GESTIONNAIRE DE TACHES
// Dans cet exercice nous allons créer un objet littéral permettant de gérer des tâches et qui doit
// permettre :
// 1. D'ajouter des tâches avec une description.
// 2. De marquer une tâche comme terminée.
// 3. D'afficher toutes les tâches, en précisant lesquelles sont terminées ou non.
// Instructions :
// • Créez une fonction creerGestionnaire() qui retourne un objet littéral contenant :
// •Une propriété tableau de taches
// •les méthodes suivantes :
// oajouterTache(description) : ajoute une nouvelle tâche.
// oterminerTache(index) : marque une tâche comme terminée, en fonction de
// son index.
// oafficherTaches() : affiche toutes les tâches avec leur état (terminée ou non).
// • Une tâche est représentée par un objet avec deux propriétés :
// odescription : la description de la tâche.
// oterminee : un booléen indiquant si elle est terminée.
// • Testez le gestionnaire en ajoutant, terminant et affichant des tâches.

console.log("=== GESTIONNAIRE DE TACHES ===");

function creerGestionnaire() {

    const gestionnaire = {
        taches: [],

        ajouterTache(description) {
            // Crée un nouvel objet tâche. Par défaut, elle n'est pas terminée (false).
            const nouvelleTache = {
                description: description,
                terminee: false
            };
            // Ajoute la nouvelle tâche au tableau 'taches'.
            this.taches.push(nouvelleTache);
            console.log(`Tâche ajoutée : "${description}"`);
        },

        terminerTache(index) {
            // Vérifie si l'index est valide (existe dans le tableau)
            if (index >= 0 && index < this.taches.length) {
                // Modifie la propriété 'terminee' de la tâche à l'index donné.
                this.taches[index].terminee = true;
                console.log(`Tâche n°${index + 1} ("${this.taches[index].description}") marquée comme terminée.`);
            } else {
                console.log(`Erreur : L'index ${index} n'est pas valide.`);
            }
        },

        
        // Méthode pour afficher la liste complète des tâches avec leur statut.
        
        afficherTaches() {
            console.log("\n--- Liste des Tâches ---");

            // Vérifie si le tableau est vide
            if (this.taches.length === 0) {
                console.log("Aucune tâche pour le moment !");
                return;
            }

            // Parcourt le tableau de tâches
            this.taches.forEach((tache, index) => {
                // Détermine le statut à afficher (texte + emoji)
                const statut = tache.terminee ? "TERMINÉE" : "EN COURS";

                // Affiche l'index (pour l'utilisateur, on commence à 1), le statut et la description.
                console.log(`${index + 1}. [${statut}] - ${tache.description}`);
            });
            console.log("------------------------\n");
        }
    };

    return gestionnaire;
}

// --- Partie de Test et d'Utilisation ---

// 1. Création d'une instance du gestionnaire de tâches
const monGestionnaire = creerGestionnaire();
console.log("--- Initialisation du Gestionnaire ---");

// 2. Ajout de tâches
monGestionnaire.ajouterTache("Faire les courses");     // Index 0
monGestionnaire.ajouterTache("Écrire le rapport JS");  // Index 1
monGestionnaire.ajouterTache("Appeler le dentiste");   // Index 2

// 3. Affichage initial des tâches
monGestionnaire.afficherTaches();

// 4. Marquer la deuxième tâche (index 1) comme terminée
monGestionnaire.terminerTache(1);

// 5. Marquer la première tâche (index 0) comme terminée
monGestionnaire.terminerTache(0);

// 6. Affichage final pour voir les tâches terminées
monGestionnaire.afficherTaches();

// Test d'un index invalide
monGestionnaire.terminerTache(99);

console.log("=== FIN ===");
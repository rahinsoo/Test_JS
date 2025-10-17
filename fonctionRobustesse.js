// EXERCICE FONCTIONMOYENNE
// o Améliorez votre fonction afin que cette dernière renvoie une exception dans le
// cas où le paramètre reçu par la fonction n’est pas un nombre
// o Améliorez votre fonction afin que cette dernière renvoie une exception dans le
// cas où un élément du tableau n’est pas un nombre
// o Mettez en œuvre plusieurs appels différents pour tester :
// ▪ Le cas avec un tableau nombre
// ▪ Le cas avec un tableau contenant des nombres et une chaine de
// caractères
// ▪ Le cas avec un paramètre qui n’est pas un tableau
// o Mettez en place les blocs try / catch afin de sécuriser les appels.

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

// EXERCICE BONJOURUNTEL
// • Ajoutez un contrôle qui vérifie que le paramètre est bien une chaine de caractères.
// Dans le cas contraire, renvoyez un message d’erreur.

console.log("=== BONJOUR UNTEL ===");

function bonjourMoi(nom) {
    let tonNom = "Bonjour " + nom;
    return tonNom;

}
console.log(bonjourMoi("Xavier"));

console.log("=== FIN ===");

// EXERCICE FONCTIONCALCUL
// • Ajoutez un contrôle qui vérifie que les paramètres sont bien des nombres, dans le cas
// contraire affichez un message d’erreur.

console.log("=== FONCTION CALCUL ===");

function fonctCalc(a, b) {
    let c = a * b + a + b;
    return c
}

console.log(fonctCalc(10, 5));
// si utilisation de mots "lemot", il est affiché : NaN pour la multiplication puis aditionne (concatène) lemot et le chifre

console.log("=== FIN ===");

// EXERCICE FONCTIONCONTROLETABLEAU
// • Dans le cas où un élément du tableau n’est pas un nombre renvoyez un message
// d’erreur

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


// EXERCICE FONCTIONMAJ
// • Dans le cas où le paramètre n’est pas une chaine de caractères, renvoyez un message
// d’erreur

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
// • Dans le cas où le paramètre n’est pas une chaine de caractères, renvoyez un message
// d’erreur

console.log("=== FONCTION PHRASE MAJ ===");

let phrase2 = "je suis le plus fort"
console.log(phrase);
function maj2(str) {

    str = str.charAt(0).toUpperCase() + str.slice(1);
    return str;

}

console.log(maj2(phrase2));

console.log("=== FIN ===");
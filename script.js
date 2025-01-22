// Déclaration des variables
let phrase = "A ce point de contrôle, on vous demande d'écrire un algorithme qui lit une phrase, qui se termine par un point, caractère par caractère, et de déterminer.";
let longueur = 0;
let mots = 1;
let voyelles = 0;

// Parcours de la phrase
for (let i = 0; i < phrase.length; i++) {
    // Incrémentation de la longueur
    longueur++;
    // Si le caractère est un espace
    if (phrase[i] === " ") {
        // Incrémentation du nombre de mots
        mots++;
    }
    // Si le caractère est une voyelle
    if (phrase[i] === "a" || phrase[i] === "e" || phrase[i] === "i" || phrase[i] === "o" || phrase[i] === "u" || phrase[i] === "y") {
        // Incrémentation du nombre de voyelles
        voyelles++;
    }
}


console.log("nombre de caractères : " , longueur);
console.log("nombre de mots : " , mots);
console.log("nombre de voyelles : " , voyelles);

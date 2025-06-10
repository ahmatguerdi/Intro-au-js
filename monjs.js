/* ma variable globale qui pose une question de savoir : 
    C */

let question = "quelle est ta satisfaction?";
//let questionSavoir;

// Ma fonction : I
function questionnaire () {
    //ma variable locale : B
    questionSavoir = "Pourquoi satisfaire un besoin?" ;
    console.log(question, questionSavoir);
}
questionnaire ();

//Test de la variable locale et celle du globale
console.log(questionSavoir);


// Les données du type primitif: D

let estVrai = true; //boolean
let estFaux = false; // boolean : bouléen 
let nul= null;       //null : nulle
let indefi;          // Undefined : non défini
let nombre = 4;      // number or bigInt : un entier
let Deuxnombre = 2.0; // double or float : nombre qui contient de virgule
let chaine = "Actionner vos paroles!";  // varchar: chaîne de caractère 

// Les données du type non primitif

let monTableau = [1, 2, 3]; // array : un tableau
let maFonction = function() { console.log("Hello"); };  // une fonction
let monObjet = { nom: "John", age: 30 }; // un objet
console.log(monObjet, monTableau, maFonction); 

//Structure conditionnelle : if
// if (condition) {
//      Code à exécuter si la condition est vraie
//   } 



// Utilisation dans une condition le boolean : F

if (estVrai) {
  console.log("La condition est vraie");
}

// Switch : G

// switch (expression) {
//     case valeur1:
//       Instructions à exécuter lorsque le résultat
//       de l'expression correspond à valeur1
//       instructions1;
//       [break;]
//     case valeur2:
//       Instructions à exécuter lorsque le résultat
//       de l'expression correspond à valeur2
//       instructions 2;
//       [break;]
//       ....
//    default:
//      Instructions à exécuter lorsque le résultat
//      [break;]
//  }


// exemple de cas d'utilisation de switch

const desserts = "gâteau";

switch (desserts) {
  case "gâteau":
    console.log("Délicieux");
    break;
  case "fruit":
    console.log("banane");
    break;
  case "boisson":
  case "miel":
    console.log("coca cola");
    break;
  default:
    console.log("mal chanceux");
    break;
}


//  Boocles

for (let pas = 1; pas < 5; pas++) {
    console.log("Faire " + pas + " pas vers l'INSTA");
  }
  

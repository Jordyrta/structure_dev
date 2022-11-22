/*
Objectif :
- Demandez de faire un choix entre addition – soustraction – multiplication – division
- Indice : pour un retour à la ligne « \n » tant que l’utilisateur ne choisis pas une des quatre
proposition il serait bien de répéter la question.
- Demandez de rentrer un nombre, puis un deuxieme
- Indice : Répéter la demande si un nombre n’est pas rentré, je vous laisse chercher la
fonction qui permet de checker cela.
- Crée 4 fonctions correspond aux 4 méthodes de calculs
- Selon le choix de l’utilisateur appelé la fonction correspondante
- Affichez le résultat
- Proposez à l’utilisateur de recommencer
*/

/*
alert("Quel opération voulez vous faire ? (choisisez un numéro)");

do{
    var choice = prompt("1- addition \n 2- soustraction \n 3- multiplication \n 4- division"); 
} while (choice === "" || choice > 4);

*/

//------------------------------------------------------------------------------------EXO -------------------------------------------------------------------------------//
do {
    do {
        var choix = parseInt(prompt("Quel opération voulez vous faire ? \n 1 - Addition \n 2 - Soustraction \n 3 - Multiplication \n 4 - Division"))
        } while (choix < 1 || choix > 4 || isNaN(choix));

    do {
        var num1 = parseInt(prompt("Entrez une valeur"))
        } while (isNaN(num1));
    
    do {
        var num2 = parseInt(prompt("Entrez la deuxieme valeur"))
        } while (isNaN(num2));
} while (`Voulez vous recommencer ?`);    
 
function addition(num1, num2) {
    let result = num1 + num2
    alert(result)
}
 
function soustraction() {
    let result = num1 - num2
    alert(result)
}
 
function multiplication() {
    let result = num1 * num2
    alert(result)
}
 
function division() {
    let result = num1 / num2
    alert(result)
}
 
try{
    switch(choix) {
        case 1:
        addition(num1,num2);
        break;
 
        case 2:
        soustraction();
        break;
 
        case 3:
        multiplication();
        break;
 
        case 4:
        division();
        break;
        default:
    }
} 

catch(e) {
    alert(e)
}

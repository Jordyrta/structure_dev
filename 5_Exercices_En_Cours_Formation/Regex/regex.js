// const paragraph = 'Coucou Le Monde On Est 10 !';
// const resultat = /[0-9]/g;
// const resultat2 = /[A-Z]/g;
// const found = paragraph.match(resultat);
// const found2 = paragraph.match(resultat2);
// console.log(found); 
// console.log(found2);

/*
    écrivez un test pour vérifié si la première lettre est en majuscule
*/

// function upperCase(chaineATester)
// {
//    let regexp = /^[A-Z]/;
//    console.log(regexp.test(chaineATester));
//    console.log(chaineATester.match(regexp));
//    if (regexp.test(chaineATester))
//     {
//       console.log("La première lettre est en majuscule");
//     } 
//     else
//     {
//       console.log("La première lettre n'est pas en maujuscule");
//     }
// }

// upperCase('Abcd');
// upperCase('abcd');

let email = document.querySelector(".email");
let password = document.querySelector(".password");
let boutton = document.querySelector(".boutton");
let explication = document.querySelector("p");

let mailformat = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
let mdpformat = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$.!?&])[A-Za-z\d@$.!?&]{6,}$/;

function ValidEmail(){
    if(mailformat.test(email.value)) {
        email.style.backgroundColor = "green"
    } else {
        email.style.backgroundColor = "red"
    }
}

function ValidPassword(){
    if(mdpformat.test(password.value)) {
        explication.textContent = "Le password est valide"
        explication.style.border = "solid"
        explication.style.borderColor = "green"
    } else {
        explication.textContent = "le password est :"
        explication.style.border = "solid"
        explication.style.borderColor = "red"
        console.log(password.value);
    }
}

boutton.addEventListener("click", function(){
    ValidEmail(); ValidPassword();
})
/*
let date = new Date();

let dateFrWithLocaleString = date.toLocaleString(navigator.language,{
    day : "numeric",
    year : "numeric",
    month:"long",
    weekday:"long"
})

alert(dateFrWithLocaleString)
*/

let date = new Date(2021,04,20);
let dateFr = date.toLocaleString(navigator.language,{
day : "numeric",
year : "numeric",
month:"long",
weekday:"long"
})
console.log(dateFr)
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeCross = document.querySelectorAll(".close")
const inputIn = document.querySelectorAll(".text-control")
const formeInfo = document.getElementById('formeInfo')
const welPage = document.getElementById('welcome-page')
const welButton = document.getElementById('welcome-btn')
const listRadio = [
  document.getElementById('location1'),
  document.getElementById('location2'),
  document.getElementById('location3'),
  document.getElementById('location4'),
  document.getElementById('location5'),
  document.getElementById('location6'),
]


let firstChecked = true
let lastChecked = true
let emailChecked = true
let birthdateChecked = true
let quantityChecked = true
let radioChecked = false;
let checkbox1Checked = true


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}


// close modal event
closeCross.forEach((exit) => exit.addEventListener("click", closeModal));
// close modal form
function closeModal() {
  modalbg.style.display = "none";
}


// (1) Le champ Prénom a un min de 2 caractères / n'est pas vide
// (2) Le champ Nom a un min de 2 caractères / n'est pas vide
// (3) L'adresse électronique est valide
// (4) Pour le nombre de concours, une valeur numerique est saisie
// (5) Un bouton radio est sélectionné
// (6) La case des conditions générales est cochée



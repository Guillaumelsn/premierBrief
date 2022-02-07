console.log("hello");



// ========================> types de jeux
var limited = document.getElementById("maDIV");
var construit = document.getElementById("maDIV2");
var commander = document.getElementById("maDIV3");

function maFonction() {
    construit.style.display = "none";
    limited.style.display = "flex";
    commander.style.display = "none";

}

function maFonction2() {
    construit.style.display = "flex";
    limited.style.display = "none";
    commander.style.display = "none";
}
function maFonction3() {
    commander.style.display = "flex";
    construit.style.display = "none";
    limited.style.display = "none";
}
// ========================> types de jeux

// ===============================> couleur

var base = document.getElementById("base");
var white = document.getElementById("white");
var blue = document.getElementById("blue");
var dark = document.getElementById("black");
var green = document.getElementById("green");
var red = document.getElementById("red");


function gametype() {
    white.style.display = "none";
    base.style.display = "block";
    blue.style.display = "none";
    dark.style.display = "none";
    green.style.display = "none";
    red.style.display = "none";
}
function gametype1() {
    white.style.display = "block";
    base.style.display = "none";
    blue.style.display = "none";
    dark.style.display = "none";
    green.style.display = "none";
    red.style.display = "none";
}
function gametype2() {
    white.style.display = "none";
    base.style.display = "none";
    blue.style.display = "block";
    dark.style.display = "none";
    green.style.display = "none";
    red.style.display = "none";
}
function gametype3() {
    white.style.display = "none";
    base.style.display = "none";
    blue.style.display = "none";
    dark.style.display = "block";
    green.style.display = "none";
    red.style.display = "none";
}
function gametype4() {
    white.style.display = "none";
    base.style.display = "none";
    blue.style.display = "none";
    dark.style.display = "none";
    green.style.display = "none";
    red.style.display = "block";
}
function gametype5() {
    white.style.display = "none";
    base.style.display = "none";
    blue.style.display = "none";
    dark.style.display = "none";
    green.style.display = "block";
    red.style.display = "none";
}

// ===============================> couleur
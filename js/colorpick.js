var colorWell
var defaultColor = "#fffff";

window.addEventListener("load", startup, false);

function startup() {
  colorWell = document.querySelector("#colorWell");
  colorWell.value = defaultColor;
  colorWell.addEventListener("input", updateFirst, false);
  colorWell.addEventListener("change", updateAll, false);
  colorWell.select();
}

function updateFirst(event) {
  var p = document.querySelector("a");

  if (p) {
    p.style.color = event.target.value;
  }
}

function updateAll(event) {
  document.querySelectorAll("a").forEach(function(p) {
    p.style.color = event.target.value;
  });
}

//  dark mode  =======================>

function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}
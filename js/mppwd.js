/*---------------------------------------------------------------------Función para el menu---------------------------------------------------------------------*/
function men(){ 
    document.getElementById("contmenu").classList.toggle("mostrar");
}
/*------------------------------------------------------------Función para el Movimiento del Btn Menú------------------------------------------------------------*/
function myFunction(x) {
  x.classList.toggle("change");
}
/*------------------------------------------------------------------Función para los Sub-menus------------------------------------------------------------------*/

var versubmenu = document.getElementsByClassName("cont-submenu");
var i;

for (i = 0; i < versubmenu.length; i++) {
  versubmenu[i].addEventListener("click", function() {
    var contbelleza = this.nextElementSibling;
    if (contbelleza.style.display === "block"){
      contbelleza.style.display = "none";
    } else {
      contbelleza.style.display = "block";
    }
  });
}

/*---------------------------------------------------------Función para el Boton de Volver Hacia Arriba---------------------------------------------------------*/

window.onscroll = function() {subir()};

function subir() {
    if (document.body.scrollTop > 180 || document.documentElement.scrollTop > 180) {
    document.getElementById("btnvolveri").style.display = "block";
    } else {
    document.getElementById("btnvolveri").style.display = "none";
    }
};

function arribafun() {
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
};
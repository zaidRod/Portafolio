//Llamado a la función para copiar el correo
window.onload = function() {
    copiarPorta();
}

let menuVisible = false;
// Funcion que oculta y muestra el menu
function mostrarOcultarMenu() {
    if (menuVisible) {
        document.getElementById("nav").classList = "";
        menuVisible = false;
    } else {
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }


}


/* document.querySelectorAll(".modal-Contenedor img").forEach(el=>{
    el.addEventListener("click", function(ev){  
        ev.stopPropagation();
        this.parentNode.classList.add("active");
        console.log("click");
    })
}); */

/* document.querySelectorAll(".modal-Contenedor img").forEach(el=>{
    el.addEventListener("click", function(){
        this.parentNode.remove("active");
    })
}); */


function copiarPorta() {
    document.getElementById("copiarPorta").addEventListener("click", function (event) {
        //Evita que al ser un enlace se ejecute el comportamiento normal.
        event.preventDefault();
        let correo = "zaidrod08@gmail.com";
        navigator.clipboard.writeText(correo).then(() => alert("¡Correo copiado!")).catch(error => alert("Error al copiar" + error));
    })

}

function seleccionar() {
    // oculto el menu y las que se selecciona una opción

    document.getElementById("nav").classList = "";
    menuVisible = false;
}


let menuVisible = false;
// Funcion que oculta y muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList="responsive";
        menuVisible= true;
    }


}

function seleccionar(){
    // oculto el menu ynas que se selecciona una opción

    document.getElementById("nav").classList="";
    menuVisible= false;
}

// Función que aplica las animaciones a las habilidades

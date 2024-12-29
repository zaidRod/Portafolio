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

function seleccionar() {
    // oculto el menu ynas que se selecciona una opción

    document.getElementById("nav").classList = "";
    menuVisible = false;
}

function descargarCv() {
    const enlace = document.createElement("a");
    enlace.href = "img/Curriculum Z Prog Dic 2024.pdf"; // Ruta al archivo PDF
    enlace.download = "Zaid_Rodriguez_CV.pdf";          // Nombre del archivo al descargar
    enlace.style.display = 'none';                       // Asegura que el enlace no se vea
    document.body.appendChild(enlace);                   // Agrega el enlace al DOM
    enlace.click();                                     // Simula un clic para descargar
  
  }

var fuente = document.getElementById("fuente")
var advertencia = document.getElementById("advertencia")

function buscar() {
    var terminoABuscar = fuente.value
    if(terminoABuscar == ""){
        advertencia.style.display = "block"
        return
    }

    var urlRedireccion = obtenerURL(terminoABuscar)

    location.assign(urlRedireccion)
}

function verificarSiPresionoEnter(event) {
    // if (event.key == "Enter"){
    if (event.keyCode == 13){
        buscar()
    }
}

// Exportar
// Complejo
function obtenerURL(termino) {
    var urlPrefijo = "https://www.google.com/search?q="
    var busquedaArray = termino.split(" ")
    var busquedaFormateada = ""

    busquedaArray.forEach(palabra => {
        busquedaFormateada += palabra + "+"
    })

    var url = urlPrefijo + busquedaFormateada

    return url 
}
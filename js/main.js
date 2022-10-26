//Guardar el estado(columna activa)
let columnaActiva = 1

//Seleccionar las columnas
const columnas = document.querySelectorAll(".columna")

//Escuchar los "clicks" en cada una de ella
columnas.forEach((columna, indice) => {
    columna.addEventListener("click", function(){
        CambiarColumna(indice)
    })
})

//Cambiar el estado de las columnas
function CambiarColumna(indice) {
    columnas[columnaActiva].classList.remove("activa")
    columnas[indice].classList.add("activa")
    columnaActiva = indice

}
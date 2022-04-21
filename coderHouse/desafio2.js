function mostrarLista(lista) {
    result = lista ? lista : "lista vacia"
    console.log(result)
}

mostrarLista([1,2,"tres"])
mostrarLista()
mostrarLista([])

const funcionAnonima = function (lista) {
    result = (!lista.length) ? lista : "lista vacia"
    console.log(result)
}([4,5,6])

function crearMultiplicar(num1) {
    let multiplicar = function (num2) {
        return num1 * num2
    }
    return multiplicar
}

console.log(crearMultiplicar(3)(7))

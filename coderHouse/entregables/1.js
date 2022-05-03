class Usuario {
    constructor(nombre, apellido, libros, mascotas) {
        this.nombre = nombre ?? ''
        this.apellido = apellido ?? ''
        this.libros = libros ?? []
        this.mascotas = mascotas ?? []
    }

    getFullName() {
        return `${this.nombre} ${this.apellido}`
    }

    addMascota(name) {
        this.mascotas.push(name)
    }

    countMascotas() {
        return this.mascotas.length
    }

    addBook(nombre, autor) {
        this.libros.push({ nombre: nombre, autor: autor })
    }

    getBookNames() {
        return this.libros.map((libro) => libro.nombre)
    }
}

usuarioVacio = new Usuario()
console.log(
    'usuario vacio logs:',
    usuarioVacio.getFullName(),
    usuarioVacio.countMascotas(),
    usuarioVacio.getBookNames()
)

usuarioLector = new Usuario(
    'pablo',
    'montenegro',
    [{ nombre: 'Fitzgerald', autor: 'Gatsby' }],
    ['perro', 'gato', 'pajaro']
)
console.log(
    'usuarioLector logs:',
    usuarioLector.getFullName(),
    usuarioLector.countMascotas(),
    usuarioLector.getBookNames()
)

usuarioLector.addBook('salinger', 'For Esme')
usuarioLector.addMascota('tortuga')

console.log(
    'usuarioLector plus logs:',
    usuarioLector.getFullName(),
    usuarioLector.countMascotas(),
    usuarioLector.getBookNames()
)

usuarioLector1 = new Usuario(
    'pablo1',
    'montenegro1',
    [{ nombre: 'Fitzgerald1', autor: 'Gatsby1' }],
    ['perro1', 'gato1', 'pajaro1']
)

usuarioLector2 = new Usuario(
    'pablo2',
    'montenegro2',
    [{ nombre: 'Fitzgerald2', autor: 'Gatsby2' }],
    ['perro2', 'gato2', 'pajaro2']
)

module.exports = { usuarioLector1, usuarioLector2 }

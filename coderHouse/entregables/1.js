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

    countMascotas() {
        return this.mascotas.length
    }

    addBook(nombre, autor) {
        this.libros.push({nombre: nombre, autor: autor})
    }

    getBookNames() {
        return this.libros.map(libro => libro.nombre)
    }

}


usuarioVacio = new Usuario()
console.log("usuario vacio logs =",
    usuarioVacio.getFullName(), 
    usuarioVacio.countMascotas(), 
    usuarioVacio.getBookNames()
    )

usuarioLector = new Usuario('pablo', 'montenegro', [{nombre: 'Fitzgerald', autor: 'Gatsby'}], ['perro', 'gato', 'pajaro'])
usuarioLector.addBook('salinger', 'For Esme'), 
console.log("usuarioLector logs =",
    usuarioLector.getFullName(), 
    usuarioLector.countMascotas(), 
    usuarioLector.getBookNames()
    )

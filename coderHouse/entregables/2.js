const fs = require('fs')

// convierte a Json
const indentado = ' '
function serialize(object) {
    return JSON.stringify(object, null, indentado)
}

// devuelve el maximo ID de objetos en un archivo
function getMaxId(filename) {
    const ids = getFileObjects(filename).map((object) => object.id)
    const idMax = Math.max(...ids)
    return idMax > 0 ? idMax : 0
}

// recupera los objetos de un archivo
function getFileObjects(filename) {
    try {
        const fileContent = fs.readFileSync(filename, 'utf-8')
        return JSON.parse(fileContent)
    } catch (error) {
        //Posibles errroes: archivo no existe, está vacio o no es JSON valido
        fs.writeFileSync(filename, '[]', 'utf-8')
        return []
    }
}

class Contenedor {
    constructor(filename) {
        this.filename = filename
        this.init = function () {
            this.baseId = getMaxId(filename)
        }
        this.init()
    }

    writeInFile(objects, shift) {
        try {
            fs.writeFileSync(this.filename, serialize(objects))
            this.baseId = this.baseId + shift
        } catch (error) {
            return 'error de escritura'
        }
    }

    save(objeto) {
        const objetosArray = getFileObjects(this.filename)
        objeto.id = this.baseId + 1
        objetosArray.push(objeto)
        this.writeInFile(objetosArray, 1)
    }

    getById(id) {
        return getFileObjects(this.filename).find((object) => object.id === id)
    }
    getAll() {
        return getFileObjects(this.filename)
    }
    deleteById(id) {
        const objects = getFileObjects(this.filename).filter(
            (object) => object.id != id
        )
        this.writeInFile(objects, 0)
    }
    deleteAll() {
        fs.writeFileSync(this.filename, '')
    }
}

//data pruebas:
const archivo = './productos.txt'
const objeto1 = {
    title: 'titulo1',
    price: 10,
    thumbnail: 'www.thum1.com',
}
const objeto2 = {
    title: 'titulo2',
    price: 20,
    thumbnail: 'www.thum2.com',
}
const objeto3 = {
    title: 'titulo3',
    price: 30,
    thumbnail: 'www.thum3.com',
}
// llamados prueba:
const cont = new Contenedor(archivo)
cont.save(objeto1)
cont.save(objeto2)
cont.save(objeto3)
console.log('object of id 2:', cont.getById(2))
cont.getAll()
cont.deleteById(1)
console.log('all objects menos el de id 1', cont.getAll())
cont.save(objeto2)
cont.deleteAll()

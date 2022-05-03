const fs = require('fs')
const { usuarioLector1, usuarioLector2 } = require('./1')

var numero = 10
const indentado = ' '

function serialize(object) {
    return JSON.stringify(object, null, indentado)
}

function getMaxId(filename) {
    console.log('filenameobj', getFileObjects(filename))
    const ids = getFileObjects(filename).map((object) => object.id)
    const idMax = Math.max(...ids)
    console.log(idMax > 0 ? idMax : 0)
    return idMax > 0 ? idMax : 0
}

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
            this.firstId = getMaxId(filename)
        }
        this.init()
    }

    writeInFile(objects, shift) {
        try {
            fs.writeFileSync(this.filename, serialize(objects))
            this.totalIds = this.totalIds + shift
        } catch (error) {
            return
        }
    }

    save(objeto) {
        const objetosArray = getFileObjects(this.filename)
        objeto.id = this.totalIds + 1
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

// const objeto = objetoImportado
const archivo = './coderhouse/entregables/file' + numero.toString() + '.json'
cont1 = new Contenedor(archivo)
cont1.save(usuarioLector1)
cont1.save(usuarioLector2)
cont1.save(usuarioLector2)
cont1.save(usuarioLector2)
cont1.deleteById(2)
console.log(cont1.getById(2), cont1.getById(4))
cont1.getById(2)
// cont1.deleteAll()
// puede pasar que elemento2 y elemento1 se mezclen al escribirse en el archivo?

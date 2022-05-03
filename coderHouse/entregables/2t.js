const fs = require('fs')
const { usuarioLector1, usuarioLector2 } = require('./1')

var numero = 2
const indentado = ' '

function serialize(object) {
    return JSON.stringify(object, null, indentado)
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
        this.totalObjects = 0
    }
    save(objeto) {
        const objetosArray = getFileObjects(this.filename)
        objeto.id = this.totalObjects + 1
        objetosArray.push(objeto)

        try {
            fs.writeFileSync(this.filename, serialize(objetosArray))
            this.totalObjects = this.totalObjects + 1
        } catch (error) {}
    }
}

// const objeto = objetoImportado
const archivo = './coderhouse/entregables/file' + numero.toString() + '.json'
cont1 = new Contenedor(archivo)
cont1.save(usuarioLector1)
cont1.save(usuarioLector2)
// puede pasar que elemento2 y elemento1 se mezclen al escribirse en el archivo?

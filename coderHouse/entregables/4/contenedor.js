import fs from 'fs'

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

export default Contenedor

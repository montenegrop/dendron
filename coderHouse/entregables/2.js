const fs = require('fs')
const { METHODS } = require('http')
const objetoImportado = require('./1')
const functionname = require('../functionName')
;('use strict')

function serialize(object) {
    return JSON.stringify(object)
}

class Contenedor {
    constructor(filename) {
        this.filename = filename
        this.totalObjects = 0
    }
    save(objeto) {
        console.log(functionname())
        try {
            fs.writeFile(this.filename, serialize(objeto), (error) => {
                if (error) {
                    console.log('error de save', method.getName(), error)
                } else {
                    console.log('exito')
                }
            })
            return this.totalObjects + 1
        } catch (error) {
            console.log('error al llamar a save:', error)
        }
    }
}

const objeto = objetoImportado
const archivo = './2.prueba.txt'

cont1 = new Contenedor(archivo)
cont1.save(objeto)

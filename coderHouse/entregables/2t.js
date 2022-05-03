const fs = require('fs')
const { usuarioLector1, usuarioLector2 } = require('./1')

function serialize(object) {
    return JSON.stringify(object)
}

// function checkEmptyFile(filename) {}

class Contenedor {
    constructor(filename) {
        this.filename = filename
        this.totalObjects = 0
    }
    save(objeto) {
        const methodName = 'save'
        let array = []
        console.log(this.totalObjects, '0')
        if (true) {
            console.log(this.filename)
            fs.readFile(
                this.filename,
                { encoding: 'utf-8' },
                (error, contenido) => {
                    if (error) {
                        console.log(methodName + 'readfile error')
                    } else {
                        array = contenido
                    }
                }
            )
        }

        try {
            fs.appendFile(this.filename, serialize(objeto) + '\n', (error) => {
                if (error) {
                    console.log('error de ' + methodName, error)
                } else {
                    console.log('exito de ' + methodName)
                    this.totalObjects = this.totalObjects + 1
                    console.log(this.totalObjects)
                    return this.totalObjects
                }
            })
        } catch (error) {
            console.log('error al llamar al metodo ' + methodName, error)
        }
    }
}

// const objeto = objetoImportado
const archivo = './2.prueba.txt'
const elemento1 = [
    'pablo1',
    'montenegro1',
    [{ nombre: 'Fitzgerald1', autor: 'Gatsby1' }],
    ['perro1', 'gato1', 'pajaro1'],
]
const elemento2 = [
    'pablo1',
    'montenegro1',
    [{ nombre: 'Fitzgerald1', autor: 'Gatsby1' }],
    ['perro1', 'gato1', 'pajaro1'],
]

cont1 = new Contenedor(archivo)
cont1.save(elemento1)
cont1.save(elemento2)

// puede pasar que elemento2 y elemento1 se mezclen al escribirse en el archivo?

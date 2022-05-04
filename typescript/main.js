const fs1 = require('fs')
const fs = fs1.promises

archivo = './eee.js'

let arr1 = ''
let arr2 = ''
let arr3 = ''
for (let index = 0; index < 3; index++) {
    arr1 = arr1.concat('1')
    arr2 = arr2.concat('2')
    arr3 = arr3.concat('3')
}

async function pablo() {
    console.log('init')
    fs.appendFile(archivo, arr1)
    console.log(1)
    await fs.appendFile(archivo, arr2)
    console.log(2)
    await fs.appendFile(archivo, arr3)
    console.log(3)
    console.log('finish')
}
fs.appendFile(archivo, '\n')

pablo()

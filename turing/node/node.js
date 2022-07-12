var URL = require('url').URL

try {
    const m = 1
    const n = n + z
    console.log(n)
} catch (err) {
    console.log(err.name)
}

// buffer class, not resizable, global, ahora dispone de typearray, interacts with octet streams in TCP streams, file sys op and others
const buf1 = Buffer.alloc(10)
buf1.J
console.log(buf1)

const myURL = new URL('skdsk://sdmnsk.org:999')
console.log(myURL.port)
console.log(myURL.href)
myURL.port = 'abcd'
console.log('1', myURL.port)
myURL.port = '2323ada'
console.log('2', myURL.port)
myURL.port = 12.34
console.log('2', myURL.port)

var path = require('path')
var fs = require('fs')
var os = require('os')

console.log(os.endianness())

var x = path.normalize('Users/Refsnes//Jackson/..')
// var x = os.normalize('Users/Refsnes//Jackson/..')

const sser = {
    x: 'j',
    ss() {
        console.log('hi', this.x)
    },
}
// setTimeout(sser.ss.bind(sser), 10)

// console.log(x)
let a = { y: 10 }
a.x = a
// console.log(JSON.stringify(a))

let bb = [1, 2]
delete bb[1]
console.log(bb.length, 'sds')

try {
    getRectArea(3, 'A')
} catch (e) {
    console.error(e.name)
    // expected output: "Parameter is not a number!"
}

// var book = new { name: 'lsds' }()

bb.splice(1, 1)
console.log(bb[1], '8')

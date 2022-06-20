const os = require("os")
var URL = require("url").URL

// try {
//     const m = 2 + z
// } catch (err) {
//     console.log(err.name)
// }

const buffer = Buffer.alloc(8);


const myUrl = new URL("http://ex.com:8000")
console.log(myUrl.port)
myUrl.port = "af77"
console.log(myUrl.port)
console.log(myUrl.href)

setTimeout(() => {
    console.log(2)
}, 0)
Promise.resolve(3).then(console.log)

os.remove
let x = Math.floor(Math.random() * 20 + 1)

array = []

for (let i = 0; i < 1000; i++) {
    array.push(Math.floor(Math.random() * 20 + 1))
}

objeto = {}
for (let i = 1; i < 21; i++) {
    objeto[i] = array.filter((x) => x == i).length
}

console.log(objeto)

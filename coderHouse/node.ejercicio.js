let i = 0

function foo() {
    i = 1
    let j = 2
    console.log(i,j)
}

objeto = {
    name: "juan"
}

objeto.freeze
foo()

objeto.name = "da"
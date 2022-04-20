const persona = {
    name: "pepe",
    age: 25,
    price: 99.90,
    currency: "$",
    series: ["bojack horseman", "el chapulin colorado"],
    movies: [
        {
            name: "batman",
            premiered: 1999,
            actors: [
                "chespirito", 
                "monica"
            ]
        }
    ]
}

console.log(persona)

persona.age = persona.age + 1

console.log(persona)
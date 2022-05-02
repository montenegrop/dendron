const fn = (mensaje, callback) => {
    //to do: escribir mensaje en archivo de forma asincrona
    setTimeout(() => {
        callback(null)
    }, 2000)
}

module.export = fn

function delay(ms) {
    return new Promise((resolve) => {
        console.log('delay ' + ms)
        setTimeout(resolve, ms)
    })
}

async function someFunction(ms) {
    await delay(ms)
    someOtherFunction(ms)
}

function someOtherFunction(ms) {
    console.log(ms)
}

someFunction(2000)

console.log('final')

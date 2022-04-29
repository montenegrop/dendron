function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}
  
// async function test1() {
//     console.log('start 4 timer');
//     await delay(4000);
//     console.log('after 4 second');
// }

async function test2() {
    setTimeout(() => {
        console.log("8000 inicial")
    }, 8000);
    setTimeout(() => {
        console.log("2.0 interrumpe")
    }, 2000);
    setTimeout(() => {
        console.log("5.9 interrumpe")
    }, 5900);
    console.log('start 3.9 timer');
    await delay(3900);
    console.log("after 3.9");
    await delay(4000);
    console.log('after 7.9 second');
    setTimeout(() => {
        console.log("8000 Final")
    }, 8000);
}

// test1();
test2();

console.log("last")
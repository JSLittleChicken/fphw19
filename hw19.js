function makeFunc (number1) {
    console.log(`sum(${number1}) = ${number1}`);
    return function (number2) {
        const result = number1 + number2
        console.log(`sum(${number2}) = ${result}`);
    }
}
let sum = makeFunc(3);
sum(5);
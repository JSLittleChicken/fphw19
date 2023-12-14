// function makeFunc(number1) {
//     console.log(`sum(${number1}) = ${number1}`);
//     return function (number2) {
//         const result = number1 + number2
//         console.log(`sum(${number2}) = ${result}`);
//         return function (number3) {
//             const resultTwo = result + number3
//             console.log(`sum(${number3}) = ${resultTwo}`)
//         }
//     }
// }


let addNumber = 0;
function sum(number) {
    addNumber += number
    return addNumber
}

console.log(sum(3));
console.log(sum(8));
console.log(sum(20));


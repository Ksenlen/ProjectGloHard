const num = 266219;
const numString = num.toString();
let rezult = 1; // чтобы избежать умножения на ноль, инициализируем как 1.
for (let i = 0; i <= numString.length - 1; i++) {
    rezult = rezult * Number(numString[i]);
}
console.log(rezult);

rezult **= 3;

console.log(rezult);

let rezultString = rezult.toString();
console.log(rezultString.slice(0, 2));


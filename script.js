//Задание 1
const isNumber = function (num) {
    if (num == null) { return false; }
    else {
        num = "" + num;
        return !isNaN(parseFloat(num.trim())) && isFinite(num.trim());
    }
};
console.log(isNumber(' 12 '));

// Задание 2.1
const arr = [111, 222, 333, 444, 555, 666, 777];
for (let i = 0; i < arr.length; i++) {
    if (String(arr[i]).startsWith("2") || String(arr[i]).startsWith("4")) {
        console.log(arr[i]);
    }
}

// Задание 2.2

let n = 100;
for (let i = 2; i <= n; i++) {
    for (let j = 2; j <= i; j++) {
        if ((i % j == 0) && (j != i)) {
            break;
        } else {
            console.log(i, `Делители данного числа 1 и ${i}`);
            break;
        }
    }
}


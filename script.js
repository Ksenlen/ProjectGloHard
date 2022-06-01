let str = 54;
const stringChange = function (str) {
    if (typeof str !== 'string') {
        return ('аргумент не строка');
    } else {
        str = str.trim();
        return str.length > 30 ? str.slice(0, 30) + '...' : str;
    }
};
console.log(stringChange(str));
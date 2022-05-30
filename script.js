//Задание 1
let lang = 'ru';

//Вариант №1
if (lang == 'ru') {
    console.log(['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']);
}
if (lang == 'en') {
    console.log(['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn']);
}

//Вариант №2
switch (lang) {
    case 'ru':
        console.log(['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']);
        break

    case 'en':
        console.log(['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn']);
        break
}

//Вариант №3
let weekLang = {
    'ru': ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'],
    'en': ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'],
};
console.log(weekLang[lang]);

//Задание №2
let namePerson = 'Артем';
let massege = (namePerson == 'Артем')
    ? 'директор'
    : namePerson == 'Александр'
        ? 'преподаватель'
        : 'студент';
console.log(massege);
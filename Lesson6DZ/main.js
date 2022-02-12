// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let a = 'hello world';
console.log(a.length);
let b = 'lorem ipsum';
console.log(b.length);
let c = 'javascript is cool';
console.log(c.length);
//
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
let a = 'hello world';
console.log(a.toUpperCase());
let b = 'lorem ipsum';
console.log(b.toUpperCase());
let c = 'javascript is cool';
console.log(c.toUpperCase());
//
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let a = 'HELLO WORLD';
console.log(a.toLowerCase());
let b = 'LOREM IPSUM';
console.log(b.toLowerCase());
let c = 'JAVASCRIPT IS COOL';
console.log(c.toLowerCase());
//
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str = ' dirty string   ';
console.log(str.trim());
//
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']
let stringToarray = (str) => {
    return str.split(' ')
}
let str = 'Каждый охотник желает знать';
let arr = stringToarray(str);
console.log(arr);
//
// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый
let delete_characters = (str, length) => {
    return str.substr (0, 7)
}
let str = 'Каждый охотник желает знать';
console.log(delete_characters(str, 7));
//
// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
let insert_dash = (str) => {
    return str.replaceAll(' ', '-').toUpperCase()
}
let str = "HTML JavaScript PHP";
console.log(insert_dash(str));
//
// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
let string = (str) => {
    return str[0].toUpperCase() + str.slice(1)
}
console.log(string('yavascript'));
//
// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
let capitalize = (str) => {
    return str.split(' ').map(word=>word.charAt(0).toUpperCase()+word.slice(1)).join(' ');
}
console.log(capitalize('javascript is cool'));
//
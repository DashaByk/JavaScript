// - створити функцію яка обчислює та повертає площу прямокутника
let calkulator = (a,b) => a*b;
console.log(calkulator(2,3));
//
// - створити функцію яка обчислює та повертає площу кола
let calkulator1 = (r, pi) => r**2*pi;
console.log(calkulator1(3, 3,14));
//
// - створити функцію яка обчислює та повертає площу циліндру
let calkulator2 = (r, h, pi) => (r**2*pi)*2+(2*pi*r*h);
console.log(calkulator2(2,4,3,14));
//
// - створити функцію яка приймає масив та виводить кожен його елемент
(function (...fsd) {
    console.log(fsd);
}(1, 2, 3, 4));
//
// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент
(function (text) {
    console.log(`${text}`);
}('lorem lorem lorem'));
// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
(function (a) {
    document.write(`<ul>`);
    document.write(`<li> ${a} </li>`);
    document.write(`<li> ${a} </li>`);
    document.write(`<li> ${a} </li>`);
    document.write(`</ul>`);
}('hello'));
//
// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
(function (number, test) {
    for (let i = 0; i < number; i++) {
        document.write(`<ul>`);
        document.write(`<li> ${test} </li>`);
        document.write(`</ul>`);
    }
}(3, 'Dasha'));
//
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let arrayPrim = [1, true, 'milk', 4];
(function (array) {
    document.write(`<ul>`);
    for (let i = 0; i < array.length; i++) {
        document.write(`<li>${array[i]}</li>`);
    }
    document.write(`</ul>`);
}(arrayPrim));
//
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let objects = [{id:1, name:'vasya', age:35}, {id:2, name:'petya', age:39}];
(function (arr) {
    for (const arrElement of arr) {
        document.write(`<div>${arrElement.id} :${arrElement.name} , ${arrElement.age}`);
    }
}(objects));
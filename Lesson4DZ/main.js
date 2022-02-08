// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function calk1 (a, b) {
    return a*b;
}
console.log(calk1(3,4));
//
// - створити функцію яка обчислює та повертає площу кола з радіусом r
function calk2 (r, pi) {
    return r**2*pi;
}
console.log(calk2(3, 3,14));
//
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function calk3 (r, h, pi) {
    let so = r**2*pi;
    let sbok = 2*pi*r*h;
    return so*2+sbok;
}
console.log(calk3(2,4,3,14));
//
// - створити функцію яка приймає масив та виводить кожен його елемент
function array (...fsd) {
    console.log(fsd);
}
array(1, 2, 3, 4);
//
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function par (text) {
    document.write(`<p> ${text} </p>`);
}
par ('lorem lorem lorem');
//
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function list (a) {
    document.write(`<ul>`);
    document.write(`<li> ${a} </li>`);
    document.write(`<li> ${a} </li>`);
    document.write(`<li> ${a} </li>`);
    document.write(`</ul>`);
}
list ('hello');
//
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function list1 (number, test) {
    for (let i = 0; i < number; i++) {
        document.write(`<ul>`);
        document.write(`<li> ${test} </li>`);
        document.write(`</ul>`);
    }
}
list1 (3, 'Dasha');
//
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let arrayPrim = [1, true, 'milk', 4];
function list2 (arrayTwo) {
    document.write(`<ul>`);
    for (let i = 0; i < arrayTwo.length; i++) {
        document.write(`<li>${arrayTwo[i]}</li>`);
    }
    document.write(`</ul>`);
    }
list2 (arrayPrim);
//
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let objects = [{id:1, name:'vasya', age:35}, {id:2, name:'petya', age:39}];
function doc (arrayThree) {
    for (const arrayThreeElement of arrayThree) {
        document.write(`<div>${arrayThreeElement.id} :${arrayThreeElement.name} , ${arrayThreeElement.age}`);
    }
}
doc (objects);
//
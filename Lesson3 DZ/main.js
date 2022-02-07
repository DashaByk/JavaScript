// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
let a = [1, 10, 100, 1000, 10000];
let b = ['big', 'little', 'small', 'smaller', 'bigger'];
let c = [2, 'milk', true, 'coffee', false];
console.log(a);
console.log(b);
console.log(c);
//
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
let arr = [];
arr [0] = 'hello';
arr [1] = 'my';
arr [2] = 'dear';
arr [3] = 'friends!';
console.log(arr);
document.write(arr);
//
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
for (let i = 0; i < 10; i++) {
    document.write(`<div> Welcome to Okten </div>`);
}
//
for (let i = 0; i < 10; i++) {
    document.write(`<div> ${i} - Welkome to Okten </div>`);
}
//
let g = 0;
while (g < 20) {
    document.write(`<h1> How are you? </h1>`);
    g++;
}
//
let i = 0;
while (i < 20) {
    document.write(`<h1> ${i} - How are you? </h1>`);
    i++;
}
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
let mas1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let j = 0; j < mas1.length; j++) {
    console.log(mas1 [j]);
}
//
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
let mas2 = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
for (let f = 0; f < mas2.length; f++) {
    console.log(mas2 [f]);
}
//
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
let mas3 = [100, 'table', 300, true, 'chair', {}, false, 600, 'bed', []];
for (let h = 0; h < mas3.length; h++) {
    console.log(mas3 [h]);
}
//
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
let masbool = [100, 'table', 300, true, 'chair', 400, false, 600, 'bed', 800];
for (i = 0; i < masbool.length; i++) {
    if (typeof masbool [i] === "boolean") {
        console.log(masbool [i]);
    }
}
//
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
let masnumber = [100, 'table', 300, true, 'chair', 400, false, 600, 'bed', 800];
for (i = 0; i < masnumber.length; i++) {
    if (typeof masnumber [i] === "number") {
        console.log(masnumber [i]);
    }
}
//
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
let masstring = [100, 'table', 300, true, 'chair', 400, false, 600, 'bed', 800];
for (i = 0; i < masstring.length; i++) {
    if (typeof masstring [i] === "string") {
        console.log(masstring [i]);
    }
}
//
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
let masempty = [];
masempty [1] = 100;
masempty [2] = 'table';
masempty [3] = 300;
masempty [4] = true;
masempty [5] = 'chair';
masempty [6] = 400;
masempty [7] = false;
masempty [8] = 600;
masempty [9] = 'bed';
masempty [10] = 800;
for (let i = 1; i < masempty.length; i++) {
    console.log(masempty [i]);
}
//
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i < 10; i++) {
    console.log('поточний крок циклу : ' + i + ' ');
    document.write('поточний крок циклу : ' + i + ' ');
}
//
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i < 100; i++) {
    console.log('поточний крок циклу : ' + i + ' ');
    document.write('поточний крок циклу : ' + i + ' ');
}
//
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i < 100; i+=2) {
    console.log('поточний крок циклу : ' + i + ' ');
    document.write('поточний крок циклу : ' + i + ' ');
}
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
for (let i = 0; i < 100; i++) {
    if (i % 2 === 0) {
    console.log('поточний крок циклу : ' + i + ' ');
    document.write('поточний крок циклу : ' + i + ' ');
}
}
//
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
for (let i = 0; i < 100; i++) {
    if (i % 2 !== 0) {
        console.log('поточний крок циклу : ' + i + ' ');
        document.write('поточний крок циклу : ' + i + ' ');
    }
}
//
// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write
let a1 = 'hello'
let a2 = 'owu'
let a3 = 'com'
let a4 = 'ua'
let a5 = 1
let a6 = 10
let a7 = -999
let a8 = 123
let a9 = 3.14
let a10 = 2.7
let a11 = 16
let a12 = true
let a13 = false
console.log(a1);
console.log(a2);
console.log(a3);
console.log(a4);
console.log(a5);
console.log(a6);
console.log(a7);
console.log(a8);
console.log(a9);
console.log(a10);
console.log(a11);
console.log(a12);
console.log(a13);
alert(a1)
alert(a2)
alert(a3)
alert(a4)
alert(a5)
alert(a6)
alert(a7)
alert(a8)
alert(a9)
alert(a10)
alert(a11)
alert(a12)
alert(a13)
document.write(a1 + "<br/>");
document.write(a2+ "<br/>");
document.write(a3+ "<br/>");
document.write(a4+ "<br/>");
document.write(a5+ "<br/>");
document.write(a6+ "<br/>");
document.write(a7+ "<br/>");
document.write(a8+ "<br/>");
document.write(a9+ "<br/>");
document.write(a10+ "<br/>");
document.write(a11+ "<br/>");
document.write(a12+ "<br/>");
document.write(a13+ "<br/>");

// - Переприсвоїти кожній змінній з завдання значення на довільне.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write
a1 = 'goodbay'
a2 = 'uwo'
a3 = 'comes'
a4 = 'usa'
a5 = 5
a6 = 20
a7 = -333
a8 = 321
a9 = 6.18
a10 = 5.3
a11 = 256
a12 = 'notrue'
a13 = 'nofalse'
console.log(a1);
console.log(a2);
console.log(a3);
console.log(a4);
console.log(a5);
console.log(a6);
console.log(a7);
console.log(a8);
console.log(a9);
console.log(a10);
console.log(a11);
console.log(a12);
console.log(a13);
alert(a1)
alert(a2)
alert(a3)
alert(a4)
alert(a5)
alert(a6)
alert(a7)
alert(a8)
alert(a9)
alert(a10)
alert(a11)
alert(a12)
alert(a13)
document.write(a1 + "<br/>");
document.write(a2+ "<br/>");
document.write(a3+ "<br/>");
document.write(a4+ "<br/>");
document.write(a5+ "<br/>");
document.write(a6+ "<br/>");
document.write(a7+ "<br/>");
document.write(a8+ "<br/>");
document.write(a9+ "<br/>");
document.write(a10+ "<br/>");
document.write(a11+ "<br/>");
document.write(a12+ "<br/>");
document.write(a13+ "<br/>");

// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person. (Не об'єкт)
let firstName = 'Бикова ';
let middleName = 'Дар"я ';
let lastName = 'Володимирівна';
let person = (firstName + middleName + lastName)
console.log(person);
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
//     Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".
let name = prompt ("Ваше імя?");
alert(name);
let sename = prompt ("По-батькові?");
alert(sename);
let old = prompt ("Ваш вік?");
alert(old);
document.write('Вітаю ',name,' ',sename,'. ','Тобі ',old,' ','роки.')

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;
let a = 100;
let b = '100';
let c = true;
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);

// - Визначити відповідний оператор в виразах що б вийшов відповідний результат.
//     В однакових виразах не використовувати однакові оператори!!!
console.log(5 < 6);    //-> true
console.log(5 > 6);    //-> false
console.log(5 >= 6)    //-> false
console.log(5 == 6)    // -> false
console.log(10 == 10)  //-> true
console.log(10 === 10) //-> true
console.log(10 != 10)  //-> false
console.log(10 !== 10) //-> false
console.log(10 < 10)   //-> false
console.log(123 != '123') //-> false
console.log(123 == '123') //-> true

// - Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
//let str = "20"; //выведет строчное значение
//let k = 5; //выведет цифровое значение
//document.write(str + k); //выведет 205, т.к 20-строчное, 5-числовое
//document.write(str - k + "<br/>"); //выведет 15 ,вычтет 20-5
//document.write(str * "2" + "<br/>"); //выведет 40, умножит 20*2
//document.write(str / 2 + "<br/>"); //выведет 10, разделит 20/2
// Створити масив з 10 чисел (можна використовувати Math.random Та Math.floor). Скласти результат цих чисел в змінній result.
let numbers = [100, 200, 300, 400, 500, 600, 650, 700, 800, 900];
let result = (numbers[0] + numbers[1] + numbers[2] + numbers[3] + numbers[4] + numbers[5] + numbers[6] + numbers[7] + numbers[8] + numbers[9]);
console.log(result);
//
// let numbers = [
//     Math.floor(Math.random() * 10),
//     Math.floor(Math.random() * 10),
//     Math.floor(Math.random() * 10),
//     Math.round(Math.random() * 10),
//     Math.floor(Math.random() * 10),
//     Math.ceil(Math.random() * 10),
//     Math.floor(Math.random() * 10),
//     Math.floor(Math.random() * 10),
//     Math.floor(Math.random() * 10),
//     Math.floor(Math.random() * 10),
// ];

// console.log(Math.pow(5, 2))
// console.log(5**2)


let book1 = {
    name: 'Birds',
    page: 100,
    janr: 'drama'
}
console.log(book1)

let book2 = {
    name: 'Birds',
    page: 100,
    janr: 'drama',
    avtor: 'Colin May'
}
console.log(book2)

let book3 = {
    name: 'Meet',
    page: 200,
    janr: 'drama',
    avtor: 'Rose Krak'
}
let book4 = {
    name: 'Jane Eyre',
    page: 500,
    janr: 'story',
    avtor: 'Bronte'
}
let book5 = {
    name: 'Sing',
    page: 300,
    janr: 'detectiv',
    avtor: 'Cristy'
}
let books = [book3, book4, book5];
console.log(books[0]);
console.log(books[1]);
console.log(books[2]);

let height = 23;
let width = 10;
let s = (height * width);
console.log(s);

let heightC = 10;
let dC = 4;
const x = 3.14;
let v = (heightC * dC * x);
console.log(v);

let n = 3;
let m = 4;
let k = Math.sqrt(n ** 2 + m ** 2)
console.log(k);



// Створити масив з 10 чисел (можна використовувати Math.random Та Math.floor). Скласти результат цих чисел в змінній result.
let numbers = [100, 200, 300, 400, 500, 600, 650, 700, 800, 900];
let result = (numbers[0] + numbers[1] + numbers[2] + numbers[3] + numbers[4] + numbers[5] + numbers[6] + numbers[7] + numbers[8] + numbers[9]);
console.log(result);


// Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр
let book1 = {
    name: 'Birds',
    page: 100,
    janr: 'drama'
}
console.log(book1)

// Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр, автори
let book2 = {
    name: 'Birds',
    page: 100,
    janr: 'drama',
    avtor: 'Colin May'
}
console.log(book2)

// Створити маc об'єктів book з наступними полями  - назва, кількість сторінок, жанр, автори. Вивести кожну книгу як окремий об'єкт
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

// Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
// Значення площі зберігати в змінній s.
let height = 23;
let width = 10;
let s = (height * width);
console.log(s);

// Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
// Значення площі зберігати в змінній s.
let heightC = 10;
let dC = 4;
const x = 3.14;
let r = (dC/2);
let v = (heightC * r**2 * x);
console.log(v);

// У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).
// Знайдіть гіпотенузу k за теоремою Піфагора (потрібно використовувати функцію Math.pow (число, ступінь) або оператор зведення в ступінь **).
let n = 3;
let m = 4;
let k = Math.sqrt(n ** 2 + m ** 2)
console.log(k);



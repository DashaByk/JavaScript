// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User (id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
let arrUser = [
    new User(1, 'vasya', 'ivanov', 'v@gmail', 31360),
    new User(2, 'petya', 'petrov', 'p@mail', 31230),
    new User(3, 'kolya', 'sidorov', 'k@mail', 31530),
    new User(4, 'petya', 'tihonov', 'p@mail', 31130),
    new User(5, 'vova', 'bykov', 'v@mail', 31220),
    new User(6, 'katya', 'petrova', 'c@mail', 31240),
    new User(7, 'sveta', 'ivanova', 's@mail', 31260),
    new User(8, 'masha', 'bykova', 'm@mail', 31270),
    new User(9, 'olya', 'orlova', 'o@mail', 31280),
    new User(10, 'lena', 'fedorova', 'l@mail', 31290)
];
console.log(arrUser);
//
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let filterArr = arrUser.filter((item) => {
    return item.id % 2 === 0;
    });
console.log(filterArr);
//
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let sortArr = arrUser.sort((a,b) => b.id -a.id);
console.log(sortArr);
//
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
class Client {

    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}
// створити пустий масив, наповнити його 10 об'єктами Client
let arrClient = [
    new Client(1, 'vasya', 'ivanov', 'v@gmail', 31360, ['milk', 'coffee']),
    new Client(2, 'petya', 'petrov', 'p@mail', 31230, ['coffee', 'bread']),
    new Client(3, 'kolya', 'sidorov', 'k@mail', 31530, ['bread', 'milk']),
    new Client(4, 'petya', 'tihonov', 'p@mail', 31130, ['oil']),
    new Client(5, 'vova', 'bykov', 'v@mail', 31220, ['tomato']),
    new Client(6, 'katya', 'petrova', 'c@mail', 31240, ['oil', 'tomato']),
    new Client(7, 'sveta', 'ivanova', 's@mail', 31260, ['tea', 'coffee']),
    new Client(8, 'masha', 'bykova', 'm@mail', 31270, ['milk', 'tea']),
    new Client(9, 'olya', 'orlova', 'o@mail', 31280, ['bread', 'tea']),
    new Client(10, 'lena', 'fedorova', 'l@mail', 31290, ['coffee', 'milk', 'bread'])
];
console.log(arrClient);
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
let sortClient = arrClient.sort((a,b) => a.order.length - b.order.length);
console.log(sortClient);
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function Car (model, produce, year, maxspeed, volume) {
    this.model = model;
    this.produce = produce;
    this.year = year;
    this.maxspeed = maxspeed;
    this.volume = volume;
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${maxspeed} на годину`);
    };
    this.info = function () {
        for (const item in this) {
            if (typeof this[item] !== 'function')
                console.log(`${item} - ${this[item]}`)
        }
    };
    this.increaseMaxSpeed = function (newSpeed) {
        this.maxspeed = this.maxspeed + newSpeed;
    };
    this.changeYear = function (newValue) {
        this.year = newValue;
    };
    this.addDriver = function (driver) {
        this.driver = driver;
    };
}
let arrCar = new Car('Hyundai', 'Korea', 2005, 230, 2.0);
console.log(arrCar);
arrCar.drive();
arrCar.info();
arrCar.increaseMaxSpeed(30);
arrCar.changeYear(2007);
arrCar.addDriver('Petya')
console.log(arrCar);
//
//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
class Cars {
    constructor(model, produce, year, maxspeed, volume) {
        this.model = model;
        this.produce = produce;
        this.year = year;
        this.maxspeed = maxspeed;
        this.volume = volume;
    }
    drive() {
        console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`);
    }
    info () {
        for (const item in this) {
            console.log(`${item} - ${this[item]}`)
        }
    }
    increaseMaxSpeed (newSpeed) {
        this.maxspeed = this.maxspeed + newSpeed;
    }
    changeYear (newValue) {
        this.year = newValue;
    }
    addDriver (driver) {
        this.driver = driver;
    }
}
let arrCars = new Cars('Ford', 'USA', 2007, 210, 2.0)
console.log(arrCars);
arrCars.drive();
arrCars.info();
arrCars.increaseMaxSpeed(20);
arrCars.changeYear(2010);
arrCars.addDriver('kolya');
console.log(arrCars);
//
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
class Popelushka {
    constructor(name, age, size) {
        this.name = name;
        this.age = age;
        this.size = size;
    }
}
let arrPopelushka = [
    new Popelushka('roza', 25,36),
    new Popelushka('lera', 24,37),
    new Popelushka('nika', 20,35),
    new Popelushka('alla', 26,36),
    new Popelushka('lena', 23,37),
    new Popelushka('tina', 22,38),
    new Popelushka('dina', 25,37),
    new Popelushka('vika', 21,36),
    new Popelushka('mira', 20,36),
    new Popelushka('kira', 23,38),
];
console.log(arrPopelushka);
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Princ {
    constructor(name, age, findShoes) {
        this.name = name;
        this.age = age;
        this.findShoes = findShoes;
    }
}
let princ = new Princ('edvard', 30, 35);
//
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
let para = (arrPopelushka, princ) =>{
    for (const Element of arrPopelushka) {
        if (Element.size === princ.findShoes) {
            return `popelushka: ${Element.name}`
        }
    }
};
console.log(para(arrPopelushka, princ));
//
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
let findPopelushka = arrPopelushka.find((Element) => Element.size === princ.findShoes);
console.log(findPopelushka);
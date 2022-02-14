// - Дано список імен.
//     let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
let n1 = 'Harry..Potter';
let n1New = (n1) => {
    return n1.replace('..', '  ')
}
console.log(n1New(n1));
//
let n2 = 'Ron---Whisley';
let n2New = (n2) => {
    return n2.replace('---', '  ')
}
console.log(n2New(n2));
//
let n3 = 'Hermione__Granger';
let n3New = (n3) => {
    return n3.replace('__', '  ')
}
console.log(n3New(n3));
//
//     - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
let rand = (numb) => {
    let arrayRand = [];
    for (let i = 0; i < numb; i++) {
        arrayRand.push(Math.round(Math.random()*100));
    }
    return arrayRand;
}
let rez = rand(10);
console.log(rez);
//
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
rez.sort ((a, b) => a - b)
console.log(rez);
//
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа
let filtArr = rez.filter((numb) => {
    return numb % 2 === 0;
});
console.log(filtArr);
//
// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
let stringArr = rez.map((numb) => {
    return numb => numb.toString();
});
console.log(stringArr);
//
// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]
let sortNums = (arr, direction) => {
    if (direction === 'asc') return arr.sort ((a,b) => a-b);
    if (direction === 'desc') return arr.sort ((a,b) => b-a);
}
let nums = [11,21,3];
console.log(sortNums(nums,'desc'));
//
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
console.log(coursesAndDurationArray.sort((a,b) => b.monthDuration - a.monthDuration));
//
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let newFilt = coursesAndDurationArray.filter((item) => {
    return item.monthDuration > 5;
});
console.log(newFilt);

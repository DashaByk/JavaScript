// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
let  min = (a, b, c) => {
    if (a < b && a < c) {
        console.log(a);
    }
    else if (b < a && b < c) {
        console.log(b);
    }
    else if (c < a && c < b) {
        console.log(c);
    }
};
min(4,5,6);
//
// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
let max = (f, g, h) => {
    if (f > g && f > h) {
        console.log(f);
    }
    else if (g > f && g > h) {
        console.log(g);
    }
    else if (h > f && h > g) {
        console.log(h);
    }
}
max(7,8,9);
//
// - створити функцію яка повертає найбільше число з масиву
let array = [1, 200 ,49 ,525 , 6, 800];
let numberMax = (number) => {
    let max = array [0];
    for (const element of array) {
        if  (element > max) {
            max = element
        }
    }
    return max;
}
document.write(`${numberMax(array)}`);
//
// - створити функцію яка повертає найменьше число з масиву
let arrayMin = [3, 58, 400, 10, 630];
let numberMin = (numb) => {
    let min = arrayMin [0];
    for (const minElement of arrayMin) {
        if (minElement < min) {
            min = minElement
        }
    }
    return min;
}
document.write(`${numberMin(arrayMin)}`);
//
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
let summ = [1,2,10];
let summa = (numbers) => {
    let sum = 0;
    for (const number of numbers) {
        sum = sum + number;
    }
    return sum;
}
console.log(`${summa(summ)}`);
//
// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
let arrayThree = [5, 10, 25, 40];
let sred = (numb) => {
    let srsum = 0;
    for (const numbElement of numb) {
        srsum = srsum + numbElement
    }
    return srsum/numb.length;
}
console.log(`${sred(arrayThree)}`);
//
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
let arraySred = [5, 76, 390, 14, 730];
let numbMinMax = (numb) => {
    let min = arraySred [0];
    let max = arraySred [0];
    for (const Element of arraySred) {
        if (Element < min) {
            min = Element
        }
        if  (Element > max) {
            max = Element
        }
    }
    console.log(max);
    return min;
}
document.write(`${numbMinMax(arraySred)}`)
//
// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
let rand = (numb) => {
    let arrayRand = [];
    for (let i = 0; i < numb; i++) {
        arrayRand.push(Math.round(Math.random()*100));
    }
    return arrayRand;
}
document.write(rand(10))
//
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
let rand2 = (numb, limit) => {
    let arrayRand2 = [];
    for (let i = 0; i < numb; i++) {
        arrayRand2.push(Math.round(Math.random()*limit));
    }
    return arrayRand2;
}
console.log(rand2(10,20));
//
// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
let rev = (arr) => {
    let newArr = [];
    for (let i = arr.length - 1, ri = 0; i >= 0; i--, ri++) {
        newArr[ri] = arr[i];
    }
    return newArr;
}
console.log(rev(1,2,3));
//
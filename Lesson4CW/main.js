// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
function threeNumbers (a, b, c) {
if (a < b && a < c) {
    document.write(a);
}
else if (b < a && b < c) {
    document.write(b)
}
else if (c < a && c < b) {
    document.write(c)
}
}
threeNumbers(3,2,4);
//
// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
function threeNumbers1 (f, g, h) {
    if (f > g && f > h) {
        document.write(f);
    }
    else if (g > f && g > h) {
        document.write(g)
    }
    else if (h > f && h > g) {
        document.write(h)
    }
}
threeNumbers1(3,2,4);
//
// - створити функцію яка повертає найбільше число з масиву
let arrayOne = [1, 200 ,49 ,525 , 6, 800];
function numberMax (number) {
    let max = arrayOne [0];
    for (const element of arrayOne) {
        if  (element > max) {
            max = element
        }
    }
    return max;
}
document.write(`${numberMax(arrayOne)}`);
// - створити функцію яка повертає найменьше число з масиву
let arrayTwo = [3, 58, 400, 10, 630];
function numberMin (numb) {
    let min = arrayTwo [0];
    for (const minElement of arrayTwo) {
        if (minElement < min) {
            min = minElement
        }
    }
    return min;
}
document.write(`${numberMin(arrayTwo)}`);
//
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
let summ = [1,2,10];
function summa (numbers) {
    let sum = 0;
    for (const number of numbers) {
        sum = sum + number;
    }
    return sum;
}
document.write(`${summa(summ)}`)
//
// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
let arrayThree = [5, 10, 25, 40];
function sred (numb) {
    let srsum = 0;
    for (const numbElement of numb) {
        srsum = srsum + numbElement
    }
    return srsum/numb.length;
}
document.write(`${sred(arrayThree)}`)
//
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
let arrayFour = [5, 76, 390, 14, 730];
function numbMinMax (numb) {
    let min = arrayFour [0];
    let max = arrayFour [0];
    for (const Element of arrayFour) {
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
document.write(`${numbMinMax(arrayFour)}`)
//
// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
function rand (numb) {
    let arrayRand = [];
    for (let i = 0; i < numb; i++) {
        arrayRand.push(Math.round(Math.random()*100));
    }
    return arrayRand;
}
document.write(rand(10))
//
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
function rand2 (numb, limit) {
    let arrayRand2 = [];
    for (let i = 0; i < numb; i++) {
        arrayRand2.push(Math.round(Math.random()*limit));
    }
    return arrayRand2;
}
document.write(rand2(10,20))
// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
function revArray (numb) {
    let array5 = [];
    for (let i = array5.length - 1, ri = 0; i >= 0; i--, ri++) {
        newArray[ri] = newArray[i];

    }
    return newArray;
}
//
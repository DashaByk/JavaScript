// Напишіть код, який :
// a) додає клас з назвою групи, елементу з ід main_header
let newClass = document.getElementById('main_header')
newClass.classList.add('Elements');
console.log(newClass);
//
// b) робить шириниу елементу ul 400px
let newWight = document.getElementsByTagName('ul');
for (const Element of newWight) {
    Element.style.width = '400px';
}
console.log(newWight);
//
// c) робить шириниу всіх елементів з класом linkList шириною 50%
let newWightLinkList = document.getElementsByClassName('linkList');
for (const Element of newWightLinkList) {
    Element.style.width = '50px'
}
console.log(newWightLinkList);
//
// d) отримує текст який зберігається в елементі з класом listElement2
let textListElement = document.getElementsByClassName('listElement2');
console.log(textListElement);
//
// e) отримує всі елементи li та змінює ім колір фону на сірий
let greyColor = document.getElementsByTagName('li');
for (const Element of greyColor) {
    Element.style.background = 'grey'
}
console.log(greyColor);
//
// f) отримує всі елементи 'a' та додає їм клас anchor
let newClassAnchor = document.getElementsByTagName('a')
for (const Element of newClassAnchor) {
    Element.classList.add('anchor');
}
console.log(newClassAnchor);
//
// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
let newTextSize = document.getElementsByTagName('a')
for (const Element of newTextSize) {
    if(Element.innerText === 'link3') {
        Element.style.fontSize = '40px'
    }
}
console.log(newTextSize);
//
// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
let newClassElement = document.getElementsByTagName('a');
for (const Element of newClassElement) {
let newClass = Element.innerText
    Element.classList.add(`element_${newClass}`)
}
console.log(newClassElement);
//
// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
let newBackground = document.getElementsByClassName('sub-header');
for (const Element of newBackground) {
    Element.style.background = prompt('Введите цвет: (red, green, yellow...)');
}
console.log(newBackground);
//
// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
let newColorText = document.getElementsByClassName('sub-header');
for (const Element of newColorText) {
    if(Element.innerText === 'content 2 segment') {
        Element.style.color = prompt('Введите цвет: (red, green, yellow...)');
    }
}
console.log(newColorText);
//
// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
let newText = document.getElementsByClassName('content_1');
console.log(content_1[0].innerText);
content_1[0].innerText = prompt('Введите новый текст');
//
// l) отримати елементи p та змінити їм padding на 20px
let pPadding = document.getElementsByTagName('p');
for (const Element of pPadding) {
    Element.style.padding = '20px'
}
console.log(pPadding);
//
// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
let newText2 = document.getElementsByClassName('text2')
for (const Element of newText2) {
    Element.innerText = 'sep-2021'
}
console.log(newText2);
//

// Все робити за допомоги js.
// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
let blok = document.createElement('div');
blok.classList.add('wrap');
blok.classList.add('collapse');
blok.classList.add('alpha');
blok.classList.add('beta');
blok.style.background = 'red';
blok.style.color = 'black';
blok.style.fontSize = '20px';
document.body.append(blok);
document.body.append(blok.cloneNode(true));
//
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
for (const Element of coursesAndDurationArray) {
    let blokElement = document.createElement('div');
    blokElement.innerText = `${Element.title} ${Element.monthDuration}`;
    document.body.append(blokElement);
}
//
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
for (const Element of coursesAndDurationArray) {
let divElement = document.createElement('div');
let h1 = document.createElement('h1');
h1.innerText = Element.title;
let p = document.createElement('p');
p.innerText = Element.monthDuration;
divElement.append(h1);
divElement.append(p);
document.body.append(divElement);
}
//
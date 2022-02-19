// - Напишіть код,  котрий :
// -- отримує текст з параграфа з id "content"
let content = document.getElementById('content');
console.log(content);
//
// -- отримує текст з блоку з id "rules"
let rules = document.getElementById('rules');
console.log(rules);
//
// -- замініть текст параграфа з id 'content' на будь-який інший
content.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, voluptates?';
//
// -- замініть текст параграфа з id 'rules' на будь-який інший
rules.innerText = 'Hello';
//
// -- змініть кожному елементу колір фону на червоний
let redBackground = document.body.children;
for (const Element of redBackground) {
    Element.style.background = 'red'
}
console.log(redBackground);
//
// -- змініть кожному елементу колір тексту на синій
let blueColor = document.body.children;
for (const element of blueColor) {
    element.style.color = 'blue'
}
console.log(blueColor);
//
// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
let idRules = document.getElementById('rules');
console.log(idRules.classList);
//
// -- поміняти колір тексту у всіх елементів fc_rules на червоний
let redColor = document.getElementsByClassName('fc_rules');
for (const redElement of redColor) {
    redElement.style.color = 'red'
}
console.log(redColor);
//
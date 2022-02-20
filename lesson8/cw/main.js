// 1) Напишіть код, який :
// a) додає клас з назвою групи, елементу з ід main_header
let elemIdMainHeader = document.getElementById('main_header');
elemIdMainHeader.classList.add('new_Class');

// b) робить шириниу елементу ul 400px
let elemUl = document.getElementsByTagName('ul');
for (const el of elemUl) {
    el.style.width = '400px';
}

// c) робить шириниу всіх елементів з класом linkList шириною 50%
let elemClassLinkList = document.getElementsByClassName('linkList');
for (const el of elemClassLinkList) {
    el.style.width = '50%';
}

// d) отримує текст який зберігається в елементі з класом listElement2
let elemClassListElement2 = document.getElementsByClassName('listElement2');
for (const el of elemClassListElement2) {
    console.log(el.innerHTML);
}

// e) отримує всі елементи li та змінює ім колір фону на сірий
let liElements = document.getElementsByTagName('li');
for (const el of liElements) {
    el.style.background = 'gray';
}

// f) отримує всі елементи 'a' та додає їм клас anchor
let aElements = document.getElementsByTagName('a');
for (const el of aElements) {
    el.classList.add('anchor');
}
// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3,
// змінює йому розмір тексту на 40 пікселів
for (const el of aElements) {
    if (el.innerText === 'link3') el.style.fontSize = "40px";
}
// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
for (const el of aElements) {
    el.classList.add (`element_${el.innerText}`);
}

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()


// 1) Напишіть код, який :
// a) додає клас з назвою групи, елементу з ід main_header
let idMainHeaderElem = document.getElementById('main_header');
idMainHeaderElem.classList.add('new_Class');

// b) робить шириниу елементу ul 400px
let ulElements = document.getElementsByTagName('ul');
for (const el of ulElements) {
    el.style.width = '400px';
}

// c) робить шириниу всіх елементів з класом linkList шириною 50%
let linkListClassElements = document.getElementsByClassName('linkList');
for (const el of linkListClassElements) {
    el.style.width = '50%';
}

// d) отримує текст який зберігається в елементі з класом listElement2
let listElement2ClassElements = document.getElementsByClassName('listElement2');
for (const el of listElement2ClassElements) {
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
    el.classList.add(`element_${el.innerText}`);
}

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
let subHeaderClassElements = document.getElementsByClassName('sub-header');
let promptBgr = prompt(`Прошу внести колір фону для ${subHeaderClassElements[0].classList.toString()}
    наприклад gray або silver`, 'yellow');
for (const el of subHeaderClassElements) {
    el.style.background = promptBgr;
}

// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment .
// Колір отримати з prompt()
for (const el of subHeaderClassElements) {
    if (el.innerText === 'content 2 segment') {
        el.style.color = prompt(`Прошу внести колір тексту для ${el.innerText}
         наприклад gray або silver`, 'red');
    }
}

// k) отримує елемент з класом content_1 та заміняє в ньому тест на довільний. Текст отримати з prompt()
let content_1ClassElements = document.getElementsByClassName('content_1');
let promptText= prompt(`Прошу внести новий текст для ${content_1ClassElements[0].classList.item(0)}`, 'new mini-project');
content_1ClassElements[0].children[0].innerText =promptText;

// l) отримати елементи p та змінити їм padding на 20px
let pElements = document.getElementsByTagName('p');
for (const el of pElements) {
    el.style.padding = '20px';
}
// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
let text2ClassElements=document.getElementsByClassName('text2');
for (const el of text2ClassElements) {
    el.innerText='Dec-2021';
}
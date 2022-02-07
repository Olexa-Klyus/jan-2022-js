// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function areaOfRectangle(a, b) {
    return a * b;
}

// - створити функцію яка обчислює та повертає площу кола з радіусом r
function areaOfCircle(r) {
    return Math.PI * Math.pow(r, 2);
}

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function areaCylinder(h, r) {
    return 2 * Math.PI * r * h + 2 * Math.PI * Math.pow(r, 2);
}

// - створити функцію яка приймає масив та виводить кожен його елемент
function outputArrItem(arr) {
    for (let arrElement of arr) {
        console.log(arrElement);
    }
}

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function createPtext(textStr) {
    document.write(`<p> ${textStr}</p>`);
}

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function createUl3li(textLi) {
    document.write('<ul>');
    for (let i = 0; i < 3; i++) {
        document.write(`<li>${textLi}</li>`);
    }
    document.write('</ul>');
}

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function createUlnli(textLi,n) {
    document.write('<ul>');
    for (let i = 0; i < n; i++) {
        document.write(`<li>${textLi}</li>`);
    }
    document.write('</ul>');
}

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function createUlArrayLi(arr){
    document.write('<ul>');
    for (let i = 0; i < arr.length; i++) {
        document.write(`<li>${arr[i]}</li>`);
    }
    document.write('</ul>');
}

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
function createDivArray(arr){
    document.write('<div>');
    for (let i = 0; i < arr.length; i++) {
        document.write(`<div>${arr[i].id} <br>${arr[i].name} <br> ${arr[i].age} </div>`);
    }
    document.write('</div>');
}

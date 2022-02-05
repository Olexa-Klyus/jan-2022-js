/*--створити масив з:*/
/*- з 5 числових значень*/
/*- з 5 стічкових значень*/
/*- з 5 значень стрічкового, числового та булевого типу*/
/*- та вивести його в консоль*/
let arr1 = [1, 2, 3, 4, 5];
let arr2 = ['red', 'white', 'black', 'yellow', 'green'];
let arr3 = ['yellow', 2, true, 3, 'black'];
console.log(arr1);
console.log(arr2);
console.log(arr3);

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
let arr4 = [];
arr4[0] = 10;
arr4[1] = 20;
arr2[2] = '#';
arr4[3] = 'braun';
arr4[4] = false;
arr4[5] = 'silver';
arr4[6] = 154.5;
console.log(arr4);

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true},
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
];

for (let i = 0; i < 10; i++) {
    document.write(`<div>${users[i].name}</div>`);
}
for (let i = 0; i < 10; i++) {
    document.write(`<div>${users[i].name} індекс ${i}</div>`);
}

let i = 0;
while (i < 20) {
    document.write(`<h1>${users[i].name}</h1>`);
    i++;
}
i = 0;
while (i < 20) {
    document.write(`<h1>${users[i].name} індекс ${i}</h1>`);
    i++;
}
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
let arr5 = [22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
for (let arr5Element of arr5) {
    console.log(arr5Element);
}
let arr6 = ['red', 'white', 'black', 'yellow', 'green', 'braun', 'silver', 'orange', 'blue', 'pink'];
for (let arr6Element of arr6) {
    console.log(arr6Element);
}
let arr7 = [true, 'white', 2.35, false, 'green', 35, 'silver', 0, 'blue', 12];
for (let arr7Element of arr7) {
    console.log(arr7Element);
}
for (let arr7Element of arr7) {
    if (typeof (arr7Element) === "boolean") {
        console.log(arr7Element);
    }
}
for (let arr7Element of arr7) {
    if (typeof (arr7Element) === "number") {
        console.log(arr7Element);
    }
}
for (let arr7Element of arr7) {
    if (typeof (arr7Element) === "string") {
        console.log(arr7Element);
    }
}
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
let arr8 = [];
arr8[0] = 100;
arr8[1] = 'teacher';
arr8[2] = true;
arr8[3] = 120;
arr8[4] = 'mother';
arr8[5] = false;
arr8[6] = true;
arr8[7] = -30;
arr8[8] = 'father';
arr8[9] = false;


for (let i = 0; i < 10; i++) {
    console.log(i);
    document.write(`${i} `);
}
document.write('<br/>');

for (let i = 0; i < 100; i++) {
    console.log(i);
    document.write(`${i} `);
}
document.write('<br/>');

for (let i = 0; i < 100; i += 2) {
    console.log(i);
    document.write(`${i} `);
}
document.write('<br/>');

for (let i = 0; i < 100; i += 1) {
    if (i % 2 === 0) {
        console.log(i);
        document.write(`${i} `);
    }
}
document.write('<br/>');

for (let i = 0; i < 100; i += 1) {
    if (i % 2 === 1) {
        console.log(i);
        document.write(`${i} `);
    }
}

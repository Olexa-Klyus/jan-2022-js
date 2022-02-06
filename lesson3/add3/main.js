// 1. Створити пустий масив та :
//     a. заповнити його 50 парними числами за допомоги циклу.
//     b. заповнити його 50 непарними числами за допомоги циклу.
//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
// 2. Вивести за допомогою console.log кожен третій елемен
// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним
// та записати їх в новий масив
// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56

let myArr = [];
for (let i = 0; i < 50; i++) {
    myArr[i] = (i + 1) * 2;
}
for (let i = 0; i < 50; i++) {
    myArr[i] = (i + 1) * 2 - 1;
}
myArr = [];
for (let i = 0; i < 20; i++) {
    myArr[i] = Math.floor(Math.random() * 100);
}
for (let i = 0; i < 20; i++) {
    myArr[i] = 8 + (Math.floor(Math.random() * 724));
}

console.log('кожен третій елемент');
for (let i = 0; i < myArr.length; i++) {
    if ((i + 1) % 3 === 0) {
        console.log(i, myArr[i]);
    }
}
console.log('кожен третій парний елемент');
for (let i = 0; i < myArr.length; i++) {
    if ((i + 1) % 3 === 0 && myArr[i] % 2 === 0) {
        console.log(i, myArr[i]);
    }
}
console.log('кожен третій парний елемент -в новий масив');
let myArrNew = [];
let j = 0;
for (let i = 0; i < myArr.length; i++) {
    if ((i + 1) % 3 === 0 && myArr[i] % 2 === 0) {
        console.log(i, myArr[i]);
        myArrNew[j] = myArr[i];
        j += 1;
    }
}
console.log('кожен елемент, сусід якого справа - парний');
for (let i = 0; i < myArr.length - 1; i++) {
    if (myArr[i + 1] % 2 === 0) {
        console.log(i, myArr[i]);
    }
}
// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.

let arrCheck = [100, 250, 50, 168, 120, 345, 188];

let sumChecks = 0;
for (let i = 0; i < arrCheck.length; i++) {
    sumChecks += arrCheck[i];
}
let averageCheck = Math.round((sumChecks / arrCheck.length * 100)) / 100;
console.log(`середній чек - ${averageCheck}`)
// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
let myArr2 = [];
for (let i = 0; i < 10; i++) {
    myArr2[i] = Math.floor(Math.random() * 20);
}
let myArr2New = [];
for (let i = 0; i < myArr2.length; i++) {
    myArr2New[i] = myArr2[i] * 5;
}
myArr2 = [];

// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
let myArr3New = [];
j = 0;
let myArr3 = ['html', 34.5, 'css', 55, 15, false, 'js', 'mysql', {
    id: 1,
    name: 'vasya',
    age: 31,
    status: false
}, 'mongodb', 'react', 23, true, 'angular', 'aws', {
    user_id: 2,
    country: 'Poland',
    city: 'Krakow'
}, 'docker', 'git', 'node.js'];
for (let elem3 of myArr3) {
    if (typeof elem3 === "number") {
        myArr3New[j] = elem3;
        j+=1
    }
}
// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:

let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];

// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:

let usersWithCities = [
    {
        id: 1, // <===
        name: 'vasya',
        age: 31,
        status: false,
        address: {
            user_id: 1, // <===
            country: 'Ukraine',
            city: 'Ternopil'
        }
    },
    // TO BE CONTINUED .....
]
usersWithCities=[];



//
//         - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
//
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.


// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
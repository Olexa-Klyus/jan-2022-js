// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
let myArr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

//     1. перебрати його циклом while
let i = 0;
while (i < myArr.length) {
    let myArrElement = myArr[i];
    i += 1;
}

//     2. перебрати його циклом for
for (let i = 0; i < myArr.length; i++) {
    let myArrElement = myArr[i];
}

//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
document.write('<h2>');
i = 0;
while (i < myArr.length) {
    if (i % 2 === 1) {
        document.write(`${myArr[i]}; `);
        console.log(myArr[i]);
    }
    i += 1;
}
document.write('</h2>');

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
document.write('<h2>');
for (let j = 0; j < myArr.length; j++) {
    if (j % 2 === 1) {
        document.write(`${myArr[j]}; `);
        console.log(myArr[j]);
    }
}
document.write('</h2>');

// 5. перебрати циклом while та вивести  числа тільки парні  значення
document.write('<h2>');
i = 0;
while (i < myArr.length) {
    if (myArr[i] % 2 === 0) {
        document.write(`${myArr[i]}; `);
        console.log(myArr[i]);
    }
    i += 1;
}
document.write('</h2>');

// 6. перебрати циклом for та вивести  числа тільки парні  значення
document.write('<h2>');
for (let j = 0; j < myArr.length; j++) {
    if (myArr[j] % 2 === 0) {
        document.write(`${myArr[j]}; `);
        console.log(myArr[j]);
    }
}
document.write('</h2>');

// 7. замінити кожне число кратне 3 на слово "okten"
for (let j = 0; j < myArr.length; j++) {
    if (myArr[j] % 3 === 0) {
        myArr[j] = 'okten';
    }
}

// 8. вивести масив в зворотньому порядку.
document.write('<h2>');
for (let j = myArr.length - 1; j >= 0; j--) {
    document.write(`${myArr[j]}; `);
    console.log(myArr[j]);
}
document.write('</h2>');

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
myArr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
//     1. перебрати його циклом while
i=myArr.length-1;
while (i>=0){
    let myArrElement=myArr[i];
    i-=1;
}
//     2. перебрати його циклом for
for (let i = myArr.length-1; i>=0; i--) {
    let myArrElement = myArr[i];
    console.log(myArr[i]);
}
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
document.write('<h2>');
i = myArr.length-1;
while (i >=0) {
    if (i % 2 === 1) {
        document.write(`${myArr[i]}; `);
        console.log(myArr[i]);
    }
    i -= 1;
}
document.write('</h2>');

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
document.write('<h2>');
for (let j = myArr.length-1; j >=0; j--) {
    if (j % 2 === 1) {
        document.write(`${myArr[j]}; `);
        console.log(myArr[j]);
    }
}
document.write('</h2>');

// 5. перебрати циклом while та вивести  числа тільки парні  значення
document.write('<h2>');
i = myArr.length-1;
while (i >=0) {
    if (myArr[i] % 2 === 0) {
        document.write(`${myArr[i]}; `);
        console.log(myArr[i]);
    }
    i -= 1;
}
document.write('</h2>');

// 6. перебрати циклом for та вивести  числа тільки парні  значення
document.write('<h2>');
for (let j = myArr.length-1; j>=0; j--) {
    if (myArr[j] % 2 === 0) {
        document.write(`${myArr[j]}; `);
        console.log(myArr[j]);
    }
}
document.write('</h2>');

// 7. замінити кожне число кратне 3 на слово "okten"
for (let j = myArr.length-1; j >=0; j--) {
    if (myArr[j] % 3 === 0) {
        myArr[j] = 'okten';
    }
}

// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.
function sumElement(a, b) {
    let resoltValue = a;
    if (b !== undefined) {
        resoltValue += b;
    }
    console.log(resoltValue);
    return resoltValue;
}

// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]
function sumArray(arr1, arr2) {
    let arrResult = [];
    for (let i = 0; i < arr1.length; i++) {
        arrResult [i] = arr1[i] + arr2[i];
    }
    return arrResult;
}

// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
function objKeysReturn(arrObj) {
    let arrKeys = [];
    for (const arrObjElement of arrObj) {
        for (let key in arrObjElement) {
            arrKeys[arrKeys.length] = key;
        }
    }
    return arrKeys;
}

// - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
function objValuesReturn(arrObj) {
    let arrValues = [];
    for (const arrObjElement of arrObj) {
        for (let key in arrObjElement) {
            arrValues[arrValues.length] = arrObjElement[key];
        }
    }
    return arrValues;
}









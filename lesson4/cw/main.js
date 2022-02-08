// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
function minValue(x, y, z) {
    if (x < y && x < z) {
        console.log('min value : ' + x);
    } else if (y < x && y < z) {
        console.log('min value : ' + y);
    } else {
        console.log('min value : ' + z);
    }
}

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
function maxValue(x, y, z) {
    if (x > y && x > z) {
        console.log('max value : ' + x);
    } else if (y > x && y > z) {
        console.log('max value : ' + y);
    } else {
        console.log('max value : ' + z);
    }
}

// - створити функцію яка повертає найбільше число з масиву
function maxArrValue(arr) {
    let maxCurrent = 0;
    for (let i = 0; i < arr.length; i++) {
        if (maxCurrent < arr[i]) {
            maxCurrent = arr[i];
        }
    }
    return maxCurrent;
}

// - створити функцію яка повертає найменьше число з масиву
function minArrValue(arr) {
    let minCurrent = 0;
    for (let i = 0; i < arr.length; i++) {
        if (minCurrent > arr[i]) {
            minCurrent = arr[i];
        }
    }
    return minCurrent;
}

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
function sumArr(arr) {
    let sumCurrent = 0;
    for (let i = 0; i < arr.length; i++) {
        sumCurrent += arr[i];
    }
    return sumCurrent;
}

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
function arithmeticMeanArr(arr) {
    let sumCurrent = 0;
    for (let i = 0; i < arr.length; i++) {
        sumCurrent += arr[i];
    }
    return sumCurrent / arr.length;
}

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
function minMaxValue(...arr) {
    let maxCurrent = 0;
    let minCurrent = 0;
    for (let i = 0; i < arr.length; i++) {
        if (minCurrent > arr[i]) {
            minCurrent = arr[i];
        } else {
            maxCurrent = arr[i];
        }
    }
    console.log(maxCurrent);
    return minCurrent;
}

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
function createArrRandom() {
    let arr = [];
    for (let i = 0; i < 20; i++) {
        arr[i] = Math.floor(Math.random() * 100);
    }
    console.log(arr);
}
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
function createArrRandomLimit(limit) {
    let arr = [];
    for (let i = 0; i <limit; i++) {
        arr[i] = Math.floor(Math.random() * 100);
    }
    console.log(arr);
}
// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
function createRewersArr(inArr){
    let outArr=[];
    for (let i = 0; i < inArr.length; i++) {
        outArr[inArr.length-i-1]= inArr[i];
    }
    return outArr;
}


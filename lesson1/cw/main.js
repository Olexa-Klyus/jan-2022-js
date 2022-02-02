{// 1. Створити масив з 10 чисел (можна використовувати Math.random Та Math.floor). Скласти результат цих чисел в змінній result.
    let array = [1, 34, 5, -20, 6.5, 25, 105, Math.round(Math.random() * 1000), 3, Math.floor(Math.random() * 100)];
    let result = array [0] + array [1] + array [2] + array [3] + array [4] + array [5] + array [6] + array [7] + array [8] + array [9];
    console.log(result);
}
{// 2. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр
    let book = {
        bookTitle: '{Хоробре серце', numPages: 100, bookGenre: 'історичний'
    };
}
{//3. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр, автори
    let book = {
        bookTitle: 'Хоробре серце',
        numPages: 100,
        bookGenre: 'історичний',
        authors: [{authorFName: 'Петро', authorLName: 'Галушка'}, {authorFName: 'Василь', authorLName: 'Загірний'}]
    };
}
{//4. Створити маис об'єктів book з наступними полями  - назва, кількість сторінок, жанр, автори. Вивести кожну книгу як окремий об'єкт
    let book = [{
        bookTitle: 'Хоробре серце',
        numPages: 100,
        bookGenre: 'історичний',
        authors: [{authorFName: 'Петро', authorLName: 'Галушка'}, {authorFName: 'Василь', authorLName: 'Загірний'}]
    }, {
        bookTitle: 'Чорний ворон',
        numPages: 150,
        bookGenre: 'історичний',
        authors: [{authorFName: 'Василь', authorLName: 'Шкляр'}, {authorFName: '', authorLName: ''}]
    }, {
        bookTitle: 'Білий клик',
        numPages: 120,
        bookGenre: 'історичний',
        authors: [{authorFName: 'Джек', authorLName: 'Лондон'}, {authorFName: '', authorLName: ''}]
    }]

    console.log(book[0]);
    console.log(book[1]);
    console.log(book[2]);
}
{// 5. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
// Значення площі зберігати в змінній s.
    let height = 23;
    let width = 10;
    let s = height * width;
    document.write(`<h2>${s}</h2>`);
}
{// 6. Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC) та діаметром основи 4м (dC),
// результат помістіть у змінну v.
    let heightC = 10;
    let dc = 4;
    let v = Math.round(heightC * (dc / 2) ** 2 * 3.14);
    document.write(`<h2>${v}</h2>`);
}
{// 7. У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).
// Знайдіть гіпотенузу k за теоремою Піфагора (потрібно використовувати функцію Math.pow (число, ступінь) або оператор зведення в ступінь **).
    let n = 3;
    let m = 4;
    let k = Math.pow(Math.pow(n, 2) + Math.pow(m, 2), 0.5);
    document.write(`<h2>${k}</h2>`);
}
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
{
    let time = Math.floor(Math.random() * 59.99);
    if (time <= 15) {
        console.log(time + ' falls in the first quarter of an hour');
    } else if (time > 15 && time <= 30) {
        console.log(time + ' falls in the second quarter of an hour');
    } else if (time > 30 && time <= 45) {
        console.log(time + ' falls in the third quarter of an hour');
    } else if (time > 45) {
        console.log(time + ' falls in the fourth quarter of an hour');
    }
}
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
{
    let day = Math.floor(Math.random() * 23.99);
    if (day <= 10) {
        console.log(day + ' - the number falls in the first decade of the month');
    } else if (day > 10 && day <= 20) {
        console.log(day + ' - the number falls in the second decade of the month');
    } else if (day > 20) {
        console.log(day + ' - the number falls in the third decade of the month');
    }
}
// - У нас є змінна test, якщо  не дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
//     Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)
{
    let test = (0.5 > Math.random());
    if (!test) {
        console.log('Вірно');
    } else {
        console.log('Неправильно');
    }
    console.log(!test ? 'Вірно' : 'Неправильно');
}
// - Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
{
    let a = 1;
    console.log(a !== 0 ? 'Вірно' : 'Невірно');
    a = 0;
    console.log(a !== 0 ? 'Вірно' : 'Невірно');
    a = -3;
    console.log(a !== 0 ? 'Вірно' : 'Невірно');
}
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день.
{
    let i = prompt('please enter the ordinal number of the day of the week from 1 to 7');
    switch (i) {
        case '1':
            document.write('<h2>Monday - training</h2>');
            break;
        case'2':
            document.write('<h2>Tuesday - practical work</h2>');
            break;
        case'3':
            document.write('<h2>Wednesday - lectures</h2>');
            break;
        case'4':
            document.write('<h2>Thursday - independent work</h2>');
            break;
        case'5':
            document.write('<h2>Friday - work in groups</h2>');
            break;
        case'6':
            document.write('<h2>Saturday - English</h2>');
            break;
        case'7':
            document.write('<h2>Sunday is a day off</h2>');
            break;
        default:
            document.write('<h2>you entered an unacceptable value</h2>');
            break;
    }
}
// - Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4.
{
    let year = +prompt('please enter the year');

    if (year > 0 && year < 2100) {
        if (year % 4 === 0) {
            document.write('<h2>' + year + ' - a leap year </h2>');

        } else {
            document.write('<h2>' + year + ' - this is not a leap year </h2>');
        }
    } else {
        document.write('<h2>you entered an unacceptable value - ' + year + '</h2>');
    }
}

// - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!
{
    let nameJS = prompt('Яка «офіційна» назва JavaScript?');

    if (nameJS === 'ECMAScript') {
        document.write('<h2>Правильно!</h2>');
    } else {
        document.write('<h2>Не знаєте? ECMAScript!</h2>');
    }
}

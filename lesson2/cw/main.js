// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.

{
    let number1 = +prompt('enter the first number', 10);
    let number2 = +prompt('enter the second number', 20);

    if (number1 === number2) {
        document.write('<h3>first number ' + number1 + ' is equal to second number ' + number2 + '</h3>');
    } else if (number1 > number2) {
        document.write('<h3>first number ' + number1 + ' has the maximum value</h3>');
    } else if (number1 < number2) {
        document.write('<h3>second number ' + number2 + ' has the maximum value</h3>');
    } else {
        document.write('<h3>you entered an unacceptable value</h3>');
    }
}
// - У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
// Користувач вводить номер квартири просто в змінні або через prompt('') .
//     Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.
{
    let apartNumber = +prompt('enter the apartment number', 0);
    if (apartNumber >= 1 && apartNumber <= 20) {
        document.write('<h2>the apartment is located in the first entrance</h2>');
    } else if (apartNumber >= 21 && apartNumber <= 48) {
        document.write('<h2>the apartment is located in the second entrance</h2>');
    } else if (apartNumber >= 49 && apartNumber <= 90) {
        document.write('<h2>the apartment is located in the third entrance</h2>');
    } else {
        document.write('<h2>you entered an unacceptable value</h2>');
    }
}
// - Ми маємо змінну number в яку користувач задає числове значення,  якщо змінна рівна 10 вивести повідомлення ВІРНО,
// якщо змінна не рівна 10 - тоді НЕВІРНО
{
    let number = +prompt('Введіть 10');
    document.write(number === 10 ? '<h2>ВІРНО</h2>' : '<h2>НЕВІРНО</h2>');
}
//  - Ми маємо змінну x в яку користувач задає  значення,  якщо в змінну записане число, вивести 1,
//   якщо в змінну записали стрінгу вивести 2, якщо булеве значення - 3, якщо об'єкт або масив - 3.
// якщо в змінну записали щось інше, спрацьовує else
{
    let x;
    switch (typeof x) {
        case'number':
            console.log(1);
            break;
        case 'string':
            console.log(2);
            break;
        case 'boolean':
            console.log(3);
            break;
        case 'object':
            console.log(4);
            break;
        default :
            console.log('спрацьовує else');
    }
}
// - Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
//     Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ .
//     Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН
{
    let temperature = Math.floor(Math.random() * 60 - 25);   // випадкове значення в діапазоні від -25 до +35
    console.log((temperature > 9 && temperature < 23) ? 'Температура = ' + temperature + ' -ми йдемо ВЧИТИСЯ' : 'Температура = ' + temperature + ' -сидимо вдома і вчимося ОНЛАЙН');
}
// - За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5. І взалежності від введеного
//     числа нам дається приз. (Авто, Мото, Телефон, і т.д ) і якщо число не підходить тоді  вивести Повідомлення - що число не вірне ... .
{
    let number = prompt('Введіть число від 1 до 5');
    switch (number) {
        case '1':
            document.write('ви виграли приз - АВТО');
            break;
        case '2':
            document.write('ви виграли приз - МОТОЦИКЛ');
            break;
        case'3':
            document.write('ви виграли приз - ТЕЛЕФОН');
            break;
        case'4':
            document.write('ви виграли приз - ПЛАНШЕТ');
            break;
        case'5':
            document.write('ви виграли приз - МОНІТОР');
            break;
        default:
            document.write('ЧИСЛО НЕ ВІРНЕ');
    }
}
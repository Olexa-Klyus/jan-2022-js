{
    let arr = [11, 21, 31, 41, 51, 61, 71, 81, 91];
    for (let temp of arr) {
        console.log(temp);
    }
}
// iter - швидко виводить визначення масиву
{
    document.write('<ul>');
    let menuItems = ['About', 'Command', 'Window','Edit','View'];
    for (let menuItem of menuItems) {
        document.write(`<li> ${menuItem}</li>`);
    }
    document.write('\<ul>');
}
// приклади https://github.com/GrayHead/js_demos
{
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
        {name: 'max', age: 31, status: true}
    ];
document.write('<div class="users-box">');
    for (let user of users) {
        console.log(user)
    }
    document.write('</div>');
}

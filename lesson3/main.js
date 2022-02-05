{
    let arr = [11, 21, 31, 41, 51, 61, 71, 81, 91];
    for (let temp of arr) {
        console.log(temp);
    }
}

// iter - швидко виводить визначення масиву
{
    document.write('<ul>');
    let menuItems = ['About', 'Command', 'Window', 'Edit', 'View'];
    for (let menuItem of menuItems) {
        document.write(`<li> ${menuItem}</li>`);
    }
    document.write('</ul>');
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
        {name: 'max', age: 31, status: true},
        [10, 20, 30]
    ];

    // for (let user of users) {
    //     console.log(user);
    // }

    // document.write('<div class="users-box">');
    // for (let user of users) {
    //     document.write(`<div>${user.name}</div>`);
    // }
    // document.write(`</div>`);

// цикл for off
    document.write('<ol class="user-box">');
    for (let user of users) {
        document.write(`<li>${user.name}</li>`);
    }
    document.write(`</ol>`);

    document.write(`<ol>`);
    for (let user of users) {
        if (user.status) {
            document.write(`<li> ${user.name} Age - ${user.age}</li>`);
        }
    }
    document.write(`</ol>`);

// цикл for i
    for (let i = 0; i < 10; i++) {
        document.write(`<div>${users[i].name},${users[i].length}</div>`);
    }
// цикл в циклі i-j
    for (let i = 10; i < users.length; i++) {
        document.write(`<div>${i} ${users[i].name}</div>`)
        for (let j = 0; j < users[i].length; j++) {
            document.write(`<div>${i}.${j} - ${users[i][j]}</div>`)
        }
    }

    let i = 0;
    while (i<users.length) {
        document.write(`<h2>${i} ${users[i].name}</h2>`);
        i++;
    }
// можна записати i++, i--, i=i+1, i+=1, i-=1
}
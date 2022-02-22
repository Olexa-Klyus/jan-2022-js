// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

let block1 = document.createElement('div');
block1.classList.add('wrap', 'collapse', 'alpha', 'beta');
block1.style.background = 'yellow';
block1.style.color = 'blue';
block1.style.fontSize = `14pt`;
block1.innerText = 'new div created in JS';
document.body.appendChild(block1);

let block1Clone = block1.cloneNode(true);
document.body.appendChild(block1Clone);
//
// // - Є масив:
// //     ['Main','Products','About us','Contacts']
// // Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// // Завдання робити через цикли.
let menuUls = document.getElementsByClassName('menu');
for (let menuUl of menuUls) {
    for (let liElem of ['Main', 'Products', 'About us', 'Contacts']) {
        let liNew = document.createElement('li');
        liNew.innerText = liElem;
        menuUl.appendChild(liNew);
    }
}

// - Є масив
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
for (const el of coursesAndDurationArray) {
    let divNew = document.createElement('div');
    divNew.innerText = `${el.title} - тривалість ${el.monthDuration} місяців`;
    document.body.appendChild(divNew);
}

// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу,
// та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
coursesAndDurationArray.forEach(value => {
    let newDivElem = document.createElement('div');
    newDivElem.classList.add('item');
    let newH2Elem = document.createElement('h2');
    newH2Elem.classList.add('heading');
    newH2Elem.innerText = value.title;
    let newPElem = document.createElement('p');
    newPElem.classList.add('description');
    newPElem.innerText = value.monthDuration;

    newDivElem.append(newH2Elem, newPElem);
    document.body.appendChild(newDivElem);
})
console.log()

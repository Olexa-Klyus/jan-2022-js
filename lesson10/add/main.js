// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші вивести в консоль інформацію про блок або елемент на який відбувся клік.
//     Інформація яку потрібно вивести: Назва тегу, список класів, список ід, розміри в форматі висота*ширина


// document.onclick = (e) => {
//     let target = e.target;
//     console.log(`Назва тегу - ${target.tagName}`);
//     console.log(`Значення - ${target.innerText}`);
//     console.log(`список класів - ${target.className}`);
//     console.log(`список ід - ${target.id}`);
//     console.log(`ширина - ${target.clientWidth}, висота - ${target.clientHeight}`);
//     console.log(`___________________________________________________________________`);
// }

// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші  зробить popup (спливаючий блок) в якому буде вся інформація про блок.
//     Інформація яку потрібно вивести в popup: Назва тегу, список класів, список ід, розміри в форматі висота*ширина

// document.addEventListener('click', function (event) {
//     let popup = document.createElement('div');
//     popup.style.width = '250px';
//     popup.style.height = '150px';
//     popup.style.background = 'silver';
//     popup.style.position = 'absolute';
//     popup.style.top = `${event.clientY}px`;
//     popup.style.left = `${event.clientX}px`;
//     popup.style.padding = '5px';
//     let target = event.target;
//     popup.innerHTML = `Назва тегу - ${target.tagName}<br>Значення - ${target.innerText}<br>список класів - ${target.className}
//             <br>список ід - ${target.id}<br>ширина - ${target.clientWidth}, висота - ${target.clientHeight}`;
//     document.body.appendChild(popup);
//     setTimeout(() => popup.remove(), 1500);
// })

// -- взять массив пользователей
// - Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ

let usersWithAddress = [
    {id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
    {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
    {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
    {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
    {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
    {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
    {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
    {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
    {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 11, name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
];

let wrapDiv = document.createElement('div');
wrapDiv.innerText = 'SORT   ';
wrapDiv.style.fontSize = '22px';
wrapDiv.style.background = 'silver';

let checkStatus = document.createElement('input');

let checkAge = document.createElement('input');
let checkAddress = document.createElement('input');
checkStatus.type = 'checkbox';
checkAge.type = 'checkbox';
checkAddress.type = 'checkbox';

wrapDiv.append(' as status - ', checkStatus, '  as age - ', checkAge, '  as address - ', checkAddress);
document.body.appendChild(wrapDiv);


let tblHead = document.createElement('table');
tblHead.style.borderSpacing = '0';
let tblHeadLine = document.createElement("tr");
document.body.appendChild(tblHead);
tblHead.appendChild(tblHeadLine);
for (const key in usersWithAddress[0]) {
    let tblTd = document.createElement('td');
    tblTd.style.textAlign = 'center';
    if (key === 'address') {
        tblTd.style.width = '248px'
    } else tblTd.style.width = '80px';
    tblTd.innerText = (key);
    tblTd.style.border = '1px solid gray';
    tblHeadLine.appendChild(tblTd);
}

let tblLineBuild = function (tblLine, arrObj) {
    for (const key in arrObj) {
        if (typeof (arrObj[key]) === 'object') {
            tblLineBuild(tblLine, arrObj[key])
        } else {
            let tblTd = document.createElement('td');
            tblTd.innerText = arrObj[key];
            tblTd.style.border = '1px solid silver';
            tblTd.style.width = '80px';
            tblTd.style.textAlign = 'center'
            tblLine.appendChild(tblTd);
        }
    }
}

let wrapDivTbl = document.createElement('div');
wrapDivTbl.id = 'divWrap';
document.body.appendChild(wrapDivTbl);


let tblBuild = function () {
    let tblUsers = document.createElement('table');
    tblUsers.style.borderSpacing = '0';
    wrapDivTbl.appendChild(tblUsers);

    let filterArr = usersWithAddress;
    if (checkStatus.checked) {
        filterArr = filterArr.filter(value => value.status === false);
    }
    if (checkAge.checked) {
        filterArr = filterArr.filter(value => value.age > 28);
    }
    if (checkAddress.checked) {
        filterArr = filterArr.filter(value => value.address.city === 'Kyiv');
    }

    for (let i = 0; i < filterArr.length; i++) {
        let tblLine = document.createElement('tr');
        tblUsers.appendChild(tblLine);
        tblLineBuild(tblLine, filterArr[i]);
    }
}

checkStatus.onclick = () => {
    tblBuild();
    wrapDivTbl.firstChild.remove();
}
checkAge.onclick = () => {
    tblBuild();
    wrapDivTbl.firstChild.remove();
}
checkAddress.onclick = () => {
    tblBuild();
    wrapDivTbl.firstChild.remove();
}
tblBuild();


// *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
//     Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне
let currentElement = {}
let firstElement = document.getElementById('divWrap');
currentElement = firstElement;

currentElement.style.background = 'yellow';

let divWrapBtn = document.createElement("div");
let prevBtn = document.createElement('button');
let nextBtn = document.createElement('button');
prevBtn.innerText = 'Previous Element';
prevBtn.style.margin = '10px';
prevBtn.style.background = 'silver';
prevBtn.style.width = '150px';
prevBtn.style.borderRadius = '5px';

nextBtn.innerText = 'Next Element';
nextBtn.style.margin = '10px';
nextBtn.style.background = 'silver';
nextBtn.style.width = '150px';
nextBtn.style.borderRadius = '5px';

divWrapBtn.append(prevBtn, nextBtn);
document.body.append(divWrapBtn);


let nextElement = function (elem) {
    elem.style.background = '';

    if (elem.firstElementChild !== null) {
        elem.firstElementChild.style.background = 'silver';
        return elem.firstElementChild;
    } else {
        if (elem.nextElementSibling !== null) {
            elem.nextElementSibling.style.background = 'silver';
            return elem.nextElementSibling;
        } else {
            if (elem.parentElement.nextElementSibling !== null) {
                elem.parentElement.nextElementSibling.style.background = 'silver';
                return elem.parentElement.nextElementSibling;
            }
        }
    }
    elem.style.background = 'yellow';
    return elem;
}


let childStatus = false; // флажок, якщо перехід від останнього блоку

let prevElement = function (elem) {
    elem.style.background = '';

    // в елемента є діти
    if (elem.lastElementChild !== null && childStatus===false) {
        elem.lastElementChild.style.background = 'silver';
        return elem.lastElementChild;
    } else if

        //якщо існує сусід prev і дітей нема
    (elem.previousElementSibling !== null) {
        childStatus=false;
        elem.previousElementSibling.style.background = 'silver';
        return elem.previousElementSibling;
    } else {
        childStatus=true;
        elem.parentElement.style.background = 'silver';
        return elem.parentElement;
    }
}
nextBtn.onclick = () => {
    currentElement = nextElement(currentElement);
}
prevBtn.onclick = () => {
    if (currentElement !== firstElement) {
        currentElement = prevElement(currentElement);
    } else {
        currentElement.style.background = 'yellow';
    }
}


// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.
// let simpsons = [
//     {
//         name: 'Bart',
//         surname: 'Simpson',
//         age: 10,
//         info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
//         photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
//     },
//     {
//         name: 'Homer',
//         surname: 'Simpson',
//         age: 40,
//         info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
//         photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
//     },
//     {
//         name: 'Marge',
//         surname: 'Simpson',
//         age: 38,
//         info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
//     },
//     {
//         name: 'Lisa',
//         surname: 'Simpson',
//         age: 9,
//         info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
//     },
//     {
//         name: 'Maggie',
//         surname: 'Simpson',
//         age: 1,
//         info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
//     },
// ];
//
// let galleryWrap = document.createElement("div");
// document.body.appendChild(galleryWrap);
// galleryWrap.classList.add('wrap');
// let btnWrap = document.createElement('div');
// let galleryWindow = document.createElement('div');
// galleryWindow.classList.add('gallery-wrap');
//
//
// let prevImgBtn = document.createElement("button");
// let nextImgBtn = document.createElement("button");
// prevImgBtn.innerText = 'previous image';
// nextImgBtn.innerText = 'next image';
// prevImgBtn.classList.add('buttons');
// nextImgBtn.classList.add('buttons');
//
// btnWrap.append(prevImgBtn, nextImgBtn)
// galleryWrap.append(galleryWindow, btnWrap);
//
// for (const simpson of simpsons) {
//     let imageEl = document.createElement("img");
//     imageEl.classList.add('img-none', 'img-all');
//     imageEl.src = simpson.photo;
//     imageEl.alt = simpson.name
//     galleryWindow.appendChild(imageEl);
// }
//
// let i = 0;
// let imgArr = document.getElementsByClassName('img-all');
//
// prevImgBtn.onclick = () => {
//     currentImage(i);
//     console.log(i)
//     if (i > 0) i -= 1; else i = imgArr.length-1;
//     console.log(i)
//     currentImage(i);
// }
// nextImgBtn.onclick = () => {
//     currentImage(i);
//     if (i < imgArr.length - 1) i += 1; else i = 0;
//     currentImage(i);
// }
//
// let currentImage = (i) => {
//     imgArr[i].classList.toggle('img-none');
// }
// currentImage(i);


// Завдання важке для розуміння, але дуже легке в реалізації. Тут треба буде погуглити
// *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан

// let areaText = document.createElement("textarea");
// document.body.appendChild(areaText);
// let txtLorem = `Завдання важке для розуміння, але дуже легке в реалізації. Тут треба буде погуглити При виділені сегменту
// тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан`;
// areaText.innerText = txtLorem;
// areaText.style.width = '800px';
// areaText.style.height = '100px';
// areaText.onselect = () => {
//     let selectedText = areaText.value.slice(areaText.selectionStart, areaText.selectionEnd);
//     areaText.setRangeText(selectedText.toUpperCase());
// }
//
//
// let range = new Range();
// document.onclick = (e) => {
//     if (e.target.tagName !== 'TEXTAREA' && document.getSelection().toString() !== "") {
//         let spainEl = document.createElement('span');
//         spainEl.style.fontSize = '16pt';
//         spainEl.style.fontStyle = 'italic';
//         range = document.getSelection().getRangeAt(0);
//         range.surroundContents(spainEl);
//         console.log(spainEl);
//     }
// }

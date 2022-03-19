// -- отримує текст з параграфа з id "content"
let idContent=document.getElementById('content');
console.log(idContent.innerText);
console.log(idContent.innerHTML);

// -- отримує текст з блоку з id "rules"
let idRules=document.getElementById('rules');
console.log(idRules.innerText);
console.log(idRules.innerHTML);

// -- замініть текст параграфа з id 'content' на будь-який інший
idContent.innerText='new mini-project idContent- замінив текст параграфа з id \'content\' на будь-який інший.';
console.log(idContent.innerText);
idContent.innerHTML='<b><i>new mini-project idContent(Форматований)- замінив текст параграфа з id \'content\' на будь-який інший.</i></b>'
console.log(idContent.innerText);

// -- замініть текст параграфа з id 'rules' на будь-який інший
idRules.innerText='new mini-project idRules - замінив текст параграфа з id \'rules\' на будь-який інший.'
console.log(idRules.innerText);
idRules.innerHTML='<b><i>new mini-project - rules (Форматований) замінив текст параграфа з id \'rules\' на будь-який інший.</i></b>'
console.log(idRules.innerText);

// -- змініть кожному елементу колір фону на червоний
let docElements =document.body.children;
for (const docElement of docElements) {
    docElement.style.background='red';
}
// -- змініть кожному елементу колір тексту на синій
for (const docElement of docElements) {
    docElement.style.color='blue';
}

// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
idRules=document.getElementById('rules');
console.log(idRules.classList.value);
//або
console.log(idRules.classList.toString());
//або
for (let i = 0; i < idRules.classList.length; i++) {
    const classElement = idRules.classList.item(i);
    console.log(classElement)
}
//або
let idRulesClassListItems= idRules.classList.keys();
for (const i of idRulesClassListItems) {
    console.log(idRules.classList.item(i))
}

// -- поміняти колір тексту у всіх елементів fc_rules на червоний
let fcRulesClassElements=document.body.getElementsByClassName('fc_rules');
for (const elem of fcRulesClassElements) {
    elem.style.color='red'
    elem.style.background='silver';
}

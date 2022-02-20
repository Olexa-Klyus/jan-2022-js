// -- отримує текст з параграфа з id "content"
let idContent=document.getElementById('content');
console.log(idContent.innerText);

let idRules=document.getElementById('rules');
console.log(idRules.innerText);


console.log(idRules);
console.log(idRules.textContent);
console.log(idRules.outerText);
console.log(idRules.innerHTML);
console.log(idRules.outerHTML);

idContent.innerText='Lorem ipsum dolor.';


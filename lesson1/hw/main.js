{
// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
    let hw1var0 = 'hello';
    let hw1var1 = 'owu';
    let hw1var2 = 'com';
    let hw1var3 = 'ua';
    let hw1var4 = 1;
    let hw1var5 = 10;
    let hw1var6 = -999;
    let hw1var7 = 123;
    let hw1var8 = 3.14;
    let hw1var9 = 2.7;
    let hw1var10 = 16;
    let hw1var11 = true;
    let hw1var12 = false;

// Вивести кожну змінну за допомогою: console.log , alert, document.write
    console.log(hw1var0);
    console.log(hw1var1);
    console.log(hw1var2);
    console.log(hw1var3);
    console.log(hw1var4);
    console.log(hw1var5);
    console.log(hw1var6);
    console.log(hw1var7);
    console.log(hw1var8);
    console.log(hw1var9);
    console.log(hw1var10);
    console.log(hw1var11);
    console.log(hw1var12);
    // alert(hw1var0);
    // alert(hw1var1);
    // alert(hw1var3);
    // alert(hw1var4);
    // alert(hw1var5);
    // alert(hw1var6);
    // alert(hw1var7);
    // alert(hw1var8);
    // alert(hw1var9);
    // alert(hw1var10);
    // alert(hw1var11);
    // alert(hw1var12);
    document.write(`<div>${hw1var0}</div>`);
    document.write(`<div>${hw1var1}</div>`);
    document.write(`<div>${hw1var2}</div>`);
    document.write(`<div>${hw1var3}</div>`);
    document.write(`<div>${hw1var4}</div>`);
    document.write(`<div>${hw1var5}</div>`);
    document.write(`<div>${hw1var6}</div>`);
    document.write(`<div>${hw1var7}</div>`);
    document.write(`<div>${hw1var8}</div>`);
    document.write(`<div>${hw1var9}</div>`);
    document.write(`<div>${hw1var10}</div>`);
    document.write(`<div>${hw1var11}</div>`);
    document.write(`<div>${hw1var12}</div>`);

// - Переприсвоїти кожній змінній з завдання значення на довільне.
    hw1var0 = 10 + 'hello'
    hw1var1 = 10 + 'owu';
    hw1var2 = 10 + 'com';
    hw1var3 = 10 + 'ua';
    hw1var4 = 10 + 1;
    hw1var5 = 10 + 10;
    hw1var6 = 10 - 999;
    hw1var7 = 10 + 123;
    hw1var8 = 10 + 3.14;
    hw1var9 = 10 + 2.7;
    hw1var10 = 10 + 16;
    hw1var11 = !!10;
    hw1var12 = 10 > hw1var10;

// Вивести кожну змінну за допомогою: console.log , alert, document.write
    console.log(hw1var0);
    console.log(hw1var1);
    console.log(hw1var2);
    console.log(hw1var3);
    console.log(hw1var4);
    console.log(hw1var5);
    console.log(hw1var6);
    console.log(hw1var7);
    console.log(hw1var8);
    console.log(hw1var9);
    console.log(hw1var10);
    console.log(hw1var11);
    console.log(hw1var12);
    // alert(hw1var0);
    // alert(hw1var1);
    // alert(hw1var3);
    // alert(hw1var4);
    // alert(hw1var5);
    // alert(hw1var6);
    // alert(hw1var7);
    // alert(hw1var8);
    // alert(hw1var9);
    // alert(hw1var10);
    // alert(hw1var11);
    // alert(hw1var12);
    document.write(`<div>${hw1var0}</div>`);
    document.write(`<div>${hw1var1}</div>`);
    document.write(`<div>${hw1var2}</div>`);
    document.write(`<div>${hw1var3}</div>`);
    document.write(`<div>${hw1var4}</div>`);
    document.write(`<div>${hw1var5}</div>`);
    document.write(`<div>${hw1var6}</div>`);
    document.write(`<div>${hw1var7}</div>`);
    document.write(`<div>${hw1var8}</div>`);
    document.write(`<div>${hw1var9}</div>`);
    document.write(`<div>${hw1var10}</div>`);
    document.write(`<div>${hw1var11}</div>`);
    document.write(`<div>${hw1var12}</div>`);
}
{
// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person. (Не об'єкт)
    let firstName = 'Олександр';
    let middleName = 'Романович';
    let lastName = 'Клюс';
    let person
    person = lastName + " " + firstName + " " + middleName;
    console.log(person);
}
{
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
    let inputName = prompt("Please enter your first name");
    let inputMiddleName = prompt("Please enter your middle name");
    let inputAge = prompt("Please enter your age");
    console.log('"Hello ' + inputName + ' ' + inputMiddleName + '.Your age is ' + inputAge + ' years' + '".');
    document.write(`<h3>${'"Hello ' + inputName + ' ' + inputMiddleName + '.Your age is ' + inputAge + ' years' + '".'}</h3>`);
}
{
// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
    let a = 100;
    let b = '100';
    let c = true;
    console.log(typeof a);
    console.log(typeof b);
    console.log(typeof c);
}

// - Визначити відповідний оператор в виразах що б вийшов відповідний результат.
//     В однакових виразах не використовувати однакові оператори!!!
//     5 ? 6 -> true
// 5 ? 6 -> false
// 5 ? 6 -> false
// 5 ? 6 -> false
// 10 ? 10 -> true
// 10 ? 10 -> true
// 10 ? 10 -> false
// 10 ? 10 -> false
// 10 ? 10 -> false
// 123 ? '123' -> false
// 123 ? '123' -> true
{
    let result = 5 < 6;
    console.log('5<6 ' + result);
    result = 5 > 6;
    console.log('5>6 ' + result);
    result = 5 === 6;
    console.log('5===6 ' + result);
    result = 5 == 6;
    console.log('5==6 ' + result);
    result = 10 == 10;
    console.log('10==10 ' + result);
    result = 10 === 10;
    console.log('10 === 10 '+result);
    result = 10 !== 10;
    console.log('10 !== 10 '+result);
    result = 10 > 10;
    console.log('10>10 '+result);
    result = 10 < 10;
    console.log('10<10 '+result);
    result = 123 ==='123';
    console.log("123==='123' "+result);
    result = 123 =='123';
    console.log("123=='123' "+result);

}
// - Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
// let str = "20";
// let a = 5;
// document.write(str + a + "<br/>");
// document.write(str - a + "<br/>");
// document.write(str * "2" + "<br/>");
// document.write(str / 2 + "<br/>");

//  все буде стрінг, тому що "<br/>" стрінг

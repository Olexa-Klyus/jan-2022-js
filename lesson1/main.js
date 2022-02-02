// let number=100
// console.log(number);
// console.log(typeof number);
// let  message = "привіт всім";
// console.log(typeof message);
// message = 12
// console.log(typeof message);

// console.log(true)
// console.log(typeof true)
// let bool1 = 5=="5"
// console.log(bool1)
// let bool2 = 5==="5"
// console.log(bool2)

// let array= [10,20,30,1000];
// console.log(array);
// console.log(array.length);
// console.log(array[0]);

// let arr= ['a','b','c',[10,11,12]];
// console.log(arr[3][2]);

// let productTitle = 'bret';
// let productPrice = 20;
// let productQuantity = 2;
// // можна записати
// let produkt = {
//     title: 1,
//     price: 20,
//     quantity: 63,
//     manufacturer: {
//         title: "Львівське",
//         city: "Львів",
//         conservants: [
//             {id:'c150', status:1},
//             {id:'f10', status:2},
//             {id:'b160', status:3}
//         ]
//     },
// }
// console.log(produkt.title);
// console.log(produkt.quantity);
// console.log(produkt["price"]);
// console.log(produkt.manufacturer.title)
// console.log(produkt["manufacturer"].title);
// console.log(produkt.manufacturer.conservants);
// console.log(produkt.manufacturer.conservants[2]);
// console.log(produkt.manufacturer.conservants[2].status);
// let prodMan = produkt.manufacturer
// console.log(prodMan.conservants[1].status)

// console.log((10 % 3))   // результат 1
// console.log('10'+ 5)    // результат '105'
// let x=null;             // пусте значення
// let value ='200'        // string
// console.log((+value))   //число
//                         //або parseInt
// console.log(!!234)      // дасть true- якщо не 0
//
// // ці вирази дасть false
// console.log(!!0);
// console.log(!!'');
// console.log(!!NaN);
// console.log(!!undefined);
// console.log(!!null);

let msg='hello';
document.write('<div>'+msg+'</div>');
//or
document.write(`<div>${msg}</div>`)
// виводимо на сторінку

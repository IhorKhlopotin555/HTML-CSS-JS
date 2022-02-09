// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function calc(a,b){
//     let res = a*b;
//     return res
// }
// let result = calc(15, 30)
// console.log(result)
// - створити функцію яка обчислює та повертає площу кола з радіусом r
// function calc(radius) {
//     const a = 3.14
//     let res = 2 * a * radius;
//     return res
// }
// let result = calc(15)
// console.log(result)
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// function calc(h, r) {
//     const PI = 3.14;
//     let res = 2 * PI * h * r;
//     return res;
// }
// let result = calc(10,20)
// console.log(result)
// - створити функцію яка приймає масив та виводить кожен його елемент
// let arr = [1,'two', false];
// function array (arr) {
//     for (let i = 0; i < arr.length; i++) {
//        console.log(arr[i])
//     }
// }
// array(arr)
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function div(size, txt){
//     for(let i = 0; i < size; i++){
//     document.write(`<h1>${txt}${i+1}</h1>`);
// }
// }
// div(100, 'hello')
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function div(size, txt){
//     document.write(`<ul>`);
//     for(let i = 0; i < size; i++){
//         document.write(`<li>${txt}${i+1}</li>`);
//     }
//     document.write(`</ul>`)
// }
// div(3, 'hello')
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function div(size, txt){
//     document.write(`<ul>`);
//     for(let i = 0; i < size; i++){
//         document.write(`<li>${txt}${i+1}</li>`);
//     }
//     document.write(`</ul>`)
// }
// div(3, 'hello')
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let arr = [1,'two', false];
// function array (arr) {
//         document.write(`<ol>`)
//             for (let i = 0; i < arr.length; i++) {
//                 document.write(`<li>Item: ${arr[i]}</li>`);
//             }
//         document.write(`</ol>`)
// }
// array(arr)
//

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let arrays = [{id: 1, name: 'Taras', age: 38}]
function array (arg) {
    document.write(`<ol>`)
    for ( element of arg) {
        document.write(`<li>${element.id}; ${element.name}; ${element.age}</li>`);
    }
    document.write(`</ol>`)
}
array(arrays)
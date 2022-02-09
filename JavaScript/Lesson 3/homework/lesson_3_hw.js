// --створити масив з:
//     - з 5 числових значень
// let arr_1 = [10, 224, 32, 5, 12];
// for (let temp of arr_1) {
//     console.log(temp);
// }
// - з 5 стічкових значень
// let arr_2 = ['one', 'two', 'three', 'four', 'five'];
// for (let temp of arr_2) {
//     console.log(temp);
// }
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
// let object = {type: 'object', possition: 4, status: true};
// let arr_3 = [1, 'two', false, {object}, true];
// for(let temp of arr_3){
//     console.log(temp);
// }
//-- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
// let arr = [];
// arr[0] = "one";
// arr[1] = "two";
// arr[2] = "three";
// console.log(arr)
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// for( let i = 0; i <= 10; i++){
//     document.write('<div> text </div>')
// }
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// for( let i = 0; i <= 10; i++){
//     document.write(`<div>${i} text </div>`)
// }
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// let i = 0;
// while(i<=10){
//     document.write(`<div> text </div>`)
//     i++
// }
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
// let i = 0;
// while(i<=10){
//     document.write(`<div>${i} text </div>`)
//     i++
// }
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
// for(let temp of arr){
//     console.log(temp);
// }
//- Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// let arr = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten']
// for(let temp of arr){
//     console.log(temp);
// }
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// let arr = [true, 2, 'three', 4, false, 6, 'seven', 8, {}, 0]
// for(let temp of arr){
//     console.log(temp);
// }
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// let arr = [1, 'two', true, false, 40, 28, 'string', 23];
// for(i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === `number`) {
//         console.log(arr[i])
//     }
// }
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// let arr = [1, 'two', false, true, 10, 25, 'string', 'array', 23, false]
// for(i = 0; i < arr.length; i++){
//     if(typeof arr[i] === 'number')
//         console.log(arr[i])
// }
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// let arr = [1, 'two', false, true, 10, 25, 'string', 'array', 23, false]
// for(j = 0; j < arr.length; j++){
//     if(typeof arr[j] === 'string'){
//         console.log(arr[j])
//     }
// }
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// let arr = []
// arr[0] = true
// arr[1] = 3
// arr[2] = {}
// arr[3] = 'string'
// arr[4] = true
// arr[5] = 3
// arr[6] = {}
// arr[7] = 'string'
// arr[8] = true
// arr[9] = 3
// console.log(arr)
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for(i = 0; i <=10; i++)
//     console.log(`Крок: ${i}`)
//     document.write(`Крок: ${i}`)
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for(i = 0; i <=100; i++)
//     console.log(`Крок: ${i}`)
//     document.write(`Крок: ${i}`)
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for(i = 0; i <=100; i +=2)
//     console.log(`Крок: ${i}`)
//     document.write(`Крок: ${i}`)
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for(i = 2; i <= 100; i ++){
//     if(i % 2 === 0){
//         console.log(`Step: ${i}`)
//         document.write(`Step: ${i}`)
//     }
// }
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for(i = 0; i <= 100; i ++){
//     if(i % 2){
//         console.log(`Step: ${i}`)
//         document.write(`Step: ${i}`)
//     }
// }
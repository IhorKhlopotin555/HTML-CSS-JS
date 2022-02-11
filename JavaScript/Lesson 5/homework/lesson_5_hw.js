// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка обчислює та повертає площу прямокутника висотою
// const calc = (a,b) => {return a*b;}
// console.log(calc(20, 30))
// - створити функцію яка обчислює та повертає площу кола
// const calc = (r) => {const PI = 3.14; return PI * r * 2}
// console.log(calc(5))
// - створити функцію яка обчислює та повертає площу циліндру
// const calc = (h, r) => {const PI = 3.14; return h * r * PI * 2}
// console.log(calc(10,15))
// - створити функцію яка приймає масив та виводить кожен його елемент
// const calc = (array) => {for(let i = 0; i < array.length; i++){
//     console.log(array[i])}}
// let test = [2,4,'string']
// console.log(calc(test))
// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент
// const calc = (txt) => {document.write(`<p>Парагарф: ${txt}</p>`)}
// calc('text')
// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// const calc = (txt) => {
// document.write(`<ul>`)
//     document.write(`<li>Element: ${txt}`)
//     document.write(`<li>Element: ${txt}`)
//     document.write(`<li>Element: ${txt}`)
// document.write(`</ul>`)
// }
// calc('random text')
// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// const calc = (txt, limit) => {
//     document.write(`<ul>`)
//     for(let i = 0; i < limit; i++) {
//         document.write(`<li>Element: ${txt}`)
//         document.write(`</ul>`)
//     }
// }
// calc('random text', 3)
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// const calc = (array) =>{
//     document.write(`<ul>`)
//     for(let i = 0; i < array.length; i++){
//         document.write(`<li> ${array[i]}`)
// document.write(`</ul>`)
//     }
// }
// calc([2,'string',false, {}])

//створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// let arr = [{id: 1, name: 'Polly', age: 48},{id: 2, name: 'Artur', age: 42}]
// const calc = (array) => {
//     for(const element of array){
//         console.log(`${element.id} ${element.name} ${element.age}`)
//     }
// }
// calc(arr)
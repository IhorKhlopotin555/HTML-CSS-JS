// 1. Створити пустий масив та :
//     a. заповнити його 50 парними числами за допомоги циклу.
//1)
// let a = (length) => {
//     let b = []
//     for(let i = 0; i < length; i++){
//         b[i] = i
//         console.log(b.filter(value => value % 2 === 0));
//     }
// }
// function alienLanguage(str){
//     let up = str.toUpperCase()
//     let words = up.split(' ');
//     for (let i=0; i < words.length; i++){
//
//             words[i]=words[i].replace(words[i][0],words[i][0].toLowerCase());
//     }
//     console.log(words);
// }
// console.log(alienLanguage('slava ukraini heroyam slava'));
//2)
// function powersOfTwo(n){
//     let s =[]
//     for(let i = 0; i <= n; i++){
//         let l = Math.pow(2,i)
//         s.push(l)
//     }
//     console.log(s);
// }
// let test = 1
// console.log(powersOfTwo(test));
// function powersOfTwo(n){
//     let s =[]
//     for(let i = 0; i < n; i++){
//         let l = Math.pow(2,i)
//         s.push(l)
//     }
//     return s
// }
//
// console.log(powersOfTwo(3));
// console.log(a(100));
// let a = []
// for (let i = 0; i < 100; i++){
//     if(i % 2 === 0){
//         a.push(i)
//         console.log(a);
//     }
// }
// let equation = (a,b,c) => {
//     let D = Math.pow(b,2) - 4*a*c
//     if(D < 0){
//         return 'false'
//     }
//     else{
//         let x = (-b + Math.sqrt(D)/2*a)
//         console.log(x);
//         let y = (-b - Math.sqrt(D)/2*a)
//         console.log(y);
//     }
// }
// console.log(pizda(8, 10, 3));

// let palindrom = (str) => {
//     let a = str.split('').join('')
//     let b = a.reverse()
//     if(a === b){
//         console.log('palindrom')
//     }
//     else{
//         console.log('ne palindrom')
//     }
// }
// palindrom('pop')
// let palindrom = (str) =>{
// let half = Math.floor(str.length/2)
//     for(let i =0; i < half; i++){
//         if(str[i] !== str[str.length - i -1]){
//             return 'ne palindrom'
//         }
//         else{
//             return 'palindrom'
//         }
//     }
// }
// console.log(palindrom('babsab'));
//     b. заповнити його 50 непарними числами за допомоги циклу.
// let arr = []
// for(let i = 0; i <= 100; i++)
//     if(i % 2 !== 0){
//         arr.push(i)
//     }
// console.log(arr);
//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
// let arr = []
// for(let i = 0; i < 20; i++){
//     arr.push(Math.floor(Math.random() * 100))
// }
// console.log(arr);


// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
// let arr = []
// for(let i = 0; i < 20; i++){
//     for(let j = 0; j < 3; j++){
//     arr.push(Math.floor(Math.random() * (732 - 8 - 1) + 8))
//     }
// }

// 2. Вивести за допомогою console.log кожен третій елемен
// let calc = (first, last) => {
//     let arr = []
//     let counter = 0
//         for(let i = first; i < last; i++){
//             counter++
//             if(counter % 3 === 0){
//                 console.log(i);
//             }
//         }
//     }
// (calc(5, 20));
// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
// let calc = (first, last) => {
//     let arr = []
//     let counter = 0
//     for(let i = first; i < last; i++){
//         counter++
//         if(counter % 3 === 0 && i % 2 === 0){
//             console.log(i);
//         }
//     }
// }
// calc(8, 70)
// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
// let calc = (first, last) => {
//     let arr = [];
//     let counter = 0;
//     for(let i = first; i < last; i++){
//         counter ++
//         if(counter % 3 === 0 && i % 2 === 0){
//             arr.push(i)
//         }
//     }
//     console.log(arr);
// }
// calc(10,40)

// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56

// let calc = (arr) => {
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i + 1] % 2 === 0){
//             console.log(arr[i]);
//         }
//     }
// }
// let test =[ 1, 2, 3, 5, 7, 9, 56, 8, 67 ]
// console.log(calc(test));

// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
// let calc = (arr) => {
// let sum = 0
//     for(i = 0; i < arr.length; i++){
//         sum += arr[i]
//     }
//     console.log(sum/arr.length);
// }
// let test =[ 1, 2, 3, 5, 7, 9, 56, 8, 67 ]
// console.log(calc(test));
//
// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
// let a = []
// for(i = 0; i < 100; i++){
//     a.push(Math.floor(Math.random() * 10))
//     a[i] = a[i]*5
// }
// console.log(a);
// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
// let arr = ['str', false, 2, 'number', 4, true, false, 1]
// let arr_2 = []
// for(let i = 0; i < arr.length; i++){
//     if(typeof arr[i] === 'number'){
//         arr_2.push(arr[i])
//     }
// }
// console.log(arr_2);
//
//
//
// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
//     let usersWithId = [
//         {id: 1, name: 'vasya', age: 31, status: false},
//         {id: 2, name: 'petya', age: 30, status: true},
//         {id: 3, name: 'kolya', age: 29, status: true},
//         {id: 4, name: 'olya', age: 28, status: false}
//     ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];

// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//             {
//                 id: 1, // <===
//                 name: 'vasya',
//                 age: 31,
//                 status: false,
//                 address: {
//                     user_id: 1, // <===
//                     country: 'Ukraine',
//                     city: 'Ternopil'
//                 }
//             },
//             // TO BE CONTINUED .....
//         ]
//
//
//
//
//         - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
// let arr = [3, 2, 2, 3, 5, 5, 8,10]
// for(let i = 0; i < arr.length; i++){
//     if(arr[i] % 2 === 0){
//         console.log(arr[i]);
//     }
// }
//
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
// let arr = [3, 2, 2, 3, 5, 5, 8,10]
// let arr_2 = []
// for(let i = 0; i < arr.length; i++){
//     arr_2.push(arr[i])
// }
// console.log(arr_2);
//
//
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
// let arr = [ 'a', 'b', 'c']
// let sum = []
// for(let i = 0; i < arr.length; i++){
//     sum += arr[i]
// }
// console.log(sum);
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// let arr = [ 'a', 'b', 'c']
// let i = 0
// let sum = []
// while(i < arr.length){
//     sum += arr[i]
//     i++
// }
// console.log(sum);
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
// let arr = ['a', 'b', 'c']
// let sum = []
// for(let el of arr){
//     sum += el
// }
// console.log(sum);
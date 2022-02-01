// //1. Створити масив з 10 чисел (можна використовувати Math.random Та Math.floor). Скласти результат цих чисел в змінній result.
// let array = [1, 5, 33, 4, 89, 98, 32,54,76, 8]
// let result = array.reduce((acc, array) => acc + array, 0)
// console.log(result)
// //2. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр
// let book = {
//     name: "Harry Potter"
//     number: 320
//     genre: "fantasy"
// }
//3. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр, автори
// let book =  {
//     name: "Harry Potter",
//     number: 320,
//     genre: "fantasy",
//     autors: {
//         name1: 'Joan_Rowling',
//         name2: 'Jim_Rowling'
// }
// };
// console.log(book);
//4. Створити маис об'єктів book з наступними полями  - назва, кількість сторінок, жанр, автори. Вивести кожну книгу як окремий об'єкт
// let books = [{Harry_Potter}, {Tom_Soyer}, {Robinson_Kruso}]
let Harry_Potter = {
    name: "Harry Potter",
    number: 321,
    genre: "fantasy",
    autors:{
        name1: "Joan Rowling",
        name2: "Jim Rowling"
    }
}
let Tom_Soyer = {
    name: "Tom Soyer",
    number: 350,
    genre: "adventures",
    autors:{
        name1:"Mark Tven",
        name2:"Olivia Rein"
    }
}
let Robinson_Kruso = {
    name:"Robinson Kruso",
    number: 390,
    genre: "drama",
    autors:{
        name1:"Daniel Deffo",
        name2:"John Swift"
    }
}
let books = [{Harry_Potter}, {Tom_Soyer}, {Robinson_Kruso}]
console.log(books[0]);
//5. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
//    Значення площі зберігати в змінній s.
// let height = 23
// let width = 10
// let s =height*width
// console.log(s);
//6. Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC) та діаметром основи 4м (dC),
//         результат помістіть у змінну v.
// let heightC = 10
// let dC = 4
let r = dC/2;
// const PI = 3.14
// let v = PI*heightC*((4*0.5)*(4*0.5))

// console.log(v);
//7. У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).
//Знайдіть гіпотенузу k за теоремою Піфагора (потрібно використовувати функцію Math.pow (число, ступінь) або оператор зведення в ступінь **).
// let n = 3
// let m = 4
// let k = Math.sqrt(n*n + m*m);
// console.log(k);
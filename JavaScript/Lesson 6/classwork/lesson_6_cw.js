// - Дано список імен.
// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
// let method = (str, symbol) => {
// let newArray = [];
// if(str.includes(symbol)){
//     let a = str.split(symbol)
//     a.forEach((item) => {
//         if (item) newArray.push(item)
//     })
//         console.log(newArray.join(' '));
//     }
// }
// let test = 'Hermione__Granger'
// method(test, '_');
//
//     - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
// let method = (length, number) => {
//     let arr = [];
//     for(let i = 0; i < length; i++){
//         arr.push(Math.floor(Math.random()*number));
//     }
// return arr;
// }
// console.log(method(100, 100));
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
// let method = (length, number) => {
//     let arr = [];
//     for(let i = 0; i < length; i++){
//     arr.push(Math.floor(Math.random() * number))
// }
//     return arr.sort((a, b) => (a - b))
// }
// console.log(method(100, 100));
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа
// let method = (length, number) => {
//     let arr = [];
//     for(let i = 0; i < length; i++){
//     arr.push(Math.floor(Math.random() * number))
// }
//     return arr.filter(value => value % 2 ===0)
// }
// console.log(method(100, 100));
// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
// let method = (length, number) => {
//     let arr = [];
//     for (let i = 0; i < length; i++) {
//         arr.push(Math.floor(Math.random() * number))
//     }
//     return arr;
// }
// console.log(method(100, 100));

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]
// let method = (arr, direction) => {
//     if(direction === 'ascending'){
//        return (arr.sort((a, b) => (a - b)));
//     }
//     if(direction === 'descending'){
//         return (arr.sort((a, b) => (b - a)));
//     }
// }
// let test = [2, 15, 4, 8, 3]
// console.log(method(test, 'descending'));
//
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
let method_sort = coursesAndDurationArray.sort((a, b) => (b.monthDuration - a.monthDuration))
console.log(method_sort);
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let method_filter = coursesAndDurationArray.filter(value => value.monthDuration > 5)
console.log(method_filter);
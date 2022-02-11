// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// const calc = (a, b, c) => {
//     if(a < b && a < c){
//         console.log(a)
//     }
//     else if( b < a && b < c){
//         console.log(b)
//     }
//     else if(c < a && c < b){
//         console.log(c)
//     }
//     else{
//         console.log('error')}
// }
// calc(20, 30, 10 )
// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// const calc = (a, b, c) => {
//     if(a > b && a > c){
//         console.log(a)
//     }
//     else if( b > a && b > c){
//         console.log(b)
//     }
//     else if(c > a && c > b){
//         console.log(c)
//     }
//     else{
//         console.log('error')}
// }
// calc(20, 30, 10 )
// - створити функцію яка повертає найбільше число з масиву
// const calc = (array) => {
//     let number = array[0];
//     for(const element of array){
//         if(element > number){
//             number = element;
//         }
//     }
//     return console.log(number);
// }
// let arr = [20, 40, 10]
// calc(arr)
// - створити функцію яка повертає найменьше число з масиву
// const calc = (array) => {
//     let number = array[0]
//     for(const element of array){
//         if(element < number){
//             number = element;
//         }
//     }
//     console.log(number)
// }
// let arr = [15, 40, 3]
// calc(arr)
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// const calc = (array) => {
//     let suma = 0
//     for (const element of array) {
//         suma = element + suma
//     }
//     console.log(suma)
// }
// let arr = [20, 30, 23]
// calc(arr)
// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// const calc = (array) => {
//     let suma = 0
//     let middle = 0
//     for(const element of array){
//         suma = element + suma
//         middle = suma / array.length
//     }
//     console.log(middle)
// }
// let arr = [23, 48, 25]
// calc(arr)
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// const calc = (array) => {
//     let max = 0
//     let min = array[0]
//     for( const element of array){
//         if(element > max){
//             max = element;
//         }
//         else if(element < min){
//             min = element
//         }
//     }
//     console.log(max);
//     return min;
// }
// let test = [23, 4, 233, 29, 100]
// calc(test)
// document.write(calc(test))
// - створити функцію яка заповнює масив рандомними числами
const calc = (limit) => {
    let arr = []
    for(let i =0; i < limit; i++){
        arr.push(Math.round(Math.random() * 100))
    }
    console.log(arr)
}
calc(10)
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// const calc = (arrayLength, limit) => {
//     let arr = []
//     for(let i = 0; i < arrayLength; i++){
//         arr.push(Math.round(Math.random() * limit))
//     }
//     console.log(arr)
// }
// calc(10, 100)
// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
// const calc = (array) => {
//     let arr = []
//     for(let j = 0, i = array.length - 1; i >= 0; j++, i--){
//         arr[j]=array[i]
//     }
//     console.log(array)
//     console.log(arr)
// }
// let test = [1,2,3,4]
// calc(test)
// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// function calc(a,b,c){
//     if(a < b && a < c){
//         console.log(a)
//     }
//     else if(b < a && b < c){
//         console.log(b)
//     }
//     else if(c < a && c < b){
//         console.log(c)
//     }
// }
// calc(40,20,30)

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// function calc(a,b,c){
//     if(a > b && a > c){
//         console.log(a)
//     }
//     else if(b > a && b > c){
//         console.log(b)
//     }
//     else if(c > a && c > b){
//         console.log(c)
//     }
// }
// calc(40,20,30)
// - створити функцію яка повертає найбільше число з масиву
// let arr = [80, 40, 60]
// function calc(array){
// let a = [0];
// for(const element of array){
// if(element > a){
//     a = element;
// }}
// return a;
// }
// console.log(calc(arr))

// - створити функцію яка повертає найменьше число з масиву
// let arr = [20,40,10]
// function calc(array){
//     let min = array[0];
//     for(const element of array){
//         if(element<min){
//             min=element;
//         }
//     }
//     return min
// }
// console.log(calc(arr))
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let arr = [10, 15, 20]
// function calc(arr){
//     let res = 0;
//     for(let i=0; i<=arr.length; i++){
//         // let result = arr.reduce((sum, current) => sum + current, 0);
//         res += arr[i];
//     }
// }
// calc(arr)
// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let array = [10, 15, 20]
// function calc(arr){
//     let sum = 0
// for(const element of arr){
// sum = element + sum;
// }
// return sum/arr.length;
// }
// console.log(calc(array))
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// function calc(arr){
// let min =arr[0]
// let max =arr[0]
// for(const element of arr){
//     if(element<min){
//         min = element
//     }
//     else if(element>max){
//         max = element
//     }
// }
//     console.log(max);
// return min
// }
// let test=[20,30,10]
// console.log(calc(test))

// - створити функцію яка заповнює масив рандомними числами

// function calc (array, length){
//     for(i = 0; i < length; i++){
//         let a = Math.floor(Math.random()*length)
//         array.push(a)
//     }
//     console.log(array)
// }
// let arr=[]
// calc(arr, 10)

// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// function calc (){
//         let a = Math.floor(Math.random()*100)
//     console.log(a)
// }
// calc()
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// function calc(array,limit, length){
//     for(i = 0; i < length; i++){
//         let a = Math.floor(Math.random()*limit)
//         array.push(a)
//     }
//     console.log(array)
// }
// let arr = []
// calc(arr, 20, 10)
// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
// function calc(array){
// let arr = [];
// let j=0;
//     for(i = array.length; i > 0; i--){
//
//     }
//     j++
//     console.log(array)
// }
// let test = [1,2,3]
// calc(test)
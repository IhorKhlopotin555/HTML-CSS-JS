//
// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.
// function calc(...arg){
//     for( let i = 0; i<=1; i++){
//         console.log(arg*2)
//     }
//     for( let i = 0; i<=2; i++){
//         console.log(arg[0]+arg[1])
// }
// }
// calc(4,10)
//
// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]
// function calc(arr_1, arr_2){
//     let arr_3 = []
//     for(let i = 0; i<arr_1.length; i++){
//        arr_3.push(arr_1[i]+arr_2[i])
//     }
//     console.log(arr_3)
// }
// calc([2,3,4],[5,6,7])
// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
// function calc(arrs) {
//     for (let i = 0; i < arrs.length; i++) {
//         console.log(Object.keys(arrs))
//     }
// }
// calc({name: 'Ada', age: 27})
//
//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
// function calc(arrs) {
//     for (let i = 0; i < arrs.length; i++) {
//         for (element of arrs) {
//             console.log(`${element.name}; ${element.age}`)
//         }
//     }
// }
// calc([{name: 'Ada', age: 27}])
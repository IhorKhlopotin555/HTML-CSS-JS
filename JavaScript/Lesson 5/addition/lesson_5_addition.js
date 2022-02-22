
// - Дано натуральное число n. Выведите все числа от 1 до n.
// const calc = (n) => {
//     let arr = [n]
//     for(let i = 0; i < n; i++){
//        arr[i] = i
//         console.log(arr[i])
//     }
// }
// calc(10)
// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.
// const calc = (a, b) => {
//     let arr = []
//     if (a > b){
//         while (a >= b) {
//             arr.push(a--);
//         }
//         console.log(arr);
//     }
//     else if (a < b){
//     while (a <= b) {
//         arr.push(a++);
//     }
//     console.log(arr);
// }
//         }
// calc (10, 20)
// calc (30, 10)

// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
//
// const calc = (array, number) => {
//     let old = array[number]
//     array[number] = array[number+1];
//     array[number+1] = old
//     console.log(array)
// }
// let test =  ['string', 2, false, 4, 10, 'galya']
// calc(test, 2)
// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
const calc = (array) => {
    let k=0;
    for(let i = 0; i < Math.floor(Math.random() * (100 - 2 + 1)) + 2; i++)
    {
        array.push(Math.round(Math.random() * 2))
        if(array[i] !==0)
        {
            let temp = array[i];
            array[i] = array[k];
            array[k] = temp;
            k++;
        }
    }
    console.log(array)
}
let test = []
calc(test)
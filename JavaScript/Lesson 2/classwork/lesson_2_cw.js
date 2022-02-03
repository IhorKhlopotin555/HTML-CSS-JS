// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числ
// let number_1 = parseInt(prompt("Enter your first number"))//parseInt
// console.log(number_1);
// let number_2 = parseInt(prompt("Enter your second number"))
// if(number_1 > number_2){
//     console.log("The biggest number is:", number_1)
// }
// else if(number_1 < number_2){
//     console.log("The biggest number is:", number_2)
// }
// else {
//     console.log("There are the same numbers")
// }
//
//
// - У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
// Користувач вводить номер квартири просто в змінні або через prompt('') .
//     Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.
// let flat = parseInt(prompt("Choose number of your flat:"))
// if (flat >= 1 && flat <=20){
//     console.log("Your flat is in first entrance")
// }
// else if (flat > 20 && flat <= 48){
//     console.log("Your flat is in second entrance")
// }
// else if (flat > 48 && flat <= 90){
//     console.log("Your flat is in third entrance")
// }
// else{
//     console.log("Invalid number")
// }
//
// - Ми маємо змінну number в яку користувач задає числове значення,  якщо змінна рівна 10 вивести повідомлення ВІРНО, якщо змінна не рівна 10 - тоді НЕВІРНО
// let number = parseInt(prompt("Enter your number"))
// if(number % 10 === 0){
//     console.log("True")
// }
// else {
//     console.log("False")
// }
// - Ми маємо змінну x в яку користувач задає  значення,  якщо в змінну записане число, вивести 1,
//     якщо в змінну записали стрінгу вивести 2, якщо булеве значення - 3, якщо об'єкт або масив - 4.
// якщо в змінну записали щось інше, спрацьовує else
// let x = {}
// if (typeof x === 'number' ){
//     console.log("Number")
// }
// else if (typeof x === 'string'){
//     console.log("String")
// }
// else if (typeof x === 'boolean'){
//     console.log("Boolean")
// }
// else if (typeof x === 'object'){
//     console.log("Object");
// }
// - Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
//     Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ .
//     Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН
// let temperature = Math.floor(Math.random() * (40 - (-20)) + (-20))
// console.log(temperature);
// if (temperature >= 10 && temperature <=22){
//     console.log("We are going to study")
// }
// else {
//     console.log("we stay in home and study")
// }
// - За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5. І взалежності від введеного
//     числа нам дається приз. (Авто, Мото, Телефон, і т.д ) і якщо число не підходить тоді  вивести Повідомлення - що число не вірне ... .
// let number = parseInt(prompt("Enter your number"))
// switch(number){
//     case 1:
//         console.log("Auto");
//         break;
//     case 2:
//         console.log("Moto")
//         break;
//     case 3:
//         console.log("Mobile phone")
//         break;
//     case 4:
//         console.log("JackPot")
//         break;
//     default:
//         console.log('You lose');
// }
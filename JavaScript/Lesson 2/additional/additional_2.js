// - Нам дано масив друзів let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"]; Потрібно зробити перевірку якщо
// кількість елементів у масиві більше або дорівнює 3, то виводиться повідомлення про те, що це великий масив, в якому  3 і більше елементи.
//     Інакше слід вивести на екран повідомлення про те, що це маленький масив, в якому менше 3-х елементів.
// let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"];
// if (friends.length >= 3){
//     console.log("huge massive")
// }
// else{
//     console.log("small massive")
// }
// - Маємо 3 числа і між ним  нам потрібно знайти те що посередині.
//     Знайти, яке з них є середнім (більше одного, але менше за інше). Перевірити, чи знаходиться перше число між двома іншими.
//1)
// let numbers = [1, 32, 9]
// let theMiddle = Math.floor(numbers.length / 2);
// let result = numbers[theMiddle];
// console.log(result);
// //2)
// let a = parseInt(prompt("Choose your first number:"))
// let b = parseInt(prompt("Choose your second number:"))
// let c = parseInt(prompt("Choose your third number:"))
// if(b > a && b < c){
//     console.log("b - middle element")
// }
// else if(b < a && b > c){
//     console.log("b - middle element")
// }
// else if(a > b && a < c){
//     console.log("a - middle element")
// }
// else if (a < b && a > c){
//     console.log("a - middle element")
// }
// else if(c > a && c < b){
//     console.log("c - middle element")
// }
// else if(c < a && c > b){
//     console.log("c - middle element")
// }

// - Перепишіть конструкцію if з використанням умовного оператора '?':
// let result;
// if (a + b < 4) {
//     result = 'Мало';
// }
// else {
//     result = 'Багато';
// }
// let a = 4;
// let b = 5;
// (a + b>4) ? console.log("Мало") : console.log("Багато")

// - Маємо будь яке число від -100 , 0 , +100 потрібно перевірити яким є число: позитивним, негативним або нулем
// напишіть це тернарним оператором
//1)
// let a = 0
// let b = (a > 0) ? console.log("More then 0") : (a == 0) ? console.log("0") : console.log("Less then 0")
//2)
// let number = Math.floor(Math.random() * (100 - (-100)) + (-100))
// if(number < 0){
//     console.log("Less then 0")
// }
// else if(number = 0){
//     console.log("null")
// }
// else{
//     console.log("bigger then 0")
// }
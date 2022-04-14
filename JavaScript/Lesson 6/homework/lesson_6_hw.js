// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let a = 'hello world'
// console.log(a.length);
// let a = 'lorem ipsum'
// console.log(a.length);
// let a = 'javascript is cool'
// console.log(a.length);
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let a = 'hello world';
// console.log(a.toUpperCase());
// let a = 'lorem ipsum';
// console.log(a.toUpperCase());
// let a = 'javascript is cool';
// console.log(a.toUpperCase());
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// let a = 'HELLO WORLD'
// console.log(a.toLowerCase());
// let a = 'LOREM IPSUM'
// console.log(a.toLowerCase());
// let a = 'JAVASCRIPT IS COOL'
// console.log(a.toLowerCase());
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let a = ' dirty string   '
// console.log(a.slice(1, 13));

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']
// let method = (str) => {
//     return str.split(' ');
// }
// let test = 'Каждый охотник желает знать';
// console.log(method(test));
// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый
// let method = (str, num) => {
//     return str.substr(0, num);
// }
// let test = 'Каждый охотник желает знать';
// console.log(method(test, 7));
// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
// let method = (str) => {
//     let a = str.toUpperCase()
//     return a.replaceAll(' ', '-');
// }
// let test = "HTML JavaScript PHP";
// console.log(method(test));
// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
// let method = (str) => {
//     let a = str[0].toUpperCase()
//     let b = str.slice(1)
//     return a + b
// }
// let test = 'javascript'
// console.log(method(test));

// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
// let capitalize = (str) => {
//  return str.split(' ').map(word=>word.charAt(0).toUpperCase()+word.slice(1)).join(' ');
// };
// document.write(capitalize('okten hi you are welcome'));
// console.log(capitalize('okten hi you are welcome'));
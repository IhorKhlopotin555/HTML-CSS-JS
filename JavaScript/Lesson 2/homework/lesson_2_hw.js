// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
// let time = Math.floor(Math.random() * 60)
// if (time <= 15){
//     console.log('first quarter')
// }
// else if(time > 15 && time <= 30){
//     console.log('second quarter')
// }
// else if(time >30 && time <=45){
//     console.log('third quarter')
// }
// else{
//     console.log('fourth quarter')
// }
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю)
// let day = Math.floor(Math.random() * 31) + 1;
// if (day <= 10){
//     console.log("first decade")
// }
// else if (day <=20 && day > 10){
//     console.log("second decade")
// }
// else {
//     console.log("thirst decade")
// }
//- У нас є змінна test, якщо дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
// Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)
// let test = NaN;
// if (test){
//     console.log("true")
// }
// else {
//     console.log("false")
// }
//- Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
// let a = prompt(Choose 1, 0 or -3.);
// if (a == 0) {
//     console.log("false")
// }
// else{
//     console.log("true")
// }
//- Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день.
// let monday = {morning: "morning exersise", dinner:"js study", evening:"film"}
// let tuesday = {morning:"jogging", dinner:"cleaning", evening:"driving"}
// let wednesday = {morning:"writing", dinner:"shoping", evening:"walking"}
// let thursday = {morning:"doctor visit", dinner:"cooking", evening:"violin playing"}
// let friday = {morning:"working", dinner:"drinking", evening:"chilling"}
// let saturday ={morning:"sleeping", dinner:"washing", evening:"gaming"}
// let sunday = {morning:"church", dinner:"macdonalds", evening:"pool"}
// let week = prompt("Choose your day scedule")
// switch(week){
//     case "1":
//         console.log(monday);
//     break;
//     case "2":
//         console.log(tuesday);
//         break;
//     case "3":
//         console.log(wednesday);
//         break;
//     case "4":
//         console.log(thursday);
//         break;
//     case "5":
//         console.log(friday);
//         break;
//     case "6":
//         console.log(saturday);
//         break;
//     case "7":
//         console.log(sunday);
//         break;
//     default:
//         console.log("Invalid number");
// }
//- Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4.
// let year = prompt("Choose your year")
// if (year % 4 === 0){
//     console.log("Intercalary year")
// }
// else{
//     console.log("Ordinary year")
// }
//- Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!
// let ask = prompt('Which is JS official name?');
// if (ask === "ECMAScript"){
//     console.log('True')
// }
// else{
//     console.log('You don`t know? ESMAScript!')
// }
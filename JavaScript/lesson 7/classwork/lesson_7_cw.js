// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// function cars (model, developer, year, maxSpeed, engine) {
//     this.model = model;
//     this.developer = developer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.engine = engine;
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
//     };
//     this.info = function () {
//         for (const key in this) {
//            if (typeof this[key] !== 'function'){
//                console.log(`${key} - ${this[key]}`)
//            }
//         }
//     }
// }
// let test = new cars('lanos', 'voloiodka', '2007', 250, 1.5)
// test.info()
//     this.newMaxSpeed = function(newSpeed){
//         this.maxSpeed = maxSpeed + newSpeed;
//     };
//     this.newValue = function(newValue){
//         this.year = newValue
//     }
//     this.addDriver = function(driver){
//         this.driver = driver
//     }
// }
// let addCar = new cars ('Renault', 'France', 2013, 250, '1.5 TDI')
// console.log(addCar)
// addCar.drive()
// addCar.info()
// addCar.newMaxSpeed(10)
// addCar.drive()
// addCar.newValue('5000$')
// addCar.info()
// addCar.addDriver('Taras')
// console.log(addCar)

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// class cars {
//     constructor(model, developer, year, maxSpeed, engine){
//         this.model = model;
//         this.developer = developer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.engine = engine
//     }
//     drive(){
// console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
// }
//     info(){
//         for(const key in this){
//             console.log(`${key} - ${this[key]}`)
//         }
//     }
//     newMaxSpeed (newSpeed){
//        this.maxSpeed = this.maxSpeed + newSpeed
//     }
//     changeYear(newValue){
//         this.year = newValue
//     }
//     addDriver (driver){
//         this.driver = driver
//     }
// }
// let addCar = new cars('Daewoo', 'Korea', 2007, 200, 1.5)
// console.log(addCar)
// addCar.drive()
// addCar.info()
// addCar.newMaxSpeed(10)
// addCar.drive()
// addCar.changeYear('2000$')
// addCar.addDriver('Volodia')
// console.log(addCar)
//створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// class popeliushca{
//     constructor(name, age, footSize){
//         this.name = name;
//         this.age = age;
//         this.footSize = footSize;
//     }
// }
// let popeliushcaArr = [
//     new popeliushca('Ania', 24, 39),
//     new popeliushca('Vika', 23, 41),
//     new popeliushca('Yaryna', 21, 37),
//     new popeliushca('Vlada', 24, 40),
//     new popeliushca('Zhenia', 40, 39),
//     new popeliushca('Kornelya', 70, 37),
//     new popeliushca('Larysa', 62, 39),
//     new popeliushca('Tetyana', 21, 42),
//     new popeliushca('Khrystia', 20, 38),
//     new popeliushca('Ada', 30, 37)
// ]
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
// class prince{
//     constructor(name, age, findShose) {
//         this.name = name;
//         this.age = age;
//         this.findShose = findShose
//     }
// }
// const princ = new prince('Taras', 40, 37)
// const para = (arr) => {
//     arr.map(el => el.footSize === princ.findShose ? console.log(el) : null )
// }
// para(popeliushcaArr)
// const para = (arr) => {
//     console.log(arr.find(el => el.footSize === princ.findShose));
// }
// para(popeliushcaArr)
// const emptyPrincess = popeliushcaArr.find((item) => item.footSize === prince.findShose);
// console.log(emptyPrincess)

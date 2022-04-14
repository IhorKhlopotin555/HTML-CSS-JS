// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
function User (id, name, surname, email, phone){
    this.id = id
    this.name = name
    this.surname = surname
    this.email = email
    this.phone = phone
}
// створити пустий масив, наповнити його 10 об'єктами new User(....)

const arr = [
    new User(1, 'Ihor', 'BIT', 'ihor123@gmai.com', +380123456789),
    new User(2, 'Kolia', 'BIT', 'kolia123@gmai.com', +380223456789),
    new User(3, 'Roma', 'BIT', 'roma123@gmai.com', +380323456789),
    new User(4, 'Ania', 'BIT', 'ania123@gmai.com', +380423456789),
    new User(5, 'Dima', 'BIT', 'dima123@gmai.com', +380523456789),
    new User(6, 'Vika', 'BIT', 'vika123@gmai.com', +380623456789),
    new User(7, 'Yaryna', 'BIT', 'yaryna123@gmai.com', +380723456789),
    new User(8, 'Oleh', 'BIT', 'oleh123@gmai.com', +380823456789),
    new User(9, 'Vova', 'BIT', 'vova123@gmai.com', +380923456789),
    new User(10, 'Rostik', 'BIT', 'rostik123@gmai.com', +380023456789)
]
console.log(arr);
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// let filterUser = arr.filter((item) => {
//     if(item.id % 2 === 0){
//         return item
//     }
// })
// console.log(filterUser);
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//    // userArr.sort((a, b) => a.id - b.id);
//     // console.log(sortUser)
//     // // 2 спосіб
//     // console.log(userArr.sort((a, b) => a.id - b.id));
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// class Client {
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
// створити пустий масив, наповнити його 10 об'єктами Client
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// let emptyArray = [
//     new Client(3, 'Liga', 'Giga', 'sg@gmail.com', 30680000001, ['book', 'game', 'ps4']),
//     new Client(1, 'Smeha', 'Rony', 'oli@gmail.com', 30680000002, ['magasine', 'shop', 'ps3']),
//     new Client(2, 'Zipko', 'Tevez', 'zeru@gmail.com', 30680000003, ['football', 'ps5']),
//     new Client(4, 'Study', 'Olivie', 'kosmos@gmail.com', 30680000004, ['hobbis']),
// ];
// console.log(emptyArray);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

// let sortCLients = emptyArray.sort((a, b) => a.order.length - b.order.length);
// console.log(sortCLients)
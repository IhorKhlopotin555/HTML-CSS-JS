// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
let click = document.getElementById('text');
let button = document.getElementById('button');
button.onclick = function () {
    click.style.display = 'none';
}

//     - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
// document.getElementById('button').onclick = function (){
//     document.getElementById('text').hidden = true
// }
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
document.getElementById('button1').onclick = function () {
    let age = document.getElementById('age').value;
    if (!age){
        alert('Please enter your age')
    }
    else if (age < 18) {
        alert('Sorry, but You are minor')
    }
    else {
        alert('Welcome to our website')
    }
}
// - Создайте меню, которое раскрывается/сворачивается при клике
let menuElement = document.querySelector('.menu');
let titleElement = menuElement.querySelector('.title');

titleElement.onclick = function () {
    menuElement.classList.toggle('hidden');
};

//
// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
let comments = [
    {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
    {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
    {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
    {title : 'lorem', body:'lorem ipsum dolo sit ameti'}
]
//     Вывести список комментариев в документ, каждый в своем блоке.
let divFather = document.createElement('div');
for (const item of comments) {
    let div = document.createElement('div');
    let h3 = document.createElement('h3');
    let p = document.createElement('p');
    let btn = document.createElement('button');
    let hr = document.createElement('hr');
//     Добавьте каждому комментарию по кнопке для сворачивания его body.
    h3.innerText = item.name;
    p.innerHTML = item.body;
    btn.innerHTML = 'Hidden'

    btn.onclick = () => {
        p.classList.add('pHidden');
        // btn.previousElementSibling.classList.add('pHidden');  // 2варінт який звертаєтсья до ПОПЕРЕДНЬОГО елементу перед btn
    }
    div.append(h3, p, btn);
    divFather.append(div, hr);
}
document.body.appendChild(divFather)
console.log("Hi, JS-Junior");
var name_junior;
var pass_junior;

var login_input = document.getElementById('login_input');
var pass_input = document.getElementById('pass_input');
var name_string = document.getElementById('name_string');

// -------Проверка возраста-------------- 
/*
var age = prompt("Сколько вам лет?");

while (age < 18) {
    alert("Вам нет 18 чтобы зайти на сайт");
    age = prompt("Сколько вам лет?");
}

alert("Добро пожаловать на сайт!");
*/

function SicUp() {
    if(login_input.value  == name_junior && pass_input.value  == pass_junior)
    {
        name_string.textContent  = name_junior;
        alert("Вход успешно выполнен")
    }else {
        alert("Неправильный логин или пароль")
    }
}

function register() {
    name_junior = prompt("Укажите свой логин");
    pass_junior = prompt("Укажите свой пароль");
    console.log(name_junior, pass_junior);
}
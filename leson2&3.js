/*Урок 2.2 */
/*Задание 1*/
let ab = 10;
alert(ab);

/*Задание 2*/
let year = 'Год выпуска первого айфона 2007';
alert(year);

/*Задание 3*/
let n = 'Создатель проклятого JS - Джеймс Гослинг';
alert (n);

/*Задание 4*/
let d = 10;
let g = 2;
alert(d+g);
alert(d-g);
alert(d*g);
alert(d/g);

/*Задание 5*/
let x = 2;
x**5;
alert(x**5);

/*Задание 6*/
let z = 9;
let b = 2;
alert(z%b);

/*Задание 7*/
let num = 1;
num +=5;
num -= 3;
num *= 7;
num /= 3;
num += 1;
num -= 1;
alert(num);

/*Задание 8*/
let age = prompt('Сколько Вам лет?');
alert(age);

/*Задание 9*/
const user {
    name: 'Sara',
    age: 31,
    isAdmin:false,
    }
    user['city of residence'] = 'Mexico';
    user.age = 43;
    user.dog = mops;
    delete user['city of residence'];
    let info = prompt("Какую информацию хотите узнать о пользователе?");
    console.log(user[info]);
    alert(user[info]);
    

/*Урок 2.3 */
/*Задание 1*/
let password = 'пароль';
let userAnswer = prompt('Введите пароль');
if (userAnswer === password){ 
    alert('Пароль введен верно');
} else {
    alert('Пароль введен неверно');
}

/*Задание 2*/
let c = prompt('запишите в нее любое число');
if (c>0 && c<10) { 
    alert('yes');
} else {
    alert('no');
}

/*Задание 4*/
let a = 2;
let b = 3;
alert (a + b);

/*Задание 3*/
let d = 22, c=99;
if (d>100 || c>100){
    console.log('yes');
} else {
    console.log('no');
}

/*Задание 5*/
let monthNumber = prompt('Введите число месяца');
switch (monthNumber) {
    case '1':
    case '2':
    case '12':
        alert('зима');
        break;
    case '3':
    case '4':
    case '5':
        alert('весна');
        break;
    case '6':
    case '7':
    case '8':
        alert('лето');
        break;
    case '9':
    case '10':
    case '11':
        alert('осень');
        break;
    default: alert('Нет такого');
        break;
}

/*Задание 7*/
let x = prompt('Пожалуйста, введите любое число');
let y =x%2;
if (y===0){
    alert('Число четное');
} else if (y===1) {
    alert('Число нечетное');
} else {
    alert('Это не число')
}

/*Задание 8*/
let clientOS = prompt('Если вы пользуетесь iOS, то введите "0".Если вы пользуетесь Android, то введите "1".');
clientOS = Number(clientOS);
if (clientOS === 1){
    console.log('Установите версию приложения для Android по ссылке');
} else if (clientOS === 0){
    console.log('Установите версию приложения для iOS по ссылке');
} else {
    console.log('Вы ввели не то');
}

/*Задание 9*/
let clientOS = prompt('Если вы пользуетесь iOS, то введите "0".Если вы пользуетесь Android, то введите "1".');
let clientDeviceYear = prompt('Введите год выпуска телефона');
clientDeviceYear = Number(clientDeviceYear);
clientOS = Number(clientOS);
if (clientOS === 1) {
    if (clientDeviceYear < 2015) {
        console.log('Установите облегченную версию приложения для Android по ссылке');
    } else {
        console.log('Установите версию приложения для Android по ссылке');
    }
} else if (clientOS === 0) {
    if (clientDeviceYear < 2015) {
        console.log('Установите облегченную версию приложения для iOS по ссылке');
    } else {
        console.log('Установите версию приложения для iOS по ссылке');
    }
} else {
    console.log('Вы ввели не то');
}



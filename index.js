/*Задание 6*/

let shit = () =>{
    let n = Number(prompt('Введите число'));
    if (n === || isNaN(n) || n === undefined) {
        let n = n**3;
        alert(`n в кубе равняется ${f}`);
    } else {
        alert('Переданный параметр не является числом');
    }
 }

 shit();

/*Задание 5*/

let red = (num3, num4) =>{
    num3 = Number(num3);
    num4 = Number(num4);
if (num3 === isNaN(num3) || num3 === undefined|| num4 === || num4 === isNaN(num4) || num4 === undefined){
    console.log('Одно или оба значения не являются числом');
} else {
let result = num3*num4;
console.log(result);
}
}

red(2,3);

/*Задание 4*/
let age = () => {
    let userAnswer = prompt ('Сколько Вам лет?');
if (userAnswer < 0 || isNaN(userAnswer)) {
    alert('Вы ввели неправильное значение');
} else if (userAnswer <= 12) {
    alert('Привет, друг!');
} else {
    alert('Добро пожаловать!');
}
}

age();

/*Задание 3*/
/*Задание 3.1. */
let squaring = (num1) => сonsole.log(num1**2);

squaring(2);

/*3.2. */
let squaring1 = (number1) => {
    return number1**2;
} 

console.log(squaring1(4));

/*Задание 2*/

let evenNumber =(n) => {
    if ( n % 2 == 0){
        return `Число четное`;
    } else{
        return `Число нечетное`;
    }
}

console.log(evenNumber(4));

/*Задание 1*/

let bigest =(a,b) => {
    if ( a > b){
        return b;
    } else{
        return a;
    }
}

bigest(7, 2);

/*Задание 7*/
function game1 (){
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
    }
    }

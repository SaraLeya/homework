/*Задание 5 не вышло, не получилось*/
let testNumber = (s, f) =>{
let userShit1 = prompt('Введите первое число');
let userShit2 = prompt('Введите второе число');
if (userShit1 === s || userShit2 === s || userShit1 === f || userShit2 === f) {
alert('Одно или оба значения не являются числом');
} else {
    let result =  userShit1 * userShit1;
    alert(result);
}
}

testNumber(NaN, false);

/*Задание 4*/
/* 
let speakUser =(z, g) => {
    let userYears = prompt('сколько вам лет?');
    if (userYears < z){
        alert('Вы ввели неправильное значение');
    } else if(userYears <= g){
        alert('Привет, друг!');
    } else {
        alert('Добро пожаловать!');
}
}
*/
speakUser(0, 12);

/*Задание 3.2*/
/* 
let squareRoot = (p) =>{
    return p**2;
}
console.log(squareRoot(4));
*/

/*Задание 3.1*/
/*
let squareRoot = (p) => p**2;
console.log(squareRoot(2));
*/
/*Задание 2*/
/*
let EvenNumber =(n) => {
    if ( n % 2 == 0){
        alert(`Число четное`);
    } else{
        alert(`Число нечетное`);
    }
}

EvenNumber(4);

/*Задание 1*/
/*
let bigest =(a,b) => {
    if ( a > b){
        alert(b);
    } else{
        alert(a);
    }
}

bigest(7, 2);
*/
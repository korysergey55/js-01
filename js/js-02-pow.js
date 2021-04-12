// Возведение в степень
let userNumber = prompt('Для возведения в степень. Введите число'); //Promt всегда возвращает строку.
userNumber = Number.parseInt(userNumber); //Преобразовываем в число.
console.log(typeof(userNumber));

let userPow = prompt('Введите степень');
userPow = Number.parseInt(userPow);

let result = Math.pow(userNumber, userPow);
alert(`Число ${userNumber} в ${userPow} степени равно ${result}`);

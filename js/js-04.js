// Логические операторы

// Попадает ли участок в отрезок
const x1 = 10;
const x2 = 30;
let userInp = prompt(`Введите число для того чтобы узнать попадает оно в отрезок от ${x1} до ${x2}`);
const userInpNum = Number.parseInt(userInp);
console.log(typeof(userInpNum));
let distanse = userInpNum >= x1 && userInpNum <= x2;
console.log(`Число ${userInpNum} попадает в отрезок от ${x1} до ${x2}?, ${distanse}`);

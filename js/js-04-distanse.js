// Попадает ли участок в отрезок
const x1 = 10;
const x2 = 30;
let userInp = prompt(`Чтобы узнать попадает ли число в отрезок от ${x1} до ${x2}. Введите число`);
const userInpNum = Number.parseInt(userInp);
console.log(typeof(userInpNum));
let distanse = userInpNum >= x1 && userInpNum <= x2;
console.log(`Число ${userInp} попадает в отрезок от ${x1} до ${x2}?, ${distanse}`);

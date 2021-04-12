//узнать тип данных.............typeof
const a = 2000;
const b = 20;
const d = "hello world"
const c = a + b;

console.log(typeof(c));
console.log(typeof(d));
console.log(d, c);

const type = typeof(c);
console.log(type);

const typeInput = typeof(d);
console.log(typeInput);

//преобразование к числу.............Number.parseInt(),Number.parseFloat();
let userName = "30years";
userName = Number.parseInt(userName);  
console.log('My age is', userName, 'years old.');

// Отсечение чисел после запятой.............. toFixed(); // Возвращает строку
let salary = 1300.4457;
salary = salary.toFixed(3);
console.log('toFixed(3)', salary);

// Преведение в нижний регистр.............toLowerCase();
let brand = 'Samsung'
console.log(brand);
console.log(brand.length); // длинна строки
console.log(brand[1]); // индекс элемента в строке

const brandLow = brand.toLowerCase();
console.log(brandLow);

// Поиск в строке................includes();
console.log(brand.includes('Samsung')); // true
console.log(brand.includes('samsung')); // false
console.log(brand.toLowerCase().includes('samsung')); //true
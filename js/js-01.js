//тип данных.............typeof
const a = 10;
const b = 5;
const c = a + b;
const d = "hello world"

console.log(c);
console.log(d, c);
console.log(typeof(c));
console.log(typeof(d));

const type = typeof(c);
console.log(type);

const typeInput = typeof(d);
console.log(typeInput);

//преобразование к числу.............Number.parseInt(),Number.parseFloat();
let serj = "30 years";
serj = Number.parseInt(serj);
console.log('My age is', serj, 'years old');

// Отсечение чисел после запятой.............. toFixed();
let salary = 1300.4457;
salary = salary.toFixed(3);
console.log(salary);

// Преведение в нижний регистр.............toLowerCase();
let brand = 'Samsung'
console.log(brand.length); // длинна строки
console.log(brand[0]); // индекс элемента в строке
const brandLower = brand.toLowerCase();
console.log(brandLower);
console.log(brand);

// Поиск в строке................includes();
console.log(brand.includes('Samsung'));
console.log(brand.includes('samsung'));
console.log(brand.toLowerCase().includes('samsung'));
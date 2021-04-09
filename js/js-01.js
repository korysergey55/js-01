//узнать тип данных.............typeof
const a = 2000;
const b = 20;
const c = a + b;
const d = "hello world"
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
salary = salary.toFixed(2);
console.log('toFixed(2)', salary);

// Преведение в нижний регистр.............toLowerCase();
let brand = 'Samsung'
console.log(brand);
console.log(brand.length); // длинна строки
console.log(brand[0]); // индекс элемента в строке

const brandLower = brand.toLowerCase();
console.log(brandLower);

// Поиск в строке................includes();
console.log(brand.includes('Samsung')); // true
console.log(brand.includes('samsung')); // false
console.log(brand.toLowerCase().includes('samsung')); //true
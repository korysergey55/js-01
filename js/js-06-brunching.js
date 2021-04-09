// Операторы ветвления
const earn = 500;

if(earn >= 5000){
    console.log('Level-1');
}  else if(earn >= 7000){
    console.log('Lavel-2');
} else if (earn >= 10000){
    console.log('Lavel-3');
} else {
    console.log('You are not our client.')
}

// Тернарный оператор
const balanse = 100;
let massage = balanse > 0 ? 'ballanse is pozitiv' : 'balanse is negative';
console.log(massage);
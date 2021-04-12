// Операторы ветвления
const earns = 500;

if(earns >= 500){
    console.log(`In this manth yours salary lavel-1. You earns- ${earns} $.`);
}  else if(earns >= 7000){
    console.log(`In this manth yours salary lavel-1. You earns- ${earns} $.`);
} else if (earns >= 10000){
    console.log(`In this manth yours salary lavel-1. You earns- ${earns} $.`);
} else {
    console.log(`You earns ${earns}$.`)
}

// Тернарный оператор
const balanse = 100;
let massage = balanse > 0 ? 'Yours ballanse is pozitiv' : 'Yours balanse is negative';
console.log(massage);
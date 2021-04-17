// Проверка подписки пользователя

const sub = "demo";

const accaunt = "premium"

const accessCont = sub === "vip" || sub === "pro" || sub === "gold" ;

console.log("Can i access?", accessCont);
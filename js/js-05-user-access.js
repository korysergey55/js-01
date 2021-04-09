// Проверка подписки пользователя

const sub = 'demo';

const accessContent = sub === 'vip' || sub === 'pro' || sub === 'gold';

console.log('Can i access?', accessContent);
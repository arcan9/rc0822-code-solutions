const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

const sum = numbers.reduce((total, num) => {
  return total + num;
}, 0);
console.log('sum:', sum);

const product = numbers.reduce((total, num) => {
  return total * num;
}, 1);
console.log('product:', product);

const balance = account.reduce((total, account) => {
  if (account.type === 'deposit') {
    total += account.amount;
  } else if (account.type === 'withdrawal') {
    total -= account.amount;
  }
  return total;
}, 0);
console.log('balance total:', balance);

const composite = traits.reduce((newObj, traits) => {
  newObj = Object.assign(newObj, traits);
  return newObj;
}, {});
console.log('composite object:', composite);

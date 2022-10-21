const takeAChance = require('./take-a-chance');

const result = takeAChance('Ashelle');

result.then(message => {
  console.log(message);
}).catch(error => {
  console.log(error.message);
});

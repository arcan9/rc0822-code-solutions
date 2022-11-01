fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(data => console.log('USERS:', data));

fetch('https://pokeapi.co/api/v2/pokemon/gengar/')
  .then(res => res.json())
  .then(data => console.log('POKEMON:', data));

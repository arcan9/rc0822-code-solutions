console.log('hello world');

var el = document.querySelector('h1');
console.log('heading', el);

console.dir(el);

var el2 = document.querySelector('#explanation');
console.log('explanation', el2);

console.dir(el2);

var el3 = document.querySelector('.hint');
console.log('hint', el3);

console.dir(el3);

var el4 = document.querySelectorAll('p');
console.log('paragraphs', el4);

var el5 = document.querySelectorAll('.example-link');
console.log('links', el5);

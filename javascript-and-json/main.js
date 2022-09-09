var books = [
  {
    isbn: '9780356510507',
    title: 'Jade City',
    author: 'Fonda Lee'
  },
  {
    isbn: '978-1557427663',
    title: 'The Metamorphosis',
    author: 'Franz Kafka'
  },
  {
    isbn: '978-0062073532',
    title: 'Crooked House',
    author: 'Agatha Christie'
  }
];

console.log('  value of books:', books);
console.log('  type of books:', typeof books);

var jsonValue = JSON.stringify(books);
console.log('value of jsonValue:', jsonValue);
console.log('  type of jsonValue:', typeof jsonValue);

var jsonParsed = JSON.parse(jsonValue);
console.log('value of jsonParsed:', jsonParsed);
console.log('  type of jsonParsed:', typeof jsonParsed);

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

var string = '{"student": "Graham Bell", "numberId": "12345-67"}';

var stringParsed = JSON.parse(string);
console.log('value of stringParsed:', stringParsed);
console.log('  type of stringParsed:', typeof stringParsed);

function ExampleConstructor() {}

console.log('prototype property of ExampleConstructor:', Object.getPrototypeOf(ExampleConstructor));
console.log('typeof prototype property of ExampleConstructor:', typeof Object.getPrototypeOf(ExampleConstructor));

var aConstructor = new ExampleConstructor();
console.log('value of aConstructor:', aConstructor);

var checkIfInstanceOf = aConstructor instanceof ExampleConstructor;
console.log('is aConstructor an instance of ExampleConstructor?', checkIfInstanceOf);

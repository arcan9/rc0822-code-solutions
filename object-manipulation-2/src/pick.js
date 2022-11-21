/* exported pick */

// go through all of the properties of object 'source'
// and check if a property name matches an element in array 'keys.'
// if there is a match, then that key will be added to a new object
// as a property along with the value of the old properties.
// if there is no match, then that property doesn't get added to new object
// it's possible that the new object will return empty if there
// are no property-element matches

function pick(source, keys) {
  var newObj = {};
  var tempArr = [];
  var tempArr2 = [];

  for (var prop in source) {
    tempArr.push(prop);
    tempArr2.push(source[prop]);
  }
  console.log(tempArr);
  console.log(tempArr2);

  for (var i = 0; i < tempArr.length; i++) {
    if (tempArr[i] === keys[i]) {
      newObj[tempArr[i]] = tempArr2[i];
      break;
    }
    console.log(newObj);
    continue;
  }
}

pick({ foo: 1, bar: 2, baz: 3 }, ['foo', 'baz']);

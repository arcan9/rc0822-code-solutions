function getRangeReport(start, end) {
  var object = {
    total:
     ((end - start) + 1) * (start + end) / 2,
    average: (((end - start) + 1) * (start + end) / 2) / ((end - start) + 1),
    range: [],
    odd: [],
    even: []
  };

  for (var i = start; i <= end; i++) {
    object.range.push(i);

    if (i % 2 !== 0) {
      object.odd.push(i);
    }

    if (i % 2 === 0) {
      object.even.push(i);
    }
  }

  console.log(object);
  return object;
}

// TEST
getRangeReport(2, 5);

function filterNumbersGreaterThanFive(numbers) {
  let newNumber = [];
  for (i = 0; i < numbers.length; i++) {
    if (numbers[i] > 5) {
      newNumber.push(numbers[i]);
    }
  }
  return newNumber;
}

const numbers = [2, 8, 4, 10, 1, 7];

console.log(filterNumbersGreaterThanFive(numbers)); // 預期輸出: [8, 10, 7]

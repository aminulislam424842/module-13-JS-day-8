function doubleEvens(numbers) {
  return numbers
    .filter(n => n % 2 ===0) // find the bug
    .map(n => n * 2);
}

console.log(doubleEvens([1, 2, 3, 4, 5, 6])); // Expected: [4,8,12]
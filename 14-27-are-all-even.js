function areAllEven(numbers) {
  return numbers.every(n => n % 2 === 0); 
}

console.log(areAllEven([2, 4, 6, 8])); 
console.log(areAllEven([2, 4, 5, 8]));
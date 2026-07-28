function findMax(arr) {
  let max = -Infinity; // find the bug

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
}

console.log(findMax([-4, -9, -2, -7])); 
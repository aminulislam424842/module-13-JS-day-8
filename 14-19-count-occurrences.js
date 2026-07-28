function countOccurrences(arr) {
  let counts = {};

  for (let i = 0; i < arr.length; i++) {
    counts[arr[i]] = (counts[arr[i]] || 0) + 1;
  }
  return counts;
}

console.log(countOccurrences(["a", "b", "a", "c", "b", "a"]));
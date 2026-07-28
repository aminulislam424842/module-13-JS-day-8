function flattenOneLevel(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(...arr[i]); 
  }

  return result;
}

console.log(flattenOneLevel([[1, 2], [3, 4], [5]]));